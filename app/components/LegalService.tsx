import React from "react";
import Link from "next/link";
import {
    Scale,
    FileText,
    BriefcaseBusiness,
    ShieldCheck,
    Landmark,
    Users,
    Building2,
    Gavel,
    ArrowUpRight,
    TrendingUp,
    ShoppingBag,
    Briefcase,
    ReceiptText,
    Copyright,
    Calculator,
    Globe,
    GraduationCap,
    Stethoscope,
    Car,
    Wallet,
    Handshake,
    ScrollText,
    Leaf,
    CreditCard,
    MessageSquare,
    HeartHandshake,
    HandHelping,
    House,
    FolderOpen,
} from "lucide-react";

const legalServices = [
    {
        title: "Family & Divorce Law",
        slug: "family-divorce-law",
        description:
            "Divorce, mutual consent divorce, child custody, alimony, maintenance, domestic violence, marriage disputes, adoption, and guardianship.",
        icon: Users,
    },
    {
        title: "Property & Real Estate",
        slug: "property-real-estate",
        description:
            "Property disputes, land ownership, partition suits, inheritance, mutation, tenancy, eviction, builder disputes, and real estate transactions.",
        icon: Building2,
    },
    {
        title: "Criminal Law",
        slug: "criminal-law",
        description:
            "Criminal defence, bail applications, FIR-related matters, criminal complaints, assault, theft, cheating, fraud, and criminal proceedings.",
        icon: Gavel,
    },
    {
        title: "Civil Disputes",
        slug: "civil-disputes",
        description:
            "Money recovery, breach of contract, damages, injunctions, civil suits, disputes between individuals, and other civil claims.",
        icon: Scale,
    },
    {
        title: "Legal Documentation",
        slug: "legal-documentation",
        description:
            "Legal notices, agreements, contracts, affidavits, declarations, deeds, powers of attorney, and document drafting and review.",
        icon: FileText,
    },
    {
        title: "Corporate & Business Law",
        slug: "corporate-business-law",
        description:
            "Company disputes, shareholder conflicts, partnership disputes, business contracts, commercial litigation, compliance, and corporate governance.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Banking & Financial Law",
        slug: "banking-financial-law",
        description:
            "Banking disputes, unauthorized transactions, loan disputes, incorrect charges, cheque-related matters, debt recovery, and financial misconduct.",
        icon: Landmark,
    },
    {
        title: "Cybercrime & Online Fraud",
        slug: "cybercrime-online-fraud",
        description:
            "UPI fraud, internet banking fraud, phishing, identity theft, social media scams, online shopping fraud, digital payment fraud, and cybercrime complaints.",
        icon: ShieldCheck,
    },
    {
        title: "Stock Market & Investment Disputes",
        slug: "stock-market-investment-disputes",
        description:
            "Stock market fraud, unauthorized trading, broker disputes, investment scams, portfolio management disputes, and SEBI-related complaints.",
        icon: TrendingUp,
    },
    {
        title: "Consumer Protection Law",
        slug: "consumer-protection-law",
        description:
            "Defective products, deficient services, misleading advertisements, unfair trade practices, e-commerce disputes, and consumer commission complaints.",
        icon: ShoppingBag,
    },
    {
        title: "Employment & Labour Law",
        slug: "employment-labour-law",
        description:
            "Unpaid salaries, wrongful termination, workplace harassment, employment contracts, gratuity, provident fund disputes, and labour claims.",
        icon: Briefcase,
    },
    {
        title: "Cheque Bounce Cases",
        slug: "cheque-bounce-cases",
        description:
            "Dishonoured cheques, legal notices, proceedings under Section 138 of the Negotiable Instruments Act, and cheque-related disputes.",
        icon: ReceiptText,
    },
    {
        title: "Intellectual Property Law",
        slug: "intellectual-property-law",
        description:
            "Trademark registration and disputes, copyright infringement, patents, brand protection, licensing, and trade secret matters.",
        icon: Copyright,
    },
    {
        title: "Taxation & GST Law",
        slug: "taxation-gst-law",
        description:
            "Income tax disputes, GST notices, tax assessments, refunds, penalties, appeals, and tax compliance matters.",
        icon: Calculator,
    },
    {
        title: "Immigration & Citizenship",
        slug: "immigration-citizenship",
        description:
            "Visa issues, immigration documentation, citizenship matters, passport disputes, OCI applications, and related legal proceedings.",
        icon: Globe,
    },
    {
        title: "Constitutional & Writ Matters",
        slug: "constitutional-writ-matters",
        description:
            "Fundamental rights, writ petitions, unlawful administrative actions, public authority disputes, and constitutional remedies.",
        icon: Landmark,
    },
    {
        title: "Education Law",
        slug: "education-law",
        description:
            "University disputes, admission issues, examination disputes, unfair academic decisions, education refunds, and institutional grievances.",
        icon: GraduationCap,
    },
    {
        title: "Medical & Healthcare Law",
        slug: "medical-healthcare-law",
        description:
            "Medical negligence claims, hospital disputes, informed consent issues, healthcare service complaints, and medical compensation matters.",
        icon: Stethoscope,
    },
    {
        title: "Insurance Claims & Disputes",
        slug: "insurance-claims-disputes",
        description:
            "Rejected insurance claims, delayed settlements, life insurance disputes, health insurance claims, motor insurance, and policy interpretation.",
        icon: ShieldCheck,
    },
    {
        title: "Motor Accident & Traffic Law",
        slug: "motor-accident-traffic-law",
        description:
            "Motor accident compensation, insurance claims, traffic challans, driving licence disputes, and motor vehicle accident claims.",
        icon: Car,
    },
    {
        title: "Debt Recovery & Insolvency",
        slug: "debt-recovery-insolvency",
        description:
            "Outstanding payments, loan recovery, creditor disputes, insolvency proceedings, bankruptcy-related matters, and restructuring.",
        icon: Wallet,
    },
    {
        title: "Arbitration & Mediation",
        slug: "arbitration-mediation",
        description:
            "Commercial arbitration, contractual disputes, mediation, settlement negotiations, and alternative dispute resolution.",
        icon: Handshake,
    },
    {
        title: "Government & Administrative Law",
        slug: "government-administrative-law",
        description:
            "Government department disputes, service matters, administrative orders, public grievances, licences, permits, and regulatory issues.",
        icon: Landmark,
    },
    {
        title: "Marriage, Inheritance & Succession",
        slug: "marriage-inheritance-succession",
        description:
            "Wills, probate, succession certificates, inheritance disputes, legal heir matters, estate administration, and family property claims.",
        icon: ScrollText,
    },
    {
        title: "Environmental Law",
        slug: "environmental-law",  
        description:
            "Pollution complaints, environmental damage, waste management violations, environmental clearances, and regulatory disputes.",
        icon: Leaf,
    },
    {
        title: "Consumer Finance & Loan Disputes",
        slug: "consumer-finance-loan-disputes",
        description:
            "Personal loan disputes, credit card issues, recovery agent harassment, loan settlement disputes, and credit report errors.",
        icon: CreditCard,
    },
    {
        title: "Defamation & Reputation Protection",
        slug: "defamation-reputation-protection",
        description:
            "Defamation claims, false allegations, online reputation disputes, harmful publications, and reputation-related legal remedies.",
        icon: MessageSquare,
    },
    {
        title: "Women & Child Rights",
        slug: "women-child-rights",
        description:
            "Domestic abuse, workplace harassment, child protection, maintenance, custody, and legal remedies for violations of rights.",
        icon: HeartHandshake,
    },
    {
        title: "Senior Citizen Legal Matters",
        slug: "senior-citizen-legal-matters",
        description:
            "Maintenance claims, property protection, inheritance disputes, elder abuse, and senior citizen welfare matters.",
        icon: HandHelping,
    },
    {
        title: "Landlord & Tenant Disputes",
        slug: "landlord-tenant-disputes",  
        description:
            "Rent disputes, security deposit recovery, eviction, lease violations, rental agreements, and landlord-tenant conflicts.",
        icon: House,
    },
    {
        title: "Public Interest & Human Rights",
        slug: "public-interest-human-rights",
        description:
            "Human rights violations, public interest litigation, unlawful detention concerns, discrimination claims, and access to legal remedies.",
        icon: Scale,
    },
    {
        title: "Other Legal Matters",
        slug: "other-legal-matters",
        description:
            "Other legal issues, case-specific consultations, procedural guidance, and referrals to an appropriate legal professional.",
        icon: FolderOpen,
    },
];


