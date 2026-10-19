import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Refund and Cancellation Policy | ScamFreeIndia - Inventour Legal LLP",
    description: "Review the comprehensive Refund & Cancellation Policy for ScamFreeIndia, an initiative of Inventour Legal LLP. Learn about service delivery, cancellations, duplicate payment resolution, and consumer rights.",
};

export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-widest mb-4">
                        Fair &amp; Transparent Terms
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-green to-brand-primary bg-clip-text text-transparent text-center">
                        Refund &amp; Cancellation Policy
                    </h1>
                    <p className="text-brand-secondary text-base md:text-lg max-w-2xl mx-auto">
                        Inventour Legal LLP is committed to transparent, fair, and legally compliant policies across all services offered under the ScamFreeIndia initiative.
                    </p>
                    <p className="text-xs text-brand-secondary/60 mt-3 font-mono">
                        Last Updated: October 2026
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-12 text-brand-secondary">

                    {/* 1. Contracting Entity & Scope of Service */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            1. Contracting Entity &amp; Operating Arrangement
                        </h2>
                        <p>
                            This Refund and Cancellation Policy applies to all consultancy, document organisation, and administrative assistance services provided through <strong>ScamFreeIndia</strong>, which is an initiative and operating brand of <strong>Inventour Legal LLP</strong> (LLPIN: ACD-2916), having its registered office at Sco 29, Citi Centre, F Block, Aerocity, Mohali, Punjab &ndash; 140306, India.
                        </p>
                        <p>
                            All service invoices, payment receipts, and financial transactions are executed exclusively in the legal name of <strong>Inventour Legal LLP</strong>.
                        </p>
                    </section>

                    {/* 2. Service Scope, Exclusions & Non-Guarantee Notice */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            2. Service Scope, Inclusions &amp; Exclusions
                        </h2>
                        <div className="space-y-4">
                            <p>
                                When you engage ScamFreeIndia, you are purchasing specific professional services tailored to cyber fraud awareness and grievance documentation. Each service package clearly specifies what is included:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-2">
                                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                                        Services Included:
                                    </h3>
                                    <ul className="text-sm space-y-1.5 list-disc pl-5">
                                        <li>One-on-one advisory consultations and case assessments.</li>
                                        <li>Chronological compilation and evidence structuring of transaction records.</li>
                                        <li>Custom complaint drafting for submission to cybercrime authorities, banks, or regulatory ombudsmen.</li>
                                        <li>Procedural guidance on official escalation protocols.</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                                        Exclusions (What We Do Not Provide):
                                    </h3>
                                    <ul className="text-sm space-y-1.5 list-disc pl-5">
                                        <li>No guarantee of financial recovery or monetary return.</li>
                                        <li>No guarantee of bank account unfreezing or lien clearance.</li>
                                        <li>No guarantee of FIR registration by police authorities.</li>
                                        <li>No exercise of sovereign or statutory police power.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-sm space-y-2">
                                <p className="font-bold text-amber-400">
                                    Notice Regarding Fees &amp; Recovery:
                                </p>
                                <p>
                                    Payment made to Inventour Legal LLP is solely for advisory consultation, document review, and administrative support. It must not be represented, understood, or construed as a fee for guaranteed recovery of money or guaranteed outcome by any bank, court, police agency, or government regulator.
                                </p>
                                <p className="text-xs text-brand-secondary/80">
                                    Filing complaints on government portals (e.g., cybercrime.gov.in, RBI CMS, SEBI SCORES) may be done free of charge. Our fees cover private advisory and document preparation work only.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. When is Service Considered Delivered? */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            3. Service Delivery Milestones
                        </h2>
                        <p>
                            To ensure total clarity regarding refund eligibility, a purchased service is considered fully delivered upon the occurrence of any of the following milestones:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>
                                <strong>Consultation Sessions:</strong> When the scheduled consultation call or interactive session between the client and our specialist/lawyer is successfully completed.
                            </li>
                            <li>
                                <strong>Documentation &amp; Drafting:</strong> When the customized complaint draft, representation letter, or chronological dossier is transmitted to the client via email or download link.
                            </li>
                            <li>
                                <strong>Administrative Assistance:</strong> When agreed procedural steps, documentation formatting, or guidance materials have been provided to the client.
                            </li>
                        </ul>
                    </section>

                    {/* 4. Cancellation & Refund Assessment */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            4. Cancellation Requests &amp; Assessment
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>
                                We reject arbitrary &ldquo;no refund under any circumstances&rdquo; blanket statements. Refund eligibility is assessed transparently in accordance with the agreed service terms, the actual progress made, and applicable consumer laws:
                            </p>
                            
                            <div className="space-y-3">
                                <div className="p-4 rounded-xl bg-brand-section/80 border border-brand-border">
                                    <h4 className="font-bold text-white mb-1">A. Cancellation Prior to Service Commencement</h4>
                                    <p>
                                        If a client requests cancellation before a consultation has taken place and before drafting work or document review has commenced, a <strong>full refund</strong> will be issued, less any third-party payment gateway transaction charges incurred (typically 2&ndash;3%).
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-brand-section/80 border border-brand-border">
                                    <h4 className="font-bold text-white mb-1">B. Cancellation of Partially Completed Services</h4>
                                    <p>
                                        If cancellation is requested after consultation has been held or after drafting work has partially commenced but prior to final dossier dispatch, Inventour Legal LLP will assess the claim fairly. A pro-rata refund reflecting the unperformed portion of the service will be calculated and provided.
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-brand-section/80 border border-brand-border">
                                    <h4 className="font-bold text-white mb-1">C. Completed Services</h4>
                                    <p>
                                        Once a consultation has been held or customized legal/complaint documentation has been finalized and delivered, the service is complete. Because professional time, intellectual work, and administrative resources have been expended, completed services are non-refundable, except where non-delivery or deficiency is established under Section 6.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Duplicate or Erroneous Payments */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            5. Duplicate or Erroneous Transactions
                        </h2>
                        <p className="text-sm">
                            In the event of an accidental multiple payment, duplicate deduction, or technical billing anomaly for the same service order:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>
                                Clients should notify us at <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a> with the payment references, bank transaction IDs, and date of transaction.
                            </li>
                            <li>
                                Upon verification with our banking partner (IndusInd Bank / payment gateway), 100% of the duplicate amount will be refunded immediately without deduction.
                            </li>
                            <li>
                                The refund will be credited back to the original source account within 5 to 7 business days.
                            </li>
                        </ul>
                    </section>

                    {/* 6. Non-Delivery & Timeline Claims */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            6. Claims for Non-Delivery of Services
                        </h2>
                        <div className="space-y-3 text-sm">
                            <p>
                                If Inventour Legal LLP fails to deliver the purchased service package or fail to provide the agreed consultation session within the agreed delivery timeframe (or within 48 hours of the scheduled time) due to reasons solely attributable to us, the client may:
                            </p>
                            <ol className="list-decimal pl-6 space-y-1.5">
                                <li>Request immediate rescheduling at a time mutually convenient to the client, OR</li>
                                <li>Claim a 100% full refund of the fee paid for that specific undelivered service.</li>
                            </ol>
                            <p className="text-xs text-brand-secondary/80">
                                Note: Delays caused by client unavailability, failure to submit necessary incident details, or non-responsiveness do not constitute non-delivery by Inventour Legal LLP.
                            </p>
                        </div>
                    </section>

                    {/* 7. Refund Review & Processing Timelines */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            7. Refund Request Submission &amp; Processing Workflow
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p>To submit a cancellation or refund request, please follow these simple steps:</p>
                            <div className="p-5 rounded-2xl bg-brand-section/80 border border-brand-border space-y-3">
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>
                                        <strong>Submit in Writing:</strong> Send an email from your registered email address to <a href="mailto:info@scamfreeindia.com" className="text-brand-blue underline font-mono">info@scamfreeindia.com</a> with the subject line <em>&ldquo;Refund Request &ndash; [Your Transaction ID / Mobile Number]&rdquo;</em>.
                                    </li>
                                    <li>
                                        <strong>Provide Details:</strong> Include your full name, transaction date, proof of payment, and the specific reason for your request.
                                    </li>
                                    <li>
                                        <strong>Review Period:</strong> Our support and grievance desk will acknowledge and review your claim within <strong>3 to 5 business days</strong>.
                                    </li>
                                    <li>
                                        <strong>Settlement:</strong> Once approved, the refund will be remitted exclusively to the original payment method (Bank Account, UPI, or Card) within <strong>7 to 10 working days</strong>, subject to your bank&apos;s settlement cycle.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* 8. Consumer Protection Laws */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white border-l-4 border-brand-green pl-4">
                            8. Consumer Protection &amp; Statutory Legal Rights
                        </h2>
                        <p className="text-sm">
                            This Refund and Cancellation Policy is subject to applicable Indian consumer protection legislation, including the <strong>Consumer Protection Act, 2019</strong>, and consumer protection (e-commerce) rules. Nothing in this policy shall be interpreted to restrict or extinguish any statutory right or legal remedy that cannot be lawfully excluded or limited under Indian law.
                        </p>
                    </section>

                    {/* 9. Contact Details */}
                    <section className="pt-6 border-t border-brand-border space-y-4">
                        <h2 className="text-2xl font-bold text-white">Need Assistance With a Refund or Cancellation?</h2>
                        <p className="text-sm">
                            Our support desk is available to assist you with any questions or claims regarding your order:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1">
                                <p className="text-xs text-brand-secondary">Grievance &amp; Refund Email</p>
                                <a href="mailto:info@scamfreeindia.com" className="text-sm font-semibold text-brand-green hover:underline break-all">
                                    info@scamfreeindia.com
                                </a>
                            </div>
                            <div className="p-4 rounded-xl bg-brand-bg border border-brand-border space-y-1">
                                <p className="text-xs text-brand-secondary">Official Phone Support</p>
                                <a href="tel:+918054433907" className="text-sm font-semibold text-brand-green hover:underline">
                                    +91-8054433907 (Mon&ndash;Sat, 10 AM &ndash; 7 PM IST)
                                </a>
                            </div>
                        </div>
                        <div className="text-center pt-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-green transition-colors">
                                Visit our Contact Us Page &rarr;
                            </Link>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
