'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Head from 'next/head'

// Essential icons for immediate use
import { 
  ChevronRightIcon, 
  HomeIcon, 
  BeakerIcon, 
  CubeIcon, 
  WrenchIcon,
  FlagIcon,
  ShareIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowsPointingOutIcon,
  PlayIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { 
  FlagIcon as FlagIconSolid, 
  StarIcon as StarIconSolid,
  PlayIcon as PlayIconSolid 
} from '@heroicons/react/24/solid'
import { productCategories, type Product } from '@/data/products'

// Dynamic import for layout components (safe bundle optimization)
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/layout/Header'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

// Helper functions for development mode fallback
const findProductInStaticData = (productId: string, categoryKey: string, subcategoryKey: string): Product | null => {
  try {
    const category = productCategories.find(cat => cat.key === categoryKey)
    if (!category) return null
    
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey)
    if (!subcategory) return null
    
    const product = subcategory.products.find(prod => prod.id === productId)
    return product || null
  } catch (error) {
    console.error('Error finding product in static data:', error)
    return null
  }
}

const getRelatedProductsFromStaticData = (categoryKey: string, subcategoryKey: string, currentProductId: string): Product[] => {
  try {
    const category = productCategories.find(cat => cat.key === categoryKey)
    if (!category) return []
    
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey)
    if (!subcategory) return []
    
    return subcategory.products
      .filter(product => product.id !== currentProductId)
      .slice(0, 4)
  } catch (error) {
    console.error('Error getting related products from static data:', error)
    return []
  }
}

const iconMap = {
  beaker: BeakerIcon,
  cube: CubeIcon,
  wrench: WrenchIcon,
}

