"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do I really need a website if I use Zomato or Swiggy?",
    a: "Yes — because while those apps help you get orders, they also take high commissions. Your own website helps you build your own brand and allows customers to contact you directly without any middleman fees."
  },
  {
    q: "What does a restaurant website cost?",
    a: "Our websites start at ₹14,999 for a complete 5-page site delivered in 7 days. Premium builds with animations and booking systems start at ₹24,999. We also offer a monthly Google Visibility Plan at ₹4,999/month to help you rank on Google Maps and get direct walk-ins."
  },
  {
    q: "How long does it take to build my website?",
    a: "We move fast because we know you have a business to run. Most restaurant websites are designed and launched within 7 to 10 days once we have your menu and basic details."
  },
  {
    q: "Will my website show up on Google searches?",
    a: "Yes. Every site we build includes basic Local SEO. We ensure your restaurant is structured correctly so it appears when customers search for food or cafes in your specific neighborhood."
  },
  {
    q: "I don’t have technical knowledge — can I still manage it?",
    a: "Absolutely. You won't need to touch a single line of code. We handle the technical side, and we're always just a message away if you need any updates or changes later on."
  },
  {
    q: "What if I already have an existing website?",
    a: "We specialize in upgrades. If your current site is slow or looks outdated, we can redesign it to look premium and work perfectly on mobile phones, which is where most of your customers are."
  }
];


const FAQItem = ({ faq, index, isOpen, toggle }: { faq: any, index: number, isOpen: boolean, toggle: any }) => {
  return (
    <div className={`border-b border-stroke overflow-hidden transition-all duration-500`}>
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:text-text-primary transition-colors group"
      >
        <span className="text-lg md:text-2xl font-display italic text-text-primary group-hover:pl-2 transition-all duration-300">
          {faq.q}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
          <Plus className="w-6 h-6 text-muted group-hover:text-text-primary" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="pb-8 pr-12">
              <p className="text-muted text-base md:text-lg font-body leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="bg-bg py-24 md:py-32 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-[10px] text-muted tracking-[0.4em] uppercase font-body font-bold">Inquiries</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-text-primary italic leading-[1.1]">
            Everything restaurant <br /> owners <span className="italic">*ask us.*</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-stroke">
          {FAQS.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              index={i} 
              isOpen={openIndex === i} 
              toggle={toggle} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
