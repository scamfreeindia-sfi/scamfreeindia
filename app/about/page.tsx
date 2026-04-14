import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "About Jaskaran Singh & ScamFreeIndia | Our Mission",
    description: "Meet Jaskaran Singh, founder of ScamFreeIndia. Discover our mission to protect Indian citizens from scams through awareness, education, and community support.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col selection:bg-brand-blue/30">
            <Header />

            <div className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero / Founder Section */}
                    <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
                        <div className="lg:col-span-12 text-center space-y-8 animate-slide-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold uppercase tracking-widest mb-4">
                                Founder's Story
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/jaskaran.jpeg"
                                    alt="Jaskaran Singh"
                                    width={260}
                                    height={260}
                                    className="rounded-full border-4 border-brand-blue shadow-xl object-cover"
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-white">
                                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-emerald-400">Jaskaran Singh</span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-bold text-brand-secondary">
                                Founder of ScamFree India
                            </p>
                        </div>

                        <div className="lg:col-span-8 lg:col-start-3 mt-12">
                            <div className="bg-brand-card/50 backdrop-blur-xl border border-brand-border p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-5 blur-[100px] -mr-40 -mt-20"></div>
                                <div className="relative z-10 space-y-6 text-lg md:text-xl text-brand-secondary leading-relaxed">
                                    <p>
                                        In today’s rapidly evolving digital world, scams are becoming more advanced — and unfortunately, more people are falling victim to them every day.
                                    </p>
                                    <p className="border-l-4 border-brand-blue pl-6 italic text-white font-medium">
                                        "I started ScamFree India with a clear and focused mission: to protect individuals from scams and empower them with the right knowledge at the right time."
                                    </p>
                                    <p>
                                        What began as an initiative is now growing into a movement dedicated to digital safety, financial awareness, and community protection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Who We Are & Values */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        <div className="bg-brand-card p-10 rounded-3xl border border-brand-border hover:border-brand-blue/30 transition-all">
                            <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
                            <p className="text-brand-secondary leading-relaxed text-lg">
                                Based in Punjab, India, ScamFree India is an awareness-driven platform committed to helping people identify, understand, and avoid scams. We aim to simplify complex fraud tactics into clear, practical guidance that anyone — regardless of age or background — can easily understand and apply.
                            </p>
                        </div>
                        <div className="bg-brand-section p-10 rounded-3xl border border-brand-blue/20 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6 text-brand-blue">What We Stand For</h2>
                            <p className="text-xl font-medium text-white leading-relaxed">
                                Awareness is the first and most powerful line of defense against scams. We focus on making people more alert, informed, and confident.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-32">
                        {/* Our Mission */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black tracking-tighter uppercase text-white px-2 border-l-8 border-brand-blue">Our Mission</h2>
                            <div className="grid gap-4">
                                {[
                                    "Educating individuals and families about the latest scams",
                                    "Promoting safe digital and financial habits",
                                    "Supporting victims with the right guidance and direction",
                                    "Creating a strong, aware, and scam-resistant community"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-brand-blue/20 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 text-brand-blue">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-brand-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black tracking-tighter uppercase text-white px-2 border-l-8 border-emerald-500">Our Vision</h2>
                            <div className="grid gap-4">
                                {[
                                    "Every individual is informed and alert",
                                    "People make safe and confident decisions online",
                                    "Scammers lose their power because awareness is stronger"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-brand-secondary">{item}</span>
                                    </div>
                                ))}
                                <div className="mt-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                                    <p className="text-emerald-400 font-bold italic text-center">
                                        "Our goal is to contribute towards building a secure and scam-free digital India."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why ScamFree India */}
                    <div className="bg-brand-section border border-brand-border rounded-[3rem] p-12 md:p-20 relative overflow-hidden mb-32 text-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px]"></div>
                        <h2 className="text-4xl md:text-5xl font-black mb-16 relative z-10">Why ScamFree India?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                "Trusted and reliable guidance",
                                "Simple, real-world solutions — no complicated jargon",
                                "A community-driven support system",
                                "A genuine mission focused on impact, not just awareness"
                            ].map((text, i) => (
                                <div key={i} className="bg-brand-card/80 p-6 rounded-2xl border border-brand-border hover:border-brand-blue/50 transition-all group shadow-xl">
                                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white italic">
                            Together, We Can Stay <span className="text-brand-blue">One Step Ahead</span>
                        </h2>
                        <p className="text-brand-secondary text-xl max-w-2xl mx-auto italic">
                            At ScamFree India, we are building more than just awareness — we are building a community that stands strong against fraud.
                        </p>
                        <div className="pt-8 flex flex-wrap justify-center gap-6">
                            <a href="" className="px-10 py-5 bg-brand-blue text-white font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-blue/20">
                                JOIN THE MOVEMENT
                            </a>
                        </div>
                        <div className="pt-12 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary/40">
                            <span>Stay Alert</span>
                            <span className="w-2 h-2 rounded-full bg-brand-blue/20"></span>
                            <span>Stay Aware</span>
                            <span className="w-2 h-2 rounded-full bg-brand-blue/20"></span>
                            <span>Stay Scam-Free</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
