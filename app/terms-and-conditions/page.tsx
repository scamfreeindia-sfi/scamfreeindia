import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Terms and Conditions Page
 * 
 * This page contains the official Terms & Conditions from scamfreeind.in
 */
export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Terms & Conditions
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-10 text-brand-secondary">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">Welcome to ScamFree India</h2>
                        <p>
                            ScamFree India is an initiative focused on creating fraud awareness and providing guidance to victims of online scams. By accessing or using our services, you agree to the following terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">1. Nature of Services</h2>
                        <div className="space-y-4">
                            <p>ScamFree India provides:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fraud awareness & educational content</li>
                                <li>Digital material and resources</li>
                                <li>Consultancy, guidance & documentation help for cyber complaints</li>
                                <li>Support aligned with SEBI & Cybercrime frameworks</li>
                            </ul>
                            <p>All our services are delivered digitally via:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Email</li>
                                <li>Downloadable files</li>
                                <li>Online meetings or advisory sessions</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">2. User Eligibility</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Be 18+ years old, or</li>
                            <li>Have valid parent/guardian consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">3. Service Delivery</h2>
                        <div className="space-y-4">
                            <p>A service will be treated as successfully delivered when:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Email with access link or document has been sent</li>
                                <li>A live session or consultation is completed</li>
                                <li>Written or recorded confirmation from the user is received</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">4. Accuracy of Information</h2>
                        <p>
                            We share information based on verified sources and real research. However, because online fraud trends and legal frameworks evolve, we do not guarantee absolute accuracy at all times.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">5. Support, Disputes & Resolution</h2>
                        <div className="space-y-4">
                            <p>If you have any issue, you must contact us first at: 📧 <a href="mailto:info@scamfreeind.in" className="underline text-brand-primary">info@scamfreeind.in</a></p>
                            <p>We resolve most concerns within 3–5 business days. Filing a chargeback or complaint without contacting us first may be treated as malicious misuse of rights and defamation.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4">6. Legal Action for Misuse</h2>
                        <div className="space-y-4">
                            <p>False allegations, fraudulent complaints, or illegal chargebacks may lead to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Legal notice under IPC sections related to defamation & misuse of legal process</li>
                                <li>Submission of proof & documents to cyber authorities</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-blue pl-4 text-brand-primary">Refund Policy Summary</h2>
                        <div className="p-6 bg-brand-bg/50 border border-brand-border rounded-2xl space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2 underline decoration-brand-blue">Non-Refundable Situations</h3>
                                <p className="mb-2">Refunds are not applicable when:</p>
                                <ul className="list-disc pl-6 space-y-1 text-sm">
                                    <li>Digital material is accessed or downloaded</li>
                                    <li>Services such as sessions, documentation or consultation have been delivered</li>
                                    <li>Dissatisfaction arises later or due to change of mind</li>
                                    <li>Purchase is made during discounts, offers or campaigns</li>
                                    <li>User does not respond or submit documents within 15 days</li>
                                </ul>
                                <p className="mt-2 text-xs text-brand-secondary/80 italic">If the user becomes unresponsive, the case will be automatically closed, without future refund eligibility.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Refund-Eligible Situations (Rare)</h3>
                                <p className="mb-2">Refunds are possible only in:</p>
                                <ul className="list-disc pl-6 space-y-1 text-sm">
                                    <li>Duplicate payment for the same service (verified through bank logs)</li>
                                </ul>
                                <p className="mt-2 text-xs">If approved, refunds take 7–10 working days to reflect in the original payment source.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-6 border-t border-brand-border">
                        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="text-2xl">⚠️</span> Disclaimer
                            </h3>
                            <p className="text-sm leading-relaxed">
                                ScamFree India does not provide investment, trading, or financial return advice. We are not legal advocates or representatives. We offer awareness, educational guidance & documentation support only.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact & Support</h2>
                        <p>For queries, clarification, or dispute resolution:</p>
                        <div className="mt-4 text-brand-primary space-y-1">
                            <p>📧 Email: <a href="mailto:info@scamfreeind.in" className="underline">info@scamfreeind.in</a></p>
                            <p>📞 Phone: <a href="tel:8054433907" className="underline">8054433907</a></p>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
