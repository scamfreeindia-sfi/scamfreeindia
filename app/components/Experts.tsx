"use client"
import Image from "next/image"

const experts = [
    {
        name: "Adv. Gaurav Charaya",
        role: "Advocate at High Court | Punjab & Haryana",
        location: "Chandigarh, India",
        image: "/gaurav.jpeg",       
    },
    {
        name: "Adv. Gunjan Sachdeva",
        role: "Advocate at High Court | Punjab & Haryana",
        location: "Chandigarh, India",
        image: "/gunjan.jpeg",
    },
    {
        name: "Adv. Neha Bairagee",
        role: "Advocate at High Court | Delhi",
        location: "Chandigarh, India",
        image: "",
    },
    {
        name: "Rahul Kaushal",
        role: "Meet Our SEBI Case Specialist",
        location: "Chandigarh, India",
        image: null,        
    }
];

export default function Experts() {
    return (
        <section id="experts" className="expert-section relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="text-center mb-16 md:mb-24 relative z-10 animate-fade-in">
                <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                    Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Experts</span>
                </h2>
                <p className="text-brand-secondary text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                    Experienced professionals dedicated to protecting you from financial fraud, cybercrime, and digital exploitation.
                </p>
            </div>

            <div className="expert-grid">
                {experts.map((expert, index) => (
                    <div key={index} className="expert-card group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="expert-image-container relative">
                            <div className="expert-image-inner relative flex items-center justify-center bg-[#1A1A1F] overflow-hidden group-hover:scale-105 transition-transform duration-500 ring-4 ring-white/5 group-hover:ring-brand-blue/20">
                                {expert.image ? (
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-green/20 text-4xl font-black text-brand-blue">
                                        {expert.name.charAt(0)}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 -z-10"></div>
                        </div>

                        <h3 className="expert-name group-hover:text-brand-blue transition-colors duration-300 mt-2 leading-tight min-h-[3rem] flex items-center justify-center text-center">
                            {expert.name}
                        </h3>  

                        <div className="expert-info w-full space-y-1 mt-2">
                            <div className="expert-info-item flex-col text-center gap-1">
                                <div className="w-9 h-9 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-brand-secondary group-hover:text-brand-primary font-medium transition-colors duration-300 text-[13px] leading-tight">{expert.role}</span>
                            </div>
                            <div className="expert-info-item flex-col text-center gap-1">
                                <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-bg transition-all duration-300 shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-brand-secondary group-hover:text-brand-primary font-medium transition-colors duration-300 text-[13px] leading-tight">{expert.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-0 -translate-x-1/2 -rotate-90 text-[10rem] font-black text-white/[0.02] uppercase pointer-events-none select-none hidden lg:block">
                Experts
            </div>
        </section>
    )
}
