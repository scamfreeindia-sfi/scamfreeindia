"use client"

import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    image: string
    slug: string
}

interface PaginationData {
    current_page: number
    data: BlogPost[]
    last_page: number
    next_page_url: string | null
    prev_page_url: string | null
    total: number
}

interface BlogListProps {
    initialData: PaginationData | null
    currentPage: number
}

export default function BlogList({ initialData, currentPage: initialPage }: BlogListProps) {
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState("All Posts")
    const [data, setData] = useState<PaginationData | null>(initialData)
    const [loading, setLoading] = useState(false)

    const currentPage = parseInt(searchParams.get("page") || initialPage.toString())
    const searchQuery = searchParams.get("search") || ""

    useEffect(() => {
        // Skip fetching if it's the initial load and matches initialData (optional optimization)
        // For simplicity, we fetch if params exist and aren't defaults
        if (!searchParams.has("page") && !searchParams.has("search")) {
            setData(initialData)
            return
        }

        const fetchBlogs = async () => {
            setLoading(true)
            try {
                const apiUrl = 'https://scamfreeind.in'
                const endpoint = searchQuery
                    ? `${apiUrl}/api/blogs/search?search=${encodeURIComponent(searchQuery)}`
                    : `${apiUrl}/api/blogs?page=${currentPage}`

                const res = await fetch(endpoint)
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Received non-JSON response:", text.substring(0, 100));
                    throw new Error("Expected JSON response but received something else");
                }

                const json = await res.json()
                if (json.success) {
                    setData(json.data)
                }
            } catch (error) {
                console.error("Error fetching blogs on client:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [currentPage, searchQuery, initialData, searchParams])

    const posts = data?.data || []
    
    const filteredPosts = selectedCategory === "All Posts"
        ? posts
        : posts.filter(post => (post.category || (post as any).category_name || "Awareness") === selectedCategory)

    const categories = ["All Posts", ...new Set(posts.map(p => p.category || (p as any).category_name || "Awareness").filter(c => c !== "All Posts"))]

    const hasNextPage = data?.next_page_url !== null
    const hasPrevPage = data?.prev_page_url !== null

    return (
        <section className="px-6 md:px-16 pb-24">
            <div className="max-w-7xl mx-auto">
                {/* Filters */}
                {posts.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((tag, idx) => (
                            <button
                                key={`category-${tag}-${idx}`}
                                onClick={() => setSelectedCategory(tag)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${selectedCategory === tag
                                    ? "bg-[#FFA500] border-[#FFA500] text-white shadow-xl shadow-[#FFA500]/20"
                                    : "bg-[#111111] border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                {/* Category Title */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-[#FFA500] tracking-tight">
                        {selectedCategory === "All Posts" ? "All Scam Awareness" : selectedCategory}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-12">
                    {filteredPosts.map((post, idx) => (
                        <BlogCard key={`blog-${post.id}-${idx}`} {...post} />
                    ))}
                </div>
                
                {posts.length === 0 && (
                    <div className="text-center py-20 bg-brand-card border border-brand-border rounded-3xl">
                        <div className="mb-4 text-brand-blue">
                            <svg className="w-16 h-16 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 2v6h6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">No posts available yet</h3>
                        <p className="text-brand-secondary max-w-md mx-auto">
                            We're currently updating our knowledge center with new security insights. Check back soon for the latest updates.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {initialData && initialData.last_page > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-16">
                        <Link
                            href={`/blog?page=${currentPage - 1}`}
                            className={`px-6 py-3 rounded-xl font-bold border transition-all ${!hasPrevPage
                                ? "opacity-30 pointer-events-none border-brand-border text-brand-secondary"
                                : "border-brand-border text-brand-primary hover:border-brand-blue hover:text-brand-blue"
                                }`}
                        >
                            Previous
                        </Link>
                        
                        <span className="text-brand-secondary font-medium">
                            Page {currentPage} of {initialData.last_page}
                        </span>

                        <Link
                            href={`/blog?page=${currentPage + 1}`}
                            className={`px-6 py-3 rounded-xl font-bold border transition-all ${!hasNextPage
                                ? "opacity-30 pointer-events-none border-brand-border text-brand-secondary"
                                : "border-brand-border text-brand-primary hover:border-brand-blue hover:text-brand-blue"
                                }`}
                        >
                            Next
                        </Link>
                    </div>
                )}

                {/* Sticky Report Banner */}
                {/* <div className="fixed bottom-6 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-max z-50">
                    <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-full flex flex-col md:flex-row items-center gap-4 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-white font-bold text-sm whitespace-nowrap">Have You Been Scammed? Report now !!</span>
                        </div>
                        
                        <div className="bg-black/40 rounded-full flex items-center p-1 border border-white/5">
                            <input 
                                type="tel" 
                                placeholder="Enter your Mobile Number"
                                className="bg-transparent border-none focus:outline-none text-white text-sm px-4 py-2 w-48 placeholder:text-gray-500"
                            />
                            <button className="bg-[#FFA500] text-white p-2.5 rounded-full shadow-lg shadow-[#FFA500]/20 hover:scale-110 active:scale-95 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
