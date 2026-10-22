"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    PhoneCall,
    MessageCircle,
    ArrowUpRight,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Scale,
    ShieldCheck,
    AlertCircle,
} from "lucide-react";
import LeadPopup from "@/app/components/LeadPopup";
import { LegalServiceDetail } from "../data";

interface ServiceDetailClientProps {
    service: LegalServiceDetail;
    allServices: { title: string; slug: string }[];
}

const PHONE_DISPLAY = "+91 8054433907";
const PHONE_TEL = "+918054433907";
const PHONE_WA = "918054433907";

export default function ServiceDetailClient({ service, allServices }: ServiceDetailClientProps) {
    const [isLeadOpen, setIsLeadOpen] = useState(false);
    const [activeSubService, setActiveSubService] = useState<string | undefined>(undefined);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const handleOpenModal = (subServiceName?: string) => {
        setActiveSubService(subServiceName);
        setIsLeadOpen(true);
    };

    const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
        `Hello, I need legal consultation regarding ${service.title}. Can you connect me with a specialist advocate?`
    )}`;

    const pageTitle = service.title.includes("Lawyer")
        ? service.title
        : `${service.title} Lawyer Online in India`;

    const otherServices = allServices.filter((s) => s.slug !== service.slug).slice(0, 6);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-200 selection:text-slate-900">
            {/* ───────────── HERO ───────────── */}
            <header className="bg-[#1f1f24] text-white pt-24 pb-14 sm:pt-28 sm:pb-16">
                <div className="mx-auto max-w-6xl px-5 sm:px-8">
                    <Link
                        href="/LegalService/"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#FFA500] transition-colors hover:text-[#FEC556]"
                    >
                        <ArrowLeft size={16} />
                        All legal services
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {pageTitle}
                        </h1>
                        <h2 className="mt-4 text-lg font-semibold leading-snug text-[#FFA500] sm:text-xl">
                            {service.subtitle}
                        </h2>
                        <p className="mt-5 text-base font-light leading-relaxed text-white/80 sm:text-lg">
                            {service.heroSummary}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <button
                             onClick={() => handleOpenModal()}
                            className="inline-flex items-center gap-2.5 rounded-lg bg-[#FFA500] px-6 py-3.5 text-base font-bold text-[#172B54] shadow-sm transition hover:bg-[#FEC556] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f24]"
                        >
                            <PhoneCall size={18} />
                            Call {PHONE_DISPLAY}
                        </button>                       
                    </div>
                </div>
            </header>

            {service.statutoryActs && service.statutoryActs.length > 0 && (
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center">
                        <span className="flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-[#10264B]">
                            <Scale size={16} className="text-amber-500" />
                            Governing laws
                        </span>
                        <ul className="flex flex-wrap gap-2">
                            {service.statutoryActs.map((act) => (
                                <li
                                    key={act}
                                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                                >
                                    {act}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* ───────────── BODY: CONTENT + STICKY SIDEBAR ───────────── */}
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px]">
                <main className="min-w-0 space-y-14">
                    {/* Overview */}
                    <section aria-labelledby="overview">
                        <h2 id="overview" className="text-2xl font-bold text-[#10264B] sm:text-3xl">
                            Best online {service.title} lawyer
                        </h2>
                        <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                            <p>
                                When facing disputes, inheritance complications, contractual violations or transaction challenges, a specialised {service.title} lawyer protects your statutory rights from the very beginning.
                            </p>
                            <p>
                                Legal matters in India involve complex paperwork, strict limitation periods and large financial commitments. Timely help from an experienced advocate prevents long litigation and protects valuable assets.
                            </p>
                            <p>
                                Inventour Legal LLP assists across Indian courts and tribunals with consultations, drafting, dispute negotiation and full courtroom representation.
                            </p>
                        </div>
                    </section>

                    {/* Services offered */}
                    <section aria-labelledby="services">
                        <h2 id="services" className="text-2xl font-bold text-[#10264B] sm:text-3xl">
                            Services we offer in {service.title}
                        </h2>
                        <p className="mt-2 text-slate-600">
                            From notice drafting and negotiation to courtroom litigation, pick the area closest to your matter.
                        </p>

                        <ul className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                            {service.subServices.map((sub) => (
                                <li key={sub.title}>
                                    <button
                                        onClick={() => handleOpenModal(sub.title)}
                                        className="group flex w-full items-start gap-4 p-5 text-left transition hover:bg-amber-50/60 focus:outline-none focus-visible:bg-amber-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400"
                                    >
                                        <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#10264B] text-[#F5C451] transition group-hover:bg-[#D9A52E] group-hover:text-[#10264B]">
                                            <Scale size={20} />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="flex flex-wrap items-center gap-2">
                                                <span className="text-base font-semibold text-[#10264B] group-hover:text-amber-700">
                                                    {sub.title}
                                                </span>
                                                {sub.tag && (
                                                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-[#9A6B08]">
                                                        {sub.tag}
                                                    </span>
                                                )}
                                            </span>
                                            <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                                                {sub.description}
                                            </span>
                                        </span>
                                        <ArrowUpRight
                                            size={18}
                                            className="mt-1 flex-shrink-0 text-slate-400 transition group-hover:text-amber-600"
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Common issues */}
                    {service.keyIssues && service.keyIssues.length > 0 && (
                        <section aria-labelledby="issues">
                            <h2 id="issues" className="text-2xl font-bold text-[#10264B] sm:text-3xl">
                                Disputes we handle
                            </h2>
                            <p className="mt-2 text-slate-600">
                                Without timely legal action, these problems can lead to permanent loss of property or years of litigation.
                            </p>

                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                {service.keyIssues.map((issue, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
                                    >
                                        <AlertCircle size={18} className="mt-0.5 flex-shrink-0 text-amber-600" />
                                        <span className="text-sm font-medium leading-relaxed text-slate-700">
                                            {issue}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleOpenModal()}
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#10264B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#153160] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                            >
                                <PhoneCall size={16} />
                                Get your case evaluated
                            </button>
                        </section>
                    )}

                    {/* Process: a true sequence, so numbered timeline */}
                    <section aria-labelledby="process">
                        <h2 id="process" className="text-2xl font-bold text-[#10264B] sm:text-3xl">
                            How the consultation works
                        </h2>
                        <p className="mt-2 text-slate-600">
                            A clear {service.processSteps.length}-step path from first call to resolution.
                        </p>

                        <ol className="mt-8 space-y-0">
                            {service.processSteps.map((step, i) => {
                                const isLast = i === service.processSteps.length - 1;
                                return (
                                    <li key={step.step} className="relative flex gap-5 pb-8 last:pb-0">
                                        {!isLast && (
                                            <span
                                                aria-hidden
                                                className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-slate-300"
                                            />
                                        )}
                                        <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#10264B] text-sm font-bold text-[#F5C451]">
                                            {step.step}
                                        </span>
                                        <div className="pt-1.5">
                                            <h3 className="text-base font-semibold text-[#10264B]">{step.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </section>

                    {/* Why choose us */}
                    <section aria-labelledby="why" className="rounded-2xl bg-[#1f1f24] p-6 text-white sm:p-10">
                        <h2 id="why" className="text-2xl font-bold sm:text-3xl">
                            Why consult Inventour Legal LLP
                        </h2>
                        <p className="mt-2 text-slate-300">
                            Trial-court experience, modern convenience and transparent fees.
                        </p>

                        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                            {service.whyChoose.map((why) => (
                                <li key={why.title} className="flex gap-3">
                                    <CheckCircle2 size={22} className="mt-0.5 flex-shrink-0 text-amber-400" />
                                    <div>
                                        <h3 className="font-semibold text-white">{why.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{why.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => handleOpenModal()}
                            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 font-bold text-[#10264B] transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f24]"
                        >
                            <PhoneCall size={18} />
                            Book a confidential consultation
                        </button>
                    </section>

                    {/* FAQ */}
                    <section aria-labelledby="faq">
                        <h2 id="faq" className="text-2xl font-bold text-[#10264B] sm:text-3xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Answers from our advocates on {service.title} in India.
                        </p>

                        <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                            {service.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div key={faq.question}>
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400"
                                        >
                                            <span className="text-base font-semibold text-[#10264B]">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                size={20}
                                                className={`flex-shrink-0 transition-transform duration-200 ${
                                                    isOpen ? "rotate-180 text-amber-500" : "text-slate-400"
                                                }`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="bg-slate-50/60 px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </main>

                {/* ───────────── STICKY SIDEBAR ───────────── */}
                <aside className="lg:sticky lg:top-24 lg:self-start">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2 text-[#10264B]">
                            <ShieldCheck size={20} className="text-amber-500" />
                            <h2 className="text-lg font-bold">Talk to a {service.title} advocate</h2>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            Share your matter and we will connect you with a specialist.
                        </p>

                        <div className="mt-5 space-y-3">
                            <button
                                onClick={() => handleOpenModal()}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#10264B] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#153160] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                            >
                                Request a callback
                            </button>
                            <a
                                href={`tel:${PHONE_TEL}`}
                                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-[#10264B] transition hover:bg-slate-50"
                            >
                                <PhoneCall size={16} />
                                {PHONE_DISPLAY}
                            </a>                            
                        </div>
                    </div>

                    {otherServices.length > 0 && (
                        <nav
                            aria-label="Other legal services"
                            className="mt-6 rounded-xl border border-slate-200 bg-white p-6"
                        >
                            <h3 className="text-sm font-bold text-[#10264B]">Other legal services</h3>
                            <ul className="mt-3 divide-y divide-slate-100">
                                {otherServices.map((other) => (
                                    <li key={other.slug}>
                                        <Link
                                            href={`/LegalService/${other.slug}/`}
                                            className="group flex items-center justify-between gap-2 py-2.5 text-sm text-slate-700 transition hover:text-amber-700"
                                        >
                                            {other.title}
                                            <ArrowRight
                                                size={14}
                                                className="flex-shrink-0 text-slate-300 transition group-hover:text-amber-600"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/LegalService/"
                                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10264B] hover:underline"
                            >
                                View all {allServices.length} services
                                <ArrowRight size={14} />
                            </Link>
                        </nav>
                    )}
                </aside>
            </div>

            <LeadPopup
                open={isLeadOpen}
                setOpen={setIsLeadOpen}
                serviceTitle={service.title}
                serviceSlug={service.slug}
                subService={activeSubService}
            />
        </div>
    );
}