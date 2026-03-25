"use client"

import { useState } from "react"
import BlogCard from "../components/BlogCard"

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

interface BlogListProps {
    posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState("All Posts")

    const filteredPosts = selectedCategory === "All Posts"
        ? posts
        : posts.filter(post => post.category === selectedCategory)

    const categories = ["All Posts", ...new Set(posts.map(p => p.category))]

    return (
        <section className="px-6 md:px-16 pb-24">
            <div className="max-w-7xl mx-auto">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((tag) => (
                        <button
                            key={tag}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>
                
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 text-brand-secondary">
                        No posts found in this category.
                    </div>
                )}
            </div>
        </section>
    )
}
