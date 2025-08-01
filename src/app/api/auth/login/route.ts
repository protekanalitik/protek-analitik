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

    // Simple hardcoded authentication for debugging
    if ((usernameOrEmail === 'protekadmin' || usernameOrEmail === 'admin@protekanalitik.com') && 
        password === 'protek1234') {
      
      // Create simple user object
      const user = {
        id: 'admin-001',
        username: 'protekadmin',
        email: 'admin@protekanalitik.com',
        first_name: 'Admin',
        last_name: 'User',
        role: 'admin',
        last_login: new Date().toISOString()
      }
      
      // Simple token (for debugging)
      const simpleToken = 'debug-token-' + Date.now()
      
      const response = NextResponse.json({
        success: true,
        message: 'Giriş başarılı',
        data: {
          user,
          accessToken: simpleToken,
          refreshToken: simpleToken,
          expiresIn: 15 * 60
        }
      })
      
      // Set simple cookies
      response.cookies.set('accessToken', simpleToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 15 * 60
      })
      
      return response
    }
    
    // Invalid credentials
    return NextResponse.json({
      success: false,
      error: 'Geçersiz kullanıcı adı veya şifre',
      code: 'AUTH_FAILED'
    }, { status: 401 })

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
