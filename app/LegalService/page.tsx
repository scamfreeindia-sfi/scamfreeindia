import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LegalService from "../components/LegalService"

export const metadata: Metadata = {
    title: "Our Legal Consultation Services in India | ScamFree India",
    description: "Get expert online legal consultation in property law, criminal defense, family & divorce matters, civil disputes, corporate law, cyber crime, IP, taxation, startup law & more.",
}

export default function LegalServicePage() {
    return (
        <main className="min-h-screen bg-[#F8F9FA]">
            <Header />
            <div className="pt-16 sm:pt-20">
                <LegalService showAll={true} />
            </div>
            <Footer />
        </main>
    )
}