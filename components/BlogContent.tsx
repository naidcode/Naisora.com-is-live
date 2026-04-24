"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Moon, Sun, Type, Copy, Check, Twitter, Share2 } from "lucide-react";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState("regular"); // regular, large
  const [fontStyle, setFontStyle] = useState("stylized"); // stylized, normal
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to generate slug from heading text
  const generateId = (text: any) => {
    if (typeof text !== 'string') return undefined;
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  };

  return (
    <div className={`blog-content-container relative transition-colors duration-700 min-h-screen ${isDarkMode ? 'bg-bg' : 'bg-[#FAFAFA]'}`}>
      
      {/* Controls Overlay - Stick to top of viewport when reading */}
      <div className="sticky top-16 md:top-24 z-40 w-full px-4 md:px-0">
        <div className={`flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 py-3 md:py-3 px-4 md:px-6 backdrop-blur-2xl border rounded-2xl md:rounded-3xl shadow-2xl md:w-max mx-auto gap-4 md:gap-10 transition-all ${isDarkMode ? 'bg-surface/60 border-stroke/50' : 'bg-white/80 border-gray-200 text-black'}`}>
          <div className="flex items-center justify-between w-full md:w-auto gap-6">
            <div className="flex items-center gap-3">
              <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>Size</span>
              <div className={`flex p-1 rounded-xl border ${isDarkMode ? 'bg-bg/50 border-stroke/30' : 'bg-gray-100 border-gray-200'}`}>
                <button 
                  onClick={() => setFontSize('regular')}
                  className={`px-3 md:px-4 py-1 text-[10px] md:text-xs rounded-lg transition-all ${fontSize === 'regular' ? (isDarkMode ? 'bg-text-primary text-bg font-bold shadow-lg shadow-white/5' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
                >
                  Aa
                </button>
                <button 
                  onClick={() => setFontSize('large')}
                  className={`px-3 md:px-4 py-1 text-[10px] md:text-sm rounded-lg transition-all ${fontSize === 'large' ? (isDarkMode ? 'bg-text-primary text-bg font-bold shadow-lg shadow-white/5' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
                >
                  Aa
                </button>
              </div>
            </div>

            <div className={`w-px h-6 hidden md:block ${isDarkMode ? 'bg-stroke/50' : 'bg-gray-200'}`} />

            <div className="flex items-center gap-3">
              <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>Aesthetic</span>
              <div className={`flex p-1 rounded-xl border ${isDarkMode ? 'bg-bg/50 border-stroke/30' : 'bg-gray-100 border-gray-200'}`}>
                <button 
                  onClick={() => setFontStyle('stylized')}
                  className={`px-3 md:px-4 py-1 text-[10px] rounded-lg transition-all flex items-center gap-2 ${fontStyle === 'stylized' ? (isDarkMode ? 'bg-accent text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
                >
                  <Type className="w-3 h-3" />
                  <span className="font-display italic hidden sm:inline">Serif</span>
                </button>
                <button 
                  onClick={() => setFontStyle('normal')}
                  className={`px-3 md:px-4 py-1 text-[10px] rounded-lg transition-all flex items-center gap-2 ${fontStyle === 'normal' ? (isDarkMode ? 'bg-accent text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
                >
                  <span className="font-body hidden sm:inline">Mona</span>
                  <span className="font-body sm:hidden">San</span>
                </button>
              </div>
            </div>
          </div>

          <div className={`w-full h-px md:hidden ${isDarkMode ? 'bg-stroke/30' : 'bg-gray-100'}`} />

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <button 
              onClick={handleCopyLink}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl border ${isDarkMode ? 'bg-bg/50 border-stroke/30 text-muted hover:text-text-primary hover:border-text-primary/50' : 'bg-gray-100 border-gray-200 text-gray-500 hover:text-black hover:border-black'}`}
            >
              {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Link'}</span>
            </button>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border rounded-xl transition-all shadow-sm ${isDarkMode ? 'bg-surface border-stroke/50 hover:border-accent/50 text-accent' : 'bg-white border-gray-200 hover:border-black text-black'}`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className={`px-5 md:px-10 pb-24 transition-all duration-700 ${isDarkMode ? 'text-text-primary' : 'text-[#1A1A1A]'}`}>
        <div className={`prose max-w-4xl mx-auto transition-all duration-500 ${
          isDarkMode ? "prose-invert" : "prose-zinc"
        } ${fontStyle === 'stylized' ? 'font-display italic' : 'font-body'} space-y-0 relative`}>
          
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
              h1: ({node, children, ...props}) => <h1 id={generateId(children)} className={`font-display italic font-bold mt-16 md:mt-24 mb-8 md:mb-12 text-3xl md:text-5xl leading-[1.1] ${isDarkMode ? 'text-text-primary' : 'text-black'}`} {...props}>{children}</h1>,
              h2: ({node, children, ...props}) => <h2 id={generateId(children)} className={`font-display italic font-bold mt-12 md:mt-20 mb-6 md:mb-10 text-2xl md:text-4xl leading-tight border-b-2 pb-6 ${isDarkMode ? 'text-text-primary border-stroke' : 'text-black border-gray-100'}`} {...props}>{children}</h2>,
              h3: ({node, children, ...props}) => <h3 id={generateId(children)} className={`font-display italic font-bold mt-10 md:mt-16 mb-5 md:mb-8 text-xl md:text-2xl ${isDarkMode ? 'text-text-primary' : 'text-black'}`} {...props}>{children}</h3>,
              p: ({node, children, ...props}) => {
                // If the child is an image, don't wrap it in a p tag to avoid hydration errors (div inside p)
                if (node?.children?.[0]?.type === 'element' && node.children[0].tagName === 'img') {
                  return <div className="my-8 md:my-12">{children}</div>;
                }
                return <p className={`mb-8 md:mb-12 mt-0 leading-[1.7] md:leading-[1.8] font-medium tracking-tight last:mb-0 ${isDarkMode ? 'text-muted/90' : 'text-gray-700'} ${
                  fontSize === 'large' ? 'text-[20px] md:text-[26px]' : 'text-[17px] md:text-[21px]'
                }`} {...props}>{children}</p>;
              },
              blockquote: ({node, ...props}) => (
                <div className="relative my-12 md:my-20 group">
                   <div className="absolute -left-3 md:-left-4 top-0 bottom-0 w-1 md:w-1.5 bg-accent rounded-full transition-all group-hover:w-2" />
                   <blockquote className={`pl-8 md:pl-10 py-4 md:py-6 italic font-display text-xl md:text-4xl leading-relaxed rounded-r-3xl transition-all ${isDarkMode ? 'text-text-primary bg-surface/30 border border-white/5' : 'text-black bg-gray-50 border border-gray-100'}`} {...props} />
                </div>
              ),
              ul: ({node, ...props}) => <ul className={`space-y-4 md:space-y-6 my-10 md:my-16 list-none pl-0 text-[17px] md:text-[21px] leading-[1.7] md:leading-[1.8] ${isDarkMode ? 'text-muted/90' : 'text-gray-700'}`} {...props} />,
              li: ({node, ...props}) => (
                <li className="flex gap-4">
                  <span className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-1">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent" />
                  </span>
                  <span {...props} />
                </li>
              ),
              hr: ({node, ...props}) => (
                <div className="flex items-center justify-center my-16 md:my-24 gap-3 md:gap-4">
                  <div className={`h-px flex-1 ${isDarkMode ? 'bg-stroke' : 'bg-gray-200'}`} />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-accent/50" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-accent" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-accent/50" />
                  <div className={`h-px flex-1 ${isDarkMode ? 'bg-stroke' : 'bg-gray-200'}`} />
                </div>
              ),
              strong: ({node, ...props}) => <strong className={`font-black tracking-tight ${isDarkMode ? 'text-accent' : 'text-black'}`} {...props} />,
              img: ({node, ...props}) => (
                <div className={`my-12 md:my-20 -mx-5 md:mx-0 rounded-2xl md:rounded-3xl overflow-hidden border shadow-2xl transition-all md:hover:scale-[1.01] duration-700 ${isDarkMode ? 'border-stroke/50 bg-bg/50' : 'border-gray-200 bg-gray-50'}`}>
                  <Image 
                    src={props.src || ''} 
                    alt={props.alt || "Article visual"} 
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover max-h-[400px] md:max-h-[700px]" 
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    loading="lazy"
                  />
                  {props.alt && (
                    <div className={`px-5 md:px-8 py-3 md:py-5 flex items-center gap-3 border-t ${isDarkMode ? 'bg-surface/50 border-stroke/30' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent" />
                      <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>{props.alt}</span>
                    </div>
                  )}
                </div>
              ),
              a: ({node, ...props}) => <a className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-all font-bold" target="_blank" rel="noopener noreferrer" {...props} />,
          }}>
            {content}
          </ReactMarkdown>
        </div>
      </div>

      <style jsx global>{`
        .blog-content-container p:first-of-type {
          margin-top: 0 !important;
        }
      `}</style>
    </div>
  );
}
