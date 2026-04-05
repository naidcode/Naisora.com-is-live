"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "icon" | "full";
}

export function Logo({ className = "", variant = "icon" }: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={`relative flex items-center justify-center bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-[22%]"
        >
          {/* Robust, bold N to match the weight from the image */}
          <motion.path
            d="M30 72V28L70 72V28"
            stroke="white"
            strokeWidth="15"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className} group`}>
      {/* Icon portion - clean white on black */}
      <Logo variant="icon" className="w-8 h-8 flex-shrink-0" />
      
      {/* Full Wordmark - Exact pixel-perfect recreation of provided design */}
      <div className="hidden xs:flex items-center">
        <span className="text-white font-body font-black text-2xl tracking-tighter uppercase leading-none selection:bg-white selection:text-black">
          N
          <span className="relative inline-block mx-px">
            A
            {/* The signature diagonal slash line that 'cuts' the letter */}
            <span 
              className="absolute left-[-15%] top-[55%] w-[130%] h-[3px] bg-bg pointer-events-none" 
              style={{ transform: 'rotate(-25deg) translateY(-2px)' }}
            />
          </span>
          I S O R A
        </span>
      </div>
    </div>
  );
}
