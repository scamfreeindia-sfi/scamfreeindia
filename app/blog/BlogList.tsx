"use client"

import { useState } from "react"
import BlogCard from "../components/BlogCard"
import Link from "next/link"

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

export default function BlogList({ initialData, currentPage }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState("All Posts")

    const posts = initialData?.data || []
    
    const filteredPosts = selectedCategory === "All Posts"
        ? posts
        : posts.filter(post => (post.category || (post as any).category_name || "Awareness") === selectedCategory)

    const categories = ["All Posts", ...new Set(posts.map(p => p.category || (p as any).category_name || "Awareness").filter(c => c !== "All Posts"))]

    const hasNextPage = initialData?.next_page_url !== null
    const hasPrevPage = initialData?.prev_page_url !== null

    return (
        <section className="px-6 md:px-16 pb-24">
            <div className="max-w-7xl mx-auto">
                {/* Filters */}
                {posts.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((tag, idx) => (
                            <button
                                key={`category-${tag}-${idx}`}
                                onClick={() => setSelectedCategory(tag)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${selectedCategory === tag
                                    ? "bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/25"
                                    : "bg-brand-card border-brand-border text-brand-secondary hover:border-brand-blue/50"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
        </section>
    )
}
