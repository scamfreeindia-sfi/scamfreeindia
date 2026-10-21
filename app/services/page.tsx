import type { Metadata } from "next"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AdvisoryAction from "../components/AdvisoryAction"

export const metadata: Metadata = {
    title: "Our Services | ScamFree India",
    description: "ScamFreeIndia provides scam awareness, complaint preparation, procedural guidance, and administrative assistance for fraud victims in India.",
}

const services = [
    {
        number: "01",
        title: "Scam Awareness and Procedural Guidance",
        badge: "Awareness & Prevention",
        description:
            "We provide general information about common scams, fraud prevention, and the procedures for reporting suspected fraud through relevant official channels.",
        features: [
            "Analysis of common scam tactics & digital fraud patterns",
            "Preventative safety measures for UPI, net banking, and investments",
            "Clear overview of official reporting procedures and citizen rights",
        ],
        href: "/blog",
        linkText: "Explore Awareness Library",
        isExternal: false,
        accentColor: "text-brand-blue",
        badgeBorder: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
        icon: (
            <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Complaint Preparation and Document Organisation",
        badge: "Dossier & Evidence",
        description:
            "We assist clients in organising relevant facts, transaction records, screenshots, communication records, and supporting documents to help prepare a clear and well-organised complaint.",
        features: [
            "Chronological timeline creation of fraudulent interactions",
            "Bank reference IDs, UTR numbers, and payment trail cataloging",
            "Systematic compilation of screenshots, audio logs, and chat records",
        ],
        href: "/contact",
        linkText: "Prepare Your Complaint Dossier",
        isExternal: false,
        accentColor: "text-brand-green",
        badgeBorder: "border-brand-green/30 bg-brand-green/10 text-brand-green",
        icon: (
            <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Administrative Assistance with Complaint Filing",
        badge: "Filing Support",
        description:
            "Where permitted by the relevant portal rules, we assist clients with entering client-approved complaint information and navigating the complaint submission process. Any submission is subject to the client's approval and the requirements of the relevant authority or portal.",
        features: [
            "Guidance through official digital forms and verification steps",
            "Entering client-approved information without altering facts",
            "Assistance with document attachment format and upload requirements",
        ],
        href: "/contact",
        linkText: "Request Administrative Assistance",
        isExternal: false,
        accentColor: "text-emerald-400",
        badgeBorder: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        icon: (
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Information on Official Reporting Channels",
        badge: "Channel Directory",
        description:
            "We provide information about relevant official reporting channels and authorities so clients can identify the appropriate route for reporting suspected cyber fraud, banking disputes, or other financial concerns.",
        features: [
            "National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in)",
            "SEBI SCORES 2.0 for securities, trading apps & investment schemes",
            "RBI Banking Ombudsman & CMS for unauthorized banking transfers",
        ],
        href: "#official-channels",
        linkText: "View Official Reporting Channels",
        isExternal: false,
        accentColor: "text-amber-400",
        badgeBorder: "border-amber-400/30 bg-amber-400/10 text-amber-400",
        icon: (
            <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Independent Advocate Consultation",
        badge: "Legal Consultation",
        description:
            "Where separately available and appropriately arranged, clients may obtain consultation from an independent advocate for legal advice or representation. Such legal services are distinct from ScamFreeIndia's general awareness and administrative assistance services.",
        features: [
            "Independent assessment of legal standing & available statutory remedies",
            "Formal legal notices, police complaint drafting, or court filings",
            "Professional legal advice distinct from administrative services",
        ],
        href: "/lawyer",
        linkText: "Book an Advocate Consultation",
        isExternal: false,
        accentColor: "text-brand-blue",
        badgeBorder: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
        icon: (
            <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
]

const officialChannels = [
    {
        name: "National Cyber Crime Reporting Portal",
        channel: "1930 / cybercrime.gov.in",
        authority: "Ministry of Home Affairs (MHA), Govt. of India",
        description: "Official channel for cyber financial frauds, UPI scams, identity theft, and unauthorized digital transactions. Free of charge.",
        url: "https://cybercrime.gov.in",
        tag: "Cyber Fraud & UPI",
    },
    {
        name: "SEBI SCORES 2.0",
        channel: "scores.sebi.gov.in",
        authority: "Securities and Exchange Board of India",
        description: "Official grievance redressal portal for securities markets, mutual funds, listed firms, and SEBI-registered intermediaries. Free of charge.",
        url: "https://scores.sebi.gov.in",
        tag: "Securities & Stock Frauds",
    },
    {
        name: "RBI Complaint Management System (CMS)",
        channel: "cms.rbi.org.in",
        authority: "Reserve Bank of India (Banking Ombudsman)",
        description: "Official portal for unresolved disputes against commercial banks, NBFCs, and payment system operators. Free of charge.",
        url: "https://cms.rbi.org.in",
        tag: "Banking & Payment Services",
    },
    {
        name: "National Consumer Helpline (NCH)",
        channel: "consumerhelpline.gov.in / 1915",
        authority: "Department of Consumer Affairs, Govt. of India",
        description: "Grievance platform for unfair trade practices, e-commerce frauds, fake services, and misleading advertisements. Free of charge.",
        url: "https://consumerhelpline.gov.in",
        tag: "Consumer Disputes",
    },
]

const processSteps = [
    {
        step: "01",
        title: "Share Incident Facts",
        desc: "Provide details of the suspected fraud, including communication dates, contact handles, transaction receipts, and payment channels used.",
    },
    {
        step: "02",
        title: "Organise Supporting Records",
        desc: "We assist in assembling an orderly timeline, indexing bank transaction IDs, statements, and screenshots into a clean evidence dossier.",
    },
    {
        step: "03",
        title: "Navigate Official Reporting",
        desc: "Understand which official government portal or authority applies, and receive procedural guidance or client-approved filing support.",
    },
    {
        step: "04",
        title: "Optional Advocate Consultation",
        desc: "Where legal counsel or representation is required, consult an independent advocate arranged separately for professional advice.",
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary selection:bg-brand-blue/30">
            <Header />

            {/* Hero Section */}
            <section className="relative isolate overflow-hidden border-b border-brand-border pt-32 pb-20 md:pt-40 md:pb-28">
                {/* Ambient glow backgrounds */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-blue/10 blur-[130px] -z-10 pointer-events-none" />
                <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-green/10 blur-[120px] -z-10 pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="max-w-4xl animate-slide-up">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                            Our Services
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
                            Practical Guidance &amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-teal-400 to-emerald-400">
                                Procedural Support
                            </span>{" "}
                            for Fraud Victims
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-brand-secondary max-w-3xl">
                            ScamFreeIndia provides scam awareness, complaint preparation, procedural guidance, and administrative assistance to help individuals understand the available options when dealing with suspected fraud or financial scams.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-green px-7 py-3.5 font-bold text-brand-bg transition-all hover:brightness-110 shadow-lg shadow-brand-green/20"
                            >
                                Request Assistance
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <Link
                                href="/lawyer"
                                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
                            >
                                Consult an Independent Advocate
                            </Link>
                        </div>

                        {/* Quick Trust Highlights */}
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-border/80 pt-6 text-xs sm:text-sm text-brand-secondary">
                            <div className="flex items-center gap-2 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                Scam Awareness
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                                Document Organisation
                            </div>
                            <div className="flex items-center gap-2 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Filing Assistance
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Alert Callout */}
            <section className="bg-gradient-to-r from-brand-red/15 via-brand-section to-brand-section border-b border-brand-border">
                <div className="mx-auto max-w-7xl px-6 py-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                            <span className="text-brand-red font-black text-sm">1930</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm sm:text-base">
                                Experienced a cyber or banking scam within the last 2 hours?
                            </p>
                            <p className="text-brand-secondary text-xs sm:text-sm">
                                Call the National Cyber Crime Helpline at <span className="text-brand-red font-bold">1930</span> immediately or report at{" "}
                                <a
                                    href="https://cybercrime.gov.in"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white underline hover:text-brand-red"
                                >
                                    cybercrime.gov.in
                                </a>{" "}
                                to trigger immediate bank lien requests. Official portal filing is free of charge.
                            </p>
                        </div>
                    </div>
                    <a
                        href="tel:1930"
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-brand-red/20 border border-brand-red/40 px-4 py-2 text-xs font-bold text-white hover:bg-brand-red/30 transition-colors"
                    >
                        Call 1930 Now
                    </a>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28" aria-labelledby="services-list-heading">
                <div className="mb-14 max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                        <span className="h-px w-6 bg-brand-blue" />
                        Comprehensive Solutions
                    </div>
                    <h2 id="services-list-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                        Our Services
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-secondary">
                        We assist individuals at each step of understanding and addressing suspected fraudulent activity, providing clear administrative assistance and procedural direction while respecting statutory boundaries.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative flex flex-col justify-between rounded-3xl border border-brand-border bg-brand-card/70 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-brand-blue/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-black tracking-tighter text-white/30 group-hover:text-white/60 transition-colors">
                                        {service.number}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${service.badgeBorder}`}>
                                            {service.badge}
                                        </span>
                                        <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-relaxed text-brand-secondary">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="space-y-2.5 border-t border-brand-border/80 pt-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-white/70">What this includes:</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-secondary">
                                                <svg
                                                    className="w-4 h-4 text-brand-blue shrink-0 mt-0.5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-brand-border/80 pt-6">
                                <Link
                                    href={service.href}
                                    {...(service.isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                                    className={`inline-flex items-center gap-2 text-sm font-bold ${service.accentColor} transition-transform group-hover:translate-x-1 hover:brightness-125`}
                                >
                                    <span>{service.linkText}</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Official Reporting Channels Directory */}
            <section id="official-channels" className="border-t border-brand-border bg-brand-section py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="mb-14 max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                            <span className="h-px w-6 bg-amber-400" />
                            Official Portals
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            Information on Official Reporting Channels
                        </h2>
                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-secondary">
                            Citizens can directly access official Government of India and statutory regulator portals free of charge. We provide procedural guidance to help you navigate and identify the right channel.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {officialChannels.map((portal, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between rounded-2xl border border-brand-border bg-brand-card p-7 transition-all duration-300 hover:border-brand-border/80 hover:bg-brand-card/90"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-secondary">
                                            {portal.tag}
                                        </span>
                                        <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                                            Free Government Portal
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{portal.name}</h3>
                                    <p className="text-xs font-semibold text-brand-blue mt-1">{portal.channel} &bull; {portal.authority}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{portal.description}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-brand-border/60">
                                    <a
                                        href={portal.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-brand-blue transition-colors"
                                    >
                                        Visit Official Portal ({portal.url.replace("https://", "")})
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work - 4-Step Process */}
            <section className="border-t border-brand-border py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="mb-14 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
                            <span className="h-px w-6 bg-brand-green" />
                            A Structured Process
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            How We Assist You
                        </h2>
                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-secondary">
                            A clear, compliant, and transparent workflow designed to help you organize facts and take the right official steps.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step) => (
                            <div
                                key={step.step}
                                className="relative rounded-2xl border border-brand-border bg-brand-card/50 p-6 sm:p-7 backdrop-blur-sm"
                            >
                                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                                    Step {step.step}
                                </span>
                                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-brand-secondary">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do vs. What Authorities Do Matrix */}
            <section className="border-t border-brand-border bg-brand-section/60 py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="mb-12 max-w-3xl text-center mx-auto">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                            <span className="h-px w-6 bg-brand-blue" />
                            Role Clarity &amp; Transparency
                            <span className="h-px w-6 bg-brand-blue" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Our Role vs. Authority Functions
                        </h2>
                        <p className="mt-3 text-base text-brand-secondary">
                            We believe in complete transparency about what we do as an administrative and awareness platform versus the exclusive powers of law enforcement and regulatory bodies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* What ScamFreeIndia Provides */}
                        <div className="rounded-3xl border border-emerald-500/30 bg-brand-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">What ScamFreeIndia Provides</h3>
                                    <p className="text-xs text-brand-secondary">Consultancy, document organisation &amp; administrative assistance</p>
                                </div>
                            </div>

                            <ul className="space-y-3.5 text-sm text-brand-secondary">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 font-bold">&check;</span>
                                    <span>Scam awareness education and procedural explanation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 font-bold">&check;</span>
                                    <span>Organising transaction receipts, chat transcripts, and timeline evidence.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 font-bold">&check;</span>
                                    <span>Administrative entry of client-approved complaint data where rules allow.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 font-bold">&check;</span>
                                    <span>Identification of correct official portals (Cyber Crime, SEBI, RBI).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 font-bold">&check;</span>
                                    <span>Arranging consultations with independent advocates for legal advice.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Authority Powers & What We Do Not Do */}
                        <div className="rounded-3xl border border-brand-red/30 bg-brand-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Authority Powers &amp; Limitations</h3>
                                    <p className="text-xs text-brand-secondary">Functions reserved exclusively for legal &amp; state bodies</p>
                                </div>
                            </div>

                            <ul className="space-y-3.5 text-sm text-brand-secondary">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red font-bold">&times;</span>
                                    <span>We cannot freeze bank accounts; freezing is performed solely by banks or law enforcement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red font-bold">&times;</span>
                                    <span>We do not guarantee recovery of lost funds or claim any guaranteed recovery timelines.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red font-bold">&times;</span>
                                    <span>We cannot register an FIR; registering an FIR is the prerogative of the police.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red font-bold">&times;</span>
                                    <span>We do not charge government fees; official government portals are free of charge.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red font-bold">&times;</span>
                                    <span>Our general staff does not provide legal advice; legal counsel is given solely by licensed advocates.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPORTANT INFORMATION SECTION */}
            <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28" aria-labelledby="important-info-heading">
                <div className="rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-b from-brand-card via-brand-card to-brand-section p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 blur-[120px] pointer-events-none -mr-40 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[120px] pointer-events-none -ml-40 -mb-20" />

                    <div className="relative z-10 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Regulatory Disclaimers &amp; Transparency
                        </div>

                        <h2 id="important-info-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                            Important Information
                        </h2>

                        <div className="mt-8 space-y-8 text-brand-secondary text-base sm:text-lg leading-relaxed">
                            {/* General Outcome Disclaimer */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    No Outcome Guarantee
                                </h3>
                                <p className="mt-3 text-brand-secondary">
                                    ScamFreeIndia does not guarantee recovery of lost funds, freezing of bank accounts, registration of an FIR, or any particular action or outcome by SEBI, banks, law enforcement agencies, or other authorities. Decisions regarding complaints and investigations rest with the relevant authorities.
                                </p>
                            </div>

                            {/* Government Fees and Service Charges */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                                    Government Fees and Service Charges
                                </h3>
                                <p className="mt-3 text-brand-secondary">
                                    Filing a complaint through an official government portal may be free of charge. Any fee charged by ScamFreeIndia is for the optional consultancy, document organisation, procedural guidance, or administrative assistance agreed upon with the client. Such charges are not government fees and do not guarantee any particular outcome.
                                </p>
                            </div>

                            {/* Nature of Services */}
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                                    Nature of Services
                                </h3>
                                <p className="mt-3 text-brand-secondary">
                                    ScamFreeIndia is an initiative/brand of Inventour Legal LLP. The services offered include scam awareness, general procedural guidance, complaint preparation, document organisation, and administrative assistance, as described on our website. Legal advice and representation, where required, are provided only through an appropriately qualified advocate under a separate engagement, where applicable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="border-t border-brand-border bg-brand-section py-20">
                <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                        Need Guidance on Your Situation?
                    </h2>
                    <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
                        Speak with our team to understand what evidence you need, how to organize your records, and which official channels or independent legal options are available.
                    </p>

                    <div className="pt-4 max-w-xs mx-auto">
                        <AdvisoryAction />
                    </div>

                    <div className="pt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-brand-secondary/60">
                        <span>Transparent Assistance</span>
                        <span>&bull;</span>
                        <span>Client-Approved Filing</span>
                        <span>&bull;</span>
                        <span>Independent Advocate Access</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}