import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Block API routes if they exist
    },
    sitemap: 'https://scamfreeind.in/sitemap.xml',
  }
}
