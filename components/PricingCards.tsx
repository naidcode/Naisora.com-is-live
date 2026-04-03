"use client";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      billing: "one-time",
      features: [
        "Landing Page",
        "Mobile Responsive",
        "Google Business Setup",
        "Contact Form",
        "WhatsApp Button"
      ],
      highlight: false,
      btnStyle: "btn-ghost"
    },
    {
      name: "Growth",
      price: "₹29,999",
      billing: "one-time",
      features: [
        "Full Website 5 pages",
        "SEO",
        "Google Business",
        "Menu Page",
        "WhatsApp Automation",
        "1 Month Support"
      ],
      highlight: true,
      btnStyle: "btn-primary",
      tag: "MOST POPULAR"
    },
    {
      name: "Premium",
      price: "₹49,999",
      billing: "one-time",
      features: [
        "Full Website 8 pages",
        "Advanced SEO",
        "AI Automation",
        "Monthly Reports",
        "Branding",
        "3 Months Support"
      ],
      highlight: false,
      btnStyle: "btn-ghost"
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-stroke bg-bg px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-display text-text-primary italic mb-6">
              Clear Pricing. No Hidden Costs.
            </h2>
            <p className="text-sm md:text-base text-muted font-body max-w-xl mx-auto leading-relaxed">
              Every package includes a free audit, competitor analysis, and a 100 PageSpeed guarantee.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((p, i) => (
            <AnimatedSection key={i} delay={(i + 1) * 80}>
              <div className={`card h-full flex flex-col p-8 md:p-10 relative group transition-all duration-500 hover:scale-[1.02] ${p.highlight ? 'border-text-primary/20 shadow-2xl shadow-white/5' : ''}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-text-primary text-bg px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {p.tag}
                  </div>
                )}
                
                <div className="mb-10 flex-grow">
                  <h3 className="text-xl font-display text-text-primary italic mb-6">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-10">
                    <span className={`font-display italic leading-none text-text-primary ${p.highlight ? 'text-5xl' : 'text-4xl'}`}>
                      {p.price}
                    </span>
                    <span className="text-xs text-muted font-body uppercase tracking-widest">
                      / {p.billing}
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-4 list-none p-0 m-0">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <span className="text-text-primary text-sm">✓</span>
                        <span className="text-xs md:text-sm text-muted font-body leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact" 
                  className={`btn-modern w-full py-4 text-sm ${p.highlight ? 'btn-modern-primary' : 'btn-modern-accent'}`}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="shimmer-sweep" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
