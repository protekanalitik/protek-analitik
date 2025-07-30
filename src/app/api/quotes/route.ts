import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { AuthService } from '@/lib/auth'
import { DatabaseUtils, ValidationUtils } from '@/lib/database'
import { createSuccessResponse, createErrorResponse, AuthErrors, CommonErrors, DatabaseResponses, validateRequiredFields } from '@/lib/api-response'

const STORE_PATH = path.join(process.cwd(), 'src/data/quote-requests.json')

function readStore() {
  if (!fs.existsSync(STORE_PATH)) return { quotes: [] }
  return JSON.parse(fs.readFileSync(STORE_PATH, 'utf-8'))
}

function writeStore(data: any) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

// Get all quote requests (admin only)
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

    // Check permissions - only admin and editor can view quote requests
    if (!AuthService.hasRole(authResult.user!, 'admin') && !AuthService.hasRole(authResult.user!, 'editor')) {
      return AuthErrors.INSUFFICIENT_PERMISSIONS()
    }

    const store = readStore()
    const quotes = store.quotes || []
    
    // Parse query parameters for filtering
    const url = new URL(request.url)
    const status = url.searchParams.get('status')
    const priority = url.searchParams.get('priority')
    const limit = parseInt(url.searchParams.get('limit') || '50')
    const offset = parseInt(url.searchParams.get('offset') || '0')
    
    // Filter quotes
    let filteredQuotes = quotes
    
    if (status) {
      filteredQuotes = filteredQuotes.filter((quote: any) => quote.status === status)
    }
    
    if (priority) {
      filteredQuotes = filteredQuotes.filter((quote: any) => quote.priority === priority)
    }
    
    // Sort by newest first
    const sortedQuotes = filteredQuotes.sort((a: any, b: any) => {
      const aDate = new Date(a.created_at || 0).getTime()
      const bDate = new Date(b.created_at || 0).getTime()
      return bDate - aDate
    })
    
    // Paginate
    const paginatedQuotes = sortedQuotes.slice(offset, offset + limit)
    
    return createSuccessResponse(
      paginatedQuotes,
      'Quote requests fetched successfully',
      {
        total: filteredQuotes.length,
        limit,
        offset,
        hasMore: offset + limit < filteredQuotes.length,
        lastUpdated: store.lastUpdated || new Date().toISOString()
      }
    )
    
  } catch (error) {
    console.error('Quote requests fetch error:', error)
    return CommonErrors.SERVER_ERROR('Failed to fetch quote requests')
  }
}

