import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'
import { DatabaseUtils, ValidationUtils } from '@/lib/database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'
import { D1DatabaseManager } from '@/lib/d1-database'
// Utils will be imported from database utils

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// D1DatabaseManager will be initialized contextually in each handler

// Get all news (requires authentication)
export async function GET(request: NextRequest) {
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

    // Parse query parameters for filtering
    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const isFeatured = url.searchParams.get('is_featured')
    const isPublished = url.searchParams.get('is_published')
    const search = url.searchParams.get('search')
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100)
    const offset = parseInt(url.searchParams.get('offset') || '0')

    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)

    // Try D1 database first
    if (contextualD1.isAvailable()) {
      try {
        // Build WHERE clause
        const conditions: string[] = []
        const params: any[] = []

        if (category) {
          conditions.push('category = ?')
          params.push(category)
        }

        if (isFeatured !== null && isFeatured !== '') {
          conditions.push('is_featured = ?')
          params.push(isFeatured === 'true' ? 1 : 0)
        }

        if (isPublished !== null && isPublished !== '') {
          conditions.push('is_published = ?')
          params.push(isPublished === 'true' ? 1 : 0)
        }

        if (search) {
          conditions.push('(title LIKE ? OR content LIKE ? OR summary LIKE ? OR tags LIKE ?)')
          const searchTerm = `%${search}%`
          params.push(searchTerm, searchTerm, searchTerm, searchTerm)
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''
        const query = `
          SELECT * FROM news 
          ${whereClause}
          ORDER BY publish_date DESC, created_at DESC
          LIMIT ? OFFSET ?
        `
        params.push(limit, offset)

        const result = await contextualD1.executeQuery(query, params)
        
        if (result.success && result.data) {
          // Get total count for pagination
          const countQuery = `SELECT COUNT(*) as total FROM news ${whereClause}`
          const countResult = await contextualD1.executeQuery(countQuery, params.slice(0, -2))
          const total = countResult.success ? (countResult.data?.[0] as any)?.total || 0 : 0
          
          return createSuccessResponse(
            result.data,
            'News fetched successfully',
            {
              total,
              limit,
              offset,
              hasMore: offset + limit < total,
              source: 'D1'
            }
          )
        }
      } catch (d1Error) {
        console.error('D1 news fetch error:', d1Error)
      }
    }

    // Fallback: Return mock data for development
    console.log('⚠️ D1 database not available - returning mock news')
    
    const mockNews = [
      {
        id: 'news-001',
        title: 'Yeni BRIX Ölçüm Teknolojisi Tanıtıldı',
        slug: 'yeni-brix-olcum-teknolojisi-tanitildi',
        summary: 'Protek Analitik\'in geliştirdiği yeni nesil BRIX ölçüm cihazları, endüstriyel uygulamalarda hassasiyet standardını yeniden belirliyor.',
        content: 'Gıda ve içecek endüstrisinde kritik önem taşıyan BRIX değeri ölçümlerinde devrim niteliğinde bir yenilik... [Detaylı içerik]',
        category: 'sirket-haberleri',
        author: 'Protek Analitik',
        publish_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 gün önce
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
        content: 'Su aktivitesi ölçümlerinde güvenilir sonuçlar elde etmek için kalibrasyon protokolleri... [Detaylı içerik]',
        category: 'sektor-guncel',
        author: 'Dr. Ahmet Özkan',
        publish_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 gün önce
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
        content: 'Modern laboratuvar yönetiminde otomasyon çözümlerinin rolü... [Detaylı içerik]',
        category: 'basari-hikayeleri',
        author: 'Protek Analitik',
        publish_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 hafta önce
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
    
    // Apply filtering to mock data
    let filteredNews = mockNews
    
    if (category) {
      filteredNews = filteredNews.filter(news => news.category === category)
    }
    
    if (isFeatured !== null && isFeatured !== '') {
      const featuredValue = isFeatured === 'true'
      filteredNews = filteredNews.filter(news => news.is_featured === featuredValue)
    }
    
    if (isPublished !== null && isPublished !== '') {
      const publishedValue = isPublished === 'true'
      filteredNews = filteredNews.filter(news => news.is_published === publishedValue)
    }
    
    if (search) {
      const searchLower = search.toLowerCase()
      filteredNews = filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchLower) ||
        news.content.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.tags.toLowerCase().includes(searchLower)
      )
    }
    
    // Apply pagination
    const total = filteredNews.length
    const paginatedNews = filteredNews.slice(offset, offset + limit)
    
    return createSuccessResponse(
      paginatedNews,
      'News fetched successfully (development mode)',
      {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
        source: 'mock-data'
      }
    )
    
  } catch (error) {
    console.error('News fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch news')
  }
}

