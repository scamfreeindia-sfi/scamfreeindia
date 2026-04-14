"use client"
import Image from "next/image"
import Link from "next/link"
import ShareLink from "./ShareLink";

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 py-16 border-t border-brand-border bg-brand-section text-brand-secondary text-sm">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand and Description */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="rounded-full w-12 h-12 flex items-center justify-center overflow-hidden bg-white/5 shadow-sm shadow-[#FFA500]/20">
                                <Image
                                    src="/logo.png"
                                    alt="ScamFreeIndia Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain p-1"
                                    priority
                                />
                            </Link>
                            <span className="text-brand-primary text-xl font-extrabold tracking-tight">
                                ScamFreeIndia
                            </span>
                        </div>
                        <p className="text-brand-secondary leading-relaxed max-w-xs">
                            Empowering victims of online fraud with expert guidance and awareness to navigate the recovery process effectively.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-lg">Quick Links</h4>
                        <nav aria-label="Footer Quick Links">
                            <ul className="space-y-3">
                                <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
                                <li><Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link></li>
                                <li><a href="https://razorpay.me/@scamfreeind" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:brightness-110 transition-all text-lg">Register Your Query</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-lg">Legal</h4>
                        <nav aria-label="Footer Legal Links">
                            <ul className="space-y-3">
                                <li><Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-and-conditions" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link></li>
                                <li><Link href="/refund-policy" className="hover:text-brand-primary transition-colors">Refund Policy</Link></li>
                                <li><Link href="/disclaimer" className="hover:text-brand-primary transition-colors">Disclaimer</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-lg">Contact Information</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+918054433907" className="hover:text-brand-primary transition-colors">+91-8054433907</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@scamfreeindia.com" className="hover:text-brand-primary transition-colors">info@scamfreeindia.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <svg className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Sco 29 Mohali citi centre F block aerocity, 140306</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="pt-10 border-t border-brand-border">
                    <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
                        <div className="max-w-3xl">
                            <p className="text-xs text-brand-secondary/70 leading-relaxed mb-4">
                                <span className="text-brand-primary font-semibold">Disclaimer:</span> ScamFree India is a private consultancy firm. We are not affiliated with any government authority. We do not guarantee recovery of funds. Government complaint portals are free to use.
                            </p>
                            <p className="text-xs text-brand-secondary/50">
                                &copy; 2026 Scam Free India. All rights reserved.
                            </p>
                        </div>
                        <ShareLink />
                    </div>
                </div>
            </div>
        </footer>
    );


}
