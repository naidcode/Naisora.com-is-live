"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ svc, index, onLearnMore }: { svc: any; index: number; onLearnMore: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        onMouseLeave={() => {
          if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }}
        onClick={onLearnMore}
        className="relative flex flex-col h-full p-6 md:p-10 bg-surface border border-stroke rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-500 ease-out cursor-pointer group"
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
      title: "Website Design",
      desc: "Modern, mobile-friendly, premium websites built for Bangalore restaurants. Convert hungry visitors into loyal customers.",
      details: {
        headline: "A Premium Digital Storefront For Your Restaurant",
        description: [
          "In Bangalore's competitive dining scene, your website is often the first 'taste' a customer has of your brand. If it's slow, ugly, or hard to use, they'll go to the next place on Google. We build custom restaurant websites that load instantly and look world-class.",
          "Every site we build is optimized for mobile — where 80% of your customers are. From digital menus that are easy to read to seamless 'Call' and 'WhatsApp' buttons, we focus on what actually brings people through your doors."
        ],
        features: [
          { title: "Custom Premium Design", text: "Tailored to your restaurant's unique vibe and décor." },
          { title: "Mobile-First Layout", text: "Ensures a perfect experience on any smartphone." },
          { title: "Digital Menu Optimization", text: "High-quality, fast-loading menu images or text." },
          { title: "One-Tap Connectivity", text: "Easy access to maps, calling, and WhatsApp." },
          { title: "Speed Optimized", text: "Blazing fast load times to keep visitors engaged." }
        ],
        result: "Your restaurant will have a professional online presence that rivals big food chains.",
        cta: "Get Free Website Audit",
        link: "/contact"
      }
    },
    {
      num: "02",
      title: "Website Redesign",
      desc: "Upgrade your old, outdated website to a modern premium experience. Perfect for established cafes needing a fresh look.",
      details: {
        headline: "Modernize Your Restaurant's Online Experience",
        description: [
          "Is your current website from 2015? An outdated site sends the wrong message to modern diners. We take your existing brand and give it a premium, high-converting digital upgrade.",
          "We don't just 'touch up' the paint. We re-engineer the entire experience, improving page speed, user flow, and visual appeal while keeping your brand's core identity intact. Turn your legacy site into a lead-generating machine."
        ],
        features: [
          { title: "Complete Visual Overhaul", text: "Replace dated looks with modern, premium aesthetics." },
          { title: "UI/UX Optimization", text: "Make it effortless for customers to find what they need." },
          { title: "Modern Tech Stack", text: "Move to faster, more secure, and SEO-friendly platforms." },
          { title: "Enhanced Photography", text: "Guidance on showcasing your food and interiors." },
          { title: "Conversion Focus", text: "Strategically placed CTAs to drive bookings and inquiries." }
        ],
        result: "Transform your 'yesterday' website into a premium platform that attracts today's customers.",
        cta: "See Your Website Idea",
        link: "/contact"
      }
    },
    {
      num: "03",
      title: "Local Visibility (SEO)",
      desc: "Help your restaurant appear when people search nearby. Dominate local Google searches in your area.",
      details: {
        headline: "Show Up When Customers Search Near You",
        description: [
          "When someone in your neighborhood searches 'best cafe near me' or 'restaurant in [Area]', you need to be at the top. We optimize your Google presence so you're the first choice for local diners.",
          "Local SEO is the lifeblood of physical restaurants. We handle your Google Business Profile, local keywords, and map optimization to ensure you're visible exactly where and when it matters."
        ],
        features: [
          { title: "Google Business Optimization", text: "Make your GBP stand out with the right info and images." },
          { title: "Local Keyword Targeting", text: "Rank for queries specific to your neighborhood and city." },
          { title: "Map Packs Ranking", text: "Aim for the 'Top 3' spots in Google Map searches." },
          { title: "Schema for Restaurants", text: "Help Google display your hours, menu, and location correctly." },
          { title: "Reputation Management", text: "Best practices for getting and managing local reviews." }
        ],
        result: "More 'Direction' requests and calls directly from people searching in your local area.",
        cta: "Start Your Website",
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
            <h2 className="text-4xl md:text-7xl font-display text-text-primary italic leading-[1.1] mb-8">
              Everything you need <br /> to <span className="italic">*dominate*</span> the scene.
            </h2>
            <p className="text-lg text-muted font-body leading-relaxed">
              We combine cutting-edge technology with deep industry knowledge to give your restaurant a competitive edge that lasts.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {services.map((svc, i) => (
            <div key={i} className={`${i === 2 ? 'md:col-span-2 lg:col-span-1 md:flex md:justify-center' : ''}`}>
              <div className={`w-full h-full ${i === 2 ? 'md:max-w-[calc(50%-1rem)] lg:max-w-none' : ''}`}>
                <ServiceCard svc={svc} index={i} onLearnMore={() => setSelectedService(i)} />
              </div>
            </div>
          ))}
        </div>
      </div>

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
                    Service Detailed View • {services[selectedService].num}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display italic text-text-primary leading-[1.1]">
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

                <div className="bg-surface/50 border border-stroke rounded-2xl p-6 md:p-8">
                  <p className="text-sm md:text-base font-body text-text-primary leading-relaxed mb-8 italic">
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

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
