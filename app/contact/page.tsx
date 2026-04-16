"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Mail, MessageCircle, Instagram, MapPin, CheckCircle2, ChevronRight, Globe, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const infoItems = [
    { 
      label: "WHATSAPP", 
      value: "+91 7975219560", 
      icon: MessageCircle, 
      href: "https://wa.me/917975219560" 
    },
    { 
      label: "Email Support", 
      value: "hey@naisora.com", 
      icon: Mail, 
      href: "mailto:hey@naisora.com" 
    },
    { 
      label: "INSTAGRAM", 
      value: "@naisora.official", 
      icon: Instagram, 
      href: "https://instagram.com/naisora.official" 
    },
    { 
      label: "LOCATION", 
      value: "Bangalore, India", 
      icon: MapPin, 
      href: null 
    }
  ];

  const benefits = [
     { title: "Free Website Audit", desc: "Every inquiry gets a detailed audit report.", icon: Globe },
     { title: "Competitor Strategy", desc: "See what your rivals are doing online.", icon: TrendingUp },
     { title: "Results Guaranteed", desc: "Websites that convert visitors to customers.", icon: Zap }
  ];

  return (
    <main className="min-h-screen bg-bg pt-32 md:pt-40 pb-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gradient blur-[150px] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-gradient blur-[120px] opacity-[0.05] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 mb-24">
        <div className="container max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Launch Project</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display text-text-primary leading-[1.05] mb-8 italic">
              Let's craft the <br /> <span className="italic">*extraordinary.*</span>
            </h1>
            <p className="text-xl text-muted font-body leading-relaxed max-w-2xl mx-auto">
              Tell us about your restaurant and we'll send you a free audit and competitor report within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Contact Info & Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <AnimatedSection delay={100}>
                <div className="relative bg-bg border border-stroke rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
                  <h2 className="text-2xl font-display text-text-primary mb-8 italic">Direct Communication</h2>
                  <div className="flex flex-col gap-6">
                    {infoItems.map((item, i) => (
                      <div key={i} className="group flex items-start gap-5">
                         <div className="w-12 h-12 rounded-2xl bg-surface border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:border-text-primary/30 transition-all duration-300">
                           <item.icon className="w-5 h-5" />
                         </div>
                         <div className="flex flex-col">
                           <span className="text-[10px] text-muted/50 tracking-widest uppercase font-bold mb-1">{item.label}</span>
                           {item.href ? (
                             <a 
                               href={item.href} 
                               className="text-lg font-body font-medium text-text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-2 group"
                             >
                               {item.value}
                               <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                             </a>
                           ) : (
                             <span className="text-lg font-body font-medium text-text-primary">{item.value}</span>
                           )}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-surface/30 border border-stroke rounded-3xl group hover:border-text-primary/10 transition-colors">
                       <div className="w-14 h-14 rounded-2xl bg-accent-gradient p-[1px] flex-shrink-0">
                         <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center">
                           <benefit.icon className="w-6 h-6 text-text-primary" />
                         </div>
                       </div>
                       <div className="flex flex-col">
                         <h4 className="text-sm font-display font-semibold text-text-primary italic mb-1">{benefit.title}</h4>
                         <p className="text-xs text-muted font-body leading-relaxed">{benefit.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex items-center gap-3 ml-4">
                  <div className="relative flex h-2 w-2">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted font-body font-bold uppercase tracking-[0.2em]">Available for new projects</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={200}>
                <ContactForm />
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
