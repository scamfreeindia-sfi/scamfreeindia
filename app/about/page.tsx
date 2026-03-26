import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />
            
            <div className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-20 animate-slide-up">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent">
                        About ScamFreeIndia
                    </h1>
                    <p className="text-brand-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We are on a mission to protect every citizen of India from the rising tide of digital scams and financial fraud through awareness, technology, and community.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-brand-card p-10 rounded-2xl border border-brand-border hover:border-brand-blue/30 transition-all group">
                        <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            To empower digital users in India with the knowledge and tools needed to identify, report, and prevent online financial scams. We aim to build a robust defense mechanism that stays one step ahead of scammers.
                        </p>
                    </div>

                    <div className="bg-brand-card p-10 rounded-2xl border border-brand-border hover:border-brand-green/30 transition-all group">
                        <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-3xl">👁️</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-brand-secondary leading-relaxed">
                            A scam-free digital ecosystem in India where every citizen can transact, communicate, and browse with confidence and peace of mind.
                        </p>
                    </div>
                </div>

                {/* What We Do */}
                <div className="bg-brand-section rounded-3xl p-8 md:p-16 border border-brand-border mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-3xl rounded-full -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">What We Do</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📢</div>
                                <h3 className="text-xl font-bold mb-3">Awareness Campaigns</h3>
                                <p className="text-brand-secondary text-sm">Regular updates on latest scam trends through our blog and social media.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="text-xl font-bold mb-3">Fraud Prevention</h3>
                                <p className="text-brand-secondary text-sm">Providing resources and checklists to verify entities before any transaction.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-3">Community Support</h3>
                                <p className="text-brand-secondary text-sm">A platform for victims to share their stories and help others avoid similar traps.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: "Transparency", desc: "Honesty in everything we do." },
                            { title: "Security", desc: "Your safety is our priority." },
                            { title: "Education", desc: "Knowledge is the best defense." },
                            { title: "Community", desc: "Stronger together against fraud." }
                        ].map((value, i) => (
                            <div key={i} className="bg-brand-bg border border-brand-border p-6 rounded-xl text-center">
                                <h4 className="font-bold text-brand-blue mb-2">{value.title}</h4>
                                <p className="text-brand-secondary text-xs">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-20 bg-gradient-to-b from-brand-card to-brand-bg rounded-3xl border border-brand-border px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to join the movement?</h2>
                    <p className="text-brand-secondary mb-10 max-w-2xl mx-auto">
                        Stay updated with the latest alerts and help us make India safer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/blog" className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/80 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-blue/20">
                            Read Our Blog
                        </a>
                        <a href="/#report" className="px-8 py-4 bg-brand-green hover:brightness-110 text-brand-bg font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-green/20">
                            Report a Scam
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
