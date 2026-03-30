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

export default function BlogCard({ title, excerpt, date, author, category, image, ...props }: any) {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

    let rawImage =
        image ||
        props.featured_image ||
        props.image_url ||
        props.thumbnail ||
        props.img;

    let displayImage = "";
    if (rawImage && typeof rawImage === "string") {
        if (rawImage.startsWith("http")) {
            displayImage = rawImage;
        } else {
            const cleanPath = rawImage.replace(/^\/+/, "");
            displayImage = `${backendUrl}/${cleanPath}`;
        }
    }

    if (!displayImage) {
        displayImage = "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop";
    }

    const displayExcerpt = excerpt || props.summary || props.description || "";
    const displayCategory = category || props.category_name;
    const displayDate = date || props.created_at || props.published_at;
    const { slug } = props;

    return (
        <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-blue/50 transition-all duration-300 flex flex-col h-full shadow-lg shadow-black/20">
            <div className="relative aspect-video overflow-hidden blur-2">
                <Image
                    src={displayImage}
                    alt={title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-105 "
                />

                {/* <div className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {displayCategory}
                </div> */}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* {displayDate && (
                    <div className="flex items-center gap-2 text-brand-secondary text-[10px] mb-3 uppercase tracking-widest font-bold">
                        <span>{new Date(displayDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                )} */}

                <h3 className="text-xl font-bold text-brand-primary mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2">
                    {title}
                </h3>

                {displayExcerpt && (
                    <p className="text-brand-secondary text-sm mb-6 flex-1 line-clamp-3">
                        {displayExcerpt}
                    </p>
                )}

                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-brand-blue font-semibold text-sm hover:underline group/link mt-auto"
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
