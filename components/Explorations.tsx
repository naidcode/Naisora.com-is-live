"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { img: "/projects/mockup1.png", rotate: "-6deg", y: "0px" },
  { img: "/projects/mockup2.png", rotate: "12deg", y: "60px" },
  { img: "/explorations/exp1.png", rotate: "-8deg", y: "-40px" },
  { img: "/projects/mockup3.png", rotate: "4deg", y: "100px" },
  { img: "/projects/mockup4.png", rotate: "-10deg", y: "20px" },
  { img: "/explorations/exp2.png", rotate: "15deg", y: "-80px" },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the header content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax effect for gallery columns
      const items = gsap.utils.toArray(".parallax-item");
      items.forEach((item: any, i) => {
        gsap.to(item, {
          yPercent: (i % 2 === 0 ? -20 : 20) * (i + 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[250vh] bg-bg overflow-hidden">
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="h-screen w-full flex items-center justify-center pointer-events-none z-10 px-6">
        <div className="max-w-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display text-text-primary italic leading-none mb-8">
            Visual <br /> *playground*
          </h2>
          <p className="text-muted text-base md:text-lg font-body leading-relaxed max-w-sm mx-auto">
            A deep dive into our creative process, experiments, and early-stage prototypes.
          </p>
        </div>
      </div>

      {/* Layer 2: Parallax Cards */}
      <div ref={galleryRef} className="absolute inset-0 z-0 py-40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-8 md:gap-32 px-6">
          {ITEMS.map((item, i) => (
            <div 
              key={i} 
              className={`parallax-item flex justify-center ${i % 2 === 0 ? "pt-20" : "pt-0"}`}
            >
              <div 
                className="relative aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-surface group cursor-pointer"
                style={{ rotate: item.rotate, transform: `translateY(${item.y})` }}
              >
                <Image
                  src={item.img}
                  alt="Exploration"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bg opacity-20 group-hover:opacity-0 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


