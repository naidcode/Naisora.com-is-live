"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2700ms duration for count 0-100
    const duration = 2700;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        // Delay 400ms after reaching 100
        setTimeout(() => {
          setIsComplete(true);
          // 800ms fade out
          setTimeout(() => setIsVisible(false), 800);
        }, 400);
      }
    };

    requestAnimationFrame(updateCount);

    // Words cycling every 900ms (2700 / 3)
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isComplete ? 0 : 1,
        y: isComplete ? -20 : 0
      }}
      transition={{ duration: 0.8, ease: [0.8, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col justify-between p-8 md:p-12"
    >
      {/* Top Left Label */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[10px] md:text-xs text-muted/60 uppercase tracking-[0.3em] font-body"
      >
        Naisora Agency
      </motion.div>

      {/* Center Rotating Words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-display italic text-text-primary/80"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-end">
          <motion.div 
            className="text-5xl md:text-9xl lg:text-[12rem] font-display text-text-primary tabular-nums tracking-tighter"
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-[2px] md:h-[3px] w-full bg-stroke/30 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full accent-gradient shadow-[0_0_15px_rgba(137,170,204,0.4)]"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
