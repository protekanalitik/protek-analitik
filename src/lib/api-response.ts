// Standardized API response utilities
import { NextResponse } from 'next/server'

// Standard API response interface
export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
  error?: string
  code?: string
  meta?: {
    timestamp: string
    version: string
    requestId?: string
    pagination?: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
    errors?: any
    [key: string]: any
  }
}

// Success response builder
export function createSuccessResponse<T>(
  data?: T,
  message?: string,
  meta?: Partial<ApiResponse['meta']>
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      ...meta
    }
  }

  return NextResponse.json(response)
}

// Error response builder
export function createErrorResponse(
  error: string,
  code?: string,
  status: number = 400,
  meta?: Partial<ApiResponse['meta']>
): NextResponse<ApiResponse> {
  const response: ApiResponse = {
    success: false,
    error,
    code,
    meta: {
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      ...meta
    }
  }

  return NextResponse.json(response, { status })
}

// Validation error response
export function createValidationErrorResponse(
  errors: string[] | Record<string, string[]>,
  message: string = 'Validation failed'
): NextResponse<ApiResponse> {
  return createErrorResponse(
    message,
    'VALIDATION_ERROR',
    400,
    { errors }
  )
}

// Authentication error responses
export const AuthErrors = {
  MISSING_TOKEN: () => createErrorResponse(
    'Authentication token required',
    'MISSING_TOKEN',
    401
  ),
  INVALID_TOKEN: () => createErrorResponse(
    'Invalid or expired token',
    'INVALID_TOKEN',
    401
  ),
  INSUFFICIENT_PERMISSIONS: () => createErrorResponse(
    'Insufficient permissions',
    'INSUFFICIENT_PERMISSIONS',
    403
  ),
  RATE_LIMITED: (retryAfter?: number) => {
    const response = createErrorResponse(
      'Too many requests. Please try again later.',
      'RATE_LIMITED',
      429
    )
    
    if (retryAfter) {
      response.headers.set('Retry-After', retryAfter.toString())
    }
    
    return response
  }
}

// Common error responses
export const CommonErrors = {
  NOT_FOUND: (resource: string = 'Resource') => createErrorResponse(
    `${resource} not found`,
    'NOT_FOUND',
    404
  ),
  ALREADY_EXISTS: (resource: string = 'Resource') => createErrorResponse(
    `${resource} already exists`,
    'ALREADY_EXISTS',
    409
  ),
  SERVER_ERROR: (message: string = 'Internal server error') => createErrorResponse(
    message,
    'SERVER_ERROR',
    500
  ),
  BAD_REQUEST: (message: string = 'Bad request') => createErrorResponse(
    message,
    'BAD_REQUEST',
    400
  ),
  FORBIDDEN: (message: string = 'Access forbidden') => createErrorResponse(
    message,
    'FORBIDDEN',
    403
  )
}

// Pagination helper
export function createPaginatedResponse<T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
  message?: string
): NextResponse<ApiResponse<T[]>> {
  const totalPages = Math.ceil(total / limit)
  
  return createSuccessResponse(
    data,
    message,
    {
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    }
  )
}

// Database operation response helpers
export const DatabaseResponses = {
  CREATED: <T>(data: T, resource: string = 'Resource') => 
    createSuccessResponse(data, `${resource} created successfully`),
  
  UPDATED: <T>(data: T, resource: string = 'Resource') => 
    createSuccessResponse(data, `${resource} updated successfully`),
  
  DELETED: (resource: string = 'Resource') => 
    createSuccessResponse(null, `${resource} deleted successfully`),
  
  FETCHED: <T>(data: T, resource: string = 'Resource') => 
    createSuccessResponse(data, `${resource} fetched successfully`)
}

// File upload response helpers
export const UploadResponses = {
  SUCCESS: (fileData: any) => createSuccessResponse(
    fileData,
    'File uploaded successfully'
  ),
  
  MULTIPLE_SUCCESS: (files: any[], total: number) => createSuccessResponse(
    { files, uploaded: files.length, total },
    `${files.length}/${total} files uploaded successfully`
  ),
  
  INVALID_FILE: (reason: string) => createErrorResponse(
    `Invalid file: ${reason}`,
    'INVALID_FILE',
    400
  ),
  
  FILE_TOO_LARGE: (maxSize: string) => createErrorResponse(
    `File size exceeds maximum limit of ${maxSize}`,
    'FILE_TOO_LARGE',
    400
  ),
  
  UNSUPPORTED_TYPE: (allowedTypes: string[]) => createErrorResponse(
    `Unsupported file type. Allowed types: ${allowedTypes.join(', ')}`,
    'UNSUPPORTED_TYPE',
    400
  )
}

// Request validation helpers
export function validateRequiredFields(
  data: Record<string, any>,
  requiredFields: string[]
): { isValid: boolean; missingFields: string[] } {
  const missingFields = requiredFields.filter(field => 
    data[field] === undefined || data[field] === null || data[field] === ''
  )
  
  return {
    isValid: missingFields.length === 0,
    missingFields
  }
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// URL validation
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Phone validation (Turkish format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Sanitize HTML content
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a proper library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
}

// Generate request ID for tracking
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
}

// Log API request/response for monitoring
export function logApiActivity(
  method: string,
  path: string,
  statusCode: number,
  userId?: string,
  duration?: number,
  error?: string
): void {
  const logData = {
    timestamp: new Date().toISOString(),
    method,
    path,
    statusCode,
    userId,
    duration,
    error
  }
  
  // In production, send this to your logging service (e.g., Cloudflare Logs, Sentry)
  console.log('API Activity:', JSON.stringify(logData))
}

// Rate limiting helper
export class RateLimitTracker {
  private static requests: Map<string, { count: number; resetTime: number }> = new Map()
  
  static isRateLimited(
    identifier: string,
    maxRequests: number = 100,
    windowMs: number = 60000
  ): boolean {
    const now = Date.now()
    const record = this.requests.get(identifier)
    
    if (!record || now > record.resetTime) {
      this.requests.set(identifier, { count: 1, resetTime: now + windowMs })
      return false
    }
    
    if (record.count >= maxRequests) {
      return true
    }
    
    record.count++
    return false
  }
  
  static getRemainingRequests(
    identifier: string,
    maxRequests: number = 100
  ): number {
    const record = this.requests.get(identifier)
    if (!record) return maxRequests
    
    return Math.max(0, maxRequests - record.count)
  }
  
  static cleanup(): void {
    const now = Date.now()
    const entries = Array.from(this.requests.entries())
    
    for (const [identifier, record] of entries) {
      if (now > record.resetTime) {
        this.requests.delete(identifier)
      }
    }
  }
}

// Cleanup rate limiter periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    RateLimitTracker.cleanup()
  }, 5 * 60 * 1000) // Every 5 minutes
}
