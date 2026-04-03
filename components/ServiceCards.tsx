"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ svc, index, onLearnMore }: { svc: any; index: number; onLearnMore: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }}
        onClick={onLearnMore}
        className="relative flex flex-col h-full p-10 bg-surface border border-stroke rounded-[32px] overflow-hidden transition-all duration-500 ease-out cursor-pointer group"
      >
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 40%)` }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-4xl font-display italic text-stroke group-hover:text-text-primary transition-colors duration-500">
              {svc.num}
            </span>
            <div className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:border-text-primary transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-text-primary group-hover:text-bg transition-colors" />
            </div>
          </div>
          
          <h3 className="text-2xl font-display italic text-text-primary mb-4 group-hover:translate-x-2 transition-transform duration-500">
            {svc.title}
          </h3>
          
          <p className="text-sm md:text-base text-muted font-body leading-relaxed flex-grow group-hover:text-text-primary/70 transition-colors duration-500">
            {svc.desc}
          </p>
          
          <div className="mt-8 pt-8 border-t border-stroke opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] text-text-primary uppercase tracking-[0.2em] font-body font-bold">Learn More →</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServiceCards() {
  const [selectedService, setSelectedService] = useState<null | number>(null);

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

  const services = [
    {
      num: "01",
      title: "Premium Web Design",
      desc: "Fast, custom websites built to convert visitors into customers. Mobile-first and SEO-ready, designed specifically for restaurants.",
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
      }
    },
    {
      num: "02",
      title: "Local Growth & SEO",
      desc: "Dominate local searches in Bangalore. We ensure your business is the first thing customers see when they look for food.",
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
      }
    },
    {
      num: "03",
      title: "AI Business Automation",
      desc: "Streamline your operations with AI-powered replies, automated reviews, and intelligent confirmation systems.",
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
      }
    }
  ];

  return (
    <section id="services" className="bg-bg py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Expertise</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary italic leading-[1.1] mb-8">
              Everything you need <br /> to <span className="italic">*dominate*</span> the scene.
            </h2>
            <p className="text-lg text-muted font-body leading-relaxed">
              We combine cutting-edge technology with deep industry knowledge to give your restaurant a competitive edge that lasts.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} onLearnMore={() => setSelectedService(i)} />
          ))}
        </div>
      </div>

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
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#444", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px", display: "block" }}>
                    Service Detailed View
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display italic text-text-primary leading-[1.1]">
                    {services[selectedService].details.headline}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {services[selectedService].details.description.map((p, i) => (
                    <p key={i} className="text-base text-muted font-body leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "32px" }}>
                  <h3 className="text-xl font-display italic text-text-primary mb-6">
                    Core Features
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {services[selectedService].details.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <CheckCircle2 size={16} color="white" style={{ marginTop: "4px", flexShrink: 0 }} />
                        <p className="text-sm font-body text-muted">
                          <strong className="text-text-primary font-medium">{f.title}</strong> — {f.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface border border-stroke rounded-2xl p-8">
                  <p className="text-base font-body text-text-primary leading-relaxed mb-6">
                    {services[selectedService].details.result}
                  </p>
                  <Link 
                    href={services[selectedService].details.link}
                    className="flex items-center justify-between bg-text-primary text-bg px-6 py-4 rounded-xl font-body font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
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

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
