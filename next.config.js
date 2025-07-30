/** @type {import('next').NextConfig} */

const nextConfig = {
  // Force all pages to be dynamic to prevent React context and Html import errors
  output: 'standalone',
  generateStaticParams: false,
  // Disable webpack cache for production to avoid large file size issues on Cloudflare Pages
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      config.cache = false;
      // Disable all webpack optimizations
      config.optimization = {
        ...config.optimization,
        minimize: false,
        minimizer: [],
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
  // Disable ALL build optimizations that might cause issues
  swcMinify: false,
  minify: false,
  compress: false,
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
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

module.exports = nextConfig 