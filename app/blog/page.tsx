import Header from "../components/Header"
import Image from "next/image"
import BlogList from "./BlogList"
import BlogSearch from "./BlogSearch"
import { Metadata } from "next"
import { BLOG_POSTS } from "./data"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Blog & Awareness | Stay Scam-Free Today",
    description: "Read latest scam alerts, security guides, and online fraud insights from the expert team at ScamFreeIndia. Stay informed, stay safe.",
}

async function getBlogs(page = 1, searchQuery = "") {
    const apiUrl = process.env.API_URL || 'https://scamfreeind.in';

    // Determine which API to call
    const endpoint = searchQuery
        ? `${apiUrl}/api/blogs/search?search=${encodeURIComponent(searchQuery)}`
        : `${apiUrl}/api/blogs?page=${page}`;

    try {
        const res = await fetch(endpoint, {
            next: { revalidate: 60 },
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch blogs')
        }

        const json = await res.json()

        // Normalize search results if they differ from standard pagination
        // If it's a search, we might need to wrap the data in a structure BlogList expects
        if (searchQuery && json.success) {
            return {
                ...json,
                data: {
                    data: json.data,
                    current_page: 1,
                    last_page: 1,
                    total: json.data?.length || 0
                }
            }
        }

        return json
    } catch (error) {
        console.error("Error fetching blogs:", error)
        return null
    }
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; search?: string }>
}) {
    const { page, search } = await searchParams
    const currentPage = parseInt(page || '1')
    const searchQuery = search || ''
    const apiResponse = await getBlogs(currentPage, searchQuery)

    let blogData: any = null

    if (apiResponse?.success && apiResponse.data?.data && apiResponse.data.data.length > 0) {
        blogData = apiResponse.data
    } else {
        console.log("No data from API or empty data, falling back to static BLOG_POSTS")
        blogData = searchQuery ? {
            data: [],
            current_page: 1,
            last_page: 1,
            total: 0
        } : {
            data: BLOG_POSTS,
            current_page: 1,
            last_page: 1,
            total: BLOG_POSTS.length,
            next_page_url: null,
            prev_page_url: null
        }
    }

    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary pt-24 pb-12">
            <Header />
            <section className="px-6 md:px-16 pt-12 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-white">
                            Latest Blogs & <span className="text-[#FFA500]">Updates!</span>
                        </h1>

                        <BlogSearch />
                    </div>
                </div>
            </section>

            {/* Blog Grid with Client-Side Interaction */}
            <BlogList
                initialData={blogData}
                currentPage={currentPage}
            />

            <Footer />
        </div>
    )
}