interface ProductPageProps {
  params: {
    category: string
    subcategory: string
    product: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'applications' | 'support'>('overview')
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  // Dynamic category and subcategory data from D1
  const [category, setCategory] = useState<any>(null)
  const [subcategory, setSubcategory] = useState<any>(null)

  // Fetch product from API
  const fetchProduct = async () => {
    try {
      setLoading(true)
      
      // Fetch specific product by ID
      const productResponse = await fetch(`/api/products/${params.product}`)
      const productData = await productResponse.json()
      
      if (productData.success && productData.data) {
        setProduct(productData.data)
        
        // Get related products (same category and subcategory)
        const relatedResponse = await fetch(`/api/products?category_id=${productData.data.category_id}&subcategory_id=${productData.data.subcategory_id}&limit=5`)
        const relatedData = await relatedResponse.json()
        
        if (relatedData.success && Array.isArray(relatedData.data)) {
          const related = relatedData.data.filter((p: Product) => 
            p.id !== productData.data.id
          ).slice(0, 4)
          setRelatedProducts(related)
        }
      } else {
        // Development mode fallback - use static data
        console.log('API failed, using static data fallback')
        const fallbackProduct = findProductInStaticData(params.product, params.category, params.subcategory)
        if (fallbackProduct) {
          setProduct(fallbackProduct)
          
          // Get related products from static data
          const relatedProducts = getRelatedProductsFromStaticData(params.category, params.subcategory, params.product)
          setRelatedProducts(relatedProducts)
        } else {
          console.error('Product not found in static data either:', params.product)
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      // Development mode fallback on error
      console.log('API error, using static data fallback')
      const fallbackProduct = findProductInStaticData(params.product, params.category, params.subcategory)
      if (fallbackProduct) {
        setProduct(fallbackProduct)
        
        // Get related products from static data
        const relatedProducts = getRelatedProductsFromStaticData(params.category, params.subcategory, params.product)
        setRelatedProducts(relatedProducts)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [params.product])
  
  // Fetch category and subcategory data
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoriesResponse = await fetch('/api/categories')
        const categoriesData = await categoriesResponse.json()
        
        if (categoriesData.success) {
          const foundCategory = categoriesData.data.find((cat: any) => cat.key === params.category)
          if (foundCategory) {
            setCategory(foundCategory)
            
            const subcategoriesResponse = await fetch(`/api/categories?type=subcategories&category_id=${foundCategory.id}`)
            const subcategoriesData = await subcategoriesResponse.json()
            
            if (subcategoriesData.success) {
              const foundSubcategory = subcategoriesData.data.find((sub: any) => sub.key === params.subcategory)
              if (foundSubcategory) {
                setSubcategory(foundSubcategory)
              }
            }
          }
        } else {
          // Development mode fallback - use static data
          console.log('Categories API failed, using static data fallback')
          const staticCategory = productCategories.find(cat => cat.key === params.category)
          if (staticCategory) {
            setCategory({ name: staticCategory.name, key: staticCategory.key })
            
            const staticSubcategory = staticCategory.subcategories.find(sub => sub.key === params.subcategory)
            if (staticSubcategory) {
              setSubcategory({ name: staticSubcategory.name, key: staticSubcategory.key })
            }
          }
        }
      } catch (error) {
        console.error('Error fetching category data:', error)
        // Development mode fallback on error
        console.log('Categories API error, using static data fallback')
        const staticCategory = productCategories.find(cat => cat.key === params.category)
        if (staticCategory) {
          setCategory({ name: staticCategory.name, key: staticCategory.key })
          
          const staticSubcategory = staticCategory.subcategories.find(sub => sub.key === params.subcategory)
          if (staticSubcategory) {
            setSubcategory({ name: staticSubcategory.name, key: staticSubcategory.key })
          }
        }
      }
    }
    
    fetchCategoryData()
  }, [params.category, params.subcategory])

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-20">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-neutral-600">Ürün yükleniyor...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
  // Handle null product case
  if (!product) {
    notFound()
  }
  
  if (!category || !subcategory) {
    // If product is loaded but category data is still loading, show loading state
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[(category?.icon as keyof typeof iconMap)] || BeakerIcon

  // D1 schema'ya uyumlu resim handling - çoklu images desteği
  const productImages = (() => {
    // Önce images array'ini kontrol et (D1 schema)
    if (Array.isArray(product.images) && product.images.length > 0) {
      return product.images.filter(img => img && img.trim() !== '')
    }
    
    // Fallback: tek image field (backward compatibility)
    if (product.image && product.image.trim() !== '') {
      return [product.image]
    }
    
    // Default fallback image
    return ['/images/default-product.webp']
  })()

  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback - Copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // Show toast notification
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* D1 Schema - Dynamic SEO Meta Tags */}
      <Head>
        <title>{product.meta_title || `${product.name} - Protek Analitik`}</title>
        <meta 
          name="description" 
          content={product.meta_description || product.description || `${product.name} - Laboratuvar ekipmanları ve çözümleri`} 
        />
        <meta 
          name="keywords" 
          content={product.meta_keywords || `${product.name}, laboratuvar, analitik, ${category.name}, ${subcategory.name}`} 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={product.meta_title || product.name} />
        <meta property="og:description" content={product.meta_description || product.description} />
        <meta property="og:image" content={productImages[0]} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:type" content="product" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.meta_title || product.name} />
        <meta name="twitter:description" content={product.meta_description || product.description} />
        <meta name="twitter:image" content={productImages[0]} />
        
        {/* Product Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": product.name,
              "description": product.description,
              "image": productImages,
              "brand": {
                "@type": "Brand",
                "name": "Protek Analitik"
              },
              "category": category.name,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
              }
            })
          }}
        />
      </Head>
      
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Breadcrumb with Schema Markup */}
        <section className="py-4 bg-white border-b border-neutral-200">
          <div className="container-custom">
            <nav className="flex items-center text-sm text-neutral-600 flex-wrap gap-1" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary-600 transition-colors flex items-center gap-1">
                <HomeIcon className="w-4 h-4" />
                Ana Sayfa
              </Link>
              <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
              <Link href="/urunler" className="hover:text-primary-600 transition-colors">
                Ürünler
              </Link>
              <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
              <Link 
                href={`/urunler/${category.key}`} 
                className="hover:text-primary-600 transition-colors"
              >
                {category.name}
              </Link>
              <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
              <Link 
                href={`/urunler/${category.key}/${subcategory.key}`}
                className="hover:text-primary-600 transition-colors"
              >
                {subcategory.name}
              </Link>
              <ChevronRightIcon className="w-4 h-4 mx-2 text-neutral-400" />
              <span className="text-neutral-800 font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Enhanced Product Hero Section */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Product Images Gallery */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="relative aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl overflow-hidden group" style={{ minHeight: '400px' }}>
                    <Image
                      src={productImages[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    

                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 mt-4">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-20 h-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index 
                            ? 'border-primary-500 scale-105' 
                            : 'border-transparent hover:border-primary-300'
                        }`}
                        style={{ minHeight: '80px', minWidth: '80px' }}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />

                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Product Information */}
              <div className="space-y-6">
                {/* Product Header */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                    <ChevronRightIcon className="w-3 h-3" />
                    <span>{subcategory.name}</span>
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={shareProduct}
                        className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                        title="Paylaş"
                      >
                        <ShareIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* D1 Schema - Enhanced Product Indicators */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {/* Garanti Durumu */}
                    {product.is_warrantied && (
                      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                        <ShieldCheckIcon className="w-4 h-4" />
                        <span>Garantili Ürün</span>
                      </div>
                    )}
                    
                    {/* Ücretsiz Kargo */}
                    {product.has_free_shipping && (
                      <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                        <TruckIcon className="w-4 h-4" />
                        <span>Ücretsiz Kargo</span>
                      </div>
                    )}
                    
                    {/* Öne Çıkan Ürün */}
                    {product.is_featured && (
                      <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                        <StarIconSolid className="w-4 h-4" />
                        <span>Öne Çıkan</span>
                      </div>
                    )}
                    
                    {/* Veri Sayfası Linki */}
                    {product.data_sheet && (
                      <a 
                        href={product.data_sheet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <DocumentTextIcon className="w-4 h-4" />
                        <span>Veri Sayfası</span>
                        <ArrowDownTrayIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Quick Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.features?.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link 
                      href="/teklif-al"
                      className="bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <ChatBubbleLeftIcon className="w-5 h-5" />
                      Fiyat Teklifi Al
                    </Link>
                    <Link 
                      href="/iletisim"
                      className="border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      Bilgi Al
                    </Link>
                  </div>
                  
                  {/* D1 Schema - Dynamic Secondary Actions */}
                  <div className="flex flex-wrap gap-3">
                    {/* Katalog Dosyaları - D1'den gelen verilerle */}
                    {product.catalog_files && Array.isArray(product.catalog_files) && product.catalog_files.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {product.catalog_files.map((catalogFile, index) => (
                          <a
                            key={index}
                            href={catalogFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:shadow-md"
                          >
                            <ArrowDownTrayIcon className="w-4 h-4" />
                            <span>Katalog {index + 1}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <button className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200">
                        <ArrowDownTrayIcon className="w-4 h-4" />
                        <span>Katalog İndir</span>
                      </button>
                    )}
                    
                    <Link 
                      href="/iletisim#demo-talep"
                      className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span>Demo Talep Et</span>
                    </Link>
                    
                    <Link
                      href="/iletisim#canli-destek"
                      className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-primary-600 transition-colors bg-white rounded-lg border border-neutral-200 hover:border-primary-200"
                    >
                      <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                      <span>Canlı Destek</span>
                    </Link>
                  </div>
                </div>

                {/* Quick Delivery Info */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <TruckIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Hızlı Teslimat</p>
                      <p className="text-sm text-green-600">İstanbul için 24 saat, diğer iller için 2-3 iş günü</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Product Details Tabs */}
        <section ref={ref} className="py-16 bg-white">
          <div className="container-custom">
            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b border-neutral-200 mb-8">
              {[
                { key: 'overview' as const, label: 'Genel Bakış', icon: BeakerIcon },
                { key: 'specifications' as const, label: 'Teknik Özellikler', icon: DocumentTextIcon },
                { key: 'applications' as const, label: 'Uygulama Alanları', icon: CubeIcon },
                { key: 'support' as const, label: 'Destek', icon: ChatBubbleLeftIcon },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-600 hover:text-neutral-800'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-4">Ürün Genel Bakış</h3>
                      {product.overview ? (
                        <div className="prose prose-neutral max-w-none">
                          <p className="text-neutral-700 leading-relaxed mb-6 whitespace-pre-line">
                            {product.overview}
                          </p>
                        </div>
                      ) : (
                      <p className="text-neutral-700 leading-relaxed mb-6">
                          {product.description} Bu ürün, {product.applications?.join(', ').toLowerCase()} alanlarında 
                          kullanılmak üzere tasarlanmıştır ve {product.features?.join(', ').toLowerCase()} 
                        özelliklerini sunar.
                      </p>
                      )}
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-800 mb-4">Öne Çıkan Özellikler</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.features?.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-800 mb-4">Uygulama Alanları</h4>
                      <div className="space-y-3">
                        {product.applications?.map((app, index) => (
                          <div
                            key={index}
                            className="px-4 py-3 bg-primary-50 text-primary-700 rounded-lg border border-primary-200"
                          >
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Teknik Özellikler</h3>
                  {product.specifications && Object.keys(product.specifications).length > 0 ? (
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          <motion.div 
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-b-0"
                          >
                            <span className="font-medium text-neutral-800">{key}</span>
                            <span className="text-neutral-600 text-right">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <DocumentTextIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                      <p className="text-neutral-600 mb-4">Detaylı teknik özellikler için lütfen bizimle iletişime geçin.</p>
                      <Link
                        href="/iletisim"
                        className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        İletişime Geç
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Uygulama Alanları ve Kullanım Senaryoları</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.applications?.map((application, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                          <BeakerIcon className="w-6 h-6 text-primary-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">{application}</h4>
                        <p className="text-neutral-600 text-sm">
                          {product.name} ürünü {application.toLowerCase()} alanında yüksek performans sağlar.
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Destek ve Hizmetler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-neutral-200 rounded-xl p-6">
                      <DocumentTextIcon className="w-10 h-10 text-primary-600 mb-4" />
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">Teknik Dokümantasyon</h4>
                      <p className="text-neutral-600 text-sm mb-4">Kullanım kılavuzları, teknik çizimler ve sertifikalar</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Dökümanları İndir →
                      </button>
                    </div>
                    
                    <div className="bg-white border border-neutral-200 rounded-xl p-6">
                      <ChatBubbleLeftIcon className="w-10 h-10 text-primary-600 mb-4" />
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">Teknik Destek</h4>
                      <p className="text-neutral-600 text-sm mb-4">Uzman ekibimizden 7/24 teknik destek alın</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Destek Al →
                      </button>
                    </div>
                    
                    <div className="bg-white border border-neutral-200 rounded-xl p-6">
                      <WrenchIcon className="w-10 h-10 text-primary-600 mb-4" />
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">Kurulum ve Eğitim</h4>
                      <p className="text-neutral-600 text-sm mb-4">Profesyonel kurulum ve personel eğitimi hizmetleri</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Bilgi Al →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="container-custom">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 mb-8 text-center">
                Benzer Ürünler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/urunler/${params.category}/${params.subcategory}/${relatedProduct.id}`}>
                      <div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                        <div className="relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
                          <Image
                            src={
                              // D1 Schema - Çoklu resim desteği
                              Array.isArray(relatedProduct.images) && relatedProduct.images.length > 0
                                ? relatedProduct.images[0]
                                : relatedProduct.image || '/images/default-product.webp'
                            }
                            alt={relatedProduct.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                            {relatedProduct.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-primary-600 font-medium text-sm">Detayları Gör</span>
                            <ChevronRightIcon className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Bu Ürün Hakkında Daha Fazla Bilgi İster misiniz?
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Uzman ekibimiz size ürün özellikleri, fiyat ve kurulum hakkında detaylı bilgi verir
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/teklif-al"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Fiyat Teklifi Al
                </Link>
                <Link
                  href="/teknik-destek"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Teknik Danışmanlık
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 