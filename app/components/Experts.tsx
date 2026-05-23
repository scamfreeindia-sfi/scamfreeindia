"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Expert {
    name: string;
    role: string;
    location: string;
    image: string | null;
    specializations?: string[];
}

interface Lawyer {
    id: number;
    name: string;
    email: string | null;
    phone: string | null;
    address: string | null;
    image: string | null;
    specializations?: any[];
}

const EXPERT_METADATA: Record<
    string,
    { image: string | null; location: string; specializations: string[] }
> = {
    "Adv. Gaurav Charaya": {
        image: "/gaurav.jpeg",
        location: "Chandigarh, India",
        specializations: ["Cyber Crime", "High Court Cases"],
    },
    "Adv. Gunjan Sachdeva": {
        image: "/gunjan.jpeg",
        location: "Chandigarh, India",
        specializations: ["Cyber Crime", "High Court Cases"],
    },
    "Adv. Neha Bairagee": {
        image: null, // Set to null to fall back to the premium glowing letter placeholder as in the screenshot
        location: "Chandigarh, India",
        specializations: ["Cyber Crime", "Delhi High Court"],
    },
    "Rahul Kaushal": {
        image: null,
        location: "Chandigarh, India",
        specializations: ["SEBI Matters", "Financial Fraud"],
    },
};

const getFallbackStyle = (name: string) => {
    if (name.toLowerCase().includes("neha")) {
        return {
            borderClass: "border-2 border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.6)]",
            textClass: "text-[#3b82f6] font-black",
        };
    }
    // Default fallback (e.g. Rahul Kaushal)
    return {
        borderClass: "border border-slate-700/60 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
        textClass: "text-blue-500/80 font-bold",
    };
};

const STATIC_EXPERTS: Expert[] = [];

