"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HeroStats from "./HeroStats";

const ROLES = ["Websites", "Automations", "Growth", "Systems"];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
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
      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[10px] md:text-[0.6rem] text-muted uppercase tracking-[0.4em] mb-6 md:mb-8 font-body font-bold"
          >
            ESTABLISHED '26 • BANGALORE
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display italic leading-[0.9] md:leading-[0.85] tracking-tighter text-text-primary mb-6 md:mb-8"
          >
            Naisora <br className="hidden md:block" /> Agency
          </motion.h1>

          {/* Role cycling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl font-body text-muted/80 mb-6 md:mb-8"
          >
            We build{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-display italic text-text-primary inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            for local restaurants.
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base text-muted max-w-md md:max-w-lg mb-10 md:mb-12 font-body leading-relaxed px-4 md:px-0"
          >
            Designing seamless digital interactions by focusing on the unique nuances which bring systems to life and drive growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link 
              href="/contact" 
              className="btn-modern btn-modern-primary group w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Audit <ArrowUpRight className="w-4 h-4" />
              </span>
              <div className="shimmer-sweep" />
            </Link>
            <Link 
              href="/services" 
              className="btn-modern btn-modern-accent group w-full sm:w-auto px-10"
            >
              <span className="relative z-10">See Our Services</span>
              <div className="shimmer-sweep" />
            </Link>
          </motion.div>

          <HeroStats />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted tracking-[0.2em] font-body">SCROLL</span>
          <div className="w-[1px] h-12 bg-stroke/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
}
