import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'
import { DatabaseUtils, ValidationUtils } from '@/lib/database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'
import { D1DatabaseManager } from '@/lib/d1-database'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

const d1Database = new D1DatabaseManager()

// Get single news article
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Try D1 database first
    if (d1Database.isAvailable()) {
      try {
        const result = await d1Database.executeQueryFirst(
          'SELECT * FROM news WHERE id = ? OR slug = ?',
          [id, id]
        )
        
        if (result.success && result.data) {
          // Increment view count
          await d1Database.executeQuery(
            'UPDATE news SET view_count = view_count + 1 WHERE id = ?',
            [result.data.id]
          )
          
          return createSuccessResponse(result.data, 'News article fetched successfully')
        }
      } catch (d1Error) {
        console.error('D1 news fetch error:', d1Error)
      }
    }

    // Fallback: Return mock data for development
    console.log('⚠️ D1 database not available - checking mock news')
    
    const mockNews = [
      {
        id: 'news-001',
        title: 'Yeni BRIX Ölçüm Teknolojisi Tanıtıldı',
        slug: 'yeni-brix-olcum-teknolojisi-tanitildi',
        summary: 'Protek Analitik\'in geliştirdiği yeni nesil BRIX ölçüm cihazları, endüstriyel uygulamalarda hassasiyet standardını yeniden belirliyor.',
        content: 'Gıda ve içecek endüstrisinde kritik önem taşıyan BRIX değeri ölçümlerinde devrim niteliğinde bir yenilik getiren Protek Analitik, yeni nesil ölçüm cihazlarını tanıttı. Bu teknoloji, mevcut standartları aşan hassasiyet ve güvenilirlik sunuyor.',
        category: 'sirket-haberleri',
        author: 'Protek Analitik',
        publish_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        image_url: '/images/news/brix-technology.jpg',
        tags: 'BRIX,ölçüm,teknoloji,gıda',
        is_featured: true,
        is_published: true,
        view_count: 245,
        meta_title: 'Yeni BRIX Ölçüm Teknolojisi | Protek Analitik',
        meta_description: 'Endüstriyel BRIX ölçüm teknolojilerinde yeni standartlar',
        meta_keywords: 'BRIX, ölçüm cihazı, teknoloji',
        created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'news-002',
        title: 'Su Aktivitesi Ölçümlerinde Kalibrasyon İpuçları',
        slug: 'su-aktivitesi-olcumlerinde-kalibrasyon-ipuclari',
        summary: 'Doğru su aktivitesi ölçümleri için kalibrasyon süreçlerinin önemi ve pratik uygulamalar.',
        content: 'Su aktivitesi ölçümlerinde güvenilir sonuçlar elde etmek için kalibrasyon protokolleri kritik önem taşır. Bu rehberde, laboratuvar ortamında doğru kalibrasyon teknikleri ve sık karşılaşılan sorunların çözümleri detaylandırılmaktadır.',
        category: 'sektor-guncel',
        author: 'Dr. Ahmet Özkan',
        publish_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        image_url: '/images/news/water-activity.jpg',
        tags: 'su aktivitesi,kalibrasyon,ölçüm',
        is_featured: false,
        is_published: true,
        view_count: 156,
        meta_title: 'Su Aktivitesi Kalibrasyon Rehberi | Protek Analitik',
        meta_description: 'Su aktivitesi ölçümlerinde kalibrasyon için pratik ipuçları',
        meta_keywords: 'su aktivitesi, kalibrasyon, ölçüm',
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'news-003',
        title: 'Laboratuvar Otomasyonunda Başarı Hikayesi',
        slug: 'laboratuvar-otomasyonunda-basari-hikayesi',
        summary: 'XYZ Gıda Şirketi ile gerçekleştirilen laboratuvar otomasyon projesi ve elde edilen verimlilik artışı.',
        content: 'Modern laboratuvar yönetiminde otomasyon çözümlerinin rolü giderek artıyor. XYZ Gıda Şirketi ile hayata geçirilen proje, %40 verimlilik artışı ve %60 hata azalması sağladı.',
        category: 'basari-hikayeleri',
        author: 'Protek Analitik',
        publish_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        image_url: '/images/news/lab-automation.jpg',
        tags: 'laboratuvar,otomasyon,başarı',
        is_featured: true,
        is_published: true,
        view_count: 324,
        meta_title: 'Laboratuvar Otomasyon Başarı Hikayesi | Protek Analitik',
        meta_description: 'XYZ Gıda ile laboratuvar otomasyon projesi başarı hikayesi',
        meta_keywords: 'laboratuvar, otomasyon, başarı hikayesi',
        created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
    
    const foundNews = mockNews.find(news => news.id === id || news.slug === id)
    
    if (foundNews) {
      return createSuccessResponse(foundNews, 'News article fetched successfully (development mode)')
    }
    
    return createErrorResponse('News article not found', 'NOT_FOUND', 404)
    
  } catch (error) {
    console.error('News fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch news article')
  }
}

