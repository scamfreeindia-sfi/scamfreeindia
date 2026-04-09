"use client";

import { useState } from "react";

export default function LeadPopup({ open, setOpen }: any) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in";

  const submitLead = async () => {
    if (!phone || phone.length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${apiBaseUrl}/api/scam/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Submitted successfully!");
        setPhone("");
        setOpen(false);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("API Error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="relative bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-xl">
        {/* Close Button */}
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary bg-brand-bg/50 hover:bg-brand-bg rounded-full transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6 mt-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-brand-primary">
            We're here to help
          </h2>
          <p className="text-brand-secondary text-[15px] mt-2">
            Dealing with fraud is stressful. Leave your number and our team will reach out to guide you.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-brand-secondary mb-1">Your Mobile Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-brand-bg border border-r-0 border-brand-border rounded-l-xl text-brand-secondary font-medium">
                +91
              </span>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
                className="w-full bg-brand-bg text-brand-primary border border-brand-border rounded-r-xl px-4 py-3 outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                autoFocus
              />
            </div>
          </div>

          <button
            onClick={submitLead}
            disabled={loading}
            className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-semibold text-base transition-colors hover:bg-brand-blue/90 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Please wait...
              </>
            ) : "Request a call"}
          </button>
          
          <p className="text-xs text-center text-brand-secondary flex items-center justify-center gap-1.5 pt-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is kept private and secure.
          </p>
        </div>
      </div>
    </div>
  );
}