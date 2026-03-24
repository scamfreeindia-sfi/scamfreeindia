"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import Header from "./Header"

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    message: ""
  })

  const isSupabaseReady = Boolean(supabase);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isSupabaseReady) {
      alert("Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY")
      return
    }

    const { error } = await supabase!.from("leads").insert([form])

    if (!error) {
      alert("Submitted successfully")
      setForm({ name: "", phone: "", amount: "", message: "" })
    } else {
      alert("Error submitting form")
    }
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen relative">

      <Header />

      <main>
        {/* Spacer to prevent layout issues since header is fixed */}
        <div className="h-24"></div>

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center px-6 md:px-20 py-16">
          <div className="grid md:grid-cols-2 gap-10 w-full">

            {/* LEFT */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Lost Money in <span className="text-red-500">Online Scam?</span>
              </h1>

              <p className="text-gray-300 text-lg">
                Take action within 24 hours to increase recovery chances.
              </p>

              <ul className="space-y-2 text-gray-400">
                <li>✔ Expert Guidance</li>
                <li>✔ Fast Response</li>
                <li>✔ 100% Confidential</li>
              </ul>
            </div>

            {/* FORM */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Report Your Case
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="sr-only">Amount Lost</label>
                  <input
                    id="amount"
                    type="text"
                    placeholder="Amount Lost"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Describe your case</label>
                  <textarea
                    id="message"
                    placeholder="Describe your case"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isSupabaseReady}
                  className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSupabaseReady ? "Get Help Now" : "Supabase not configured"}
                </button>

              </form>
            </div>

          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="px-6 md:px-20 py-16 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-red-500">500+</h3>
              <p className="text-gray-400">Cases Guided</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-red-500">Fast</h3>
              <p className="text-gray-400">Response Time</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-red-500">Secure</h3>
              <p className="text-gray-400">Confidential Process</p>
            </div>

          </div>
        </section>

        {/* SCAM TYPES */}
        <section className="px-6 md:px-20 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Common Scam Types
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {["Trading Scam", "Loan Scam", "Job Scam", "OTP Fraud"].map((item, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center hover:border-red-500 transition">
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 md:px-20 py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Submit Your Case",
              "Get Expert Guidance",
              "Take Immediate Action"
            ].map((step, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-20 py-16 text-center bg-gray-900 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            Don’t Wait — Act Now
          </h2>

          <p className="text-gray-400 mb-6">
            Reporting quickly increases your chances of recovery.
          </p>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-semibold">
            Submit Your Case
          </button>
        </section>

        {/* FOOTER */}
      </main>
      <footer className="px-6 md:px-20 py-10 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 ScamFreeIndia</p>
        <p className="text-sm mt-2">
          We provide guidance only. No guaranteed recovery.
        </p>
      </footer>

    </div>
  )
}