"use client"
import { useEffect, useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Harman Preet",
        text: "I was recently a victim of an online trading scam and felt completely lost. The team guided me through the proper complaint process and helped me understand the right steps to take. Their support was professional, responsive, and truly helpful during a difficult time. Highly recommended for anyone dealing with fraud.",
        stars: 5,
        image: "H"
    },
    {
        id: 2,
        name: "Tarun Mehta",
        text: "Scam Free India is creating a strong impact by educating people about different types of scams. Their efforts are helping many individuals stay alert and protect their hard-earned money. Keep up the great work!",
        stars: 5,
        image: "T"
    },
    {
        id: 3,
        name: "Bhakti Ramani",
        text: "We received prompt and reliable assistance, with clear guidance at every step. The entire process felt much easier and more manageable thanks to their support.",
        stars: 5,
        image: "B"
    },
    {
        id: 4,
        name: "Aman Verma",
        text: "I really appreciate the work done by Scam Free India. Their awareness posts helped me understand how scammers operate, especially in trading and investment scams. It’s a great initiative to protect innocent people from fraud.",
        stars: 5,
        image: "A"
    }
];

export default function Review() {
    const [activePos, setActivePos] = useState(0);
    const [cardWidth, setCardWidth] = useState(420);
    const [gap, setGap] = useState(32);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 768) {
                setCardWidth(window.innerWidth - 48);
                setGap(0);
            } else {
                setCardWidth(420);
                setGap(0);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        let lastTime = performance.now();
        let animationId: number;

        const animate = (time: number) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            const speed = 0.0003;

            setActivePos(prev => {
                const next = prev + speed * deltaTime;
                if (next >= reviews.length) {
                    return next - reviews.length;
                }
                return next;
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <div className="bg-[#050505] overflow-hidden border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2 className="text-2xl md:text-5xl font-bold text-center tracking-tight text-white mt-3">
                    People Who  <span className="bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green text-transparent">Trusted Us</span>
                </h2>

                <div className="relative min-h-[400px] md:min-h-[450px] w-full overflow-hidden flex items-center">
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="absolute left-1/2 flex items-center min-w-max will-change-transform"
                        style={{
                            gap: `${gap}px`,
                            transform: `translateX(calc(-1 * (${cardWidth / 2}px + ${activePos} * (${cardWidth + gap}px))))`
                        }}
                    >
                        {[...reviews, ...reviews].map((review, index) => {
                            const effectiveIndex = index % reviews.length;
                            let diff = Math.abs(effectiveIndex - activePos);
                            if (diff > reviews.length / 2) diff = Math.abs(diff - reviews.length);

                            const closeness = Math.max(0, 1 - diff);
                            const isActive = closeness > 0.5;

                            return (
                                <div
                                    key={`${review.id}-${index}`}
                                    aria-hidden={index >= reviews.length ? "true" : undefined}
                                    onClick={() => setActivePos(effectiveIndex)}
                                    style={{
                                        width: `${cardWidth}px`,
                                        opacity: 0.10 + closeness * 0.90,
                                        transform: `scale(${0.85 + closeness * 0.25}) translateZ(0)`,
                                        zIndex: Math.round(closeness * 10),
                                        backfaceVisibility: 'hidden',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                    className={`relative bg-[#0F0F0F] p-4 md:p-6 rounded-2xl border flex flex-col cursor-pointer
                                        ${isActive
                                            ? 'border-white/20 bg-[#151515] shadow-[0_0_50px_-10px_rgba(239,68,68,0.3)]'
                                            : 'border-white/5 grayscale pointer-events-none'
                                        }
                                    `}
                                >
                                    <div className="transform-gpu">
                                        <p className="text-gray-300 text-[10px] md:text-sm leading-relaxed antialiased">
                                            {review.text}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-auto pt-8 gap-4 transform-gpu">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm">
                                                    {review.image}
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-semibold text-white leading-tight">{review.name.toLowerCase()}</p>
                                                <div className="mt-2 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                        <path d="M12 23c3.11 0 5.72-1.01 7.63-2.74l-3.57-2.77c-1.06.72-2.43 1.15-4.06 1.15-3.13 0-5.78-2.12-6.73-4.97H1.61v2.87C3.51 20.31 7.48 23 12 23z" fill="#34A853" />
                                                        <path d="M5.27 13.67C5.02 12.92 4.88 12.12 4.88 11.3c0-.82.14-1.62.39-2.37V6.06H1.61C.58 8.12 0 10.42 0 12.8s.58 4.68 1.61 6.74l3.66-2.87z" fill="#FBBC05" />
                                                        <path d="M12 4.75c1.69 0 3.2.58 4.39 1.72l3.29-3.29C17.71 1.29 15.11 0 12 0 7.48 0 3.51 2.69 1.61 6.06l3.66 2.87c.95-2.85 3.6-4.97 6.74-4.97z" fill="#EA4335" />
                                                    </svg>
                                                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">View on Google!</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 bg-white/5 p-1 px-2    rounded-full border border-white/10 h-fit">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Pills */}
                    <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-2">
                        {reviews.map((_, i) => {
                            const diff = Math.abs(i - activePos);
                            const isActive = diff < 0.5 || diff > reviews.length - 0.5;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActivePos(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'w-10 bg-[#EF4444]' : 'bg-white/10'}`}
                                />
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Background Text Decals */}
            <div className="absolute top-[30%] left-[-5%] text-[20vw] font-black text-white/[0.02] select-none pointer-events-none -rotate-12 uppercase italic whitespace-nowrap leading-none">
                Trusted
            </div>
            <div className="absolute bottom-[20%] right-[-5%] text-[20vw] font-black text-white/[0.02] select-none pointer-events-none rotate-12 uppercase italic whitespace-nowrap leading-none">
                Verified
            </div>
        </div>
    );
}


