import Link from 'next/link'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-gray-600 mb-8">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
            
            <div className="text-sm text-gray-500">
              <Link href="/urunler" className="text-blue-600 hover:text-blue-700 mx-2">
                Ürünler
              </Link>
              |
              <Link href="/cozumler" className="text-blue-600 hover:text-blue-700 mx-2">
                Çözümler
              </Link>
              |
              <Link href="/iletisim" className="text-blue-600 hover:text-blue-700 mx-2">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
