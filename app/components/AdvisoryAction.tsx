"use client";

import { useState } from "react";
import LeadPopup from "./LeadPopup";

export default function AdvisoryAction() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="w-full inline-flex justify-center py-4 bg-brand-blue text-white font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-blue/20"
            >
                TALK TO AN EXPERT
            </button>

            <LeadPopup open={open} setOpen={setOpen} />
        </>
    );
}
