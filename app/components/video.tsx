"use client"

import Image from "next/image"
import { useState } from "react"

export default function Video() {
    const [mobileNumber, setMobileNumber] = useState("")

    const videos = [
        {
            title: "The Architecture of Financial Deception",
            id: "Case 01",
            thumb: "/clean-thumb.png", 
            category: "ANALYTICS"
        },
        {
            title: "Securing Your Digital Presence",
            id: "Case 02",
            thumb: "/clean-thumb.png", 
            category: "PROTECTION"
        },
        {
            title: "The Path to Financial Recovery",
            id: "Case 03",
            thumb: "/clean-thumb.png", 
            category: "PROTOCOL"
        }
    ]

    return (
        <section className="py-32 px-6 bg-brand-bg relative overflow-hidden" id="video">
            {/* Soft decorative background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 blur-[160px] rounded-full pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-green/10 blur-[130px] rounded-full pointer-events-none opacity-40"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-brand-blue font-bold text-xs tracking-[0.5em] uppercase mb-5 block opacity-90">
                        LEARNING CENTER
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-8">
                        Deep Dives Into <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">Digital Safety</span>
                    </h2>
                    <p className="text-lg text-brand-secondary leading-relaxed max-w-xl mx-auto">
                        In-depth video analysis of modern cyber threats and the protocols we use to build a scam-free nation.
                    </p>
                </div>

                {/* Video Grid: Refined & Elegant */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                    {videos.map((video, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-brand-card ring-1 ring-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-700 hover:ring-brand-blue/40 transform hover:-translate-y-3">
                                
                                <Image
                                    src={video.thumb}
                                    alt={video.title}
                                    fill
                                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter brightness-[85%] group-hover:brightness-100"
                                />

                                {/* Elegant Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transform transition-all duration-700 scale-90 group-hover:scale-100 group-hover:bg-brand-blue group-hover:border-brand-blue shadow-2xl">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-90 transition-all duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-brand-bg ml-1">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Refined Label Badge */}
                                <div className="absolute top-8 left-8">
                                    <span className="text-[10px] font-black text-white bg-black/60 shadow-xl backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 tracking-[0.2em] leading-none uppercase">
                                        {video.id}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Card Typography Breakdown */}
                            <div className="mt-8 px-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-px w-8 bg-brand-blue"></div>
                                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{video.category}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors duration-500 leading-tight">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimalist Floating Action Bar */}
                <div className="flex justify-center px-4">
                    <div className="w-full max-w-4xl bg-brand-card/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-4 pl-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border-b-2 border-brand-blue/20">
                        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                             <h4 className="text-white font-black text-lg tracking-tight uppercase">Emergency Support</h4>
                             <p className="text-brand-secondary text-xs font-medium tracking-wide">Enter your details for a 1-on-1 priority case review.</p>
                        </div>
                        
                        <form className="flex-1 max-w-md w-full flex items-center gap-4 pr-1" onSubmit={(e) => e.preventDefault()}>
                             <input 
                                type="tel" 
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                placeholder="Phone number or Case ID"
                                className="flex-1 bg-brand-bg/40 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:border-brand-blue/50 focus:bg-brand-bg/60 outline-none transition-all placeholder-white/20 text-white font-medium"
                             />
                             <button type="submit" className="bg-brand-blue hover:brightness-110 px-8 py-4 rounded-2xl text-white font-black text-xs tracking-widest uppercase transition-all shadow-[0_15px_30px_rgba(59,130,246,0.3)] active:scale-[0.98]">
                                Submit
                             </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Discrete Floating Contact Action */}
            <div className="fixed bottom-12 right-12 z-[100]">
                 <button className="flex items-center gap-5 bg-brand-blue text-white pl-8 pr-6 py-5 rounded-full shadow-[0_20px_50px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 transition-all group ring-4 ring-brand-blue/10">
                    <span className="font-black text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-700 max-w-0 group-hover:max-w-[250px] whitespace-nowrap overflow-hidden">Talk to Safety Expert</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                 </button>
            </div>
        </section>
    )
}