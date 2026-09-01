import { motion } from "framer-motion";
import merchImg from "../assets/photos/photo_7_2026-08-31_11-53-53.jpg";

export default function MerchEdition() {
  return (
    <section id="edition" className="py-32 px-6 md:px-16 bg-neo-charcoal brutalist-border border-x-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold block mb-3">Merchandise Drop</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">LIMITED <span className="text-neo-red italic">EDITION</span></h2>
          <p className="text-sm leading-relaxed text-neo-grey mb-8 font-light">
            Exclusive apparel capsules designed in collaboration with avant-garde stylists. Engineered for high-fashion aesthetics and absolute comfort.
          </p>
          <a 
            href="#contact" 
            className="inline-block brutalist-border bg-white text-black px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-neo-red hover:text-white hover:border-neo-red transition-colors text-center"
          >
            Pre-Order Capsule ↗
          </a>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] rounded-3xl overflow-hidden brutalist-border relative flex items-center justify-center bg-neo-black">
          <div className="absolute inset-0 filter blur-xl opacity-25 scale-110 pointer-events-none">
            <img src={merchImg} alt="" className="w-full h-full object-cover" />
          </div>
          <img src={merchImg} alt="Merch" className="relative z-10 w-full h-full object-contain object-center filter grayscale contrast-125 p-4" />
          <div className="absolute inset-0 bg-gradient-to-t from-neo-charcoal via-transparent to-transparent opacity-80 pointer-events-none z-20" />
        </motion.div>

      </div>
    </section>
  );
}