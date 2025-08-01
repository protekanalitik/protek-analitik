import { NextRequest, NextResponse } from 'next/server'
import { AuthService, RateLimiter } from '@/lib/auth'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Kullanıcı adı ve şifre gereklidir' },
        { status: 400 }
      )
    }

    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const rateLimitKey = `login:${clientIP}`
    
    if (RateLimiter.isRateLimited(rateLimitKey, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: 'Çok fazla başarısız giriş denemesi. 15 dakika sonra tekrar deneyin.' },
        { status: 429 }
      )
    }

    // Authenticate user
    const authResult = await AuthService.authenticate(username, password)

    if (authResult.success) {
      // Clear rate limit on successful login
      RateLimiter.clearAttempts(rateLimitKey)
      
      const response = NextResponse.json({
        success: true,
        message: 'Giriş başarılı',
        data: {
          user: authResult.user,
          accessToken: authResult.accessToken,
          refreshToken: authResult.refreshToken,
          expiresIn: 15 * 60 // 15 minutes
        }
      })
      
      // Set cookies
      response.cookies.set('accessToken', authResult.accessToken!, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 24 * 60 * 60 // 24 hours
      })
      
      return response
    } else {
      return NextResponse.json(
        { success: false, error: authResult.error || 'Giriş başarısız' },
        { status: 401 }
      )
    }
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası oluştu' },
      { status: 500 }
    )
  }
}
