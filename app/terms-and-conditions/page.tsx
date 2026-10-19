import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Terms & Conditions | ScamFreeIndia - Inventour Legal LLP",
    description: "Read the official Terms and Conditions for ScamFreeIndia, an initiative of Inventour Legal LLP. Understand service terms, delivery, liability, and consumer rights.",
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                        Official Legal Terms
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Terms &amp; Conditions
                    </h1>
                    <p className="text-brand-secondary text-base md:text-lg max-w-2xl mx-auto">
                        Please review these terms carefully before accessing or using our platform and advisory services.
                    </p>
                    <p className="text-xs text-brand-secondary/60 mt-3 font-mono">
                        Last Updated: October 2026
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-12 text-brand-secondary">

                    {/* 1. Contracting Entity and Brand Arrangement */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            1. Contracting Entity &amp; Operating Arrangement
                        </h2>
                        <div className="space-y-4">
                            <p>
                                <strong>ScamFreeIndia</strong> is an initiative and operating brand of <strong>Inventour Legal LLP</strong> (hereinafter referred to as &ldquo;Inventour Legal LLP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                            </p>
                            <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-2 text-sm">
                                <p className="font-semibold text-white">Contracting Entity Legal Details:</p>
                                <ul className="space-y-1.5 list-disc pl-5">
                                    <li><span className="text-brand-primary font-medium">Contracting Entity Name:</span> Inventour Legal LLP</li>
                                    <li><span className="text-brand-primary font-medium">LLPIN:</span> ACD-2916</li>
                                    <li><span className="text-brand-primary font-medium">Registered Office Address:</span> Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India</li>
                                    <li><span className="text-brand-primary font-medium">Official Support Email:</span> <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a></li>
                                    <li><span className="text-brand-primary font-medium">Official Helpline:</span> <a href="tel:+918054433907" className="text-brand-blue underline font-mono">+91-8054433907</a></li>
                                </ul>
                            </div>
                            <p>
                                All contracts, transactions, agreements, and invoices issued in relation to ScamFreeIndia services are entered into with and executed in the legal name of <strong>Inventour Legal LLP</strong>.
                            </p>
                        </div>
                    </section>

                    {/* 2. Clarification of Service Provider Status */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            2. Clarification of Service Provider Status
                        </h2>
                        <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 text-brand-primary space-y-3">
                            <p className="font-medium text-base leading-relaxed">
                                ScamFreeIndia is an initiative/brand of Inventour Legal LLP. The services offered include scam awareness, general procedural guidance, complaint preparation, document organisation, and administrative assistance, as described on our website. Legal advice and representation, where required, are provided only through an appropriately qualified advocate under a separate engagement, where applicable.
                            </p>
                        </div>
                        <p className="text-sm">
                            General customer guidance, document formatting, and educational resources provided through the website do not constitute formal courtroom legal representation or advocate-client privileged relationships unless a formal, separate legal engagement has been expressly entered into with a qualified Indian advocate.
                        </p>
                    </section>

                    {/* 3. Scope of Services & Government Portal Independence */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            3. Scope of Services &amp; Government Portal Distinction
                        </h2>
                        <div className="space-y-4">
                            <p>ScamFreeIndia provides the following authorized service offerings:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fraud awareness materials, risk assessments, and educational digital content.</li>
                                <li>Document review, transaction chronology preparation, and complaint draft compilation for cyber and financial fraud matters.</li>
                                <li>Procedural advisory for lodging grievances through relevant institutional mechanisms (such as the National Cyber Crime Reporting Portal &ndash; 1930 / cybercrime.gov.in, RBI Complaint Management System (CMS), SEBI SCORES 2.0, or banking ombudsman frameworks).</li>
                                <li>Administrative assistance for compiling evidence and organizing banking communications.</li>
                            </ul>
                            
                            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-sm space-y-2">
                                <p className="font-bold text-amber-400 flex items-center gap-2">
                                    <span>⚠️</span> Notice Regarding Government Portals &amp; Official Fees:
                                </p>
                                <p>
                                    Filing a complaint through an official government portal (such as the National Cyber Crime Reporting Portal or banking ombudsman) may be free of charge. Any fee charged by ScamFreeIndia or Inventour Legal LLP is solely for the optional consultancy, document organisation, procedural guidance, or administrative assistance agreed upon with the client. Such charges are private service fees, not government fees or taxes, and do not guarantee any specific action or outcome.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Service Delivery Milestones */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            4. Service Delivery &amp; Completion
                        </h2>
                        <div className="space-y-4">
                            <p>A service package shall be considered delivered upon the occurrence of any of the following milestones:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Completion of the scheduled advisory consultation call or session with our consultant or legal expert.</li>
                                <li>Delivery of the agreed customized complaint draft, transaction chronology, or document dossier via email or digital link.</li>
                                <li>Provision of the specific administrative, procedural, or document review assistance agreed upon at the time of engagement.</li>
                            </ul>
                            <p className="text-sm">
                                Clients are required to provide complete, accurate, and prompt documentation. If additional evidence or responses are not provided within fifteen (15) business days following our request, the case file may be placed on administrative hold until updated records are received.
                            </p>
                        </div>
                    </section>

                    {/* 5. Refund and Cancellation Policy Summary */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            5. Refund &amp; Cancellation Policy
                        </h2>
                        <div className="p-6 bg-brand-section/80 border border-brand-border rounded-2xl space-y-4 text-sm">
                            <p>
                                Inventour Legal LLP maintains a transparent, fair, and legally compliant Refund and Cancellation Policy. Refund eligibility is assessed in accordance with the agreed service terms, the circumstances of the request, and applicable law.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Cancellation Prior to Service:</strong> If you request cancellation before consultation scheduling, document review, or drafting commences, you may be eligible for a full refund subject to nominal payment gateway processing charges.
                                </li>
                                <li>
                                    <strong>Partially Completed Services:</strong> Where work has commenced or partially progressed, any cancellation request will be assessed fairly based on time spent and work delivered.
                                </li>
                                <li>
                                    <strong>Duplicate Transactions:</strong> Verified duplicate or accidental payments are identified, verified, and refunded in full to the original payment source within 7&ndash;10 business days.
                                </li>
                                <li>
                                    <strong>Non-Delivery of Agreed Services:</strong> If the agreed consultation or documentation has not been delivered within the agreed timeframe due to reasons attributable solely to us, clients are entitled to a full refund.
                                </li>
                            </ul>
                            <p className="text-xs text-brand-secondary/80">
                                For complete conditions, procedures, and timelines, please review our comprehensive{" "}
                                <Link href="/refund-policy" className="text-brand-blue underline font-semibold">
                                    Refund &amp; Cancellation Policy
                                </Link>.
                            </p>
                        </div>
                    </section>

                    {/* 6. Legal Disclaimer and Limitation of Liability */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            6. Legal Disclaimer &amp; Limitation of Liability
                        </h2>
                        <div className="p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/40 text-brand-primary space-y-3">
                            <p className="font-semibold text-base leading-relaxed">
                                &ldquo;To the extent permitted by applicable law, Inventour Legal LLP&apos;s liability in connection with the services will be determined in accordance with the applicable contractual terms and legal requirements. Nothing in these terms is intended to exclude or restrict any liability, consumer right, or remedy that cannot lawfully be excluded or restricted. ScamFreeIndia does not guarantee financial recovery, account freezing, FIR registration, regulatory action, or any other outcome dependent on a third party or competent authority.&rdquo;
                            </p>
                        </div>
                        <p className="text-sm">
                            Investigative decisions, bank account freezing, lien placement, chargeback disputes, cyber forensic tracking, and FIR registration are the exclusive prerogatives of investigating police authorities, judicial courts, statutory regulators (RBI, SEBI), and banking institutions. Fees paid to Inventour Legal LLP represent charges for private advisory and administrative document preparation, not guaranteed recovery fees.
                        </p>
                    </section>

                    {/* 7. Updates to Criminal Law References */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            7. Criminal Law References &amp; Platform Integrity
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                All statutory and criminal legal references throughout our materials and complaint frameworks are governed by the currently applicable criminal legislation in India, including the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, the <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong>, the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, and the <strong>Information Technology Act, 2000</strong>.
                            </p>
                            <p>
                                References to the historical <em>Indian Penal Code, 1860 (IPC)</em> or <em>Code of Criminal Procedure, 1973 (CrPC)</em> are retained solely for matters and incidents occurring prior to July 1, 2024, or where proceedings continue under transitional statutory provisions.
                            </p>
                            <p>
                                Users warrant that all information, incident reports, payment receipts, and communications submitted to ScamFreeIndia are true, genuine, and authentic. Submission of fabricated documents, extortion attempts, or bad-faith abuse of legal reporting mechanisms may result in termination of service and reporting to competent statutory authorities.
                            </p>
                        </div>
                    </section>

                    {/* 8. Consumer Protection & Fair Practices */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            8. Consumer Rights &amp; Governing Law
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                These Terms and Conditions are subject to and shall be interpreted in accordance with applicable consumer protection laws, including the <strong>Consumer Protection Act, 2019</strong>, and other laws of India.
                            </p>
                            <p>
                                Any controversy or dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over the registered office of Inventour Legal LLP in Mohali, Punjab, India.
                            </p>
                        </div>
                    </section>

                    {/* 9. Contact and Grievance Support */}
                    <section className="pt-6 border-t border-brand-border space-y-4">
                        <h2 className="text-2xl font-bold text-white">Contact &amp; Grievance Support</h2>
                        <p className="text-sm">
                            For any inquiries, questions regarding these terms, or dispute resolution, please reach out to our official channels:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1">
                                <p className="text-xs text-brand-secondary">Support &amp; Inquiries Email</p>
                                <a href="mailto:info@scamfreeindia.com" className="text-sm font-semibold text-brand-blue hover:underline break-all">
                                    info@scamfreeindia.com
                                </a>
                            </div>
                            <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1">
                                <p className="text-xs text-brand-secondary">Support Helpline</p>
                                <a href="tel:+918054433907" className="text-sm font-semibold text-brand-blue hover:underline">
                                    +91-8054433907 (10 AM &ndash; 7 PM IST)
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
