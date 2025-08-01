import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'
import { DatabaseUtils, ValidationUtils } from '@/lib/database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'
import { D1DatabaseManager } from '@/lib/d1-database'

// Mock data for development (when D1 is not available)
const MOCK_EVENTS = [
  {
    id: 'event-1',
    title: 'Güvenlik Teknolojileri Semineri',
    slug: 'guvenlik-teknolojileri-semineri',
    description: 'Modern güvenlik teknolojileri ve uygulamaları hakkında kapsamlı seminer',
    content: 'Bu seminerde son teknoloji güvenlik çözümlerini ve uygulamalarını detaylı olarak inceleyeceğiz.',
    event_type: 'seminer',
    start_date: '2024-02-15',
    end_date: '2024-02-15',
    location: 'İstanbul Kongre Merkezi',
    address: 'Harbiye, İstanbul',
    registration_url: 'https://example.com/register',
    max_participants: 100,
    current_participants: 45,
    image_url: '/images/events/security-seminar.jpg',
    tags: 'güvenlik,teknoloji,seminer',
    is_featured: true,
    is_published: true,
    registration_required: true,
    is_online: false,
    meeting_link: '',
    meta_title: 'Güvenlik Teknolojileri Semineri - Protek Analitik',
    meta_description: 'Modern güvenlik teknolojileri semineri',
    meta_keywords: 'güvenlik,teknoloji,seminer',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    created_by: 'admin'
  },
  {
    id: 'event-2',
    title: 'Online Webinar: Siber Güvenlik',
    slug: 'online-webinar-siber-guvenlik',
    description: 'Siber güvenlik tehditleri ve korunma yöntemleri',
    content: 'Siber güvenlik alanındaki en güncel tehditler ve korunma stratejilerini ele alacağımız webinar.',
    event_type: 'webinar',
    start_date: '2024-03-01',
    end_date: '2024-03-01',
    location: 'Online',
    address: '',
    registration_url: 'https://example.com/webinar',
    max_participants: 500,
    current_participants: 234,
    image_url: '/images/events/cyber-security-webinar.jpg',
    tags: 'siber güvenlik,webinar,online',
    is_featured: false,
    is_published: true,
    registration_required: true,
    is_online: true,
    meeting_link: 'https://zoom.us/meeting/123',
    meta_title: 'Siber Güvenlik Webinarı - Protek Analitik',
    meta_description: 'Siber güvenlik tehditleri ve korunma yöntemleri webinarı',
    meta_keywords: 'siber güvenlik,webinar,online',
    created_at: '2024-01-20T14:00:00Z',
    updated_at: '2024-01-20T14:00:00Z',
    created_by: 'admin'
  }
]

// Get all events (requires authentication)
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

    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const contextualD1 = new D1DatabaseManager(env)
    let events: any[] = []

    if (contextualD1.isAvailable()) {
      try {
        // Query events from D1 database
        const result = await contextualD1.getRecords('events', {
          orderBy: 'start_date DESC, created_at DESC'
        })

        events = result.success ? (result.data || []) : []
        console.log(`Fetched ${events.length} events from D1 database`)
      } catch (dbError) {
        console.error('D1 query error:', dbError)
        // Fall back to mock data
        events = MOCK_EVENTS
        console.log('Using mock events data due to D1 error')
      }
    } else {
      // Use mock data in development
      events = MOCK_EVENTS
      console.log('Using mock events data (D1 not available)')
    }
    
    return createSuccessResponse(
      events,
      'Events fetched successfully',
      {
        total: events.length,
        lastUpdated: new Date().toISOString()
      }
    )
    
  } catch (error) {
    console.error('Events fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch events')
  }
}

