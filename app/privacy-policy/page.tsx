import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Privacy Policy | ScamFreeIndia - Inventour Legal LLP",
    description: "Read the Privacy Policy and Client Data Protection practices for ScamFreeIndia, an initiative of Inventour Legal LLP. Learn how your data is collected, retained, secured, and handled.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                        Data Protection &amp; Confidentiality
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-brand-secondary text-base md:text-lg max-w-2xl mx-auto">
                        How Inventour Legal LLP collects, uses, protects, and handles your information under the ScamFreeIndia initiative in accordance with Indian data protection laws.
                    </p>
                    <p className="text-xs text-brand-secondary/60 mt-3 font-mono">
                        Last Updated: October 2026
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-12 text-brand-secondary">

                    {/* 1. Contracting Entity & Overview */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            1. Entity Details &amp; Scope of Policy
                        </h2>
                        <div className="space-y-3">
                            <p>
                                This Privacy Policy applies to the collection, processing, storage, and transfer of personal data by <strong>Inventour Legal LLP</strong> (LLPIN: ACD-2916), operating the brand and initiative <strong>ScamFreeIndia</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), having its registered office at Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India.
                            </p>
                            <p>
                                We are committed to processing personal data transparently, securely, and in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, the <strong>Information Technology Act, 2000</strong>, and the <em>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>.
                            </p>
                        </div>
                    </section>

                    {/* 2. Information Collection and Purpose */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            2. Information Collection &amp; Use
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                To provide fraud awareness, procedural guidance, complaint preparation, and document organisation services, we collect specific categories of information provided voluntarily by you:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-2">
                                    <h3 className="font-bold text-white text-base">Categories of Data Collected</h3>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li><strong>Personal Identifiers:</strong> Name, contact phone/WhatsApp number, email address, and state/city of residence.</li>
                                        <li><strong>Incident Documentation:</strong> Factual narrative of the scam, dates, chronological notes, and suspect communications.</li>
                                        <li><strong>Financial Transaction Records:</strong> Bank account numbers (partially masked where applicable), UTR numbers, UPI transaction IDs, transaction amounts, and payment receipts.</li>
                                        <li><strong>Supporting Evidence:</strong> Chat exports, screenshots of deceptive websites/applications, emails, and call logs.</li>
                                        <li><strong>Identity Records:</strong> Government identification documents (such as Aadhaar or PAN) only where strictly necessary to verify identity for drafting formal representations.</li>
                                    </ul>
                                </div>

                                <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-2">
                                    <h3 className="font-bold text-white text-base">Purposes of Use</h3>
                                    <ul className="space-y-2 list-disc pl-5">
                                        <li>Reviewing and assessing the timeline and factual circumstances of the reported scam.</li>
                                        <li>Drafting customized complaints, representations, and chronological dossiers for submission to statutory authorities.</li>
                                        <li>Providing procedural guidance on lodging reports with the National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in), RBI CMS, SEBI SCORES, or banks.</li>
                                        <li>Communicating with you regarding your consultation, status updates, or requested assistance.</li>
                                        <li>Complying with statutory, tax, accounting, and legal requirements.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Data Sharing & Disclosures */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            3. Data Sharing &amp; Permitted Disclosures
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                We do not sell, rent, monetize, or trade your personal data or case documents to third parties for commercial advertising. Disclosures are strictly limited to necessary and lawful purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Authorised Service Providers &amp; Payment Processors:</strong> We share essential transaction data with trusted payment gateways (such as bank processors or UPI networks) to process service fees securely.
                                </li>
                                <li>
                                    <strong>Statutory Authorities &amp; Law Enforcement:</strong> Where requested by you to assist in drafting complaints for submission, or where strictly required by applicable Indian law, valid court order, or formal summons issued by competent law enforcement agencies or courts.
                                </li>
                                <li>
                                    <strong>Independently Engaged Advocates:</strong> Where you request specialized legal advice or representation and enter into a separate engagement with an advocate, relevant case documents are shared strictly under advocate-client confidentiality and with your express authorization.
                                </li>
                                <li>
                                    <strong>Technical Infrastructure:</strong> Hosting providers and database infrastructure partners operating under strict written data processing agreements and security obligations.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Data Retention & Secure Deletion */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            4. Data Retention &amp; Disposal
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                Inventour Legal LLP retains client records and supporting documents only for as long as reasonably necessary to fulfill the specific purposes outlined in this policy, unless a longer retention period is mandated or permitted by law:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Active Case Files:</strong> Retained throughout the duration of your consultation, document preparation, and follow-up support period.</li>
                                <li><strong>Statutory &amp; Financial Records:</strong> Tax invoices, payment logs, and basic transaction records are retained for the statutory period required under Indian financial and tax laws (generally up to 8 financial years).</li>
                                <li><strong>Incident Evidence &amp; Screenshots:</strong> Securely deleted, purged, or permanently anonymized within 180 days following completion or formal closing of the advisory engagement, unless ongoing legal proceedings or client instructions necessitate retention.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Consent & Right to Withdraw */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            5. Consent &amp; Withdrawal of Consent
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                By submitting inquiries, filling out intake forms, communicating via WhatsApp/email, or purchasing advisory services, you provide your express, informed consent for Inventour Legal LLP to collect and process your information for the stated purposes.
                            </p>
                            <p>
                                <strong>Right to Withdraw Consent:</strong> You have the right to withdraw your consent for future processing of your personal data at any time by writing to our designated Grievance Officer at <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a>.
                            </p>
                            <p className="text-xs text-brand-secondary/80">
                                <em>Effect of Withdrawal:</em> If you withdraw consent, we may be unable to continue providing complaint drafting, document review, or consultation services that depend on the relevant information. Withdrawal does not affect the lawfulness of processing undertaken prior to the withdrawal or retention required by statutory law.
                            </p>
                        </div>
                    </section>

                    {/* 6. Staff Access & Confidentiality Obligations */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            6. Staff Access &amp; Confidentiality
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                We treat all client incident reports, transaction evidence, and case records as strictly confidential:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access to client information is restricted on a strict <strong>&ldquo;need-to-know&rdquo;</strong> basis to authorized staff and legal consultants assigned to your case.</li>
                                <li>All staff members, consultants, and administrative personnel are bound by written confidentiality and non-disclosure obligations.</li>
                                <li>Unauthorized access, downloading, copying, or dissemination of client materials is strictly prohibited and subject to disciplinary action and legal liability.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. Security Safeguards (Actually Implemented) */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-blue pl-4">
                            7. Technical &amp; Operational Security Safeguards
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                Inventour Legal LLP implements reasonable and appropriate technical, administrative, and physical safeguards to protect client information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access:
                            </p>
                            <div className="grid md:grid-cols-3 gap-3 pt-1">
                                <div className="p-4 rounded-xl bg-brand-section/60 border border-brand-border space-y-1">
                                    <p className="font-bold text-white text-xs">Encryption in Transit</p>
                                    <p className="text-xs text-brand-secondary">Industry-standard HTTPS / TLS encryption across all web forms and digital transmissions.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-brand-section/60 border border-brand-border space-y-1">
                                    <p className="font-bold text-white text-xs">Access Controls</p>
                                    <p className="text-xs text-brand-secondary">Role-based access controls, multi-factor authentication, and segregated database permissions.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-brand-section/60 border border-brand-border space-y-1">
                                    <p className="font-bold text-white text-xs">Secure Storage</p>
                                    <p className="text-xs text-brand-secondary">Cloud-hosted databases with automated backup protocols and restricted administrative access.</p>
                                </div>
                            </div>
                            <p className="text-xs text-brand-secondary/80">
                                Note: While we enforce strict safeguards, no electronic transmission or digital storage system is 100% impenetrable. In the unlikely event of a security incident affecting your personal data, we will take immediate remedial steps and notify affected individuals and statutory authorities in accordance with applicable law.
                            </p>
                        </div>
                    </section>

                    {/* 8. Grievance Redressal Officer */}
                    <section className="pt-6 border-t border-brand-border space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Grievance Redressal &amp; Privacy Officer</h2>
                        <p className="text-sm">
                            In accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer are provided below:
                        </p>
                        
                        <div className="p-6 rounded-2xl bg-brand-section/90 border border-brand-border space-y-3 text-sm">
                            <p className="font-bold text-white text-base">Grievance &amp; Privacy Officer:</p>
                            <ul className="space-y-1.5 list-disc pl-5">
                                <li><span className="text-brand-primary font-medium">Designation:</span> Grievance Officer, Data Protection Desk</li>
                                <li><span className="text-brand-primary font-medium">Operating Entity:</span> Inventour Legal LLP</li>
                                <li><span className="text-brand-primary font-medium">Registered Office:</span> Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India</li>
                                <li><span className="text-brand-primary font-medium">Official Grievance Email:</span> <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a></li>
                                <li><span className="text-brand-primary font-medium">Helpline:</span> <a href="tel:+918054433907" className="text-brand-blue underline font-mono">+91-8054433907</a></li>
                            </ul>
                            <p className="text-xs text-brand-secondary/80 pt-2">
                                We review, acknowledge, and resolve privacy grievances in a prompt, transparent manner within thirty (30) business days from the date of receipt.
                            </p>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
