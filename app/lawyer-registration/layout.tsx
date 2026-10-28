import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lawyer Registration | Join Our Verified Legal Network - ScamFreeIndia & Inventour Legal",
  description:
    "Register as an advocate or legal specialist with ScamFreeIndia & Inventour Legal LLP. Connect with verified clients seeking cyber crime defense, financial dispute recovery, and corporate legal consultations across India. Zero upfront marketing fees.",
  keywords: [
    "lawyer registration india",
    "advocate empanelment",
    "register as a lawyer",
    "cyber crime advocate join",
    "legal consultation network",
    "bar council advocate onboarding",
    "inventour legal llp",
    "scam dispute recovery lawyers",
  ],
  alternates: {
    canonical: "https://scamfreeindia.com/lawyer-registration",
  },
  openGraph: {
    title: "Register as an Advocate | ScamFreeIndia & Inventour Legal LLP",
    description:
      "Join India's verified network of practicing advocates. Receive pre-qualified client briefs, stage-wise payments, and zero marketing overhead.",
    url: "https://scamfreeindia.com/lawyer-registration",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lawyer Registration - ScamFreeIndia",
      },
    ],
  },
};

export default function LawyerRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
