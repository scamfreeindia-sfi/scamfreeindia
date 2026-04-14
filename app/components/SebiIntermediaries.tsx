"use client"
import Link from 'next/link';
import React from 'react';

const SebiIntermediaries = () => {
    const intermediaries = [
        {
            title: "Broker",
            tagline: "Misuse of trust, unauthorized trades, and commission-driven advice.",
            features: [
                "Trading without client consent",
                "Excessive trading for brokerage",
                "Misleading or risky recommendations",
                "Hidden fees and charges"
            ],
            href: "/blog/how-a-broker-can-scam-investors-in-india"
        },
        {
            title: "Research Analyst",
            tagline: "Most investors don’t lose money in the market, they lose money trusting the wrong advisor",
            features: [
                "Uses SEBI registration as credibility",
                "Shows fake or selective past performance",
                "Charges high research or subscription fees",
                "Gives risky tips or stops responding after payment"
            ],
            href: "/blog/sebi-register-research-analyst-ra-scam-in-india"
        },
        {
            title: "Investment Adviser",
            tagline: "Before trusting an adviser, remember — it is your money, not theirs",
            features: [
                "Uses SEBI registration to gain trust",
                "Promises safe or high returns",
                "Charges advisory or portfolio fees",
                "Gives unsuitable or risky investment advice"
            ],
            href: "/blog/sebi-registered-investment-advisor-scam-in-india"
        },
    ];

    return (
        <section className="py-20 md:py-32 px-6 bg-[#0B0B0D] relative overflow-hidden">

            <div className="text-center mb-10 md:mb-16 px-6 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
                    SEBI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Registered Intermediaries</span>
                </h2>
                <p className="text-brand-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                    Fraudsters are constantly evolving their tactics. Stay informed about the most prevalent online scams affecting people today.
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative group/carousel">
                {/* Optional: Subtle gradient fade on edges for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0B0B0D] to-transparent z-30 pointer-events-none lg:hidden" />
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0B0B0D] to-transparent z-30 pointer-events-none lg:hidden" />

                <div className="flex lg:grid lg:grid-cols-3 gap-8 lg:gap-12 items-stretch overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory scroll-pl-6 pb-8 lg:pb-0 px-6 lg:px-0">

                    {intermediaries.map((item, index) => (
                        <Link key={index} href={item.href} className="block group shrink-0 w-[88%] sm:w-[80%] lg:w-full snap-center">
                            <div
                                className="
                                relative flex flex-col h-full
                                bg-[#111217] border border-[#1F2937]
                                rounded-[2rem] md:rounded-[2.5rem]
                                shadow-[0_4px_24px_rgba(0,0,0,0.3)]

                                hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                                hover:-translate-y-2 hover:scale-[1.01]
                                hover:border-red-500/40

                                transition-all duration-500 ease-out
                                p-6 pt-24 md:p-10 md:pt-32 text-center

                                before:absolute before:inset-0
                                before:rounded-[2rem] md:before:rounded-[2.5rem]
                                before:bg-gradient-to-r before:from-red-500/0 before:via-red-500/10 before:to-orange-400/0
                                before:opacity-0 group-hover:before:opacity-100
                                before:transition-all before:duration-500
                            "
                            >

                                {/* Top Badge */}
                                <div className="absolute -top-[1.2px] left-1/2 -translate-x-1/2 w-[82%] z-20">
                                    <div className="relative">

                                        <div className="absolute -top-0 -left-[18px] w-[22px] h-[14px] rounded-tr-[16px]" />
                                        <div className="absolute -top-0 -right-[18px] w-[22px] h-[14px] rounded-tl-[16px]" />
                                        <div className="absolute top-0 left-0 right-0 h-[6px]" />

                                        <div className="relative rounded-b-[2rem] md:rounded-b-[2.8rem] bg-[#181A20] pt-5 pb-4 md:pt-7 md:pb-6 px-4 shadow-lg group-hover:bg-[#1F222A] transition-all duration-500">
                                            <h3 className="
                                                text-[20px] md:text-[26px] font-extrabold tracking-tighter leading-none mb-1
                                                text-white
                                                group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-400
                                                group-hover:bg-clip-text group-hover:text-transparent
                                                transition-all duration-500
                                            ">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Tagline */}
                                <div className="mb-8 md:mb-10 min-h-[70px] md:min-h-[80px] flex items-center justify-center">
                                    <p className="text-[#9CA3AF] group-hover:text-[#E5E7EB] font-medium leading-[1.6] md:leading-[1.65] text-base md:text-[18px] max-w-[240px] mx-auto tracking-tight transition-colors duration-300">
                                        {item.tagline}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 md:mb-10" />

                                {/* Features */}
                                <ul className="space-y-[1rem] md:space-y-[1.4rem] text-left px-2">
                                    {item.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3 md:gap-3.5 group/item">
                                            <div className="flex-shrink-0 mt-[0.5rem] md:mt-[0.55rem]">
                                                <div className="
                                                    w-[5.5px] h-[5.5px] md:w-[6.5px] md:h-[6.5px] rounded-full 
                                                    bg-red-500 
                                                    shadow-[0_0_12px_rgba(239,68,68,0.6)]
                                                    group-hover/item:scale-125
                                                    transition-all duration-300
                                                " />
                                            </div>

                                            <span className="
                                                text-[14px] md:text-[15.5px] text-[#9CA3AF] font-medium leading-[1.5]
                                                transition-colors duration-300
                                                group-hover/item:text-white
                                            ">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default SebiIntermediaries;