// Create new news article
export async function POST(request: NextRequest) {
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

    if (!AuthService.hasRole(authResult.user!, 'editor')) {
      return NextResponse.json(
        { success: false, error: 'Bu işlem için editor yetkisi gereklidir' },
        { status: 403 }
      )
    }

    const newsData = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'category', 'publish_date']
    const validation = validateRequiredFields(newsData, requiredFields)
    
    if (!validation.isValid) {
      return createErrorResponse(
        `Missing required fields: ${validation.missingFields.join(', ')}`,
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    // Validate data types and formats
    const errors: string[] = []
    
    if (typeof newsData.title !== 'string' || newsData.title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long')
    }
    
    if (typeof newsData.content !== 'string' || newsData.content.trim().length < 50) {
      errors.push('Content must be at least 50 characters long')
    }
    
    if (!['sirket-haberleri', 'sektor-guncel', 'basari-hikayeleri'].includes(newsData.category)) {
      errors.push('Invalid category. Must be one of: sirket-haberleri, sektor-guncel, basari-hikayeleri')
    }
    
    // Validate publish date
    const publishDate = new Date(newsData.publish_date)
    if (isNaN(publishDate.getTime())) {
      errors.push('Invalid publish date format')
    }
    
    if (errors.length > 0) {
      return createErrorResponse(
        'Validation failed',
        'VALIDATION_ERROR',
        400,
        { errors }
      )
    }
    
    // Generate ID and slug
    const newsId = newsData.id || DatabaseUtils.generateId()
    const slug = newsData.slug || DatabaseUtils.generateSlug(newsData.title)
    
    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)
    
    // Try D1 database first
    if (contextualD1.isAvailable()) {
      try {
        // Check for duplicate slug
        const slugCheckResult = await contextualD1.executeQuery(
          'SELECT COUNT(*) as count FROM news WHERE slug = ?',
          [slug]
        )
        
        if (slugCheckResult.success && slugCheckResult.data?.[0] && (slugCheckResult.data[0] as any).count > 0) {
          return createErrorResponse(
            'A news article with this slug already exists',
            'DUPLICATE_SLUG',
            409
          )
        }
        
        // Create news article with metadata
        const now = new Date().toISOString()
        const newNews = {
          id: newsId,
          title: newsData.title.trim(),
          slug,
          summary: newsData.summary?.trim() || '',
          content: ValidationUtils.sanitizeHtml(newsData.content),
          category: newsData.category,
          author: newsData.author || authResult.user!.username,
          publish_date: newsData.publish_date,
          image_url: newsData.image_url || newsData.imageUrl || '',
          tags: Array.isArray(newsData.tags) ? newsData.tags.join(',') : (typeof newsData.tags === 'string' ? newsData.tags : ''),
          is_featured: Boolean(newsData.is_featured || newsData.featured),
          is_published: newsData.is_published !== false, // Default to true
          view_count: 0,
          meta_title: newsData.meta_title || newsData.title,
          meta_description: newsData.meta_description || newsData.summary || newsData.title,
          meta_keywords: newsData.meta_keywords || '',
          created_at: now,
          updated_at: now
        }
        
        // Insert into D1
        const insertResult = await contextualD1.insertRecord('news', newNews)
        
        if (insertResult.success) {
          console.log(`News created in D1: ${newNews.id} by user ${authResult.user!.username}`)
          return DatabaseResponses.CREATED(newNews, 'News article')
        } else {
          console.error('D1 insert failed:', insertResult.error)
        }
      } catch (d1Error) {
        console.error('D1 news creation error:', d1Error)
      }
    }
    
    // Fallback: Development mode
    console.log('⚠️ D1 database not available - simulating news creation')
    
    const now = new Date().toISOString()
    const newNews = {
      id: newsId,
      title: newsData.title.trim(),
      slug,
      summary: newsData.summary?.trim() || '',
      content: ValidationUtils.sanitizeHtml(newsData.content),
      category: newsData.category,
      author: newsData.author || authResult.user!.username,
      publish_date: newsData.publish_date,
      image_url: newsData.image_url || newsData.imageUrl || '',
      tags: Array.isArray(newsData.tags) ? newsData.tags.join(',') : (typeof newsData.tags === 'string' ? newsData.tags : ''),
      is_featured: Boolean(newsData.is_featured || newsData.featured),
      is_published: newsData.is_published !== false,
      view_count: 0,
      meta_title: newsData.meta_title || newsData.title,
      meta_description: newsData.meta_description || newsData.summary || newsData.title,
      meta_keywords: newsData.meta_keywords || '',
      created_at: now,
      updated_at: now
    }
    
    // Log activity
    console.log(`News created: ${newNews.id} by user ${authResult.user!.username}`)
    
    return DatabaseResponses.CREATED(newNews, 'News article (development mode)')
    
  } catch (error) {
    console.error('News creation error:', error)
    return CommonErrors.SERVER_ERROR('Failed to create news article')
  }
} 