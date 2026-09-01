import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PORTFOLIO_CONTENT } from "../portfolioContent";

export default function CareerTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const bio = PORTFOLIO_CONTENT?.biography || {};
  const paragraphs = bio.paragraphs || [];
  const milestones = bio.milestones || [];

  // Luxury achievements data to enrich the timeline information
  const eliteCredits = [
    { role: "Lead Vocalist & Performer", venue: "Mainstream Radio & Arena Tours", impact: "Chart-topping singles with millions of global streams." },
    { role: "Television Mentor & Coach", venue: "The Voice Sri Lanka — Season 03", impact: "Shaping national vocal powerhouses with industry-leading expertise." },
    { role: "Silver Screen Actress", venue: "National Cinematic Releases", impact: "Award-winning dramatic and commercial feature film performances." }
  ];

  return (
    <section ref={containerRef} id="about" className="py-36 px-6 md:px-16 bg-neo-charcoal brutalist-border border-x-0 relative overflow-hidden">
      
      {/* Background Architectural Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neo-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neo-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Stagger Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-neo-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold">Professional Biography</span>
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-white tracking-tight">
              {bio.heading || "A MULTI-DISCIPLINARY FORCE"}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex gap-2 brutalist-border p-1.5 rounded-full bg-neo-black"
          >
            {["Overview", "Milestones", "Expertise"].map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeTab === idx 
                    ? "bg-white text-black shadow-lg" 
                    : "text-neo-grey hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Content Switcher based on Active Tab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="brutalist-border p-8 md:p-10 rounded-3xl bg-neo-black relative group shadow-2xl">
              <div className="absolute top-0 right-0 p-8 text-neo-red/20 font-serif text-6xl pointer-events-none">“</div>
              
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed text-neo-grey font-light mb-6 last:mb-0">
                  {p}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-neo-gold">
                <span>Status: Active Icon & Mentor</span>
                <span className="font-mono text-white/50">COLOMBO // S.L</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {activeTab === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                {eliteCredits.map((item, idx) => (
                  <div key={idx} className="brutalist-border p-6 rounded-2xl bg-neo-black hover:border-neo-gold transition-colors group">
                    <span className="text-[9px] uppercase tracking-widest text-neo-gold font-bold block mb-1">{item.venue}</span>
                    <h4 className="text-base font-serif text-white mb-2">{item.role}</h4>
                    <p className="text-xs text-neo-grey font-light">{item.impact}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 1 && (
              <div className="flex flex-col gap-4">
                {milestones.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="brutalist-border p-6 rounded-2xl bg-neo-black flex items-center gap-6 group hover:border-neo-red transition-all"
                  >
                    <span className="font-serif text-3xl text-neo-red font-bold group-hover:scale-110 transition-transform">{m.year}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{m.title}</h4>
                      <p className="text-xs text-neo-grey font-light">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="brutalist-border p-8 rounded-3xl bg-neo-black flex flex-col gap-6"
              >
                <h3 className="font-serif text-xl text-white">Core Competencies & Mastery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Vocal Production", "Cinematic Acting", "TV Coaching", "Brand Stewardship", "Live Orchestration", "Global Distribution"].map((skill, sIdx) => (
                    <div key={sIdx} className="brutalist-border p-4 rounded-xl bg-neo-charcoal text-xs uppercase tracking-widest text-neo-grey flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-neo-red" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}