export default function Experts() {
    const [experts, setExperts] =
        useState<Expert[]>(STATIC_EXPERTS);
    const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const backendUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://scamfreeind.in";

    const handleCardClick = (expert: Expert) => {
        setSelectedExpert(expert);
        setPhone("");
        setErrorMessage("");
        setIsSuccess(false);
        setIsModalOpen(true);
    };

    const handleBookConsultation = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedExpert) return;

        if (!phone || phone.length < 10) {
            setErrorMessage("Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            const res = await fetch(`${backendUrl}/api/lawyer/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: `Consultation with ${selectedExpert.name}`,
                    phone_number: phone,
                    problem_type: selectedExpert.specializations?.[0] || selectedExpert.role || "Expert Legal Consultation",
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
                setPhone("");
                setTimeout(() => {
                    setIsModalOpen(false);
                    setTimeout(() => {
                        setIsSuccess(false);
                        setSelectedExpert(null);
                    }, 500);
                }, 3000);
            } else {
                const errorData = await res.json().catch(() => ({}));
                setErrorMessage(errorData.message || "Failed to book consultation. Please try again.");
            }
        } catch (err) {
            console.error("Booking error:", err);
            setErrorMessage("Could not connect to service. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchExperts() {
            try {
                const res = await fetch(
                    `${backendUrl}/api/lawyer/list`,
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(
                        `HTTP Error: ${res.status}`
                    );
                }

                const data = await res.json();

                console.log("API Response:", data);

                if (
                    data?.success &&
                    Array.isArray(data?.lawyers)
                ) {
                    const mappedExperts =
                        data.lawyers.map(
                            (lawyer: Lawyer): Expert => {
                                const meta =
                                    EXPERT_METADATA[
                                        lawyer.name
                                    ] || {
                                        image: null,
                                        location:
                                            "Punjab, India",
                                        specializations: ["Cyber Expert"],
                                    };
                                let finalImage = null;
                                if (lawyer.image) {
                                    finalImage = lawyer.image.startsWith("http")
                                        ? lawyer.image
                                        : `${backendUrl}/storage/${lawyer.image}`;
                                } else {
                                    finalImage = meta.image || null;
                                }

                                const specs = (lawyer.specializations || [])
                                    .map((spec: any) => {
                                        if (spec && typeof spec === "object" && spec.title) {
                                            return spec.title;
                                        }
                                        return typeof spec === "string" ? spec : "";
                                    })
                                    .filter(Boolean);

                                return {
                                    name:
                                        lawyer.name ||
                                        "Unknown Expert",

                                    role:
                                        lawyer.address ||
                                        "Expert Legal Advisor",

                                    location:
                                        meta.location,

                                    image: finalImage,

                                    specializations: specs.length > 0
                                        ? specs
                                        : meta.specializations,
                                };
                            }
                        );

                    setExperts(mappedExperts);
                }
            } catch (error) {
                console.error(
                    "Error fetching lawyers:",
                    error
                );
            }
        }

        fetchExperts();
    }, [backendUrl]);

    return (
        <section
            id="experts"
            className="expert-section relative overflow-hidden"
        >
            {/* Glowing background blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -z-10" />

            {/* Giant Vertical "EXPERTS" background text */}
            <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden lg:block">
                <div className="text-[14rem] font-black tracking-[0.25em] text-transparent -rotate-90 origin-center select-none"
                     style={{
                         WebkitTextStroke: '2px rgba(255, 255, 255, 0.025)',
                         fontFamily: 'system-ui, sans-serif'
                     }}>
                    EXPERTS
                </div>
            </div>

            <div className="text-center mb-16 md:mb-24 relative z-10">
                <h2 className="text-4xl md:text-7xl font-black mb-6">
                    Meet Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                        Experts
                    </span>
                </h2>

                <p className="text-brand-secondary text-lg md:text-xl max-w-3xl mx-auto">
                    Experienced professionals dedicated
                    to protecting you from financial
                    fraud, cybercrime, and digital
                    exploitation.
                </p>
            </div>

            <div className="expert-grid relative z-10">
                {experts.map((expert, index) => {
                    const fallback = getFallbackStyle(expert.name);
                    const initials = expert.name.charAt(0).toUpperCase();

                    return (
                        <div
                            key={index}
                            onClick={() => handleCardClick(expert)}
                            className="bg-[#17181D] border border-[#27272A]/70 rounded-[2.5rem] p-8 text-center transition-all duration-500 ease-out hover:-translate-y-3 hover:bg-[#1E1F26] hover:border-zinc-700/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col items-center group relative overflow-hidden cursor-pointer"
                        >
                            {/* Avatar / Portrait Circle */}
                            <div className="mb-6 relative flex-shrink-0">
                                {expert.image ? (
                                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden border border-zinc-700/40 group-hover:border-blue-500/80 transition-all duration-500 relative flex items-center justify-center bg-[#1A1A1F]">
                                        <Image
                                            src={expert.image}
                                            alt={expert.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-[140px] h-[140px] rounded-full flex items-center justify-center transition-all duration-500 bg-[#1A1A1F] ${fallback.borderClass}`}>
                                        <span className={`text-4xl font-extrabold tracking-tight ${fallback.textClass}`}>
                                            {initials}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <h3 className="text-white text-[22px] font-bold tracking-tight mb-3 transition-colors duration-300 group-hover:text-blue-400">
                                {expert.name}
                            </h3>

                            {/* Specialization Badges */}
                            {expert.specializations && expert.specializations.length > 0 && (
                                <div className="flex flex-wrap gap-2 justify-center mb-4 max-w-[240px]">
                                    {expert.specializations.map((spec, specIdx) => (
                                        <span 
                                            key={specIdx}
                                            className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-hover:border-blue-500/40 group-hover:text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 ease-out"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Mail Icon Button Container */}
                            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white mb-4 shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-all duration-300 group-hover:scale-110">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Role / Description */}
                            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[200px] mb-5 min-h-[40px] flex items-center justify-center">
                                {expert.role}
                            </p>

                            {/* Location Icon Button Container */}
                            <div className="w-9 h-9 rounded-full bg-[#EAB308] flex items-center justify-center text-white mb-3 shadow-[0_4px_12px_rgba(234,179,8,0.3)] transition-all duration-300 group-hover:scale-110">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>

                            {/* Location */}
                            <p className="text-zinc-300 text-sm font-semibold tracking-wide mt-1">
                                {expert.location}
                            </p>
                        </div>
                    );
                })}
            </div>

            {experts.length === 0 && (
                <div className="text-center text-gray-400 mt-8 relative z-10">
                    No experts available
                </div>
            )}

            {isModalOpen && selectedExpert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        onClick={() => setIsModalOpen(false)}
                        className="absolute inset-0 bg-[#0B0C10]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                    />

                    {/* Modal Box */}
                    <div className="relative w-full max-w-md bg-[#17181D] border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10 transition-all duration-300 transform scale-100 animate-in zoom-in-95 duration-200">
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 w-8 h-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 duration-200 hover:rotate-90 focus:outline-none cursor-pointer"
                            aria-label="Close dialog"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {isSuccess ? (
                            <div className="py-8 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2">Booking Confirmed!</h3>
                                    <p className="text-zinc-400 font-medium text-sm leading-relaxed">
                                        Your consultation with <span className="text-blue-400 font-bold">{selectedExpert.name}</span> has been requested. We will contact you within 2 minutes.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleBookConsultation} className="space-y-6">
                                <div className="text-center">
                                    {/* Expert Portrait in Modal */}
                                    <div className="mb-4 relative flex justify-center">
                                        {selectedExpert.image ? (
                                            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] relative">
                                                <Image
                                                    src={selectedExpert.image}
                                                    alt={selectedExpert.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className={`w-[100px] h-[100px] rounded-full flex items-center justify-center bg-[#1A1A1F] border-2 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
                                                <span className={`text-3xl font-extrabold text-blue-400`}>
                                                    {selectedExpert.name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-1">
                                        Consultation Request
                                    </h3>
                                    <p className="text-zinc-400 text-sm font-medium">
                                        Speak directly with <span className="text-blue-400 font-bold">{selectedExpert.name}</span>
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">
                                            Mobile Number
                                        </label>
                                        <div className="relative flex">
                                            <span className="inline-flex items-center px-4 rounded-l-2xl border border-r-0 border-zinc-700 bg-zinc-800 text-zinc-400 font-bold text-sm">
                                                +91
                                            </span>
                                            <input
                                                disabled={loading}
                                                type="tel"
                                                className="w-full px-5 py-4 rounded-r-2xl bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white font-medium disabled:opacity-65 disabled:cursor-not-allowed"
                                                placeholder="Enter 10-digit number"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {errorMessage && (
                                    <div className="text-rose-400 text-xs font-semibold ml-1 flex items-start gap-2 bg-rose-500/10 border border-rose-500/20 p-3.5 rounded-2xl">
                                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white py-4 text-center rounded-2xl font-bold text-base transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Booking...
                                        </>
                                    ) : (
                                        <>
                                            Confirm Consultation
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}