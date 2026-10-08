"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShareLink from "./components/ShareLink";
import AdvisoryAction from "./components/AdvisoryAction";

interface PostData {
    title: string;
    content: string;
    created_at?: string;
    image?: string;
    image_url?: string;
    thumbnail?: string;
    featured_image?: string;
    author?: string | { name?: string; username?: string };
    excerpt?: string;
}

export default function NotFound() {
    const [pathname, setPathname] = useState("");
    const [loadingBlog, setLoadingBlog] = useState(false);
    const [post, setPost] = useState<PostData | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const path = window.location.pathname;
        setPathname(path);

        // Check if this 404 is actually a blog route that wasn't statically built yet
        const match = path.match(/^\/blog\/([^/?#]+)/);
        if (match && match[1]) {
            const slug = match[1];
            setLoadingBlog(true);

            fetch(`https://scamfreeind.in/api/blogs/${slug}`)
                .then((res) => {
                    if (!res.ok) throw new Error("Blog not found on API");
                    return res.json();
                })
                .then((json) => {
                    if (json.success && json.data) {
                        setPost(json.data);
                    }
                })
                .catch((err) => {
                    console.warn("Client fallback fetch failed for blog:", err);
                })
                .finally(() => {
                    setLoadingBlog(false);
                });
        }
    }, []);

    // 1. Loading state while checking if blog exists in CMS
    if (loadingBlog) {
        return (
            <div className="bg-brand-bg text-brand-primary min-h-screen flex flex-col justify-between font-sans">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
                    <div className="w-12 h-12 border-4 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin mb-6" />
                    <h2 className="text-xl font-bold text-white mb-2">Loading article...</h2>
                    <p className="text-brand-secondary text-sm">Fetching the latest post directly from ScamFreeIndia awareness desk</p>
                </div>
                <Footer />
            </div>
        );
    }

    // 2. Client fallback view: Post was found dynamically from API
    if (post) {
        const backendUrl = "https://scamfreeind.in";
        let postImage = post.image || post.image_url || post.thumbnail || post.featured_image;
        let displayImage = "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop";

        if (postImage && typeof postImage === "string") {
            if (postImage.startsWith("http")) {
                displayImage = postImage;
            } else {
                const cleanPath = postImage.replace(/^\/+/, "");
                displayImage = `${backendUrl}/${cleanPath}`;
            }
        }

        const authorName =
            typeof post.author === "string"
                ? post.author
                : post.author?.name || post.author?.username || "Team ScamFreeIndia";

        return (
            <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">
                <Header />

                <main className="pt-20 pb-20">
                    {/* Hero Section */}
                    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                        <Image
                            src={displayImage}
                            alt={post.title}
                            fill
                            unoptimized
                            className="object-cover scale-105"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-transparent to-brand-bg" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 via-brand-bg/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-16">
                            <div className="max-w-4xl mx-auto">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center text-brand-blue text-xs font-black uppercase tracking-[0.2em] mb-8 hover:translate-x-[-4px] transition-all bg-brand-blue/10 backdrop-blur-md px-4 py-2 rounded-lg border border-brand-blue/20"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to All Blogs
                                </Link>

                                <div className="relative group">
                                    <div className="absolute -left-6 top-0 w-1 h-full bg-brand-blue shadow-[0_0_15px_rgba(0,112,243,0.5)] hidden md:block" />
                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.0] text-white drop-shadow-2xl">
                                        {post.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 md:px-16 mt-8">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-8">
                                <article className="prose-custom">
                                    <div
                                        className="text-brand-secondary text-lg leading-relaxed space-y-6"
                                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                                    />

                                    <div className="mt-16 pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center overflow-hidden">
                                                <Image src="/logo.png" alt="Author" width={30} height={30} className="opacity-80" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold">Written by</p>
                                                <p className="text-brand-blue font-bold">{authorName}</p>
                                            </div>
                                        </div>
                                        <ShareLink />
                                    </div>
                                </article>
                            </div>

                            <aside className="lg:col-span-4 space-y-12">
                                <div className="bg-brand-card border border-brand-border rounded-3xl p-8 sticky top-32">
                                    <h3 className="text-xl font-bold mb-4">Been a victim of fraud?</h3>
                                    <p className="text-brand-secondary text-sm mb-6">
                                        Our experts can help you understand the next steps and how to report it to authorities.
                                    </p>
                                    <AdvisoryAction />
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    // 3. Standard stylish ScamFreeIndia 404 Page
    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen flex flex-col justify-between font-sans selection:bg-brand-blue/30 selection:text-brand-primary">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center px-6 py-28 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono font-bold tracking-widest uppercase">
                        Error 404 • Page Not Found
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
                        Lost in <span className="text-[#FFA500]">Cyberspace?</span>
                    </h1>

                    <p className="text-brand-secondary text-base md:text-lg max-w-xl mx-auto">
                        The page or article you are looking for might have been moved, renamed, or is temporarily unavailable. Stay vigilant and explore our verified awareness resources.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Link
                            href="/blog"
                            className="px-6 py-3 bg-brand-blue text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-brand-blue/20 text-sm"
                        >
                            Browse All Blogs
                        </Link>
                        <Link
                            href="/"
                            className="px-6 py-3 bg-white/5 border border-brand-border text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
