import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ExternalLink, Mic2, Disc } from "lucide-react";
import { tracks, artist, photos } from "@/lib/content";
import { cn } from "@/lib/utils";

// Official Spotify Top Tracks with real cover art
const spotifyTopTracks = [
  {
    title: "Chanchala Dase",
    artists: "Raj Thillaiyampalam, Raini Charuka, Raj",
    duration: "4:02",
    cover: "https://i.scdn.co/image/ab67616d0000b2739481eb6df4233814da348724",
  },
  {
    title: "Mathakada Handaawe",
    artists: "Raini Charuka, Ravihans",
    duration: "4:53",
    cover: "https://i.scdn.co/image/ab67616d0000b273adb89cc99a57a6691f8652a1",
  },
  {
    title: "Nobala",
    artists: "Raini Charuka",
    duration: "3:57",
    cover: "https://i.scdn.co/image/ab67616d0000b273dab7b3bacc90c5e5a43610a2",
  },
  {
    title: "Dawasak Ewi (Duet Version)",
    artists: "Piyath Rajapakse, Raini Charuka, Lahiru De Costa",
    duration: "3:26",
    cover: "https://i.scdn.co/image/ab67616d0000b273d0ebddcf0465eda789f9adb6",
  },
  {
    title: "Malwaaram",
    artists: "Kapilan Kugavel, Raini Charuka",
    duration: "5:19",
    cover: "https://i.scdn.co/image/ab67616d0000b2735c1731c52d54a40ce3f4a8ab",
  },
  {
    title: "Neela Kadukate",
    artists: "Raini Charuka, Gayya",
    duration: "3:36",
    cover: "https://i.scdn.co/image/ab67616d0000b2739d187c7cb03eceac3d13030f",
  },
  {
    title: "Kaandam Daasa",
    artists: "Chinthy, Raini Charuka",
    duration: "3:46",
    cover: "https://i.scdn.co/image/ab67616d0000b2730daa7b8bfbab1a84513e44e8",
  },
  {
    title: "Kaluwarata Hitha Baya Hinda",
    artists: "Raini Charuka, Manuranga Wijesekara",
    duration: "4:09",
    cover: "https://i.scdn.co/image/ab67616d0000b273e54601cde69123773f2e4c7d",
  },
  {
    title: "Manika",
    artists: "Dimi3, Raini Charuka",
    duration: "3:27",
    cover: "https://i.scdn.co/image/ab67616d0000b2731206ace86477f6670d81ce53",
  },
  {
    title: "Sith Sith Sith",
    artists: "Rookantha Goonatillake, Raini Charuka",
    duration: "3:42",
    cover: "https://i.scdn.co/image/ab67616d0000b273cbab27856ab3d3bcee512b26",
  },
];

