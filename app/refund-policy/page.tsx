import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Refund Policy Page
 * 
 * This page contains the official Refund Policy from scamfreeindia.com
 */
export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />
            
            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Refund Policy
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-10 text-brand-secondary">
                    
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-green pl-4">Legal Disclaimer</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                ScamFree India provides support and guidance services for issues related to SEBI, RBI, banking fraud, cyber fraud, and documentation assistance. Our team helps you file complaints, prepare documents and escalate matters to the concerned authorities.
                            </p>
                            
                            <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-2xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <p className="text-brand-primary font-bold text-xl mb-4 group-hover:text-white transition-colors">
                                        Once our service has started or been delivered, no refund will be provided.
                                    </p>
                                    <p className="text-brand-secondary leading-relaxed">
                                        Time and resources are immediately invested in the process upon registration. We request you to make your purchase decision carefully and reach out for clarification before registering.
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                            </div>
                        </div>
                    </section>

                    <section className="pt-10 border-t border-brand-border">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-brand-section/50 p-8 rounded-2xl border border-brand-border">
                                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                                <p className="text-sm mb-6 text-brand-secondary">
                                    If you have any questions about this policy or need clarification on our services before purchase, please reach out to our support team.
                                </p>
                                <a href="/contact" className="inline-flex items-center gap-2 text-brand-primary hover:text-white font-bold transition-colors">
                                    Contact Support 
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-brand-section/50 p-8 rounded-2xl border border-brand-border">
                                <h3 className="text-xl font-bold text-white mb-4">Register Query</h3>
                                <p className="text-sm mb-6 text-brand-secondary">
                                    Ready to get help? Register your query securely and our experts will guide you through the recovery process.
                                </p>
                                <a href="https://razorpay.me/@scamfreeind" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue border border-brand-blue/30 px-6 py-3 rounded-xl hover:bg-brand-blue hover:text-white transition-all font-bold">
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
