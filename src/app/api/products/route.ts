// Products API with Cloudflare D1 Integration
import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'
import { d1Database, D1Utils, D1Product } from '@/lib/d1-database'
import { getAllProducts } from '@/data/products'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Standard response helpers
function successResponse(data: any, message: string = 'Success', meta: any = {}) {
  return NextResponse.json({
    success: true,
    message,
    data,
    meta
  })
}

function errorResponse(error: string, code: string = 'ERROR', status: number = 500) {
  return NextResponse.json({
    success: false,
    error,
    code
  }, { status })
}

// Fallback products for development when D1 is not available
const FALLBACK_PRODUCTS = [
  {
    id: 'dr-a1-refraktometre',
    name: 'Digital Refraktometre DR-A1',
    description: 'Brix ve refraktif indeks tayini için otomatik sıcaklık kompanzasyonlu dijital refraktometre',
    category_id: 'lab-equipment',
    subcategory_id: 'fiziksel-analiz',
    image: '/images/lab-1.jpg',
    features: ['Otomatik sıcaklık kompanzasyonu', 'Su geçirmez tasarım', 'Kolay kalibasyon'],
    applications: ['Gıda endüstrisi', 'İçecek üretimi', 'Şeker analizi'],
    is_featured: true,
    is_active: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

// GET - Fetch products with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const isPublic = searchParams.get('public') === 'true'
    
    // For public access, skip authentication
    if (!isPublic) {
      // Authentication check for admin access
      const accessToken = request.cookies.get('accessToken')?.value ||
                         request.headers.get('authorization')?.replace('Bearer ', '')
      
      if (!accessToken) {
        return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
      }

      const authResult = await AuthService.verifyAccessToken(accessToken)
      if (!authResult.success) {
        return errorResponse('Invalid authentication', 'AUTH_FAILED', 401)
      }
    }

    const page = parseInt(searchParams.get('page') || '1')
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100)
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const featured = searchParams.get('featured') === 'true'
    const sortBy = searchParams.get('sortBy') || 'created_at'
    const sortOrder = searchParams.get('sortOrder') || 'DESC'

    // Initialize D1 with Cloudflare Pages getRequestContext
    let d1Database: any
    try {
      const { getRequestContext } = await import('@cloudflare/next-on-pages')
      const context = getRequestContext()
      const { D1DatabaseManager } = await import('@/lib/d1-database')
      d1Database = new D1DatabaseManager(context?.env)
    } catch (error) {
      // Fallback for non-Cloudflare environments
      const { D1DatabaseManager } = await import('@/lib/d1-database')
      d1Database = new D1DatabaseManager()
    }
    
    // Debug: Check D1 binding status
    console.log('🔍 D1 Debug Info:', {
      globalThis_DB: typeof (globalThis as any).DB,
      d1Database_available: d1Database.isAvailable(),
      runtime: 'edge'
    })

    // Try D1 database first
    if (d1Database.isAvailable()) {
      // Build WHERE clause
      const conditions: string[] = ['is_active = 1']
      const params: any[] = []

      if (search) {
        conditions.push('(name LIKE ? OR description LIKE ?)')
        params.push(`%${search}%`, `%${search}%`)
      }

      if (category) {
        conditions.push('category_id = ?')
        params.push(category)
      }

      if (featured) {
        conditions.push('is_featured = 1')
      }

      const whereClause = conditions.join(' AND ')
      const offset = (page - 1) * limit

      const result = await d1Database.getRecords<D1Product>('products', {
        where: whereClause,
        params,
        orderBy: `${sortBy} ${sortOrder}`,
        limit,
        offset
      })

      if (result.success) {
        // Process products (parse JSON fields)
        const products = result.data?.map(product => ({
          ...product,
          images: D1Utils.fromJson<string[]>(product.images || null) || [],
          features: D1Utils.fromJson<string[]>(product.features || null) || [],
          applications: D1Utils.fromJson<string[]>(product.applications || null) || [],
          specifications: D1Utils.fromJson<Record<string, string>>(product.specifications || null) || {},
          catalog_files: D1Utils.fromJson<string[]>(product.catalog_files || null) || []
        })) || []

        return successResponse(products, 'Products fetched successfully', {
          pagination: {
            page,
            limit,
            total: result.total || 0,
            totalPages: Math.ceil((result.total || 0) / limit)
          }
        })
      }
    }

    // Fallback to static products + fallback data
    const originalProducts = getAllProducts()
    const allProducts = [...FALLBACK_PRODUCTS, ...originalProducts]
    
    return successResponse(allProducts, 'Products fetched successfully (fallback)', {
      total: allProducts.length,
      source: 'fallback'
    })
    
  } catch (error) {
    console.error('Products fetch error:', error)
    return errorResponse('Internal server error', 'SERVER_ERROR')
  }
}

