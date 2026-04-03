"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    "New Website", "SEO & Growth", "AI Automation", "Branding", "Social Media"
  ];

  const toggleService = (s: string) => {
    if (selectedServices.includes(s)) {
      setSelectedServices(selectedServices.filter(item => item !== s));
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    email: "",
    phone: "",
    details: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Create FormData object to send to Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "e9c30890-3c0d-4a28-9572-f5a62070190c"); // Replace with your actual key
      formDataToSend.append("subject", `New Project Inquiry from ${formData.fullName}`);
      formDataToSend.append("from_name", "Naisora Website");
      
      // Add existing form fields
      formDataToSend.append("Full Name", formData.fullName);
      formDataToSend.append("Restaurant Name", formData.restaurantName);
      formDataToSend.append("Email", formData.email);
      formDataToSend.append("Phone", formData.phone);
      formDataToSend.append("Services", selectedServices.join(", "));
      formDataToSend.append("Details", formData.details);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        restaurantName: "",
        email: "",
        phone: "",
        details: ""
      });
      setSelectedServices([]);
    } catch (error) {
      alert("Something went wrong. Please check your internet connection or email us directly at hello@naisora.com.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center p-12 bg-surface/30 backdrop-blur-xl border border-stroke rounded-[40px]"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-display text-text-primary mb-4 italic">Message Sent!</h3>
        <p className="text-muted font-body max-w-sm mb-8">
          Thank you for reaching out. Our team will review your request and get back to you within 2 hours.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="px-8 py-3 rounded-full border border-stroke text-sm font-semibold text-text-primary hover:bg-white/5 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative group">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-accent-gradient rounded-[42px] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-bg border border-stroke rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ravi Kumar"
                required
                className="w-full bg-surface/50 border border-stroke rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-text-primary/30 transition-all font-body"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">Restaurant Name</label>
              <input 
                type="text" 
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                placeholder="The Spice Garden"
                required
                className="w-full bg-surface/50 border border-stroke rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-text-primary/30 transition-all font-body"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ravi@example.com"
                required
                className="w-full bg-surface/50 border border-stroke rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-text-primary/30 transition-all font-body"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">Phone (WhatsApp)</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                required
                className="w-full bg-surface/50 border border-stroke rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-text-primary/30 transition-all font-body"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">What do you need help with?</label>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => {
                const checked = selectedServices.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`
                      px-6 py-3 rounded-full text-xs font-body font-semibold border transition-all duration-300
                      ${checked 
                         ? "bg-text-primary text-bg border-text-primary" 
                        : "bg-surface/50 text-muted border-stroke hover:border-text-primary/30"
                      }
                    `}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold ml-4">Project Details</label>
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals and what you're looking to achieve..."
              className="w-full bg-surface/50 border border-stroke rounded-[32px] px-6 py-6 text-text-primary placeholder:text-muted/30 focus:outline-none focus:border-text-primary/30 transition-all font-body resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-modern btn-modern-primary w-full h-16 group"
          >
            <div className="relative z-10 flex items-center justify-center gap-3 text-bg font-semibold text-lg font-body">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Launch Project</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </div>
            <div className="shimmer-sweep" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-muted/50 uppercase tracking-widest font-bold">
            <Sparkles className="w-3 h-3" />
            <span>Response within 2 hours guaranteed</span>
            <Sparkles className="w-3 h-3" />
          </div>
        </form>
      </div>
    </div>
  );
}
