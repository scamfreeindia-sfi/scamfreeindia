import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Legal Disclaimer | ScamFreeIndia - Inventour Legal LLP",
    description: "Read the official legal disclaimer, service provider status, and limitation of liability for ScamFreeIndia, an initiative of Inventour Legal LLP.",
};

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Legal Notices &amp; Disclaimers
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-amber-400 to-brand-primary bg-clip-text text-transparent text-center">
                        Legal Disclaimer
                    </h1>
                    <p className="text-brand-secondary text-base md:text-lg max-w-2xl mx-auto">
                        Please review this disclaimer carefully to understand the nature of our services, operational structure, and limitations of liability.
                    </p>
                    <p className="text-xs text-brand-secondary/60 mt-3 font-mono">
                        Last Updated: October 2026
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-12 text-brand-secondary">

                    {/* 1. Contracting Entity and Brand Arrangement */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            1. Operating Entity &amp; Brand Relationship
                        </h2>
                        <div className="space-y-3">
                            <p>
                                <strong>ScamFreeIndia</strong> is an initiative and operating brand of <strong>Inventour Legal LLP</strong> (LLPIN: ACD-2916), having its registered office at Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India.
                            </p>
                            <p>
                                All services, consultations, payment collections, and contractual engagements are entered into with and executed in the legal name of <strong>Inventour Legal LLP</strong>.
                            </p>
                        </div>
                    </section>

                    {/* 2. Clarification of Service Provider Status */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            2. Service Provider Status &amp; Legal Advice Notice
                        </h2>
                        <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 text-brand-primary space-y-3">
                            <p className="font-semibold text-base leading-relaxed">
                                &ldquo;ScamFreeIndia is an initiative/brand of Inventour Legal LLP. The services offered include scam awareness, general procedural guidance, complaint preparation, document organisation, and administrative assistance, as described on our website. Legal advice and representation, where required, are provided only through an appropriately qualified advocate under a separate engagement, where applicable.&rdquo;
                            </p>
                        </div>
                        <p className="text-sm">
                            Accessing educational materials on this website, filling out an inquiry form, or receiving administrative guidance does not automatically establish an advocate-client relationship. If formal legal notice drafting, court appearance, or judicial representation is required, clients may enter into a separate, formal engagement with an appropriately licensed advocate.
                        </p>
                    </section>

                    {/* 3. Legal Disclaimer and Limitation of Liability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            3. Limitation of Liability
                        </h2>
                        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-brand-primary space-y-3">
                            <p className="font-semibold text-base leading-relaxed">
                                &ldquo;To the extent permitted by applicable law, Inventour Legal LLP&apos;s liability in connection with the services will be determined in accordance with the applicable contractual terms and legal requirements. Nothing in these terms is intended to exclude or restrict any liability, consumer right, or remedy that cannot lawfully be excluded or restricted. ScamFreeIndia does not guarantee financial recovery, account freezing, FIR registration, regulatory action, or any other outcome dependent on a third party or competent authority.&rdquo;
                            </p>
                        </div>
                        <p className="text-sm">
                            Inventour Legal LLP and ScamFreeIndia will not be held responsible for third-party delays, operational decisions, or omissions made by banks, payment gateways, statutory regulators (RBI, SEBI), state police departments, or cybercrime investigative cells.
                        </p>
                    </section>

                    {/* 4. Not a Government Entity & Distinction of Service Fees */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            4. Not a Government Authority &amp; Government Portal Distinction
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                ScamFreeIndia is a private initiative operated by Inventour Legal LLP. It is <strong>NOT</strong> a government entity, statutory body, police agency, or judicial authority, nor is it officially affiliated with the Ministry of Home Affairs, Reserve Bank of India, or SEBI.
                            </p>
                            <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-2">
                                <p className="font-bold text-white">Free Government Portals vs. Optional Private Service Fees:</p>
                                <p>
                                    Filing a cybercrime or financial complaint directly through official government portals (such as the National Cyber Crime Reporting Portal at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">cybercrime.gov.in</a> or Dial 1930, the RBI Complaint Management System (CMS), or SEBI SCORES) may be done free of charge.
                                </p>
                                <p className="text-xs text-brand-secondary/80">
                                    Any fee charged by ScamFreeIndia or Inventour Legal LLP is solely for optional private consultancy, factual chronology preparation, evidence compilation, or administrative assistance agreed upon with the client. Such fees are never government fees, nor do they guarantee any investigation outcome.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Statutory Criminal Law Framework */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            5. Statutory Criminal Law Framework
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                Guidance provided across our platform is updated to reflect the currently applicable criminal legislation in India, including the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, the <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong>, the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, and the <strong>Information Technology Act, 2000</strong>.
                            </p>
                            <p>
                                Historical references to the <em>Indian Penal Code, 1860 (IPC)</em> or <em>Code of Criminal Procedure, 1973 (CrPC)</em> are maintained strictly for context regarding incidents or proceedings governed by law in force prior to July 1, 2024.
                            </p>
                        </div>
                    </section>

                    {/* 6. External Links & Informational Accuracy */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-400 pl-4">
                            6. External Links &amp; Third-Party Content
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                Our website may contain hyperlinks to external government, regulatory, banking, or educational websites. These links are provided solely for user convenience and reference. Inventour Legal LLP does not endorse, verify, or assume responsibility for the ongoing availability, content, or accuracy of third-party platforms.
                            </p>
                            <p>
                                Users are advised to review the official terms, rules, and privacy practices of any third-party websites or government portals they visit.
                            </p>
                        </div>
                    </section>

                    {/* 7. Contact Details */}
                    <section className="pt-6 border-t border-brand-border space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Official Contact Details</h2>
                        <p className="text-sm">
                            If you require clarification regarding this disclaimer or have questions about our services:
                        </p>
                        
                        <div className="p-6 rounded-2xl bg-brand-section/90 border border-brand-border space-y-3 text-sm">
                            <p className="font-bold text-white text-base">Inventour Legal LLP (LLPIN: ACD-2916)</p>
                            <ul className="space-y-1.5 list-disc pl-5">
                                <li><span className="text-brand-primary font-medium">Registered Office:</span> Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India</li>
                                <li><span className="text-brand-primary font-medium">Official Email:</span> <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a></li>
                                <li><span className="text-brand-primary font-medium">Helpline Phone:</span> <a href="tel:+918054433907" className="text-brand-blue underline font-mono">+91-8054433907</a></li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
