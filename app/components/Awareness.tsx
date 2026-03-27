"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS } from "../blog/data"

export default function Awareness() {
    const [blogs, setBlogs] = useState<any[]>([])
    const backendUrl = "http://127.0.0.1:8000"

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch(`${backendUrl}/api/blogs`)
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
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest">
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
                    className="group inline-flex items-center gap-2 bg-brand-card hover:bg-brand-blue/10 border border-brand-border hover:border-brand-blue/50 text-brand-primary px-6 py-3 rounded-xl transition-all font-bold text-sm shadow-lg shadow-black/20"
                >
                    View All Articles
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, blogIndex) => {
                    // Resolve image URL
                    let rawImage = blog.featured_image || blog.image || blog.thumbnail || blog.image_url;
                    let displayImage = "";
                    if (rawImage && typeof rawImage === 'string') {
                        displayImage = rawImage.startsWith('http') ? rawImage : `${backendUrl}/${rawImage.replace(/^\/+/, "")}`;
                    }

                    return (
                        <Link
                            href={`/blog/${blog.slug}`}
                            key={blog.id || blogIndex}
                            className="group flex flex-col bg-brand-card rounded-[2rem] border border-brand-border overflow-hidden hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="aspect-video bg-[#0A0A0A] w-full border-b border-brand-border relative overflow-hidden">
                                {displayImage ? (
                                    <Image
                                        src={displayImage}
                                        alt={blog.title}
                                        fill
                                        unoptimized
                                        className="transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-secondary/20">
                                        <svg className="w-16 h-16 opacity-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-[10px] font-black px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/20 uppercase tracking-widest">
                                        {blog.category || (blog as any).category_name || "Awareness"}
                                    </span>
                                    <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-wider">
                                        {blog.date || new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors mb-4 text-white leading-tight line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-brand-secondary text-sm line-clamp-2 mb-6">
                                    {blog.summary || blog.excerpt || ""}
                                </p>
                                <div className="mt-auto pt-6 border-t border-brand-border/50">
                                    <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 uppercase tracking-widest">
                                        Read Analysis
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}