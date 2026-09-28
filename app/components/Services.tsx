"use client"

export default function Services() {
    return (
        <section className="px-6 md:px-16 py-16 border-t border-brand-border bg-brand-section text-brand-secondary text-sm">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-brand-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4">Legal Consultation</h3>
                        <p>Get expert legal advice from our verified lawyers to navigate your case effectively.</p>
                    </div>
                    <div className="bg-brand-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4">Case Filing Assistance</h3>
                        <p>We assist you in filing complaints and legal documents with the appropriate authorities.</p>
                    </div>
                    <div className="bg-brand-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4">Awareness & Education</h3>
                        <p>Learn about common scams and how to protect yourself through our educational resources.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}
