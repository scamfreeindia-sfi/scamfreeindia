import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import AdvisoryAction from '../components/AdvisoryAction';

export const metadata: Metadata = {
    title: "About Jaskaran Singh & Adv. G.S Cheema | ScamFree India",
    description: "Meet Jaskaran Singh and Adv. G.S Cheema, the driving force behind ScamFree India. Discover our mission to protect Indian citizens from scams through awareness, legal guidance, and community support.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col selection:bg-brand-blue/30">
            <Header />

            <div className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero / Leadership Section */}
                    <div className="mb-32">
                        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16 animate-slide-up">
                            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-brand-blue/10">
                                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                                Leadership &amp; Vision
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
                                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-teal-400 to-emerald-400">Jaskaran Singh</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Adv. G.S Cheema</span>
                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-secondary max-w-2xl mx-auto">
                                The driving force behind ScamFree India — combining cyber threat awareness and legal advocacy to protect citizens nationwide.
                            </p>
                        </div>

                        {/* Co-Founders / Leaders Profile Cards */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
                            {/* Jaskaran Singh Card */}
                            <div className="group relative bg-brand-card/70 backdrop-blur-xl border border-brand-border rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:border-brand-blue/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col items-center text-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[70px] pointer-events-none -mr-20 -mt-20 group-hover:bg-brand-blue/20 transition-all"></div>

                                <div className="relative mb-6">
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-brand-blue/30 shadow-2xl group-hover:border-brand-blue transition-all duration-500 group-hover:scale-105">
                                        <Image
                                            src="/jaskaran.jpeg"
                                            alt="Jaskaran Singh - Founder of ScamFree India"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#121317] border border-brand-blue/40 text-brand-blue text-xs font-black uppercase tracking-wider shadow-lg whitespace-nowrap">
                                        Founder
                                    </div>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-brand-blue transition-colors">
                                    Jaskaran Singh
                                </h2>

                                <p className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
                                    Founder &amp; Anti-Fraud Specialist
                                </p>

                                <p className="text-brand-secondary text-base leading-relaxed mb-6">
                                    Spearheading public cyber education and rapid incident awareness to help victims take swift, informed action against digital fraudsters.
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Cyber Safety</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Fraud Prevention</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Community Awareness</span>
                                </div>
                            </div>

                            {/* Adv. G.S Cheema Card */}
                            <div className="group relative bg-brand-card/70 backdrop-blur-xl border border-brand-border rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col items-center text-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[70px] pointer-events-none -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-all"></div>

                                <div className="relative mb-6">
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl group-hover:border-emerald-400 transition-all duration-500 group-hover:scale-105">
                                        <Image
                                            src="/cheema.jpeg"
                                            alt="Adv. G.S Cheema - Senior Legal Advisor"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#121317] border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider shadow-lg whitespace-nowrap">
                                        Legal Expert
                                    </div>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    Adv. G.S Cheema
                                </h2>

                                <p className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-4">
                                    Senior Legal Advisor &amp; Advocate
                                </p>

                                <p className="text-brand-secondary text-base leading-relaxed mb-6">
                                    Providing robust legal framework insight, victim representation guidance, and regulatory compliance to counter financial and cyber exploits.
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2 justify-center">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Cyber Law</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Victim Advocacy</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-secondary font-medium">Legal Guidance</span>
                                </div>
                            </div>
                        </div>

                        {/* Story & Philosophy Quote Box */}
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-brand-card/50 backdrop-blur-xl border border-brand-border p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-[100px] pointer-events-none -mr-40 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none -ml-40 -mb-20"></div>
                                <div className="relative z-10 space-y-6 text-lg md:text-xl text-brand-secondary leading-relaxed">
                                    <p>
                                        In today’s rapidly evolving digital world, scams are becoming more advanced — and unfortunately, innocent people and families are falling victim to them every day.
                                    </p>
                                    <div className="border-l-4 border-brand-blue pl-6 py-2 bg-brand-blue/5 rounded-r-2xl border-y border-r border-brand-blue/10">
                                        <p className="italic text-white font-medium text-lg md:text-xl leading-relaxed">
                                            "We established ScamFree India with a clear and focused mission: to protect individuals from digital frauds, demystify complex scams, and provide the immediate knowledge and direction needed to fight back."
                                        </p>
                                        <p className="text-xs uppercase tracking-widest text-brand-blue font-bold mt-3">
                                            — Jaskaran Singh &amp; Adv. G.S Cheema
                                        </p>
                                    </div>
                                    <p>
                                        What began as an initiative has grown into a nationwide movement dedicated to digital safety, financial awareness, and community protection.
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
                                ScamFreeIndia is an initiative and operating brand of Inventour Legal LLP, based in Mohali, Punjab, India. We are committed to helping people identify, understand, and avoid scams by simplifying complex fraud tactics into clear, practical guidance that anyone can easily understand and apply.
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
                            <AdvisoryAction />
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
