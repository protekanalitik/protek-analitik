import { NextResponse } from 'next/server'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Simple test endpoint
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'API is working',
    timestamp: new Date().toISOString()
  })
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'POST method working',
    timestamp: new Date().toISOString()
  })
}
