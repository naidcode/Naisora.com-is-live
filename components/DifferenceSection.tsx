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

        <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-stroke bg-bg shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Legend / Content */}
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-12">
                <div className="text-muted text-xs tracking-widest uppercase font-bold">Old Design</div>
                <MoveRight size={20} className="text-stroke" />
                <div className="text-text-primary text-xs tracking-widest uppercase font-bold">Naisora Premium</div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-display italic text-text-primary mb-8 leading-tight">
                Upgrade from &quot;functional&quot; to <span className="italic">*irresistible.*</span>
              </h3>
              
              <ul className="space-y-6">
                {[
                  "From cluttered to minimal & focused",
                  "From slow templates to custom high-performance",
                  "From generic colors to premium palettes",
                  "From buried info to conversion-ready CTAs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src="/website_design_comparison_1775998646972.png"
                alt="Before and After Restaurant Website Redesign"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
