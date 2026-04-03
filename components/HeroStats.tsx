"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function HeroStats() {
  return (
    <div className="flex justify-center load-stagger del-7" style={{
      borderTop: "1px solid #1F1F1F",
      paddingTop: "32px",
      gap: "64px",
      flexWrap: "wrap"
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <AnimatedCounter end={30} suffix="+" />
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555555", fontWeight: 500 }}>Projects Delivered</span>
      </div>
      <div style={{ width: "1px", backgroundColor: "#1F1F1F", height: "48px" }} className="stats-divider"></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <AnimatedCounter end={100} />
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555555", fontWeight: 500 }}>PageSpeed Score</span>
      </div>
      <div style={{ width: "1px", backgroundColor: "#1F1F1F", height: "48px" }} className="stats-divider"></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <AnimatedCounter end={4} suffix=".9★" duration={1500} />
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#555555", fontWeight: 500 }}>Average Rating</span>
      </div>
    </div>
  );
}
