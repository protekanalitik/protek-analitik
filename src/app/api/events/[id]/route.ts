import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'
import { DatabaseUtils, ValidationUtils } from '@/lib/database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses } from '@/lib/api-response'
import { getD1Database } from '@/lib/db'

// Mock event for development
const MOCK_EVENT = {
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
}

// GET tek etkinlik
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
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

    const db = getD1Database()
    let event: any = null

    if (db) {
      try {
        // Query event from D1 database
        event = await db.prepare(
          'SELECT * FROM events WHERE id = ?'
        ).bind(params.id).first()
        
        if (event) {
          console.log(`Fetched event ${params.id} from D1 database`)
        }
      } catch (dbError) {
        console.error('D1 query error:', dbError)
        // Fall back to mock data if ID matches
        if (params.id === 'event-1') {
          event = MOCK_EVENT
          console.log('Using mock event data due to D1 error')
        }
      }
    } else {
      // Use mock data in development
      if (params.id === 'event-1') {
        event = MOCK_EVENT
        console.log('Using mock event data (D1 not available)')
      }
    }

    if (!event) {
      return createErrorResponse('Event not found', 'EVENT_NOT_FOUND', 404)
    }

    return createSuccessResponse(event, 'Event fetched successfully')
    
  } catch (error) {
    console.error('Event fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch event')
  }
}

// PUT etkinlik güncelle
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

    const eventData = await request.json()
    const db = getD1Database()

    if (db) {
      try {
        // Check if event exists
        const existingEvent = await db.prepare(
          'SELECT * FROM events WHERE id = ?'
        ).bind(params.id).first()
        
        if (!existingEvent) {
          return createErrorResponse('Event not found', 'EVENT_NOT_FOUND', 404)
        }
        
        // Prepare update data
        const now = DatabaseUtils.formatDate()
        const updateFields: any = {
          updated_at: now
        }
        
        // Build dynamic update query
        const allowedFields = [
          'title', 'slug', 'description', 'content', 'event_type', 'start_date', 'end_date',
          'location', 'address', 'registration_url', 'max_participants', 'current_participants',
          'image_url', 'tags', 'is_featured', 'is_published', 'registration_required',
          'is_online', 'meeting_link', 'meta_title', 'meta_description', 'meta_keywords'
        ]
        
        allowedFields.forEach(field => {
          if (eventData[field] !== undefined) {
            if (['is_featured', 'is_published', 'registration_required', 'is_online'].includes(field)) {
              updateFields[field] = Boolean(eventData[field]) ? 1 : 0
            } else if (field === 'tags' && typeof eventData[field] !== 'string') {
              updateFields[field] = JSON.stringify(eventData[field] || [])
            } else {
              updateFields[field] = eventData[field]
            }
          }
        })
        
        // Create SET clause
        const setClause = Object.keys(updateFields).map(field => `${field} = ?`).join(', ')
        const values = Object.values(updateFields)
        values.push(params.id) // for WHERE clause
        
        // Update in D1
        await db.prepare(`
          UPDATE events SET ${setClause} WHERE id = ?
        `).bind(...values).run()
        
        // Fetch updated event
        const updatedEvent = await db.prepare(
          'SELECT * FROM events WHERE id = ?'
        ).bind(params.id).first()
        
        console.log(`Event updated in D1: ${params.id} by user ${authResult.user!.username}`)
        
        return createSuccessResponse(updatedEvent, 'Event updated successfully')
        
      } catch (dbError) {
        console.error('D1 event update error:', dbError)
        return CommonErrors.SERVER_ERROR('Failed to update event in database')
      }
    } else {
      // Fallback for development
      console.log('D1 not available, returning mock event update success')
      const mockUpdatedEvent = {
        id: params.id,
        ...eventData,
        updated_at: DatabaseUtils.formatDate()
      }
      return createSuccessResponse(mockUpdatedEvent, 'Event updated successfully')
    }
    
  } catch (error) {
    console.error('Event update error:', error)
    return CommonErrors.SERVER_ERROR('Failed to update event')
  }
}

// DELETE etkinlik sil
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

    // Check permissions - only admin can delete events
    if (!AuthService.hasRole(authResult.user!, 'admin')) {
      return AuthErrors.INSUFFICIENT_PERMISSIONS()
    }

    const db = getD1Database()

    if (db) {
      try {
        // Check if event exists
        const existingEvent = await db.prepare(
          'SELECT id, title FROM events WHERE id = ?'
        ).bind(params.id).first()
        
        if (!existingEvent) {
          return createErrorResponse('Event not found', 'EVENT_NOT_FOUND', 404)
        }
        
        // Delete from D1
        await db.prepare(
          'DELETE FROM events WHERE id = ?'
        ).bind(params.id).run()
        
        console.log(`Event deleted from D1: ${params.id} by user ${authResult.user!.username}`)
        
        return createSuccessResponse(
          { id: params.id, title: existingEvent.title },
          'Event deleted successfully'
        )
        
      } catch (dbError) {
        console.error('D1 event deletion error:', dbError)
        return CommonErrors.SERVER_ERROR('Failed to delete event from database')
      }
    } else {
      // Fallback for development
      console.log('D1 not available, returning mock event deletion success')
      return createSuccessResponse(
        { id: params.id },
        'Event deleted successfully'
      )
    }
    
  } catch (error) {
    console.error('Event deletion error:', error)
    return CommonErrors.SERVER_ERROR('Failed to delete event')
  }
} 