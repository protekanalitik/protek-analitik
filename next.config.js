const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Force all pages to be dynamic to prevent React context and Html import errors
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  generateStaticParams: false,
  
  // Güvenli webpack optimizasyonları
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      // Production için cache devre dışı
      config.cache = false;
      
      // Edge Runtime uyumlu güvenli optimizasyonlar
      config.optimization = {
        ...config.optimization,
        usedExports: true, // Tree shaking için
        sideEffects: false, // Güvenli tree shaking
        minimize: true, // Minification aktif
      };
    }
    return config;
  },
  // Disable build traces completely to prevent stack overflow
  experimental: {
    outputFileTracingRoot: process.cwd(),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '.next/cache/**/*',
        '.git/**/*',
      ],
    },
    // Force all pages to be dynamic to prevent React context errors
    isrMemoryCacheSize: 0,
    workerThreads: false,
    // Disable static generation completely
    staticPageGenerationTimeout: 0,
  },
  // SWC minify aktif (güvenli)
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-94c47ebc7b14458eb1e09b63a8768d72.r2.dev',
        port: '',
        pathname: '/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig) 