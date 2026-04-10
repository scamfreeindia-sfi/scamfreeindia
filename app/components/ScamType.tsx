export default function FraudSection() {
    const scamsList = [
        { title: "Digital Arrest Fraud", icon: "shield", description: "Fake 'police' or officers claiming you are 'digitally arrested' and must pay fines immediately." },
        { title: "Investment & Crypto", icon: "trending-up", description: "Promises of impossibly high returns on fake trading platforms or bogus crypto investments." },
        { title: "Job / Employment", icon: "briefcase", description: "Fraudsters offer fake high-paying opportunities, demanding upfront 'training' fees." },
        { title: "Task / Like & Earn", icon: "thumbs-up", description: "Victims are paid initially for liking videos, then asked to 'invest' for premium assignments." },
        { title: "Courier / Customs", icon: "package", description: "Fake calls from 'FedEx' or 'Customs' claiming illegal parcels are intercepted in your name." },
        { title: "Loan App Harassment", icon: "credit-card", description: "Unregistered apps provide small loans, then access contacts to morph photos and extort money." },
        { title: "Fake IPO Scam", icon: "trending-up", description: "Fake IPO websites or send fraudulent documents to lure investors with the promise of high returns." },
        { title: "Ponzi Scam", icon: "shield", description: "Scammers promise high returns, use new investors’ money to pay earlier ones, and keep the rest." }
    ];

    const getIcon = (name: string) => {
        switch (name) {
            case 'briefcase': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
            case 'trending-up': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
            case 'thumbs-up': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514a1 1 0 01.485.126l4.475 2.237a1 1 0 00.894 0z" /></svg>;
            case 'package': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
            case 'credit-card': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
            case 'shield': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
            default: return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
        }
    };

    const ScamCard = ({ scam }: { scam: any }) => {
        if (!scam) return null;
        return (
            <div className="w-[300px] sm:w-[350px] shrink-0 bg-brand-card rounded-2xl border border-brand-border p-5 flex items-start gap-4 hover:border-brand-blue/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10 bg-opacity-95 backdrop-blur-sm group relative z-10 mx-4 lg:mx-0">
                <div className="w-12 h-12 rounded-xl bg-brand-section flex items-center justify-center text-brand-red border border-brand-border group-hover:bg-brand-blue/10 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors shrink-0">
                    {getIcon(scam.icon)}
                </div>
                <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="font-bold text-[17px] text-white leading-tight">{scam.title}</h3>
                    <p className="text-brand-secondary text-[13px] leading-relaxed">{scam.description}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="bg-brand-section py-20 overflow-hidden border-y border-brand-border relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_100%)] pointer-events-none"></div>

            <div className="text-center mb-4 md:mb-12 px-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-4 shadow-sm shadow-brand-blue/10">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Be Aware
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                    Type of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Scams</span> or Frauds
                </h2>
                <p className="text-brand-secondary text-lg md:text-xl max-w-2xl mx-auto">
                    Fraudsters are constantly evolving their tactics. Stay informed about the most prevalent online scams affecting people today.
                </p>
            </div>

            {/* SEO & Screen Reader Friendly List (Indexed only once) */}
            <ul className="sr-only">
                {scamsList.map((scam, i) => (
                    <li key={i}>
                        <h3>{scam.title}</h3>
                        <p>{scam.description}</p>
                    </li>
                ))}
            </ul>

            {/* DESKTOP VISUAL VIEW */}
            <div aria-hidden="true" className="hidden lg:block relative w-full max-w-[1200px] h-[1000px] mx-auto mt-16 mb-8">
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 1000" fill="none">
                    <g stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 12" strokeOpacity="0.3" strokeLinecap="round">
                        <path d="M 600 500 L 600 150" />
                        <circle cx="600" cy="150" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="600" cy="150" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        <path d="M 600 500 Q 800 450 1000 280" />
                        <circle cx="1000" cy="280" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="1000" cy="280" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Right Line - Curved */}
                        <path d="M 600 500 Q 850 500 1050 500" />
                        <circle cx="1050" cy="500" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="1050" cy="500" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Bottom Right Line - Curved */}
                        <path d="M 600 500 Q 800 550 1000 720" />
                        <circle cx="1000" cy="720" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="1000" cy="720" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Bottom Center Line */}
                        <path d="M 600 500 L 600 865" />
                        <circle cx="600" cy="500" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="600" cy="500" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Bottom Left Line - Curved */}
                        <path d="M 600 500 Q 400 550 200 720" />
                        <circle cx="200" cy="720" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="200" cy="720" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Left Line - Curved */}
                        <path d="M 600 500 Q 350 500 150 500" />
                        <circle cx="150" cy="500" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="150" cy="500" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />

                        {/* Top Left Line - Curved */}
                        <path d="M 600 500 Q 400 450 200 280" />
                        <circle cx="200" cy="280" r="4" fill="#3B82F6" fillOpacity="0.6" stroke="none" />
                        <circle cx="200" cy="280" r="8" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="1" fill="none" />
                    </g>

                    {/* Center Glow */}
                    <circle cx="600" cy="500" r="150" fill="url(#centerGlow)" />
                    <defs>
                        <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* CENTER CIRCLE - PREMIUM STYLED */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] z-20 flex items-center justify-center">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 rounded-full border border-brand-red/10 animate-ping opacity-20" style={{ animationDuration: '4s' }} />
                    <div className="absolute inset-[10%] rounded-full border border-brand-red/10 animate-pulse" />
                    <div className="absolute inset-[20%] rounded-full border border-brand-red/20" />
                    <div className="absolute inset-[25%] rounded-full border border-dashed border-brand-blue/30 animate-[spin_20s_linear_infinite]" />

                    {/* Inner Main Circle */}
                    <div className="relative w-40 h-40 rounded-full bg-brand-bg border-4 border-brand-blue/20 shadow-[0_0_60px_rgba(59,130,246,0.2)] flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-blue/20 to-brand-red/10" />

                        <div className="relative z-10 w-24 h-24 bg-brand-section rounded-full flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green text-2xl">
                            {/* Person Icon representing Investigator */}
                            <div className="text-2xl font-bold">Cyber</div>
                            <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Scam Cards - Positioned to match SVG lines */}
                {/* Top (0) */}
                <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[350px] z-10">
                    <ScamCard scam={scamsList[0]} />
                </div>
                {/* Top Right (1) */}
                <div className="absolute top-[22%] right-[5%] xl:right-[10%] w-[350px] z-10">
                    <ScamCard scam={scamsList[1]} />
                </div>
                {/* Right (2) */}
                <div className="absolute top-[45%] right-[0.5%] xl:right-[0.5%] w-[350px] z-10">
                    <ScamCard scam={scamsList[2]} />
                </div>
                {/* Bottom Right (3) */}
                <div className="absolute top-[68%] right-[5%] xl:right-[10%] w-[350px] z-10">
                    <ScamCard scam={scamsList[3]} />
                </div>
                {/* Bottom (4) */}
                <div className="absolute top-[87%] left-1/2 -translate-x-1/2 w-[350px] z-10">
                    <ScamCard scam={scamsList[4]} />
                </div>
                {/* Bottom Left (5) */}
                <div className="absolute top-[68%] left-[5%] xl:left-[10%] w-[350px] z-10">
                    <ScamCard scam={scamsList[5]} />
                </div>
                {/* Left (6) */}
                <div className="absolute top-[45%] left-[0.5%] xl:left-[0.5%] w-[350px] z-10">
                    <ScamCard scam={scamsList[6]} />
                </div>
                {/* Top Left (7) */}
                <div className="absolute top-[22%] left-[5%] xl:left-[10%] w-[350px] z-10">
                    <ScamCard scam={scamsList[7]} />
                </div>
            </div>

            {/* MOBILE MARQUEE VIEW (HIDDEN ON DESKTOP) */}
            <div aria-hidden="true" className="block lg:hidden w-full relative flex flex-col gap-6 select-none bg-brand-bg/50 py-10 border-y border-white/5 shadow-inner mt-8">
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-brand-section to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-brand-section to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-marquee gap-6">
                    {[...scamsList.slice(0, 4), ...scamsList.slice(0, 4)].map((scam, scamIndex) => (
                        <ScamCard key={`row1-${scamIndex}`} scam={scam} />
                    ))}
                </div>

                <div className="flex w-max animate-marquee-reverse gap-6">
                    {[...scamsList.slice(4, 8), ...scamsList.slice(4, 8)].map((scam, scamIndex) => (
                        <ScamCard key={`row2-${scamIndex}`} scam={scam} />
                    ))}
                </div>
            </div>
        </section>
    );
}