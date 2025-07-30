// Single Product API - Cloudflare D1 Integration
import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'
import { d1Database, D1Utils, D1Product } from '@/lib/d1-database'

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

// Fallback products for development (matching D1 data)
const FALLBACK_PRODUCTS = [
  {
    id: 'brix-001',
    name: 'Digital Refraktometre DR-A1',
    description: 'Brix ve refraktif indeks tayini için otomatik sıcaklık kompanzasyonlu dijital refraktometre',
    overview: 'Gıda endüstrisinde şeker içeriği ölçümü için kullanılan hassas refraktometre',
    category_id: 'laboratuvar-ekipmanlari',
    subcategory_id: 'fiziksel-analiz',
    image: '/images/refraktometre-dr-a1.jpg',
    images: ['/images/refraktometre-dr-a1.jpg', '/images/refraktometre-dr-a1-detail.jpg'],
    features: ['Otomatik sıcaklık kompanzasyonu (ATC)', 'Su geçirmez tasarım (IP65)', 'Kolay kalibasyon', 'LED ışık kaynağı', '0-32% Brix ölçüm aralığı'],
    applications: ['Gıda endüstrisi', 'İçecek üretimi', 'Şeker analizi', 'Meyve suyu kontrolü', 'Kalite kontrol'],
    specifications: {
      'Ölçüm Aralığı': '0-32% Brix',
      'Çözünürlük': '0.2% Brix',
      'Doğruluk': '±0.2% Brix',
      'Sıcaklık Kompanzasyonu': '10-40°C',
      'Su Geçirmezlik': 'IP65',
      'Pil Ömrü': '2000 saat'
    },
    price: '₺8,500',
    is_warrantied: true,
    has_free_shipping: true,
    is_featured: true,
    is_active: true,
    display_order: 1,
    meta_title: 'Digital Refraktometre DR-A1 - Brix Ölçümü',
    meta_description: 'Professional brix ölçümü için otomatik sıcaklık kompanzasyonlu digital refraktometre',
    meta_keywords: 'refraktometre, brix, şeker ölçümü, digital refraktometre',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'su-aktivite-001',
    name: 'AquaLab 4TE Su Aktivite Ölçer',
    description: 'Gıda güvenliği ve kalite kontrolü için yüksek hassasiyetli su aktivite ölçer',
    overview: 'Mikrobiyal gelişimi tahmin etmek ve raf ömrünü belirlemek için kritik su aktivite ölçümü',
    category_id: 'laboratuvar-ekipmanlari',
    subcategory_id: 'fiziksel-analiz',
    image: '/images/aqualab-4te.jpg',
    images: ['/images/aqualab-4te.jpg', '/images/aqualab-4te-detail.jpg'],
    features: ['±0.003 aw doğruluk', 'Hızlı ölçüm (5 dakika)', 'Otomatik kalibrasyon', 'USB bağlantısı', 'Dahili yazıcı'],
    applications: ['Gıda güvenliği', 'Kalite kontrol', 'Raf ömrü çalışmaları', 'Formülasyon geliştirme', 'Araştırma-geliştirme'],
    specifications: {
      'Ölçüm Aralığı': '0.030 - 1.000 aw',
      'Doğruluk': '±0.003 aw',
      'Çözünürlük': '0.001 aw',
      'Ölçüm Süresi': '5 dakika',
      'Sıcaklık Aralığı': '15-50°C',
      'Örneklem Hacmi': '7 ml'
    },
    price: '₺45,000',
    is_warrantied: true,
    has_free_shipping: true,
    is_featured: true,
    is_active: true,
    display_order: 2,
    meta_title: 'AquaLab 4TE Su Aktivite Ölçer - Gıda Güvenliği',
    meta_description: 'Professional su aktivite ölçer ile gıda güvenliği ve kalite kontrolü',
    meta_keywords: 'su aktivite, water activity, aqualab, gıda güvenliği',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'magnetik-karistirici-ms300',
    name: 'Magnetik Karıştırıcı MS-300',
    description: 'Laboratuvar çözeltilerinin homojen karıştırılması için dijital magnetik karıştırıcı',
    overview: 'Hassas karıştırma hızı kontrolü ile laboratuvar çalışmaları için ideal',
    category_id: 'laboratuvar-ekipmanlari',
    subcategory_id: 'genel-lab',
    image: '/images/magnetik-karistirici-ms300.jpg',
    images: ['/images/magnetik-karistirici-ms300.jpg', '/images/magnetik-karistirici-ms300-detail.jpg'],
    features: ['Dijital hız kontrolü', 'LED gösterge', 'Sessiz çalışma', 'Anti-kayma taban', 'Zamanlayıcı'],
    applications: ['Çözelti hazırlama', 'Titrasyonlar', 'Ekstraksiyon', 'Reaksiyon karıştırma', 'Analitik kimya'],
    specifications: {
      'Hız Aralığı': '50-1500 rpm',
      'Karıştırma Kapasitesi': '3000 ml',
      'Plaka Boyutu': '135x135 mm',
      'Güç': '25W',
      'Zamanlayıcı': '1-999 dakika',
      'Boyutlar': '200x200x85 mm'
    },
    price: '₺3,200',
    is_warrantied: true,
    has_free_shipping: true,
    is_featured: false,
    is_active: true,
    display_order: 3,
    meta_title: 'Magnetik Karıştırıcı MS-300 - Dijital Kontrol',
    meta_description: 'Professional magnetik karıştırıcı ile laboratuvar çözeltilerinin hassas karıştırılması',
    meta_keywords: 'magnetik karıştırıcı, magnetic stirrer, laboratuvar',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

// GET - Fetch single product by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // Check D1 database availability
    const useD1 = d1Database !== null
    
    if (useD1) {
      try {
        // Fetch product from D1 database
        const product = await D1Utils.getProductById(id)
        
        if (!product) {
          return errorResponse('Product not found', 'PRODUCT_NOT_FOUND', 404)
        }
        
        return successResponse(product, 'Product fetched successfully', {
          source: 'd1_database',
          product_id: id
        })
      } catch (d1Error) {
        console.error('D1 database error:', d1Error)
        // Fall back to development mode
      }
    }
    
    // Development mode fallback
    console.log('⚠️ D1 database not available - using fallback data')
    
    const fallbackProduct = FALLBACK_PRODUCTS.find(p => p.id === id)
    if (fallbackProduct) {
      return successResponse(fallbackProduct, 'Product fetched successfully (development mode)', {
        source: 'fallback',
        product_id: id
      })
    }
    
    return errorResponse('Product not found in development mode', 'PRODUCT_NOT_FOUND_DEV', 404)
    
  } catch (error) {
    console.error('❌ GET /api/products/[id] error:', error)
    return errorResponse('Error fetching product', 'FETCH_ERROR', 500)
  }
}

