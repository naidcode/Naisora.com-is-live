"use client";

import React, { useState, useRef, useEffect } from "react";
import { Share2, Facebook, Twitter, Linkedin, Link2, Check, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ShareButtonProps {
  url: string;
  title: string;
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link");
    }
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
      action: () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`, "_blank"),
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank"),
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-4 h-4" />,
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank"),
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          alert("Link copied! You can now paste it into Instagram.");
        } catch (err) {
          console.error("Failed to copy link");
        }
      },
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      action: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, "_blank"),
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full border border-stroke text-muted hover:text-text-primary hover:border-text-primary transition-all"
        title="Share this post"
      >
        <Share2 className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-surface border border-stroke rounded-2xl shadow-xl overflow-hidden z-50 p-1"
          >
            <div className="flex flex-col">
              {shareLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-text-primary hover:bg-white/5 rounded-xl transition-colors text-left"
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
              
              <div className="h-px bg-stroke my-1 w-full" />
              
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-text-primary hover:bg-white/5 rounded-xl transition-colors text-left"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
