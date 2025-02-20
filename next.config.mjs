// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    formats:['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'webapp-spotly-img.s3.us-west-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'frontend-nelsonroas-bloxtek-production.up.railway.app'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      
    ],
    
  },
  devIndicators: {
    buildActivity: false
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
  
}
 
export default nextConfig