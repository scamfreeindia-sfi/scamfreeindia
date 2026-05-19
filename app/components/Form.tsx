"use client"
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Form() {
      const [form, setForm] = useState({
        name: "",
        phone: "",
        amount: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isSuccess, setIsSuccess] = useState(false)
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in"

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(`${apiBaseUrl}/api/scam/lead`, {
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
    return(
           <div id="report" className="bg-brand-card/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 lg:ml-auto w-full max-w-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/10 blur-3xl -z-10"></div>

                        {isSuccess ? (
                            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2 text-white">Consultation Booked!</h2>
                                    <p className="text-brand-secondary">
                                        Our legal expert team will contact you within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-brand-green font-bold px-4 py-2 hover:bg-brand-green/10 rounded-lg transition-all"
                                >
                                    Submit another report
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <h2 className="text-3xl font-extrabold mb-2 text-white">
                                        Book Your Consultation
                                    </h2>
                                    <p className="text-brand-secondary">
                                        Fill in the details below and our team will reach out.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                    <div className="space-y-1">
                                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder-gray-500 text-white shadow-inner"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        />
                                    </div>
                                   

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="sr-only">Brief Case Description</label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            placeholder="Brief Case Description"
                                            className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all placeholder-gray-500 text-white shadow-inner resize-none"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-green hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-xl text-black font-extrabold shadow-lg shadow-brand-green/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none mt-2 flex justify-center items-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                        ) : (
                                            <>
                                                Book Your Consultation
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    <div className="flex flex-col items-center gap-4 mt-6">
                                        <p className="text-xs text-brand-secondary flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                            </svg>
                                            Your information is 100% confidential and secure.
                                        </p>
                                        
                                        <div className="text-center w-full">
                                            <p className="text-sm text-brand-secondary mb-2">Need urgent help?</p>
                                            <a
                                                href="https://wa.me/918054433907?text=Hello%2C%20I%20need%20expert%20legal%20consultation.%20Can%20you%20help%20me%3F"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors group"
                                            >
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                                Chat on WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
    )
}