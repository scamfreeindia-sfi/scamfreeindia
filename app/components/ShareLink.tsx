"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShareLink() {
    const pathname = usePathname();
    const [fullUrl, setFullUrl] = useState("");

    useEffect(() => {
        // Ensure this runs only on the client
        setFullUrl(window.location.origin + pathname);
    }, [pathname]);

    const title = "Check this out on ScamFreeIndia";

    const shareLinks = {
        // twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
        // facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
        whatsapp: `https://wa.me/918054433907?text=${encodeURIComponent(`I lost money in an online scam, please help me. (Reference: ${fullUrl})`)}`,
    };

    if (!fullUrl) return null;

    return (
        <div className="flex items-center gap-2">
            <p className="text-sm text-brand-secondary mr-2 font-bold uppercase tracking-wider">Share</p>
            
            {/* WhatsApp */}
            <a 
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-[#25D366] transition-colors group"
                aria-label="Contact Support on WhatsApp"
            >
                <svg className="w-5 h-5 group-hover:text-[#25D366] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            {/* X (Twitter) */}
            {/* <a 
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-primary transition-colors group"
                aria-label="Share on X"
            >
                <svg className="w-5 h-5 group-hover:text-brand-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.009 3.827H5.045z" />
                </svg>
            </a> */}

            {/* Facebook */}
            {/* <a 
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-[#1877F2] transition-colors group"
                aria-label="Share on Facebook"
            >
                <svg className="w-5 h-5 group-hover:text-[#1877F2] transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
            </a> */}
        </div>
    )
}