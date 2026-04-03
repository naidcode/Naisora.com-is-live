import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import ProjectGrid from "@/components/ProjectGrid";
import TestimonialRow from "@/components/TestimonialRow";
import Explorations from "@/components/Explorations";
// import BlogGrid from "@/components/BlogGrid";
import FAQSection from "@/components/FAQSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-bg text-text-primary">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="bg-bg py-24 border-y border-stroke">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-5xl md:text-7xl font-display italic text-white tracking-tighter">50+</span>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">Restaurant Websites</span>
            </div>
            <div className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-stroke py-8 md:py-0">
              <span className="text-5xl md:text-7xl font-display italic text-white tracking-tighter">40%</span>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">Average Growth</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl md:text-7xl font-display italic text-white tracking-tighter">24/7</span>
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-body">AI-POWERED SYSTEMS</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceCards />
      <ProjectGrid />
      <TestimonialRow />
      <Explorations />

      {/* Latest Blog Section */}
      <section className="section-padding px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-[10px] text-muted tracking-[0.3em] uppercase font-body font-bold">Insights</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-[1.1]">
                Latest <span className="italic">*news*</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-sm font-body font-bold text-muted hover:text-text-primary transition-colors"
            >
              View All Articles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          {/* <BlogGrid limit={3} /> */}
        </div>
      </section>

      <FAQSection />
      
      {/* CTA Final Section */}
      <section className="relative py-24 md:py-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-surface/30 backdrop-blur-xl" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-stroke/30 px-4 py-1.5 rounded-full border border-stroke mb-8">
              <div className="w-1.5 h-1.5 bg-text-primary rounded-full animate-pulse" />
              <span className="text-[10px] text-muted tracking-[0.2em] uppercase font-body font-bold">Limited Availability</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-display text-text-primary leading-[1.1] mb-12">
              Ready to automate your <br /> <span className="italic">*restaurant growth?*</span>
            </h2>

            <Link 
              href="/contact" 
              className="btn-modern btn-modern-primary px-10 py-6 text-lg group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get My Free Website Audit <ArrowRight className="w-5 h-5" />
              </span>
              <div className="shimmer-sweep" />
            </Link>
            
            <p className="mt-8 text-sm text-muted font-body">
              No cost. No commitment. Results in 24 hours.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-gradient blur-[120px] opacity-[0.03] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-gradient blur-[100px] opacity-[0.05] rounded-full translate-y-1/2" />
      </section>
    </main>
  );
}
