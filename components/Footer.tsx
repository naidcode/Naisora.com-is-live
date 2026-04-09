"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, Twitter, Facebook, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <footer className="relative bg-bg pt-24 pb-12 overflow-hidden border-t border-stroke">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Marquee Section */}
        <div className="mb-24 overflow-hidden py-4 border-y border-white/5">
          <m.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap text-5xl md:text-8xl font-display italic text-text-primary/10 tracking-[0.1em]"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mr-8">BUILDING THE FUTURE • </span>
            ))}
          </m.div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-display text-text-primary leading-tight mb-8">
              Let's craft something <br /> <span className="italic">*extraordinary*</span> together.
            </h2>
            
            <a 
              href="mailto:hello@naisora.com" 
              className="group relative inline-flex px-10 py-5 rounded-full text-lg font-semibold text-text-primary transition-all hover:scale-105"
            >
              <span className="relative z-10">hello@naisora.com</span>
              <div className="absolute inset-0 border border-stroke rounded-full group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-[-2px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[1px] bg-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </a>

            <a 
              href="tel:+917975219560" 
              className="mt-6 group relative inline-flex px-10 py-5 rounded-full text-lg font-semibold text-text-primary transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-5 h-5" /> +91 7975219560
              </span>
              <div className="absolute inset-0 border border-stroke rounded-full group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-[-2px] accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[1px] bg-bg rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </a>
            <div className="mt-8 text-muted font-body font-medium">Bangalore, Karnataka, IN</div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-stroke">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="/" className="group transition-transform hover:scale-105 active:scale-95 mr-0 md:mr-4 w-full md:w-auto flex justify-center mb-4 md:mb-0">
              <Logo variant="full" className="h-7" />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="mailto:hello@naisora.com" className="text-muted hover:text-text-primary transition-colors"><Mail className="w-5 h-5" /></Link>
              <Link href="https://facebook.com/naisora" className="text-muted hover:text-text-primary transition-colors" target="_blank"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://instagram.com/naisora" className="text-muted hover:text-text-primary transition-colors" target="_blank"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://linkedin.com/company/naisora" className="text-muted hover:text-text-primary transition-colors" target="_blank"><Linkedin className="w-5 h-5" /></Link>
              <Link href="https://twitter.com/naisora" className="text-muted hover:text-text-primary transition-colors" target="_blank"><Twitter className="w-5 h-5" /></Link>
              <Link href="https://github.com/naisora" className="text-muted hover:text-text-primary transition-colors" target="_blank"><Github className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-surface/30 px-5 py-2.5 rounded-full border border-stroke backdrop-blur-sm order-first md:order-none">
            <div className="relative flex h-2 w-2">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
            </div>
            <span className="text-[10px] md:text-xs text-text-primary font-body font-medium uppercase tracking-widest">Available for projects</span>
          </div>

          <div className="text-[10px] md:text-xs text-muted font-body uppercase tracking-wider text-center">
            © 2026 NAISORA AGENCY • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
    </LazyMotion>
  );
}
