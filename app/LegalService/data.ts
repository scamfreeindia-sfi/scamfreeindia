export interface LegalSubService {
    title: string;
    description: string;
    icon?: string;
    tag?: string;
}

export interface LegalFAQ {
    question: string;
    answer: string;
}

export interface LegalServiceDetail {
    title: string;
    slug: string;
    subtitle: string;
    tagline: string;
    shortDescription: string;
    heroSummary: string;
    statutoryActs: string[];
    subServices: LegalSubService[];
    keyIssues: string[];
    processSteps: { step: string; title: string; description: string }[];
    whyChoose: { title: string; desc: string }[];
    faqs: LegalFAQ[];
    metaDescription: string;
}

export const LEGAL_SERVICES_DATA: LegalServiceDetail[] = [
    {
        title: "Property & Real Estate Law",
        slug: "property-real-estate",
        subtitle: "India's Trusted Property Advocates for Disputes, RERA, Title Search & Partition",
        tagline: "Protect your high-value real estate investments with verified High Court & Supreme Court advocates.",
        shortDescription: "Property disputes, land ownership, partition suits, inheritance, mutation, tenancy, eviction, builder disputes, and real estate transactions.",
        heroSummary: "Real estate transactions and land disputes involve significant financial investments and complex land revenue documentation. Whether you are battling builder delays under RERA, resolving ancestral property partition, verifying title deeds before purchase, or handling unlawful encroachment, our specialist property advocates provide strategic, end-to-end legal representation across India.",
        statutoryActs: [
            "Transfer of Property Act, 1882",
            "Real Estate (Regulation and Development) Act, 2016 (RERA)",
            "Registration Act, 1908",
            "Specific Relief Act, 1963",
            "Indian Stamp Act, 1899",
            "Code of Civil Procedure, 1908 (CPC)",
            "State Land Revenue & Tenancy Enactments"
        ],
        subServices: [
            {
                title: "RERA Complaints & Builder Delays",
                description: "Filing and pursuing complaints before State RERA Authorities and Appellate Tribunals for delayed possession, refund with interest, structural flaws, and builder contractual violations.",
                tag: "High Priority"
            },
            {
                title: "Title Verification & Legal Due Diligence",
                description: "Comprehensive 30-year title search, encumbrance check, mutation verification, local municipality approval verification, and seller authority audit before property purchase.",
                tag: "Preventive Care"
            },
            {
                title: "Ancestral Property & Partition Suits",
                description: "Legal representation in family property division, succession certificate claims, partition suits in civil courts, co-owner share disputes, and ancestral inheritance claims.",
                tag: "Family Property"
            },
            {
                title: "Encroachment, Boundary & Possession Suits",
                description: "Filing civil suits for recovery of possession, permanent injunctions against illegal trespassers, boundary demarcation, and eviction of unauthorized occupants.",
                tag: "Litigation"
            },
            {
                title: "Landlord-Tenant & Commercial Eviction",
                description: "Drafting bulletproof lease agreements, legal notices for rent default, eviction proceedings under state rent control acts, and security deposit recovery.",
                tag: "Tenancy"
            },
            {
                title: "Property Documentation & Conveyancing",
                description: "Drafting and vetting of Sale Deeds, Gift Deeds, Relinquishment Deeds, Power of Attorney (GPA/SPA), Builder-Buyer Agreements, and Joint Development Agreements (JDA).",
                tag: "Documentation"
            }
        ],
        keyIssues: [
            "Builders failing to deliver possession of flats within the promised timeline and refusing interest or refund.",
            "Buying disputed or mortgaged land without prior notice of ongoing litigation or bank charges.",
            "Denial of legal shares to daughters or coparceners in ancestral property division.",
            "Illegal encroachment by neighbours or land mafias on vacant plots and agricultural farmland.",
            "Forged registry papers, duplicate sale deeds, or impersonation during property registration.",
            "Tenants refusing to vacate commercial or residential properties after lease expiry."
        ],
        processSteps: [
            {
                step: "01",
                title: "Consultation & Document Audit",
                description: "Submit your land records, sale deeds, or dispute details for an immediate legal evaluation by a senior property advocate."
            },
            {
                step: "02",
                title: "Legal Strategy & Notice Formulation",
                description: "We formulate a tailored action plan—serving formal legal notices, drafting RERA complaints, or preparing injunction pleadings."
            },
            {
                step: "03",
                title: "Tribunal & Court Representation",
                description: "Representation before RERA tribunals, Sub-Registrar offices, Civil Courts, High Courts, or through fast-track mediation."
            },
            {
                step: "04",
                title: "Resolution & Enforced Execution",
                description: "Securing possession orders, compensation recovery, title clearance certificates, or final decree execution."
            }
        ],
        whyChoose: [
            {
                title: "Pan-India Court Reach",
                desc: "Experienced advocates active across Civil Courts, RERA authorities, High Courts, and the Supreme Court of India."
            },
            {
                title: "Strict 100% Confidentiality",
                desc: "All sensitive land deeds, monetary transactions, and family disputes are protected under client-attorney privilege."
            },
            {
                title: "Deep Due Diligence Expertise",
                desc: "Rigorous scrutiny of encumbrance certificates, 7/12 extracts, Jamabandis, and municipal master plan compliance."
            },
            {
                title: "Transparent, Fixed Pricing",
                desc: "Clear fee structure with no hidden retainer costs or unexpected surprises throughout the legal process."
            }
        ],
        faqs: [
            {
                question: "What legal remedy do I have if a builder delays flat possession beyond the agreement date?",
                answer: "Under Section 18 of the RERA Act 2016, you have the legal right to claim a full refund of your paid amount along with prescribed interest, or claim monthly delay compensation till actual possession is delivered. You can file a formal complaint before the State RERA authority or Adjudicating Officer."
            },
            {
                question: "Why is a 30-year title verification necessary before buying property?",
                answer: "A 30-year title verification traces the chain of ownership, ensuring the seller has an undisputed, clear, marketable title without pending bank mortgages, government acquisitions, attached court liens, or minor ownership claims."
            },
            {
                question: "Can daughters claim an equal share in ancestral property in India?",
                answer: "Yes. Following the Supreme Court's landmark ruling in Vineeta Sharma v. Rakesh Sharma (2020), daughters have equal coparcenary birthrights in ancestral Hindu Undivided Family (HUF) property under the Hindu Succession (Amendment) Act, 2005, irrespective of whether the father was alive in 2005."
            },
            {
                question: "How long does a civil suit for property partition typically take?",
                answer: "While regular civil partition suits can take 1 to 3 years depending on court backlog, our advocates frequently leverage court-annexed mediation and pre-litigation settlement negotiations to achieve family partition decrees in a much faster timeframe."
            },
            {
                question: "What is an interim injunction and how does it stop unauthorized construction?",
                answer: "Under Order 39, Rules 1 & 2 of the Code of Civil Procedure (CPC), an interim temporary injunction order restrains the opposing party from alienating, selling, transferring, or continuing unauthorized construction on the disputed property pending final court judgment."
            },
            {
                question: "Can NRI property owners get legal help for land management and eviction in India?",
                answer: "Yes, we represent NRIs across the globe. Through a properly notarized and apostilled Special Power of Attorney (SPA), our advocates can represent you in Indian courts, handle property verification, manage tenant disputes, and oversee transactions without requiring your frequent physical presence."
            }
        ],
        metaDescription: "Consult verified online property lawyers in India. Expert legal assistance for RERA builder disputes, title verification, partition suits, illegal encroachment & registration."
    },
    {
        title: "Family & Divorce Law",
        slug: "family-divorce-law",
        subtitle: "Compassionate, Dispassionate & Strategic Legal Representation for Matrimonial Matters",
        tagline: "Resolve divorce, custody, and maintenance issues with dignity and maximum legal protection.",
        shortDescription: "Divorce, mutual consent divorce, child custody, alimony, maintenance, domestic violence, marriage disputes, adoption, and guardianship.",
        heroSummary: "Family and matrimonial disputes are sensitive matters that require both high emotional intelligence and sharp legal precision. Our dedicated family advocates handle mutual consent divorce, contested divorce proceedings, child custody battles, domestic violence protection, and fair alimony settlement while safeguarding your legal and financial rights.",
        statutoryActs: [
            "Hindu Marriage Act, 1955",
            "Special Marriage Act, 1954",
            "Protection of Women from Domestic Violence Act, 2005",
            "Code of Criminal Procedure / BNSS Section 144 (Maintenance)",
            "Guardians and Wards Act, 1890",
            "Family Courts Act, 1984"
        ],
        subServices: [
            {
                title: "Mutual Consent Divorce (Fast Track)",
                description: "Hassle-free filing under Section 13B of the Hindu Marriage Act with statutory waiver petitions for the 6-month cooling period where applicable.",
                tag: "Fast Track"
            },
            {
                title: "Contested Divorce Litigation",
                description: "Strong representation on grounds of cruelty, desertion, adultery, mental illness, or irretrievable breakdown of marriage.",
                tag: "Litigation"
            },
            {
                title: "Child Custody & Visitation Rights",
                description: "Securing interim custody, permanent legal guardianship, fair visitation schedules, and school vacation access focusing on the child's welfare.",
                tag: "Child Welfare"
            },
            {
                title: "Alimony & Permanent Maintenance",
                description: "Strategic asset assessment and filing under Section 24 & 25 HMA and BNSS/CrPC 125 for fair maintenance and financial security.",
                tag: "Financial Rights"
            },
            {
                title: "Domestic Violence & Restraining Orders",
                description: "Filing urgent interim relief applications for right of residence, protection orders, and monetary relief under the PWDV Act.",
                tag: "Urgent Relief"
            },
            {
                title: "Restitution of Conjugal Rights & Mediation",
                description: "Constructive mediation and legal actions under Section 9 HMA to preserve marital relationships whenever amicable reconciliation is possible.",
                tag: "Mediation"
            }
        ],
        keyIssues: [
            "Prolonged marital disputes with refusal of mutual separation.",
            "Denial of fair maintenance and hiding of true financial income/assets.",
            "Denial of access or sudden alienation from minor children.",
            "False or retaliatory domestic violence and criminal harassment complaints.",
            "Cross-border NRI matrimonial disputes and foreign court decrees."
        ],
        processSteps: [
            {
                step: "01",
                title: "Confidential Consultation",
                description: "Private, non-judgmental discussion to understand your circumstances, child priorities, and financial interests."
            },
            {
                step: "02",
                title: "Settlement Mediation / Notice",
                description: "Drafting structured Memorandum of Understanding (MoU) for mutual divorce or serving a formal legal notice."
            },
            {
                step: "03",
                title: "Family Court Filing",
                description: "Filing petitions with complete supporting affidavits before the competent Principal Family Court."
            },
            {
                step: "04",
                title: "Decree Execution & Settlement",
                description: "Recording statements, securing mutual consent decree, and ensuring absolute compliance with financial settlements."
            }
        ],
        whyChoose: [
            {
                title: "Compassionate & Discreet",
                desc: "High sensitivity toward family dignity with complete client privacy and encrypted communications."
            },
            {
                title: "Focus on Child Welfare",
                desc: "Prioritizing stable emotional, financial, and educational environments for children during matrimonial transitions."
            },
            {
                title: "Strong Financial Safeguards",
                desc: "Expert legal forensic scrutiny to prevent undervaluation of marital assets and guarantee equitable alimony."
            },
            {
                title: "Speedy Resolution Focus",
                desc: "Active facilitation of court-recognized mediation to avoid unnecessary multi-year litigation."
            }
        ],
        faqs: [
            {
                question: "How long does a Mutual Consent Divorce take in India?",
                answer: "Under Section 13B, there is typically a 6-month statutory waiting period between First and Second Motion. However, the Supreme Court has ruled that Family Courts can waive this cooling-off period if both parties have settled all alimony, property, and child custody terms."
            },
            {
                question: "How is maintenance and alimony calculated by Indian courts?",
                answer: "Courts evaluate the standard of living enjoyed during the marriage, the independent income and earning capability of both spouses, liabilities, medical needs, and child education expenses. Benchmark guidelines typically allocate 20% to 25% of the paying spouse's net income for maintenance."
            },
            {
                question: "Who gets custody of a minor child during divorce?",
                answer: "The paramount consideration of Indian courts is always the 'Welfare of the Child' (physical, educational, and psychological wellbeing). For children under 5 years of age, custody is ordinarily granted to the mother, while father is granted liberal visitation and weekend rights."
            },
            {
                question: "Can an NRI spouse file for divorce in India?",
                answer: "Yes, if the marriage was solemnized in India under the Hindu Marriage Act or Special Marriage Act, or if either party last resided in India, Indian Family Courts have full jurisdiction."
            }
        ],
        metaDescription: "Consult top online divorce and family lawyers in India. Compassionate, strategic legal guidance for mutual consent divorce, child custody, alimony & maintenance."
    },
    {
        title: "Criminal Law & Defence",
        slug: "criminal-law",
        subtitle: "Immediate Criminal Defence, Regular & Anticipatory Bail, FIR Quashing & Trial Advocacy",
        tagline: "Your freedom and legal rights protected with round-the-clock criminal defence advocates.",
        shortDescription: "Criminal defence, bail applications, FIR-related matters, criminal complaints, assault, theft, cheating, fraud, and criminal proceedings.",
        heroSummary: "Facing a criminal inquiry or an FIR can jeopardize your personal freedom, professional reputation, and livelihood. Our criminal defence team acts immediately to secure Anticipatory Bail, Regular Bail, represent clients during police interrogations, file Section 482 / 528 BNSS quashing petitions in High Courts, and conduct rigorous cross-examination trials.",
        statutoryActs: [
            "Bharatiya Nyaya Sanhita, 2023 (BNS) / Indian Penal Code (IPC)",
            "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) / CrPC",
            "Bharatiya Sakshya Adhiniyam, 2023 (BSA) / Indian Evidence Act",
            "Prevention of Corruption Act, 1988",
            "Narcotic Drugs and Psychotropic Substances Act (NDPS)",
            "Negotiable Instruments Act, 1881"
        ],
        subServices: [
            {
                title: "Anticipatory Bail & Pre-Arrest Protection",
                description: "Urgent filing of Anticipatory Bail before Sessions Courts and High Courts to prevent arbitrary police detention under false or frivolous allegations.",
                tag: "Urgent 24/7"
            },
            {
                title: "Regular Bail & Default Bail",
                description: "Immediate bail representation before Magistrate Courts, Sessions Courts, and High Courts following judicial custody or upon expiry of statutory chargesheet deadlines.",
                tag: "Bail Advocacy"
            },
            {
                title: "Quashing of FIR & Charge Sheets",
                description: "Filing high-stakes quashing petitions before the High Court under inherent constitutional powers when the complaint fails to disclose any cognizable offense.",
                tag: "High Court"
            },
            {
                title: "Cheating, Fraud & White-Collar Crime Defence",
                description: "Sophisticated defence in complex economic offenses, corporate embezzlement, cyber financial fraud, and multi-jurisdictional police complaints.",
                tag: "Economic Offenses"
            },
            {
                title: "Trial Advocacy & Cross-Examination",
                description: "Meticulous examination of forensic records, witness statements under Section 161/180 BNSS, and dismantling prosecution arguments at trial.",
                tag: "Trial Court"
            },
            {
                title: "Criminal Revision & Appeals",
                description: "Challenging wrongful convictions, harsh sentencing orders, and refusal of bail in High Courts and the Supreme Court of India.",
                tag: "Appeals"
            }
        ],
        keyIssues: [
            "Threat of imminent arrest in false matrimonial, property, or business dispute FIRs.",
            "Prolonged detention without grant of bail in economic or property offense allegations.",
            "Malicious police harassment without compliance with Arnesh Kumar notice guidelines.",
            "Freeze on personal and business bank accounts under Section 106 BNSS / 102 CrPC.",
            "Defective chargesheets filed without forensic evidence or valid sanction."
        ],
        processSteps: [
            {
                step: "01",
                title: "Emergency Case Assessment",
                description: "Immediate examination of FIR, complaint allegations, and evidence trail to evaluate immediate arrest risks."
            },
            {
                step: "02",
                title: "Pre-Arrest / Bail Intervention",
                description: "Drafting urgent Anticipatory Bail applications with supporting grounds of innocence and statutory precedents."
            },
            {
                step: "03",
                title: "Hearing & Order Procurement",
                description: "Vigorous argument before the Sessions Judge or High Court bench to secure interim relief and bail orders."
            },
            {
                step: "04",
                title: "Trial Representation / Quashing",
                description: "Challenging charges, conducting strategic cross-examinations, or quashing malicious criminal proceedings."
            }
        ],
        whyChoose: [
            {
                title: "Urgent 24/7 Response",
                desc: "Immediate intervention when arrests are imminent or notice under Section 35 BNSS / 41A CrPC has been served."
            },
            {
                title: "Deep Criminal Trial Acumen",
                desc: "Proven track record in forensic analysis, witness cross-examination, and constitutional bail jurisprudence."
            },
            {
                title: "High Court & Sessions Network",
                desc: "Seamless filing capability across city Sessions Courts, State High Courts, and the Supreme Court."
            },
            {
                title: "Zero Compromise on Rights",
                desc: "Relentless protection against custodial excess, unlawful bank freezes, and procedural irregularities."
            }
        ],
        faqs: [
            {
                question: "What should I do immediately if an FIR is lodged against me?",
                answer: "Do not evade the law or panic. Immediately consult a criminal defence advocate to secure a copy of the FIR, evaluate the allegations, and file an Anticipatory Bail application before the Sessions Court or High Court before police take coercive action."
            },
            {
                question: "Can police arrest without a warrant in India?",
                answer: "For cognizable offenses punishable with more than 7 years, police can arrest. However, for offenses punishable with up to 7 years, following the Arnesh Kumar guidelines and Section 35 BNSS, police must issue a formal Notice of Appearance before considering arrest."
            },
            {
                question: "What is FIR quashing and under what circumstances is it allowed?",
                answer: "The High Court can quash an FIR under inherent judicial powers if the allegations, even if taken at face value, do not disclose any criminal offense, if it arises out of a purely civil or commercial dispute, or where parties have reached an amicable, lawful compromise."
            },
            {
                question: "How can I unfreeze a bank account frozen by cyber police or criminal investigating agencies?",
                answer: "We file an application under Section 457 CrPC / corresponding BNSS provisions before the jurisdictional magistrate demonstrating legitimate business transactions, bona fide ownership of funds, and compliance with documentation to direct the bank to release the freeze."
            }
        ],
        metaDescription: "Consult expert criminal defence lawyers in India for urgent Anticipatory Bail, Regular Bail, FIR quashing & trial advocacy. 24/7 legal guidance across India."
    },
    {
        title: "Cybercrime & Online Fraud",
        slug: "cybercrime-online-fraud",
        subtitle: "India's Foremost Cyber Crime Advocates for UPI Fraud, Phishing & Account Freeze Defreeze",
        tagline: "Recover defrauded funds, unfreeze legitimate bank accounts, and prosecute cyber criminals.",
        shortDescription: "UPI fraud, internet banking fraud, phishing, identity theft, social media scams, online shopping fraud, digital payment fraud, and cybercrime complaints.",
        heroSummary: "With digital financial scams on a steep rise across India, victims need fast, specialized intervention within the critical Golden Hours. Our cyber legal team assists victims in logging formal NCRP cybercrime portal complaints, securing bank lien reversals, unfreezing wrongfully locked merchant/personal accounts, and litigating cyber fraud cases.",
        statutoryActs: [
            "Information Technology Act, 2000 (IT Act)",
            "Bharatiya Nyaya Sanhita, 2023 (Sections on Cheating & Forgery)",
            "Digital Personal Data Protection Act, 2023 (DPDP)",
            "Reserve Bank of India (RBI) Limited Liability Directives",
            "Indian Telegraph Act & TRAI Regulations"
        ],
        subServices: [
            {
                title: "Bank Account Freeze & Defreeze Legal Remedy",
                description: "Immediate legal representation before state Cyber Cells and Magistrates to remove Section 106 BNSS / 102 CrPC liens placed on innocent merchant & individual accounts.",
                tag: "High Demand"
            },
            {
                title: "UPI & Net Banking Fraud Recovery",
                description: "Navigating the 1930 NCRP reporting workflow, obtaining immediate beneficiary bank debit-freezes, and claiming zero-liability compensation under RBI guidelines.",
                tag: "Fund Recovery"
            },
            {
                title: "Stock Market & Fake Trading App Scams",
                description: "Drafting criminal complaints and representation before SEBI and cyber police against fraudulent WhatsApp trading groups, fake IPO portals, and cloned broker platforms.",
                tag: "Investment Scams"
            },
            {
                title: "Identity Theft, Impersonation & Digital Arrest",
                description: "Legal protection and FIR filing against criminal syndicates using deepfakes, forged CBI/ED arrest warrants, and illegal digital surveillance.",
                tag: "Emergency"
            },
            {
                title: "E-Commerce Fraud & Crypto Scam Complaints",
                description: "Tracing blockchain wallet transactions, issuing notices to unlicensed crypto exchanges, and filing consumer cyber claims.",
                tag: "Digital Assets"
            },
            {
                title: "Adjudication Petitions under IT Act Section 46",
                description: "Claiming financial compensation from banks and payment intermediaries before State IT Secretaries (Adjudicating Officers) for security failure.",
                tag: "Compensation"
            }
        ],
        keyIssues: [
            "Sudden freezing of personal or current bank accounts due to secondary or tertiary disputed P2P transactions.",
            "Loss of life savings to sophisticated digital arrest threats and bogus enforcement agencies.",
            "Banks refusing to entertain zero-liability claims within 3 days of unauthorized debit notifications.",
            "Unregulated loan apps harassing victims through illegal phone contacts access and morphed photos.",
            "Cloned social media profiles used to solicit fraudulent money transfers from friends and family."
        ],
        processSteps: [
            {
                step: "01",
                title: "Incident Intake & Evidence Freeze",
                description: "Collating transaction UTRs, chat transcripts, payment slips, and immediate filing on the National Cybercrime Portal (cybercrime.gov.in)."
            },
            {
                step: "02",
                title: "Bank Lien Coordination",
                description: "Serving formal legal notices to the nodal officers of remitting and beneficiary banks to freeze the siphoned funds in transit."
            },
            {
                step: "03",
                title: "Police & Magistracy Representation",
                description: "Filing Section 156(3) / 175 BNSS applications before the Magistrate for court-directed FIR registration and fund refund orders."
            },
            {
                step: "04",
                title: "Fund Release & Account Defreeze",
                description: "Securing formal court defreeze orders and restoration of funds under Section 457 CrPC / corresponding BNSS provisions."
            }
        ],
        whyChoose: [
            {
                title: "Specialized Cyber Forensic Insight",
                desc: "Technical understanding of digital payment gateways, IP logs, server trails, and banking API integrations."
            },
            {
                title: "Rapid Golden Hour Action",
                desc: "Immediate steps taken within the first 24-48 hours to maximize the chances of recovering defrauded funds."
            },
            {
                title: "Pan-India Cyber Cell Representation",
                desc: "Direct coordination with state cyber crime police stations across Maharashtra, Delhi, Telangana, Karnataka, and UP."
            },
            {
                title: "Zero-Liability Enforcement",
                desc: "Holding commercial banks accountable under RBI circulars for negligent two-factor authentication failures."
            }
        ],
        faqs: [
            {
                question: "What is the 'Golden Hour' in online cyber financial fraud?",
                answer: "The first 2 to 24 hours immediately following an unauthorized transaction are termed the Golden Hour. Reporting immediately to 1930 / cybercrime.gov.in enables the Indian Cyber Crime Coordination Centre (I4C) to trigger an automated debit-freeze at the beneficiary bank before scammers withdraw the cash from ATMs."
            },
            {
                question: "Why was my bank account frozen even though I did not commit any crime?",
                answer: "State Cyber Crime Police frequently freeze entire transaction chains when disputed funds are tracked. If you received payment via UPI or P2P crypto trading that inadvertently originated from a defrauded account, your account is marked as a layer account. Our advocates submit proofs of genuine consideration to the Investigating Officer and the Magistrate to order an immediate defreeze."
            },
            {
                question: "Can a bank be forced to refund money lost in net banking fraud?",
                answer: "Yes. Under the RBI Circular on Limited Liability of Customers (July 2017), if an unauthorized transaction occurs due to bank negligence or third-party breach where the customer reports within 3 working days, customer liability is ZERO and the bank is obligated to reverse the full amount."
            },
            {
                question: "What legal remedy exists for victims of 'Digital Arrest' scams?",
                answer: "No legitimate law enforcement agency (CBI, Police, ED, Customs) ever conducts arrests or demands money transfers over Skype, WhatsApp, or video call. If victimized, file an immediate cyber FIR, serve notice to payment gateway nodes, and seek court-monitored fund recovery."
            }
        ],
        metaDescription: "Consult India's top cyber crime lawyers. Get immediate legal help for UPI fraud, cyber financial recovery, online banking scams & bank account defreeze."
    },
    {
        title: "Civil Disputes & Money Recovery",
        slug: "civil-disputes",
        subtitle: "Strategic Civil Litigation, Fast-Track Summary Suits & Commercial Recovery",
        tagline: "Recover your rightful dues and resolve contractual disputes through robust civil advocacy.",
        shortDescription: "Money recovery, breach of contract, damages, injunctions, civil suits, disputes between individuals, and other civil claims.",
        heroSummary: "Unpaid dues, contractual breaches, and property damage can paralyze individuals and enterprises. Our civil litigation advocates utilize Order 37 Summary Suits, Commercial Court suits, insolvency notices, and execution proceedings to enforce contracts and recover outstanding financial dues expeditiously.",
        statutoryActs: [
            "Code of Civil Procedure, 1908 (CPC)",
            "Commercial Courts Act, 2015",
            "Indian Contract Act, 1872",
            "Specific Relief Act, 1963",
            "Limitation Act, 1963",
            "Negotiable Instruments Act, 1881"
        ],
        subServices: [
            {
                title: "Summary Suits for Fast Money Recovery",
                description: "Filing high-priority suits under Order 37 CPC based on written contracts, bills of exchange, and promissory notes where the defendant has no automatic right of defence.",
                tag: "Fast Track"
            },
            {
                title: "Commercial Contract Litigation",
                description: "Representation before designated Commercial Courts for business debts, supplier defaults, breach of covenants, and liquidated damages.",
                tag: "Commercial"
            },
            {
                title: "Injunction & Status Quo Petitions",
                description: "Securing urgent ex-parte ad-interim injunctions under Order 39 CPC to protect assets, prevent alienation, and maintain status quo.",
                tag: "Urgent Relief"
            },
            {
                title: "Decree Execution Proceedings",
                description: "Enforcing money decrees through bank attachment, property auction, and arrest of judgment debtors under Order 21 CPC.",
                tag: "Execution"
            },
            {
                title: "Breach of Contract & Damages Claims",
                description: "Claiming compensation for financial injury, loss of business goodwill, and non-performance of statutory or commercial contracts.",
                tag: "Damages"
            },
            {
                title: "Pre-Litigation Mediation & Settlement",
                description: "Mandatory pre-institution mediation under Section 12A of the Commercial Courts Act to settle disputes without protracted trials.",
                tag: "Mediation"
            }
        ],
        keyIssues: [
            "Clients or vendors withholding payments despite complete delivery of services or goods.",
            "Breach of promissory notes, hand loans, and written acknowledgment of debt.",
            "Wrongful termination of contracts causing severe commercial damage.",
            "Opposing parties transferring assets to evade enforcement of impending court decrees.",
            "Protracted delays in court proceedings without active hearing representation."
        ],
        processSteps: [
            {
                step: "01",
                title: "Demand Notice Issuance",
                description: "Drafting a comprehensive, legally binding Demand Notice with statutory interest claims and 15-day cure period."
            },
            {
                step: "02",
                title: "Filing Summary / Commercial Suit",
                description: "Institution of plaint with supporting invoices, ledgers, and evidence before the competent civil or commercial court."
            },
            {
                step: "03",
                title: "Securing Interim Attachments",
                description: "Filing Order 38 Rule 5 CPC applications for attachment before judgment to prevent debtor asset dissipation."
            },
            {
                step: "04",
                title: "Decree & Recovery Execution",
                description: "Procuring final decree and enforcing recovery via court-directed bank warrant and asset attachment."
            }
        ],
        whyChoose: [
            {
                title: "Precision Drafting",
                desc: "Meticulous pleading preparation ensuring summary judgment eligibility and minimizing frivolous defences."
            },
            {
                title: "Pre-Judgment Asset Protection",
                desc: "Aggressive use of attachment-before-judgment provisions to ensure that winning a decree yields actual monetary recovery."
            },
            {
                title: "Commercial Focus",
                desc: "Specialized knowledge of Commercial Courts Act rules, strict timelines, and mandatory mediation procedures."
            },
            {
                title: "Pan-India Civil Jurisdiction",
                desc: "Representation across District Courts, High Court Original Sides, and National Company Law Tribunals."
            }
        ],
        faqs: [
            {
                question: "What is an Order 37 Summary Suit and how does it speed up money recovery?",
                answer: "An Order 37 CPC Summary Suit is a specialized recovery procedure for debts based on written contracts, promissory notes, or cheques. Unlike normal civil suits, the defendant does not have an automatic right to defend; they must apply for Leave to Defend. If they fail to prove a genuine triable issue, the court immediately passes a judgment in your favour."
            },
            {
                question: "What is the statutory limitation period for filing a money recovery suit in India?",
                answer: "Under the Limitation Act, 1963, the limitation period for filing a money recovery suit is generally 3 years from the date the debt became due or from the last date of written acknowledgment of debt or part-payment."
            },
            {
                question: "What can I do if a debtor hides or sells their assets while the suit is pending?",
                answer: "You can file an application under Order 38 Rule 5 CPC for 'Attachment before Judgment'. If the court is satisfied that the defendant is attempting to dispose of property to obstruct execution, it can direct the defendant to furnish security or order attachment of their properties."
            },
            {
                question: "Is pre-litigation mediation mandatory before filing a commercial suit?",
                answer: "Yes, under Section 12A of the Commercial Courts Act 2015, pre-institution mediation is mandatory unless the plaintiff seeks urgent interim relief. This provides a cost-effective opportunity to resolve financial disputes within 3 to 5 months."
            }
        ],
        metaDescription: "Consult experienced civil litigation and money recovery lawyers in India. Fast-track summary suits under Order 37 CPC, contract breach claims & commercial decree execution."
    },
    {
        title: "Corporate & Business Law",
        slug: "corporate-business-law",
        subtitle: "Strategic Counsel for Startups, Shareholder Disputes, Compliance & Commercial Contracts",
        tagline: "Empower your business growth with airtight contracts, compliance governance, and litigation defence.",
        shortDescription: "Company disputes, shareholder conflicts, partnership disputes, business contracts, commercial litigation, compliance, and corporate governance.",
        heroSummary: "From early-stage founders to established enterprises, navigating Indian corporate regulations requires proactive, commercially sound legal architecture. Our corporate law advocates handle shareholder disputes before NCLT, draft high-stakes commercial agreements, oversee mergers & acquisitions, and protect founders from regulatory liabilities.",
        statutoryActs: [
            "Companies Act, 2013",
            "Insolvency and Bankruptcy Code, 2016 (IBC)",
            "Limited Liability Partnership Act, 2008",
            "Competition Act, 2002",
            "Foreign Exchange Management Act, 1999 (FEMA)",
            "Arbitration and Conciliation Act, 1996"
        ],
        subServices: [
            {
                title: "NCLT Shareholder Disputes & Oppression/Mismanagement",
                description: "Filing and defending petitions under Sections 241/242 of the Companies Act before the National Company Law Tribunal for shareholder rights protection.",
                tag: "NCLT"
            },
            {
                title: "Commercial Contracts & Founders' Agreements",
                description: "Drafting airtight Shareholder Agreements (SHA), Share Purchase Agreements (SPA), Joint Venture pacts, Vendor Master Agreements, and NDAs.",
                tag: "Contracts"
            },
            {
                title: "IBC Insolvency & Corporate Recovery",
                description: "Issuing Section 8 Demand Notices and filing Section 7 / Section 9 corporate insolvency resolution petitions before NCLT.",
                tag: "Insolvency"
            },
            {
                title: "Corporate Governance & Regulatory Compliance",
                description: "Advising boards of directors on fiduciary compliance, MCA ROC filings, secretarial audits, and statutory director liabilities.",
                tag: "Governance"
            },
            {
                title: "Startup Legal Advisory & ESOP Structuring",
                description: "Structuring employee stock option schemes (ESOPs), cap-table management, seed/Series A term sheets, and DPIIT compliance.",
                tag: "Startups"
            },
            {
                title: "Commercial Arbitration & Dispute Settlement",
                description: "Handling high-value commercial arbitration proceedings under the Arbitration and Conciliation Act, 1996.",
                tag: "Arbitration"
            }
        ],
        keyIssues: [
            "Majority shareholders unlawfully diluting minority founder shares or siphoning company profits.",
            "Deadlock between 50-50 equity partners paralyzing day-to-day corporate operations.",
            "Corporate buyers defaulting on large invoices and forcing insolvency negotiations.",
            "Ambiguous non-compete, indemnity, or dispute jurisdiction clauses in commercial vendor contracts.",
            "Director disqualification by the Registrar of Companies (ROC) due to statutory filing lapses."
        ],
        processSteps: [
            {
                step: "01",
                title: "Corporate Diagnostic & Strategy",
                description: "In-depth audit of company articles (AoA/MoA), shareholder pacts, board minutes, and dispute roots."
            },
            {
                step: "02",
                title: "Notice & Board Requisition",
                description: "Serving formal legal notices, calling Extraordinary General Meetings (EGMs), or seeking inspection of accounts."
            },
            {
                step: "03",
                title: "NCLT / Court Intervention",
                description: "Filing urgent petitions before NCLT, Commercial Courts, or initiating institutional arbitration."
            },
            {
                step: "04",
                title: "Strategic Settlement / Decree",
                description: "Executing court-sanctioned buyouts, share transfers, or enforcing commercial arbitral awards."
            }
        ],
        whyChoose: [
            {
                title: "Commercial Prudence",
                desc: "We balance aggressive legal rights protection with practical business viability and enterprise continuity."
            },
            {
                title: "NCLT & Appellate Specialization",
                desc: "Extensive courtroom presence before NCLT benches in New Delhi, Mumbai, Bengaluru, Chandigarh, and Chennai."
            },
            {
                title: "Founder-Centric Agility",
                desc: "Fast, startup-friendly turnarounds on investment term sheets, employment agreements, and IP assignments."
            },
            {
                title: "End-to-End Governance",
                desc: "Comprehensive coverage from entity incorporation and funding documentation to corporate dispute litigation."
            }
        ],
        faqs: [
            {
                question: "What can a minority shareholder do against oppression and mismanagement in India?",
                answer: "Under Section 241 and 242 of the Companies Act 2013, shareholders holding at least 10% of issued share capital (or 1/5th of total members) can petition the National Company Law Tribunal (NCLT) for comprehensive relief, including removal of oppressive directors, forensic audit of accounts, or buyout of shares at fair market value."
            },
            {
                question: "What is the threshold for filing an insolvency petition against a corporate debtor under IBC?",
                answer: "The current minimum default threshold for filing an insolvency application under Section 7 (financial creditors) or Section 9 (operational creditors) before NCLT is INR 1 Crore, as revised by the Ministry of Corporate Affairs."
            },
            {
                question: "Why is a detailed Shareholder Agreement (SHA) critical for startups?",
                answer: "An SHA defines voting thresholds, board composition, Right of First Refusal (ROFR), tag-along/drag-along rights, liquidation preference, and deadlock resolution mechanisms. It prevents devastating founder fallout and protects investor capital."
            },
            {
                question: "Can commercial disputes be settled through arbitration instead of courts in India?",
                answer: "Yes. If your contract includes a valid arbitration clause, disputes can be referred to a sole arbitrator or arbitral tribunal under the Arbitration and Conciliation Act, 1996, delivering a binding, enforceable award usually within 12 to 18 months."
            }
        ],
        metaDescription: "Consult experienced corporate and business lawyers in India. NCLT shareholder disputes, commercial agreements, startup compliance, IBC insolvency & corporate litigation."
    }
];

