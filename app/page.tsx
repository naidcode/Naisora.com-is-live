import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const WhoThisIsFor = dynamic(() => import("@/components/WhoThisIsFor"));
const DifferenceSection = dynamic(() => import("@/components/DifferenceSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const AboutFounder = dynamic(() => import("@/components/AboutFounder"));
const ServiceCards = dynamic(() => import("@/components/ServiceCards"));
const ProjectGrid = dynamic(() => import("@/components/ProjectGrid"));
const TestimonialRow = dynamic(() => import("@/components/TestimonialRow"));
const Explorations = dynamic(() => import("@/components/Explorations"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const PricingCards = dynamic(() => import("@/components/PricingCards"));

export default function Home() {
  return (
    <main className="bg-bg text-text-primary pb-32 md:pb-0">
      <HeroSection />
      
      <ProblemSection />

      <ServiceCards />

      <PricingCards />

      <WhoThisIsFor />

      <DifferenceSection />

      <ProjectGrid />

      <WhyChooseUs />

      <AboutFounder />

      <TestimonialRow />
      
      <Explorations />

      <FAQSection />
      
      {/* CTA Final Section */}
      <section className="relative py-24 md:py-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-surface/30 backdrop-blur-xl" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-stroke/30 px-4 py-1.5 rounded-full border border-stroke mb-8">
              <div className="w-1.5 h-1.5 bg-text-primary rounded-full animate-pulse" />
              <span className="text-[10px] text-muted tracking-[0.2em] uppercase font-body font-bold">Limited Slots for May</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-display text-text-primary leading-[1.1] mb-12">
              Ready to build your <br /> <span className="italic">*premium website?*</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact" 
                className="btn-modern btn-modern-primary px-10 py-2.5 md:py-3.5 text-lg group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Website Audit <ArrowRight className="w-5 h-5" />
                </span>
                <div className="shimmer-sweep" />
              </Link>

              <Link 
                href="/contact" 
                className="btn-modern btn-modern-accent px-10 py-2.5 md:py-3.5 text-lg group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Website
                </span>
                <div className="shimmer-sweep" />
              </Link>
            </div>
            
            <p className="mt-8 text-sm text-muted font-body">
              Join 10+ Bangalore food brands growing with Naisora.
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

