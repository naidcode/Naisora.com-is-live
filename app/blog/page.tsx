import AnimatedSection from "@/components/AnimatedSection";
import BlogGrid from "@/components/BlogGrid";

export default function Blog() {
  return (
    <main className="min-h-screen bg-bg pt-32 md:pt-40 pb-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gradient blur-[120px] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Hero */}
      <section className="px-6 mb-12 md:mb-20">
        <div className="container max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-stroke" />
              <span className="text-[10px] text-accent tracking-[0.5em] uppercase font-black text-center">Naisora Journal</span>
              <div className="w-12 h-px bg-stroke" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display text-text-primary leading-[1.05] mb-8 italic font-bold tracking-tight">
              Intelligence for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">Modern</span> Restaurateurs.
            </h1>
            <p className="text-base md:text-xl text-muted font-body leading-relaxed max-w-2xl mx-auto">
              Strategic insights on AI, marketing, and technology to help Bangalore food brands scale profitably.
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
