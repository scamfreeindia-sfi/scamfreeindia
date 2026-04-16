"use client"
import Header from "./Header"
import Image from "next/image"
import Main from "./Main"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import LeadPopup from "./LeadPopup"
import { useEffect, useState } from "react"


export default function Home() {
  const [showLeadPopup, setShowLeadPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLeadPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">

      <Header />

      <Main />

      <Footer />

      <WhatsAppButton />

      <LeadPopup open={showLeadPopup} setOpen={setShowLeadPopup} />

    </div>
  )
}