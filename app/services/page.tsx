"use client";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCards from "@/components/PricingCards";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

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
      link: "#"
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
      link: "#"
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
      link: "#"
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
      link: "#"
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
    <main style={{ minHeight: "100vh", paddingTop: "140px", backgroundColor: "var(--color-bg)" }}>
      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)" }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ 
                position: "relative", 
                width: "100%", 
                maxWidth: "800px", 
                backgroundColor: "#0A0A0A", 
                border: "1px solid #1F1F1F", 
                borderRadius: "24px", 
                maxHeight: "85vh", 
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                padding: "40px",
                boxShadow: "0 32px 100px rgba(0,0,0,0.8)"
              }}
              className="no-scrollbar"
              data-lenis-prevent
            >
              <button 
                type="button"
                onClick={() => setSelectedService(null)}
                style={{ position: "absolute", top: "24px", right: "24px", color: "#666", cursor: "pointer", transition: "color 200ms", zIndex: 10 }}
                className="hover:text-white"
              >
                <X size={24} />
              </button>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px", display: "block" }}>
                    Service Detailed View
                  </span>
                  <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "32px", color: "var(--color-white)", lineHeight: "1.1" }} className="md:text-4xl">
                    {services[selectedService].details.headline}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {services[selectedService].details.description.map((p, i) => (
                    <p key={i} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "15px", color: "#999", lineHeight: "1.7" }}>
                      {p}
                    </p>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "32px" }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", color: "var(--color-white)", marginBottom: "24px" }}>
                    Core Features
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {services[selectedService].details.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <CheckCircle2 size={16} color="white" style={{ marginTop: "4px", flexShrink: 0 }} />
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#888" }}>
                          <strong style={{ color: "var(--color-white)", fontWeight: 500 }}>{f.title}</strong> — {f.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ backgroundColor: "#121212", border: "1px solid #1F1F1F", borderRadius: "16px", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "var(--color-white)", lineHeight: "1.6", marginBottom: "24px" }}>
                    {services[selectedService].details.result}
                  </p>
                  <Link 
                    href={services[selectedService].details.link}
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      backgroundColor: "white", 
                      color: "black", 
                      padding: "16px 24px", 
                      borderRadius: "12px",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      fontWeight: 600,
                      transition: "transform 200ms"
                    }}
                    className="hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {services[selectedService].details.cta}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="section-padding" style={{ paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span className="section-tag" style={{ fontFamily: "var(--font-dm-sans)" }}>WHAT WE DO</span>
            <h1 className="hero-h1" style={{ fontSize: "56px", fontFamily: "var(--font-syne)", marginBottom: "32px", color: "var(--color-white)" }}>
              Premium Web Services Built for Restaurants & Cafes
            </h1>
            <p className="body-large" style={{ fontFamily: "var(--font-dm-sans)", color: "#666666" }}>
              Everything you need to go from invisible to fully booked online.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail Rows */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
            {services.map((svc, idx) => {
              const reverse = idx % 2 !== 0;
              return (
                <div key={idx}>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-8" style={{ alignItems: "center" }}>
                    <AnimatedSection delay={80} className={reverse ? "order-2 md:order-1" : "order-1"}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "11px", fontWeight: 600, color: "#444444", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "24px" }}>
                          {svc.num} · {svc.tag}
                        </span>
                        <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "32px", color: "var(--color-white)", marginBottom: "32px" }}>
                          {svc.title}
                        </h2>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "16px", color: "#888888", marginBottom: "32px", lineHeight: "1.6" }}>
                          {svc.brief}
                        </p>
                        <button 
                          type="button"
                          onClick={() => setSelectedService(idx)}
                          style={{ 
                            fontFamily: "var(--font-dm-sans)", 
                            fontSize: "14px", 
                            color: "var(--color-white)", 
                            display: "inline-flex", 
                            alignItems: "center", 
                            gap: "8px",
                            transition: "all 300ms",
                            cursor: "pointer",
                            width: "fit-content",
                            background: "transparent",
                            border: "none",
                            padding: "0"
                          }} 
                          className="hover-white hover-gap"
                        >
                          {svc.cta} <ArrowRight size={14} />
                        </button>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={160} className={reverse ? "order-1 md:order-2" : "order-2"}>
                      <div 
                        onClick={() => setSelectedService(idx)}
                        style={{ 
                          aspectRatio: "4/3", 
                          backgroundColor: "#101010", 
                          border: "1px solid #1F1F1F", 
                          borderRadius: "12px", 
                          position: "relative",
                          cursor: "pointer",
                          overflow: "hidden"
                        }}
                        className="group"
                      >
                        <div style={{ width: "100%", height: "100%", backgroundColor: "#161616", position: "relative", transition: "transform 500ms" }} className="group-hover:scale-105"></div>
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 300ms", backgroundColor: "rgba(0,0,0,0.3)" }} className="group-hover:opacity-100">
                          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "white", padding: "12px 24px", border: "1px solid white", borderRadius: "100px" }}>View Details</span>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                  {idx < services.length - 1 && (
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#1A1A1A", marginTop: "120px" }}></div>
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
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        .hover-white:hover { color: #FFFFFF !important; }
        .hover-gap:hover { gap: 12px !important; }
        .group:hover .group-hover\\:scale-105 { transform: scale(1.05); }
        .group:hover .group-hover\\:opacity-100 { opacity: 1 !important; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .md\\:order-1 { order: 1; }
          .md\\:order-2 { order: 2; }
        }
      `}} />
    </main>
  );
}

