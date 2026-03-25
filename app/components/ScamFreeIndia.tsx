"use client"
import Header from "./Header"
import Image from "next/image"
import Main from "./Main"


export default function Home() {


  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">

      <Header />

      <Main />

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-12 border-t border-brand-border bg-brand-section text-brand-secondary text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="border-1 border-[#FFA500] rounded-full w-11 h-11 flex items-center justify-center overflow-hidden bg-white/5 shadow-sm shadow-[#FFA500]/20">
              <Image
                src="/logo.png"
                alt="ScamFreeIndia Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain p-1"
                priority
              />
            </div>
            <span className="text-brand-primary font-bold tracking-wide">
              ScamFreeIndia
            </span>
          </div>

          <p>
            Disclaimer: We provide guidance and advisory services only. No guaranteed recovery.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  )
}