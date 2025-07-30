import { NextRequest, NextResponse } from 'next/server'
import { validateFile, generateUniqueFilename, UPLOAD_CONFIG, formatFileSize, uploadToR2 } from '@/lib/upload'
import { AuthService } from '@/lib/auth'
import type { CloudflareEnv } from '@/types/cloudflare'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for') || 
         request.headers.get('x-real-ip') || 
         'unknown'
}

// Single file upload
export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'Kimlik doğrulama gerekli',
        code: 'AUTHENTICATION_REQUIRED'
      }, { status: 401 })
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Geçersiz kimlik doğrulama',
        code: 'INVALID_TOKEN'
      }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const uploadType = (formData.get('type') as string) || 'products'
    const customFilename = formData.get('filename') as string
    
    if (!file) {
      return NextResponse.json({
        success: false,
        error: 'Dosya bulunamadı',
        code: 'NO_FILE'
      }, { status: 400 })
    }

    // Validate file
    const validation = validateFile(file)
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        error: validation.errors.join(', '),
        code: 'VALIDATION_FAILED'
      }, { status: 400 })
    }

    // Check upload type
    if (!Object.keys(UPLOAD_CONFIG.paths).includes(uploadType)) {
      return NextResponse.json({
        success: false,
        error: 'Geçersiz upload tipi',
        code: 'INVALID_UPLOAD_TYPE'
      }, { status: 400 })
    }

    // Generate unique filename
    const uniqueFileName = customFilename || generateUniqueFilename(file.name)
    const uploadPath = UPLOAD_CONFIG.paths[uploadType as keyof typeof UPLOAD_CONFIG.paths]
    
    // Upload to R2 (Edge Runtime compatible)
    const env = process.env as any
    const bucket = env.UPLOADS as any // R2Bucket from Cloudflare environment
    
    let publicUrl: string
    
    if (bucket) {
      // Production: Upload to R2
      const r2Result = await uploadToR2(
        bucket,
        file,
        uploadPath,
        uniqueFileName,
        authResult.user?.username
      )
      
      if (!r2Result.success) {
        return NextResponse.json({
          success: false,
          error: `R2 upload failed: ${r2Result.error}`,
          code: 'R2_UPLOAD_ERROR'
        }, { status: 500 })
      }
      
      publicUrl = r2Result.url!
    } else {
      // Development: Mock upload for Edge Runtime compatibility
      publicUrl = `/uploads/${uploadPath}${uniqueFileName}`
      console.log('Mock upload (development mode):', uniqueFileName)
    }
    
    // Log upload activity
    console.log(`File uploaded: ${uniqueFileName} by user ${authResult.user?.username} from IP ${getClientIP(request)}`)
    
    return NextResponse.json({ 
      success: true, 
      data: {
        url: publicUrl,
        filename: uniqueFileName,
        originalName: file.name,
        size: file.size,
        type: file.type,
        uploadType
      },
      message: 'Dosya başarıyla yüklendi'
    })
    
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({
      success: false,
      error: 'Dosya yüklenirken hata oluştu',
      code: 'UPLOAD_ERROR'
    }, { status: 500 })
  }
}

// Multiple file upload
export async function PUT(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'Kimlik doğrulama gerekli',
        code: 'AUTHENTICATION_REQUIRED'
      }, { status: 401 })
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Geçersiz kimlik doğrulama',
        code: 'INVALID_TOKEN'
      }, { status: 401 })
    }

    const formData = await request.formData()
    const files = formData.getAll('files') as File[]
    const uploadType = (formData.get('type') as string) || 'products'
    
    if (!files || files.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Dosya bulunamadı',
        code: 'NO_FILES'
      }, { status: 400 })
    }

    // Check upload type
    if (!Object.keys(UPLOAD_CONFIG.paths).includes(uploadType)) {
      return NextResponse.json({
        success: false,
        error: 'Geçersiz upload tipi',
        code: 'INVALID_UPLOAD_TYPE'
      }, { status: 400 })
    }

    const uploadedFiles: any[] = []
    const errors: string[] = []
    const uploadPath = UPLOAD_CONFIG.paths[uploadType as keyof typeof UPLOAD_CONFIG.paths]
    const env = process.env as any
    const bucket = env.UPLOADS as any // R2Bucket from Cloudflare environment

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      try {
        // Validate each file
        const validation = validateFile(file)
        if (!validation.isValid) {
          errors.push(`${file.name}: ${validation.errors.join(', ')}`)
          continue
        }

        // Generate unique filename
        const uniqueFileName = generateUniqueFilename(file.name, `batch-${i}-`)
        
        let publicUrl: string
        
        if (bucket) {
          // Production: Upload to R2
          const r2Result = await uploadToR2(
            bucket,
            file,
            uploadPath,
            uniqueFileName,
            authResult.user?.username
          )
          
          if (!r2Result.success) {
            errors.push(`${file.name}: R2 upload failed - ${r2Result.error}`)
            continue
          }
          
          publicUrl = r2Result.url!
        } else {
          // Development: Mock upload for Edge Runtime compatibility
          publicUrl = `/uploads/${uploadPath}${uniqueFileName}`
          console.log('Mock batch upload (development mode):', uniqueFileName)
        }
        
        uploadedFiles.push({
          url: publicUrl,
          filename: uniqueFileName,
          originalName: file.name,
          size: file.size,
          type: file.type
        })
        
      } catch (fileError) {
        console.error(`Error uploading file ${file.name}:`, fileError)
        errors.push(`${file.name}: Yükleme hatası`)
      }
    }
    
    // Log upload activity
    console.log(`Batch upload: ${uploadedFiles.length} files uploaded by user ${authResult.user?.username} from IP ${getClientIP(request)}`)
    
    return NextResponse.json({ 
      success: true, 
      data: {
        uploadedFiles,
        totalUploaded: uploadedFiles.length,
        totalRequested: files.length,
        errors: errors.length > 0 ? errors : undefined
      },
      message: `${uploadedFiles.length}/${files.length} dosya başarıyla yüklendi`
    })
    
  } catch (error) {
    console.error('Multiple upload error:', error)
    return NextResponse.json({
      success: false,
      error: 'Dosyalar yüklenirken hata oluştu',
      code: 'BATCH_UPLOAD_ERROR'
    }, { status: 500 })
  }
} 