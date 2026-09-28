"use client"

import { useState } from "react"
import type { FormEvent } from "react"

type ChatMessage = {
    role: "assistant" | "user"
    text: string
    link?: { label: string; href: string }
}

const suggestions = [
    "I just sent money to a scammer",
    "What should I prepare for a complaint?",
    "I want to speak with a lawyer",
]

function getReply(message: string): Omit<ChatMessage, "role"> {
    const text = message.toLowerCase()

    if (/lost money|sent money|transferred|paid|upi|bank|urgent|just happened/.test(text)) {
        return {
            text: "Act quickly: call your bank or payment provider, then dial India's cyber fraud helpline at 1930 and report it on the official portal. Keep transaction references and screenshots. Recovery is not guaranteed, so avoid anyone promising to get your money back for an upfront fee.",
            link: { label: "Open the cybercrime portal", href: "https://www.cybercrime.gov.in/" },
        }
    }

    if (/complaint|documents|prepare|evidence|report/.test(text)) {
        return {
            text: "Prepare a simple timeline, transaction IDs or UTRs, payment receipts, relevant messages, phone numbers or UPI IDs, and screenshots. Do not include passwords, OTPs, full card details, or account credentials in this chat.",
            link: { label: "Read our complaint guide", href: "/services" },
        }
    }

    if (/lawyer|legal|consult/.test(text)) {
        return {
            text: "You can request a consultation to discuss your situation with a legal professional. The consultation does not guarantee recovery or a particular outcome.",
            link: { label: "Explore lawyer consultations", href: "/lawyer" },
        }
    }

    if (/human|team|contact|person|talk/.test(text)) {
        return {
            text: "You can reach the ScamFree India team through the contact page. For an active financial cyber fraud, call your bank and 1930 first; this chat is not monitored in real time.",
            link: { label: "Contact our team", href: "/contact" },
        }
    }

    return {
        text: "I can help with urgent fraud steps, complaint preparation, or finding a lawyer. Tell me which one you need, without sharing account details, passwords, or OTPs.",
    }
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [draft, setDraft] = useState("")
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            text: "Hi, I can point you to practical next steps. What do you need help with?",
        },
    ])

    function sendMessage(message: string) {
        const trimmedMessage = message.trim()
        if (!trimmedMessage) return

        setMessages((current) => [
            ...current,
            { role: "user", text: trimmedMessage },
            { role: "assistant", ...getReply(trimmedMessage) },
        ])
        setDraft("")
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        sendMessage(draft)
    }

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
            {isOpen && (
                <section
                    aria-label="ScamFree India chat guide"
                    className="flex h-[min(34rem,calc(100dvh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-brand-border bg-brand-section shadow-2xl shadow-black/40 animate-slide-up"
                >
                    <header className="flex items-center justify-between border-b border-brand-border bg-brand-card px-4 py-3">
                        <div>
                            <h2 className="text-sm font-bold text-white">ScamFree chat guide</h2>
                            <p className="mt-0.5 text-xs text-brand-secondary">Automated guidance · not monitored live</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                            className="flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-brand-secondary transition hover:bg-white/10 hover:text-white"
                        >
                            x
                        </button>
                    </header>

                    <div className="scrollbar-hidden flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
                        {messages.map((message, index) => (
                            <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[88%] rounded-md px-3 py-2.5 text-sm leading-relaxed ${message.role === "user" ? "bg-brand-blue text-white" : "bg-brand-card text-brand-primary"}`}>
                                    <p>{message.text}</p>
                                    {message.link && (
                                        <a
                                            href={message.link.href}
                                            {...(message.link.href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}
                                            className="mt-2 inline-flex font-semibold text-brand-green underline decoration-brand-green/50 underline-offset-4 hover:decoration-brand-green"
                                        >
                                            {message.link.label}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}

                        {messages.length === 1 && (
                            <div className="space-y-2 pt-1">
                                {suggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => sendMessage(suggestion)}
                                        className="block w-full rounded-md border border-brand-border px-3 py-2 text-left text-xs leading-relaxed text-brand-primary transition hover:border-brand-green/70 hover:bg-brand-card"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="flex gap-2 border-t border-brand-border p-3">
                        <label className="sr-only" htmlFor="chat-message">Your message</label>
                        <input
                            id="chat-message"
                            value={draft}
                            onChange={(event) => setDraft(event.target.value)}
                            maxLength={500}
                            placeholder="Type a question..."
                            className="min-w-0 flex-1 rounded-md border border-brand-border bg-brand-bg px-3 py-2.5 text-sm text-white placeholder:text-brand-secondary focus:border-brand-green focus:outline-none"
                        />
                        <button
                            type="submit"
                            disabled={!draft.trim()}
                            aria-label="Send message"
                            className="rounded-md bg-brand-green px-4 py-2 text-sm font-bold text-brand-bg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Send
                        </button>
                    </form>
                </section>
            )}

            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close chat guide" : "Open chat guide"}
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-brand-green/50 bg-brand-section px-4 py-3 text-sm font-bold text-white shadow-lg shadow-black/30 transition hover:border-brand-green hover:bg-brand-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
                <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-black text-brand-bg">?</span>
                Chat
            </button>
        </div>
    )
}