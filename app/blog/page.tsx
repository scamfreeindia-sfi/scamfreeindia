import Header from "../components/Header"
import Image from "next/image"
import BlogList from "./BlogList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog & Awareness | Stay Scam-Free Today",
    description: "Read latest scam alerts, security guides, and online fraud insights from the expert team at ScamFreeIndia. Stay informed, stay safe.",
}

const BLOG_POSTS = [
    {
        id: 1,
        title: "Top 5 Online Banking Scams to Watch Out for in 2026",
        excerpt: "Online scams are becoming increasingly sophisticated. Learn how to protect your hard-earned money from the latest phishing and social engineering attacks.",
        date: "March 20, 2026",
        author: "Team ScamFreeIndia",
        category: "Safety Guide",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        slug: "online-banking-scams-2026"
    },
    {
        id: 2,
        title: "How to Identify Fake IPO Allotments in India",
        excerpt: "The surge in IPOs has brought many scammers targeting innocent investors. Here's a step-by-step guide to verifying your allotment status securely.",
        date: "March 18, 2026",
        author: "Security Expert",
        category: "IPO Fraud",
        image: "https://images.unsplash.com/photo-1611974717482-48a8570072d7?q=80&w=1470&auto=format&fit=crop",
        slug: "fake-ipo-allotments"
    },
    {
        id: 3,
        title: "The Rise of AI Voice Cloning in Phone Fraud",
        excerpt: "Scammers are now using AI to mimic voices of loved ones. Understand this new threat and set up 'security questions' with your family.",
        date: "March 15, 2026",
        author: "Tech Insights",
        category: "AI Threats",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
        slug: "ai-voice-cloning-fraud"
    },
    {
        id: 4,
        title: "Protecting Your WhatsApp: 5 Crucial Settings",
        excerpt: "WhatsApp is a primary target for scammers. Ensure your privacy and security by enabling these five hidden security features today.",
        date: "March 10, 2026",
        author: "Privacy First",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1374&auto=format&fit=crop",
        slug: "whatsapp-security-settings"
    },
    {
        id: 5,
        title: "Is that KYC SMS Legitimate? Here's How to Tell",
        excerpt: "Received an urgent SMS about your bank account or KYC? Don't click that link. We show you the anatomical differences between real and fake SMS.",
        date: "March 05, 2026",
        author: "Team ScamFreeIndia",
        category: "Safety Guide",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
        slug: "kyc-sms-verification"
    },
    {
        id: 6,
        title: "Crypto Scams: How to Secure Your Digital Wallet",
        excerpt: "As crypto gains popularity, so do digital wallet thefts. Learn about hardware wallets, seed phrase security, and common crypto-draining links.",
        date: "Feb 28, 2026",
        author: "Blockchain Team",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1621416848440-2369dadaf355?q=80&w=1374&auto=format&fit=crop",
        slug: "crypto-wallet-security"
    }
]

export default function BlogPage() {
    return (
        <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary pt-24 pb-12">
            <Header />

            {/* Hero Section */}
            <section className="px-6 md:px-16 pt-12 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
                            Knowledge Center
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl">
                            Insights to Keep You <span className="bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent">Scam-Free</span>
                        </h1>
                        <p className="text-brand-secondary text-lg max-w-2xl">
                            Stay ahead of online fraud with our expert analysis, safety guides, and the latest security trends to protect your digital identity across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid with Client-Side Interaction */}
            <BlogList posts={BLOG_POSTS} />

            {/* Newsletter */}
            <section className="px-6 md:px-16 pb-24">
                <div className="max-w-5xl mx-auto bg-brand-card border border-brand-border rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center">
                    {/* Background decoration */}
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
            </section>

            {/* FOOTER */}
            <footer className="px-6 md:px-16 py-12 border-t border-brand-border bg-brand-section text-brand-secondary text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="border-1 border-[#FFA500] rounded-full w-11 h-11 flex items-center justify-center overflow-hidden bg-white/5 shadow-sm shadow-[#FFA500]/20">
                            <Image
                                src="/logo.png"
                                alt="ScamFreeIndia Logo"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain p-1"
                                priority
                            />
                        </div>
                        <span className="text-brand-primary font-bold tracking-wide">
                            ScamFreeIndia
                        </span>
                    </div>

                    <p>
                        Disclaimer: We provide guidance and advisory services only. No guaranteed recovery.
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
