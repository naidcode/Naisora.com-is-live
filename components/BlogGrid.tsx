"use client";
import React, { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { ArrowUpRight, Clock } from "lucide-react";

const TiltBlogCard = ({ post, index }: { post: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    setMousePosition({ x, y });
  };

  return (
    <AnimatedSection delay={(index % 3) * 100}>
      <Link href={`/blog/${post.slug}`} className="block h-full group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
          }}
          className="relative h-full bg-surface/50 border border-stroke rounded-[24px] overflow-hidden flex flex-col transition-all duration-500 hover:border-text-primary/30"
        >
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <Image 
              src={post.image || "/projects/mockup1.png"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4">
               <span className="px-3 py-1 rounded-full bg-bg/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-text-primary uppercase tracking-widest">
                {post.cat}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] text-muted font-bold tracking-widest uppercase">{post.date}</span>
              <div className="flex items-center gap-1.5 text-[10px] text-muted font-bold tracking-widest uppercase">
                <Clock size={12} />
                <span>{post.time}</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-display italic text-text-primary leading-tight mb-4 group-hover:translate-x-1 transition-transform">
              {post.title}
            </h3>

            <p className="text-sm text-muted font-body leading-relaxed line-clamp-2 md:line-clamp-3 mb-8">
              Discover why thousands of restaurant owners are switching to custom-built websites to drive more direct bookings and eliminate third-party commission fees.
            </p>

            <div className="mt-auto pt-6 border-t border-stroke flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest font-bold text-text-primary group-hover:text-white transition-colors">Read Article</span>
              <ArrowUpRight size={16} className="text-muted group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>

           {/* Glow Effect */}
           <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 40%)` }}
          />
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default function BlogGrid({ limit }: { limit?: number }) {
  const posts = BLOG_POSTS;

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {displayedPosts.map((post, i) => (
        <TiltBlogCard key={i} post={post} index={i} />
      ))}
    </div>
  );
}
