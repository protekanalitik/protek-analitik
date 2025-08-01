import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'
import { d1Database, D1Utils } from '@/lib/d1-database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'

// Validation utilities
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

function generateId(): string {
  return 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

// Get all contact messages (admin only)
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

    // Parse query parameters for filtering
    const url = new URL(request.url)
    const messageType = url.searchParams.get('message_type')
    const priority = url.searchParams.get('priority')
    const isRead = url.searchParams.get('is_read')
    const isResponded = url.searchParams.get('is_responded')
    const search = url.searchParams.get('search')
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100)
    const offset = parseInt(url.searchParams.get('offset') || '0')

    // Try D1 database first
    if (d1Database.isAvailable()) {
      try {
        // Build WHERE clause
        const conditions: string[] = []
        const params: any[] = []

        if (messageType) {
          conditions.push('message_type = ?')
          params.push(messageType)
        }

        if (priority) {
          conditions.push('priority = ?')
          params.push(priority)
        }

        if (isRead !== null && isRead !== '') {
          conditions.push('is_read = ?')
          params.push(isRead === 'true' ? 1 : 0)
        }

        if (isResponded !== null && isResponded !== '') {
          conditions.push('is_responded = ?')
          params.push(isResponded === 'true' ? 1 : 0)
        }

        if (search) {
          conditions.push('(first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR subject LIKE ? OR message LIKE ? OR company LIKE ?)')
          const searchTerm = `%${search}%`
          params.push(searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, searchTerm)
        }

        const whereClause = conditions.length > 0 ? conditions.join(' AND ') : ''

        const result = await d1Database.getRecords('contact_messages', {
          where: whereClause,
          params,
          orderBy: 'created_at DESC',
          limit,
          offset
        })

        if (result.success && result.data) {
          return createSuccessResponse(
            result.data,
            'Contact messages fetched successfully',
            {
              total: result.total || 0,
              limit,
              offset,
              hasMore: offset + limit < (result.total || 0),
              source: 'd1_database'
            }
          )
        }
      } catch (d1Error) {
        console.error('D1 database error:', d1Error)
        // Fall back to mock data
      }
    }

    // Fallback: Return mock data for development
    console.log('⚠️ D1 database not available - returning mock messages')
    
    const mockMessages = [
      {
        id: 'msg-001',
        first_name: 'Ahmet',
        last_name: 'Yılmaz',
        email: 'ahmet.yilmaz@example.com',
        phone: '+90 532 123 45 67',
        company: 'ABC Teknoloji',
        position: 'Proje Müdürü',
        subject: 'BRIX Ölçüm Cihazı Hakkında Bilgi',
        message: 'Merhaba, şirketimizde kullanmak üzere BRIX ölçüm cihazları hakkında detaylı bilgi almak istiyorum. Fiyat teklifi gönderebilir misiniz?',
        message_type: 'teklif-talebi',
        interested_products: 'BRIX-001',
        budget_range: '10000-50000',
        timeline: '1-3-ay',
        source: 'website-form',
        is_read: false,
        is_responded: false,
        priority: 'high',
        assigned_to: null,
        response_notes: null,
        ip_address: '192.168.1.100',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 saat önce
        updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'msg-002',
        first_name: 'Zeynep',
        last_name: 'Kaya',
        email: 'zeynep.kaya@labtech.com.tr',
        phone: '+90 212 987 65 43',
        company: 'LabTech Analiz',
        position: 'Laboratuvar Sorumlusu',
        subject: 'Su Aktivitesi Ölçüm Cihazı Teknik Destek',
        message: 'Cihazımızda kalibrasyon hatası alıyoruz. Teknik ekibinizden destek talep ediyoruz.',
        message_type: 'teknik-destek',
        interested_products: 'su-aktivite-001',
        budget_range: '',
        timeline: 'hemen',
        source: 'website-form',
        is_read: true,
        is_responded: false,
        priority: 'urgent',
        assigned_to: 'teknik-ekip',
        response_notes: null,
        ip_address: '192.168.1.101',
        user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 saat önce
        updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'msg-003',
        first_name: 'Mehmet',
        last_name: 'Özer',
        email: 'm.ozer@gmail.com',
        phone: '+90 533 456 78 90',
        company: 'Özgür Danışmanlık',
        position: 'Genel Müdür',
        subject: 'İş Birliği Fırsatları',
        message: 'Distribütörlük konusunda görüşmek istiyoruz. Uygun bir zamanda toplantı ayarlayabilir miyiz?',
        message_type: 'is-birligi',
        interested_products: '',
        budget_range: '',
        timeline: '1-ay',
        source: 'website-form',
        is_read: true,
        is_responded: true,
        priority: 'normal',
        assigned_to: 'satis-ekip',
        response_notes: 'Toplantı 15 Şubat için planlandı',
        ip_address: '192.168.1.102',
        user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 gün önce
        updated_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'msg-004',
        first_name: 'Fatma',
        last_name: 'Demir',
        email: 'fatma.demir@university.edu.tr',
        phone: '+90 312 555 12 34',
        company: 'Ankara Üniversitesi',
        position: 'Araştırma Görevlisi',
        subject: 'Akademik İndirim Bilgisi',
        message: 'Araştırma projemiz için magnetik karıştırıcı almayı planlıyoruz. Akademik indirim uygulanıyor mu?',
        message_type: 'satis',
        interested_products: 'magnetik-karistirici-ms300',
        budget_range: '5000-10000',
        timeline: '2-4-hafta',
        source: 'website-form',
        is_read: false,
        is_responded: false,
        priority: 'normal',
        assigned_to: null,
        response_notes: null,
        ip_address: '192.168.1.103',
        user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 saat önce
        updated_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'msg-005',
        first_name: 'Ali',
        last_name: 'Veli',
        email: 'info@kalibrasyonlab.com',
        phone: '+90 216 888 99 00',
        company: 'Kalibrasyon Laboratuvarı',
        position: 'Müdür',
        subject: 'Genel Bilgi Talebi',
        message: 'Ürün kataloğunuzu incelemek istiyoruz. PDF olarak gönderebilir misiniz?',
        message_type: 'genel',
        interested_products: '',
        budget_range: '',
        timeline: '',
        source: 'website-form',
        is_read: true,
        is_responded: true,
        priority: 'low',
        assigned_to: 'destek-ekip',
        response_notes: 'Katalog e-posta ile gönderildi',
        ip_address: '192.168.1.104',
        user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)',
        created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 gün önce
        updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      }
    ]
    
    // Apply filtering to mock data
    let filteredMessages = mockMessages
    
    if (messageType) {
      filteredMessages = filteredMessages.filter(msg => msg.message_type === messageType)
    }
    
    if (priority) {
      filteredMessages = filteredMessages.filter(msg => msg.priority === priority)
    }
    
    if (isRead !== null && isRead !== '') {
      const readValue = isRead === 'true'
      filteredMessages = filteredMessages.filter(msg => msg.is_read === readValue)
    }
    
    if (isResponded !== null && isResponded !== '') {
      const respondedValue = isResponded === 'true'
      filteredMessages = filteredMessages.filter(msg => msg.is_responded === respondedValue)
    }
    
    if (search) {
      const searchLower = search.toLowerCase()
      filteredMessages = filteredMessages.filter(msg => 
        msg.first_name?.toLowerCase().includes(searchLower) ||
        msg.last_name?.toLowerCase().includes(searchLower) ||
        msg.email.toLowerCase().includes(searchLower) ||
        msg.subject.toLowerCase().includes(searchLower) ||
        msg.message.toLowerCase().includes(searchLower) ||
        msg.company?.toLowerCase().includes(searchLower)
      )
    }
    
    // Apply pagination
    const total = filteredMessages.length
    const paginatedMessages = filteredMessages.slice(offset, offset + limit)
    
    return createSuccessResponse(
      paginatedMessages,
      'Contact messages fetched successfully (development mode)',
      {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
        source: 'mock-data'
      }
    )
    
  } catch (error) {
    console.error('Contact messages fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch contact messages')
  }
}