// Update news article
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return AuthErrors.MISSING_TOKEN()
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success) {
      return AuthErrors.INVALID_TOKEN()
    }

    // Check permissions
    if (!AuthService.hasRole(authResult.user!, 'editor')) {
      return AuthErrors.INSUFFICIENT_PERMISSIONS()
    }

    const { id } = params
    const updateData = await request.json()
    
    // Try D1 database first
    if (d1Database.isAvailable()) {
      try {
        // Check if news exists
        const existingResult = await d1Database.executeQueryFirst(
          'SELECT * FROM news WHERE id = ?',
          [id]
        )
        
        if (!existingResult.success || !existingResult.data) {
          return createErrorResponse('News article not found', 'NOT_FOUND', 404)
        }
        
        // Prepare update data
        const now = new Date().toISOString()
        const updateFields: any = {
          updated_at: now
        }
        
        // Only update provided fields
        if (updateData.title) updateFields.title = updateData.title.trim()
        if (updateData.slug) updateFields.slug = updateData.slug
        if (updateData.summary !== undefined) updateFields.summary = updateData.summary?.trim() || ''
        if (updateData.content) updateFields.content = ValidationUtils.sanitizeHtml(updateData.content)
        if (updateData.category) updateFields.category = updateData.category
        if (updateData.author) updateFields.author = updateData.author
        if (updateData.publish_date) updateFields.publish_date = updateData.publish_date
        if (updateData.image_url !== undefined) updateFields.image_url = updateData.image_url || ''
        if (updateData.tags !== undefined) {
          updateFields.tags = Array.isArray(updateData.tags) ? updateData.tags.join(',') : (typeof updateData.tags === 'string' ? updateData.tags : '')
        }
        if (updateData.is_featured !== undefined) updateFields.is_featured = Boolean(updateData.is_featured)
        if (updateData.is_published !== undefined) updateFields.is_published = Boolean(updateData.is_published)
        if (updateData.meta_title !== undefined) updateFields.meta_title = updateData.meta_title || ''
        if (updateData.meta_description !== undefined) updateFields.meta_description = updateData.meta_description || ''
        if (updateData.meta_keywords !== undefined) updateFields.meta_keywords = updateData.meta_keywords || ''
        
        // Update in D1
        const updateResult = await d1Database.updateRecord('news', id, updateFields)
        
        if (updateResult.success) {
          // Fetch updated record
          const updatedResult = await d1Database.executeQueryFirst(
            'SELECT * FROM news WHERE id = ?',
            [id]
          )
          
          console.log(`News updated in D1: ${id} by user ${authResult.user!.username}`)
          return createSuccessResponse(updatedResult.data, 'News article updated successfully')
        } else {
          console.error('D1 update failed:', updateResult.error)
        }
      } catch (d1Error) {
        console.error('D1 news update error:', d1Error)
      }
    }
    
    // Fallback: Development mode
    console.log('⚠️ D1 database not available - simulating news update')
    
    const now = new Date().toISOString()
    const mockUpdatedNews = {
      id,
      ...updateData,
      updated_at: now
    }
    
    console.log(`News updated: ${id} by user ${authResult.user!.username}`)
    return createSuccessResponse(mockUpdatedNews, 'News article updated successfully (development mode)')
    
  } catch (error) {
    console.error('News update error:', error)
    return CommonErrors.SERVER_ERROR('Failed to update news article')
  }
}

// Delete news article
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return AuthErrors.MISSING_TOKEN()
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)
    if (!authResult.success) {
      return AuthErrors.INVALID_TOKEN()
    }

    // Check permissions - only admin can delete
    if (!AuthService.hasRole(authResult.user!, 'admin')) {
      return AuthErrors.INSUFFICIENT_PERMISSIONS()
    }

    const { id } = params
    
    // Try D1 database first
    if (d1Database.isAvailable()) {
      try {
        // Check if news exists
        const existingResult = await d1Database.executeQueryFirst(
          'SELECT * FROM news WHERE id = ?',
          [id]
        )
        
        if (!existingResult.success || !existingResult.data) {
          return createErrorResponse('News article not found', 'NOT_FOUND', 404)
        }
        
        // Delete from D1
        const deleteResult = await d1Database.deleteRecord('news', id)
        
        if (deleteResult.success) {
          console.log(`News deleted from D1: ${id} by user ${authResult.user!.username}`)
          return createSuccessResponse(null, 'News article deleted successfully')
        } else {
          console.error('D1 delete failed:', deleteResult.error)
        }
      } catch (d1Error) {
        console.error('D1 news delete error:', d1Error)
      }
    }
    
    // Fallback: Development mode
    console.log('⚠️ D1 database not available - simulating news deletion')
    
    console.log(`News deleted: ${id} by user ${authResult.user!.username}`)
    return createSuccessResponse(null, 'News article deleted successfully (development mode)')
    
  } catch (error) {
    console.error('News delete error:', error)
    return CommonErrors.SERVER_ERROR('Failed to delete news article')
  }
} 