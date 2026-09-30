"use client";

export default function CaseStudy() {
    return (
        <section
            id="case-studies"
            aria-labelledby="case-study-section"
            className="relative max-w-7xl mx-auto overflow-hidden px-4 py-20 sm:px-6 md:px-12 lg:px-16"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl" />

            {/* Section Header */}
            <div className="mx-auto mb-14 max-w-4xl text-center">
                <div className="mb-4 inline-flex items-center rounded-full border border-brand-border bg-brand-card/60 px-4 py-2">
                    <span className="mr-2 h-2 w-2 rounded-full bg-brand-green" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">
                        Our Casework
                    </span>
                </div>

                <h2
                    id="case-study-section"
                    className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
                >
                    Client Cases &{" "}
                    <span className="text-brand-blue">Outcomes</span>
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-brand-secondary sm:text-lg">
                    When digital fraud occurs, victims often struggle to understand
                    what steps they can take next. We provide structured documentation,
                    complaint-filing and procedural support to help clients pursue
                    appropriate remedies through the relevant authorities.
                </p>
              
            </div>

            {/* Statistics */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="group rounded-2xl border border-brand-border bg-brand-card/80 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-blue/40">
                    <div className="mb-2 text-3xl font-black text-white sm:text-4xl">
                        ₹1.85+ Cr
                    </div>

                    <div className="text-sm font-medium text-brand-secondary">
                        Disputed Funds Assisted With
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group rounded-2xl border border-brand-border bg-brand-card/80 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-green/40">
                    <div className="mb-2 text-3xl font-black text-brand-green sm:text-4xl">
                        680+
                    </div>

                    <div className="text-sm font-medium text-brand-secondary">
                        Cases & Matters Assisted With
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group rounded-2xl border border-brand-border bg-brand-card/80 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-blue/40 sm:col-span-2 lg:col-span-1">
                    <div className="mb-2 text-3xl font-black text-brand-blue sm:text-4xl">
                        91.8%
                    </div>

                    <div className="text-sm font-medium text-brand-secondary">
                        Matters With Documented Bank-Lien Progress
                    </div>
                </div>
            </div>          
        </section>
    );
}