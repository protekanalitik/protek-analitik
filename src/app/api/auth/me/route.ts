import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Get current user endpoint
export async function GET(request: NextRequest) {
  try {
    // Get access token from cookie or Authorization header
    let accessToken = request.cookies.get('accessToken')?.value

    if (!accessToken) {
      const authHeader = request.headers.get('authorization')
      if (authHeader && authHeader.startsWith('Bearer ')) {
        accessToken = authHeader.substring(7)
      }
    }

    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'Access token bulunamadı',
        code: 'MISSING_ACCESS_TOKEN'
      }, { status: 401 })
    }

    // Verify access token
    const verificationResult = await AuthService.verifyAccessToken(accessToken)

    if (!verificationResult.success) {
      return NextResponse.json({
        success: false,
        error: verificationResult.error || 'Geçersiz access token',
        code: 'INVALID_ACCESS_TOKEN'
      }, { status: 401 })
    }

    // Return user information
    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: verificationResult.user!.id,
          username: verificationResult.user!.username,
          email: verificationResult.user!.email,
          first_name: verificationResult.user!.first_name,
          last_name: verificationResult.user!.last_name,
          role: verificationResult.user!.role,
          is_active: verificationResult.user!.is_active,
          last_login: verificationResult.user!.last_login
        }
      }
    })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json({
      success: false,
      error: 'Sunucu hatası oluştu',
      code: 'SERVER_ERROR'
    }, { status: 500 })
  }
}
