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
  metadataBase: new URL("https://scamfreeind.in"),
  title: {
    default: "Online Scam & Fraud Recovery Consultancy India | ScamFreeIndia",
    template: "%s | ScamFreeIndia",
  },
  description: "Victim of an online scam? ScamFreeIndia provides expert consultancy to help you report and recover funds from trading, loan, telegram, and task-based frauds. Act now within 24 hours.",
  keywords: [
    "online scam recovery india",
    "report online fraud india",
    "financial cyber crime complaint",
    "recover money from scammers"
  ],
  authors: [{ name: "ScamFreeIndia Team" }],
  creator: "ScamFreeIndia",
  publisher: "ScamFreeIndia",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://scamfreeind.in",
    title: "Online Scam & Fraud Recovery Consultancy India | ScamFreeIndia",
    description: "Expert guidance for recovering funds from online scams. Specialized in trading, loan, and social media fraud cases in India.",
    siteName: "ScamFreeIndia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScamFreeIndia - Digital Safety & Recovery Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamFreeIndia | Recover Your Lost Money",
    description: "Lost money to online fraud? Get expert help to report and recover your funds. Act within 24 hours for better results.",
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
        "@type": "ProfessionalService",
        "@id": "https://scamfreeind.in/#organization",
        "name": "ScamFreeIndia",
        "url": "https://scamfreeind.in",
        "logo": "https://scamfreeind.in/logo.png",
        "description": "Expert consultancy for online fraud recovery and cyber awareness in India. Specializing in financial cybercrime complaints.",
        "founder": {
          "@type": "Person",
          "name": "Jaskaran Singh",
          "jobTitle": "Founder & Anti-Fraud Specialist"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sco 29, Citi Centre, F Block, Aerocity",
          "addressLocality": "Mohali",
          "addressRegion": "Punjab",
          "postalCode": "140306",
          "addressCountry": "IN"
        },
        "telephone": "+91-8054433907",
        "email": "info@scamfreeind.in",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8054433907",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://scamfreeind.in/#website",
        "url": "https://scamfreeind.in",
        "name": "ScamFreeIndia",
        "publisher": {
          "@id": "https://scamfreeind.in/#organization"
        }
      },
      {
        "@type": "AboutPage",
        "@id": "https://scamfreeind.in/about",
        "url": "https://scamfreeind.in/about",
        "name": "About ScamFreeIndia & Founder Jaskaran Singh"
      },
      {
        "@type": "ContactPage",
        "@id": "https://scamfreeind.in/contact",
        "url": "https://scamfreeind.in/contact",
        "name": "Contact ScamFreeIndia"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
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