// Create new contact message (public endpoint)
export async function POST(request: NextRequest) {
  try {
    const messageData = await request.json()
    
    // Validate required fields - accept either name or first_name+last_name
    const hasName = messageData.name && typeof messageData.name === 'string'
    const hasFirstName = messageData.first_name && typeof messageData.first_name === 'string'
    
    if (!hasName && !hasFirstName) {
      return createErrorResponse(
        'Either name or first_name is required',
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    const requiredFields = ['email', 'subject', 'message']
    const validation = validateRequiredFields(messageData, requiredFields)
    
    if (!validation.isValid) {
      return createErrorResponse(
        `Missing required fields: ${validation.missingFields.join(', ')}`,
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    // Validate data types and formats
    const errors: string[] = []
    
    // Validate name fields
    if (hasName && messageData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long')
    }
    
    if (hasFirstName && messageData.first_name.trim().length < 2) {
      errors.push('First name must be at least 2 characters long')
    }
    
    if (typeof messageData.email !== 'string' || !isValidEmail(messageData.email)) {
      errors.push('Valid email address is required')
    }
    
    if (typeof messageData.subject !== 'string' || messageData.subject.trim().length < 5) {
      errors.push('Subject must be at least 5 characters long')
    }
    
    if (typeof messageData.message !== 'string' || messageData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long')
    }
    
    // Validate phone if provided
    if (messageData.phone && (typeof messageData.phone !== 'string' || messageData.phone.trim().length < 10)) {
      errors.push('Phone number must be at least 10 characters long')
    }
    
    // Validate company if provided
    if (messageData.company && (typeof messageData.company !== 'string' || messageData.company.trim().length < 2)) {
      errors.push('Company name must be at least 2 characters long')
    }
    
    // Validate message type
    const validTypes = ['genel', 'teknik-destek', 'satis', 'teklif-talebi', 'is-birligi']
    if (messageData.message_type && !validTypes.includes(messageData.message_type)) {
      errors.push(`Invalid message type. Must be one of: ${validTypes.join(', ')}`)
    }
    
    if (errors.length > 0) {
      return createErrorResponse(
        'Validation failed',
        'VALIDATION_ERROR',
        400,
        { errors }
      )
    }
    
    // Rate limiting check (simple IP-based)
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // Generate message data
    const messageId = generateId()
    const now = new Date().toISOString()
    
    // Parse name fields
    let firstName = ''
    let lastName = ''
    
    if (messageData.first_name) {
      firstName = messageData.first_name.trim()
      lastName = messageData.last_name?.trim() || ''
    } else if (messageData.name) {
      const nameParts = messageData.name.trim().split(' ')
      firstName = nameParts[0] || ''
      lastName = nameParts.slice(1).join(' ') || ''
    }
    
    const newMessage = {
      id: messageId,
      first_name: firstName,
      last_name: lastName,
      email: messageData.email.trim().toLowerCase(),
      phone: messageData.phone?.trim() || '',
      company: messageData.company?.trim() || '',
      position: messageData.position?.trim() || '',
      subject: messageData.subject.trim(),
      message: sanitizeHtml(messageData.message.trim()),
      message_type: messageData.message_type || 'genel',
      interested_products: messageData.interested_products || '',
      budget_range: messageData.budget_range || '',
      timeline: messageData.timeline || '',
      source: messageData.source || 'website',
      is_read: false,
      is_responded: false,
      priority: messageData.priority || 'normal',
      assigned_to: '',
      response_notes: '',
      ip_address: clientIP,
      user_agent: request.headers.get('user-agent') || '',
      created_at: now,
      updated_at: now
    }

    // Try D1 database first
    if (d1Database.isAvailable()) {
      try {
        // Check rate limiting in D1
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString()
        const rateLimitResult = await d1Database.executeQuery(
          'SELECT COUNT(*) as count FROM contact_messages WHERE ip_address = ? AND created_at > ?',
          [clientIP, tenMinutesAgo]
        )

        if (rateLimitResult.success && rateLimitResult.data?.[0]?.count >= 3) {
          return createErrorResponse(
            'Bu IP adresinden son 10 dakikada çok fazla mesaj gönderildi. Lütfen bekleyiniz.',
            'RATE_LIMIT_EXCEEDED',
            429
          )
        }

        // Insert message into D1
        const insertResult = await d1Database.insertRecord('contact_messages', newMessage)

        if (insertResult.success) {
          // Log activity
          console.log(`Contact message received: ${messageId} from ${newMessage.email}`)

          // Return success without sensitive data
          const publicResponse = {
            id: messageId,
            subject: newMessage.subject,
            message_type: newMessage.message_type,
            created_at: newMessage.created_at
          }

          return DatabaseResponses.CREATED(publicResponse, 'Contact message')
        } else {
          console.error('Failed to save contact message to D1:', insertResult.error)
          return CommonErrors.SERVER_ERROR('Failed to save contact message')
        }
      } catch (d1Error) {
        console.error('D1 database error:', d1Error)
        return CommonErrors.SERVER_ERROR('Database error occurred')
      }
    }

    // Development mode: Just return mock success
    console.log('⚠️ D1 database not available - mock contact message creation')
    const publicResponse = {
      id: messageId,
      subject: newMessage.subject,
      message_type: newMessage.message_type,
      created_at: newMessage.created_at
    }

    return DatabaseResponses.CREATED(publicResponse, 'Contact message (development mode)')
    
  } catch (error) {
    console.error('Contact message creation error:', error)
    return CommonErrors.SERVER_ERROR('Failed to send contact message')
  }
}
