import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Protected routes that require authentication
const protectedRoutes = [
  '/admin',
  '/api/products',
  '/api/categories',
  '/api/news',
  '/api/events',
  '/api/upload'
]

// Public API routes that don't require authentication
const publicApiRoutes = [
  '/api/auth/login',
  '/api/auth/refresh',
  '/api/auth/logout',
  '/api/products/public', // If you want a public products endpoint
  '/api/contact' // Contact form submission
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Check if route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isPublicApiRoute = publicApiRoutes.some(route => pathname.startsWith(route))

  if (!isProtectedRoute || isPublicApiRoute) {
    return NextResponse.next()
  }

  // Get access token from cookie or Authorization header
  let accessToken = request.cookies.get('accessToken')?.value

  if (!accessToken) {
    const authHeader = request.headers.get('authorization')
    if (authHeader && authHeader.startsWith('Bearer ')) {
      accessToken = authHeader.substring(7)
    }
  }

  // If no token, redirect to login or return 401
  if (!accessToken) {
    if (pathname.startsWith('/admin')) {
      // Redirect admin routes to login page
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    } else {
      // Return 401 for API routes
      return NextResponse.json({
        success: false,
        error: 'Authentication required',
        code: 'AUTHENTICATION_REQUIRED'
      }, { status: 401 })
    }
  }

  // Verify access token
  try {
    const verificationResult = await AuthService.verifyAccessToken(accessToken)

    if (!verificationResult.success) {
      // Token is invalid, try to refresh
      const refreshToken = request.cookies.get('refreshToken')?.value

      if (refreshToken) {
        const refreshResult = await AuthService.refreshAccessToken(refreshToken)
        
        if (refreshResult.success) {
          // Token refreshed successfully, update cookie and continue
          const response = NextResponse.next()
          response.cookies.set('accessToken', refreshResult.accessToken!, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 15 * 60 // 15 minutes
          })
          
          // Add user info to request headers for use in API routes
          response.headers.set('x-user-id', refreshResult.user!.id)
          response.headers.set('x-user-role', refreshResult.user!.role)
          
          return response
        }
      }

      // Both access and refresh tokens are invalid
      if (pathname.startsWith('/admin')) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('redirect', pathname)
        const response = NextResponse.redirect(loginUrl)
        
        // Clear invalid cookies
        response.cookies.delete('accessToken')
        response.cookies.delete('refreshToken')
        
        return response
      } else {
        const response = NextResponse.json({
          success: false,
          error: 'Invalid or expired token',
          code: 'INVALID_TOKEN'
        }, { status: 401 })
        
        // Clear invalid cookies
        response.cookies.delete('accessToken')
        response.cookies.delete('refreshToken')
        
        return response
      }
    }

    // Token is valid, add user info to request headers
    const response = NextResponse.next()
    response.headers.set('x-user-id', verificationResult.user!.id)
    response.headers.set('x-user-role', verificationResult.user!.role)
    if (verificationResult.user!.email) {
      response.headers.set('x-user-email', verificationResult.user!.email)
    }

    return response

  } catch (error) {
    console.error('Middleware error:', error)
    
    if (pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else {
      return NextResponse.json({
        success: false,
        error: 'Authentication error',
        code: 'AUTH_ERROR'
      }, { status: 500 })
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
