import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | ScamFreeIndia",
    description: "Read our commitment to your privacy and how we handle personal data responsibly in accordance with applicable Indian laws.",
};

/**
 * Privacy Policy Page
 * 
 * This page contains the official Privacy Policy from scamfreeind.in
 */
export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Privacy Policy
                    </h1>
                </div>

                {/* Content Section */}
                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-10 text-brand-secondary">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Disclaimer</h2>
                        <div className="space-y-4">
                            <p>Scamfree India is committed to providing information and services that help users stay informed and protected. While we aim to offer useful and relevant content, all information on this website and app is provided solely for general informational purposes.</p>
                            <p>Scamfree India does not guarantee the accuracy, completeness, reliability, or timeliness of any content and shall not be responsible or liable for any loss, damage, or consequences arising from the use of, or reliance on, any information provided on this website or app.</p>
                            <p>This website and app are provided on an “as-is” and “as-available” basis, without any warranties of any kind—whether express or implied—including, but not limited to, warranties of merchantability, fitness for a particular purpose, accuracy, quality, non-infringement, or availability.</p>
                            <p>Scamfree India does not warrant that the website or app will be uninterrupted, error-free, secure, or free from viruses or other harmful components.</p>
                            <p>Scamfree India is not a government authority, law enforcement agency, or regulatory body, and nothing on this website or app should be construed as official government advice, legal advice, or a guarantee of outcomes.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Intellectual Property</h2>
                        <div className="space-y-4">
                            <p>All design elements, layout, text, graphics, logos, content, and other materials available on this website and app are the intellectual property of Scamfree India, unless otherwise stated.</p>
                            <p>Users may not copy, reproduce, distribute, modify, publish, transmit, display, perform, or otherwise use any part of this website or app for commercial or public purposes without prior written permission from Scamfree India.</p>
                            <p>Certain processes, technologies, trademarks, or products mentioned on this website or app may be protected by intellectual property rights owned by Scamfree India or third parties. Nothing contained on this website shall be construed as granting, by implication or otherwise, any license or right to use such intellectual property.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Our Commitment to Your Privacy</h2>
                        <p>
                            Personal data refers to any information that can be used to identify an individual. Scamfree India is committed to handling personal data responsibly and in accordance with applicable laws, while maintaining confidentiality and reasonable security safeguards.
                            This Privacy Policy explains how we collect, use, retain, and share personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Information We Collect</h2>
                        <div className="space-y-4">
                            <p>Scamfree India may collect personal information when you:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>submit forms,</li>
                                <li>interact with our website or app,</li>
                                <li>send inquiries, complaints, or feedback, or</li>
                                <li>request services, assistance, or updates.</li>
                            </ul>
                            <p>The information collected may be used for purposes such as:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>responding to your inquiries or requests,</li>
                                <li>verifying identity where necessary,</li>
                                <li>improving our services and user experience,</li>
                                <li>internal analysis and record-keeping, or</li>
                                <li>communicating with you regarding our services.</li>
                            </ul>
                            <p>Providing personal information is voluntary. However, failure to provide certain required information may limit our ability to offer specific services.</p>
                            <p>We may also automatically collect non-identifiable or aggregated information, such as pages visited, browser type, device information, IP-related data, or domain details. This information is used to analyze trends, administer the platform, and improve functionality. Such aggregated data may be disclosed where required for legal, security, or investigative purposes.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Sharing of Personal Information</h2>
                        <div className="space-y-4">
                            <p>Any personal information you provide to Scamfree India through forms, the website, the app, chats, emails, or any other means will be treated as confidential. However, we may share such information with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>service providers, contractors, or partners who assist in operating or maintaining our services,</li>
                                <li>individuals or entities bound by confidentiality obligations to Scamfree India, or</li>
                                <li>government authorities, regulatory bodies, law enforcement agencies, or other organizations where disclosure is required by applicable law, court orders, or legal processes (within or outside India).</li>
                            </ul>
                            <p>Once personal information is shared with a third party in accordance with this policy, Scamfree India does not control and is not responsible for how that third party stores, protects, or uses the information. While we strive to work with reputable partners, we do not guarantee their privacy or security practices.</p>
                            <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl">
                                <p className="text-brand-primary">For any privacy-related queries, you may contact us at: 📧 <a href="mailto:info@scamfreeindia.com" className="underline">info@scamfreeind.in</a></p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Retention of Data</h2>
                        <p>
                            Personal information will be retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws. When the information is no longer required, it will be securely deleted, anonymized, or otherwise disposed of in a reasonable manner.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Security of Information</h2>
                        <p>
                            Scamfree India takes reasonable technical and organizational measures to safeguard the information you share with us. However, no method of transmission over the internet or electronic storage is completely secure.
                            By using our website or app, you acknowledge that online communications may be subject to interception, unauthorized access, loss, or alteration, and you agree that Scamfree India shall not be held liable for any damages arising from such risks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">External Links</h2>
                        <p>
                            This Privacy Policy applies only to the official Scamfree India website and app. Our platform may contain links to external websites or services that are not operated or controlled by us.
                            Scamfree India is not responsible for the content, privacy policies, or security practices of any third-party websites. Users are encouraged to review the privacy policies of any external sites they visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Acceptance of Terms</h2>
                        <div className="space-y-4">
                            <p>By accessing or using the Scamfree India website or app, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.</p>
                            <p>Scamfree India reserves the right to modify or update this policy at any time without prior notice. Continued use of the website or app after any changes are posted will constitute acceptance of the revised policy.</p>
                            <p>If you do not agree with any part of this policy, your sole remedy is to discontinue use of the Scamfree India website and app.</p>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
