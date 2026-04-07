"use client"
import React, { useEffect, useState } from 'react';

interface ExpertData {
    name: string;
    nameColor: string;
    role: string;
    roleColor: string;
    image: string;
    email: string;
    phone: string;
    location: string;
    featured: boolean;
}

export default function Expert() {
    const [experts, setExperts] = useState<ExpertData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExperts = async () => {
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || "https://scamfreeind.in";
            try {
                const response = await fetch(`${backendUrl}/api/expert-section`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await response.text();
                    console.error("Received non-JSON response:", text.substring(0, 100));
                    throw new Error("Expected JSON response but received something else");
                }

                const result = await response.json();

                if (result.success && result.data) {
                    const data = result.data;
                    const keys = Object.keys(data);
                    const indices = new Set<string>();

                    keys.forEach(key => {
                        const match = key.match(/expert_section_title_(\d+)$/);
                        if (match) indices.add(match[1]);
                    });

                    const mappedExperts: ExpertData[] = Array.from(indices).sort().map((index, idx) => {
                        const rawImage = data[`expert_section_image_${index}`];
                        let displayImage = "";
                        if (rawImage && typeof rawImage === "string") {
                            if (rawImage.startsWith("http")) {
                                displayImage = rawImage;
                            } else {
                                const cleanPath = rawImage.replace(/^\/+/, "");
                                displayImage = `${backendUrl}/${cleanPath}`;
                                // If it doesn't contain storage and isn't a root file, try adding storage/
                                if (!cleanPath.includes('/') && !cleanPath.includes('storage')) {
                                    displayImage = `${backendUrl}/storage/${cleanPath}`;
                                }
                            }
                        }

                        return {
                            name: data[`expert_section_title_${index}`] || "Expert Advisor",
                            nameColor: data[`expert_section_title_color_${index}`] || "#FFFFFF",
                            role: data[`expert_section_subtitle_${index}`] || "Legal Expert",
                            roleColor: data[`expert_section_subtitle_color_${index}`] || "#FFFFFF",
                            image: displayImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
                            email: data[`expert_section_email_${index}`] || "support@scamfreeindia.in",
                            phone: data[`expert_section_phone_${index}`] || "Contact Support",
                            location: "India",
                            featured: idx === 0
                        };
                    });

                    if (mappedExperts.length > 0) {
                        setExperts(mappedExperts);
                    }
                }
            } catch (error) {
                console.error("Error fetching experts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExperts();
    }, []);

    const getIcon = (type: 'location' | 'email' | 'phone') => {
        switch (type) {
            case 'location':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                );
            case 'email':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                );
            case 'phone':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z" />
                    </svg>
                );
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Loading Experts...</p>
            </div>
        );
    }

    if (experts.length === 0) return null;

    return (
        <section className="expert-section" id="experts">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                    Meet Our Expert Team
                </h2>
                <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
                    Our team of legal advisors and cyber investigators are dedicated to helping you navigate the complexities of online fraud recovery.
                </p>
            </div>

            <div className="expert-grid">
                {experts.map((expert, idx) => (
                    <div
                        key={idx}
                        className={`expert-card ${expert.featured ? 'expert-card-featured' : ''} animate-fade-in`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        {expert.featured && <span className="expert-badge">Top Expert</span>}

                        <div className="expert-image-container">
                            <div className="expert-image-border-animate"></div>
                            <div className="expert-image-inner">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="expert-name" style={{ color: expert.nameColor }}>{expert.name}</h3>
                        <p className="expert-role" style={{ color: expert.roleColor }}>{expert.role}</p>

                        <div className="expert-divider"></div>

                        <div className="expert-info">
                            <div className="expert-info-item">
                                {getIcon('location')}
                                <span>{expert.location}</span>
                            </div>
                            <div className="expert-info-item">
                                {getIcon('email')}
                                <span>{expert.email}</span>
                            </div>
                            <div className="expert-info-item">
                                {getIcon('phone')}
                                <span>{expert.phone}</span>
                            </div>
                        </div>

                        <button className="expert-btn">
                            View Full Profile
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
