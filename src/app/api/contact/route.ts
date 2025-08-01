import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'
import { v4 as uuidv4 } from 'uuid'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Types
interface ContactMessage {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  message_type: 'general' | 'support' | 'sales' | 'partnership'
  priority: 'low' | 'medium' | 'high'
  is_read: boolean
  is_responded: boolean
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

// Get all contact messages (admin only)
export async function GET(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return NextResponse.json(
        { success: false, error: 'Token gerekli' },
        { status: 401 }
      )
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

        const result = await contextualD1.getRecords('contact_messages', {
          where: whereClause,
          params,
          orderBy: 'created_at DESC',
          limit,
          offset
        })

        if (result.success) {
          // Get total count for pagination
          const countQuery = `SELECT COUNT(*) as total FROM contact_messages${whereClause ? ` WHERE ${whereClause}` : ''}`
          const countResult = await contextualD1.executeQuery(countQuery, params)
          const total = countResult.success ? countResult.data?.[0]?.total || 0 : 0

          return NextResponse.json({
            success: true,
            data: result.data,
            pagination: {
              total,
              limit,
              offset,
              hasMore: offset + limit < total
            }
          })
        }
      } catch (error) {
        console.error('D1 query error:', error)
        // Fall through to fallback
      }
    }

    // Fallback: return empty array if D1 is not available
    return NextResponse.json({
      success: true,
      data: [],
      pagination: {
        total: 0,
        limit,
        offset,
        hasMore: false
      }
    })

  } catch (error) {
    console.error('Contact messages fetch error:', error)
    return NextResponse.json(
      { success: false, error: 'Mesajlar yüklenirken bir hata oluştu' },
      { status: 500 }
    )
  }
}

// Create a new contact message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
      messageType = 'general'
    } = body

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Gerekli alanlar eksik' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Geçersiz email adresi' },
        { status: 400 }
      )
    }

    // Get client IP and user agent
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Generate unique ID
    const messageId = uuidv4()

    // Create message object
    const newMessage: ContactMessage = {
      id: messageId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      message,
      message_type: messageType,
      priority: 'medium', // Default priority
      is_read: false,
      is_responded: false,
      ip_address: clientIP,
      user_agent: userAgent,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // Try to initialize D1 with environment context
    const env = (globalThis as any).process?.env || (globalThis as any).env || {}
    const { D1DatabaseManager } = await import('@/lib/d1-database')
    const contextualD1 = new D1DatabaseManager(env)
    
    // Try D1 database first
    if (contextualD1.isAvailable()) {
      try {
        // Rate limiting check (max 3 messages per IP per 10 minutes)
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString()
        const rateLimitResult = await contextualD1.executeQuery(
          'SELECT COUNT(*) as count FROM contact_messages WHERE ip_address = ? AND created_at > ?',
          [clientIP, tenMinutesAgo]
        )

        if (rateLimitResult.success && rateLimitResult.data?.[0]?.count >= 3) {
          return NextResponse.json(
            { 
              success: false, 
              error: 'Bu IP adresinden son 10 dakikada çok fazla mesaj gönderildi. Lütfen bekleyiniz.' 
            },
            { status: 429 }
          )
        }

        // Insert message into D1
        const insertResult = await contextualD1.insertRecord('contact_messages', newMessage)

        if (insertResult.success) {
          // Log activity
          console.log(`Contact message received: ${messageId} from ${newMessage.email}`)

          // Return success without sensitive data
          return NextResponse.json({
            success: true,
            data: {
              id: messageId,
              subject: newMessage.subject,
              message_type: newMessage.message_type,
              created_at: newMessage.created_at
            },
            message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
          })
        }
      } catch (error) {
        console.error('D1 insert error:', error)
        // Fall through to fallback
      }
    }

    // Fallback: Log to console if D1 is not available
    console.log('Contact message received (D1 not available):', {
      id: messageId,
      email: newMessage.email,
      subject: newMessage.subject,
      message_type: newMessage.message_type
    })

    return NextResponse.json({
      success: true,
      data: {
        id: messageId,
        subject: newMessage.subject,
        message_type: newMessage.message_type,
        created_at: newMessage.created_at
      },
      message: 'Mesajınız alındı. Veritabanı bağlantısı olmadığı için geçici olarak loglanmıştır.'
    })

  } catch (error) {
    console.error('Contact message creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Mesaj gönderilirken bir hata oluştu' },
      { status: 500 }
    )
  }
}
