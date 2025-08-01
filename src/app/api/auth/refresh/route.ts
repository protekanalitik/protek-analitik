import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Refresh token endpoint
export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json()

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, error: 'Refresh token gereklidir' },
        { status: 400 }
      )
    }

    // Refresh the access token
    const authResult = await AuthService.refreshAccessToken(refreshToken)

    if (authResult.success) {
      return NextResponse.json({
        success: true,
        user: authResult.user,
        accessToken: authResult.accessToken,
        refreshToken: authResult.refreshToken
      })
    } else {
      return NextResponse.json(
        { success: false, error: authResult.error || 'Token yenileme başarısız' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Token refresh error:', error)
    return NextResponse.json({
      success: false,
      error: 'Sunucu hatası oluştu',
      code: 'SERVER_ERROR'
    }, { status: 500 })
  }
}