// Helper functions
export function getAllLegalServices(): LegalServiceDetail[] {
    return LEGAL_SERVICES_DATA;
}

export function getLegalServiceBySlug(slug: string): LegalServiceDetail | null {
    const directMatch = LEGAL_SERVICES_DATA.find((s) => s.slug === slug);
    if (directMatch) return directMatch;

    // Check if it's one of the other 26 services and generate a rich dynamic template
    const genericMeta = ALL_LEGAL_SERVICES_LIST.find((item) => item.slug === slug);
    if (!genericMeta) return null;

    return generateDynamicServiceDetail(genericMeta);
}

// Complete list of all 32 services with basic metadata
export const ALL_LEGAL_SERVICES_LIST = [
    { title: "Family & Divorce Law", slug: "family-divorce-law", description: "Divorce, mutual consent divorce, child custody, alimony, maintenance, domestic violence, marriage disputes, adoption, and guardianship." },
    { title: "Property & Real Estate Law", slug: "property-real-estate", description: "Property disputes, land ownership, partition suits, inheritance, mutation, tenancy, eviction, builder disputes, and real estate transactions." },
    { title: "Criminal Law & Defence", slug: "criminal-law", description: "Criminal defence, bail applications, FIR-related matters, criminal complaints, assault, theft, cheating, fraud, and criminal proceedings." },
    { title: "Civil Disputes & Money Recovery", slug: "civil-disputes", description: "Money recovery, breach of contract, damages, injunctions, civil suits, disputes between individuals, and other civil claims." },
    { title: "Legal Documentation & Drafting", slug: "legal-documentation", description: "Legal notices, agreements, contracts, affidavits, declarations, deeds, powers of attorney, and document drafting and review." },
    { title: "Corporate & Business Law", slug: "corporate-business-law", description: "Company disputes, shareholder conflicts, partnership disputes, business contracts, commercial litigation, compliance, and corporate governance." },
    { title: "Banking & Financial Law", slug: "banking-financial-law", description: "Banking disputes, unauthorized transactions, loan disputes, incorrect charges, cheque-related matters, debt recovery, and financial misconduct." },
    { title: "Cybercrime & Online Fraud", slug: "cybercrime-online-fraud", description: "UPI fraud, internet banking fraud, phishing, identity theft, social media scams, online shopping fraud, digital payment fraud, and cybercrime complaints." },
    { title: "Stock Market & Investment Disputes", slug: "stock-market-investment-disputes", description: "Stock market fraud, unauthorized trading, broker disputes, investment scams, portfolio management disputes, and SEBI-related complaints." },
    { title: "Consumer Protection Law", slug: "consumer-protection-law", description: "Defective products, deficient services, misleading advertisements, unfair trade practices, e-commerce disputes, and consumer commission complaints." },
    { title: "Employment & Labour Law", slug: "employment-labour-law", description: "Unpaid salaries, wrongful termination, workplace harassment, employment contracts, gratuity, provident fund disputes, and labour claims." },
    { title: "Cheque Bounce Cases (Section 138 NI Act)", slug: "cheque-bounce-cases", description: "Dishonoured cheques, legal notices, proceedings under Section 138 of the Negotiable Instruments Act, and cheque-related disputes." },
    { title: "Intellectual Property Law (IPR)", slug: "intellectual-property-law", description: "Trademark registration and disputes, copyright infringement, patents, brand protection, licensing, and trade secret matters." },
    { title: "Taxation & GST Law", slug: "taxation-gst-law", description: "Income tax disputes, GST notices, tax assessments, refunds, penalties, appeals, and tax compliance matters." },
    { title: "Immigration & Citizenship", slug: "immigration-citizenship", description: "Visa issues, immigration documentation, citizenship matters, passport disputes, OCI applications, and related legal proceedings." },
    { title: "Constitutional & Writ Matters", slug: "constitutional-writ-matters", description: "Fundamental rights, writ petitions, unlawful administrative actions, public authority disputes, and constitutional remedies." },
    { title: "Education Law & Student Rights", slug: "education-law", description: "University disputes, admission issues, examination disputes, unfair academic decisions, education refunds, and institutional grievances." },
    { title: "Medical & Healthcare Negligence", slug: "medical-healthcare-law", description: "Medical negligence claims, hospital disputes, informed consent issues, healthcare service complaints, and medical compensation matters." },
    { title: "Insurance Claims & Disputes", slug: "insurance-claims-disputes", description: "Rejected insurance claims, delayed settlements, life insurance disputes, health insurance claims, motor insurance, and policy interpretation." },
    { title: "Motor Accident & Traffic Claims", slug: "motor-accident-traffic-law", description: "Motor accident compensation (MACT), insurance claims, traffic challans, driving licence disputes, and motor vehicle accident claims." },
    { title: "Debt Recovery & Insolvency (IBC & DRT)", slug: "debt-recovery-insolvency", description: "Outstanding payments, loan recovery, creditor disputes, insolvency proceedings, bankruptcy-related matters, and restructuring." },
    { title: "Arbitration & Mediation", slug: "arbitration-mediation", description: "Commercial arbitration, contractual disputes, mediation, settlement negotiations, and alternative dispute resolution." },
    { title: "Government & Administrative Law", slug: "government-administrative-law", description: "Government department disputes, service matters, administrative orders, public grievances, licences, permits, and regulatory issues." },
    { title: "Marriage, Inheritance & Succession", slug: "marriage-inheritance-succession", description: "Wills, probate, succession certificates, inheritance disputes, legal heir matters, estate administration, and family property claims." },
    { title: "Environmental Law & Compliance", slug: "environmental-law", description: "Pollution complaints, environmental damage, waste management violations, environmental clearances, and regulatory disputes." },
    { title: "Consumer Finance & Loan Recovery Harassment", slug: "consumer-finance-loan-disputes", description: "Personal loan disputes, credit card issues, recovery agent harassment, loan settlement disputes, and credit report errors." },
    { title: "Defamation & Online Reputation Protection", slug: "defamation-reputation-protection", description: "Defamation claims, false allegations, online reputation disputes, harmful publications, and reputation-related legal remedies." },
    { title: "Women & Child Rights Advocacy", slug: "women-child-rights", description: "Domestic abuse, workplace harassment (POSH), child protection (POCSO), maintenance, custody, and legal remedies for violations of rights." },
    { title: "Senior Citizen Legal Protection", slug: "senior-citizen-legal-matters", description: "Maintenance claims, property protection, inheritance disputes, elder abuse, and senior citizen welfare matters under the Maintenance Act." },
    { title: "Landlord & Tenant Disputes", slug: "landlord-tenant-disputes", description: "Rent disputes, security deposit recovery, eviction, lease violations, rental agreements, and landlord-tenant conflicts." },
    { title: "Public Interest & Human Rights", slug: "public-interest-human-rights", description: "Human rights violations, public interest litigation (PIL), unlawful detention concerns, discrimination claims, and access to legal remedies." },
    { title: "General Legal Matters & Advisory", slug: "other-legal-matters", description: "Other legal issues, case-specific consultations, procedural guidance, and referrals to an appropriate legal professional." },
];

