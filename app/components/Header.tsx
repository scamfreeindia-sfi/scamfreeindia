"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = ["Blog", "About", "Contact"]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${isScrolled
                ? "pt-4 px-4"
                : "bg-gray-950/90 backdrop-blur border-b border-gray-800"
                }`}
        >
            <div
                className={`flex items-center justify-between w-full transition-all duration-500 ${isScrolled
                    ? "max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] rounded-full px-4 py-2"
                    : "max-w-7xl px-6 md:px-16 py-4"
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-orange-600 w-9 h-9 rounded-md flex items-center justify-center overflow-hidden">
                        S
                    </div>

                    <span className="text-white font-semibold tracking-wide hidden sm:block">
                        ScamFreeIndia
                    </span>
                </div>

                {/* Navigation */}
                <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="/"
                            className="relative group"
                        >
                            <span className="group-hover:text-white transition">
                                {item}
                            </span>

                            {/* Animated underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center relative gap-3">

                    {/* Desktop CTA */}
                    <button className="hidden sm:inline-block bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold uppercase transition shadow-lg hover:shadow-orange-500/20 px-4 py-2 rounded-md">
                        Get Started
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        className="md:hidden text-white flex items-center justify-center p-4 rounded-md transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {/* Animated Icon */}
                        <div className="w-5 h-5 relative">
                            <span className={`absolute w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}></span>
                            <span className={`absolute w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "top-2"}`}></span>
                            <span className={`absolute w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}></span>
                        </div>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute top-14 right-0 w-56 bg-[#0b1121]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl flex flex-col z-50 md:hidden transition-all duration-300 origin-top ${isMobileMenuOpen
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0 pointer-events-none"
                            }`}
                    >
                        {/* Links */}
                        {navItems.map((item, idx) => (
                            <a
                                key={item}
                                href="/"
                                className={`px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition ${idx !== navItems.length - 1 ? "border-b border-white/5" : ""
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