// Official Spotify Logo SVG
const SpotifyIcon = ({ className = "size-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.24 1.02zm1.44-3.84c-.301.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.44-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.38-1.32 9.84-.66 13.68 1.62.42.24.6.84.3 1.26zm.12-4.08C15.24 7.32 8.82 7.14 5.1 8.28c-.66.18-1.38-.18-1.56-.84-.18-.66.18-1.38.84-1.56 4.32-1.32 11.4-1.14 15.66 1.38.6.36.78 1.14.42 1.74-.36.54-1.14.72-1.74.36z" />
  </svg>
);

export function MusicPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [muted, setMuted] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  const audioRef = useRef(null);
  const currentTrack = tracks[currentIndex] || tracks[0];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.audioUrl || "https://p.scdn.co/mp3-preview/default");
    } else {
      audioRef.current.src = currentTrack.audioUrl || "https://p.scdn.co/mp3-preview/default";
    }

    audioRef.current.muted = muted;

    audioRef.current.ontimeupdate = () => {
      if (audioRef.current) {
        const cur = audioRef.current.currentTime;
        const dur = audioRef.current.duration || currentTrack.durationSec || 30;
        setCurrentTime(cur);
        setDuration(dur);
        setProgress((cur / dur) * 100);
      }
    };

    audioRef.current.onended = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setCurrentIndex((prev) => (prev + 1) % tracks.length);
    };

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const handleTrackSelect = (index) => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const skipTrack = (dir) => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setCurrentIndex((prev) => (prev + dir + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <article className="min-h-screen bg-bg text-fg pt-28 pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolation">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_32%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_15%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="kicker mb-3 tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">Selected Recordings</p>
          <h1 className="display-lg text-fg tracking-wide uppercase mb-4">The Songs</h1>
          <p className="font-sans text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            From a father-written debut to teledrama themes and film songs — a catalogue people hum without always knowing who first sang it.
          </p>
        </div>

        {/* Floating Constellation Grid (your local tracks) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20 pt-4">
          {tracks.map((track, idx) => {
            const active = idx === currentIndex;
            const offsets = [
              "md:translate-y-0",
              "md:translate-y-8",
              "md:-translate-y-4",
              "md:translate-y-6",
              "md:-translate-y-2",
              "md:translate-y-4",
              "md:-translate-y-6"
            ];
            const offsetClass = offsets[idx % offsets.length];

            return (
              <button
                key={track.title}
                type="button"
                onClick={() => handleTrackSelect(idx)}
                className={cn(
                  "group relative aspect-square overflow-hidden rounded-[var(--radius-xl)] bg-surface text-left transition-all duration-300 border shadow-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xl",
                  offsetClass,
                  active
                    ? "border-accent ring-2 ring-accent/50 scale-[1.04] z-30 bg-elevated shadow-[0_20px_50px_rgba(212,184,150,0.25)]"
                    : "border-line hover:border-accent/40 hover:scale-[1.02] opacity-85 hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="size-full object-cover filter brightness-[0.85] contrast-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="relative z-20 flex items-center justify-between w-full">
                  <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-accent font-semibold bg-black/70 px-2.5 py-1 rounded-full border border-accent/20 backdrop-blur-md">
                    {track.year}
                  </span>
                  {active && (
                    <span className="flex items-center gap-1 bg-accent text-accent-fg px-2.5 py-1 rounded-full text-[0.6rem] uppercase tracking-widest font-bold shadow-lg animate-pulse">
                      <Disc className="size-3 animate-spin" />
                      <span>Playing</span>
                    </span>
                  )}
                </div>

                <div className="relative z-20 mt-auto bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-fg group-hover:text-accent transition-colors truncate mb-0.5">
                    {track.title}
                  </h3>
                  <p className="font-sans text-[0.6rem] text-muted tracking-wider truncate">
                    {track.note || `Raini Charuka`}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Purple Spotify Catalogue with Official Covers + Spotify Icons */}
        <div className="mb-24">
          <div className="rounded-[var(--radius-xl)] bg-gradient-to-br from-[#1e1029] via-[#140b20] to-[#0d0714] border border-purple-500/30 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2c153d] to-[#1e1029] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-purple-500/20">
              <div className="flex items-center gap-6">
                <div className="relative size-24 sm:size-28 rounded-full overflow-hidden shrink-0 border-2 border-accent/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <img
                    src={photos.music}
                    alt="Raini Charuka"
                    className="size-full object-cover object-[center_70%] transform scale-140"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-3xl sm:text-4xl text-fg font-bold tracking-wide">
                      Raini Charuka
                    </h3>
                    {/* Spotify Icon next to name */}
                    <div className="hidden sm:flex items-center justify-center size-8 rounded-full bg-[#1DB954] text-black">
                      <SpotifyIcon className="size-4" />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-accent/20 text-accent font-sans text-[0.65rem] px-3 py-1 rounded-full tracking-[0.2em] uppercase font-bold border border-accent/30 backdrop-blur-sm">
                      Verified
                    </span>
                    <span className="font-sans text-xs text-muted uppercase tracking-[0.25em] font-medium">
                      Top Tracks Playlist
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end">
                {/* Follow button with Spotify icon */}
                <a
                  href={artist.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-all shadow-xl hover:scale-105"
                >
                  <SpotifyIcon className="size-4" />
                  <span>Follow</span>
                </a>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="size-14 rounded-full bg-accent text-accent-fg flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="size-5 fill-current" />
                  ) : (
                    <Play className="size-5 fill-current ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Track list with official Spotify covers */}
            <div className="p-4 sm:p-6 space-y-1.5">
              {spotifyTopTracks.map((t, idx) => (
                <div
                  key={t.title}
                  className="flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group hover:bg-white/10 border border-transparent"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-sans text-xs sm:text-sm text-muted tabular-nums w-6 text-center group-hover:text-white font-bold">
                      {idx + 1}
                    </span>

                    {/* Official Spotify Cover */}
                    <div className="size-12 sm:size-14 rounded-lg overflow-hidden shrink-0 border border-white/20 shadow-md">
                      <img
                        src={t.cover}
                        alt={t.title}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-sans text-sm sm:text-base font-semibold truncate text-white group-hover:text-accent transition-colors">
                        {t.title}
                      </h4>
                      <p className="font-sans text-xs text-muted/90 truncate mt-0.5">
                        {t.artists}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 pr-2">
                    <span className="font-sans text-xs sm:text-sm tabular-nums text-muted">
                      {t.duration}
                    </span>
                    {/* Small Spotify icon on hover */}
                    <SpotifyIcon className="size-4 text-[#1DB954] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Audio Dock */}
        <div className="sticky bottom-6 z-40 rounded-[var(--radius-xl)] bg-[color-mix(in_oklab,var(--color-surface)_96%,black)] border border-[color-mix(in_oklab,var(--color-accent)_30%,transparent)] p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative size-14 sm:size-16 shrink-0 overflow-hidden rounded-[var(--radius-md)] border border-accent/30 shadow-lg">
                <img src={currentTrack.cover} alt={currentTrack.title} className="size-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-accent">Now Streaming</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-fg truncate">{currentTrack.title}</h4>
                <p className="font-sans text-xs text-muted truncate tracking-wider">
                  {currentTrack.note || `Raini Charuka · ${currentTrack.year}`}
                </p>
              </div>
            </div>

            <div className="w-full md:max-w-md flex-1 flex flex-col items-center gap-2">
              <div className="flex items-center gap-6">
                <button type="button" onClick={() => skipTrack(-1)} className="text-muted hover:text-accent transition-colors p-1">
                  <SkipBack className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex size-13 items-center justify-center rounded-full bg-accent text-accent-fg shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="ml-0.5 size-5 fill-current" />}
                </button>
                <button type="button" onClick={() => skipTrack(1)} className="text-muted hover:text-accent transition-colors p-1">
                  <SkipForward className="size-5" />
                </button>
              </div>

              <div className="w-full flex items-center gap-3">
                <span className="font-sans text-[0.65rem] tabular-nums text-muted">{formatTime(currentTime)}</span>
                <div
                  className="relative flex-1 h-1.5 bg-fg/10 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newTime = (clickX / rect.width) * duration;
                    if (audioRef.current) {
                      audioRef.current.currentTime = newTime;
                      setCurrentTime(newTime);
                    }
                  }}
                >
                  <div className="absolute inset-y-0 left-0 bg-accent rounded-full" style={{ width: `${progress}%` }} />
                </div>
                <span className="font-sans text-[0.65rem] tabular-nums text-muted">{currentTrack.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
              <button
                type="button"
                onClick={() => {
                  setMuted(!muted);
                  if (audioRef.current) audioRef.current.muted = !muted;
                }}
                className="text-muted hover:text-accent transition-colors p-2"
              >
                {muted ? <VolumeX className="size-5 text-wine" /> : <Volume2 className="size-5" />}
              </button>

              <button
                type="button"
                onClick={() => setShowLyrics(!showLyrics)}
                className={cn(
                  "hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider transition-colors border",
                  showLyrics
                    ? "bg-accent text-accent-fg border-accent font-medium"
                    : "bg-surface text-muted border-line hover:border-accent/40 hover:text-fg"
                )}
              >
                <Mic2 className="size-3.5" />
                <span>Lyrics</span>
              </button>

              <a
                href={currentTrack.spotify}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-surface hover:bg-elevated text-accent border border-accent/30 hover:border-accent px-4 py-2 rounded-[var(--radius-sm)] font-sans text-xs uppercase tracking-[0.2em] transition-all shadow-md"
              >
                <SpotifyIcon className="size-3.5 text-[#1DB954]" />
                <span>Spotify</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {showLyrics && (
            <div className="mt-6 pt-6 border-t border-line animate-fadeIn">
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-accent">Featured Lyrics / Note</span>
                <span className="font-serif text-sm text-muted">{currentTrack.title} ({currentTrack.year})</span>
              </div>
              <p className="font-serif italic text-lg sm:text-xl text-fg/90 leading-relaxed max-w-3xl">
                {currentTrack.note ? `"${currentTrack.note}"` : "A timeless melody and vocal performance capturing the defining emotional cadence of contemporary Sri Lankan music."}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}