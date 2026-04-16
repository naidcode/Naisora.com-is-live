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

  // Force dark mode on initial load if user has system preference? 
  // No, user said "add dark mode only in blog page", so let's default to dark to match the site.

  return (
    <div className="blog-content-container">
      {/* Content */}
      <div className={`prose max-w-none transition-all duration-300 ${
        isDarkMode ? "prose-invert" : "prose-zinc"
      } font-body space-y-0`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            h1: ({node, ...props}) => <h1 className="font-display italic font-bold mt-16 mb-8 text-text-primary text-3xl md:text-5xl leading-tight" {...props} />,
            h2: ({node, ...props}) => <h2 className="font-display italic font-bold mt-12 mb-6 text-text-primary text-2xl md:text-3xl leading-snug" {...props} />,
            h3: ({node, ...props}) => <h3 className="font-display italic font-bold mt-10 mb-4 text-text-primary text-xl md:text-2xl" {...props} />,
            p: ({node, ...props}) => {
              // The first paragraph should not have top margin, and all should have bottom margin
              return <p className="mb-[1.5rem] mt-0 text-lg leading-[1.8] text-muted last:mb-0" {...props} />;
            },
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-2 border-text-primary pl-8 py-2 italic font-display text-2xl text-text-primary my-12" {...props} />
            ),
            ul: ({node, ...props}) => <ul className="space-y-4 my-8 list-disc pl-6 text-lg leading-[1.8] text-muted" {...props} />,
            li: ({node, ...props}) => <li className="text-muted" {...props} />,
            hr: ({node, ...props}) => <hr className="my-12 border-t border-stroke/30" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold text-text-primary" {...props} />,
            img: ({node, ...props}) => (
              <div className="my-8 rounded-lg overflow-hidden border border-stroke/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img {...props} className="w-full h-auto object-cover" alt={props.alt || "Article image"} />
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
        @media (max-width: 768px) {
          .blog-content-container {
            padding: 0 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
}
