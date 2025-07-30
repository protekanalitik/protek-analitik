// File upload utilities for Cloudflare R2
import { R2Bucket } from '@cloudflare/workers-types'

// Upload configuration
export const UPLOAD_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: {
    images: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
    documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    spreadsheets: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    presentations: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
  },
  paths: {
    products: 'products/',
    news: 'news/',
    events: 'events/',
    documents: 'documents/',
    temp: 'temp/'
  }
}

// File validation
export interface FileValidationResult {
  isValid: boolean
  errors: string[]
  fileInfo?: {
    name: string
    size: number
    type: string
    extension: string
  }
}

export function validateFile(file: File, allowedTypes?: string[]): FileValidationResult {
  const errors: string[] = []
  
  // Check file size
  if (file.size > UPLOAD_CONFIG.maxFileSize) {
    errors.push(`Dosya boyutu ${UPLOAD_CONFIG.maxFileSize / (1024 * 1024)}MB'dan büyük olamaz`)
  }
  
  // Check file type
  const allAllowedTypes = allowedTypes || [
    ...UPLOAD_CONFIG.allowedTypes.images,
    ...UPLOAD_CONFIG.allowedTypes.documents,
    ...UPLOAD_CONFIG.allowedTypes.spreadsheets,
    ...UPLOAD_CONFIG.allowedTypes.presentations
  ]
  
  if (!allAllowedTypes.includes(file.type)) {
    errors.push('Desteklenmeyen dosya türü')
  }
  
  // Get file extension
  const extension = file.name.split('.').pop()?.toLowerCase() || ''
  
  return {
    isValid: errors.length === 0,
    errors,
    fileInfo: {
      name: file.name,
      size: file.size,
      type: file.type,
      extension
    }
  }
}

// Generate unique filename
export function generateUniqueFilename(originalName: string, prefix: string = ''): string {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 8)
  const extension = originalName.split('.').pop()
  const nameWithoutExt = originalName.split('.').slice(0, -1).join('.')
  
  // Sanitize filename
  const sanitizedName = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  
  const filename = `${prefix}${timestamp}-${randomString}-${sanitizedName}.${extension}`
  return filename
}

// Upload to R2 (for Cloudflare Workers environment)
export async function uploadToR2(
  bucket: R2Bucket,
  file: File,
  path: string,
  filename?: string,
  uploadedBy?: string
): Promise<{ success: boolean; url?: string; error?: string; key?: string }> {
  try {
    const finalFilename = filename || generateUniqueFilename(file.name)
    const key = `${path}${finalFilename}`
    
    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()
    
    // Upload to R2
    await bucket.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
        contentDisposition: `inline; filename="${file.name}"`
      },
      customMetadata: {
        originalName: file.name,
        uploadedAt: new Date().toISOString(),
        size: file.size.toString(),
        mimeType: file.type,
        uploadedBy: uploadedBy || 'system'
      }
    })
    
    // Generate public URL using R2 dev domain
    const publicUrl = `https://pub-94c47ebc7b14458eb1e09b63a8768d72.r2.dev/${key}`
    
    return {
      success: true,
      url: publicUrl,
      key
    }
  } catch (error) {
    console.error('R2 upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    }
  }
}

// Upload to local filesystem (for development)
export async function uploadToLocal(
  file: File,
  path: string,
  filename?: string
): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const finalFilename = filename || generateUniqueFilename(file.name)
    
    // Create FormData for the upload
    const formData = new FormData()
    formData.append('file', file)
    formData.append('path', path)
    formData.append('filename', finalFilename)
    
    // Upload via API
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    
    const result = await response.json()
    
    if (result.success) {
      return {
        success: true,
        url: result.url
      }
    } else {
      return {
        success: false,
        error: result.error || 'Upload failed'
      }
    }
  } catch (error) {
    console.error('Local upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    }
  }
}

// Main upload function that chooses between R2 and local based on environment
export async function uploadFile(
  file: File,
  uploadType: keyof typeof UPLOAD_CONFIG.paths,
  filename?: string,
  bucket?: R2Bucket
): Promise<{ success: boolean; url?: string; error?: string }> {
  // Validate file first
  const validation = validateFile(file)
  if (!validation.isValid) {
    return {
      success: false,
      error: validation.errors.join(', ')
    }
  }
  
  const path = UPLOAD_CONFIG.paths[uploadType]
  
  // Use R2 in production, local in development
  if (process.env.NODE_ENV === 'production' && bucket) {
    return uploadToR2(bucket, file, path, filename)
  } else {
    return uploadToLocal(file, path, filename)
  }
}

// Delete file from R2
export async function deleteFromR2(
  bucket: R2Bucket,
  key: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await bucket.delete(key)
    return { success: true }
  } catch (error) {
    console.error('R2 delete error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Delete failed'
    }
  }
}

// Get file info from R2
export async function getFileInfoFromR2(
  bucket: R2Bucket,
  key: string
): Promise<{ success: boolean; fileInfo?: any; error?: string }> {
  try {
    const object = await bucket.head(key)
    if (!object) {
      return {
        success: false,
        error: 'File not found'
      }
    }
    
    return {
      success: true,
      fileInfo: {
        key,
        size: object.size,
        etag: object.etag,
        uploaded: object.uploaded,
        httpMetadata: object.httpMetadata,
        customMetadata: object.customMetadata
      }
    }
  } catch (error) {
    console.error('R2 file info error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get file info'
    }
  }
}

// Image optimization utilities
export function getOptimizedImageUrl(originalUrl: string, width?: number, height?: number, quality?: number): string {
  // If using Cloudflare Images, you can add transformation parameters
  // For now, return original URL
  if (!width && !height && !quality) {
    return originalUrl
  }
  
  // Add query parameters for image optimization
  const url = new URL(originalUrl)
  if (width) url.searchParams.set('w', width.toString())
  if (height) url.searchParams.set('h', height.toString())
  if (quality) url.searchParams.set('q', quality.toString())
  
  return url.toString()
}

// Generate thumbnail URL
export function getThumbnailUrl(originalUrl: string, size: number = 150): string {
  return getOptimizedImageUrl(originalUrl, size, size, 80)
}

// Check if file is an image
export function isImage(mimeType: string): boolean {
  return UPLOAD_CONFIG.allowedTypes.images.includes(mimeType)
}

// Check if file is a document
export function isDocument(mimeType: string): boolean {
  return [
    ...UPLOAD_CONFIG.allowedTypes.documents,
    ...UPLOAD_CONFIG.allowedTypes.spreadsheets,
    ...UPLOAD_CONFIG.allowedTypes.presentations
  ].includes(mimeType)
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
