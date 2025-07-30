import { NextRequest, NextResponse } from 'next/server'
import { AuthService, RateLimiter } from '@/lib/auth'
import { ValidationUtils } from '@/lib/database'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Login endpoint
export async function POST(request: NextRequest) {
  try {
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'

    // Rate limiting check
    if (RateLimiter.isRateLimited(clientIP, 5, 15 * 60 * 1000)) {
      return NextResponse.json({
        success: false,
        error: 'Çok fazla giriş denemesi. 15 dakika sonra tekrar deneyin.',
        code: 'RATE_LIMITED'
      }, { status: 429 })
    }

    const body = await request.json()
    const { usernameOrEmail, password, rememberMe = false } = body

    // Input validation
    if (!usernameOrEmail || !password) {
      return NextResponse.json({
        success: false,
        error: 'Kullanıcı adı/e-posta ve şifre gereklidir',
        code: 'MISSING_CREDENTIALS'
      }, { status: 400 })
    }

    if (usernameOrEmail.length < 3 || password.length < 6) {
      return NextResponse.json({
        success: false,
        error: 'Geçersiz kimlik bilgileri',
        code: 'INVALID_CREDENTIALS'
      }, { status: 400 })
    }

    // Authenticate user
    const authResult = await AuthService.authenticate(usernameOrEmail, password)

    if (!authResult.success) {
      return NextResponse.json({
        success: false,
        error: authResult.error || 'Kimlik doğrulama başarısız',
        code: 'AUTH_FAILED'
      }, { status: 401 })
    }

    // Reset rate limit on successful login
    RateLimiter.resetRateLimit(clientIP)

    // Create response with tokens
    const response = NextResponse.json({
      success: true,
      message: 'Giriş başarılı',
      data: {
        user: {
          id: authResult.user!.id,
          username: authResult.user!.username,
          email: authResult.user!.email,
          first_name: authResult.user!.first_name,
          last_name: authResult.user!.last_name,
          role: authResult.user!.role,
          last_login: authResult.user!.last_login
        },
        accessToken: authResult.accessToken,
        refreshToken: authResult.refreshToken,
        expiresIn: 15 * 60 // 15 minutes in seconds
      }
    })

    // Set HTTP-only cookies for tokens (more secure than localStorage)
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      path: '/'
    }

    response.cookies.set('accessToken', authResult.accessToken!, {
      ...cookieOptions,
      maxAge: 15 * 60 // 15 minutes
    })

    response.cookies.set('refreshToken', authResult.refreshToken!, {
      ...cookieOptions,
      maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60 // 7 days if remember me, else 1 day
    })

    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({
      success: false,
      error: 'Sunucu hatası oluştu',
      code: 'SERVER_ERROR'
    }, { status: 500 })
  }
}

// Cleanup rate limiter periodically
setInterval(() => {
  RateLimiter.cleanup()
}, 5 * 60 * 1000) // Every 5 minutes
