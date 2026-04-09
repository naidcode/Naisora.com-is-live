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

  // Force dark mode on initial load if user has system preference? 
  // No, user said "add dark mode only in blog page", so let's default to dark to match the site.

  return (
    <div className={`transition-colors duration-500 rounded-[40px] p-8 md:p-12 ${
      isDarkMode ? "bg-surface/30 text-muted" : "bg-white text-zinc-900 shadow-2xl"
    }`}>
      {/* Controls */}
      <div className="flex items-center justify-end gap-4 mb-12 border-b border-stroke pb-6">
        <div className="flex items-center gap-2">
           <button 
            onClick={() => setFontSize(prev => prev === "regular" ? "large" : "regular")}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
              fontSize === "large" 
                ? (isDarkMode ? "bg-white text-bg border-white" : "bg-zinc-900 text-white border-zinc-900")
                : (isDarkMode ? "border-stroke hover:bg-surface text-muted" : "border-zinc-200 hover:bg-zinc-100 text-zinc-600")
            }`}
            title="Adjust Font Size"
          >
            <Type className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{fontSize === "large" ? "Small" : "Large"} Font</span>
          </button>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              isDarkMode 
                ? "border-stroke hover:border-white/20 bg-surface/50 text-white" 
                : "border-zinc-200 hover:border-zinc-400 bg-zinc-100 text-zinc-900"
            }`}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`prose max-w-none transition-all duration-300 ${
        isDarkMode ? "prose-invert" : "prose-zinc"
      } ${
        fontSize === "large" ? "prose-xl" : "prose-lg"
      } font-body leading-relaxed space-y-8`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            h1: ({node, ...props}) => <h1 className={`font-display italic mt-16 mb-8 ${isDarkMode ? "text-text-primary" : "text-zinc-950"} ${fontSize === "large" ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"}`} {...props} />,
            h2: ({node, ...props}) => <h2 className={`font-display italic mt-12 mb-6 ${isDarkMode ? "text-text-primary" : "text-zinc-900"} ${fontSize === "large" ? "text-4xl" : "text-3xl"}`} {...props} />,
            h3: ({node, ...props}) => <h3 className={`font-display italic mt-10 mb-4 ${isDarkMode ? "text-text-primary" : "text-zinc-800"} ${fontSize === "large" ? "text-3xl" : "text-2xl"}`} {...props} />,
            p: ({node, ...props}) => <p className={`mb-6 leading-loose ${isDarkMode ? "text-muted" : "text-zinc-700"} ${fontSize === "large" ? "text-xl md:text-2xl" : "text-base md:text-lg"}`} {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className={`border-l-4 border-accent pl-8 py-4 italic font-display my-12 ${isDarkMode ? "text-text-primary" : "text-zinc-900 bg-zinc-50 rounded-r-2xl"} ${fontSize === "large" ? "text-3xl" : "text-2xl"}`} {...props} />
            ),
            ul: ({node, ...props}) => <ul className="space-y-4 my-8 list-disc pl-6" {...props} />,
            li: ({node, ...props}) => <li className={`${isDarkMode ? "text-muted" : "text-zinc-700"} ${fontSize === "large" ? "text-xl" : "text-base"}`} {...props} />,
            hr: ({node, ...props}) => <hr className={`my-12 border-t ${isDarkMode ? "border-stroke" : "border-zinc-200"}`} {...props} />,
            strong: ({node, ...props}) => <strong className={`font-bold ${isDarkMode ? "text-text-primary" : "text-zinc-950 text-indigo-700"}`} {...props} />,
        }}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
