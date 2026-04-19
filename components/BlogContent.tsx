"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Moon, Sun, Type } from "lucide-react";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState("regular"); // regular, large
  const [fontStyle, setFontStyle] = useState("stylized"); // stylized, normal

  return (
    <div className="blog-content-container relative">
      {/* Controls Overlay - Stick to top of viewport when reading */}
      <div className="sticky top-24 z-40 flex items-center justify-between mb-12 py-3 px-6 bg-surface/40 backdrop-blur-xl border border-stroke/50 rounded-2xl shadow-xl md:w-max mx-auto gap-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-black text-muted/40">Size</span>
          <div className="flex bg-bg/50 p-1 rounded-lg border border-stroke/30">
            <button 
              onClick={() => setFontSize('regular')}
              className={`px-3 py-1 text-xs rounded-md transition-all ${fontSize === 'regular' ? 'bg-text-primary text-bg font-bold' : 'text-muted hover:text-text-primary'}`}
            >
              Aa
            </button>
            <button 
              onClick={() => setFontSize('large')}
              className={`px-3 py-1 text-sm rounded-md transition-all ${fontSize === 'large' ? 'bg-text-primary text-bg font-bold' : 'text-muted hover:text-text-primary'}`}
            >
              Aa
            </button>
          </div>
        </div>

        <div className="w-px h-4 bg-stroke" />

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-black text-muted/40">Style</span>
          <div className="flex bg-bg/50 p-1 rounded-lg border border-stroke/30">
            <button 
              onClick={() => setFontStyle('stylized')}
              className={`px-3 py-1 text-[11px] rounded-md transition-all flex items-center gap-2 ${fontStyle === 'stylized' ? 'bg-text-primary text-bg font-bold' : 'text-muted hover:text-text-primary'}`}
            >
              <Type className="w-3 h-3" />
              <span>Serif</span>
            </button>
            <button 
              onClick={() => setFontStyle('normal')}
              className={`px-3 py-1 text-[11px] rounded-md transition-all flex items-center gap-2 ${fontStyle === 'normal' ? 'bg-text-primary text-bg font-bold' : 'text-muted hover:text-text-primary'}`}
            >
              <span className="font-body">Inter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`prose max-w-none transition-all duration-500 ${
        isDarkMode ? "prose-invert" : "prose-zinc"
      } ${fontStyle === 'stylized' ? 'font-display italic' : 'font-body'} space-y-0`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            h1: ({node, ...props}) => <h1 className="font-display italic font-bold mt-20 mb-10 text-text-primary text-3xl md:text-5xl leading-[1.15]" {...props} />,
            h2: ({node, ...props}) => <h2 className="font-display italic font-bold mt-16 mb-8 text-text-primary text-2xl md:text-4xl leading-tight border-b border-stroke pb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="font-display italic font-bold mt-12 mb-6 text-text-primary text-xl md:text-2xl" {...props} />,
            p: ({node, ...props}) => {
              return <p className={`mb-10 mt-0 leading-[1.85] text-muted/90 font-medium tracking-tight last:mb-0 ${
                fontSize === 'large' ? 'text-[21px] md:text-[24px]' : 'text-[18px] md:text-[20px]'
              }`} {...props} />;
            },
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-[3px] border-accent pl-8 py-4 italic font-display text-2xl md:text-3xl text-text-primary my-16 bg-surface/20 rounded-r-2xl shadow-sm" {...props} />
            ),
            ul: ({node, ...props}) => <ul className="space-y-6 my-12 list-disc pl-6 text-[19px] md:text-[21px] leading-[1.85] text-muted/90" {...props} />,
            li: ({node, ...props}) => <li className="pl-2" {...props} />,
            hr: ({node, ...props}) => <hr className="my-16 border-t border-stroke/50" {...props} />,
            strong: ({node, ...props}) => <strong className="font-black text-text-primary" {...props} />,
            img: ({node, ...props}) => (
              <div className="my-16 -mx-5 md:mx-0 rounded-none md:rounded-2xl overflow-hidden border-y md:border border-stroke/50 bg-bg/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img {...props} className="w-full h-auto object-cover" alt={props.alt || "Article image"} />
                {props.alt && <span className="block px-6 py-4 text-xs font-bold text-muted/40 uppercase tracking-widest bg-surface/30 border-t border-stroke/30">{props.alt}</span>}
              </div>
            ),
        }}>
          {content}
        </ReactMarkdown>
      </div>

      <style jsx global>{`
        .blog-content-container p:first-of-type {
          margin-top: 0 !important;
        }
      `}</style>
    </div>
  );
}
