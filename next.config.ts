import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      }
    ],
  },
  experimental: {
    allowedDevOrigins: ['faustina-postpalpebral-euphoniously.ngrok-free.dev'],
  } as any,
};

export default nextConfig;
