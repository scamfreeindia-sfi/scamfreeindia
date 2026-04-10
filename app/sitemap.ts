import { MetadataRoute } from 'next'
 
import { BLOG_POSTS } from './blog/data'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://scamfreeindia.com'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  let blogRoutes: any[] = []
  try {
    const apiUrl = process.env.API_URL || 'https://scamfreeindia.com'
    const res = await fetch(`${apiUrl}/api/blogs`, {
      next: { revalidate: 3600 }
    })
    
    // Check if the response is actually valid JSON
    const contentType = res.headers.get("content-type");
    if (res.ok && contentType && contentType.includes("application/json")) {
      const data = await res.json()
      if (data.success && data.data?.data) {
        blogRoutes = data.data.data.map((post: any) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.updated_at || post.created_at || new Date()),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      } else {
        throw new Error("Invalid API Structure")
      }
    } else {
      throw new Error("Invalid Content-Type or Response from API")
    }
  } catch (error) {
    console.warn('API unavailable for sitemap generation, falling back to local data...')
    // Fallback to local hardcoded data during build time if the external API is down or building statically
    blogRoutes = BLOG_POSTS.map((post) => ({
       url: `${baseUrl}/blog/${post.slug}`,
       lastModified: new Date(post.date),
       changeFrequency: 'monthly' as const,
       priority: 0.6,
    }))
  }

  return [...staticRoutes, ...blogRoutes]
}

