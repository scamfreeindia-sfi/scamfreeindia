"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import BlogCard from "./BlogCard"
import { BLOG_POSTS } from "../blog/data"

export default function Awareness() {
    const [blogs, setBlogs] = useState<any[]>([])
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in"

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch(`${backendUrl}/api/blogs`)
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Received non-JSON response:", text.substring(0, 100));
                    throw new Error("Expected JSON response but received something else");
                }

                const data = await res.json()
                if (data.success && data.data?.data) {
                    setBlogs(data.data.data.slice(0, 3))
                } else {
                    setBlogs(BLOG_POSTS.slice(0, 3))
                }
            } catch (error) {
                console.error("Error fetching blogs for Awareness section:", error)
                setBlogs(BLOG_POSTS.slice(0, 3))
            }
        }
        fetchBlogs()
    }, [])

    return (
        <section className="px-6 md:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[11px] font-black uppercase tracking-widest">
                        Stay Informed
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Recent Scam <span className="text-brand-blue">Awareness</span>
                    </h2>
                    <p className="text-brand-secondary max-w-xl text-lg leading-relaxed">
                        Stay ahead of online fraud with our latest expert analysis and safety guides.
                    </p>
                </div>
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 bg-[#111111] hover:bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl transition-all font-bold text-sm"
                >
                    View All Articles
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, blogIndex) => (
                    <BlogCard key={blog.id || blogIndex} {...blog} />
                ))}
            </div>
        </section>
    )
}