interface LegalServiceProps {
    showAll?: boolean;
    limit?: number;
}

export default function LegalService({
    showAll = false,
    limit = 6,
}: LegalServiceProps = {}) {
    const displayedServices = showAll ? legalServices : legalServices.slice(0, limit);

    return (
        <section className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A6B08]">
                        <ShieldCheck size={16} />
                        Confidential Legal Consultation
                    </div>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10264B] sm:text-4xl lg:text-5xl">
                        Consult a Lawyer Online
                        <span className="mt-2 block text-brand-green">
                            Legal Support for Every Need
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Get legal guidance for personal, family, property,
                        business, financial, and other legal matters.
                        Explore your options and connect with a suitable
                        legal professional.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedServices.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                href={`/LegalService/${service.slug}/`}
                                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl sm:p-7 text-left block"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10264B] text-[#F5C451] transition-colors duration-300 group-hover:bg-[#D9A52E] group-hover:text-[#10264B]">
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <span className="text-sm font-semibold text-slate-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#10264B] transition-colors group-hover:text-amber-600">
                                    {service.title}
                                </h3>

                                <p className="mt-3 flex-grow text-sm leading-6 text-slate-600">
                                    {service.description}
                                </p>

                                <div
                                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-[#10264B] transition-all duration-200 group-hover:bg-amber-300 group-hover:shadow-md"
                                    aria-label={`Enquire about ${service.title}`}
                                >
                                    <span>Consult Now</span>
                                    <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {!showAll && (
                    <div className="mt-8 rounded-2xl mx-auto p-7 text-center sm:p-10">
                        <Link
                            href="/LegalService/"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 font-bold text-brand-bg transition hover:bg-brand-green/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#10264B]"
                        >
                            Explore All Legal Services
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