// PUT - Update product by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
    }
    
    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success || !authResult.user) {
      return errorResponse('Invalid or expired token', 'INVALID_TOKEN', 401)
    }
    
    // Role check
    if (!['super_admin', 'admin', 'editor'].includes(authResult.user.role)) {
      return errorResponse('Insufficient permissions', 'INSUFFICIENT_PERMISSIONS', 403)
    }
    
    const productId = params.id
    const updatedProduct = await request.json()
    
    // Validation
    if (!updatedProduct.name) {
      return errorResponse('Product name is required', 'VALIDATION_ERROR', 400)
    }
    
    // Check D1 database availability
    const useD1 = d1Database !== null
    
    if (useD1) {
      try {
        // Update product in D1 database
        const product = await D1Utils.updateProduct(productId, updatedProduct)
        
        return successResponse(product, 'Product updated successfully', {
          source: 'd1_database',
          updated_by: authResult.user.username
        })
      } catch (d1Error) {
        console.error('D1 database error:', d1Error)
        return errorResponse('Failed to update product in database', 'DATABASE_ERROR', 500)
      }
    }
    
    // Development mode - return mock success
    console.log('⚠️ D1 database not available - mock update')
    return successResponse({
      id: productId,
      ...updatedProduct,
      updated_at: new Date().toISOString()
    }, 'Product updated successfully (development mode)', {
      source: 'fallback',
      updated_by: authResult.user.username
    })
    
  } catch (error) {
    console.error('❌ PUT /api/products/[id] error:', error)
    return errorResponse('Error updating product', 'UPDATE_ERROR', 500)
  }
}

// DELETE - Delete product by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return errorResponse('Authentication required', 'AUTH_REQUIRED', 401)
    }
    
    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success || !authResult.user) {
      return errorResponse('Invalid or expired token', 'INVALID_TOKEN', 401)
    }
    
    // Role check (only super_admin and admin can delete)
    if (!['super_admin', 'admin'].includes(authResult.user.role)) {
      return errorResponse('Insufficient permissions', 'INSUFFICIENT_PERMISSIONS', 403)
    }
    
    const productId = params.id
    
    // Check D1 database availability
    const useD1 = d1Database !== null
    
    if (useD1) {
      try {
        // Delete product from D1 database
        const result = await D1Utils.deleteProduct(productId)
        
        if (!result) {
          return errorResponse('Product not found', 'PRODUCT_NOT_FOUND', 404)
        }
        
        return successResponse(null, 'Product deleted successfully', {
          source: 'd1_database',
          deleted_by: authResult.user.username,
          product_id: productId
        })
      } catch (d1Error) {
        console.error('D1 database error:', d1Error)
        return errorResponse('Failed to delete product from database', 'DATABASE_ERROR', 500)
      }
    }
    
    // Development mode - return mock success
    console.log('⚠️ D1 database not available - mock delete')
    return successResponse(null, 'Product deleted successfully (development mode)', {
      source: 'fallback',
      deleted_by: authResult.user.username,
      product_id: productId
    })
    
  } catch (error) {
    console.error('❌ DELETE /api/products/[id] error:', error)
    return errorResponse('Error deleting product', 'DELETE_ERROR', 500)
  }
} 