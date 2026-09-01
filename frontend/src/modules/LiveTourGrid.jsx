import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PORTFOLIO_CONTENT } from "../portfolioContent";
import { FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";
import tourAtmosphereImg from "../assets/photos/photo_9_2026-08-31_18-59-49.jpg";

export default function LiveTourGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  
  // Interactive modal / booking ticket preview state
  const [selectedEvent, setSelectedEvent] = useState(null);

  const tourList = PORTFOLIO_CONTENT?.tours || [];

  return (
    <section ref={sectionRef} id="tour" className="py-36 px-6 md:px-16 bg-neo-black text-center relative overflow-hidden">
      
      {/* Luxury Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-neo-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-neo-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-neo-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold">Live Presence</span>
            <span className="h-px w-8 bg-neo-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-7xl text-white tracking-tight mb-4">
            EVENT <span className="text-neo-red italic">CHRONICLES</span>
          </h2>
          <p className="text-xs uppercase tracking-widest text-neo-grey font-light max-w-lg mx-auto">
            Secure VIP passes and official concert event appearances for the 2026 season.
          </p>
        </motion.div>

        {/* Featured Live Atmosphere Banner with Perfectly Centered Fit Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden brutalist-border bg-neo-charcoal relative mb-16 p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl"
        >
          <div className="absolute inset-0 filter blur-xl opacity-20 scale-110 pointer-events-none">
            <img src={tourAtmosphereImg} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="lg:col-span-7 relative z-10 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-widest text-neo-gold font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Headline Arena Event Active
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-white mb-4">
              Experience The Live Acoustic & Mainstream Fusion
            </h3>
            <p className="text-xs md:text-sm text-neo-grey font-light leading-relaxed mb-6">
              Featuring state-of-the-art stage design, immersive lighting synced with live vocal delivery, and exclusive meet-and-greet packages.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-white">
              <span className="brutalist-border px-4 py-2 rounded-full bg-neo-black flex items-center gap-2">
                <FaShieldAlt className="text-neo-gold" /> Verified Access
              </span>
              <span className="brutalist-border px-4 py-2 rounded-full bg-neo-black flex items-center gap-2">
                <FaTicketAlt className="text-neo-red" /> Priority Seating
              </span>
            </div>
          </div>

          {/* Correctly Fit and Centered Image Container */}
          <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden brutalist-border relative flex items-center justify-center bg-neo-black p-4">
            <div className="absolute inset-0 filter blur-xl opacity-25 scale-110 pointer-events-none">
              <img src={tourAtmosphereImg} alt="" className="w-full h-full object-cover" />
            </div>
            <img 
              src={tourAtmosphereImg} 
              alt="Event Atmosphere" 
              className="relative z-10 w-full h-full object-contain object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-transparent to-transparent opacity-80 pointer-events-none z-20" />
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {tourList.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.15) }}
              onClick={() => setSelectedEvent(t)}
              className="brutalist-border p-8 rounded-3xl bg-neo-charcoal hover:border-neo-red transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neo-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <span className="text-xs font-bold text-neo-gold tracking-widest font-mono flex items-center gap-2">
                    <FaCalendarAlt className="text-xs" /> {t.date}
                  </span>
                  <span className="text-[9px] font-mono text-white/40">// 2026</span>
                </div>

                <h3 className="text-2xl font-serif text-white my-2 group-hover:text-neo-gold transition-colors relative z-10">
                  {t.city}
                </h3>
                
                <p className="text-xs text-neo-grey uppercase tracking-wider mb-8 flex items-center gap-2 relative z-10">
                  <FaMapMarkerAlt className="text-neo-red text-xs" /> {t.venue}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
                <span className="inline-block brutalist-border text-white text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full group-hover:bg-neo-red group-hover:border-neo-red transition-colors">
                  {t.status}
                </span>
                <span className="text-xs text-neo-grey group-hover:text-white transition-colors flex items-center gap-1 font-mono uppercase">
                  Reserve ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Ticket Reservation Modal Preview */}
      {selectedEvent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="relative max-w-md w-full rounded-3xl brutalist-border bg-neo-charcoal p-8 text-left shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <span className="text-[9px] uppercase tracking-widest text-neo-gold font-bold block mb-1">Official Event Pass</span>
            <h3 className="font-serif text-3xl text-white mb-2">{selectedEvent.city} Arena</h3>
            <p className="text-xs text-neo-grey uppercase tracking-wider mb-6">{selectedEvent.venue} • {selectedEvent.date}</p>
            
            <div className="brutalist-border p-4 rounded-2xl bg-neo-black mb-6 space-y-3 text-xs text-neo-grey">
              <div className="flex justify-between">
                <span>Access Tier:</span>
                <span className="text-white font-bold">VIP Front Row</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-neo-red font-bold">{selectedEvent.status}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="flex-1 brutalist-border bg-white text-black py-3 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-neo-red hover:text-white hover:border-neo-red transition-colors"
              >
                Confirm Pass
              </button>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="brutalist-border px-6 py-3 rounded-full text-xs uppercase font-bold tracking-widest text-white hover:border-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

    </section>
  );
}