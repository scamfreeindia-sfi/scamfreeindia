"use client"
import Image from "next/image";
import FraudSection from "./ScamType"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import SebiIntermediaries from "./SebiIntermediaries";
import Review from "./Review";
import Awareness from "./Awareness";

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
                                alt="Hero Background"
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
                                        Report Your Case
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
                                            "Report Your Case \u2192"
                                        )}
                                    </button>

                                    <p className="text-xs text-brand-secondary text-center flex justify-center items-center gap-1.5 mt-4">
                                        <svg className="w-3.5 h-3.5 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        Your information is 100% confidential and secure.
                                    </p>

                                </form>
                            </>
                        )}
                    </div>

                </div>
            </section>

            <FraudSection />
            <SebiIntermediaries />
            <Review />


            <Awareness />
        </main>
    )
}