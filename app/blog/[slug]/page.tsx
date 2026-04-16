import Header from "@/app/components/Header"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Footer from "@/app/components/Footer"
import { BLOG_POSTS } from "../data"
import AdvisoryAction from "@/app/components/AdvisoryAction";
import ShareLink from "@/app/components/ShareLink"


interface Props {
    params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
    const apiUrl = process.env.API_URL || 'https://scamfreeind.in';
    try {
        const res = await fetch(`${apiUrl}/api/blogs/${slug}`, {
            next: { revalidate: 60 }
        })
        if (res.ok) {
            const data = await res.json()
            if (data.success) return data.data
        }
    } catch (error) {
        console.error("Error fetching post from API:", error)
    }

    // Fallback to static data
    return BLOG_POSTS.find(p => p.slug === slug) || null
}

async function getAllPosts(maxPages: number = 0) {
    const apiUrl = process.env.API_URL || 'https://scamfreeind.in';
    let allApiPosts: any[] = [];
    let currentPage = 1;
    let hasMore = true;

    try {
        while (hasMore) {
            const res = await fetch(`${apiUrl}/api/blogs?page=${currentPage}`, {
                next: { revalidate: 3600 }
            })
            if (res.ok) {
                const data = await res.json()
                if (data.success) {
                    const pagePosts = data.data.data || [];
                    allApiPosts = [...allApiPosts, ...pagePosts];

                    // Check if there are more pages
                    const lastPage = data.data.last_page || 1;
                    if (currentPage < lastPage && (maxPages === 0 || currentPage < maxPages)) {
                        currentPage++;
                    } else {
                        hasMore = false;
                    }
                } else {
                    hasMore = false;
                }
            } else {
                hasMore = false;
            }
        }
    } catch (error) {
        console.error("Error fetching all blogs from API:", error)
    }

    // Merge API posts with static BLOG_POSTS, preventing duplicates by slug
    const finalPosts = [...allApiPosts];
    BLOG_POSTS.forEach(staticPost => {
        if (!finalPosts.find((p: any) => p.slug === staticPost.slug)) {
            finalPosts.push(staticPost);
        }
    });

    return finalPosts;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPost(slug)

    if (!post) {
        return {
            title: "Post Not Found | ScamFreeIndia",
        }
    }

    const backendUrl = process.env.API_URL || "https://scamfreeind.in";
    const frontendUrl = "https://scamfreeindia.com";
    let postImage = post.image || post.image_url || post.thumbnail || post.featured_image || post.img;
    let displayImage = "https://www.scamfreeindia.com/og-image.png";

    if (postImage && typeof postImage === 'string') {
        if (postImage.startsWith('http')) {
            displayImage = postImage;
        } else {
            const cleanPath = postImage.replace(/^\/+/, "");
            displayImage = `${backendUrl}/${cleanPath}`;
        }
    }

    return {
        title: `${post.title}`,
        description: post.excerpt || post.summary || `Read about ${post.title} on ScamFreeIndia Awareness blog. stay safe from online fraud.`,
        openGraph: {
            title: post.title,
            description: post.excerpt || post.summary,
            url: `${frontendUrl}/blog/${slug}`,
            type: 'article',
            publishedTime: post.created_at,
            authors: [typeof post.author === 'string' ? post.author : (post.author?.name || 'ScamFreeIndia Team')],
            images: [
                {
                    url: displayImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || post.summary,
            images: [displayImage],
        },
        alternates: {
            canonical: `${frontendUrl}/blog/${slug}`,
        }
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

    // Get related posts (only fetch 1 page for speed)
    const allPosts = await getAllPosts(1)
    const relatedPosts = allPosts.filter((p: any) => p.slug !== slug).slice(0, 3)

    const backendUrl = process.env.API_URL || "https://scamfreeind.in";
    let postImage = post.image || post.image_url || post.thumbnail || post.featured_image || post.img;
    let displayImage = "";

    if (postImage && typeof postImage === 'string') {
        if (postImage.startsWith('http')) {
            displayImage = postImage;
        } else {
            const cleanPath = postImage.replace(/^\/+/, "");
            displayImage = `${backendUrl}/${cleanPath}`;
        }
    }

    if (!displayImage) {
        displayImage = "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop";
    }

    const blogLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": displayImage,
        "author": {
            "@type": "Person",
            "name": typeof post.author === 'string'
                ? post.author
                : (post.author as any)?.name || (post.author as any)?.username || 'Team ScamFreeIndia'
        },
        "publisher": {
            "@type": "Organization",
            "name": "ScamFreeIndia",
            "logo": {
                "@type": "ImageObject",
                "url": "https://scamfreeindia.com/logo.png"
            }
        },
        "datePublished": post.created_at,
        "dateModified": post.updated_at || post.created_at,
        "description": post.excerpt || post.summary,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://scamfreeindia.com/blog/${slug}`
        }
    };

    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
            />
            <Header />

            <main className="pt-20 pb-20">
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                    <Image
                        src={displayImage}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover scale-105 transition-transform duration-1000 ease-out"
                        priority
                        loading="eager"
                        sizes="100vw"
                    />

                    {/* Multi-layered Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/20 via-transparent to-brand-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 via-brand-bg/20 to-transparent" />
                    <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay" />

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
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-2xl ">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 md:px-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

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
                                            <p className="text-sm  font-bold">Written by</p>
                                            <p className="text-brand-blue font-bold">
                                                {typeof post.author === 'string'
                                                    ? post.author
                                                    : (post.author as any)?.name || (post.author as any)?.username || 'Team ScamFreeIndia'}
                                            </p>
                                        </div>
                                    </div>

                                    <ShareLink />
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
                                <AdvisoryAction />

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
            {/* Footer */}
            <Footer />
        </div>
    )
}
