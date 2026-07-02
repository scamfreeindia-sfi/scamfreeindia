import React from 'react';

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Mumbai",
    case: "Phishing Scam",
    text: "I lost ₹50,000 to a fake bank SMS scam. The ScamFreeIndia team guided me on how to immediately freeze my account and file an FIR. I managed to recover my funds within 48 hours!",
    rating: 5,
    initial: "R",
    color: "bg-blue-600"
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    case: "Job Fraud",
    text: "I was asked to pay a 'processing fee' for a fake data entry job. SFI helped me identify it as a scam before I made the transaction. They saved my hard-earned money.",
    rating: 5,
    initial: "P",
    color: "bg-emerald-600"
  },
  {
    name: "Abdul Rahman",
    location: "Hyderabad",
    case: "E-commerce Fraud",
    text: "Ordered a smartphone online but received a brick. The seller stopped responding. Thanks to the legal steps provided by ScamFreeIndia, the platform refunded my money.",
    rating: 4,
    initial: "A",
    color: "bg-purple-600"
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    case: "Investment Scam",
    text: "A Telegram group promised double returns in 24 hours. I almost fell for it. Reading the case studies here opened my eyes. Highly recommend this platform for awareness.",
    rating: 5,
    initial: "S",
    color: "bg-orange-600"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    case: "Tech Support Scam",
    text: "Someone called claiming to be from Microsoft and asked for AnyDesk access. SFI's helpline told me exactly what to do. Blocked the caller and secured my laptop.",
    rating: 5,
    initial: "V",
    color: "bg-red-600"
  }
];

export default function Testomenial() {
  return (
    <section className="bg-[#050505] py-20 lg:py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section typical for testimonials */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trusted by thousands across India
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-[#25D366]">Testimonials</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Don't just take our word for it. Here is what people have to say about their experience recovering from fraud with ScamFreeIndia.
          </p>
        </div>

        {/* Traditional grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              {/* Card Header: Avatar, Name, Case */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${testimonial.color}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.case} • {testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-zinc-700'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-white/80 text-base leading-relaxed flex-grow">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}