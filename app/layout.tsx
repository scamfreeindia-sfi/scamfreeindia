import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scamfreeindia.com"),
  title: {
    default: "ScamFreeIndia | Get Help Recovering Your Lost Money",
    template: "%s | ScamFreeIndia",
  },
  description: "Lost money in an online scam? ScamFreeIndia provides expert guidance to help you report and recover your funds from trading, loan, job, and OTP frauds.",
  keywords: ["online scam recovery", "report online fraud india", "trading scam help", "money recovery online", "scam free india", "cyber crime help", "fraud reporting"],
  authors: [{ name: "ScamFreeIndia" }],
  creator: "ScamFreeIndia",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.scamfreeindia.com",
    title: "ScamFreeIndia | Get Help Recovering Your Lost Money",
    description: "Lost money in an online scam? ScamFreeIndia provides expert guidance to help you report and recover your funds from trading, loan, job, and OTP frauds.",
    siteName: "ScamFreeIndia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScamFreeIndia - Recover Your Lost Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScamFreeIndia | Get Help Recovering Your Lost Money",
    description: "Lost money in an online scam? ScamFreeIndia provides expert guidance to help you report and recover your funds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.scamfreeindia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
