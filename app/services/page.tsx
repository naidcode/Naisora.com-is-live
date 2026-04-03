"use client";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCards from "@/components/PricingCards";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const [selectedService, setSelectedService] = useState<null | number>(null);

  const services = [
    {
      num: "01",
      tag: "WEBSITE DESIGN",
      title: "A Restaurant Website That Works Like a Sales Machine",
      brief: "Fast, beautiful, and built specifically to convert hungry visitors into paying customers.",
      details: {
        headline: "A Website That Works Like Your Best Salesperson",
        description: [
          "Most restaurant websites in Bangalore are either non-existent, broken on mobile, or so slow that Google penalises them. We build restaurant websites from scratch — fast, beautiful, and built specifically to convert hungry visitors into paying customers. Not a template. Not a page builder. A real custom website made for your restaurant.",
          "Every website we build scores 90+ on Google PageSpeed, loads in under 2 seconds on mobile, and includes everything a restaurant needs — menu page, about story, reservation section, contact with WhatsApp integration, and a Google-optimised structure that starts working from day one."
        ],
        features: [
          { title: "Custom design", text: "built around your restaurant's identity, not a generic template" },
          { title: "100 PageSpeed score", text: "Google rewards fast sites with higher rankings" },
          { title: "Mobile-first", text: "70% of your customers are searching on their phones" },
          { title: "SEO-ready structure", text: "titles, meta descriptions, schema markup all set up correctly" },
          { title: "WhatsApp integration", text: "one tap to message you directly from the website" }
        ],
        result: "Your new website will be live in 7-14 days. If it doesn't score 90+ on Google PageSpeed, we fix it for free.",
        cta: "Get Your Website — Starting ₹8,000",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      num: "02",
      tag: "GOOGLE VISIBILITY",
      title: "Show Up When Hungry Customers Search Near You",
      brief: "Local SEO is the most powerful marketing channel for restaurants — it puts you in front of people ready to visit.",
      details: {
        headline: "Show Up When Hungry Customers Search Near You",
        description: [
          "When someone in Koramangala searches \"best biryani near me\" or \"cafe open now Bangalore\", who shows up? Right now it's probably your competitor. Local SEO is the most powerful marketing channel for restaurants — it puts you in front of people who are actively looking for food right now, in your area, ready to visit or order.",
          "We handle everything — Google Business Profile optimisation, local keyword targeting, weekly blog posts that rank for \"best [food] in [area] Bangalore\", citation building across Indian directories, review management, and monthly ranking reports so you can see exactly how your visibility is growing. No jargon. Just more customers finding you on Google."
        ],
        features: [
          { title: "Google Business Profile optimization", text: "the single highest ROI action for local restaurants" },
          { title: "Weekly blog posts", text: "3 posts per week targeting local Bangalore food searches" },
          { title: "Local citation building", text: "listed on JustDial, Sulekha, Yellow Pages, and 15+ directories" },
          { title: "Review management", text: "we draft responses to every Google review within 24 hours" },
          { title: "Monthly ranking reports", text: "see exactly which keywords you moved up for" }
        ],
        result: "Your Google visibility will improve within 30 days or we work free until it does.",
        cta: "Improve My Google Ranking — ₹3,500/month",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1000"
    },
    {
      num: "03",
      tag: "AI AUTOMATION",
      title: "Let AI Handle Your Inbox While You Handle the Kitchen",
      brief: "Our AI automation handles WhatsApp requests, Instagram DMs, and reviews automatically, 24/7.",
      details: {
        headline: "Let AI Handle Your Inbox While You Handle the Kitchen",
        description: [
          "Running a restaurant means you're pulled in 10 directions at once. Replying to WhatsApp booking requests, responding to Instagram DMs, answering the same questions about your menu and timing every single day — it takes hours that should be spent on your food and your customers. Our AI automation handles all of this for you, automatically, 24 hours a day.",
          "We build a custom AI agent for your restaurant that replies to WhatsApp messages, responds to Instagram DMs, answers Google review comments, sends table booking confirmations, and alerts you only when something genuinely needs your attention. Your customers get instant, professional responses. You get your time back."
        ],
        features: [
          { title: "WhatsApp automation", text: "auto-reply to booking requests, menu questions, directions" },
          { title: "Instagram DM handling", text: "responds to new DM inquiries automatically" },
          { title: "Google review responses", text: "professional replies drafted within hours of every new review" },
          { title: "Table booking confirmations", text: "customer gets an instant confirmation, you get a Telegram alert" },
          { title: "Smart escalation", text: "only contacts you when a human decision is actually needed" }
        ],
        result: "Your response time goes from hours to seconds. Your customers notice the difference immediately.",
        cta: "Automate My Restaurant — ₹8,000 setup + ₹2,000/month",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
    },
    {
      num: "04",
      tag: "BRAND IDENTITY",
      title: "A Brand That Makes Your Restaurant Memorable",
      brief: "A complete visual identity system that makes your restaurant stand out from the competition.",
      details: {
        headline: "A Brand That Makes Your Restaurant Memorable",
        description: [
          "In a city as competitive as Bangalore, your restaurant's brand is more than just a logo — it's the first impression you make before a customer ever tastes your food. We build visual identities that tell your story and build immediate trust.",
          "From custom typography and color palettes to menu design and social media templates, we provide a complete branding toolkit that ensures your restaurant looks professional across every touchpoint, both online and offline."
        ],
        features: [
          { title: "Custom logo design", text: "original vector logos built from scratch for your brand" },
          { title: "Color palette", text: "a scientific approach to colors that trigger hunger and comfort" },
          { title: "Typography system", text: "curated fonts that match your restaurant's specific vibe" },
          { title: "Menu design", text: "print-ready menu layouts that are easy to read and beautiful" },
          { title: "Social templates", text: "editable templates for your Instagram announcements and stories" }
        ],
        result: "You'll receive a full Brand Guideline PDF and all source files (Figma, AI, SVG) within 10 days.",
        cta: "Build My Brand — ₹12,000",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => { 
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <main className="min-h-screen pt-24 md:pt-40 bg-bg">
      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[800px] bg-bg border border-stroke rounded-[24px] max-h-[90vh] md:max-h-[85vh] overflow-y-auto p-5 md:p-12 shadow-2xl no-scrollbar"
              data-lenis-prevent
            >
              <button 
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-muted hover:text-text-primary transition-colors z-10 p-2"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 md:gap-10">
                <div>
                  <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4 block">
                    Detailed View • {services[selectedService].num}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-display italic text-text-primary leading-[1.1]">
                    {services[selectedService].details.headline}
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {services[selectedService].details.description.map((p, i) => (
                    <p key={i} className="text-sm md:text-base text-muted font-body leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-stroke">
                  <h3 className="text-xl font-display italic text-text-primary mb-6">
                    Core Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {services[selectedService].details.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={16} className="text-text-primary mt-1 flex-shrink-0" />
                        <p className="text-xs md:text-sm font-body text-muted leading-relaxed">
                          <strong className="text-text-primary font-medium">{f.title}</strong> — {f.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface/50 border border-stroke rounded-2xl p-5 md:p-8">
                  <p className="text-sm md:text-base font-body text-text-primary leading-relaxed mb-6 md:mb-8 italic">
                    "{services[selectedService].details.result}"
                  </p>
                  <Link 
                    href={services[selectedService].details.link}
                    className="flex items-center justify-between bg-text-primary text-bg px-6 py-4 rounded-xl font-body font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] group/btn"
                  >
                    <span>{services[selectedService].details.cta}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="pb-12 md:pb-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <AnimatedSection>
            <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.4em] mb-6 block leading-none">WHAT WE DO</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display italic text-text-primary leading-[1.1] mb-6 md:mb-8">
              Premium Web Services Built for <span className="text-muted">Bangalore's Restaurants.</span>
            </h1>
            <p className="text-base md:text-lg text-muted font-body max-w-2xl mx-auto leading-relaxed">
              Everything you need to go from invisible to fully booked online. Designed specifically for the local culinary scene.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail Rows */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-16 md:gap-40">
            {services.map((svc, idx) => {
              const reverse = idx % 2 !== 0;
              return (
                <div key={idx} className="relative">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center`}>
                    <AnimatedSection delay={80} className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex flex-col">
                        <span className="font-body text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-6">
                          {svc.num} · {svc.tag}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display italic text-text-primary leading-[1.1] mb-4 md:mb-8">
                          {svc.title}
                        </h2>
                        <p className="text-sm md:text-base text-muted font-body mb-6 md:mb-8 leading-relaxed">
                          {svc.brief}
                        </p>
                        <button 
                          type="button"
                          onClick={() => setSelectedService(idx)}
                          className="flex items-center gap-2 text-sm font-body font-bold text-text-primary hover:gap-4 transition-all w-fit"
                        >
                          {svc.cta} <ArrowRight size={16} />
                        </button>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={160} className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
                      <div 
                        onClick={() => setSelectedService(idx)}
                        className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-surface/50 border border-stroke rounded-[32px] relative cursor-pointer overflow-hidden group shadow-2xl"
                      >
                        <Image 
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                          <span className="font-body text-xs text-text-primary px-6 py-2 border border-white/20 rounded-full bg-white/5">View Service Details</span>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                  {idx < services.length - 1 && (
                    <div className="w-full h-px bg-stroke/50 mt-16 md:mt-40"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingCards />

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
