"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Check, ArrowRight, X, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Page Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <AnimatedSection>
            <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-6 block">WHAT WE DO</span>
            <h1 className="text-4xl md:text-7xl font-display italic leading-[1.1] mb-8">
              Premium Web Services Built for <br />
              <span className="text-muted">Bangalore's Restaurants.</span>
            </h1>
            <p className="text-base md:text-xl text-muted font-body max-w-2xl mx-auto leading-relaxed">
              Everything you need to go from invisible to fully booked online. 
              Designed specifically for the local culinary scene.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1 — SERVICES */}
      <section className="py-20 md:py-32 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col gap-32 md:gap-48">
            
            {/* 01 · WEBSITE DESIGN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="lg:order-1">
                <div className="max-w-xl">
                  <span className="font-body text-[12px] font-bold text-text-primary uppercase tracking-[0.2em] mb-6 block">01 · WEBSITE DESIGN</span>
                  <h2 className="text-3xl md:text-5xl font-display italic leading-[1.1] mb-6">
                    Powerful Websites for Modern Bangalore Restaurants
                  </h2>
                  <p className="text-text-primary/60 font-body text-lg mb-6 italic">"Your digital storefront. Built from scratch."</p>
                  <p className="text-muted font-body text-base md:text-lg leading-relaxed mb-10">
                    We design and develop fully custom restaurant websites that look premium, load fast, and convert visitors into customers. 
                    No templates. No shortcuts. Every pixel is built for your brand.
                  </p>
                  
                  <ul className="grid grid-cols-1 gap-4 mb-10">
                    {[
                      "Up to 5 pages (Home, Menu, About, Gallery, Contact)",
                      "Mobile-first responsive design",
                      "PageSpeed score 90+ guaranteed",
                      "WhatsApp & direct call button integration",
                      "Basic on-page SEO (meta, titles, schema)",
                      "Web3Forms contact form",
                      "Delivered in 7 days"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm md:text-base font-body text-muted">
                        <Check className="w-5 h-5 text-text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-10 p-6 bg-surface/50 border border-stroke rounded-2xl">
                    <p className="text-xs text-muted uppercase tracking-widest mb-2 font-bold">Investment</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-display text-text-primary italic">Starting at ₹14,999</span>
                       <span className="text-xs text-muted font-body">(one-time)</span>
                    </div>
                    <p className="text-[10px] text-muted font-body mt-2">No monthly fee. You own everything.</p>
                  </div>

                  <Link href="/contact" className="btn-modern btn-modern-primary group px-8">
                    <span className="relative z-10 flex items-center gap-3">
                        Start My Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="shimmer-sweep" />
                  </Link>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="lg:order-2">
                <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke bg-surface">
                  <Image 
                    src="/restaurant_design_service.webp" 
                    alt="Modern restaurant interior" 
                    fill 
                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
                </div>
              </AnimatedSection>
            </div>

            {/* 02 · WEBSITE REDESIGN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="lg:order-2">
                <div className="max-w-xl">
                  <span className="font-body text-[12px] font-bold text-text-primary uppercase tracking-[0.2em] mb-6 block">02 · WEBSITE REDESIGN</span>
                  <h2 className="text-3xl md:text-5xl font-display italic leading-[1.1] mb-6">
                    Give Your Old Website a Modern, High-End Upgrade
                  </h2>
                  <p className="text-text-primary/60 font-body text-lg mb-6 italic">"From outdated to outstanding."</p>
                  <p className="text-muted font-body text-base md:text-lg leading-relaxed mb-10">
                    Already have a website but it looks dated, loads slowly, or doesn't reflect your current brand? 
                    We rebuild it from the ground up — keeping your content, upgrading everything else.
                  </p>
                  
                  <ul className="grid grid-cols-1 gap-4 mb-10">
                    {[
                      "Full visual overhaul — new design, fonts, colors",
                      "Mobile responsiveness fix",
                      "Speed optimization (images, code, hosting)",
                      "Updated menu, photos, and CTA structure",
                      "Fresh on-page SEO setup",
                      "Smooth animations and modern interactions",
                      "Delivered in 10–14 days"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm md:text-base font-body text-muted">
                        <Check className="w-5 h-5 text-text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-10 p-6 bg-surface/50 border border-stroke rounded-2xl">
                    <p className="text-xs text-muted uppercase tracking-widest mb-2 font-bold">Investment</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-display text-text-primary italic">Starting at ₹19,999</span>
                       <span className="text-xs text-muted font-body">(one-time)</span>
                    </div>
                    <p className="text-[10px] text-muted font-body mt-2">Pricing depends on current site complexity.</p>
                  </div>

                  <Link href="/contact" className="btn-modern btn-modern-primary group px-8">
                    <span className="relative z-10 flex items-center gap-3">
                       Redesign My Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="shimmer-sweep" />
                  </Link>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="lg:order-1">
                <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke bg-surface">
                  <Image 
                    src="/restaurant_redesign_service.webp" 
                    alt="Restaurant website redesign" 
                    fill 
                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
                </div>
              </AnimatedSection>
            </div>

            {/* 03 · LOCAL VISIBILITY (SEO) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="lg:order-1">
                <div className="max-w-xl">
                  <span className="font-body text-[12px] font-bold text-text-primary uppercase tracking-[0.2em] mb-6 block">03 · LOCAL VISIBILITY (SEO)</span>
                  <h2 className="text-3xl md:text-5xl font-display italic leading-[1.1] mb-6">
                    Own the Search Results for Restaurants in Your Area
                  </h2>
                  <p className="text-text-primary/60 font-body text-lg mb-6 italic">"Be the first restaurant people find on Google."</p>
                  <p className="text-muted font-body text-base md:text-lg leading-relaxed mb-10">
                    When someone searches 'cafe near me' or 'best biryani in Koramangala', you need to appear in the top 3 results on Google Maps. 
                    That is exactly what this service does — with zero ad spend required.
                  </p>
                  
                  <ul className="grid grid-cols-1 gap-4 mb-10">
                    {[
                      "Google Business Profile setup & full optimization",
                      "4 Google Posts per month (offers, events, updates)",
                      "Review management — we respond to every review",
                      "10 local directory listings (Justdial, Sulekha, etc.)",
                      "Local keyword strategy for your area",
                      "Monthly report: ranking positions, calls, profile views",
                      "Cancel anytime — no lock-in"
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm md:text-base font-body text-muted">
                        <Check className="w-5 h-5 text-text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-10 p-6 bg-surface/50 border border-stroke rounded-2xl">
                    <p className="text-xs text-muted uppercase tracking-widest mb-2 font-bold">Investment</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-display text-text-primary italic">₹4,999/month</span>
                    </div>
                    <p className="text-[10px] text-muted font-body mt-2">Results visible in 2–4 weeks. Cancel anytime.</p>
                  </div>

                  <Link href="/contact" className="btn-modern btn-modern-primary group px-8">
                    <span className="relative z-10 flex items-center gap-3">
                       Get More Customers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="shimmer-sweep" />
                  </Link>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="lg:order-2">
                <div className="relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke bg-surface">
                  <Image 
                    src="/restaurant_website_mockup_1775998412859.webp" 
                    alt="Google Maps Visibility" 
                    fill 
                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPARISON TABLE */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gradient opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-6 block">Compare</span>
              <h2 className="text-4xl md:text-7xl font-display italic mb-6 text-text-primary leading-tight">
                Not sure which plan is <br /> <span className="text-muted italic">*right*</span> for you?
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative group">
              {/* Table Wrapper with Glassmorphism */}
              <div className="overflow-x-auto rounded-[32px] border border-stroke bg-surface/30 backdrop-blur-md shadow-2xl p-1">
                <table className="w-full text-left font-body border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-stroke/50">
                      <th className="py-10 px-8 text-muted uppercase text-[10px] tracking-widest font-bold bg-white/[0.02]">Features Matrix</th>
                      <th className="py-10 px-8">
                        <div className="flex flex-col">
                            <span className="text-text-primary font-display text-2xl italic mb-1">Starter</span>
                            <span className="text-[10px] text-muted font-bold tracking-widest uppercase">Essential</span>
                        </div>
                      </th>
                      <th className="py-10 px-8">
                        <div className="flex flex-col">
                            <span className="text-text-primary font-display text-2xl italic mb-1">Premium</span>
                            <span className="text-[10px] text-muted font-bold tracking-widest uppercase">Advanced</span>
                        </div>
                      </th>
                      <th className="py-10 px-8 relative">
                        {/* Column Highlight */}
                        <div className="absolute inset-0 bg-white/[0.03] border-x border-stroke -z-10" />
                        <div className="flex flex-col">
                            <span className="text-text-primary font-display text-2xl italic mb-1">Visibility</span>
                            <span className="text-[10px] text-accent font-bold tracking-widest uppercase">Local SEO</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      ["Investment", "₹14,999", "₹24,999", "₹4,999/mo"],
                      ["Site Capacity", "Up to 5 Pages", "Up to 10 Pages", "—"],
                      ["Animations", false, true, "—"],
                      ["Digital Menu", "Basic", "Advanced", "—"],
                      ["Booking Systems", true, true, "—"],
                      ["Direct Triggers", "WhatsApp/Call", "Advanced", "—"],
                      ["Performance", "90+ Score", "90+ Score", "—"],
                      ["Local SEO", "Basic", "Advanced", "Full Suite"],
                      ["GMB Setup", false, false, true],
                      ["Monthly Updates", false, false, "4 Posts"],
                      ["Review Mgmt", false, false, true],
                      ["Directory Listings", false, false, "10 Active"],
                      ["Delivery / Terms", "7 Days", "14 Days", "Cancel Anytime"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stroke/30 transition-colors hover:bg-white/[0.03] group/row">
                        <td className="py-6 px-8 text-muted/80 font-medium group-hover/row:text-text-primary transition-colors">{row[0]}</td>
                        <td className="py-6 px-8 text-text-primary/70">{typeof row[1] === 'boolean' ? (row[1] ? <CheckCircle2 className="w-5 h-5 text-text-primary" /> : <X className="w-5 h-5 text-muted/20" />) : row[1]}</td>
                        <td className="py-6 px-8 text-text-primary/70">{typeof row[2] === 'boolean' ? (row[2] ? <CheckCircle2 className="w-5 h-5 text-text-primary" /> : <X className="w-5 h-5 text-muted/20" />) : row[2]}</td>
                        <td className="py-6 px-8 text-text-primary/70 bg-white/[0.01]">
                          {typeof row[3] === 'boolean' ? (row[3] ? <CheckCircle2 className="w-5 h-5 text-text-primary" /> : <X className="w-5 h-5 text-muted/20" />) : row[3]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Mobile View Hint */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-8 text-muted text-[10px] tracking-widest uppercase font-bold">
               <div className="w-4 h-[1px] bg-stroke" />
               Swipe to compare plans
               <div className="w-4 h-[1px] bg-stroke" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — PROCESS */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16 md:mb-24">
              <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-6 block">How It Works</span>
              <h2 className="text-4xl md:text-6xl font-display italic mb-6 text-text-primary">
                From first call to <span className="text-muted">*live website*</span> in days.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-text-primary/10 to-transparent -z-10" />
            
            {[
              { num: "01", title: "Free Audit", text: "We analyze your current online presence and identify exactly what is holding you back." },
              { num: "02", title: "Strategy Call", text: "A quick 20-minute call where we align on your goals, timeline, and what your customers expect." },
              { num: "03", title: "Design & Build", text: "We design, develop, and test your website. You get progress updates throughout." },
              { num: "04", title: "Launch & Handover", text: "Your site goes live. We train you on managing it and stay available for 7 days post-launch." }
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-8 rounded-[32px] bg-surface/30 border border-stroke hover:border-text-primary/20 transition-all group h-full">
                  <span className="text-3xl font-display text-text-primary italic mb-6 block">{step.num}</span>
                  <h3 className="text-xl font-display italic mb-4">{step.title}</h3>
                  <p className="text-sm text-muted font-body leading-relaxed">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FINAL CTA */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="relative rounded-[40px] bg-surface border border-stroke p-8 md:p-16 overflow-hidden text-center">
               {/* Accent Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gradient opacity-[0.03] blur-[80px]" />
              
              <div className="relative z-10">
                <p className="text-muted font-body text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Limited slots available for May 2026.</p>
                <h2 className="text-3xl md:text-5xl font-display italic mb-10 leading-[1.2] text-text-primary">
                  Ready to transform <br className="hidden md:block" /> your restaurant's digital presence?
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/contact" className="btn-modern btn-modern-primary group w-full sm:w-auto px-10">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Get Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="shimmer-sweep" />
                  </Link>
                  <a href="https://wa.me/917975219560" target="_blank" rel="noopener noreferrer" className="btn-modern btn-modern-accent group w-full sm:w-auto px-10">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        <Phone className="w-4 h-4" /> WhatsApp Us
                    </span>
                    <div className="shimmer-sweep" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
    </main>
  );
}
