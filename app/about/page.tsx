"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, MapPin, Award, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "AI-First Approach",
      desc: "We leverage cutting-edge AI to automate repetitive tasks, allowing us to focus on high-level strategy and creativity for your brand.",
      icon: Rocket
    },
    {
      title: "Result Oriented",
      desc: "We don't just build websites; we build business tools. Our focus is always on conversions, growth, and measurable success.",
      icon: Target
    },
    {
      title: "Hyper-Local",
      desc: "Deeply rooted in Bangalore, we understand the local dining culture and consumer behavior better than anyone else.",
      icon: MapPin
    }
  ];

  const milestones = [
    { label: "Founded", value: "2026" },
    { label: "Projects", value: "30+" },
    { label: "Rating", value: "4.9★" },
    { label: "Success", value: "100%" }
  ];

  return (
    <main className="min-h-screen bg-bg pt-32 md:pt-40 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">The Naisora Story</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display text-text-primary leading-[1.05] mb-6 md:mb-8 italic">
              Building the future of <br /> <span className="italic">*dining*</span> in Bangalore.
            </h1>
            <p className="text-xl text-muted font-body leading-relaxed max-w-3xl mx-auto">
              Naisora is an AI-powered design collective based in Bangalore. We bridge the gap between traditional hospitality and the modern digital world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats/Milestones */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="container max-w-6xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 md:py-16 border-y border-stroke">
              {milestones.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-display italic text-text-primary tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 mb-24 md:mb-40">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke group">
                 <Image 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                   alt="Naisora Agency Culture"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                 />
                 <div className="absolute inset-0 bg-accent-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center z-10">
                       <Award className="w-12 h-12 text-text-primary/50" />
                    </div>
                 </div>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-8">
              <AnimatedSection delay={100}>
                 <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-text-primary italic leading-tight">
                   Our mission is to <br /> empower *local* icons.
                 </h2>
                 <p className="text-lg text-muted font-body leading-relaxed mt-6">
                   Every legendary restaurant in Bangalore has a story worth telling. We believe that professional design and AI automation shouldn&apos;t just be for global chains. 
                 </p>
                 <p className="text-lg text-muted font-body leading-relaxed">
                   We founded Naisora to give independent cafes and restaurants the tools they need to dominate their local search, automate their bookings, and grow their brand without limits. 
                 </p>
                 <p className="text-lg text-muted font-body leading-relaxed">
                   In a city like Bangalore, where the culinary scene is evolving at breakneck speed, standing out requires more than just good food. It requires a digital presence that captures the soul of your kitchen and the efficiency of modern technology. We help you bridge that gap.
                 </p>
                 
                 <div className="flex flex-col gap-4 mt-8">
                    {["AI-Powered Efficiency", "Bespoke Visual Identity", "Local SEO Domination"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-text-primary" />
                        <span className="text-sm font-body font-semibold text-text-primary uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                 </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Growth Section (SEO Expansion) */}
      <section className="px-6 mb-24 md:mb-40">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-display text-text-primary italic mb-8">Stop paying the <span className="italic">*commission tax.*</span></h2>
              <div className="flex flex-col gap-6 text-lg text-muted font-body leading-relaxed text-left md:text-center max-w-4xl mx-auto">
                <p>
                  For too long, Bangalore&apos;s best restaurants have been held hostage by delivery platforms. When you pay 25-30% on every order, you aren&apos;t just losing profit—you&apos;re losing the direct relationship with your customers. Naisora was built to break this cycle. Our <strong>AI-driven restaurant growth strategies in Bangalore</strong> focus on driving direct traffic to your own platform.
                </p>
                <p>
                  By optimizing your local SEO and building high-performance websites, we ensure that when a hungry customer searches for your cuisine in Indiranagar, Koramangala, or Whitefield, they find <em>you</em> first, not a middleman. We implement smart automation that handles bookings and inquiries instantly, providing a premium experience that keeps customers coming back to you directly.
                </p>
                <p>
                  Beating delivery commission costs isn&apos;t just about having a website; it&apos;s about having a system that converts. Our AI tools analyze customer behavior and automate follow-ups, ensuring that every visitor to your site is guided toward a direct booking or order. This is how we achieve 40% average growth for our partners—by giving them back control of their revenue and their brand identity.
                </p>
                <p>
                  In the competitive Bangalore market, efficiency is everything. Our AI agents handle the repetitive tasks—answering FAQ, confirming tables, responding to reviews—so your staff can focus on what they do best: creating incredible dining experiences. This holistic approach to <strong>restaurant automation</strong> is what sets Naisora apart as the leading growth partner for local dining icons.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 mb-24 md:mb-40">
        <div className="container max-w-7xl mx-auto">
          <div className="bg-surface/30 backdrop-blur-sm border border-stroke rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gradient blur-[100px] opacity-[0.03] rounded-full translate-x-1/4 -translate-y-1/4" />
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                <div className="lg:col-span-4">
                   <AnimatedSection>
                      <div className="relative aspect-square rounded-[32px] overflow-hidden border border-stroke group shadow-2xl">
                         <Image 
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                           alt="Naisora Founder"
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                      </div>
                   </AnimatedSection>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-6">
                   <AnimatedSection delay={100}>
                      <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Leading the Vision</span>
                      <h3 className="text-3xl md:text-4xl font-display text-text-primary italic">The Naisora Philosophy</h3>
                      <p className="text-lg md:text-xl text-muted font-body leading-relaxed italic border-l border-stroke pl-6 md:pl-8 my-6 md:my-8">
                         "Technology should feel invisible, yet its impact should be undeniable. We're not just making websites; we're crafting digital environments where Bangalore's best flavors can thrive."
                      </p>
                      <div className="flex flex-wrap gap-3">
                         {["Web Architecture", "Growth Strategy", "AI Implementation", "Brand Identity"].map((skill, i) => (
                           <span key={i} className="px-5 py-2 rounded-full bg-surface border border-stroke text-[11px] font-body font-bold text-muted uppercase tracking-widest">{skill}</span>
                         ))}
                      </div>
                   </AnimatedSection>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-6 pb-24">
        <div className="container max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-20">
               <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-text-primary italic">Our Core <span className="italic">*values*</span></h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {values.map((value, i) => (
               <div key={i} className={`${i === 2 ? 'md:col-span-2 lg:col-span-1 md:flex md:justify-center' : ''}`}>
                 <AnimatedSection delay={i * 100} className="h-full">
                    <div className={`group h-full p-8 md:p-10 bg-surface/30 border border-stroke rounded-[24px] md:rounded-[32px] hover:bg-surface/50 transition-all duration-500 hover:-translate-y-2 ${i === 2 ? 'md:max-w-[calc(50%-1rem)] lg:max-w-none' : ''}`}>
                       <div className="w-14 h-14 rounded-2xl bg-accent-gradient p-[1px] mb-8 group-hover:scale-110 transition-transform">
                          <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center">
                             <value.icon className="w-6 h-6 text-text-primary" />
                          </div>
                       </div>
                       <h3 className="text-2xl font-display text-text-primary italic mb-4">{value.title}</h3>
                       <p className="text-muted font-body leading-relaxed">{value.desc}</p>
                    </div>
                 </AnimatedSection>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}
