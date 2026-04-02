"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, useTransition } from "react"

export default function BlogSearch() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isPending, startTransition] = useTransition()
    const [query, setQuery] = useState(searchParams.get("search") || "")

    useEffect(() => {
        const currentSearch = searchParams.get("search") || "";
        if (query === currentSearch) return;

        const params = new URLSearchParams(searchParams)
        if (query) {
            params.set("search", query)
        } else {
            params.delete("search")
        }
        
        const timeoutId = setTimeout(() => {
            startTransition(() => {
                router.push(`/blog?${params.toString()}`, { scroll: false })
            })
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [query, router, searchParams])

    return (
        <div className="w-full max-w-2xl relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-500">
                {isPending ? (
                    <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
                ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                )}
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search for Scams...'
                className="w-full bg-[#E5E7EB] text-gray-900 px-14 py-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#FFA500]/20 transition-all placeholder:text-gray-500 shadow-xl"
            />
            <div className="absolute inset-y-0 right-5 flex items-center text-gray-900">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5h18M6.75 9h10.5M10.5 13.5h3" />
                </svg>
            </div>
        </div>
    )
}
