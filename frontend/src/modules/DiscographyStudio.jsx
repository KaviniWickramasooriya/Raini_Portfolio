import { motion } from "framer-motion";
import { PORTFOLIO_CONTENT } from "../portfolioContent";
import { FaSpotify, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import discImg from "../assets/photos/photo_4_2026-08-31_11-53-53.jpg";

export default function DiscographyStudio() {
  const songList = PORTFOLIO_CONTENT.songs || [];

  return (
    <section id="music" className="py-32 px-6 md:px-16 bg-neo-black relative overflow-hidden">
      
      {/* Absolute background accent glows for high-end ambiance */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-neo-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neo-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header & Official Spotify Artist Profile Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold block mb-3">Verified Audio Stream</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">SELECTED <span className="text-neo-red italic">DISCOGRAPHY</span></h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://open.spotify.com/artist/560riUcFnPmvtt6XYVLMa9" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-3 text-white text-xs uppercase tracking-widest brutalist-border px-6 py-3 rounded-full bg-green-950/40 hover:bg-green-600 hover:border-green-500 transition-all duration-300 shadow-xl"
            >
              <FaSpotify className="text-green-500 text-lg group-hover:text-white transition-colors" /> 
              <span>Open Spotify Artist Hub</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Vinyl / Cover Art Graphic with interactive pulse (Full color enabled: removed grayscale filter) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden brutalist-border aspect-square relative group bg-neo-charcoal flex items-center justify-center">
            <div className="absolute inset-0 filter blur-xl opacity-30 scale-110 pointer-events-none">
              <img src={discImg} alt="" className="w-full h-full object-cover" />
            </div>
            
            <img src={discImg} alt="Discography" className="relative z-10 w-full h-full object-contain object-center contrast-110 group-hover:scale-105 transition-all duration-700 p-4" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-neo-black via-neo-black/40 to-transparent flex flex-col justify-end p-8 z-20 pointer-events-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest text-green-400 font-bold">Direct Playback Integration</span>
              </div>
              <h4 className="font-serif text-xl text-white tracking-wide">
                Stream Catalog via SongHub & Spotify
              </h4>
            </div>
          </div>

          {/* Interactive Song List Cards with direct playable triggers */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {songList.map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brutalist-border p-6 rounded-2xl bg-neo-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-neo-red transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background hover light wash */}
                <div className="absolute inset-0 bg-gradient-to-r from-neo-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center gap-6 relative z-10">
                  <span className="font-mono text-xs text-neo-red font-bold">{track.id}</span>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-neo-gold transition-colors">{track.title}</h4>
                    <p className="text-[11px] text-neo-grey uppercase tracking-wider mt-0.5">{track.genre} • <span className="text-white/80">{track.credits}</span></p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6 relative z-10">
                  <span className="font-mono text-xs text-neo-grey">{track.duration}</span>
                  
                  <div className="flex items-center gap-2">
                    {/* SongHub Link Button */}
                    <a 
                      href={track.link}
                      target="_blank"
                      rel="noreferrer"
                      title="Open on SongHub"
                      className="w-10 h-10 rounded-full bg-neo-black brutalist-border flex items-center justify-center text-white group-hover:bg-neo-red hover:scale-110 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                    {/* Direct Spotify Play Trigger Button */}
                    <a 
                      href="https://open.spotify.com/artist/560riUcFnPmvtt6XYVLMa9"
                      target="_blank"
                      rel="noreferrer"
                      title="Play on Spotify"
                      className="w-10 h-10 rounded-full bg-green-950/80 brutalist-border border-green-700 flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-300"
                    >
                      <FaPlay className="text-xs ml-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}