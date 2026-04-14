"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, Globe } from "lucide-react";

const PROBLEMS = [
  {
    icon: <Globe className="w-6 h-6 text-text-primary" />,
    title: "Invisible Online",
    desc: "If you aren't on the first page of Google, you're losing customers to competitors every single day."
  },
  {
    icon: <Users className="w-6 h-6 text-text-primary" />,
    title: "Platform Dependence",
    desc: "Relying only on Zomato/Swiggy means high commissions and no direct connection with your loyal diners."
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-text-primary" />,
    title: "Dated Impression",
    desc: "A broken or slow website makes your premium restaurant look unprofessional to new visitors."
  }
];

export default function ProblemSection() {
  return (
    <section className="bg-bg py-24 border-y border-stroke overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-muted mb-6">
                <AlertCircle size={16} />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">The Reality</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display italic text-text-primary leading-tight mb-8">
                No website? <br />
                <span className="text-muted">You&apos;re losing </span> <br />
                paying customers.
              </h2>
              <p className="text-lg text-muted font-body leading-relaxed max-w-md">
                In Bangalore, diners search before they visit. If your digital presence doesn't match your food quality, they'll dine elsewhere.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROBLEMS.map((prob, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-surface border border-stroke rounded-2xl hover:border-text-primary/30 transition-colors"
                >
                  <div className="mb-6">{prob.icon}</div>
                  <h3 className="text-xl font-display italic text-text-primary mb-4">{prob.title}</h3>
                  <p className="text-sm text-muted font-body leading-relaxed">{prob.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
