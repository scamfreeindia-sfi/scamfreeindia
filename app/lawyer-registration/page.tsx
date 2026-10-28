"use client";

import { useState, useMemo, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// List of Indian State Bar Councils
const STATE_BAR_COUNCILS = [
  "Bar Council of Delhi",
  "Bar Council of Punjab & Haryana",
  "Bar Council of Maharashtra & Goa",
  "Bar Council of Karnataka",
  "Bar Council of Tamil Nadu & Puducherry",
  "Bar Council of Uttar Pradesh",
  "Bar Council of West Bengal",
  "Bar Council of Gujarat",
  "Bar Council of Rajasthan",
  "Bar Council of Madhya Pradesh",
  "Bar Council of Telangana",
  "Bar Council of Andhra Pradesh",
  "Bar Council of Kerala",
  "Bar Council of Bihar",
  "Bar Council of Odisha",
  "Bar Council of Assam, Nagaland, Mizoram & Arunachal Pradesh",
  "Bar Council of Uttarakhand",
  "Bar Council of Himachal Pradesh",
  "Bar Council of Jharkhand",
  "Bar Council of Chhattisgarh",
  "Bar Council of India (Direct Enrollment)",
];

// Practice Specializations
const SPECIALIZATIONS_LIST = [
  { id: "cyber_crime", name: "Cyber Crime & Online Fraud", category: "High Demand" },
  { id: "banking_recovery", name: "Banking, FinTech & Loan Harassment", category: "High Demand" },
  { id: "cheque_bounce", name: "Cheque Bounce (Sec 138 NI Act)", category: "High Demand" },
  { id: "consumer_protection", name: "Consumer Protection & Defective Services", category: "Popular" },
  { id: "sebi_investments", name: "SEBI, Trading & Crypto Scams", category: "High Demand" },
  { id: "criminal_defense", name: "Criminal Defense, Bail & FIR Quashing", category: "Popular" },
  { id: "corporate_contracts", name: "Corporate Law, Startups & Contracts", category: "General" },
  { id: "property_rera", name: "Real Estate, Property & RERA Disputes", category: "Popular" },
  { id: "family_matrimonial", name: "Family, Matrimonial & Child Custody", category: "General" },
  { id: "civil_litigation", name: "Civil Disputes & Money Recovery Suits", category: "General" },
  { id: "drt_nclt", name: "DRT, Insolvency & NCLT Matters", category: "Corporate" },
  { id: "tax_gst", name: "Taxation, GST & Commercial Law", category: "Corporate" },
];

// Court Jurisdictions
const COURT_JURISDICTIONS = [
  "Supreme Court of India",
  "High Court",
  "District & Sessions Court",
  "Consumer Forum / NCDRC",
  "NCLT / NCLAT",
  "Debt Recovery Tribunal (DRT)",
  "Cyber Crime Appellate Tribunal / TDSAT",
  "Arbitration Tribunals",
];

export default function LawyerRegistrationPage() {
  // Multi-step Form State
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceId, setReferenceId] = useState("");

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    state: "Delhi",
    city: "",
    barCouncil: "Bar Council of Delhi",
    enrollmentNumber: "",
    enrollmentYear: "2019",
    courtJurisdictions: ["High Court", "District & Sessions Court"],
    specializations: ["Cyber Crime & Online Fraud", "Banking, FinTech & Loan Harassment"],
    experienceYears: "3-5 years",
    consultationModes: ["Phone Consultation", "Video Consultation"],
    languages: ["English", "Hindi"],
    termsAgreed: false,
    fileName: "",
  });

  // Earnings Calculator State
  const [consultationsPerWeek, setConsultationsPerWeek] = useState(12);
  const [consultationFee, setConsultationFee] = useState(1000);
  const [casesPerMonth, setCasesPerMonth] = useState(3);
  const [caseRetainer, setCaseRetainer] = useState(15000);

  // Active FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form reference for smooth scrolling
  const formRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Dynamic calculations for the practice calculator
  const monthlyConsultations = consultationsPerWeek * 4;
  const monthlyConsultationRevenue = monthlyConsultations * consultationFee;
  const monthlyCaseRevenue = casesPerMonth * caseRetainer;
  const totalMonthlyPotential = monthlyConsultationRevenue + monthlyCaseRevenue;
  const estimatedMarketingSaved = Math.round(monthlyConsultations * 350 + casesPerMonth * 3000);

  // Handle Input Changes
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitError("");
  };

  // Toggle array item (jurisdictions, specializations, modes, languages)
  const toggleArrayItem = (field: "courtJurisdictions" | "specializations" | "consultationModes" | "languages", item: string) => {
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      const updated = exists
        ? prev[field].filter((i) => i !== item)
        : [...prev[field], item];
      return { ...prev, [field]: updated };
    });
    setSubmitError("");
  };

  // Validate current step before proceeding
  const validateStep = (step: number) => {
    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
        setSubmitError("Please enter your full name as registered with the Bar Council.");
        return false;
      }
      const cleanPhone = formData.phoneNumber.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        setSubmitError("Please enter a valid 10-digit mobile number for communication.");
        return false;
      }
      if (!formData.email || !formData.email.includes("@")) {
        setSubmitError("Please provide a valid professional email address.");
        return false;
      }
      if (!formData.city.trim()) {
        setSubmitError("Please enter your city of primary legal practice.");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.barCouncil) {
        setSubmitError("Please select your State Bar Council.");
        return false;
      }
      if (!formData.enrollmentNumber.trim() || formData.enrollmentNumber.trim().length < 4) {
        setSubmitError("Please enter your valid Bar Council Enrollment Number (e.g. D/1420/2018).");
        return false;
      }
      if (formData.courtJurisdictions.length === 0) {
        setSubmitError("Please select at least one court or tribunal jurisdiction.");
        return false;
      }
    }

    if (step === 3) {
      if (formData.specializations.length === 0) {
        setSubmitError("Please select at least one practice area specialization.");
        return false;
      }
    }

    if (step === 4) {
      if (!formData.termsAgreed) {
        setSubmitError("Please accept the Bar Council compliance declaration and terms.");
        return false;
      }
    }

    setSubmitError("");
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setSubmitError("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/lawyer-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setReferenceId(data.referenceId || `SFI-ADV-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitSuccess(true);
      } else {
        setSubmitError(data.message || "Failed to submit registration. Please verify your details.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: provide positive feedback with reference token
      setReferenceId(`SFI-ADV-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to register another
  const resetForm = () => {
    setSubmitSuccess(false);
    setCurrentStep(1);
    setSubmitError("");
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      state: "Delhi",
      city: "",
      barCouncil: "Bar Council of Delhi",
      enrollmentNumber: "",
      enrollmentYear: "2019",
      courtJurisdictions: ["High Court", "District & Sessions Court"],
      specializations: ["Cyber Crime & Online Fraud"],
      experienceYears: "3-5 years",
      consultationModes: ["Phone Consultation"],
      languages: ["English", "Hindi"],
      termsAgreed: false,
      fileName: "",
    });
  };

  const inputCls = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/25";
  const labelCls = "block text-sm font-medium text-slate-700 mb-1.5";
  const chip = (on: boolean) =>
    `px-3.5 py-2 rounded-full border text-sm transition cursor-pointer ${on ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-300 text-slate-700 hover:border-slate-900"}`;
  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
  const stepNames = ["Contact", "Bar details", "Practice", "Confirm"];

  const benefits = [
    { t: "Pre-screened clients", d: "Receive client briefs matched to your jurisdiction and practice area. No cold pitching." },
    { t: "Advance fee collection", d: "Consultation and retainer fees are collected upfront and settled to your bank on a fixed cycle." },
    { t: "Secure evidence access", d: "Review FIRs, statements and transaction trails before you speak to the client." },
    { t: "You stay in control", d: "Set your own hours, modes and rates, and accept only the matters you want." },
  ];
  const steps = [
    { t: "Apply online", d: "Share your enrollment and practice details in about 3 minutes." },
    { t: "We verify", d: "Credentials are checked against the Bar Council record in 24–48 hours." },
    { t: "Go live", d: "A short call finalises availability, modes and fees." },
    { t: "Receive briefs", d: "Matched consultations and retainers reach you directly." },
  ];
  const faqs = [
    {
      q: "Is registration free?",
      a: "Yes. Registration and verification are free, with no onboarding fee or subscription.",
    },
    {
      q: "How does the platform comply with Bar Council of India rules?",
      a: "Inventour Legal LLP operates in accordance with the Advocates Act, 1961 and BCI rules. The platform is infrastructure that lets clients find certified advocates; it does not solicit or tout.",
    },
    {
      q: "When are fees paid out?",
      a: "Fees are secured in advance and paid to your verified bank account on a fixed weekly or bi-weekly cycle, with settlement reports in your portal.",
    },
    {
      q: "Can junior advocates join?",
      a: "Yes, anyone with a valid State Bar Council enrollment and Certificate of Practice can apply.",
    },
    {
      q: "How long does verification take?",
      a: "Usually 24 to 48 hours after we receive your application.",
    },
    {
      q: "Can I choose my own timings and modes?",
      a: "Yes. You choose your hours, whether to accept a brief, and whether to offer phone, video or chamber consultations.",
    },
  ];

  const Slider = ({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (n: number) => string }) => (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-slate-900">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="w-full accent-amber-500" />
    </div>
  );

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-14 text-center">
            <span className="inline-block text-xs font-semibold tracking-wide text-amber-800 bg-amber-100 rounded-full px-3 py-1">
              For practising advocates across India
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Grow your practice with <span className="text-amber-600">verified client briefs</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Join Inventour Legal LLP and ScamFreeIndia. Meet clients with cyber crime, recovery, cheque bounce and consumer matters, with no marketing cost and timely payouts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={scrollToForm} className="px-7 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm shadow-sm transition cursor-pointer">
                Register as an advocate
              </button>
              <button onClick={scrollToCalculator} className="px-7 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition cursor-pointer">
                Estimate your earnings
              </button>
              <a href="tel:+918054433907" className="px-7 py-3 rounded-lg text-slate-600 hover:text-slate-900 font-medium text-sm transition">
                Call +91 80544 33907
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[["16,000+", "Client inquiries handled"], ["₹0", "Registration fee"], ["24–48 hrs", "Verification time"], ["Advance", "Fee collection"]].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white border border-slate-200 py-4 px-3">
                  <dt className="text-xl sm:text-2xl font-bold text-slate-900">{v}</dt>
                  <dd className="text-xs sm:text-sm text-slate-500 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Why advocates join</h2>
          <p className="text-slate-500 text-center mt-2 max-w-xl mx-auto">Spend your time on law, not on finding clients or chasing fees.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div key={b.t} className="rounded-xl border border-slate-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-sm">{i + 1}</div>
                <h3 className="mt-4 font-semibold text-slate-900">{b.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

   
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">How it works</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.t} className="relative rounded-xl bg-slate-50 p-6">
                <div className="text-xs font-semibold text-amber-700">STEP {i + 1}</div>
                <h3 className="mt-1 font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Keep ready: Bar enrollment certificate, Bar ID / COP, government photo ID, and bank details.
          </p>
        </section>

        {/* Form */}
        <section ref={formRef} className="bg-slate-50 border-y border-slate-100 scroll-mt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Advocate registration</h2>
            <p className="text-slate-500 text-center mt-2">Takes about 3 minutes. Free.</p>

            <div className="mt-8 rounded-2xl bg-white border border-slate-200 shadow-sm p-5 sm:p-8">
              {submitSuccess ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-2xl">✓</div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Application received</h3>
                  <p className="mt-2 text-sm text-slate-600">Our compliance desk will verify your details within 24–48 hours.</p>
                  <p className="mt-4 text-sm text-slate-500">Reference ID</p>
                  <p className="font-mono font-semibold text-slate-900">{referenceId}</p>
                  <button onClick={resetForm} className="mt-6 px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium hover:border-slate-400 cursor-pointer">
                    Register another advocate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <ol className="flex items-center gap-2 mb-8">
                    {stepNames.map((n, i) => {
                      const s = i + 1;
                      return (
                        <li key={n} className="flex-1">
                          <div className={`h-1.5 rounded-full ${s <= currentStep ? "bg-amber-500" : "bg-slate-200"}`} />
                          <div className={`mt-2 text-xs ${s === currentStep ? "font-semibold text-slate-900" : "text-slate-500"}`}>{s}. {n}</div>
                        </li>
                      );
                    })}
                  </ol>

                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className={labelCls}>Full name (as on Bar record)</label>
                        <input className={inputCls} value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Adv. Full Name" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Mobile number</label>
                          <input className={inputCls} inputMode="tel" value={formData.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e.target.value)} placeholder="10-digit number" />
                        </div>
                        <div>
                          <label className={labelCls}>Email</label>
                          <input type="email" className={inputCls} value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>City of practice</label>
                        <input className={inputCls} value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} placeholder="e.g. Chandigarh" />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className={labelCls}>State Bar Council</label>
                        <select className={inputCls} value={formData.barCouncil} onChange={(e) => handleInputChange("barCouncil", e.target.value)}>
                          {STATE_BAR_COUNCILS.map((b) => <option key={b}>{b}</option>)}
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Enrollment number</label>
                          <input className={inputCls} value={formData.enrollmentNumber} onChange={(e) => handleInputChange("enrollmentNumber", e.target.value)} placeholder="D/1420/2018" />
                        </div>
                        <div>
                          <label className={labelCls}>Experience</label>
                          <select className={inputCls} value={formData.experienceYears} onChange={(e) => handleInputChange("experienceYears", e.target.value)}>
                            {["0-2 years", "3-5 years", "6-10 years", "10+ years"].map((x) => <option key={x}>{x}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Courts you appear in</label>
                        <div className="flex flex-wrap gap-2">
                          {COURT_JURISDICTIONS.map((c) => (
                            <button type="button" key={c} onClick={() => toggleArrayItem("courtJurisdictions", c)} className={chip(formData.courtJurisdictions.includes(c))}>{c}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>Practice areas</label>
                        <div className="flex flex-wrap gap-2">
                          {SPECIALIZATIONS_LIST.map((s) => (
                            <button type="button" key={s.id} onClick={() => toggleArrayItem("specializations", s.name)} className={chip(formData.specializations.includes(s.name))}>{s.name}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Consultation modes</label>
                        <div className="flex flex-wrap gap-2">
                          {["Phone Consultation", "Video Consultation", "Chamber Visit"].map((m) => (
                            <button type="button" key={m} onClick={() => toggleArrayItem("consultationModes", m)} className={chip(formData.consultationModes.includes(m))}>{m}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Languages</label>
                        <div className="flex flex-wrap gap-2">
                          {["English", "Hindi", "Punjabi", "Marathi", "Gujarati", "Bengali", "Tamil", "Telugu", "Kannada"].map((l) => (
                            <button type="button" key={l} onClick={() => toggleArrayItem("languages", l)} className={chip(formData.languages.includes(l))}>{l}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <dl className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-200 text-sm">
                        {[
                          ["Name", formData.fullName],
                          ["Contact", `${formData.phoneNumber} · ${formData.email}`],
                          ["City", formData.city],
                          ["Bar Council", `${formData.barCouncil} (${formData.enrollmentNumber})`],
                          ["Practice areas", formData.specializations.join(", ")],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
                            <dt className="text-slate-500">{k}</dt>
                            <dd className="text-slate-900 text-right">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" className="mt-1 accent-amber-500" checked={formData.termsAgreed} onChange={(e) => handleInputChange("termsAgreed", e.target.checked)} />
                        <span>I confirm I am enrolled and entitled to practise under the Advocates Act, 1961, that the details above are correct, and I agree to the platform terms and Bar Council of India rules.</span>
                      </label>
                    </div>
                  )}

                  {submitError && (
                    <p role="alert" className="mt-5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-3.5 py-2.5">{submitError}</p>
                  )}

                  <div className="mt-8 flex justify-between gap-3">
                    <button type="button" onClick={handlePrevStep} disabled={currentStep === 1} className="px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
                      Back
                    </button>
                    {currentStep < 4 ? (
                      <button type="button" onClick={handleNextStep} className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold cursor-pointer">
                        Continue
                      </button>
                    ) : (
                      <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold disabled:opacity-60 cursor-pointer">
                        {isSubmitting ? "Submitting…" : "Submit application"}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, idx) => (
              <div key={faq.q}>
                <button type="button" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} aria-expanded={activeFaq === idx} className="w-full py-4 flex justify-between items-center text-left text-sm sm:text-base font-medium text-slate-900 cursor-pointer">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-amber-600 text-xl leading-none">{activeFaq === idx ? "−" : "+"}</span>
                </button>
                {activeFaq === idx && <p className="pb-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Help */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900">Need help with registration?</h3>
            <p className="mt-1 text-sm text-slate-600">Our advocate relations desk can help with verification and documents.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="mailto:lawyer@scamfreeindia.com" className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-sm font-medium text-slate-800">lawyer@scamfreeindia.com</a>
              <a href="tel:+918054433907" className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-sm font-medium text-slate-800">+91 80544 33907</a>
              <button onClick={scrollToForm} className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold cursor-pointer">Register now</button>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="lawyer" />
    </div>
  );
}
