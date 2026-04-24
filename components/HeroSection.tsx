"use client";

import { useEffect, useRef, useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ROLES = ["Websites", "SEO Visibility", "Redesigns"];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    let hlsInstance: any = null;

    import("hls.js").then((HlsModule) => {
      const Hls = HlsModule.default;
      if (Hls.isSupported()) {
        hlsInstance = new Hls();
        hlsInstance.loadSource(hlsUrl);
        hlsInstance.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsUrl;
      }
    });

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-40"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-6 pt-28 md:pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Title */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-display italic leading-[1] md:leading-[0.85] tracking-tighter text-text-primary mb-12 text-center"
          >
            We Build <br />
            <span className="text-muted italic">Premium Websites</span> <br />
            for Restaurants in Bangalore
          </m.h1>

          {/* Subheadline */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-muted/90 max-w-md md:max-w-xl mb-12 md:mb-16 font-body leading-relaxed px-4 md:px-0"
          >
            We build award-winning, high-speed digital experiences that capture the essence of your restaurant and command attention on Google. 
          </m.p>


          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link
              href="/contact"
              className="btn-modern btn-modern-primary group w-full sm:w-auto px-10 py-2.5 md:py-3.5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get a Free Audit <ArrowRight className="w-5 h-5" />
              </span>
              <div className="shimmer-sweep" />
            </Link>
            <Link
              href="/services"
              className="btn-modern btn-modern-accent group w-full sm:w-auto px-10 py-2.5 md:py-3.5"
            >
              <span className="relative z-10">See Our Services</span>
              <div className="shimmer-sweep" />
            </Link>
          </m.div>
        </div>


        {/* Scroll Indicator */}
        <div className="flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] text-muted tracking-[0.2em] font-body">DISCOVER</span>
          <div className="w-[1px] h-12 bg-stroke/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}