"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <AnimatedSection className="mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface/50 p-8 md:p-12">
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display font-bold italic text-text-primary mb-4 leading-tight">
              Get the <span className="text-accent underline decoration-accent/30">Naisora Intelligence</span> in your inbox
            </h3>
            <p className="text-muted text-sm md:text-base">
              Weekly breakdown of high-performing restaurant marketing strategies, technology trends, and Bangalore market insights.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {status === "idle" ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-bg border border-stroke rounded-xl px-4 py-4 text-text-primary placeholder:text-muted/40 focus:border-accent/50 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-modern btn-modern-primary w-full group py-4"
                >
                  <span className="flex items-center gap-2">
                    Subscribe <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 bg-accent/10 border border-accent/20 rounded-2xl animate-in zoom-in-95 duration-500">
                <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <span className="text-text-primary font-bold">You&apos;re on the list!</span>
                <span className="text-muted text-xs mt-1">Welcome to the inner circle.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
