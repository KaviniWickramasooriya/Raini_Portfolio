import { useState } from "react";
import { gallery } from "@/lib/content";
import { X, Sparkles, ZoomIn } from "lucide-react";

export function GalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <article className="min-h-screen bg-bg text-fg pt-24 pb-28 px-4 sm:pt-28 sm:pb-36 sm:px-6 lg:px-8 relative overflow-hidden isolation">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] sm:w-[1000px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_30%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_15%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <Sparkles className="size-3.5 sm:size-4 text-accent" />
            <p className="kicker tracking-[0.35em] sm:tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">Visual Archive</p>
          </div>
          <h1 className="display-lg text-fg tracking-wide uppercase mb-3 sm:mb-4 text-3xl sm:text-6xl">Gallery</h1>
          <p className="font-sans text-muted text-sm sm:text-lg leading-relaxed px-2 sm:px-0">
            Moments on stage, backstage green rooms, television productions, and editorial concept shoots capturing the essence of Raini Charuka's artistic journey.
          </p>
        </div>

        {/* Unique Staggered / Asymmetrical Gallery Feed with Luxury Mobile-Optimized Styling (Staggered Offsets) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((item, idx) => {
            // Creative offset classes for uneven artistic layout
            const staggerClasses = [
              "lg:translate-y-0",
              "lg:translate-y-10",
              "lg:translate-y-4",
            ];
            const stagger = staggerClasses[idx % staggerClasses.length];

            return (
              <div
                key={item.alt + idx}
                onClick={() => setActiveImage(item)}
                className={`group relative overflow-hidden rounded-[var(--radius-xl)] bg-surface border border-line cursor-pointer shadow-2xl transition-all duration-500 hover:border-accent/60 hover:-translate-y-1 aspect-[4/5] sm:aspect-[16/11] flex flex-col justify-end ${stagger}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 size-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Always visible atmospheric bottom gradient for mobile clarity & cinematic hover state */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-95 sm:opacity-80 sm:group-hover:opacity-95 transition-opacity duration-300 p-5 sm:p-6 flex flex-col justify-end">
                  <div className="transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
                      Archive · 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-xl text-fg font-medium leading-snug">
                      {item.alt}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 size-9 rounded-full bg-black/60 backdrop-blur-md hidden sm:flex items-center justify-center text-accent border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="size-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8 animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:size-12 size-10 rounded-full bg-surface border border-line text-fg flex items-center justify-center hover:bg-accent hover:text-accent-fg transition-colors z-50 shadow-2xl"
              aria-label="Close lightbox"
            >
              <X className="size-5 sm:size-6" />
            </button>

            <div
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[var(--radius-xl)] border border-accent/30 bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 overflow-hidden flex items-center justify-center bg-black/40 p-2">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain mx-auto block rounded-lg"
                />
              </div>
              <div className="bg-elevated px-4 py-3 sm:px-6 sm:py-4 border-t border-line text-center shrink-0">
                <p className="font-serif text-base sm:text-lg text-fg font-medium">{activeImage.alt}</p>
                <p className="font-sans text-[0.65rem] sm:text-xs text-muted uppercase tracking-[0.2em] mt-0.5 sm:mt-1">Raini Charuka Visuals</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </article>
  );
}