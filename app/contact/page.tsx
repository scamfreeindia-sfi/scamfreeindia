import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Get Expert Help for Online Frauds",
    description: "Lost money in an online scam? Contact our experts for free guidance on reporting cases to government authorities and navigating the recovery process.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-slide-up">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
                        Have you been a victim of a scam? Or want to report suspicious activity?
                        Reach out to our experts for guidance and support.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start animate-fade-in">
                    {/* Contact Form */}
                    <div className="bg-brand-card p-8 md:p-10 rounded-3xl border border-brand-border shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue group-hover:w-3 transition-all"></div>
                        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-brand-secondary ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Scam Free"
                                        className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-brand-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-brand-secondary ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="info@scamfreeindia.in"
                                        className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-brand-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-brand-secondary ml-1">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-brand-primary appearance-none"
                                >
                                    <option value="report">Report a Scam</option>
                                    <option value="recovery">Recovery Assistance</option>
                                    <option value="partnership">Partnership Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-brand-secondary ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us more about your situation..."
                                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors text-brand-primary resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 active:scale-[0.98]"
                            >
                                Send Message
                            </button>read
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get in touch directly</h2>
                            <p className="text-brand-secondary mb-10 leading-relaxed">
                                Prefer more direct communication? You can reach us via phone, email, or visit our office. Our team is available Monday to Saturday, 10 AM to 7 PM.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                                    <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                    <a href="tel:+918054433907" className="text-brand-secondary hover:text-brand-primary transition-colors">+91-8054433907</a>
                                    <p className="text-xs text-brand-secondary/60 mt-1">Available 10 AM - 7 PM IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                                    <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email Support</h4>
                                    <a href="mailto:info@scamfreeindia.in" className="text-brand-secondary hover:text-brand-primary transition-colors">info@scamfreeindia.in</a>
                                    <p className="text-xs text-brand-secondary/60 mt-1">Response within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 transition-colors">
                                    <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                                    <p className="text-brand-secondary">Sco 29 Mohali citi centre F block aerocity, 140306</p>
                                    <p className="text-xs text-brand-secondary/60 mt-1">Punjab, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        {/* <div className="pt-8 block border-t border-brand-border">
                            <h4 className="font-bold mb-4">Follow us for alerts</h4>
                            <div className="flex gap-4">
                                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center hover:bg-brand-blue/10 hover:border-brand-blue transition-all">
                                        <span className="sr-only">{social}</span>
                                        <div className="w-5 h-5 bg-brand-secondary group-hover:bg-brand-blue" />
                                    </a>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
