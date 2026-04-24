"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BLOG_POSTS } from "@/lib/blog-posts";

const BlogEntry = ({ entry, index }: { entry: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link 
        href={`/blog/${entry.slug}`}
        className="group flex flex-col md:flex-row items-center gap-6 p-4 md:p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[24px] md:rounded-full transition-all duration-500 cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="relative w-full md:w-24 h-40 md:h-24 rounded-[20px] md:rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 100px"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4 md:pr-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-muted tracking-[0.2em] uppercase font-body font-bold">
              {entry.cat} — {entry.date}
            </span>
            <h3 className="text-xl md:text-2xl font-display italic text-text-primary group-hover:text-white transition-colors">
              {entry.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted font-body whitespace-nowrap">{entry.time} read</span>
            <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:border-text-primary transition-all duration-500">
              <ArrowRight className="w-4 h-4 text-text-primary group-hover:text-bg transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function TestimonialRow() {
  return (
    <section id="blog" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.3em] uppercase font-body font-bold">Blogs</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-[1.1]">
              Recent <span className="italic">*blogs*</span>
            </h2>
            <p className="text-lg text-muted mt-6 font-body leading-relaxed max-w-md">
              Insights on digital strategy, automation, and growing your culinary business.
            </p>
          </motion.div>

          <Link
            href="/blog"
            className="btn-modern btn-modern-accent px-8 py-3 md:py-4 group h-fit self-center md:self-end"
          >
            <span className="relative z-10 flex items-center gap-2">View more blogs</span>
            <div className="shimmer-sweep" />
          </Link>
        </div>

        {/* List of Entries */}
        <div className="flex flex-col gap-4">
          {BLOG_POSTS.map((entry, i) => (
            <BlogEntry key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
