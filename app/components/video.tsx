"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface VideoData {
    video_section_title: string[]
    video_section_title_color: string
    video_section_subtitle: (string | null)[]
    video_section_subtitle_color: string
    video_section_video: string[]
}

interface VideoItem {
    title: string
    url: string
    thumbnail: string
    category: string
    isShorts?: boolean
}

export default function Video() {
    const [apiData, setApiData] = useState<VideoData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            try {
                const backendUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in"
                const response = await fetch(`${backendUrl}/api/video-section`, {
                    signal: controller.signal
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await response.text();
                    console.error("Received non-JSON response:", text.substring(0, 100));
                    throw new Error("Expected JSON response but received something else");
                }

                const result = await response.json()
                if (result.success && result.data) {
                    setApiData(result.data)
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("API Error fetching video section:", error)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
        return () => controller.abort()
    }, [])

    const getYoutubeId = (url: string | null) => {
        if (!url) return null
        const match = url.match(/(?:shorts\/|v=|\/vi\/|youtu\.be\/|\/v\/|\/e\/|embed\/|user\/[^/]+\/u\/\d+\/|videos\/|v\/|(?:\?|&)v=)([^#&?]*)/)
        return match && match[1].length === 11 ? match[1] : null
    }

    const videos: VideoItem[] = []

    if (apiData?.video_section_video && Array.isArray(apiData.video_section_video)) {
        apiData.video_section_video.forEach((videoUrl, index) => {
            const videoId = getYoutubeId(videoUrl)
            const videoTitle = apiData.video_section_title?.[index] || "Latest Awareness Case"

            videos.push({
                title: videoTitle,
                url: videoUrl,
                thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
                category: "LATEST CASE",
                isShorts: videoUrl.includes('shorts')
            })
        })
    }

    const staticVideos: VideoItem[] = [
        {
            title: "₹601 Crore Penalty by SEBI!",
            url: "#",
            thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
            category: "PENALTY ALERT"
        },
        {
            title: "Exclusive: The Money Trail Revealed",
            url: "#",
            thumbnail: "https://images.unsplash.com/photo-1554224155-1696413565d3",
            category: "EXCLUSIVE",
            isShorts: true
        },
        {
            title: "₹25,000 Crore Investment Scam",
            url: "#",
            thumbnail: "https://images.unsplash.com/photo-1621416848440-2369dadaf355",
            category: "FRAUD FREE"
        }
    ]

    const displayVideos = [...videos, ...staticVideos.slice(videos.length)]

    return (
        <section className="py-24 px-6 bg-[#0a0a0b] relative overflow-hidden" id="video">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest animate-pulse">
                        Live Awareness
                    </div>

                    {apiData?.video_section_subtitle?.[0] && (
                        <p
                            className="max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80"
                            style={{ color: apiData.video_section_subtitle_color }}
                        >
                            {apiData.video_section_subtitle[0]}
                        </p>
                    )}  
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <div className="w-12 h-12 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Analyzing Data...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {displayVideos.map((video, idx) => (
                            <a
                                key={idx}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block rounded-[1.5rem] mx-auto w-full overflow-hidden bg-brand-card border border-white/5 hover:border-red-600/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl hover:shadow-red-600/5 ${video.isShorts ? "max-w-[340px] aspect-[9/16]" : "aspect-video"}`}
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    unoptimized={video.thumbnail.includes('youtube')}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                                        <div className="relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-black/50">
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M7 6v12l10-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-5 left-5 right-5 flex justify-between items-start pointer-events-none">
                                    <span className="text-xs font-black bg-red-600 text-white px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        {video.category}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                                        {video.title}
                                    </h3>

                                    <div className="mt-4 flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span>Click to Watch</span>
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {!isLoading && !apiData && displayVideos.length === 0 && (
                    <div className="text-center py-20 space-y-6">
                        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-red-500 mx-auto">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <p className="text-red-500 text-xl font-bold">Failed to load live awareness content</p>
                    </div>
                )}

            </div>
        </section>
    )
}