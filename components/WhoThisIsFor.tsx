"use client";

import { motion } from "framer-motion";
import { Award, ChefHat, Smartphone } from "lucide-react";

/**
 * Restaurants without a website
 * Cafes with outdated websites
 * Businesses relying only on Zomato/Swiggy
 */
const AUDIENCES = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Established Restaurants",
    desc: "Who need a digital identity that matches their premium dine-in experience."
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Modern Cafes",
    desc: "With outdated websites that don't reflect their current vibe or specialty beans."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aggregator-Dependent",
    desc: "Businesses relying only on Zomato/Swiggy wanting to own their customer relationship."
  }
];


export default function WhoThisIsFor() {
  return (
    <section className="bg-bg py-24 px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display text-text-primary italic leading-tight"
          >
            Who This Is <span className="italic">*For*</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {AUDIENCES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-12 rounded-[3rem] bg-surface/50 border border-stroke group hover:bg-surface transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-stroke flex items-center justify-center mb-8 group-hover:bg-text-primary group-hover:text-bg transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display italic text-text-primary mb-4">{item.title}</h3>
              <p className="text-muted font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
