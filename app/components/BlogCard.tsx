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
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in";

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
        <div className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-300 flex flex-col h-full shadow-2xl">
            {/* Image Container with Padding */}
            <div className="p-4 pb-0">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                        src={displayImage}
                        alt={title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug group-hover:text-brand-blue/80 transition-colors line-clamp-2">
                    {title}
                </h3>

                {displayExcerpt && (
                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2 leading-relaxed">
                        {displayExcerpt}
                    </p>
                )}

                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-[#FFA500] font-bold text-sm hover:underline transition-all mt-auto"
                >
                    Read More!
                </Link>
            </div>
        </div>
    )
}
