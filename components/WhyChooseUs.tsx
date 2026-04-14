"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Zap, Heart } from "lucide-react";

const REASONS = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Niche Focused",
    desc: "We only work with restaurants and cafes. We understand your business, your customers, and your challenges."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Get your premium website live in as little as 10 days. No month-long delays, just results."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Modern & Clean",
    desc: "We prioritize aesthetic excellence and simplicity. Your website will be a work of art that converts."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Simple Process",
    desc: "No technical jargon. We handle everything from design to hosting so you can focus on your kitchen."
  }
];

const ReasonCard = ({ reason, i }: { reason: any; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }}
        className="relative flex flex-col h-full p-8 md:p-10 bg-surface/30 border border-stroke rounded-[2rem] overflow-hidden transition-all duration-500 ease-out cursor-default group"
      >
        {/* Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 40%)` }}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-stroke flex items-center justify-center mb-8 group-hover:bg-text-primary group-hover:text-bg transition-all duration-500">
            {reason.icon}
          </div>

          <h3 className="text-xl font-display italic text-text-primary mb-4">{reason.title}</h3>
          <p className="text-sm text-muted font-body leading-relaxed">{reason.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="bg-bg py-24 border-y border-stroke overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-display text-text-primary italic leading-tight"
            >
              Why Choose <span className="italic">Naisora</span>
            </motion.h2>
          </div>
          <div className="max-w-xs">
            <p className="text-muted font-body leading-relaxed">
              We combine deep restaurant industry knowledge with world-class design standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, i) => (
            <ReasonCard key={i} reason={reason} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
