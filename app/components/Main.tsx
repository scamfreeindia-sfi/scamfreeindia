"use client"
import Image from "next/image";
import FraudSection from "./ScamType"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import SebiIntermediaries from "./SebiIntermediaries";
import Review from "./Review";
import Awareness from "./Awareness";
import Video from "./video";
import ComplaintGuide from "./ComplaintGuide";

export default function Main() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        amount: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/report", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })

            if (response.ok) {
                setIsSuccess(true)
                setForm({ name: "", phone: "", amount: "", message: "" })
            } else {
                const errorData = await response.json().catch(() => ({}))
                console.error("Submission failed:", errorData.message)
            }
        } catch (error) {
            console.error("Submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <main>
            {/* Spacer */}
            <div className="h-16"></div>

            {/* HERO SECTION */}
            <section className="min-h-[calc(100vh-6rem)] flex items-center px-6 md:px-16 py-12 md:py-20 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

                    {/* LEFT */}
                    <div className="hidden lg:block space-y-8 relative z-0">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -z-10 opacity-10 pointer-events-none select-none w-full max-w-lg">
                            <Image
                                src="/logo.png"
                                alt="ScamFreeIndia Logo Background - Protect Yourself from Online Fraud"
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                            </span>
                            Urgent: Act Within 24 Hours
                        </div>

                        <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold">
                            Lost Money in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Online Scam?</span>
                        </h1>

                        <p className="text-brand-secondary text-lg md:text-lg leading-relaxed max-w-lg">
                            Take action within 24 hours to increase recovery chances. Our expert team has helped thousands recover from online fraud.
                        </p>

                        <ul className="space-y-4 text-brand-primary/90 font-medium">
                            {[
                                "Expert Guidance",
                                "Fast Response",
                                "100% Confidential"
                            ].map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30 text-brand-green">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://wa.me/918054433907?text=I%20lost%20money%20in%20an%20online%20scam%2C%20please%20help%20me."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-bold rounded-xl hover:bg-[#25D366]/20 transition-all active:scale-95"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* FORM */}
                    <div id="report" className="bg-brand-card p-6 md:p-8 rounded-2xl shadow-2xl border border-brand-border lg:ml-auto w-full max-w-md relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
                        {isSuccess ? (
                            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Report Submitted!</h2>
                                    <p className="text-brand-secondary">
                                        Your case has been logged securely. Our safety team will contact you within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-brand-blue font-bold px-4 py-2 hover:bg-brand-blue/10 rounded-lg transition-all"
                                >
                                    Submit another report
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-2">
                                        Book Your Consultation
                                    </h2>
                                    <p className="text-sm text-brand-secondary">
                                        Fill in the details below and our team will reach out.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                                    {/* <div className="space-y-1">
                                        <label htmlFor="name" className="sr-only">Full Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div> */}

                                    <div className="space-y-1">
                                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="amount" className="sr-only">Amount Lost</label>
                                        <input
                                            id="amount"
                                            type="text"
                                            placeholder="Amount Lost (₹)"
                                            className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                                            value={form.amount}
                                            onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="sr-only">Brief Case Description</label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            placeholder="Brief Case Description"
                                            className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner resize-none"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-green hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-xl text-brand-bg font-bold shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none mt-2 flex justify-center items-center"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-brand-bg border-t-transparent rounded-full animate-spin"></span>
                                        ) : (
                                            "Book Your Consultation \u2192"
                                        )}
                                    </button>

                                    <p className="text-xs text-brand-secondary text-center flex justify-center items-center gap-1.5 mt-4">
                                        <svg className="w-3.5 h-3.5 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Your information is 100% confidential and secure.
                                    </p>

                                    <div className="pt-4 mt-4 border-t border-brand-border/50 text-center">
                                        <p className="text-sm text-brand-secondary mb-2">Need urgent help?</p>
                                        <a
                                            href="https://wa.me/918054433907?text=I%20lost%20money%20in%20an%20online%20scam%2C%20please%20help%20me."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:underline group"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            Chat on WhatsApp
                                        </a>
                                    </div>

                                </form>
                            </>
                        )}
                    </div>

                </div>
            </section>

            <FraudSection />
            <SebiIntermediaries />
            <Review />
            <Video />
            <ComplaintGuide />
            <Awareness />
        </main>
    )
}