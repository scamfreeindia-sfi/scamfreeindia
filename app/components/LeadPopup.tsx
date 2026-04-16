"use client";

import { useState, useEffect, useRef } from "react";

export default function LeadPopup({ open, setOpen }: any) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in";

  useEffect(() => {
    if (open && !isSuccess) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open, isSuccess]);

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
          name: "Lead Popup",
          phone,
          amount: "",
          message: "Lead from 5-second popup"
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setPhone("");
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setOpen(false);
          // Reset success state after closing animation
          setTimeout(() => setIsSuccess(false), 500);
        }, 3000);
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Submission failed:", errorData.message || "Unknown error");
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("API Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ease-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      ></div>

      <div className={`relative bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl transition-all duration-500 ease-out ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}>
        {/* Close Button */}
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 text-brand-secondary hover:text-brand-primary bg-brand-bg/50 hover:bg-brand-bg rounded-full transition-all hover:rotate-90"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full flex items-center justify-center text-brand-green ring-8 ring-brand-green/5">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
                Request Received!
              </h2>
              <p className="text-brand-secondary">
                Our safety experts will call you back within 24 hours to guide you.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6 mt-2 relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mb-4 ring-8 ring-brand-blue/5">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Lost Money? We Can Help
              </h2>
              <p className="text-brand-secondary text-[15px] mt-2">
                Dealing with fraud is stressful. Leave your number and our expert team will guide you back to safety.
              </p>
            </div>

            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-medium text-brand-secondary mb-1.5 transition-colors group-focus-within:text-brand-blue">Your Mobile Number</label>
                <div className="flex shadow-sm">
                  <span className="inline-flex items-center px-4 bg-brand-bg border border-r-0 border-brand-border rounded-l-xl text-brand-secondary font-medium">
                    +91
                  </span>
                  <input
                    ref={inputRef}
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={10}
                    className="w-full bg-brand-bg text-brand-primary border border-brand-border rounded-r-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>

              <button
                onClick={submitLead}
                disabled={loading}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-base transition-all hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Request Call Back
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
              
              {/* <div className="bg-brand-bg/50 rounded-xl p-3 border border-brand-border/50">
                <p className="text-xs text-center text-brand-secondary flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secured with 256-bit encryption
                </p>
              </div> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
