"use client"
import { useState, useMemo } from "react"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function LawyerPage() {
    const [problemType, setProblemType] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isRefundModalOpen, setIsRefundModalOpen] = useState(false)

    const badgePath = useMemo(() => {
        const points = [];
        const numPoints = 32;
        const cx = 60;
        const cy = 60;
        for (let i = 0; i < numPoints * 2; i++) {
            const angle = (i * Math.PI) / numPoints;
            const r = i % 2 === 0 ? 50 : 44;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`);
        }
        return points.join(' ') + ' Z';
    }, []);
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!problemType) {
            setErrorMessage("Please select your legal issue.")
            return
        }
        if (!phoneNumber || phoneNumber.length < 10) {
            setErrorMessage("Please enter a valid 10-digit mobile number.")
            return
        }

        setLoading(true)
        setErrorMessage("")

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in"
            const response = await fetch(`${apiBaseUrl}/api/lawyer/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Lawyer Booking",
                    phone_number: phoneNumber,
                    problem_type: problemType,
                }),
            })

            if (response.ok) {
                setIsSuccess(true)
                setProblemType("")
                setPhoneNumber("")
            } else {
                const errorData = await response.json().catch(() => ({}))
                setErrorMessage(errorData.message || "Failed to book consultation. Please try again.")
            }
        } catch (error) {
            console.error("Consultation booking error:", error)
            setErrorMessage("Could not connect to service. Please check your connection.")
        } finally {
            setLoading(false)
        }
    }

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


    return (
        <div className="bg-white min-h-screen font-sans text-slate-900 relative overflow-hidden">
            {/* Bottom-Right Background Watermark */}
            <div className="absolute -right-24 bottom-10 z-0 opacity-[0.05] pointer-events-none select-none">
                <Image
                    src="/lawyer.png"
                    alt="Scales of Justice Watermark Bottom"
                    width={500}
                    height={500}
                />
            </div>

            <Header />

            <main className="pt-24 pb-16 md:pt-32 relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                        {/* Left Column */}
                        <div className="flex-1 space-y-10 relative">
                            {/* Left-Side Centered Background Watermark */}
                            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.07] pointer-events-none select-none w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px]">
                                <Image
                                    src="/lawyer.png"
                                    alt="Scales of Justice Watermark"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-900 text-sm font-bold tracking-tight">Verified Legal Experts</span>
                                </div>                                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                                        Speak with Verified <br />
                                        <span className="text-[#D97706]">Lawyers Within Minutes</span>
                                    </h1>

                                    {/* Full Refund Badge */}
                                    <div className="relative pl-2 flex-shrink-0">
                                        <button
                                            onClick={() => setIsRefundModalOpen(true)}
                                            type="button"
                                            className="relative group focus:outline-none transition-all hover:scale-105 active:scale-95 duration-200 cursor-pointer"
                                            aria-label="View Refund Policy Conditions"
                                        >
                                            <svg
                                                width="120"
                                                height="120"
                                                viewBox="0 0 120 120"
                                                className="drop-shadow-md group-hover:drop-shadow-xl transition-shadow duration-200"
                                            >
                                                <defs>
                                                    <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#FBBF24" />
                                                        <stop offset="100%" stopColor="#D97706" />
                                                    </linearGradient>
                                                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                                                         <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#B45309" floodOpacity="0.2" />
                                                    </filter>
                                                </defs>
                                                
                                                {/* 32-point scalloped seal */}
                                                <path
                                                    d={badgePath}
                                                    fill="url(#badge-grad)"
                                                />
                                                
                                                {/* White circular inner line */}
                                                <circle cx="60" cy="60" r="38" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
                                                 
                                                {/* Curved arcs on top and bottom of text */}
                                                <path d="M 35,48 A 28,28 0 0,1 85,48" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
                                                <path d="M 35,72 A 28,28 0 0,0 85,72" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
                                                 
                                                {/* Text centered, slightly rotated */}
                                                <g transform="rotate(-8 60 60)">
                                                    <text
                                                        x="60"
                                                        y="53"
                                                        fill="#ffffff"
                                                        fontSize="10"
                                                        fontWeight="900"
                                                        fontFamily="system-ui, -apple-system, sans-serif"
                                                        textAnchor="middle"
                                                        letterSpacing="1"
                                                    >
                                                        FULL
                                                    </text>
                                                    <text
                                                        x="60"
                                                        y="68"
                                                        fill="#ffffff"
                                                        fontSize="10"
                                                        fontWeight="900"
                                                        fontFamily="system-ui, -apple-system, sans-serif"
                                                        textAnchor="middle"
                                                        letterSpacing="1"
                                                    >
                                                        REFUND
                                                    </text>
                                                </g>
                                            </svg>

                                            {/* Info Badge */}
                                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform duration-200">
                                                info
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                                    Professional Assistance for Cyber Crime, Fraud, Family, Corporate and other legal matters.
                                </p>
                            </div>
                            

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
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

                            <div className="flex flex-wrap gap-8 py-6 border-y border-slate-100 relative z-10">
                                {socialProof.map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-2xl font-bold text-[#0F172A]">{item.value}</div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div id="booking-card" className="w-full lg:w-[450px] sticky top-32">
                            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden">
                                <div className="p-8">
                                    {isSuccess ? (
                                        <div className="py-8 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                            <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Booking Confirmed!</h3>
                                                <p className="text-slate-600 font-medium text-sm">
                                                    Our top legal expert will contact you within 2 minutes for your consultation.
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setIsSuccess(false)}
                                                className="text-[#0F172A] hover:underline font-bold text-sm"
                                            >
                                                Book another consultation
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-5">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">What legal issue are you facing?</label>
                                                    <div className="relative">
                                                        <select
                                                            disabled={loading}
                                                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-slate-900 appearance-none cursor-pointer font-medium pr-12 disabled:opacity-65 disabled:cursor-not-allowed"
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
                                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Mobile Number</label>
                                                    <div className="relative flex">
                                                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-semibold text-sm">
                                                            +91
                                                        </span>
                                                        <input 
                                                            disabled={loading}
                                                            type="tel" 
                                                            className="w-full px-5 py-4 rounded-r-xl bg-slate-50 border border-slate-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-slate-900 font-medium disabled:opacity-65 disabled:cursor-not-allowed" 
                                                            placeholder="Enter 10-digit number"
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {errorMessage && (
                                                <div className="text-rose-600 text-xs font-bold ml-1 flex items-start gap-2 bg-rose-50 border border-rose-100 p-3.5 rounded-xl">
                                                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                    <span>{errorMessage}</span>
                                                </div>
                                            )}

                                            <div className="space-y-4">
                                                <button 
                                                    type="submit"
                                                    disabled={loading}
                                                    className="w-full bg-[#0F172A] hover:bg-slate-800 disabled:bg-slate-400 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Booking Consultation...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Continue Securely
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                    </svg>
                                                    100% encrypted and secure payment
                                                </div>
                                            </div>
                                        </form>
                                    )}
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

            {/* Refund Disclaimer Modal */}
            {isRefundModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop overlay */}
                    <div 
                        onClick={() => setIsRefundModalOpen(false)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
                    />
                    
                    {/* Modal content box */}
                    <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 z-10 transition-all duration-300 transform scale-100 animate-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsRefundModalOpen(false)}
                            type="button"
                            className="absolute top-5 right-5 w-8 h-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 duration-200 focus:outline-none z-10"
                            aria-label="Close dialog"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Header */}
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mt-1">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            <span className="pr-8">Conditions for Refund Claim:</span>
                        </h2>

                        {/* Modal Body */}
                        <div className="space-y-6">
                            {[
                                {
                                    num: "1",
                                    title: "No Consultation Access",
                                    desc: "The refund is applicable only if the customer is unable to connect with a lawyer after trying the consultation call through our platform."
                                },
                                {
                                    num: "2",
                                    title: "Request Timeline",
                                    desc: "The refund claim must be requested within 24 hours of the scheduled consultation time if the lawyer is unavailable for the session."
                                },
                                {
                                    num: "3",
                                    title: "Rescheduling Option",
                                    desc: "Before requesting a refund, the customer must provide the opportunity to reschedule the consultation within a 48-hour window. If rescheduling is not possible, the refund will be processed."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-sm flex items-center justify-center border border-slate-200 shadow-sm mt-0.5">
                                        {item.num}
                                    </div>
                                    <div className="space-y-1.5">
                                        <h4 className="font-bold text-slate-900 text-base md:text-lg">{item.title}</h4>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer action / confirmation */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={() => setIsRefundModalOpen(false)}
                                type="button"
                                className="px-6 py-3 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                            >
                                I Understand
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}
