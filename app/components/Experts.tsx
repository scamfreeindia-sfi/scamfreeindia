"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Expert {
    name: string;
    role: string;
    location: string;
    image: string | null;
}

const EXPERT_METADATA: Record<
    string,
    { image: string | null; location: string }
> = {
    "Adv. Gaurav Charaya": {
        image: "/gaurav.jpeg",
        location: "Chandigarh, India",
    },
    "Adv. Gunjan Sachdeva": {
        image: "/gunjan.jpeg",
        location: "Chandigarh, India",
    },
    "Adv. Neha Bairagee": {
        image: null, // Set to null to fall back to the premium glowing letter placeholder as in the screenshot
        location: "Chandigarh, India",
    },
    "Rahul Kaushal": {
        image: null,
        location: "Chandigarh, India",
    },
};

const getFallbackStyle = (name: string) => {
    if (name.toLowerCase().includes("neha")) {
        return {
            borderClass: "border-2 border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.6)]",
            textClass: "text-[#3b82f6] font-black",
        };
    }
    // Default fallback (e.g. Rahul Kaushal)
    return {
        borderClass: "border border-slate-700/60 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
        textClass: "text-blue-500/80 font-bold",
    };
};

const STATIC_EXPERTS: Expert[] = [];

export default function Experts() {
    const [experts, setExperts] =
        useState<Expert[]>(STATIC_EXPERTS);

    const backendUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://127.0.0.1:8000";

    useEffect(() => {
        async function fetchExperts() {
            try {
                const res = await fetch(
                    `${backendUrl}/api/lawyer/list`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(
                        `HTTP Error: ${res.status}`
                    );
                }

                const data = await res.json();

                console.log("API Response:", data);

                if (
                    data?.success &&
                    Array.isArray(data?.lawyers)
                ) {
                    const mappedExperts =
                        data.lawyers.map(
                            (lawyer: any): Expert => {
                                const meta =
                                    EXPERT_METADATA[
                                        lawyer.name
                                    ] || {
                                        image: null,
                                        location:
                                            "Punjab, India",
                                    };

                                // Resolve the image path:
                                // 1. Use lawyer.image from backend API if set (converting relative path to full URL)
                                // 2. Otherwise fall back to local static metadata image path
                                let finalImage = null;
                                if (lawyer.image) {
                                    finalImage = lawyer.image.startsWith("http")
                                        ? lawyer.image
                                        : `${backendUrl}/storage/${lawyer.image}`;
                                } else {
                                    finalImage = meta.image || null;
                                }

                                return {
                                    name:
                                        lawyer.name ||
                                        "Unknown Expert",

                                    role:
                                        lawyer.address ||
                                        "Expert Legal Advisor",

                                    location:
                                        meta.location,

                                    image: finalImage,
                                };
                            }
                        );

                    setExperts(mappedExperts);
                }
            } catch (error) {
                console.error(
                    "Error fetching lawyers:",
                    error
                );
            }
        }

        fetchExperts();
    }, [backendUrl]);

    return (
        <section
            id="experts"
            className="expert-section relative overflow-hidden"
        >
            {/* Glowing background blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -z-10" />

            {/* Giant Vertical "EXPERTS" background text */}
            <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden lg:block">
                <div className="text-[14rem] font-black tracking-[0.25em] text-transparent -rotate-90 origin-center select-none"
                     style={{
                         WebkitTextStroke: '2px rgba(255, 255, 255, 0.025)',
                         fontFamily: 'system-ui, sans-serif'
                     }}>
                    EXPERTS
                </div>
            </div>

            <div className="text-center mb-16 md:mb-24 relative z-10">
                <h2 className="text-4xl md:text-7xl font-black mb-6">
                    Meet Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                        Experts
                    </span>
                </h2>

                <p className="text-brand-secondary text-lg md:text-xl max-w-3xl mx-auto">
                    Experienced professionals dedicated
                    to protecting you from financial
                    fraud, cybercrime, and digital
                    exploitation.
                </p>
            </div>

            <div className="expert-grid relative z-10">
                {experts.map((expert, index) => {
                    const fallback = getFallbackStyle(expert.name);
                    const initials = expert.name.charAt(0).toUpperCase();

                    return (
                        <div
                            key={index}
                            className="bg-[#17181D] border border-[#27272A]/70 rounded-[2.5rem] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-3 hover:bg-[#1E1F26] hover:border-zinc-700/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col items-center group relative overflow-hidden"
                        >
                            {/* Avatar / Portrait Circle */}
                            <div className="mb-6 relative flex-shrink-0">
                                {expert.image ? (
                                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden border border-zinc-700/40 group-hover:border-blue-500/80 transition-all duration-500 relative flex items-center justify-center bg-[#1A1A1F]">
                                        <Image
                                            src={expert.image}
                                            alt={expert.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-[140px] h-[140px] rounded-full flex items-center justify-center transition-all duration-500 bg-[#1A1A1F] ${fallback.borderClass}`}>
                                        <span className={`text-4xl font-extrabold tracking-tight ${fallback.textClass}`}>
                                            {initials}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <h3 className="text-white text-[22px] font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-blue-400">
                                {expert.name}
                            </h3>

                            {/* Mail Icon Button Container */}
                            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white mb-4 shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-all duration-300 group-hover:scale-110">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Role / Description */}
                            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[200px] mb-5 min-h-[40px] flex items-center justify-center">
                                {expert.role}
                            </p>

                            {/* Location Icon Button Container */}
                            <div className="w-9 h-9 rounded-full bg-[#EAB308] flex items-center justify-center text-white mb-3 shadow-[0_4px_12px_rgba(234,179,8,0.3)] transition-all duration-300 group-hover:scale-110">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            {/* Location */}
                            <p className="text-zinc-300 text-sm font-semibold tracking-wide mt-1">
                                {expert.location}
                            </p>
                        </div>
                    );
                })}
            </div>

            {experts.length === 0 && (
                <div className="text-center text-gray-400 mt-8 relative z-10">
                    No experts available
                </div>
            )}
        </section>
    );
}