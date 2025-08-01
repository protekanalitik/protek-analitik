import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'
import { d1Database, D1Utils } from '@/lib/d1-database'

// Fallback data when D1 is not available - matches website structure
const FALLBACK_CATEGORIES = [
  { id: 'laboratuvar-ekipmanlari', name: 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler' },
  { id: 'proses-kontrol', name: 'Proses Kontrol Ve Hat Tipi Analiz Çözümleri' },
  { id: 'pilot-uretim', name: 'Pilot Tipi Üretim ve Proses Simülasyon Sistemleri' }
]

const FALLBACK_SUBCATEGORIES = [
  // Laboratuvar Ekipmanları subcategories
  { id: 'fiziksel-analiz', category_id: 'laboratuvar-ekipmanlari', name: 'Fiziksel Analiz Ekipmanları' },
  { id: 'kimyasal-analiz', category_id: 'laboratuvar-ekipmanlari', name: 'Kimyasal Analiz Ekipmanları' },
  { id: 'mikrobiyoloji', category_id: 'laboratuvar-ekipmanlari', name: 'Mikrobiyoloji Analiz Ekipmanları' },
  { id: 'molekuler-biyoloji', category_id: 'laboratuvar-ekipmanlari', name: 'Moleküler Biyoloji/Genetik Analiz Ekipmanları' },
  { id: 'test-olcu', category_id: 'laboratuvar-ekipmanlari', name: 'Test, Ölçü Kontrol Sistemleri' },
  { id: 'ambalaj-test', category_id: 'laboratuvar-ekipmanlari', name: 'Ambalaj ve Malzeme Test Sistemleri' },
  { id: 'arge-ekipmanlari', category_id: 'laboratuvar-ekipmanlari', name: 'Araştırma ve Geliştirme Ekipmanları' },
  // Proses Kontrol subcategories
  { id: 'hat-tipi-analiz', category_id: 'proses-kontrol', name: 'Hat Tipi Analiz Sistemleri' },
  { id: 'proses-sensorleri', category_id: 'proses-kontrol', name: 'Proses Sensörleri' },
  // Pilot Üretim subcategories
  { id: 'karistirma', category_id: 'pilot-uretim', name: 'Karıştırma ve Homojenizasyon' },
  { id: 'kurutma-isleme', category_id: 'pilot-uretim', name: 'Kurutma ve İşleme' },
  { id: 'filtrasyon', category_id: 'pilot-uretim', name: 'Filtrasyon ve Separasyon' }
]

// Get all categories and subcategories (public access available)
export async function GET(
  request: NextRequest,
  context?: { env?: any }
) {
  try {
    const url = new URL(request.url)
    const isPublic = url.searchParams.get('public') === 'true'
    
    // For public access, skip authentication
    if (!isPublic) {
      // Authentication check for admin access
      const accessToken = request.cookies.get('accessToken')?.value ||
                         request.headers.get('authorization')?.replace('Bearer ', '')
      
      if (!accessToken) {
        return AuthErrors.MISSING_TOKEN()
      }

      const authResult = await AuthService.verifyAccessToken(accessToken)
      if (!authResult.success) {
        return AuthErrors.INVALID_TOKEN()
      }
    }

    // Check if we need subcategories only (for form use)
    const type = url.searchParams.get('type')
    
    // Try to initialize D1 with environment context from Cloudflare Pages Functions
    const env = context?.env || (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)
    
    if (contextualD1.isAvailable()) {
      // Get from D1 database
      let categories: any[] = []
      let subcategories: any[] = []
      
      if (type === 'subcategories') {
        const subResult = await contextualD1.getRecords('subcategories', {
          orderBy: 'name ASC'
        })
        subcategories = subResult.success ? (subResult.data || []) : []
      } else {
        const catResult = await contextualD1.getRecords('categories', {
          orderBy: 'name ASC'
        })
        categories = catResult.success ? (catResult.data || []) : []
        
        const subResult = await contextualD1.getRecords('subcategories', {
          orderBy: 'name ASC'
        })
        subcategories = subResult.success ? (subResult.data || []) : []
      }
      
      return createSuccessResponse(
        type === 'subcategories' ? subcategories : {
          categories,
          subcategories
        },
        'Categories fetched successfully',
        {
          totalCategories: categories.length,
          totalSubcategories: subcategories.length,
          source: 'D1'
        }
      )
    } else {
      // Fallback to static data
      return createSuccessResponse(
        type === 'subcategories' ? FALLBACK_SUBCATEGORIES : {
          categories: FALLBACK_CATEGORIES,
          subcategories: FALLBACK_SUBCATEGORIES
        },
        'Categories fetched successfully (fallback)',
        {
          totalCategories: FALLBACK_CATEGORIES.length,
          totalSubcategories: FALLBACK_SUBCATEGORIES.length,
          source: 'fallback'
        }
      )
    }
    
  } catch (error) {
    console.error('Categories fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch categories')
  }
}

// Create new category or subcategory
export async function POST(
  request: NextRequest,
  context?: { env?: any }
) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return AuthErrors.MISSING_TOKEN()
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)

    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: authResult.error || 'Yetkisiz erişim' },
        { status: 401 }
      )
    }

    if (!AuthService.hasRole(authResult.user!, 'admin')) {
      return NextResponse.json(
        { success: false, error: 'Bu işlem için admin yetkisi gereklidir' },
        { status: 403 }
      )
    }

    // Try to initialize D1 with environment context from Cloudflare Pages Functions
    const env = context?.env || (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)

    if (!contextualD1.isAvailable()) {
      return createErrorResponse('Database not available', 'DB_UNAVAILABLE', 503)
    }

    const categoryData = await request.json()
    
    // Determine if this is a category or subcategory
    const isSubcategory = Boolean(categoryData.category_id)
    
    // Validate required fields
    const requiredFields = ['name']
    if (isSubcategory) {
      requiredFields.push('category_id')
    }
    
    const validation = validateRequiredFields(categoryData, requiredFields)
    
    if (!validation.isValid) {
      return createErrorResponse(
        `Missing required fields: ${validation.missingFields.join(', ')}`,
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    // Validate data types and formats
    const errors: string[] = []
    
    if (typeof categoryData.name !== 'string' || categoryData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long')
    }
    
    if (errors.length > 0) {
      return createErrorResponse(
        'Validation failed',
        'VALIDATION_ERROR',
        400,
        { errors }
      )
    }
    
    // Generate ID and prepare data
    const itemId = D1Utils.generateId()
    const now = D1Utils.formatDate()
    
    const newItem: any = {
      id: itemId,
      name: categoryData.name.trim(),
      description: categoryData.description?.trim() || '',
      image_url: categoryData.image_url || '',
      is_active: categoryData.is_active !== false,
      created_at: now,
      updated_at: now
    }
    
    // Add category-specific or subcategory-specific fields
    if (isSubcategory) {
      newItem.category_id = categoryData.category_id
    }
    
    // Insert into D1
    const tableName = isSubcategory ? 'subcategories' : 'categories'
    const insertResult = await contextualD1.insertRecord(tableName, newItem)
    
    if (!insertResult.success) {
      return createErrorResponse(
        insertResult.error || 'Failed to create item',
        'CREATE_FAILED'
      )
    }
    
    console.log(`${isSubcategory ? 'Subcategory' : 'Category'} created: ${newItem.id}`)
    
    return DatabaseResponses.CREATED(newItem, isSubcategory ? 'Subcategory' : 'Category')
    
  } catch (error) {
    console.error('Category creation error:', error)
    return CommonErrors.SERVER_ERROR('Failed to create category')
  }
}
