"use client"
import React from 'react';

const SebiSafety = () => {
    const safetySteps = [
        {
            title: "Check SEBI Registration",
            description: "Never invest through an unregistered entity. Always verify the SEBI registration number of your broker, sub-broker, or investment advisor on the official SEBI website.",
            icon: (
                <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Use SCORES for Complaints",
            description: "If you have a grievance against a listed company or SEBI-registered intermediary, file a complaint through the SEBI Complaints Redress System (SCORES).",
            icon: (
                <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        },
        {
            title: "Spot Guaranteed Return Myths",
            description: "SEBI warns that no registered entity can guarantee fixed returns in the stock market. High-return promises with low risk are the biggest red flags of a scam.",
            icon: (
                <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-6">
                            Regulated by SEBI Guidelines
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Investment Safety & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">SEBI Guidelines</span>
                        </h2>
                        <p className="text-brand-secondary text-lg mb-10 leading-relaxed">
                            Securities and Exchange Board of India (SEBI) is the watchdog of the Indian stock market. Understanding their guidelines is your first line of defense against investment fraud.
                        </p>

                        <div className="space-y-8">
                            {safetySteps.map((step, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand-section border border-brand-border flex items-center justify-center group-hover:border-brand-blue/50 group-hover:bg-brand-blue/5 transition-all">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{step.title}</h3>
                                        <p className="text-brand-secondary text-base leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <a 
                                href="https://scores.sebi.gov.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2"
                            >
                                Visit SEBI SCORES
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <a 
                                href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=10" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-brand-section border border-brand-border hover:border-brand-blue/50 text-brand-primary font-bold rounded-xl transition-all"
                            >
                                Verify Intermediaries
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Visual Shield/Seal */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Animated Background Rings */}
                            <div className="absolute inset-0 border border-brand-blue/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-8 border border-dashed border-brand-blue/10 rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
                            
                            {/* Main Achievement/Trust Card */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[85%] aspect-square bg-gradient-to-br from-brand-card to-brand-section rounded-3xl border border-brand-border shadow-2xl flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity underline-offset-4"></div>
                                    
                                    <div className="w-24 h-24 mb-6 rounded-full bg-white flex items-center justify-center p-2 shadow-inner">
                                        <img 
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/SEBI_logo.svg/1200px-SEBI_logo.svg.png" 
                                            alt="SEBI Logo" 
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    
                                    <h4 className="text-2xl font-bold mb-2">Investor Protection</h4>
                                    <p className="text-brand-secondary text-sm mb-6 uppercase tracking-[0.2em] font-semibold">Our Priority Since 1992</p>
                                    
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mb-6"></div>
                                    
                                    <div className="grid grid-cols-2 gap-4 w-full text-left">
                                        <div className="p-3 rounded-lg bg-brand-bg/50 border border-brand-border">
                                            <p className="text-[10px] text-brand-secondary uppercase font-bold mb-1">Grievance Ratio</p>
                                            <p className="text-xl font-bold text-brand-green">98.2%</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-brand-bg/50 border border-brand-border">
                                            <p className="text-[10px] text-brand-secondary uppercase font-bold mb-1">Response Time</p>
                                            <p className="text-xl font-bold text-brand-blue">15 Days</p>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-0 right-0">
                                        <div className="inline-flex items-center gap-1.5 text-[10px] text-brand-secondary font-bold px-3 py-1 rounded-full bg-brand-section/80 border border-brand-border">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
                                            Official SEBI Data Tracking
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Labels */}
                            <div className="absolute -top-4 -right-4 p-4 bg-brand-card border border-brand-border rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="text-brand-blue font-bold text-lg leading-none">NO!</div>
                                <div className="text-xs text-brand-secondary">To Tips</div>
                            </div>
                            
                            <div className="absolute bottom-10 -left-8 p-4 bg-brand-card border border-brand-border rounded-2xl shadow-xl animate-pulse">
                                <div className="text-brand-green font-bold text-lg leading-none">YES!</div>
                                <div className="text-xs text-brand-secondary">To Verification</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SebiSafety;
