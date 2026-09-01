import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PORTFOLIO_CONTENT } from "../portfolioContent";
import bgHeroImg from "../assets/photos/photo_4_2026-08-31_18-59-49.jpg";
import cardImg from "../assets/photos/photo_14_2026-08-31_18-59-50.jpg";

export default function LandingHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col justify-between px-6 md:px-16 bg-neo-black overflow-hidden select-none"
    >
      
      {/* Cinematic Ambient Loading & Parallax Backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-35 pointer-events-none">
        <motion.img 
          initial={{ scale: 1.15, filter: "grayscale(100%) blur(10px)" }}
          animate={{ scale: 1, filter: "grayscale(100%) blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src={bgHeroImg} 
          alt="Backdrop" 
          className="w-full h-full object-cover object-[center_20%] contrast-125" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neo-black/40 to-neo-black" />
      </motion.div>

      {/* Top Luxury Status Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto z-10 pt-6 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-neo-grey"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-neo-red animate-ping" />
          <span className="text-white font-bold tracking-widest">Active Season // The Voice S03</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-right">
          <div>
            <p className="text-neo-gold font-bold">{PORTFOLIO_CONTENT.origin}</p>
            <p className="text-neo-grey/50 text-[9px]">Awwwards Nominated Standard</p>
          </div>
          <span className="h-4 w-px bg-white/20" />
          <span className="font-mono text-white/70">2026 EDITION</span>
        </div>
      </motion.div>

      {/* Center Kinetic Typography & Interactive Card Frame */}
      <motion.div style={{ scale: textScale, opacity: opacityFade }} className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
        
        {/* Massive Luxury Serif Stacking */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="h-px w-10 bg-neo-gold" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-neo-gold font-bold">
              {PORTFOLIO_CONTENT.designation}
            </span>
          </motion.div>

          <motion.div 
            initial={{ y: 60, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-[0.82] hover:text-neo-grey transition-colors duration-500 cursor-default">
              RAINI
            </h1>
          </motion.div>

          <motion.div 
            initial={{ y: 60, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="md:ml-24 -mt-1 md:-mt-4"
          >
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl tracking-tighter text-neo-red italic leading-[0.82] drop-shadow-[0_15px_30px_rgba(225,29,72,0.3)]">
              CHARUKA
            </h1>
          </motion.div>

          {/* Micro Bio Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs text-neo-grey/80 font-light max-w-md mt-6 leading-relaxed tracking-wide"
          >
            Commanding stages across South Asia with genre-defining vocals, elite television coaching, and avant-garde cinematic presence.
          </motion.p>
        </div>

        {/* 3D Interactive Mouse-Reactive Card Portrait Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }} 
          animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            rotateX: mousePos.y * -0.5,
            rotateY: mousePos.x * 0.5,
          }}
          className="lg:col-span-5 h-[40vh] sm:h-[48vh] lg:h-[52vh] max-h-[480px] w-fit mx-auto rounded-3xl overflow-hidden brutalist-border relative group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex items-center justify-center bg-neo-charcoal px-6 py-4 perspective-1000"
        >
          {/* Ambient Blurred Aura Behind Portrait */}
          <div className="absolute inset-0 filter blur-2xl opacity-40 scale-110 pointer-events-none transition-transform duration-700 group-hover:scale-125">
            <img src={cardImg} alt="" className="w-full h-full object-cover" />
          </div>
          
          <img 
            src={cardImg} 
            alt="Raini Charuka Hero Card" 
            className="relative z-10 h-full w-auto object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/20 to-transparent opacity-90 pointer-events-none z-20" />
          
          {/* Card Overlay Badges */}
          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end pointer-events-none z-30">
            <div>
              <span className="text-[9px] tracking-widest text-neo-gold uppercase font-bold block mb-0.5">Archive New // 2026</span>
              <span className="text-xs text-white uppercase font-serif tracking-widest">Iconic Stage Persona</span>
            </div>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="brutalist-border px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-widest bg-neo-black/80 text-white backdrop-blur-md pointer-events-auto cursor-pointer shadow-lg"
            >
              Exclusive ↗
            </motion.span>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Ticker & Navigation Anchor */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full max-w-7xl mx-auto z-10 pb-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neo-grey border-t border-white/10 pt-4 gap-2"
      >
        <span className="flex items-center gap-2">
          <span className="text-neo-gold font-mono">ENQUIRIES:</span> {PORTFOLIO_CONTENT.email}
        </span>
        <a href="#about" className="hover:text-neo-red transition-colors flex items-center gap-3 group">
          <span className="group-hover:translate-x-[-4px] transition-transform">Scroll down for narrative</span>
          <span className="w-8 h-px bg-neo-grey group-hover:w-12 group-hover:bg-neo-red transition-all" />
        </a>
      </motion.div>

    </section>
  );
}