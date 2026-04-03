/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This generates a 'out' folder
  images: {
    unoptimized: true, // Required for static export to work without a Node.js server
  },
  trailingSlash: true, // Recommended for static hosting on Hostinger
};
export default nextConfig;
