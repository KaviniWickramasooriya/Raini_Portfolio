import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaHeart, FaHandsHelping, FaGlobeAsia, FaArrowRight } from "react-icons/fa";
import p1 from "../assets/photos/photo_2_2026-08-31_11-53-53.jpg";

export default function PhilanthropyWork() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section ref={sectionRef} className="py-36 px-6 md:px-16 bg-neo-black relative overflow-hidden">
      
      {/* Luxury Ambient Aura */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neo-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neo-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Properly Framed & Centered Image with Luxury Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-3xl overflow-hidden brutalist-border relative bg-neo-charcoal flex items-center justify-center p-6 shadow-2xl group"
        >
          <div className="absolute inset-0 filter blur-2xl opacity-30 scale-110 pointer-events-none">
            <img src={p1} alt="" className="w-full h-full object-cover" />
          </div>

          <img 
            src={p1} 
            alt="One Promise Foundation" 
            className="relative z-10 w-full h-auto max-h-[55vh] object-contain object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neo-charcoal via-transparent to-transparent opacity-80 pointer-events-none z-20" />
          
          {/* Absolute floating luxury impact counter tag */}
          <div className="absolute bottom-8 left-8 right-8 z-30 flex justify-between items-center brutalist-border px-6 py-3.5 rounded-2xl bg-neo-black/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <FaHeart className="text-neo-red text-sm animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white font-serif">Community Reach</span>
            </div>
            <span className="text-xs font-mono text-neo-gold font-bold">10,000+ LIVES TOUCHED</span>
          </div>
        </motion.div>

        {/* Right Column: Professional Content & Interactive Information */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-neo-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold">Social Impact Initiative</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            ONE <span className="text-neo-red italic">PROMISE</span>
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-neo-grey mb-6 font-light">
            Championed by Raini Charuka, <strong className="text-white font-normal">'One Promise'</strong> operates as a dedicated foundation supporting child welfare, education access, and mental wellbeing frameworks across Sri Lanka.
          </p>

          {isExpanded && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm leading-relaxed text-neo-grey mb-8 font-light"
            >
              Through regional workshops, grassroots funding, and arts mentorship programs, the initiative ensures underprivileged youth gain both creative expression and foundational life resources.
            </motion.p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Child Welfare", icon: <FaHandsHelping className="text-neo-gold text-base" /> },
              { label: "Education", icon: <FaGlobeAsia className="text-neo-red text-base" /> },
              { label: "Mental Health", icon: <FaHeart className="text-white text-base" /> }
            ].map((pillar, idx) => (
              <div key={idx} className="brutalist-border p-4 rounded-2xl bg-neo-charcoal flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-neo-black brutalist-border flex items-center justify-center mb-1">
                  {pillar.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">{pillar.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="brutalist-border bg-white text-black px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-neo-red hover:text-white hover:border-neo-red transition-colors flex items-center gap-2 group"
            >
              <span>{isExpanded ? "Hide Details" : "Explore Foundation Mission"}</span>
              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#contact" 
              className="brutalist-border px-6 py-3.5 rounded-full text-xs uppercase font-bold tracking-widest text-neo-grey hover:text-white hover:border-white transition-colors"
            >
              Partner With Us
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}