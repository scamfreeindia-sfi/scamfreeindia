"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import Image from "next/image"

const BANK_DETAILS = {
    bankName: "IndusInd Bank",
    ifscCode: "INDB0001730",
    accountNumber: "258054021619",
    accountName: "INVENTOUR LEGAL LLP",
    accountType: "Current Account",
}

export default function PaymentPage() {
    const [copiedField, setCopiedField] = useState<string | null>(null)
    const [showQrModal, setShowQrModal] = useState(false)

    const copyToClipboard = async (text: string, field: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedField(field)
            window.setTimeout(() => {
                setCopiedField((current) => (current === field ? null : current))
            }, 2000)
        } catch {
            const textArea = document.createElement("textarea")
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            setCopiedField(field)
            window.setTimeout(() => {
                setCopiedField((current) => (current === field ? null : current))
            }, 2000)
        }
    }

    const handlePrintQr = () => {
        const printWindow = window.open("", "_blank")
        if (!printWindow) {
            window.print()
            return
        }
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Payment QR Code - ${BANK_DETAILS.accountName}</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        margin: 0;
                        padding: 20px;
                        background: #ffffff;
                        color: #0f172a;
                    }
                    .card {
                        border: 2px dashed #94a3b8;
                        border-radius: 24px;
                        padding: 32px 24px;
                        text-align: center;
                        max-width: 360px;
                        width: 100%;
                    }
                    h2 { margin: 0 0 6px; font-size: 20px; font-weight: 700; color: #0f172a; }
                    p.sub { margin: 0 0 20px; font-size: 13px; color: #64748b; }
                    img { width: 220px; height: 220px; object-fit: contain; }
                    .footer { margin-top: 20px; font-size: 11px; color: #475569; line-height: 1.5; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>${BANK_DETAILS.accountName}</h2>
                    <p class="sub">Scan & pay with any UPI App</p>
                    <img src="/qr-code-clean.png" alt="Payment QR Code" />
                    <div class="footer">
                        <strong>Supported on:</strong> PhonePe • Google Pay • Paytm • BHIM<br />
                        <strong>Bank:</strong> ${BANK_DETAILS.bankName} | <strong>A/C:</strong> ${BANK_DETAILS.accountNumber}
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `)
        printWindow.document.close()
    }

    const handleDownloadQr = () => {
        const link = document.createElement("a")
        link.href = "/qr-code-clean.png"
        link.download = "inventour-legal-upi-qr.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <main className="min-h-screen bg-brand-bg text-brand-primary">
            <Header />

            <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Page Intro / Badge */}
                <div className="mb-8 mt-15 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Official Verified Payment Methods
                    </div>
                    <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Official Bank &amp; Payment Details
                    </h1>
                    <p className="mt-1 text-xs text-brand-secondary sm:text-sm">
                        Please ensure all consultation fees are remitted exclusively to the official account of{" "}
                        <span className="font-semibold text-white">Inventour Legal LLP</span>{" "}
                        <span className="text-amber-400 font-mono text-xs">(LLPIN: ACD-2916)</span>.
                    </p>
                </div>

                {/* White Container matching user design */}
                <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xl sm:p-10 lg:p-12 text-slate-800">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                        
                        {/* LEFT COLUMN: UPI Scan & Pay */}
                        <div className="flex flex-col">
                            {/* Title with Instant Pill */}
                            <div className="flex items-center gap-2.5 mb-5">
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                                    UPI — Scan &amp; Pay
                                </h2>
                                <span className="rounded-full bg-[#fef9c3] px-2.5 py-0.5 text-xs font-semibold text-[#854d0e] border border-[#fef08a]">
                                    Instant
                                </span>
                            </div>

                            {/* Small upper label */}
                            <p className="text-center text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
                                SCAN &amp; PAY WITH ANY UPI APP
                            </p>

                            {/* Dashed Box Container */}
                            <div className="relative mx-auto w-full max-w-sm rounded-3xl border-2 border-dashed border-slate-300 bg-white p-6 text-center shadow-xs transition-shadow hover:shadow-md">
                                <h3 className="text-base font-bold text-slate-800 tracking-tight">
                                    {BANK_DETAILS.accountName}
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5 mb-4 font-medium">
                                    Scan &amp; pay
                                </p>

                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowQrModal(true)}
                                        className="group relative cursor-zoom-in rounded-xl p-1 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                        title="Click to expand QR Code"
                                    >
                                        <Image
                                            src="/qr-code-clean.png"
                                            alt="Scan & Pay UPI QR Code"
                                            width={240}
                                            height={240}
                                            className="h-52 w-52 sm:h-56 sm:w-56 object-contain"
                                            priority
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons: Print QR & Download QR */}
                            <div className="mt-4 flex items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={handlePrintQr}
                                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#ceead6] bg-[#e6f4ea] px-4 py-1.5 text-xs font-semibold text-[#137333] shadow-xs transition-colors hover:bg-[#d4edd9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                >
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    Print QR
                                </button>

                                <button
                                    type="button"
                                    onClick={handleDownloadQr}
                                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#ceead6] bg-[#e6f4ea] px-4 py-1.5 text-xs font-semibold text-[#137333] shadow-xs transition-colors hover:bg-[#d4edd9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                >
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download QR
                                </button>
                            </div>

                            {/* Bullet points */}
                            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-600">
                                <li className="flex items-start gap-2.5">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                    <span>
                                        Supported on <strong className="font-semibold text-slate-800">PhonePe, Google Pay, Paytm, BHIM</strong> and all UPI apps.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                    <span>
                                        Please verify beneficiary name as <strong className="font-semibold text-slate-800">{BANK_DETAILS.accountName}</strong>.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT COLUMN: Bank Transfer */}
                        <div className="flex flex-col">
                            {/* Header */}
                            <div className="mb-5">
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                                    Bank Transfer — NEFT / IMPS / RTGS
                                </h2>
                            </div>

                            {/* Details Table */}
                            <div className="divide-y divide-dotted divide-slate-200 border-t border-b border-dotted border-slate-200">
                                {/* Bank Name */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1.5">
                                    <span className="w-36 sm:w-44 shrink-0 text-sm font-medium text-slate-500">
                                        Bank Name:
                                    </span>
                                    <span className="text-sm sm:text-base font-semibold text-slate-800 sm:text-right">
                                        {BANK_DETAILS.bankName}
                                    </span>
                                </div>

                                {/* IFSC Code */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1.5">
                                    <span className="w-36 sm:w-44 shrink-0 text-sm font-medium text-slate-500">
                                        IFSC Code:
                                    </span>
                                    <div className="flex items-center gap-2 sm:justify-end">
                                        <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-900">
                                            {BANK_DETAILS.ifscCode}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, "ifsc")}
                                            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                                            aria-label="Copy IFSC Code"
                                        >
                                            {copiedField === "ifsc" ? (
                                                <span className="font-semibold text-emerald-600">✓ Copied</span>
                                            ) : (
                                                "Copy"
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Account Number */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1.5">
                                    <span className="w-36 sm:w-44 shrink-0 text-sm font-medium text-slate-500">
                                        Account Number:
                                    </span>
                                    <div className="flex items-center gap-2 sm:justify-end">
                                        <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-900">
                                            {BANK_DETAILS.accountNumber}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, "account")}
                                            className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                                            aria-label="Copy Account Number"
                                        >
                                            {copiedField === "account" ? (
                                                <span className="font-semibold text-emerald-600">✓ Copied</span>
                                            ) : (
                                                "Copy"
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Account Name */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-1.5">
                                    <span className="w-36 sm:w-44 shrink-0 text-sm font-medium text-slate-500">
                                        Account Name:
                                    </span>
                                    <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-900 sm:text-right">
                                        {BANK_DETAILS.accountName}
                                    </span>
                                </div>
                            </div>

                            {/* Bullet points */}
                            <ul className="mt-8 space-y-2.5 text-xs sm:text-sm text-slate-600">
                                <li className="flex items-start gap-2.5">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                    <span>
                                        Use your <strong className="font-semibold text-slate-800">registered</strong> mobile/email in the payment reference.
                                    </span>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional Zoom Modal for QR code */}
            {showQrModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs"
                    onClick={() => setShowQrModal(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative mx-auto w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setShowQrModal(false)}
                            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-slate-900">{BANK_DETAILS.accountName}</h3>
                            <p className="text-xs text-slate-500 mt-0.5 mb-4">Scan &amp; pay via any UPI app</p>
                            <div className="flex justify-center p-2">
                                <Image
                                    src="/qr-code-clean.png"
                                    alt="UPI QR Code"
                                    width={280}
                                    height={280}
                                    className="h-64 w-64 object-contain"
                                />
                            </div>
                            <p className="mt-3 text-xs text-slate-500">
                                PhonePe • Google Pay • Paytm • BHIM
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    )
}