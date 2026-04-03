"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need a website if I am already on Zomato and Swiggy?",
    a: "Yes — and here is why. Zomato takes 25-30% commission on every order. Your own website means customers order directly and 100% of the money comes to you. A website also helps you rank on Google so new customers find you without you paying anyone. Think of your website as a sales machine that works 24 hours a day with zero commission."
  },
  {
    q: "How long does it take to build my restaurant website?",
    a: "We deliver most restaurant websites in 7 to 14 days. The timeline depends on how quickly you share your content — menu, photos, and business details. Once we have everything from you, we move fast. You will get a live preview to review before we launch."
  },
  {
    q: "Will my website show up on Google after you build it?",
    a: "Yes — every website we build is SEO-ready from day one. We set up your page titles, meta descriptions, Google Business Profile, schema markup, and local keyword targeting. Most of our clients start appearing in local Google searches within 4 to 8 weeks of launch."
  },
  {
    q: "What if I already have a website but it looks old or loads slowly?",
    a: "That is actually our most common project. We audit your existing site, show you the exact problems, and rebuild it properly. A slow website costs you customers every day — Google penalises slow sites and visitors leave within 3 seconds. We guarantee a 90+ PageSpeed score on every project."
  },
  {
    q: "How much does it cost and are there hidden fees?",
    a: "Our website packages start at ₹8,000 one-time. Domain and hosting are separate third-party costs of roughly ₹2,500 per year — we are transparent about this upfront. There are no hidden fees and no surprise charges after the project. We show you the full investment before we start."
  },
  {
    q: "Do I need to know anything technical to work with you?",
    a: "Nothing at all. You tell us about your restaurant — your menu, your story, your photos — and we handle everything else. After we deliver the site, you can make basic edits yourself or we handle updates for you on our monthly plan."
  },
  {
    q: "What is the free audit you keep mentioning?",
    a: "Before we quote you anything, we analyse your current online presence — your Google ranking, your website speed if you have one, what your top competitors are doing, and where you are losing customers. We send you this report for free with no obligation."
  },
  {
    q: "Do you only work with restaurants or cafes in Bangalore?",
    a: "Right now we are focused entirely on restaurants and cafes in Bangalore. This focus means we understand your market, your competitors, and your customers better than any generic web agency. We are building systems that fill tables in Bangalore specifically."
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
