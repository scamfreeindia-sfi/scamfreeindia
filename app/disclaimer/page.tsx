import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Disclaimer | ScamFreeIndia",
    description: "Read our disclaimer regarding the information provided on ScamFreeIndia. We provide general information to help you stay protected from scams.",
};

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary flex flex-col">
            <Header />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto">

                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-brand-primary via-brand-blue to-brand-primary bg-clip-text text-transparent text-center">
                        Disclaimer
                    </h1>
                    <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
                        Please read this disclaimer carefully before using our website and services.
                    </p>
                </div>

                <div className="bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border shadow-soft leading-relaxed space-y-10 text-brand-secondary">
                    
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">General Information</h2>
                        <div className="space-y-4">
                            <p>
                                The information provided by ScamFreeIndia ("we", "us", or "our") on 
                                <a href="https://scamfreeindia.com" className="text-brand-primary hover:underline ml-1">scamfreeindia.com</a> (the "Site") 
                                and our mobile application is for general informational purposes only.
                            </p>
                            <p>
                                All information on the Site and our mobile application is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">No Professional Advice</h2>
                        <div className="space-y-4">
                            <p>
                                The Site cannot and does not contain legal or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                            </p>
                            <p>
                                Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal or financial advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE OR OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Not a Government Entity</h2>
                        <div className="space-y-4">
                            <p>
                                ScamFreeIndia is a private initiative and is NOT affiliated with, authorized, maintained, sponsored, or endorsed by any government authority, law enforcement agency, or regulatory body in India or elsewhere.
                            </p>
                            <p>
                                While we may provide guidance on how to report scams to authorities (such as the National Cyber Crime Reporting Portal), we do not represent these authorities and cannot take legal action on your behalf.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">External Links Disclaimer</h2>
                        <div className="space-y-4">
                            <p>
                                The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising.
                            </p>
                            <p>
                                Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Errors and Omissions Disclaimer</h2>
                        <div className="space-y-4">
                            <p>
                                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, ScamFreeIndia is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Fair Use Disclaimer</h2>
                        <div className="space-y-4">
                            <p>
                                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of cybercrime, fraud prevention, and consumer protection issues. We believe this constitutes a "fair use" of any such copyrighted material.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-4">Contact Us</h2>
                        <div className="space-y-4">
                            <p>
                                Should you have any feedback, comments, requests for technical support, or other inquiries, please contact us by email:
                            </p>
                            <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block">
                                <p className="text-brand-primary flex items-center gap-2">
                                    <span>📧</span>
                                    <a href="mailto:info@scamfreeindia.com" className="underline font-semibold font-mono">info@scamfreeindia.com</a>
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}
