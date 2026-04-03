/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbotrace: {
      logDetail: false,
    },
  },
};

export default nextConfig;