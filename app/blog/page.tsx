import AnimatedSection from "@/components/AnimatedSection";
import BlogGrid from "@/components/BlogGrid";

export default function Blog() {
  return (
    <main className="min-h-screen bg-bg pt-32 md:pt-40 pb-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gradient blur-[120px] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Hero */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="container max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold text-center">Insights</span>
              <div className="w-8 h-px bg-stroke" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-display text-text-primary leading-[1.05] mb-6 md:mb-8 italic">
              Tips & <span className="italic">*guides*</span> for owners.
            </h1>
            <p className="text-base md:text-xl text-muted font-body leading-relaxed max-w-2xl mx-auto">
              Learn how to get more customers online without paying high commission fees to third-party platforms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 relative z-10">
        <div className="container max-w-7xl mx-auto">
          <BlogGrid />
        </div>
      </section>
    </main>
  );
}
