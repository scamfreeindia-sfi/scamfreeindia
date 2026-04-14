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
        whatsapp: `https://wa.me/918054433907?text=${encodeURIComponent(`I lost money in an online scam, please help me. (Reference: ${fullUrl})`)}`,
        instagram: `https://www.instagram.com/scamfreeindia.co/`,
        twitter: `https://x.com/AnkitSh906`,
        youtube: `https://www.youtube.com/@ScamFreeInd`,

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
            {/* Instagram */}
            <a
                href={shareLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-[#E4405F] transition-colors group"
                aria-label="Visit Instagram"
            >
                <svg
                    className="w-5 h-5 group-hover:text-[#E4405F] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5c2.071 0 3.75 1.679 3.75 3.75v8.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C5.679 20 4 18.321 4 16.25v-8.5C4 5.679 5.679 4 7.75 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
            </a>

            {/* X (Twitter) */}
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-primary transition-colors group"
                aria-label="Share on X"
            >
                <svg className="w-5 h-5 group-hover:text-brand-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.009 3.827H5.045z" />
                </svg>
            </a>
            {/* Youtube */}
           <a
                href={shareLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-primary transition-colors group"
                aria-label="Visit Youtube"
                >
                <svg
                    className="w-5 h-5 group-hover:text-brand-primary transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M23.498 6.186a2.99 2.99 0 00-2.104-2.118C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.394.568A2.99 2.99 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.99 2.99 0 002.104 2.118C4.49 20.5 12 20.5 12 20.5s7.51 0 9.394-.568a2.99 2.99 0 002.104-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                </svg>
                </a>


        </div>
    )
}