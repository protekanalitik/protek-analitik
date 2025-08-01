import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Helper functions for quote requests (Edge Runtime compatible)
function generateQuoteId(): string {
  return `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

function sanitizeInput(input: string): string {
  return input.replace(/[<>"'&]/g, '').trim()
}

// Standard response helpers
function successResponse(data: any, message: string = 'Success') {
  return NextResponse.json({
    success: true,
    message,
    data
  })
}

function errorResponse(message: string, status: number = 400) {
  return NextResponse.json({
    success: false,
    message
  }, { status })
}

// Get all quote requests (admin only)
export async function GET(request: NextRequest) {
  try {
    // Authentication check
    const accessToken = request.cookies.get('accessToken')?.value ||
                       request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      return errorResponse('Access token required', 401)
    }

    const authResult = await AuthService.verifyAccessToken(accessToken)

    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: authResult.error || 'Yetkisiz erişim' },
        { status: 401 }
      )
    }

    if (!AuthService.hasRole(authResult.user!, 'admin') && !AuthService.hasRole(authResult.user!, 'editor')) {
      return NextResponse.json(
        { success: false, error: 'Bu işlem için admin veya editor yetkisi gereklidir' },
        { status: 403 }
      )
    }

    // Return mock data for Edge Runtime compatibility
    const quotes: any[] = []
    
    return successResponse({
      quotes,
      pagination: {
        total: 0,
        limit: 50,
        offset: 0,
        hasMore: false
      }
    }, 'Quote requests retrieved successfully')
    
  } catch (error) {
    console.error('Error in GET /api/quotes:', error)
    return errorResponse('Internal server error', 500)
  }
}

// Create new quote request (public endpoint)
export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.email || !body.company || !body.phone || !body.message) {
      return errorResponse('Missing required fields', 400)
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return errorResponse('Invalid email format', 400)
    }
    
    // Create quote data
    const quoteData = {
      id: generateQuoteId(),
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      company: sanitizeInput(body.company),
      phone: sanitizeInput(body.phone),
      message: sanitizeInput(body.message),
      created_at: new Date().toISOString()
    }
    
    // Mock save for Edge Runtime compatibility
    console.log('Quote request created:', quoteData)
    
    return successResponse({
      id: quoteData.id,
      message: 'Quote request submitted successfully'
    }, 'Quote request created successfully')
    
  } catch (error) {
    console.error('Error in POST /api/quotes:', error)
    
    if (error instanceof SyntaxError) {
      return errorResponse('Invalid JSON in request body', 400)
    }
    
    return errorResponse('Internal server error', 500)
  }
}
