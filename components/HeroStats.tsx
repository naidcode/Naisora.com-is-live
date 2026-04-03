"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 md:gap-16 items-center border-t border-stroke pt-8 load-stagger del-7 w-full max-w-3xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col items-center">
        <AnimatedCounter end={30} suffix="+" />
        <span className="font-body text-[11px] md:text-[13px] text-muted font-medium uppercase tracking-wider">Projects Delivered</span>
      </div>
      
      <div className="hidden sm:block w-px bg-stroke h-12 justify-self-center opacity-50" />
      <div className="sm:hidden h-px bg-stroke w-full opacity-30" />
      
      <div className="flex flex-col items-center">
        <AnimatedCounter end={100} />
        <span className="font-body text-[11px] md:text-[13px] text-muted font-medium uppercase tracking-wider">PageSpeed Score</span>
      </div>

      <div className="hidden sm:block w-px bg-stroke h-12 justify-self-center opacity-50" />
      <div className="sm:hidden h-px bg-stroke w-full opacity-30" />

      <div className="flex flex-col items-center">
        <AnimatedCounter end={4} suffix=".9★" duration={1500} />
        <span className="font-body text-[11px] md:text-[13px] text-muted font-medium uppercase tracking-wider">Average Rating</span>
      </div>
    </div>
  );
}
