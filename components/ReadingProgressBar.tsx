"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="h-full bg-text-primary transition-all duration-150 ease-out" 
      style={{ width: `${scroll}%` }} 
    />
  );
}
