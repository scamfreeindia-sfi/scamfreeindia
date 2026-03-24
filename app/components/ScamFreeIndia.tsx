"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import Header from "./Header"
import Image from "next/image"

function FraudSection() {
  const scamsRow1 = [
    { title: "Job / Employment Scams", icon: "briefcase", description: "Fraudsters offer fake job opportunities, demanding upfront 'training' or 'registration' fees before disappearing." },
    { title: "Investment / Crypto Scams", icon: "trending-up", description: "Promises of impossibly high returns on fake trading platforms or bogus cryptocurrency investments." },
    { title: "Task / Like-and-Earn Scams", icon: "thumbs-up", description: "Victims are paid small amounts initially for liking videos, then asked to 'invest' for premium tasks." },
    // { title: "Sextortion / Dating Scams", icon: "heart", description: "Scammers create fake profiles to record victims in compromising situations and demand ransom." },
    { title: "Courier / Customs Scams", icon: "package", description: "Fake calls from 'FedEx' or 'Customs' claiming illegal parcels are intercepted in your name." },
  ];

  const scamsRow2 = [
    // { title: "Customer Care Scams", icon: "phone", description: "Fake helpline numbers on Google trap users into screen-sharing or giving OTPs." },
    { title: "Loan App Harassment", icon: "credit-card", description: "Unregistered apps provide small loans, then access contacts to morph photos and extort money." },
    { title: "Matrimonial Scams", icon: "users", description: "Fake profiles on dating/matrimony sites build trust over months before asking for emergency money." },
    // { title: "Electricity Bill Scams", icon: "zap", description: "SMS warnings that your power will be cut tonight unless you click a link and pay a fee." },
    { title: "Digital Arrest Fraud", icon: "shield", description: "Fake 'police' or 'CBI' officers on video calls claiming you are 'digitally arrested' and must pay fines." },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'briefcase': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      case 'trending-up': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
      case 'thumbs-up': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514a1 1 0 01.485.126l4.475 2.237a1 1 0 00.894 0z" /></svg>;
      case 'heart': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
      case 'package': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
      case 'phone': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
      case 'credit-card': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
      case 'users': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
      case 'zap': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'shield': return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
      default: return null;
    }
  };

  const ScamCard = ({ scam }: { scam: any }) => (
    <div className="w-[280px] md:w-[350px] shrink-0 bg-brand-card rounded-2xl border border-brand-border p-5 flex flex-col gap-3 hover:border-brand-blue/40 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
          {getIcon(scam.icon)}
        </div>
        <h3 className="font-bold text-lg text-orange-300 flex-1 leading-tight">{scam.title}</h3>
      </div>
      <p className="text-brand-secondary text-sm leading-relaxed">{scam.description}</p>
    </div>
  );

  return (
    <section className="bg-brand-section py-20 overflow-hidden border-y border-brand-border relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_100%)] pointer-events-none"></div>

      <div className="text-center mb-12 md:mb-16 px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-4 shadow-sm shadow-brand-blue/10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Be Aware
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
          Type of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Scams</span> or Frauds
        </h2>
        <p className="text-brand-secondary text-lg md:text-xl max-w-2xl mx-auto">
          Fraudsters are constantly evolving their tactics. Stay informed about the most prevalent online scams affecting people today.
        </p>
      </div>

      <div className="w-full relative flex flex-col gap-6 select-none bg-brand-bg/50 py-10 border-y border-white/5 shadow-inner">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-brand-section to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-brand-section to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee gap-6">
          {[...scamsRow1, ...scamsRow1].map((scam, i) => (
            <ScamCard key={`row1-${i}`} scam={scam} />
          ))}
        </div>

        <div className="flex w-max animate-marquee-reverse gap-6">
          {[...scamsRow2, ...scamsRow2].map((scam, i) => (
            <ScamCard key={`row2-${i}`} scam={scam} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isSupabaseReady = Boolean(supabase);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isSupabaseReady) {
      alert("Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY")
      return
    }

    setIsSubmitting(true)
    const { error } = await supabase!.from("leads").insert([form])
    setIsSubmitting(false)

    if (!error) {
      alert("Submitted successfully. Our team will contact you shortly.")
      setForm({ name: "", phone: "", amount: "", message: "" })
    } else {
      alert("Error submitting form. Please try again.")
    }
  }

  return (
    <div className="bg-brand-bg text-brand-primary min-h-screen relative font-sans selection:bg-brand-blue/30 selection:text-brand-primary">

      <Header />

      <main>
        {/* Spacer */}
        <div className="h-16"></div>

        {/* HERO SECTION */}
        <section className="min-h-[calc(100vh-6rem)] flex items-center px-6 md:px-16 py-12 md:py-20 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

            {/* LEFT */}
            <div className="hidden lg:block space-y-8 relative z-0">
              {/* Background Logo Watermark */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -z-10 opacity-20 pointer-events-none select-none w-full max-w-lg">
                <Image
                  src="/logo.png"
                  alt="Hero Background"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="w-full h-auto object-contain blur-[1px]"
                  priority
                />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                Urgent: Act Within 24 Hours
              </div>

              <h1 className="text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Lost Money in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Online Scam?</span>
              </h1>

              <p className="text-brand-secondary text-lg md:text-lg leading-relaxed max-w-lg">
                Take action within 24 hours to increase recovery chances. Our expert team has helped thousands recover from online fraud.
              </p>

              <ul className="space-y-4 text-brand-primary/90 font-medium">
                {[
                  "Expert Guidance",
                  "Fast Response",
                  "100% Confidential"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center border border-brand-green/30 text-brand-green">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FORM */}
            <div className="bg-brand-card p-6 md:p-8 rounded-2xl shadow-2xl border border-brand-border lg:ml-auto w-full max-w-md relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Report Your Case
                </h2>
                <p className="text-sm text-brand-secondary">
                  Fill in the details below and our team will reach out.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                {/* <div className="space-y-1">
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div> */}

                <div className="space-y-1">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="amount" className="sr-only">Amount Lost</label>
                  <input
                    id="amount"
                    type="text"
                    required
                    placeholder="Amount Lost (₹)"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="sr-only">Brief Case Description</label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    placeholder="Brief Case Description"
                    className="w-full px-4 py-3.5 rounded-xl bg-brand-section border border-brand-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder-brand-secondary text-brand-primary shadow-inner resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isSupabaseReady || isSubmitting}
                  className="w-full bg-brand-green hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-xl text-brand-bg font-bold shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none mt-2 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-bg border-t-transparent rounded-full animate-spin"></span>
                  ) : isSupabaseReady ? (
                    "Report Your Case \u2192"
                  ) : (
                    "Supabase not configured"
                  )}
                </button>

                <p className="text-xs text-brand-secondary text-center flex justify-center items-center gap-1.5 mt-4">
                  <svg className="w-3.5 h-3.5 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Your information is 100% confidential and secure.
                </p>

              </form>
            </div>

          </div>
        </section>

        {/* FRAUD PROGRAM SECTION */}
        <FraudSection />

        {/* BLOGS SECTION */}
        <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Scam Awareness</h2>
              <p className="text-brand-secondary max-w-xl">Stay informed about the latest online frauds and how to protect yourself.</p>
            </div>
            <a href="#" className="inline-flex items-center text-brand-blue font-medium hover:text-white transition-colors">
              View All Articles <span className="ml-1">&rarr;</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Spot a Fake Trading Platform in 2026",
                category: "Trading Scam",
                date: "March 20, 2026"
              },
              {
                title: "The Anatomy of a WhatsApp Job Fraud",
                category: "Job Scam",
                date: "March 18, 2026"
              },
              {
                title: "Phishing Links: What Happens When You Click?",
                category: "Cyber Security",
                date: "March 15, 2026"
              }
            ].map((blog, i) => (
              <div key={i} className="group flex flex-col bg-brand-card rounded-2xl border border-brand-border overflow-hidden hover:border-brand-blue/50 transition-all cursor-pointer">
                <div className="h-48 bg-brand-section w-full border-b border-brand-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-section to-brand-bg opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-brand-secondary/30">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold px-2 py-1 bg-brand-blue/10 text-brand-blue rounded border border-brand-blue/20">{blog.category}</span>
                    <span className="text-xs text-brand-secondary">{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand-blue transition-colors mb-4">{blog.title}</h3>
                  <div className="mt-auto">
                    <span className="text-sm text-brand-secondary group-hover:text-brand-primary transition-colors inline-flex items-center">Read article &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="bg-brand-section py-20 px-6 md:px-16 border-y border-brand-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-offset-4xl text-center font-bold mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">

              <div className="p-8 rounded-2xl bg-brand-bg border border-brand-border drop-shadow-sm">
                <div className="w-12 h-12 mx-auto bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">500+</h3>
                <h4 className="font-bold text-lg mb-2">Cases Guided</h4>
                <p className="text-brand-secondary text-sm">We&apos;ve helped hundreds navigate the complex recovery process.</p>
              </div>

              <div className="p-8 rounded-2xl bg-brand-bg border border-brand-border drop-shadow-sm">
                <div className="w-12 h-12 mx-auto bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">&lt; 1 hr</h3>
                <h4 className="font-bold text-lg mb-2">Fast Response</h4>
                <p className="text-brand-secondary text-sm">Time is critical. Our experts review your case rapidly.</p>
              </div>

              <div className="p-8 rounded-2xl bg-brand-bg border border-brand-border drop-shadow-sm">
                <div className="w-12 h-12 mx-auto bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">100%</h3>
                <h4 className="font-bold text-lg mb-2">Secure & Private</h4>
                <p className="text-brand-secondary text-sm">Your personal information and case details are strictly confidential.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 text-brand-red font-bold uppercase tracking-wider text-sm bg-brand-red/10 px-4 py-1.5 rounded-full border border-brand-red/20">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            Critical Window
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Don&apos;t Wait — Act Now
          </h2>

          <p className="text-brand-secondary text-xl mb-10">
            Reporting quickly drastically increases your chances of a successful recovery. Let our experts guide your next steps.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-brand-green hover:brightness-110 active:scale-95 text-brand-bg px-10 py-5 rounded-xl font-bold text-lg shadow-[0_4px_24px_0_rgba(34,197,94,0.4)] transition-all"
          >
            Submit Your Case Immediately
          </button>
        </section>

      </main>

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