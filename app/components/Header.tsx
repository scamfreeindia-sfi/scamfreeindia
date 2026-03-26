"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = ["Home", "Blog", "About", "Contact"]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${isScrolled
                ? "pt-4 px-4"
                : "bg-brand-section/90 backdrop-blur border-b border-brand-border"
                }`}
        >
            <div
                className={`flex items-center justify-between w-full transition-all duration-500 ${isScrolled
                    ? "max-w-5xl bg-brand-card/80 backdrop-blur-xl border border-brand-border shadow-lg rounded-full px-5 py-3"
                    : "max-w-7xl px-6 md:px-16 py-4"
                    }`}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <div className="rounded-full w-11 h-11 flex items-center justify-center overflow-hidden bg-white/5 shadow-sm shadow-[#FFA500]/20 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="ScamFreeIndia Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-1"
                            priority
                        />
                    </div>

                    <span className="text-brand-primary font-bold tracking-wide hidden sm:block text-lg">
                        ScamFreeIndia
                    </span>
                </a>

                {/* Navigation */}
                <nav aria-label="Main navigation" className="hidden md:flex flex-1 justify-center items-center gap-14 text-sm font-medium text-brand-secondary">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={
                                item === "Home" ? "/" : 
                                item === "Blog" ? "/blog" : 
                                item === "About" ? "/about" : 
                                "/contact"
                            }
                            className="relative group transition-colors hover:text-brand-primary text-lg"
                        >
                            <span>{item}</span>
                            {/* Animated underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Desktop CTA */}
                    <a href="/#report" className="hidden sm:inline-flex bg-brand-green hover:brightness-110 text-brand-bg text-sm font-bold transition shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] px-5 py-2.5 rounded-lg active:scale-95">
                        Get Started
                    </a>

                    {/* Mobile Toggle */}
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
                            <a
                                key={item}
                                 href={
                                    item === "Home" ? "/" : 
                                    item === "Blog" ? "/blog" : 
                                    item === "About" ? "/about" : 
                                    "/contact"
                                }
                                className={`px-5 py-4 text-sm font-medium text-brand-secondary hover:text-brand-primary hover:bg-white/5 transition ${idx !== navItems.length - 1 ? "border-b border-brand-border" : ""
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}