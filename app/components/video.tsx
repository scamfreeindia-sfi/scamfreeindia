"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface VideoData {
    // video_section_title: string
    video_section_title_color: string
    video_section_subtitle: string | null
    video_section_subtitle_color: string
    video_section_video: string | null
}

interface LocalVideo {
    title: string
    id: string
    thumb: string
    category: string
    isShorts?: boolean
}

export default function Video() {
    const [mobileNumber, setMobileNumber] = useState("")
    const [videoData, setVideoData] = useState<VideoData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch("https://scamfreeind.in/api/video-section", {
                    signal: controller.signal
                })
                const result = await response.json()
                if (result.success && result.data) {
                    setVideoData(result.data)
                }
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch video data:", error)
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
        return () => controller.abort()
    }, [])

    const videos: LocalVideo[] = [
        {
            title: "\u20b9601 Crore Penalty by SEBI!",
            id: "Case 01",
            thumb: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
            category: "PENALTY ALERT"
        },
        {
            title: "Exclusive: The Money Trail Revealed",
            id: "Case 02",
            thumb: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=80",
            category: "EXCLUSIVE",
            isShorts: true
        },
        {
            title: "\u20b925,000 Crore Investment Scam",
            id: "Case 03",
            thumb: "https://images.unsplash.com/photo-1621416848440-2369dadaf355?auto=format&fit=crop&w=800&q=80",
            category: "FRAUD FREE"
        },
        {
            title: "Trading Game Over: Are You Next?",
            id: "Case 04",
            thumb: "https://images.unsplash.com/photo-1611974717482-48a8570072d7?auto=format&fit=crop&w=800&q=80",
            category: "SECURITY"
        },
        {
            title: "Invisible Scams Traders Can't Catch",
            id: "Case 05",
            thumb: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=800&q=80",
            category: "TRAINING"
        }
    ]

    return (
        <section className="py-32 px-6 bg-[#0a0a0b] relative overflow-hidden" id="video">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="text-red-600 font-black text-xs tracking-[0.4em] uppercase mb-4 block">
                        Watch & Learn
                    </span>
                    {/* <h2
                        className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6"
                        style={{ color: videoData?.video_section_title_color }}
                    >
                        {videoData?.video_section_title || "Deep Dive Into Scams"}
                    </h2> */}
                    <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
                        High-impact video analysis of modern cyber threats and financial crimes.
                    </p>
                </div>

                {/* Masonry Grid Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {videos.map((video, i) => (
                        <div key={i} className="break-inside-avoid">
                            <div className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 hover:border-red-600/30 ${video.isShorts ? "aspect-[9/16]" : "aspect-video"}`}>
                                <Image
                                    src={video.thumb}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[85%] group-hover:brightness-100"
                                />

                                {/* YouTube Style Red Play Button */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] transform transition-all duration-500 group-hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Label Badge */}
                                <div className="absolute top-6 left-6 flex items-center gap-2">
                                    <span className="text-[10px] font-black text-white bg-red-600 px-3 py-1 rounded-md tracking-wider uppercase shadow-lg">
                                        {video.category}
                                    </span>
                                </div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Integration of Featured API Video if present
                {videoData?.video_section_video && (
                    <div className="mt-20 flex justify-center">
                        <div className="inline-flex items-center gap-4 bg-brand-card/50 border border-white/10 px-8 py-4 rounded-full backdrop-blur-xl">
                            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                            <span className="text-white font-bold text-sm">Latest Featured Content Available</span>
                            <a
                                href={videoData.video_section_video}
                                target="_blank"
                                className="text-brand-blue font-bold text-sm hover:underline"
                            >
                                Watch Now \u2192
                            </a>
                        </div>
                    </div>
                )} */}
            </div>

        </section>
    )
}