"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <m.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className={`
          pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-3 md:px-4 py-2
          transition-all duration-300 relative
          ${scrolled ? "shadow-xl shadow-black/20" : "shadow-none"}
        `}
      >
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="group transition-transform hover:scale-105 active:scale-95 px-1 mr-1">
          <Logo variant="full" className="h-6 md:h-8" />
        </Link>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
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

        <div className="hidden md:block w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* Phone Link */}
        <Link
          href="tel:+917975219560"
          className="hidden md:flex items-center text-xs sm:text-sm font-body font-semibold text-text-primary hover:text-white transition-colors px-3"
        >
          +91 7975219560
        </Link>

        {/* Desktop CTA */}
        <Link 
          href="/contact" 
          className="hidden md:flex group relative text-xs sm:text-sm rounded-full px-5 py-2 font-body font-semibold text-text-primary overflow-hidden items-center justify-center"
        >
          <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
            Free Audit <span className="text-[10px]">↗</span>
          </span>
          <div className="absolute inset-0 bg-stroke/50 group-hover:opacity-0 transition-opacity" />
          <div className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[1px] bg-surface rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>


        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-text-primary hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-2] pointer-events-auto"
              />
              {/* Menu Card */}
              {/* Menu Card */}
              <m.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[280px] p-8 bg-[#111] border border-white/10 rounded-[30px] shadow-2xl z-[110] flex flex-col items-center gap-6 pointer-events-auto"
              >
                {NAV_LINKS.map((link, i) => (
                  <m.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`
                        block text-3xl font-display font-medium italic py-2 transition-all
                        ${pathname === link.href ? "text-text-primary scale-110" : "text-muted hover:text-text-primary"}
                      `}
                    >
                      {link.name}
                    </Link>
                  </m.div>
                ))}
                
                <div className="w-full h-px bg-white/5 my-2" />
                
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="w-full"
                >
                  <Link 
                    href="/contact" 
                    className="btn-modern btn-modern-primary w-full py-4 text-base"
                  >
                    Get Free Audit ↗
                  </Link>
                </m.div>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </m.nav>
    </header>
    </LazyMotion>
  );
}
