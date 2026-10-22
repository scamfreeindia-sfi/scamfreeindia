import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceDetailClient from "./ServiceDetailClient";
import {
    ALL_LEGAL_SERVICES_LIST,
    getLegalServiceBySlug,
} from "../data";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return ALL_LEGAL_SERVICES_LIST.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getLegalServiceBySlug(slug);

    if (!service) {
        return {
            title: "Legal Service Not Found | ScamFree India",
        };
    }

    const canonicalUrl = `https://scamfreeindia.com/LegalService/${slug}/`;

    return {
        title: `${service.title} Lawyers Online in India | Inventour Legal LLP`,
        description: service.metaDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${service.title} Lawyers Online | Inventour Legal LLP`,
            description: service.metaDescription,
            url: canonicalUrl,
            siteName: "ScamFree India",
            type: "website",
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} Lawyers Online in India`,
            description: service.metaDescription,
        },
    };
}

export default async function LegalServiceSlugPage({ params }: PageProps) {
    const { slug } = await params;
    const service = getLegalServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // FAQ schema for Google Rich Results
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: service.title,
        description: service.metaDescription,
        url: `https://scamfreeindia.com/LegalService/${slug}/`,
        provider: {
            "@type": "Organization",
            name: "Inventour Legal LLP",
            alternateName: "ScamFree India",
            url: "https://scamfreeindia.com",
            legalName: "Inventour Legal LLP (LLPIN: ACD-2916)",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
    };

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <Header />

            {/* Dynamic Interactive Service Details with Lead Popup */}
            <ServiceDetailClient
                service={service}
                allServices={ALL_LEGAL_SERVICES_LIST}
            />

            <Footer variant="lawyer" />
        </main>
    );
}
