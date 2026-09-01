import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import img19 from "../assets/photos/photo_19_2026-08-31_18-59-50.jpg";
import img12 from "../assets/photos/photo_12_2026-08-31_18-59-49.jpg";
import img9 from "../assets/photos/photo_9_2026-08-31_11-53-53.jpg";
import img18 from "../assets/photos/photo_18_2026-08-31_18-59-50.jpg";
import img5 from "../assets/photos/photo_5_2026-08-31_11-53-53.jpg";
import img1 from "../assets/photos/photo_1_2026-08-31_11-53-53.jpg";

export default function EditorialShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  
  // Interactive modal state for high-end luxury lightbox preview
  const [activeImage, setActiveImage] = useState(null);

  const archives = [
    { 
      img: img19, 
      title: "Concert Stage Production", 
      subtitle: "Live Arena Session // 01", 
      span: "md:col-span-7 md:translate-y-0",
      specs: "Aperture f/1.4 • ISO 100 • Colombo Arena"
    },
    { 
      img: img12, 
      title: "Backstage Moments", 
      subtitle: "Exclusive Green Room // 02", 
      span: "md:col-span-5 md:translate-y-12", 
      specs: "Candid Series • Backstage Suite"
    },
    { 
      img: img9, 
      title: "Television Appearance", 
      subtitle: "The Voice Production // 03", 
      span: "md:col-span-5 md:translate-y-4", 
      specs: "Broadcast Master • Season 03 Set"
    },
    { 
      img: img18, 
      title: "Acoustic Set Performance", 
      subtitle: "Unplugged Broadcast // 04", 
      span: "md:col-span-7 md:-translate-y-8", 
      specs: "Live Recording • Studio Session"
    },
    { 
      img: img5, 
      title: "Vocal Recording", 
      subtitle: "Master Studio Phase // 05", 
      span: "md:col-span-6 md:translate-y-0", 
      specs: "Acoustic Treatment • Neumann U87"
    },
    { 
      img: img1, 
      title: "Portrait Narrative", 
      subtitle: "Editorial Concept // 06", 
      span: "md:col-span-6 md:-translate-y-10", 
      specs: "High Fashion • Concept Frame"
    }
  ];

  return (
    <section ref={sectionRef} id="visuals" className="py-36 px-6 md:px-16 bg-neo-charcoal brutalist-border border-x-0 overflow-hidden relative">
      
      {/* Ambient Luxury Aura Backdrops */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-neo-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-neo-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Header with Staggered Entrance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-neo-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold">Visual Direction</span>
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-white tracking-tight">
              EDITORIAL <span className="text-neo-red italic">ARCHIVES</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs uppercase tracking-widest text-neo-grey max-w-xs mt-4 md:mt-0 font-light leading-relaxed"
          >
            An unfiltered, high-fashion chronicle spanning live arena performances, television staging, and intimate studio sessions.
          </motion.p>
        </div>

        {/* Asymmetrical Staggered Grid with Luxury Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-8">
          {archives.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} flex flex-col group cursor-pointer`}
              onClick={() => setActiveImage(item)}
            >
              {/* Card Container with custom fluid sizing and luxury border framing */}
              <div className="rounded-3xl overflow-hidden brutalist-border bg-neo-black relative flex items-center justify-center p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-neo-red transition-all duration-700">
                
                {/* Atmospheric Ambient Blur Backdrop */}
                <div className="absolute inset-0 filter blur-2xl opacity-20 scale-110 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Main Photo: Fits naturally to proportions without awkward cropping */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="relative z-10 w-full h-auto max-h-[62vh] object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent opacity-60 pointer-events-none z-20" />
                
                {/* Expand / View Badge on Hover */}
                <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="brutalist-border px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-widest bg-neo-black/80 text-white backdrop-blur-md shadow-xl flex items-center gap-1.5">
                    <span>Inspect</span>
                    <span className="text-neo-red">↗</span>
                  </span>
                </div>
              </div>

              {/* Minimalist Stylish Footer Metadata */}
              <div className="mt-5 px-2 flex justify-between items-end">
                <div>
                  <h4 className="text-sm md:text-base font-serif text-white tracking-wider uppercase group-hover:text-neo-gold transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-[10px] uppercase tracking-widest text-neo-grey">{item.subtitle}</p>
                    <span className="text-white/20">•</span>
                    <p className="text-[9px] font-mono text-white/50">{item.specs}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neo-red uppercase tracking-widest font-bold">
                  // 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Luxury Lightbox Modal Preview */}
      {activeImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white uppercase text-xs tracking-widest brutalist-border px-4 py-2 rounded-full bg-neo-charcoal"
            >
              Close [Esc]
            </button>
            <div className="rounded-3xl overflow-hidden brutalist-border bg-neo-black max-h-[75vh] w-full flex items-center justify-center p-4">
              <img src={activeImage.img} alt={activeImage.title} className="max-h-[70vh] w-auto object-contain object-center" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl text-white">{activeImage.title}</h3>
              <p className="text-xs uppercase tracking-widest text-neo-gold mt-1">{activeImage.subtitle} — {activeImage.specs}</p>
            </div>
          </div>
        </motion.div>
      )}

    </section>
  );
}