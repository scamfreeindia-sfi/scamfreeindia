import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow development from ngrok
  allowedDevOrigins: ['*'] as any,
  images: {
    unoptimized: true, // Bypasses the proxy which is blocking private IPs (127.0.0.1)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
      {
        protocol: 'https',
        hostname: 'scamfreeind.in',
      },
      {
        protocol: 'https',
        hostname: 'www.scamfreeind.in',
      }
    ],
  },
};

export default nextConfig;
