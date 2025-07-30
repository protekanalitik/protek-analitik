import { NextRequest, NextResponse } from 'next/server'

// Logout endpoint
export async function POST(request: NextRequest) {
  try {
    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Başarıyla çıkış yapıldı'
    })

    // Clear authentication cookies
    response.cookies.delete('accessToken')
    response.cookies.delete('refreshToken')

    // Also set expired cookies to ensure they're cleared
    response.cookies.set('accessToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0
    })

    response.cookies.set('refreshToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0
    })

    return response

  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({
      success: false,
      error: 'Çıkış yapılırken hata oluştu',
      code: 'SERVER_ERROR'
    }, { status: 500 })
  }
}
