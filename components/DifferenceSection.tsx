"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function DifferenceSection() {
  return (
    <section className="bg-surface py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display text-text-primary italic leading-tight mb-8">
              See the <span className="italic">Difference</span>
            </h2>
            <p className="text-lg text-muted font-body leading-relaxed max-w-2xl mx-auto text-center">
              We don&apos;t just build websites; we craft digital experiences that command attention. See how we transform &quot;just another site&quot; into a premium destination.
            </p>
          </motion.div>
        </div>

        <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-stroke bg-bg shadow-2xl w-full max-w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Legend / Content */}
            <div className="p-8 md:p-20 flex flex-col justify-center w-full">
              <div className="flex items-center gap-4 mb-10 md:mb-12">
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] tracking-[0.2em] text-muted/50 uppercase font-bold">From</div>
                  <div className="text-muted text-xs tracking-widest uppercase font-bold px-3 py-1 bg-surface border border-stroke rounded-full">Old Design</div>
                </div>
                <MoveRight size={20} className="text-stroke mt-4" />
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] tracking-[0.2em] text-accent uppercase font-bold">To</div>
                  <div className="text-text-primary text-xs tracking-widest uppercase font-bold px-3 py-1 bg-surface border border-stroke rounded-full">Naisora Premium</div>
                </div>
              </div>
              
              <h3 className="text-[clamp(2rem,6vw,3.5rem)] md:text-5xl font-display italic text-text-primary mb-10 leading-[1.2] md:leading-tight">
                Upgrade from &quot;functional&quot; to <span className="italic text-accent">*irresistible.*</span>
              </h3>
              
              <div className="max-w-full px-0">
                <ul className="space-y-6 md:space-y-8">
                  {[
                    { label: "Design", text: "From cluttered to minimal & focused" },
                    { label: "Performance", text: "From slow templates to custom performance" },
                    { label: "Branding", text: "From generic colors to premium palettes" },
                    { label: "Strategy", text: "From buried info to conversion-ready CTAs" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-muted/40">{item.label}</span>
                        <span className="text-base md:text-lg text-muted font-body leading-snug group-hover:text-text-primary transition-colors">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual */}
            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-auto w-full overflow-hidden bg-surface/50 border-t lg:border-t-0 lg:border-l border-stroke">
              <Image
                src="/website_design_comparison_1775998646972.png"
                alt="Before and After Restaurant Website Redesign"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
