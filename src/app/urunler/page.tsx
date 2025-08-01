'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'
import Link from 'next/link'
import { BeakerIcon, CubeIcon, WrenchIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// Product ve Category type'ları API'den alacağız
type Product = {
  id: string
  name: string
  description: string
  image: string
  category: string
  subcategory: string
  features: string[]
  applications: string[]
  specifications?: Record<string, string>
  dataSheet?: string
  price?: string
  created_at?: string
  updated_at?: string
  isWarrantied?: boolean
  hasFreeShipping?: boolean
}

type Category = {
  key: string
  name: string
  description: string
  icon?: string
  subcategories: Subcategory[]
}

type Subcategory = {
  key: string
  name: string
  description: string
  products: any[]
}
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const iconMap = {
  beaker: BeakerIcon,
  cube: CubeIcon,
  wrench: WrenchIcon,
}

// Helper function to get all products from static data
const getAllStaticProducts = (categories: Category[]) => {
  const allProducts: any[] = []
  
  categories.forEach((category: Category) => {
    category.subcategories.forEach((subcategory: Subcategory) => {
      subcategory.products.forEach((product: any) => {
        // Add category and subcategory info to each product
        allProducts.push({
          ...product,
          category: category.name,
          subcategory: subcategory.name
        })
      })
    })
  })
  
  return allProducts
}

// Helper function to generate product URL - same as in Products.tsx
const generateProductUrl = (product: any, categories: Category[]) => {
  // API'den gelen ürünler için category ve subcategory name'den key'e çevirme
  const findCategoryKey = (categoryName: string) => {
    const category = categories.find((cat: Category) => cat.name === categoryName)
    return category ? category.key : 'laboratuvar-ekipmanlari' // fallback
  }
  
  const findSubcategoryKey = (categoryName: string, subcategoryName: string) => {
    const category = categories.find((cat: Category) => cat.name === categoryName)
    if (category) {
      const subcategory = category.subcategories.find((sub: Subcategory) => sub.name === subcategoryName)
      if (subcategory) {
        return subcategory.key
      }
    }
    
    // Fallback: subcategory name'den key oluştur
    return subcategoryName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/,/g, '')
      .replace(/\s+/g, '-') || 'test-sistemleri'
  }
  
  // Eğer statik ürünse, mevcut mantığı kullan
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      if (subcategory.products.some((p: any) => p.id === product.id)) {
        return `/urunler/${category.key}/${subcategory.key}/${product.id}`
      }
    }
  }
  
  // API'den gelen dinamik ürünler için
  if (product.category && product.subcategory) {
    const categoryKey = findCategoryKey(product.category)
    const subcategoryKey = findSubcategoryKey(product.category, product.subcategory)
    return `/urunler/${categoryKey}/${subcategoryKey}/${product.id}`
  }
  
  // Son fallback
  return `/urunler/laboratuvar-ekipmanlari/test-sistemleri/${product.id}`
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [productCategories, setProductCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Fetch categories from API (static import yerine)
  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories?public=true')
      if (!response.ok) {
        throw new Error('Failed to fetch categories')
      }
      const result = await response.json()
      if (result.success) {
        // Convert API data to frontend format
        const apiCategories = result.data.categories || []
        const apiSubcategories = result.data.subcategories || []
        
        const formattedCategories: Category[] = apiCategories.map((cat: any) => ({
          key: cat.id || cat.key,
          name: cat.name,
          description: cat.description || '',
          subcategories: apiSubcategories
            .filter((sub: any) => sub.category_id === cat.id)
            .map((sub: any) => ({
              key: sub.id || sub.key,
              name: sub.name,
              description: sub.description || '',
              products: []
            }))
        }))
        
        setProductCategories(formattedCategories)
      } else {
        console.error('Categories fetch failed:', result.error)
        // Fallback to static categories
        const fallbackCategories: Category[] = [
          {
            key: 'lab-equipment',
            name: 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler',
            description: 'Laboratuvar ekipmanları ve sarf malzemeleri',
            subcategories: [
              { key: 'fiziksel-analiz', name: 'Fiziksel Analiz Ekipmanları', description: '', products: [] },
              { key: 'kimyasal-analiz', name: 'Kimyasal Analiz Ekipmanları', description: '', products: [] },
              { key: 'mikrobiyoloji', name: 'Mikrobiyoloji Analiz Ekipmanları', description: '', products: [] },
              { key: 'test-sistemleri', name: 'Test, Ölçü Kontrol Sistemleri', description: '', products: [] }
            ]
          }
        ]
        setProductCategories(fallbackCategories)
      }
    } catch (error) {
      console.error('Kategorileri yüklerken hata:', error)
      // Fallback to static categories on error
      const fallbackCategories: Category[] = [
        {
          key: 'lab-equipment',
          name: 'Laboratuvar Ekipmanları, Sarf Malzemeler Ve Kitler',
          description: 'Laboratuvar ekipmanları ve sarf malzemeleri',
          subcategories: [
            { key: 'fiziksel-analiz', name: 'Fiziksel Analiz Ekipmanları', description: '', products: [] },
            { key: 'kimyasal-analiz', name: 'Kimyasal Analiz Ekipmanları', description: '', products: [] },
            { key: 'mikrobiyoloji', name: 'Mikrobiyoloji Analiz Ekipmanları', description: '', products: [] },
            { key: 'test-sistemleri', name: 'Test, Ölçü Kontrol Sistemleri', description: '', products: [] }
          ]
        }
      ]
      setProductCategories(fallbackCategories)
    }
  }

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true)
      
      // Categories'i de çek
      await fetchCategories()
      
      const response = await fetch('/api/products?public=true')
      const data = await response.json()
      
      if (data.success && Array.isArray(data.data)) {
        setProducts(data.data)
      } else {
        console.error('Failed to fetch products:', data)
        // Use static data as fallback
        console.log('API failed, using static data fallback')
        const staticProducts = getAllStaticProducts(productCategories)
        setProducts(staticProducts)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // Development mode fallback on error
      console.log('API error, using static data fallback')
      const staticProducts = getAllStaticProducts(productCategories)
      setProducts(staticProducts)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Search function using API data
  const searchProducts = (query: string): Product[] => {
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.subcategory.toLowerCase().includes(searchTerm) ||
      product.features?.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      product.applications?.some(app => app.toLowerCase().includes(searchTerm))
    )
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim().length > 2) {
      setIsSearching(true)
      const results = searchProducts(query)
      setSearchResults(results)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }

  // Calculate category product counts from API data
  const getCategoryProductCount = (categoryName: string): number => {
    return products.filter(product => product.category === categoryName).length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="pt-20">
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-neutral-600">Ürünler yükleniyor...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
          <div className="container-custom relative">
            <motion.div 
              className="text-center text-white space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Ürün <span className="text-gradient-light">Katalogumuz</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto">
                Laboratuvarınızın her türlü ihtiyacı için geniş ürün yelpazemizi keşfedin
              </p>
              
              {/* Arama Kutusu */}
              <div className="max-w-2xl mx-auto mt-8">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Ürün, kategori veya özellik ara..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Arama Sonuçları */}
        {isSearching && (
          <section className="py-8 bg-white border-b">
            <div className="container-custom">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                Arama Sonuçları ({searchResults.length})
              </h2>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((product) => (
                    <Link 
                      key={product.id} 
                      href={generateProductUrl(product, productCategories)}
                      className="group"
                    >
                      <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <Image
                            src={product.image || '/images/default-product.webp'}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="object-cover rounded-lg bg-neutral-100"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-neutral-600 mt-1">{product.description}</p>
                            <div className="text-xs text-neutral-500 mt-2">
                              {product.category} • {product.subcategory}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-neutral-500">Arama kriterlerinize uygun ürün bulunamadı.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Kategori Listesi */}
        {!isSearching && (
          <section ref={ref} className="py-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
                  Ürün Kategorilerimiz
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  {productCategories.length} ana kategoride {products.length}+ ürün seçeneği
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((category, index) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BeakerIcon
                  const productCount = getCategoryProductCount(category.name)
                  
                  return (
                    <motion.div
                      key={category.key}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Link href={`/urunler/${category.key}`} className="group">
                        <div className="relative bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                          {/* Gradient Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="relative">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                              <IconComponent className="w-8 h-8 text-primary-600" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-neutral-600 mb-4 line-clamp-3">
                              {category.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                              <span>{category.subcategories.length} alt kategori</span>
                              <span>{productCount} ürün</span>
                            </div>

                            {/* Arrow */}
                            <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                              <span>Kategoriye Git</span>
                              <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Products Section */}
        {!isSearching && products.length > 0 && (
          <section className="py-16 bg-neutral-50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
                  Tüm Ürünlerimiz
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  Laboratuvarınızın her türlü ihtiyacı için kapsamlı ürün gamımızı keşfedin
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Link href={generateProductUrl(product, productCategories)} className="group">
                      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        {/* Product Image */}
                        <div className="aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
                          <Image
                            src={product.image || '/images/default-product.webp'}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                          
                          {/* Category Badge */}
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-1 bg-white/90 text-xs font-medium text-neutral-700 rounded-full">
                              {product.category}
                            </span>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                          <h3 className="font-semibold text-neutral-800 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>

                          {/* Subcategory */}
                          <div className="mb-3">
                            <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                              {product.subcategory}
                            </span>
                          </div>

                          {/* Features */}
                          {product.features && product.features.length > 0 && (
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1">
                                {product.features.slice(0, 2).map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-xs text-neutral-600">
                                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-1"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA */}
                          <div className="flex items-center justify-between">
                            <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                              Detayları Gör
                            </span>
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

        {/* CTA Section */}
        {!isSearching && (
          <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Aradığınız Ürünü Bulamadınız mı?
                </h2>
                <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                  Uzman ekibimiz size özel çözümler geliştirmek için burada
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/iletisim" 
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
                  >
                    İletişime Geç
                  </a>
                  <a 
                    href="/teknik-destek" 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                  >
                    Teknik Destek
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
} 