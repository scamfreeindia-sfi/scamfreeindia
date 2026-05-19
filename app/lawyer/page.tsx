"use client"
import { useState } from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function LawyerPage() {
    const [problemType, setProblemType] = useState("")
    const [language, setLanguage] = useState("")

    const trustIndicators = [
        { label: "Bar Council Verified", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
        { label: "Secure & Confidential", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { label: "Average response under 2 minutes", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "Available 24/7", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
    ]
    const problemTypes = [
    "Cyber Crime",
    "SEBI Matters",
    "Divorce & Child Custody",
    "Property & Real Estate",
    "Cheque Bounce & Money Recovery",
    "Employment Issues",
    "Consumer Protection",
    "Civil Matters",
    "Company & Start-Ups",
    "Other Legal Problem",
    "Criminal Matter",
    "MSME Recovery & MSME Related Matter",
    "RERA Consultation",
    "Muslim Law",
    "Debt Recovery Tribunal Matters",
    "Banking Loan Recovery Issues",
    "Bank Account Freeze",
    "Patent",
    "Trademark",
    "Copyright",
    "Intellectual Property Rights",
    "CBI Related Matters",
    "NDPS Matters",
    "Service Matters",
    "CAT Matters",
    "Arbitration Law",
    "Board of Revenue",
    "NCDRC Consumer Cases",
    "Insolvency & Bankruptcy",
    "Media Law & IP Infringements",
    "Supreme Court Matters",
    "High Court Matters",
    "Inheritance & Will",
    "Sexual Harassment at Workplace",
    "FDI Matters",
    "NCLT Matters",
    "NCLAT Matters",
    "IBC Related Matters",
    "Liquidation Related Matters",
    "RBI Related Matters",
    "Cryptocurrency Issues",
    "Startup Legal",
    "ESOP Legal",
    "Fund Raising Legal",
    "Corporate Governance",
    "Business Management",
    "Immigration & VISA",
    "HR Legal Issues",
    "Salary Non Payment",
    "Employment Termination",
    "GST",
    "Service Tax",
    "Excise Duty",
    "SFIO Matters",
    "Traffic Challan"
    ]
    const socialProof = [
        { label: "Consultations", value: "12,000+" },
        { label: "Rating", value: "4.9★" },
        { label: "Customer Satisfaction", value: "95%" }
    ]

    const lawyers = [
        {
            name: "Rahul Sharma",
            specialization: "Family Law",
            rating: "4.9",
            experience: "8 Years",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Priya Verma",
            specialization: "Cyber Crime",
            rating: "4.8",
            experience: "6 Years",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
        }
    ]

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            <Header />
            
            <main className="pt-24 pb-16 md:pt-32">
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                        
                        {/* Left Column */}
                        <div className="flex-1 space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-900 text-sm font-bold tracking-tight">Verified Legal Experts</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                                    Speak with Verified <br /> 
                                    <span className="text-[#D97706]">Lawyers Within Minutes</span>
                                </h1>

                                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                                    Professional Assistance for Cyber Crime, Fraud, Family, Corporate and other legal matters.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {trustIndicators.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-8 py-6 border-y border-slate-100">
                                {socialProof.map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-2xl font-bold text-[#0F172A]">{item.value}</div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                                    </div>
                                ))}
                            </div>

                          
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="w-full lg:w-[450px] sticky top-32">
                            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden">
                                <div className="p-8 space-y-8">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0F172A] ml-1">What legal issue are you facing?</label>
                                            <div className="relative">
                                                <select 
                                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-slate-900 appearance-none cursor-pointer font-medium"
                                                    value={problemType}
                                                    onChange={(e) => setProblemType(e.target.value)}
                                                >
                                                    <option value="">Select problem type</option>
                                                    {problemTypes.map((type) => (
                                                        <option key={type} value={type}>
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#0F172A] ml-1">Preferred Language</label>
                                            <div className="relative">
                                                <select 
                                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-slate-900 appearance-none cursor-pointer font-medium"
                                                    value={language}
                                                    onChange={(e) => setLanguage(e.target.value)}
                                                >
                                                    <option value="">Select language</option>
                                                    <option value="hindi">Hindi</option>
                                                    <option value="english">English</option>
                                                    <option value="punjabi">Punjabi</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className="space-y-4">
                                        <button className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98]">
                                            Continue Securely
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                            100% encrypted and secure payment
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Trust Strip */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "12k+", label: "Consultations", sub: "Successfully completed" },
                            { value: "4.9★", label: "Rating", sub: "Average client rating" },
                            { value: "2 min", label: "Avg Response", sub: "Fastest in the industry" },
                            { value: "24/7", label: "Availability", sub: "Experts always online" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-1">
                                <div className="text-3xl font-black text-[#0F172A]">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                                <div className="text-xs text-slate-500 font-semibold">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