// Create new quote request (public endpoint)
export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json()
    
    // Validate required fields
    const requiredFields = ['company_name', 'contact_name', 'email', 'phone', 'project_type', 'budget_range']
    const validation = validateRequiredFields(quoteData, requiredFields)
    
    if (!validation.isValid) {
      return createErrorResponse(
        `Missing required fields: ${validation.missingFields.join(', ')}`,
        'MISSING_REQUIRED_FIELDS',
        400
      )
    }
    
    // Validate data types and formats
    const errors: string[] = []
    
    if (typeof quoteData.company_name !== 'string' || quoteData.company_name.trim().length < 2) {
      errors.push('Company name must be at least 2 characters long')
    }
    
    if (typeof quoteData.contact_name !== 'string' || quoteData.contact_name.trim().length < 2) {
      errors.push('Contact name must be at least 2 characters long')
    }
    
    if (typeof quoteData.email !== 'string' || !ValidationUtils.isValidEmail(quoteData.email)) {
      errors.push('Valid email address is required')
    }
    
    if (typeof quoteData.phone !== 'string' || quoteData.phone.trim().length < 10) {
      errors.push('Phone number must be at least 10 characters long')
    }
    
    // Validate project type
    const validProjectTypes = ['laboratory-setup', 'equipment-supply', 'maintenance', 'consultation', 'training', 'other']
    if (!validProjectTypes.includes(quoteData.project_type)) {
      errors.push(`Invalid project type. Must be one of: ${validProjectTypes.join(', ')}`)
    }
    
    // Validate budget range
    const validBudgetRanges = ['under-10k', '10k-50k', '50k-100k', '100k-500k', 'over-500k', 'not-specified']
    if (!validBudgetRanges.includes(quoteData.budget_range)) {
      errors.push(`Invalid budget range. Must be one of: ${validBudgetRanges.join(', ')}`)
    }
    
    // Validate timeline if provided
    if (quoteData.timeline) {
      const validTimelines = ['immediate', '1-month', '3-months', '6-months', '1-year', 'flexible']
      if (!validTimelines.includes(quoteData.timeline)) {
        errors.push(`Invalid timeline. Must be one of: ${validTimelines.join(', ')}`)
      }
    }
    
    // Validate products if provided
    if (quoteData.products && !Array.isArray(quoteData.products)) {
      errors.push('Products must be an array')
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
    
    // Check recent quote requests from same IP (last 24 hours)
    const store = readStore()
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const recentQuotes = store.quotes.filter((quote: any) => 
      quote.ip_address === clientIP && 
      new Date(quote.created_at) > twentyFourHoursAgo
    )
    
    if (recentQuotes.length >= 2) {
      return createErrorResponse(
        'Too many quote requests sent recently. Please wait before sending another request.',
        'RATE_LIMIT_EXCEEDED',
        429
      )
    }
    
    // Generate ID and quote number
    const quoteId = DatabaseUtils.generateId()
    const quoteNumber = `QR-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
    
    // Create quote request
    const now = DatabaseUtils.formatDate()
    const newQuote = {
      id: quoteId,
      quote_number: quoteNumber,
      company_name: quoteData.company_name.trim(),
      contact_name: quoteData.contact_name.trim(),
      email: quoteData.email.trim().toLowerCase(),
      phone: quoteData.phone.trim(),
      position: quoteData.position?.trim() || '',
      address: quoteData.address?.trim() || '',
      city: quoteData.city?.trim() || '',
      country: quoteData.country?.trim() || '',
      project_type: quoteData.project_type,
      project_description: quoteData.project_description?.trim() || '',
      budget_range: quoteData.budget_range,
      timeline: quoteData.timeline || 'not-specified',
      products: Array.isArray(quoteData.products) ? quoteData.products : [],
      requirements: quoteData.requirements?.trim() || '',
      additional_notes: quoteData.additional_notes?.trim() || '',
      status: 'new', // new, reviewing, quoted, accepted, rejected, expired
      priority: 'normal', // low, normal, high, urgent
      assigned_to: null,
      estimated_value: null,
      quote_valid_until: null,
      follow_up_date: null,
      source: quoteData.source || 'website',
      ip_address: clientIP,
      user_agent: request.headers.get('user-agent') || '',
      referrer: request.headers.get('referer') || '',
      attachments: [],
      internal_notes: '',
      created_at: now,
      updated_at: now,
      quoted_at: null,
      accepted_at: null
    }
    
    // Add to store
    store.quotes.unshift(newQuote)
    store.lastUpdated = now
    
    // Save to file
    writeStore(store)
    
    // Log activity
    console.log(`Quote request received: ${newQuote.quote_number} from ${newQuote.company_name}`)
    
    // Return success without sensitive data
    const publicResponse = {
      id: newQuote.id,
      quote_number: newQuote.quote_number,
      company_name: newQuote.company_name,
      contact_name: newQuote.contact_name,
      project_type: newQuote.project_type,
      status: newQuote.status,
      created_at: newQuote.created_at
    }
    
    return DatabaseResponses.CREATED(publicResponse, 'Quote request')
    
  } catch (error) {
    console.error('Quote request creation error:', error)
    return CommonErrors.SERVER_ERROR('Failed to create quote request')
  }
}
