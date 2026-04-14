import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://scamfreeindia.com"),

  title: {
    default: "Report Online Scam & Fraud in India | ScamFreeIndia",
    template: "%s | ScamFreeIndia",
  },

  description:
    "Victim of an online scam? ScamFreeIndia provides expert consultancy to help you report cyber fraud cases including trading, loan, telegram, and task-based scams. Get guidance within 24 hours.",

  keywords: [
    "online scam in india",
    "report online fraud india",
    "cyber crime complaint india",
    "financial fraud help india",
    "telegram scam india",
    "task scam india",
    "loan app fraud india",
    "trading scam india",
    "investment fraud india",
    "online fraud support india",
    "cyber fraud consultancy india",
    "digital fraud awareness india",
    "how to report cyber crime india",
    "scam awareness india",
    "online safety india",
    "fraud prevention india",
    "cyber security awareness india",
    "fake investment scam india",
    "crypto scam india",
    "online cheating help india",
  ],

  authors: [{ name: "ScamFreeIndia Team" }],
  creator: "ScamFreeIndia",
  publisher: "ScamFreeIndia",

  alternates: {
    canonical: "https://scamfreeindia.com",
  },

  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://scamfreeindia.com",
    title: "Report Online Scam & Fraud in India | ScamFreeIndia",
    description:
      "Expert consultancy for reporting online scams including trading, loan, and social media fraud cases across India.",
    siteName: "ScamFreeIndia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScamFreeIndia - Digital Safety Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ScamFreeIndia | Online Fraud Help India",
    description:
      "Facing an online scam? Get expert guidance to report cyber fraud cases quickly and safely.",
    images: ["/og-image.png"],
    creator: "@ScamFreeIndia",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  verification: {
    google: "0NO7UQZ1Sj52KHXHQpv-_B_lqxQMUBL5Ug6Nij007kk",
  },

  other: {
    "facebook-domain-verification": "6rihsqxe1ggn8oocy0yadb61sb8gdp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://scamfreeindia.com/#org",
        name: "ScamFreeIndia",
        url: "https://scamfreeindia.com",
        logo: "https://scamfreeindia.com/logo.png",
        sameAs: [
          "https://www.instagram.com/scamfreeindia.co/",
          "https://x.com/AnkitSh906",
        ],
      },

      {
        "@type": "ProfessionalService",
        "@id": "https://scamfreeindia.com/#organization",
        name: "ScamFreeIndia",
        url: "https://scamfreeindia.com",
        logo: "https://scamfreeindia.com/logo.png",
        description:
          "Expert consultancy for reporting online fraud cases and spreading cyber awareness in India.",
        founder: {
          "@type": "Person",
          name: "Jaskaran Singh",
          jobTitle: "Founder & Anti-Fraud Specialist",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sco 29, Citi Centre, F Block, Aerocity",
          addressLocality: "Mohali",
          addressRegion: "Punjab",
          postalCode: "140306",
          addressCountry: "IN",
        },
        telephone: "+91-8054433907",
        email: "info@scamfreeindia.com",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8054433907",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
      },

      {
        "@type": "WebSite",
        "@id": "https://scamfreeindia.com/#website",
        url: "https://scamfreeindia.com",
        name: "ScamFreeIndia",
        publisher: {
          "@id": "https://scamfreeindia.com/#organization",
        },
      },

      {
        "@type": "AboutPage",
        "@id": "https://scamfreeindia.com/about",
        url: "https://scamfreeindia.com/about",
        name: "About ScamFreeIndia",
      },
      {
        "@type": "ContactPage",
        "@id": "https://scamfreeindia.com/contact",
        url: "https://scamfreeindia.com/contact",
        name: "Contact ScamFreeIndia",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}