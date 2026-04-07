"use client"
import React from 'react';

const experts = [
    {
        name: "Aryan Sharma",
        role: "Senior Legal Advisor",
        location: "New Delhi, India",
        email: "aryan.sharma@scamfreeindia.in",
        phone: "+91 98765 43210",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
        featured: true
    },
    {
        name: "Priya Patel",
        role: "Cyber Security Expert",
        location: "Mumbai, India",
        email: "priya.patel@scamfreeindia.in",
        phone: "+91 87654 32109",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
        featured: false
    },
    {
        name: "Vikram Singh",
        role: "Fraud Investigator",
        location: "Bangalore, India",
        email: "vikram.singh@scamfreeindia.in",
        phone: "+91 76543 21098",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
        featured: false
    }
];

export default function Expert() {
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

                        <h3 className="expert-name">{expert.name}</h3>
                        <p className="expert-role">{expert.role}</p>
                        
                        <div className="expert-divider"></div>

                        <div className="expert-info">
                            <div className="expert-info-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>{expert.location}</span>
                            </div>
                            <div className="expert-info-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>{expert.email}</span>
                            </div>
                            <div className="expert-info-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z" />
                                </svg>
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