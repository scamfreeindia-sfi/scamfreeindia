import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Our Services | ScamFree India",
    description: "Explore ScamFree India's scam-response guidance, complaint preparation support, lawyer consultations, and fraud-awareness resources.",
}

const services = [
    {
        number: "01",
        title: "Scam response guidance",
        description: "If money has been transferred, contact your bank or payment provider promptly. We can help you organize what happened and understand the available reporting routes.",
        href: "/contact",
        link: "Talk to our team",
        accent: "text-brand-blue",
    },
    {
        number: "02",
        title: "Complaint preparation",
        description: "Bring together a clear timeline, transaction references, screenshots, and relevant messages before you submit a complaint through the appropriate official channel.",
        href: "https://www.cybercrime.gov.in/",
        link: "Visit the cybercrime portal",
        accent: "text-brand-green",
    },
    {
        number: "03",
        title: "Lawyer consultation",
        description: "Book a consultation to discuss your legal concern and possible next steps with a legal professional. Any representation or additional services should be agreed separately.",
        href: "/lawyer",
        link: "Book a consultation",
        accent: "text-brand-blue",
    },
    {
        number: "04",
        title: "Scam awareness",
        description: "Learn how common online and financial scams work, what warning signs to look for, and how to make safer decisions before sharing money or personal information.",
        href: "/blog",
        link: "Explore the awareness library",
        accent: "text-brand-green",
    },
]

const steps = [
    { number: "1", title: "Tell us what happened", description: "Share the type of issue and the key details you have." },
    { number: "2", title: "Get a clear direction", description: "Understand what information to gather and which next steps may apply." },
    { number: "3", title: "Choose your next step", description: "Use the relevant official channel or book a legal consultation." },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary">
            <Header />

            <section className="relative isolate min-h-[620px] overflow-hidden border-b border-brand-border md:min-h-[680px]">               
                <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden="true" />

                <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pb-16 pt-32 md:min-h-[680px] md:px-12 md:pt-36">
                    <div className="max-w-3xl animate-slide-up">
                        <p className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase text-brand-green">
                            <span className="h-px w-8 bg-brand-green" aria-hidden="true" />
                            Services
                        </p>
                        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                            Practical support for your next step
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                            From understanding a scam to preparing for a consultation, find clear guidance for the situation in front of you.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-brand-green px-6 py-3 font-bold text-brand-bg transition hover:brightness-110">
                                Get guidance <span aria-hidden="true">-&gt;</span>
                            </Link>
                            <Link href="/lawyer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10">
                                Talk to a lawyer
                            </Link>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-sm font-medium text-white/70">
                            <span>Clear next steps</span>
                            <span>Practical preparation</span>
                            <span>Awareness resources</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24" aria-labelledby="services-heading">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-bold uppercase text-brand-blue">How we can help</p>
                    <h2 id="services-heading" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Support shaped around your situation</h2>
                    <p className="mt-4 leading-relaxed text-brand-secondary">Choose the kind of support that matches what you need right now. Official reporting and investigation are handled by the relevant authorities.</p>
                </div>

                <div className="grid border-t border-brand-border sm:grid-cols-2">
                    {services.map((service) => (
                        <article key={service.number} className="border-b border-brand-border py-8 sm:px-8 sm:py-10 [&:nth-child(odd)]:sm:border-r [&:nth-child(even)]:sm:pl-10">
                            <p className={`text-sm font-bold ${service.accent}`}>{service.number}</p>
                            <h3 className="mt-3 text-xl font-bold text-white">{service.title}</h3>
                            <p className="mt-3 max-w-xl leading-relaxed text-brand-secondary">{service.description}</p>
                            <Link
                                href={service.href}
                                {...(service.href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}
                                className={`mt-5 inline-flex items-center gap-2 text-sm font-bold ${service.accent} transition hover:brightness-125`}
                            >
                                {service.link} <span aria-hidden="true">-&gt;</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-brand-border bg-brand-section" aria-labelledby="process-heading">
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
                    <div className="mb-10 max-w-2xl">
                        <p className="text-sm font-bold uppercase text-brand-green">A straightforward process</p>
                        <h2 id="process-heading" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Start with what you know</h2>
                    </div>
                    <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
                        {steps.map((step) => (
                            <li key={step.number} className="border-t border-brand-border pt-5">
                                <span className="text-sm font-bold text-brand-green">STEP {step.number}</span>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-2 leading-relaxed text-brand-secondary">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20" aria-labelledby="urgent-heading">
                <div className="flex flex-col gap-6 border-l-4 border-brand-red bg-brand-section p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase text-brand-red">For an active financial cyber fraud</p>
                        <h2 id="urgent-heading" className="mt-2 text-2xl font-extrabold text-white">Contact your bank and report it promptly</h2>
                        <p className="mt-3 leading-relaxed text-brand-secondary">Call India&apos;s cyber fraud helpline at 1930 and submit details through the official National Cyber Crime Reporting Portal.</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-3">
                        <a href="tel:1930" className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-red px-5 py-3 font-bold text-white transition hover:brightness-110">Call 1930</a>
                        <a href="https://www.cybercrime.gov.in/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-border px-5 py-3 font-semibold text-white transition hover:border-brand-secondary">Open portal</a>
                    </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-brand-secondary/70">ScamFree India is an independent private consultancy, not a government body or law firm. We do not investigate cases, provide legal representation, or guarantee recovery of funds.</p>
            </section>

            <Footer />
        </main>
    )
}