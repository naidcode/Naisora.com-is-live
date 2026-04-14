"use client";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
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
      title: "Powerful Websites for Modern Bangalore Restaurants",
      brief: "Built from scratch to showcase your food, atmosphere, and brand. Mobile-first and conversion-optimized.",
      details: {
        headline: "A Premium Digital Home For Your Restaurant",
        description: [
          "In Bangalore's fast-moving dining scene, your website is the first experience a customer has with your brand. We build custom restaurant websites that load instantly and look world-class on every device.",
          "Every site we build is engineered for high performance, featuring digital menus that are easy to browse, seamless WhatsApp/Call integration, and a layout that turns window shoppers into table bookings."
        ],
        features: [
          { title: "Custom Premium Design", text: "Built around your restaurant's unique vibe and decor." },
          { title: "Mobile-First UX", text: "Perfect experience for customers searching on their phones." },
          { title: "Digital Menu Optimization", text: "Fast-loading, high-quality display of your offerings." },
          { title: "WhatsApp & Call Triggers", text: "Make it effortless for customers to contact you." },
          { title: "Performance Engineering", text: "90+ Google PageSpeed score guaranteed for every site." }
        ],
        result: "Your restaurant will have a professional online presence that rivals top international food chains.",
        cta: "Start Your Design — Get Free Audit",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "/restaurant_design_service.png"
    },
    {
      num: "02",
      tag: "WEBSITE REDESIGN",
      title: "Give Your Old Website a Modern, High-End Upgrade",
      brief: "Transform your outdated template into a premium digital experience that actually gets results.",
      details: {
        headline: "Modernize Your Restaurant's Presence",
        description: [
          "Is your current site from a decade ago? An outdated website can push away modern diners. We take your established brand and give it a fresh, luxury digital experience.",
          "We rebuild your site using modern technology, focusing on faster load times, better photography display, and a streamlined user journey that reflects the quality of your food."
        ],
        features: [
          { title: "Complete Visual Refresh", text: "Move away from dated templates to high-end designs." },
          { title: "Speed & SEO Audit", text: "Fix why your old site isn't showing up on Google." },
          { title: "Enhanced Navigation", text: "Make it easy for guests to find your location and hours." },
          { title: "Photo Optimization", text: "Showcase your interiors and signature dishes in 4K." },
          { title: "Conversion Upgrade", text: "Strategic button placement to increase direct inquiries." }
        ],
        result: "Turn your legacy website into a modern platform that attracts today's diners.",
        cta: "Upgrade My Site — See Ideas",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "/restaurant_redesign_service.png"
    },
    {
      num: "03",
      tag: "LOCAL VISIBILITY (SEO)",
      title: "Own the Search Results for Restaurants in Your Area",
      brief: "Stop losing customers to competitors. Show up in the 'Top 3' when people search nearby.",
      details: {
        headline: "BE THE FIRST CHOICE ON GOOGLE MAPS",
        description: [
          "When someone nearby searches 'best cafe near me' or 'restaurant in [Your Area]', your name needs to be at the top. We optimize your local presence so you dominate the map packs.",
          "Local SEO is the most effective way to drive physical foot traffic. We handle your Google Business Profile, local keyword mapping, and location-based content to ensure you're visible 24/7."
        ],
        features: [
          { title: "Google Maps Domination", text: "Optimize your profile for the coveted Local Pack spots." },
          { title: "Neighborhood Keywords", text: "Target the exact areas and streets your customers are in." },
          { title: "GBP Strategy", text: "Custom image management and keyword-rich descriptions." },
          { title: "Local Citations", text: "Get listed on industry-specific directories and local maps." },
          { title: "Schema for Restaurants", text: "Help Google display your hours and price range correctly." }
        ],
        result: "More direction requests and phone calls from local customers looking for food.",
        cta: "Dominate Local Search — Get Started",
        link: "/contact"
      },
      cta: "Learn More →",
      link: "#",
      image: "/restaurant_website_mockup_1775998412859.png"
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


      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </main>
  );
}
