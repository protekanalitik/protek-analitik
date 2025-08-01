import { NextRequest, NextResponse } from 'next/server'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Simple login endpoint - no complex dependencies
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { usernameOrEmail, password } = body

    // Input validation
    if (!usernameOrEmail || !password) {
      return NextResponse.json({
        success: false,
        error: 'Kullanıcı adı/e-posta ve şifre gereklidir'
      }, { status: 400 })
    }

    // Simple hardcoded authentication - no bcrypt, no complex auth
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
      
      // Simple token
      const simpleToken = 'admin-token-' + Date.now()
      
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
      
      // Set cookies
      response.cookies.set('accessToken', simpleToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 24 * 60 * 60 // 24 hours
      })
      
      return response
    }
    
    // Invalid credentials
    return NextResponse.json({
      success: false,
      error: 'Geçersiz kullanıcı adı veya şifre'
    }, { status: 401 })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({
      success: false,
      error: 'Sunucu hatası oluştu'
    }, { status: 500 })
  }
}
