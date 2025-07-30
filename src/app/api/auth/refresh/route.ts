import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Refresh token endpoint
export async function POST(request: NextRequest) {
  try {
    // Get refresh token from cookie or body
    let refreshToken = request.cookies.get('refreshToken')?.value

    if (!refreshToken) {
      const body = await request.json()
      refreshToken = body.refreshToken
    }

    if (!refreshToken) {
      return NextResponse.json({
        success: false,
        error: 'Refresh token bulunamadı',
        code: 'MISSING_REFRESH_TOKEN'
      }, { status: 401 })
    }

    // Refresh the access token
    const authResult = await AuthService.refreshAccessToken(refreshToken)

    if (!authResult.success) {
      // Clear invalid cookies
      const response = NextResponse.json({
        success: false,
        error: authResult.error || 'Token yenileme başarısız',
        code: 'REFRESH_FAILED'
      }, { status: 401 })

      response.cookies.delete('accessToken')
      response.cookies.delete('refreshToken')

      return response
    }

    // Create response with new access token
    const response = NextResponse.json({
      success: true,
      message: 'Token başarıyla yenilendi',
      data: {
        user: {
          id: authResult.user!.id,
          username: authResult.user!.username,
          email: authResult.user!.email,
          first_name: authResult.user!.first_name,
          last_name: authResult.user!.last_name,
          role: authResult.user!.role
        },
        accessToken: authResult.accessToken,
        expiresIn: 15 * 60 // 15 minutes in seconds
      }
    })

    // Update access token cookie
    response.cookies.set('accessToken', authResult.accessToken!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 15 * 60 // 15 minutes
    })

    return response

  } catch (error) {
    console.error('Token refresh error:', error)
    return NextResponse.json({
      success: false,
      error: 'Sunucu hatası oluştu',
      code: 'SERVER_ERROR'
    }, { status: 500 })
  }
}
