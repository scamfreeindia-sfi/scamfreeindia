import Header from "../components/Header"
import Image from "next/image"
import BlogList from "./BlogList"
import { Metadata } from "next"
import { BLOG_POSTS } from "./data"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Blog & Awareness | Stay Scam-Free Today",
    description: "Read latest scam alerts, security guides, and online fraud insights from the expert team at ScamFreeIndia. Stay informed, stay safe.",
}

async function getBlogs(page = 1) {
    const apiUrl = process.env.API_URL || 'https://scamfreeind.in';
    try {
        const res = await fetch(`${apiUrl}/api/blogs?page=${page}`, {
            next: { revalidate: 60 },
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch blogs')
        }

        return res.json()
    } catch (error) {
        console.error("Error fetching blogs:", error)
        return null
    }
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>
}) {
    const { page } = await searchParams
    const currentPage = parseInt(page || '1')
    const apiResponse = await getBlogs(currentPage)

    let blogData: any = null

    if (apiResponse?.success && apiResponse.data?.data && apiResponse.data.data.length > 0) {
        blogData = apiResponse.data
    } else {
        console.log("No data from API or empty data, falling back to static BLOG_POSTS")
        blogData = {
            data: BLOG_POSTS,
            current_page: 1,
            last_page: 1,
            total: BLOG_POSTS.length,
            next_page_url: null,
            prev_page_url: null
        }
    }

    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary pt-24 pb-12">
            <Header />

            {/* Hero Section */}
            <section className="px-6 md:px-16 pt-12 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl text-white">
                            Latest Blogs & <span className="text-[#FF4D4D]">Updates!</span>
                        </h1>
                        
                        {/* Search Bar */}
                        <div className="w-full max-w-2xl relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                placeholder='Search for "Ponzi Scams"'
                                className="w-full bg-[#E5E7EB] text-gray-900 px-14 py-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/20 transition-all placeholder:text-gray-500 shadow-xl"
                            />
                            <div className="absolute inset-y-0 right-5 flex items-center text-gray-900">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5h18M6.75 9h10.5M10.5 13.5h3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid with Client-Side Interaction */}
            <BlogList
                initialData={blogData}
                currentPage={currentPage}
            />

            {/* ... Rest of the component ... */}
            {/* Newsletter */}
            {/* <section className="px-6 md:px-16 pb-24">
                <div className="max-w-5xl mx-auto bg-brand-card border border-brand-border rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-brand-blue opacity-[0.03] blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand-blue opacity-[0.03] blur-[80px]"></div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Never miss a safety update</h2>
                    <p className="text-brand-secondary text-lg mb-10 max-w-xl mx-auto">
                        Get the latest scam alerts and digital safety tips delivered straight to your inbox every week.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" action="#" method="POST">
                        <input
                            type="email"
                            placeholder="yourname@email.com"
                            required
                            className="flex-1 bg-brand-bg border border-brand-border rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-primary placeholder:text-brand-secondary/50"
                        />
                        <button type="submit" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 active:scale-95">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-brand-secondary/40 text-[10px] mt-6 uppercase tracking-widest font-bold">
                        Join 25,000+ Indians staying scam-free
                    </p>
                </div>
            </section> */}

            <Footer />
        </div>
    )
}