function generateDynamicServiceDetail(item: { title: string; slug: string; description: string }): LegalServiceDetail {
    return {
        title: item.title,
        slug: item.slug,
        subtitle: `Expert ${item.title} Advocates & Legal Consultants Across India`,
        tagline: `Protect your legal interests with verified, experienced High Court advocates in ${item.title}.`,
        shortDescription: item.description,
        heroSummary: `Navigating legal complexities in ${item.title} requires specialized legal insight, strategic case preparation, and authoritative representation. Our team of senior advocates provides end-to-end guidance, document drafting, dispute resolution, and courtroom advocacy across all Indian jurisdictions.`,
        statutoryActs: [
            "Constitution of India",
            "Code of Civil Procedure, 1908",
            "Bharatiya Nyaya Sanhita, 2023",
            "Bharatiya Nagarik Suraksha Sanhita, 2023",
            "Indian Contract Act, 1872",
            "Relevant Central & State Statutes"
        ],
        subServices: [
            {
                title: "Legal Consultation & Strategy",
                description: `One-on-one strategic evaluation of your legal standing in ${item.title} matters with actionable guidance.`,
                tag: "Advisory"
            },
            {
                title: "Notice Drafting & Formal Representation",
                description: "Preparation of authoritative legal notices, statutory claims, and formal replies to opposing parties.",
                tag: "Documentation"
            },
            {
                title: "Court & Tribunal Advocacy",
                description: "Dedicated representation before District Courts, Tribunals, High Courts, and the Supreme Court.",
                tag: "Litigation"
            },
            {
                title: "Mediation & Settlement Negotiations",
                description: "Structured dispute resolution to secure favourable out-of-court settlements and binding consent terms.",
                tag: "Fast Track"
            },
            {
                title: "Document Verification & Due Diligence",
                description: "Comprehensive legal audit of contracts, agreements, orders, and statutory compliance papers.",
                tag: "Due Diligence"
            },
            {
                title: "Decree & Order Execution",
                description: "Enforcing judicial orders, recovering awarded damages, and ensuring statutory compliance.",
                tag: "Execution"
            }
        ],
        keyIssues: [
            `Complex procedural hurdles and documentation delays in ${item.title}.`,
            "Unilateral breach of statutory rights or contractual covenants.",
            "Lack of accessible, transparent legal counsel with proven courtroom experience.",
            "Unfair allegations or aggressive notices demanding immediate legal response.",
            "Difficulty enforcing legal decrees or financial compensations."
        ],
        processSteps: [
            {
                step: "01",
                title: "Request Consultation",
                description: "Share your case brief and documents securely for initial legal assessment by our legal team."
            },
            {
                step: "02",
                title: "Advocate Assignment",
                description: `We connect you with a specialist advocate seasoned in ${item.title} matters.`
            },
            {
                step: "03",
                title: "Strategic Action Plan",
                description: "Drafting notices, petitions, or entering mediation based on your desired outcome."
            },
            {
                step: "04",
                title: "Resolution & Filing",
                description: "Filing proceedings, vigorous representation, and securing legally enforceable results."
            }
        ],
        whyChoose: [
            {
                title: "Verified Bar Advocates",
                desc: "Experienced legal practitioners registered with the Bar Council of India with proven trial records."
            },
            {
                title: "100% Confidentiality",
                desc: "Strict adherence to advocate-client privilege with bank-grade encryption of case records."
            },
            {
                title: "Transparent Fixed Pricing",
                desc: "Honest, upfront quote without hidden hourly retainers or arbitrary litigation surcharges."
            },
            {
                title: "Pan-India Reach",
                desc: "Seamless legal representation across all state High Courts, District Courts, and specialized Tribunals."
            }
        ],
        faqs: [
            {
                question: `What is the first step I should take regarding a ${item.title} issue?`,
                answer: `Compile all relevant agreements, notices, correspondence, and financial receipts. Consult a specialist advocate before issuing any written statement or signing documents to ensure your statutory rights are not compromised.`
            },
            {
                question: `Can ${item.title} matters be resolved through mediation without going to court?`,
                answer: `Yes, many disputes are effectively resolved through pre-litigation mediation and structured legal negotiations, which saves substantial time, legal expense, and emotional distress.`
            },
            {
                question: `How do I book a confidential consultation with a lawyer for ${item.title}?`,
                answer: `Click on 'Consult Now' or 'Talk to Lawyer' on this page, enter your mobile number, and our senior legal team will contact you promptly to schedule your consultation.`
            },
            {
                question: `Do you provide legal assistance for NRIs in ${item.title} cases?`,
                answer: `Yes, we actively assist Non-Resident Indians (NRIs) with legal representation across India via Power of Attorney, online document vetting, and virtual consultations.`
            }
        ],
        metaDescription: `Consult expert ${item.title} lawyers in India online. Verified advocates for legal consultation, notice drafting, court litigation & dispute resolution.`
    };
}