// POST - Create new product (admin only)
export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')

    if (!accessToken) {
      return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success) {
      return errorResponse('Invalid authentication', 'AUTH_FAILED', 401)
    }

    // Role check (admin or super_admin only)
    if (!AuthService.hasRole(authResult.user!, 'admin')) {
      return errorResponse('Insufficient permissions', 'PERMISSION_DENIED', 403)
    }

    const body = await request.json()
    
    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)
    
    // Check if D1 is available for database operations
    const useD1 = contextualD1.isAvailable()
    
    if (!useD1) {
      console.log('D1 database not available, creating mock success response for development')
      // Return mock success for development
      return successResponse(
        {
          id: `mock-${Date.now()}`,
          ...body,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        'Product created successfully (development mode)',
        { source: 'fallback', created_by: authResult.user!.username }
      )
    }

    // Validation (only for D1 mode)
    const requiredFields = ['name', 'category_id', 'subcategory_id']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return errorResponse(
        `Missing required fields: ${missingFields.join(', ')}`,
        'VALIDATION_ERROR',
        400
      )
    }

    // Generate ID and prepare data
    const productId = D1Utils.generateId()
    const now = D1Utils.formatDate()

    const productData: Partial<D1Product> = {
      id: productId,
      name: body.name.trim(),
      description: body.description?.trim() || undefined,
      overview: body.overview?.trim() || undefined,
      category_id: body.category_id,
      subcategory_id: body.subcategory_id,
      image: body.image || undefined,
      images: body.images ? D1Utils.toJson(body.images) : undefined,
      features: body.features ? D1Utils.toJson(body.features) : undefined,
      applications: body.applications ? D1Utils.toJson(body.applications) : undefined,
      specifications: body.specifications ? D1Utils.toJson(body.specifications) : undefined,
      data_sheet: body.data_sheet || undefined,
      catalog_files: body.catalog_files ? D1Utils.toJson(body.catalog_files) : undefined,
      price: body.price || undefined,
      is_warrantied: Boolean(body.is_warrantied),
      has_free_shipping: Boolean(body.has_free_shipping),
      is_featured: Boolean(body.is_featured),
      is_active: body.is_active !== false,
      display_order: body.display_order || 0,
      meta_title: body.meta_title?.trim() || undefined,
      meta_description: body.meta_description?.trim() || undefined,
      meta_keywords: body.meta_keywords?.trim() || undefined,
      created_at: now,
      updated_at: now
    }

    // Insert product
    const insertResult = await contextualD1.insertRecord('products', productData)

    if (!insertResult.success) {
      return errorResponse(
        insertResult.error || 'Failed to create product',
        'CREATE_FAILED'
      )
    }

    return successResponse(
      { id: productId, ...productData },
      'Product created successfully',
      { created_by: authResult.user!.username }
    )

  } catch (error) {
    console.error('Products POST error:', error)
    return errorResponse('Internal server error', 'SERVER_ERROR')
  }
}

// PUT - Update product (admin only)
export async function PUT(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')

    if (!accessToken) {
      return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
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

    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)

    if (!contextualD1.isAvailable()) {
      return errorResponse('Database not available', 'DB_UNAVAILABLE', 503)
    }

    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return errorResponse('Product ID is required', 'VALIDATION_ERROR', 400)
    }

    // Check if product exists
    const existingProduct = await contextualD1.getRecordById<D1Product>('products', id)
    if (!existingProduct.success || !existingProduct.data) {
      return errorResponse('Product not found', 'NOT_FOUND', 404)
    }

    // Prepare update data
    const now = D1Utils.formatDate()
    const productUpdateData: any = {
      ...updateData,
      updated_at: now
    }

    // Handle JSON fields
    if (updateData.images) productUpdateData.images = D1Utils.toJson(updateData.images)
    if (updateData.features) productUpdateData.features = D1Utils.toJson(updateData.features)
    if (updateData.applications) productUpdateData.applications = D1Utils.toJson(updateData.applications)
    if (updateData.specifications) productUpdateData.specifications = D1Utils.toJson(updateData.specifications)
    if (updateData.catalog_files) productUpdateData.catalog_files = D1Utils.toJson(updateData.catalog_files)

    // Update product
    const updateResult = await contextualD1.updateRecord('products', id, productUpdateData)

    if (!updateResult.success) {
      return errorResponse(
        updateResult.error || 'Failed to update product',
        'UPDATE_FAILED'
      )
    }

    return successResponse(
      { id, ...productUpdateData },
      'Product updated successfully',
      { updated_by: authResult.user!.username }
    )

  } catch (error) {
    console.error('Products PUT error:', error)
    return errorResponse('Internal server error', 'SERVER_ERROR')
  }
}

// DELETE - Delete product (admin only)
export async function DELETE(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')

    if (!accessToken) {
      return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
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

    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)

    if (!contextualD1.isAvailable()) {
      return errorResponse('Database not available', 'DB_UNAVAILABLE', 503)
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return errorResponse('Product ID is required', 'VALIDATION_ERROR', 400)
    }

    // Check if product exists
    const existingProduct = await contextualD1.getRecordById<D1Product>('products', id)
    if (!existingProduct.success || !existingProduct.data) {
      return errorResponse('Product not found', 'NOT_FOUND', 404)
    }

    // Delete product
    const deleteResult = await contextualD1.deleteRecord('products', id)

    if (!deleteResult.success) {
      return errorResponse(
        deleteResult.error || 'Failed to delete product',
        'DELETE_FAILED'
      )
    }

    return successResponse(
      { id },
      'Product deleted successfully',
      { deleted_by: authResult.user!.username }
    )

  } catch (error) {
    console.error('Products DELETE error:', error)
    return errorResponse('Internal server error', 'SERVER_ERROR')
  }
}
