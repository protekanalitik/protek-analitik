import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Get current user endpoint
export async function GET(request: NextRequest) {
  try {
    // Get access token from Authorization header or cookie
    let accessToken = request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!accessToken) {
      accessToken = request.cookies.get('accessToken')?.value
    }

    if (!accessToken) {
      return NextResponse.json(
        { success: false, error: 'Access token bulunamadı', code: 'MISSING_ACCESS_TOKEN' },
        { status: 401 }
      )
    }

    // Verify the access token
    const verificationResult = await AuthService.verifyAccessToken(accessToken)

    if (verificationResult.success) {
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
    } else {
      return NextResponse.json(
        { success: false, error: verificationResult.error || 'Geçersiz access token', code: 'INVALID_ACCESS_TOKEN' },
        { status: 401 }
      )
    }
  } catch (error: any) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası oluştu', code: 'SERVER_ERROR' },
      { status: 500 }
    )
  }
}
