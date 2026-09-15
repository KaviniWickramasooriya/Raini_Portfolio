import { useState, useRef } from "react";
import { tracks } from "@/lib/content";
import { Play, Pause, Disc3, Sparkles, ArrowUpRight, Radio } from "lucide-react";

export function MusicSection() {
  const [playingId, setPlayingId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  function togglePlay(track) {
    if (playingId === track.id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(track.audioUrl);
      audioRef.current = audio;
      audio.play().catch(() => {});
      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
      };
      audio.onended = () => {
        setPlayingId(null);
        setCurrentTime(0);
      };
      setPlayingId(track.id);
    }
  }

  return (
    <section id="music" className="relative overflow-hidden bg-bg py-24 sm:py-32 isolation">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_25%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Radio className="size-4 text-accent animate-pulse" />
              <p className="kicker tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">Sonic Archive</p>
            </div>
            <h2 className="display-lg text-fg tracking-wide uppercase text-3xl sm:text-6xl">Featured Tracks</h2>
            <p className="mt-3 font-sans text-muted text-sm sm:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
              Listen to defining singles and cinematic melodies across Raini Charuka's musical journey.
            </p>
          </div>

          <div className="shrink-0 flex justify-center">
            <a
              href="/music"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-surface border border-accent/30 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-accent font-medium hover:bg-elevated hover:border-accent transition-all shadow-lg"
            >
              <span>Explore Full Catalogue</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Adaptive Showcase: Sleek List Layout on Mobile Screens & Immersive Cards on Desktop */}
        <div className="mb-16">
          
          {/* Mobile View: Compact Modern Tracklist with Cover Images */}
          <div className="block md:hidden space-y-3">
            {tracks.slice(0, 6).map((track, idx) => {
              const isPlaying = playingId === track.id;

              return (
                <div
                  key={track.id}
                  onClick={() => togglePlay(track)}
                  className={`flex items-center justify-between p-3 rounded-xl bg-surface/90 border transition-all cursor-pointer shadow-lg active:scale-[0.99] ${
                    isPlaying ? "border-accent bg-elevated shadow-[0_0_20px_rgba(212,184,150,0.2)]" : "border-line"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="font-sans text-xs text-muted tabular-nums w-4 text-center font-bold">
                      {isPlaying ? (
                        <span className="flex items-end justify-center gap-0.5 h-3">
                          <span className="w-0.5 bg-accent animate-[bounce_0.6s_infinite]" style={{ animationDelay: '0s' }} />
                          <span className="w-0.5 bg-accent animate-[bounce_0.6s_infinite]" style={{ animationDelay: '0.2s' }} />
                          <span className="w-0.5 bg-accent animate-[bounce_0.6s_infinite]" style={{ animationDelay: '0.4s' }} />
                        </span>
                      ) : (
                        `0${idx + 1}`
                      )}
                    </span>

                    {/* Track Cover Thumbnail */}
                    <div className="size-12 rounded-lg overflow-hidden shrink-0 border border-white/20 relative shadow-sm">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        {isPlaying ? <Pause className="size-4 text-white fill-white" /> : <Play className="size-4 text-white fill-white ml-0.5" />}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className={`font-serif text-sm font-medium truncate transition-colors ${isPlaying ? "text-accent font-bold" : "text-fg"}`}>
                        {track.title}
                      </h3>
                      <p className="font-sans text-[0.65rem] text-muted truncate mt-0.5">
                        {track.note || `Raini Charuka · ${track.year}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pl-3">
                    <span className="font-sans text-xs tabular-nums text-muted">{track.duration}</span>
                    <button
                      type="button"
                      className={`size-9 rounded-full flex items-center justify-center shadow-md transition-transform ${
                        isPlaying ? "bg-accent text-accent-fg scale-105" : "bg-surface border border-line text-fg"
                      }`}
                      aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                    >
                      {isPlaying ? <Pause className="size-3.5 fill-current" /> : <Play className="size-3.5 fill-current ml-0.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: Creative Interactive Cards Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tracks.slice(0, 6).map((track, idx) => {
              const isPlaying = playingId === track.id;

              return (
                <div
                  key={track.id}
                  className={`rounded-[var(--radius-xl)] bg-surface/90 border p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all duration-300 group relative ${
                    isPlaying ? "border-accent shadow-[0_0_30px_rgba(212,184,150,0.25)]" : "border-line hover:border-accent/50"
                  }`}
                >
                  <div>
                    {/* Top Track Meta */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-sm tracking-[0.2em] text-accent font-semibold px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                        {track.year}
                      </span>
                      <span className="font-sans text-xs tracking-widest text-muted">
                        {track.duration}
                      </span>
                    </div>

                    {/* Cover Art & Vinyl Disc Animation Container */}
                    <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] mb-6 relative border border-accent/20 group/img">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="size-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Sliding Vinyl Graphic on Play */}
                      <div className={`absolute right-4 bottom-4 size-14 rounded-full bg-black/80 border border-accent/40 flex items-center justify-center transition-all duration-700 shadow-xl ${isPlaying ? "rotate-180 scale-110" : "opacity-80 group-hover/img:scale-105"}`}>
                        <Disc3 className={`size-8 text-accent ${isPlaying ? "animate-spin" : ""}`} />
                      </div>

                      {/* Play/Pause Action Button */}
                      <button
                        type="button"
                        onClick={() => togglePlay(track)}
                        className="absolute inset-0 m-auto size-12 rounded-full bg-accent text-accent-fg flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
                        aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                      >
                        {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current ml-0.5" />}
                      </button>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-fg mb-1 group-hover:text-accent transition-colors">
                      {track.title}
                    </h3>
                    <p className="font-sans text-xs text-muted/80 leading-relaxed">
                      {track.note}
                    </p>
                  </div>

                  {/* Progress bar indicator if active */}
                  {isPlaying && (
                    <div className="mt-6 pt-4 border-t border-line">
                      <div className="w-full bg-line h-1 rounded-full overflow-hidden">
                        <div
                          className="bg-accent h-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (currentTime / track.durationSec) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                    <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-subtle">
                      Track 0{idx + 1}
                    </span>
                    <a
                      href={track.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.18em] text-accent hover:underline underline-offset-4 font-medium"
                    >
                      <span>Spotify</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner Note */}
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-muted">
            Available on all streaming platforms worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}