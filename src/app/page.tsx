'use client'

import dynamicImport from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Dynamic imports to reduce bundle size (safe optimization)
const Hero = dynamicImport(() => import('@/components/sections/Hero'))
const Features = dynamicImport(() => import('@/components/sections/Features'))
const Solutions = dynamicImport(() => import('@/components/sections/Solutions'))
const Products = dynamicImport(() => import('@/components/sections/Products'))
const Clients = dynamicImport(() => import('@/components/sections/Clients'))
const Sectors = dynamicImport(() => import('@/components/sections/Sectors'))
const About = dynamicImport(() => import('@/components/sections/About'))
const Contact = dynamicImport(() => import('@/components/sections/Contact'))

// Force dynamic rendering to prevent static generation errors
export const dynamic = 'force-dynamic'
// Use Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Products />
      <Clients />
      <Sectors />
      <About />
      <Contact />
      <Footer />
    </main>
  )
} 