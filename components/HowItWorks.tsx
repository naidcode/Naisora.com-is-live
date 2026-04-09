"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, MessageSquare, BarChart, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    icon: Search,
    title: "1. Audit & Analysis",
    desc: "We start by analyzing your current digital footprint and your competitors in Bangalore. We identify where you're losing customers and where your biggest growth opportunities lie.",
    details: "Using advanced AI tools, we scan your site speed, SEO rankings, and local search visibility to create a customized roadmap for your restaurant's digital transformation."
  },
  {
    icon: PenTool,
    title: "2. Strategic Design",
    desc: "Our design team crafts a high-conversion website that captures your restaurant's unique soul. We focus on mobile excellence, ensuring 100% responsiveness for customers on the go.",
    details: "Every element is meticulously designed—from your menu layout to your reservation flow—to ensure a premium experience that drives direct bookings and beats delivery commission costs."
  },
  {
    icon: Rocket,
    title: "3. AI Implementation",
    desc: "We deploy custom restaurant automation systems that handle recurring tasks, allowing you to focus on the kitchen while AI manages your digital inquiries and reviews.",
    details: "Our Bangalore-specific AI agents handle WhatsApp bookings, Instagram DMs, and Google reviews with professional, instant responses that reflect your brand identity."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg py-24 md:py-32 px-6 border-t border-stroke">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Process</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary italic leading-[1.1]">
              How it <span className="italic">*works.*</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100} className="max-w-md">
            <p className="text-lg text-muted font-body leading-relaxed">
              We&apos;ve refined a precise workflow designed to scale Bangalore restaurants through AI-driven design and local SEO domination.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {STEPS.map((step, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-stroke flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary">{step.title}</h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base text-muted font-body leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-sm text-muted/60 font-body leading-relaxed border-l border-stroke pl-4">
                    {step.details}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* SEO Content Expansion Block */}
        <AnimatedSection delay={400} className="mt-32 pt-24 border-t border-stroke">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12">
              <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
                <h3 className="text-3xl md:text-5xl font-display text-text-primary mb-4 italic">
                  Engineered for AI-driven restaurant growth in Bangalore.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-muted font-body leading-relaxed">
                  <p>
                    Bangalore is the innovation hub of India, and your restaurant deserves technology that matches its city. At Naisora, we don&apos;t just build websites; we build ecosystem engines. By focusing on <strong>AI-driven restaurant growth in Bangalore</strong>, we ensure that your digital presence is as vibrant as your kitchen. We specialize in identifying the specific local search patterns that drive customers to Indiranagar, Koramangala, and beyond.
                  </p>
                  <p>
                    One of our primary goals is <strong>beating delivery commission costs</strong>. We know that platforms can eat into your bottom line, taking up to 30% of every order. Our &quot;How it Works&quot; process is specifically optimized to drive direct traffic to your site, where you own the data and the profits. From citation building to automated review management, every step we take is a step toward your independent success and long-term scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
