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
    '/services',
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
    let currentPage = 1
    let hasMore = true
    let allPosts: any[] = []

    while (hasMore) {
      const res = await fetch(`${apiUrl}/api/blogs?page=${currentPage}`, {
        next: { revalidate: 3600 }
      })
      const contentType = res.headers.get("content-type");
      if (res.ok && contentType && contentType.includes("application/json")) {
        const data = await res.json()
        if (data.success && data.data?.data) {
          const pagePosts = data.data.data || []
          allPosts = [...allPosts, ...pagePosts]
          const lastPage = data.data.last_page || 1
          if (currentPage < lastPage) {
            currentPage++
          } else {
            hasMore = false
          }
        } else {
          hasMore = false
        }
      } else {
        hasMore = false
      }
    }

    if (allPosts.length > 0) {
      blogRoutes = allPosts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    } else {
      throw new Error("No posts fetched from API")
    }
  } catch (error) {
    console.warn('API unavailable for sitemap generation, falling back to local data...')
    blogRoutes = BLOG_POSTS.map((post) => ({
       url: `${baseUrl}/blog/${post.slug}`,
       lastModified: new Date(post.date),
       changeFrequency: 'monthly' as const,
       priority: 0.6,
    }))
  }

  return [...staticRoutes, ...blogRoutes]
}

