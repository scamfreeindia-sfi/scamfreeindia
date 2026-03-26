"use client"

import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    author: any
    category: string
    image: string
    slug: string
}

export default function BlogCard({ title, excerpt, date, author, category, image, slug }: BlogCardProps) {
    return (
        <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-blue/50 transition-all duration-300 flex flex-col h-full shadow-lg shadow-black/20">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image || "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-brand-secondary text-xs mb-3">
                    <span>{date}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-border"></span>
                    <span>
                        {typeof author === 'string' 
                            ? author 
                            : (author as any)?.name || (author as any)?.username || 'Team ScamFreeIndia'}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-brand-primary mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>

                <p className="text-brand-secondary text-sm mb-6 flex-1 line-clamp-3">
                    {excerpt}
                </p>

                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-brand-blue font-semibold text-sm hover:underline group/link"
                >
                    Read More
                    <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
