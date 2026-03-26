import Header from "@/app/components/Header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Footer from "@/app/components/Footer"

interface Props {
    params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`, {
            next: { revalidate: 60 }
        })
        if (!res.ok) return null
        const data = await res.json()
        return data.success ? data.data : null
    } catch (error) {
        console.error("Error fetching post:", error)
        return null
    }
}

async function getAllPosts() {
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/blogs`, {
            next: { revalidate: 3600 }
        })
        if (!res.ok) return []
        const data = await res.json()
        return data.success ? data.data.data : []
    } catch (error) {
        return []
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: "Post Not Found | ScamFreeIndia",
        }
    }

    return {
        title: `${post.title} | ScamFreeIndia Awareness`,
        description: post.excerpt,
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post: any) => ({
        slug: post.slug,
    }))
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        notFound()
    }

    // Get related posts (mocked or from general list for now)
    const allPosts = await getAllPosts()
    const relatedPosts = allPosts.filter((p: any) => p.slug !== slug).slice(0, 3)

    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">
            <Header />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <div className="relative h-[50vh] min-h-[400px] w-full mb-12">
                    <Image
                        src={post.image || "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-12">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-brand-blue text-sm font-bold uppercase tracking-widest mb-6 hover:translate-x-[-4px] transition-transform"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to All Blogs
                            </Link>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-[10px] font-black uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <span className="text-brand-secondary text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-brand-border" />
                                    {post.date}
                                </span>
                                <span className="text-brand-secondary text-sm flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-brand-border" />
                                    {post.read_time || '5 min read'}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 md:px-16">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Article Body */}
                        <div className="lg:col-span-8">
                            <article className="prose-custom">
                                <div
                                    className="text-brand-secondary text-lg leading-relaxed space-y-6"
                                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                                />

                                {/* Post Footer */}
                                <div className="mt-16 pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center overflow-hidden">
                                            <Image
                                                src="/logo.png"
                                                alt="Author"
                                                width={30}
                                                height={30}
                                                className="opacity-80"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Written by</p>
                                            <p className="text-brand-blue font-bold">
                                                {typeof post.author === 'string' 
                                                    ? post.author 
                                                    : (post.author as any)?.name || (post.author as any)?.username || 'Team ScamFreeIndia'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-brand-secondary mr-2 font-bold uppercase tracking-wider">Share</p>
                                        <button className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-blue transition-colors group">
                                            <svg className="w-5 h-5 group-hover:text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </button>
                                        <button className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-blue transition-colors group">
                                            <svg className="w-5 h-5 group-hover:text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </button>
                                        <button className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-blue transition-colors group">
                                            <svg className="w-5 h-5 group-hover:text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.611 0-1.109-.498-1.109-1.109s.498-1.109 1.109-1.109 1.109.498 1.109 1.109-.498 1.109-1.109 1.109zm7.891 6.891h-1.891v-3.5c0-1.933-2.5-1.722-2.5 0v3.5h-1.891v-6h1.891v.917c.917-1.417 4.391-1.528 4.391 1.583v3.5z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Advisory Card */}
                            <div className="bg-brand-card border border-brand-border rounded-3xl p-8 sticky top-32">
                                <h3 className="text-xl font-bold mb-4">Been a victim of fraud?</h3>
                                <p className="text-brand-secondary text-sm mb-6">
                                    Our experts can help you understand the next steps and how to report it to authorities.
                                </p>
                                <a href="/#report" className="w-full inline-flex justify-center py-4 bg-brand-blue text-white font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-blue/20">
                                    TALK TO AN EXPERT
                                </a>

                                <div className="mt-8 pt-8 border-t border-brand-border">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">Related Topics</h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map((rp: any) => (
                                            <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                                                <p className="text-sm font-bold group-hover:text-brand-blue transition-colors line-clamp-2 mb-1">
                                                    {rp.title}
                                                </p>
                                                <p className="text-[10px] text-brand-secondary uppercase font-bold tracking-tighter">
                                                    {rp.date}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {/* Newsletter Section */}
            <section className="px-6 md:px-16 pb-24">
                <div className="max-w-5xl mx-auto bg-brand-card border border-brand-border rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-brand-blue opacity-[0.03] blur-[80px]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Alert, Stay Safe</h2>
                    <p className="text-brand-secondary text-lg mb-10 max-w-xl mx-auto">
                        Get weekly updates on the latest scams targeting Indians and how to protect yourself.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-brand-bg border border-brand-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-brand-blue/50 outline-none transition-all"
                        />
                        <button className="bg-brand-blue text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
