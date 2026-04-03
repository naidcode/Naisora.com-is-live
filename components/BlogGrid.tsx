"use client";
import React, { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import Image from "next/image";

const TiltBlogCard = ({ post, index }: { post: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <AnimatedSection delay={(index % 3) * 80}>
      <Link href={`/blog/${post.slug}`} style={{ display: "block", textDecoration: "none", height: "100%" }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            backgroundColor: "#101010",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transition: isHovered ? "none" : "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
            boxShadow: isHovered ? "0 30px 60px rgba(0,0,0,0.6)" : "0 10px 30px rgba(0,0,0,0.3)",
            cursor: "pointer",
            zIndex: isHovered ? 10 : 1
          }}
        >
          {/* Glow overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 300ms ease",
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
            zIndex: 0
          }} />

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{
              position: "relative",
              height: "200px",
              width: "100%",
              backgroundColor: "#161616",
              overflow: "hidden"
            }}>
              <Image 
                src={post.image || "/projects/mockup1.png"}
                alt={post.title}
                fill
                className="object-cover"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                backgroundColor: "rgba(16, 16, 16, 0.8)",
                backdropFilter: "blur(4px)",
                padding: "6px 12px",
                borderRadius: "6px",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                color: "#555555",
                textTransform: "uppercase",
                letterSpacing: "0.12em"
              }}>
                {post.cat}
              </div>
            </div>

            <div style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
              transition: "transform 300ms ease-out"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "#333333" }}>
                  {post.date}
                </span>
                <div style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isHovered ? "#FFFFFF" : "transparent",
                  transition: "all 300ms ease",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateX(0)" : "translateX(-8px)"
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isHovered ? "#000000" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{
                    transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
                    transition: "transform 300ms ease"
                  }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <h3 style={{
                fontFamily: "var(--font-syne)",
                fontSize: "17px",
                fontWeight: 600,
                color: isHovered ? "#FFFFFF" : "var(--color-white)",
                marginBottom: "12px",
                transition: "color 300ms ease"
              }}>
                {post.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "#666666",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "24px",
                flexGrow: 1
              }}>
                Short excerpt for the blog post preview goes here, enough to catch attention without being too long.
              </p>
              <div style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                color: "#333333",
                borderTop: "1px solid #1A1A1A",
                paddingTop: "16px",
                marginTop: "auto"
              }}>
                {post.time} read
              </div>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default function BlogGrid() {
  const posts = [
    { 
      slug: "why-your-restaurant-needs-a-website", 
      cat: "WEBSITE TIPS", 
      title: "Why Your Restaurant Needs a Website in 2025 (Not Just a Zomato Page)", 
      time: "4 min", 
      date: "Mar 20, 2025",
      image: "/projects/mockup1.png"
    },
    { 
      slug: "how-to-rank-on-google-maps", 
      cat: "GOOGLE SEO", 
      title: "How to Rank #1 on Google Maps for 'Restaurants Near Me' in Bangalore", 
      time: "6 min", 
      date: "Mar 15, 2025",
      image: "/projects/mockup2.png"
    },
    { 
      slug: "ai-whatsapp-automation", 
      cat: "AUTOMATION", 
      title: "How AI Can Reply to Your WhatsApp Orders While You're Cooking", 
      time: "5 min", 
      date: "Mar 10, 2025",
      image: "/projects/mockup3.png"
    },
    { 
      slug: "restaurant-website-essentials", 
      cat: "WEBSITE TIPS", 
      title: "The 7 Things Every Restaurant Website Must Have to Convert Visitors", 
      time: "7 min", 
      date: "Mar 05, 2025",
      image: "/projects/mockup4.png"
    },
    { 
      slug: "restaurant-logo-matters", 
      cat: "BRANDING", 
      title: "Why Your Restaurant Logo Matters More Than You Think", 
      time: "3 min", 
      date: "Feb 28, 2025",
      image: "/projects/mockup2.png"
    },
    { 
      slug: "competitor-not-on-google", 
      cat: "GOOGLE SEO", 
      title: "Competitor Not on Google? Here's How to Capture Their Customers", 
      time: "5 min", 
      date: "Feb 20, 2025",
      image: "/projects/mockup3.png"
    },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "32px",
      perspective: "1200px"
    }}>
      {posts.map((post, i) => (
        <TiltBlogCard key={i} post={post} index={i} />
      ))}
    </div>
  );
}


