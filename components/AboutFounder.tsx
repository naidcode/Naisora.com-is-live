"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="bg-bg py-24 px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 mb-12">
             <h2 className="text-4xl md:text-7xl font-display text-text-primary italic leading-tight text-center">
              Behind <span className="italic">Naisora</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 relative group flex flex-col items-center md:block overflow-visible mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-accent-gradient blur-[100px] opacity-[0.05] rounded-full scale-75" />
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-stroke bg-surface">
              {/* Note: User should replace this with their actual photo */}
              <div className="w-full h-full flex items-center justify-center bg-surface/50">
                 <span className="text-text-primary/20 text-8xl font-display italic font-bold">NP</span>
              </div>
            </div>
            
            <div className="relative mt-6 md:mt-0 md:absolute -bottom-6 -right-6 md:-right-12 bg-text-primary text-bg p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl z-20 w-[90%] md:w-auto mx-auto md:mx-0">
               <h4 className="text-xl md:text-2xl font-display italic font-bold">Nahid Pasha</h4>
               <p className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-70 mt-2">Founder, Naisora Agency</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-5xl font-display italic text-text-primary leading-tight">
                Helping restaurants <br />
                <span className="text-muted">reclaim their digital </span> <br />
                independence.
              </h3>
              
              <div className="space-y-6 text-lg text-muted font-body leading-relaxed max-w-xl">
                <p>
                  I started Naisora with a simple observation: Bangalore has some of the best food in the world, but many of our finest local restaurants are invisible on Google.
                </p>
                <p>
                  Most agencies build generic sites or overload small businesses with &quot;AI automation&quot; hype. I wanted to build something different — a premium, focused agency that gives restaurants a world-class digital storefront and helps them stand out where it matters most: local search.
                </p>
                <p>
                  At Naisora, we don&apos;t just build websites. We help you tell your story, showcase your passion, and grow your business without being 100% dependent on food aggregators.
                </p>
              </div>
              
              <div className="pt-8">
                <blockquote className="border-l-2 border-text-primary pl-8 text-2xl font-display italic text-text-primary">
                  &quot;Your restaurant&apos;s digital experience should be as premium as the food you serve.&quot;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