// Create new event
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

    const eventData = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'event_type', 'start_date']
    const validation = validateRequiredFields(eventData, requiredFields)
    
    if (!validation.isValid) {
      return createErrorResponse(
        `Missing required fields: ${validation.missingFields.join(', ')}`,
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    // Validate data types and formats
    const errors: string[] = []
    
    if (typeof eventData.title !== 'string' || eventData.title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long')
    }
    
    if (!['seminer', 'webinar', 'fuar', 'egitim', 'konferans'].includes(eventData.event_type)) {
      errors.push('Invalid event type. Must be one of: seminer, webinar, fuar, egitim, konferans')
    }
    
    // Validate start date
    const startDate = new Date(eventData.start_date)
    if (isNaN(startDate.getTime())) {
      errors.push('Invalid start date format')
    }
    
    // Validate end date if provided
    if (eventData.end_date) {
      const endDate = new Date(eventData.end_date)
      if (isNaN(endDate.getTime())) {
        errors.push('Invalid end date format')
      } else if (endDate <= startDate) {
        errors.push('End date must be after start date')
      }
    }
    
    // Validate participant limits
    if (eventData.max_participants && (isNaN(eventData.max_participants) || eventData.max_participants < 1)) {
      errors.push('Max participants must be a positive number')
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
    const eventId = eventData.id || DatabaseUtils.generateId()
    const slug = eventData.slug || DatabaseUtils.generateSlug(eventData.title)
    
    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const contextualD1 = new D1DatabaseManager(env)
    
    if (contextualD1.isAvailable()) {
      try {
        // Check for duplicate slug in D1
        const existingEventResult = await contextualD1.executeQuery(
          'SELECT COUNT(*) as count FROM events WHERE slug = ?',
          [slug]
        )
        
        if (existingEventResult.success && existingEventResult.data?.[0] && (existingEventResult.data[0] as any).count > 0) {
          return createErrorResponse(
            'An event with this slug already exists',
            'DUPLICATE_SLUG',
            409
          )
        }
        
        // Create event with metadata
        const now = DatabaseUtils.formatDate()
        const newEvent = {
          id: eventId,
          title: eventData.title.trim(),
          slug,
          description: eventData.description?.trim() || '',
          content: eventData.content ? ValidationUtils.sanitizeHtml(eventData.content) : '',
          event_type: eventData.event_type,
          start_date: eventData.start_date,
          end_date: eventData.end_date || null,
          location: eventData.location?.trim() || '',
          address: eventData.address?.trim() || '',
          registration_url: eventData.registration_url || '',
          max_participants: eventData.max_participants || null,
          current_participants: 0,
          image_url: eventData.image_url || '',
          tags: typeof eventData.tags === 'string' ? eventData.tags : JSON.stringify(eventData.tags || []),
          is_featured: Boolean(eventData.is_featured) ? 1 : 0,
          is_published: (eventData.is_published !== false) ? 1 : 0,
          registration_required: Boolean(eventData.registration_required) ? 1 : 0,
          is_online: Boolean(eventData.is_online) ? 1 : 0,
          meeting_link: eventData.meeting_link || '',
          meta_title: eventData.meta_title || eventData.title,
          meta_description: eventData.meta_description || eventData.description || eventData.title,
          meta_keywords: eventData.meta_keywords || '',
          created_at: now,
          updated_at: now,
          created_by: authResult.user!.id
        }
        
        // Insert into D1 database
        const insertResult = await contextualD1.insertRecord('events', newEvent)
        
        if (!insertResult.success) {
          return createErrorResponse(
            insertResult.error || 'Failed to create event',
            'CREATE_FAILED'
          )
        }
        
        console.log(`Event created in D1: ${newEvent.id} by user ${authResult.user!.username}`)
        
        // Return response with proper data format
        const responseEvent = {
          ...newEvent,
          is_featured: Boolean(newEvent.is_featured),
          is_published: Boolean(newEvent.is_published),
          registration_required: Boolean(newEvent.registration_required),
          is_online: Boolean(newEvent.is_online)
        }
        
        return DatabaseResponses.CREATED(responseEvent, 'Event')
        
      } catch (dbError) {
        console.error('D1 event creation error:', dbError)
        return CommonErrors.SERVER_ERROR('Failed to save event to database')
      }
    } else {
      // Fallback for development - return mock success
      console.log('D1 not available, returning mock event creation success')
      const mockEvent = {
        id: eventId,
        title: eventData.title.trim(),
        slug,
        description: eventData.description?.trim() || '',
        event_type: eventData.event_type,
        start_date: eventData.start_date,
        created_at: DatabaseUtils.formatDate(),
        updated_at: DatabaseUtils.formatDate()
      }
      return DatabaseResponses.CREATED(mockEvent, 'Event')
    }
    
  } catch (error) {
    console.error('Event creation error:', error)
    return CommonErrors.SERVER_ERROR('Failed to create event')
  }
} 