"use client";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingCards() {
  const plans = [
    {
      name: "Starter Website",
      price: "₹14,999",
      billing: "one-time",
      tagline: "Get online fast.",
      features: [
        "Up to 5 pages (Home, Menu, About, Gallery, Contact)",
        "Mobile-first responsive design",
        "PageSpeed score 90+",
        "WhatsApp & Call button integration",
        "Basic on-page SEO setup",
        "Delivered in 7 days"
      ],
      highlight: true,
      tag: "Most Popular",
      tagColor: "bg-text-primary",
      textColor: "text-bg",
      btnStyle: "btn-modern-primary",
      index: 999
    },
    {
      name: "Premium Website",
      price: "₹24,999",
      billing: "one-time",
      tagline: "A website that commands attention.",
      features: [
        "Up to 10 pages",
        "Custom animations & interactions",
        "Online menu with categories",
        "Table booking / inquiry form",
        "Advanced on-page SEO",
        "Google Analytics + Search Console setup",
        "Delivered in 14 days"
      ],
      highlight: false,
      btnStyle: "btn-modern-accent"
    },
    {
      name: "Google Visibility Plan",
      price: "₹4,999",
      billing: "month",
      tagline: "Get found on Google Maps.",
      features: [
        "Google Business Profile setup & optimization",
        "4 Google Posts per month",
        "Review management & responses",
        "10 local directory listings",
        "Monthly ranking + performance report",
        "Cancel anytime"
      ],
      highlight: true,
      tag: "Add-on or Standalone",
      tagColor: "bg-surface border border-stroke",
      textColor: "text-text-primary",
      btnStyle: "btn-modern-accent",
      index: 999,

    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg px-6">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-16 md:mb-24">
            <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-7xl font-display italic text-text-primary leading-[1.1] mb-6">
              Simple, honest <span className="text-muted">*pricing.*</span>
            </h2>
            <p className="text-base md:text-xl text-muted font-body max-w-2xl leading-relaxed">
              No hidden fees. No long contracts. Just results.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-16">
          {plans.map((p, i) => (
            <div key={i} className={`${i === 2 ? 'md:col-span-2 lg:col-span-1 md:flex md:justify-center' : ''}`}>
               <div className={`w-full h-full ${i === 2 ? 'md:max-w-[calc(50%-1rem)] lg:max-w-none' : ''}`}>
                <AnimatedSection 
                  delay={(i + 1) * 100}
                  className="relative h-full"
                  style={{ zIndex: p.index || 10 }}
                >
                  <div className={`flex flex-col h-full p-8 md:p-10 rounded-[32px] border transition-all duration-500 relative group ${p.highlight && p.name === "Starter Website" ? 'border-text-primary/20 bg-surface shadow-[0_20px_50px_rgba(255,255,255,0.05)] scale-[1.02]' : 'border-stroke bg-surface/50'}`}>
                    {/* Glow Overlay */}
                    <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-[32px] overflow-hidden pointer-events-none" style={{ backfaceVisibility: 'hidden' }} />
                    
                    {p.tag && (
                      <div className={`absolute -top-3 left-8 ${p.tagColor} ${p.textColor} px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase z-[100] shadow-xl border border-white/10`}>
                        {p.tag}
                      </div>
                    )}
                    
                    <div className="flex-grow relative z-10">
                      <span className="text-[10px] text-muted font-bold tracking-widest uppercase mb-4 block">Plan 0{i + 1}</span>
                      <h3 className="text-xl font-display text-text-primary mb-2 italic">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted font-body mb-8 lowercase italic">
                        {p.tagline}
                      </p>
                      
                      <div className="flex items-baseline gap-1 mb-10">
                        <span className="text-4xl md:text-5xl font-display text-text-primary italic">
                          {p.price}
                        </span>
                        {p.billing === 'month' && (
                          <span className="text-sm text-muted font-body">/mo</span>
                        )}
                        {p.billing === 'one-time' && (
                          <span className="text-xs text-muted font-body uppercase tracking-widest ml-2">
                            (one-time)
                          </span>
                        )}
                      </div>
                      
                      <ul className="flex flex-col gap-5 mb-10">
                        {p.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base text-muted font-body leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                        <Link 
                          href="/contact" 
                          className={`btn-modern ${p.btnStyle} w-full py-5 text-sm font-bold flex items-center justify-center group/btn`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {p.highlight && p.name.includes("Website") ? "Start My Website →" : p.name.includes("Visibility") ? "Get More Customers →" : "Start My Website →"}
                          </span>
                          <div className="shimmer-sweep" />
                        </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center">
            <p className="text-sm text-muted font-body max-w-2xl mx-auto leading-relaxed">
              Website maintenance & hosting support available separately. <br />
              All projects include a free audit before we begin.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
