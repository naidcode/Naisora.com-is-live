"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight, Zap, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function DifferenceSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  useEffect(() => {
    const handleUp = () => setIsResizing(false);
    
    if (isResizing) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("touchend", handleUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isResizing]);

  return (
    <section className="bg-bg py-24 md:py-40 px-6 relative overflow-hidden border-t border-stroke">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gradient opacity-[0.03] blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-surface border border-stroke rounded-full mb-8">
                <Zap size={12} className="text-text-primary" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-muted">Transformation</span>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-display text-text-primary italic leading-[1.1] mb-8">
                Upgrade from <span className="text-muted">dated</span> to <span className="italic">*commanding.*</span>
              </h2>
              
              <p className="text-lg text-muted font-body leading-relaxed mb-12">
                Most restaurant websites in Bangalore use slow, generic templates from 2018. We build custom experiences that reflect the true quality of your food and interior.
              </p>

              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: "The 'Old' Way", items: ["Cluttered templates", "Slow mobile load", "Third-party dependency"], type: "bad" },
                  { title: "Naisora Premium", items: ["Minimal & focused", "Instant page loads", "Direct conversion funnels"], type: "good" }
                ].map((group, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${group.type === 'good' ? 'border-text-primary/20 bg-surface' : 'border-stroke bg-surface/30'}`}>
                    <h4 className={`text-sm font-bold tracking-widest uppercase mb-4 ${group.type === 'good' ? 'text-text-primary' : 'text-muted'}`}>
                      {group.title}
                    </h4>
                    <ul className="space-y-3">
                      {group.items.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-3 text-sm font-body text-muted">
                          {group.type === 'good' ? <CheckCircle2 size={14} className="text-text-primary" /> : <div className="w-1.5 h-1.5 rounded-full bg-stroke" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual — Image Slider */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke bg-surface shadow-2xl group cursor-col-resize select-none"
              ref={containerRef}
              onMouseDown={() => setIsResizing(true)}
              onTouchStart={() => setIsResizing(true)}
            >
              {/* After Image (Full Size) */}
              <div className="absolute inset-0">
                <Image
                  src="/difference_after.png"
                  alt="Naisora Premium Design"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 border-r border-white/20 z-10"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
              >
                <div className="absolute inset-0 w-[1000%] h-full">
                    <div className="relative h-full" style={{ width: `${containerRef.current?.offsetWidth || 800}px` }}>
                        <Image
                            src="/difference_before.png"
                            alt="Old Website Design"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute inset-y-0 z-20 w-1 bg-white/50 -translate-x-1/2 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-[4px] border-bg">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-3 bg-bg rounded-full" />
                        <div className="w-0.5 h-3 bg-bg rounded-full" />
                    </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-8 left-8 z-20 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 pointer-events-none">
                Before
              </div>
              <div className="absolute top-8 right-8 z-20 px-4 py-1.5 bg-text-primary text-bg rounded-full text-[10px] font-bold tracking-widest uppercase pointer-events-none">
                After
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-6 py-3 bg-bg/80 backdrop-blur-xl rounded-full text-[10px] font-bold tracking-widest uppercase border border-stroke flex items-center gap-3 group-hover:opacity-0 transition-opacity duration-300">
                <MoveRight size={14} className="animate-pulse" />
                Drag to compare
                <MoveRight size={14} className="rotate-180 animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
