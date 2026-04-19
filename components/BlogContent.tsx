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
    <div className={`blog-content-container relative transition-colors duration-700 min-h-screen ${isDarkMode ? 'bg-bg' : 'bg-white'}`}>
      {/* Controls Overlay - Stick to top of viewport when reading */}
      <div className={`sticky top-24 z-40 flex items-center justify-between mb-12 py-3 px-6 backdrop-blur-xl border border-stroke/50 rounded-2xl shadow-xl md:w-max mx-auto gap-8 transition-all ${isDarkMode ? 'bg-surface/40' : 'bg-gray-100/40 text-black'}`}>
        <div className="flex items-center gap-4">
          <span className={`text-[10px] uppercase tracking-widest font-black ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>Size</span>
          <div className={`flex p-1 rounded-lg border ${isDarkMode ? 'bg-bg/50 border-stroke/30' : 'bg-gray-200 border-gray-300'}`}>
            <button 
              onClick={() => setFontSize('regular')}
              className={`px-3 py-1 text-xs rounded-md transition-all ${fontSize === 'regular' ? (isDarkMode ? 'bg-text-primary text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
            >
              Aa
            </button>
            <button 
              onClick={() => setFontSize('large')}
              className={`px-3 py-1 text-sm rounded-md transition-all ${fontSize === 'large' ? (isDarkMode ? 'bg-text-primary text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
            >
              Aa
            </button>
          </div>
        </div>

        <div className={`w-px h-4 ${isDarkMode ? 'bg-stroke' : 'bg-gray-300'}`} />

        <div className="flex items-center gap-4">
          <span className={`text-[10px] uppercase tracking-widest font-black ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>Style</span>
          <div className={`flex p-1 rounded-lg border ${isDarkMode ? 'bg-bg/50 border-stroke/30' : 'bg-gray-200 border-gray-300'}`}>
            <button 
              onClick={() => setFontStyle('stylized')}
              className={`px-3 py-1 text-[11px] rounded-md transition-all flex items-center gap-2 ${fontStyle === 'stylized' ? (isDarkMode ? 'bg-text-primary text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
            >
              <Type className="w-3 h-3" />
              <span>Serif</span>
            </button>
            <button 
              onClick={() => setFontStyle('normal')}
              className={`px-3 py-1 text-[11px] rounded-md transition-all flex items-center gap-2 ${fontStyle === 'normal' ? (isDarkMode ? 'bg-text-primary text-bg font-bold' : 'bg-black text-white font-bold') : 'text-muted hover:text-text-primary'}`}
            >
              <span className="font-body">Inter</span>
            </button>
          </div>
        </div>

        <div className={`w-px h-4 ${isDarkMode ? 'bg-stroke' : 'bg-gray-300'}`} />

        <div className="flex items-center gap-4">
          <span className={`text-[10px] uppercase tracking-widest font-black ${isDarkMode ? 'text-muted/40' : 'text-gray-400'}`}>Theme</span>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-10 h-10 flex items-center justify-center border rounded-xl transition-all ${isDarkMode ? 'bg-bg/50 border-stroke/30 hover:border-text-primary/50 text-text-primary' : 'bg-gray-200 border-gray-300 hover:border-black text-black'}`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={`px-6 py-12 transition-all duration-700 ${isDarkMode ? 'text-text-primary' : 'text-black'}`}>
        <div className={`prose max-w-4xl mx-auto transition-all duration-500 ${
          isDarkMode ? "prose-invert" : "prose-zinc"
        } ${fontStyle === 'stylized' ? 'font-display italic' : 'font-body'} space-y-0`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
              h1: ({node, ...props}) => <h1 className={`font-display italic font-bold mt-20 mb-10 text-3xl md:text-5xl leading-[1.15] ${isDarkMode ? 'text-text-primary' : 'text-black'}`} {...props} />,
              h2: ({node, ...props}) => <h2 className={`font-display italic font-bold mt-16 mb-8 text-2xl md:text-4xl leading-tight border-b pb-4 ${isDarkMode ? 'text-text-primary border-stroke' : 'text-black border-gray-200'}`} {...props} />,
              h3: ({node, ...props}) => <h3 className={`font-display italic font-bold mt-12 mb-6 text-xl md:text-2xl ${isDarkMode ? 'text-text-primary' : 'text-black'}`} {...props} />,
              p: ({node, ...props}) => {
                return <p className={`mb-10 mt-0 leading-[1.85] font-medium tracking-tight last:mb-0 ${isDarkMode ? 'text-muted/90' : 'text-gray-700'} ${
                  fontSize === 'large' ? 'text-[21px] md:text-[24px]' : 'text-[18px] md:text-[20px]'
                }`} {...props} />;
              },
              blockquote: ({node, ...props}) => (
                <blockquote className={`border-l-[3px] border-accent pl-8 py-4 italic font-display text-2xl md:text-3xl my-16 rounded-r-2xl shadow-sm ${isDarkMode ? 'text-text-primary bg-surface/20' : 'text-black bg-gray-50'}`} {...props} />
              ),
              ul: ({node, ...props}) => <ul className={`space-y-6 my-12 list-disc pl-6 text-[19px] md:text-[21px] leading-[1.85] ${isDarkMode ? 'text-muted/90' : 'text-gray-700'}`} {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              hr: ({node, ...props}) => <hr className={`my-16 border-t ${isDarkMode ? 'border-stroke/50' : 'border-gray-200'}`} {...props} />,
              strong: ({node, ...props}) => <strong className={`font-black ${isDarkMode ? 'text-text-primary' : 'text-black'}`} {...props} />,
              img: ({node, ...props}) => (
                <div className={`my-16 -mx-5 md:mx-0 rounded-none md:rounded-2xl overflow-hidden border ${isDarkMode ? 'border-stroke/50 bg-bg/50' : 'border-gray-200 bg-gray-50'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img {...props} className="w-full h-auto object-cover max-h-[600px]" alt={props.alt || "Article image"} />
                  {props.alt && <span className={`block px-6 py-4 text-xs font-bold uppercase tracking-widest border-t ${isDarkMode ? 'text-muted/40 bg-surface/30 border-stroke/30' : 'text-gray-400 bg-gray-100 border-gray-200'}`}>{props.alt}</span>}
                </div>
              ),
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
