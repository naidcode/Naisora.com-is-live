"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    cat: "Restaurant",
    title: "Fusion Hotel",
    desc: "Old design → modern premium website. Improved mobile responsiveness and integrated a seamless booking experience.",
    img: "/blog/modern_restaurant_ai_tech_1775913361651.webp",
    span: "md:col-span-12",
    href: "https://restaurant-demo-site-1-cn1g-qm05y1lqk-naidcodes-projects.vercel.app",
  },
  {
    cat: "Restaurant",
    title: "The Spice Garden",
    desc: "Outdated template → custom luxury experience. High-end food photography and optimized menu architecture.",
    img: "/projects/mockup1.webp",
    span: "md:col-span-12",
    href: "#",
  },
  {
    cat: "Cafe",
    title: "Brew & Co.",
    desc: "Barely visible online → top rank in local searches. Complete visual overhaul with modern cafe aesthetics.",
    img: "/projects/mockup2.webp",
    span: "md:col-span-6",
    href: "#",
  },
  {
    cat: "Restaurant",
    title: "Biryani Bros",
    desc: "Slow performance → 90+ PageSpeed score. Clean digital storefront with optimized conversion paths.",
    img: "/projects/mockup3.webp",
    span: "md:col-span-6",
    href: "#",
  }
];


const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <Link
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-surface border border-stroke aspect-[1.1/1] sm:aspect-video md:aspect-auto md:h-[450px] ${project.span}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="size-full"
      >
      {/* Background Image */}
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
      
      {/* Halftone / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block text-[10px] text-muted tracking-[0.3em] uppercase mb-2 font-body font-bold">
            {project.cat}
          </span>
          <h3 className="text-3xl font-display italic text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted/80 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-body">
            {project.desc}
          </p>
        </div>

        {/* Floating Label / Button */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="inline-flex items-center gap-2 bg-text-primary px-4 py-2 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 accent-gradient -z-10" />
            <span className="text-bg text-xs font-bold leading-none">View — *{project.title}*</span>
          </div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
};

export default function ProjectGrid() {
  return (
    <section id="work" className="bg-bg py-24 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] text-muted tracking-[0.3em] uppercase font-body font-bold">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-[1.1]">
              Featured <span className="italic">*projects*</span>
            </h2>
            <p className="text-lg text-muted mt-6 font-body leading-relaxed max-w-md">
              A curated selection of digital experiences we've crafted to help local businesses grow and thrive.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative px-8 py-4 rounded-full border border-stroke text-text-primary text-sm font-semibold transition-all hover:scale-105 hidden md:flex items-center gap-2"
          >
            <span className="relative z-10">View All Work</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
            <div className="absolute inset-[-1.5px] rounded-full accent-gradient -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1px] bg-bg rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
