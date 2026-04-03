"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "./Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-auto">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className={`
          pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-4 py-2
          transition-all duration-300
          ${scrolled ? "shadow-xl shadow-black/20" : "shadow-none"}
        `}
      >
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="group transition-transform hover:scale-105 active:scale-95 px-1 mr-1">
          <Logo variant="full" className="h-8" />
        </Link>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-xs sm:text-sm rounded-full px-4 py-2 transition-all font-body font-medium
                ${pathname === link.href ? "text-text-primary bg-stroke/50" : "text-muted hover:text-text-primary hover:bg-stroke/30"}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Call to Action */}
        <Link 
          href="/contact" 
          className="group relative text-xs sm:text-sm rounded-full px-5 py-2 font-body font-semibold text-text-primary overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Say hi <span className="text-[10px]">↗</span>
          </span>
          <div className="absolute inset-0 bg-stroke/50 group-hover:opacity-0 transition-opacity" />
          <div className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[1px] bg-surface rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-text-primary z-10">
             Say hi ↗
          </span>
        </Link>
      </motion.nav>
      </header>
  );
}
