"use client";

import { useEffect } from "react";

export default function GlobalSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: `
          radial-gradient(
            250px circle at var(--x) var(--y),
            rgba(137, 170, 204, 0.1) 0%,
            transparent 100%
          ),
          radial-gradient(
            800px circle at var(--x) var(--y),
            rgba(137, 170, 204, 0.06) 0%,
            rgba(78, 133, 191, 0.03) 40%,
            transparent 80%
          )
        `,
        mixBlendMode: "screen",
        zIndex: 0,
        transition: "opacity 250ms ease"
      }}
    />
  );
}
