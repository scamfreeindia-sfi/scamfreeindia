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
    default: "Online Scam & Fraud Consultancy India | ScamFreeIndia",
    template: "%s | ScamFreeIndia",
  },

  // ✅ CLEAN DESCRIPTION (No spam words)
  description:
    "Victim of an online scam? ScamFreeIndia provides expert consultancy to help you report cyber fraud cases including trading, loan, telegram, and task-based scams. Get guidance within 24 hours.",

  // ✅ HIGH-QUALITY KEYWORDS
  keywords: [
    "online scam help india",
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

  // ✅ FIXED OPEN GRAPH (REMOVED RECOVERY)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://scamfreeind.in",
    title: "Online Scam & Fraud Consultancy India | ScamFreeIndia",
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

  // ✅ FIXED TWITTER
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
        "@type": "ProfessionalService",
        "@id": "https://scamfreeind.in/#organization",
        name: "ScamFreeIndia",
        url: "https://scamfreeind.in",
        logo: "https://scamfreeind.in/logo.png",

        // ✅ FIXED (NO RECOVERY WORD)
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
        email: "info@scamfreeind.in",

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
        "@id": "https://scamfreeind.in/#website",
        url: "https://scamfreeind.in",
        name: "ScamFreeIndia",
        publisher: {
          "@id": "https://scamfreeind.in/#organization",
        },
      },

      {
        "@type": "AboutPage",
        "@id": "https://scamfreeind.in/about",
        url: "https://scamfreeind.in/about",
        name: "About ScamFreeIndia & Founder Jaskaran Singh",
      },

      {
        "@type": "ContactPage",
        "@id": "https://scamfreeind.in/contact",
        url: "https://scamfreeind.in/contact",
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