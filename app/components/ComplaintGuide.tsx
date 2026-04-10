"use client"

import React from "react"

export default function ComplaintGuide() {
    return (
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[11px] font-black uppercase tracking-widest">
                    Official Guide
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    How to File an <span className="text-brand-blue">Official Complaint</span>
                </h2>
                <p className="text-brand-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                    Take immediate action. Follow these step-by-step instructions to report financial fraud directly to the Indian Government and regulatory authorities.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                {/* Cyber Crime Card */}
                <div className="bg-brand-card p-10 rounded-3xl border border-brand-red/30 shadow-2xl shadow-brand-red/5 relative overflow-hidden group hover:border-brand-red transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-5 blur-[100px] -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>

                    <div className="flex items-start gap-6 mb-8 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex flex-col items-center justify-center shrink-0">
                            <span className="text-brand-red font-black text-xl">1930</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight mb-2">National Cyber Crime</h3>
                            <p className="text-brand-secondary text-sm font-medium">For UPI, Bank, Credit Card & Online Fraud</p>
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">1</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Call the Golden Hour Helpline</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">Dial <span className="text-brand-red font-bold">1930</span> immediately. If reported within 2 hours of the scam, banks have a high success rate of freezing the scammer's destination account.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">2</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Register Online</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">Visit the official portal at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">cybercrime.gov.in</a> and select 'Report Financial Fraud'.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">3</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Keep Documents Ready</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">Ensure you have 6 months bank statement, transaction IDs, screenshots of chats, and the scammer's phone numbers/UPI IDs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEBI SCORES Card */}
                <div className="bg-brand-card p-10 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/5 relative overflow-hidden group hover:border-emerald-500 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-5 blur-[100px] -mr-32 -mt-32 group-hover:opacity-10 transition-opacity"></div>

                    <div className="flex items-start gap-6 mb-8 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight mb-2">SEBI SCORES 2.0</h3>
                            <p className="text-brand-secondary text-sm font-medium">For Stock Market, Trading App & Broker Scams</p>
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">1</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Verify Registration</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">SEBI only handles complaints against SEBI-registered brokers, mutual funds, and advisors. Unregistered entities must be reported to Cyber Crime.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">2</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Lodge on SCORES 2.0</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">Visit <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">scores.sebi.gov.in</a> and create an account using your PAN card and Aadhaar linked phone number.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 text-brand-secondary font-bold text-sm">3</div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Timeline & Resolution</h4>
                                <p className="text-brand-secondary text-sm leading-relaxed">The entity must respond within 21 days according to new SEBI regulations. Ensure you upload all contract notes and ledger statements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
