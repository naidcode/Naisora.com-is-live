/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true
  }
}

export default nextConfig;