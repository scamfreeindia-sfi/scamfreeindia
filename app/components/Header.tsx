
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = ["Home", "Blog", "About", "Contact", "Services"]
    const isLawyerPage = pathname === "/lawyer" || pathname === "/lawyer/"

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex justify-center border-b bg-brand-section/90 backdrop-blur border-brand-border`}
        >
            <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
                    <div className={`rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center overflow-hidden shadow-sm shadow-[#FFA500]/20 transition-transform group-hover:scale-105 ${isLawyerPage ? "bg-white" : "bg-white/5"}`}>
                        <Image
                            src={isLawyerPage ? "/lawyer.png" : "/logo.png"}
                            alt={isLawyerPage ? "Inventour Legal LLP Logo" : "ScamFreeIndia Logo"}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-1"
                            priority
                        />
                    </div>

                    <div className="flex flex-col leading-tight">
                        <span className="text-brand-primary font-bold tracking-wide text-base sm:text-lg">
                            {isLawyerPage ? "Inventour Legal LLP" : "ScamFreeIndia"}
                        </span>
                        {isLawyerPage ? (
                            <span className="text-[10px] font-mono text-amber-400 font-medium tracking-tight">
                                LLPIN: ACD-2916
                            </span>
                        ) : (
                            <p className="text-[10px] text-center sm:text-xs text-brand-secondary">
                                by Inventour Legal LLP
                            </p>
                        )}
                    </div>

                </Link>


                {/* Navigation */}
                <nav aria-label="Main navigation" className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10 text-sm font-medium text-brand-secondary">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={
                                item === "Home" ? "/" :
                                    item === "Blog" ? "/blog" :
                                        item === "About" ? "/about" :
                                            item === "Services" ? "/services" :
                                                "/contact"
                            }
                            className="relative group transition-colors hover:text-brand-primary text-[15px] py-1"
                        >
                            <span>{item}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="/lawyer-registration"
                        className="hidden sm:inline-flex items-center gap-1.5 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-amber-500/20 hover:border-amber-400 text-xs sm:text-sm font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition active:scale-95 whitespace-nowrap"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <line x1="19" x2="19" y1="8" y2="14" />
                            <line x1="22" x2="16" y1="11" y2="11" />
                        </svg>
                        <span>Register as a Lawyer</span>
                    </Link>

                    <Link href="/lawyer" className="inline-flex bg-brand-green hover:brightness-110 text-brand-bg text-xs sm:text-sm font-bold transition shadow-[0_4px_14px_0_rgba(255,165,0,0.35)] px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg active:scale-95 whitespace-nowrap">
                        Inventour Legal LLP
                    </Link>

                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        className="md:hidden text-brand-primary flex flex-col justify-center items-center w-8 h-8 rounded-md transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
                        <span className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "my-0.5"}`}></span>
                        <span className={`block w-5 h-0.5 bg-brand-primary transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute top-16 right-4 w-56 bg-brand-section/95 backdrop-blur-xl border border-brand-border shadow-2xl rounded-xl flex flex-col z-50 md:hidden transition-all duration-300 origin-top ${isMobileMenuOpen
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0 pointer-events-none"
                            }`}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={item}
                                href={
                                    item === "Home" ? "/" :
                                        item === "Blog" ? "/blog" :
                                            item === "About" ? "/about" :
                                                item === "Services" ? "/services" :
                                                    "/contact"
                                }
                                className={`px-5 py-4 text-sm font-medium text-brand-secondary hover:text-brand-primary hover:bg-white/5 transition ${idx !== navItems.length - 1 ? "border-b border-brand-border" : ""
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/lawyer-registration"
                            className="px-5 py-4 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:bg-white/5 transition border-t border-brand-border flex items-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span>+ Register as a Lawyer</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
