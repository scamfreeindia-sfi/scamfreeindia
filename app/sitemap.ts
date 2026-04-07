import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.scamfreeind.in'

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
    const apiUrl = process.env.API_URL || 'https://scamfreeind.in'
    const res = await fetch(`${apiUrl}/api/blogs`, {
      next: { revalidate: 3600 }
    })
    const data = await res.json()
    
    if (data.success && data.data?.data) {
      blogRoutes = data.data.data.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticRoutes, ...blogRoutes]
}

