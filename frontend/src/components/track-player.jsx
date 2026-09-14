import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipBack, SkipForward, ExternalLink } from "lucide-react";
import { tracks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TrackPlayer({ compact = false, className }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  
  const audioRef = useRef(null);
  const track = tracks[index];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(track.audioUrl || "https://p.scdn.co/mp3-preview/default");
    } else {
      audioRef.current.src = track.audioUrl || "https://p.scdn.co/mp3-preview/default";
    }

    audioRef.current.onended = () => {
      setPlaying(false);
      setElapsed(0);
      setIndex((i) => (i + 1) % tracks.length);
    };

    audioRef.current.ontimeupdate = () => {
      setElapsed(audioRef.current.currentTime);
    };

    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [index]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch((err) => {
        console.error("Playback blocked or failed:", err);
        setPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  function toggle() {
    setPlaying((p) => !p);
  }

  function jump(dir) {
    setPlaying(false);
    setElapsed(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIndex((i) => (i + dir + tracks.length) % tracks.length);
    setPlaying(true);
  }

  const durationSec = track.durationSec || 30;
  const pct = Math.min(100, (elapsed / durationSec) * 100);

  return (
    <div
      className={cn(
        "rounded-[20px] bg-[#120a0e]/95 p-3 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.7)] border border-[color-mix(in_oklab,var(--color-accent)_22%,transparent)] backdrop-blur-2xl text-left",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div className="relative size-9 shrink-0 overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--color-accent)_30%,transparent)] shadow-sm">
          <img
            src={track.cover}
            alt={track.title}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-sm sm:text-base tracking-wide text-fg font-medium">{track.title}</p>
          <p className="truncate font-sans text-[0.58rem] text-accent/80 tracking-wider">
            {track.note || `Raini Charuka · ${track.year}`}
          </p>
        </div>
      </div>

      <div className="space-y-1 mb-2.5">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--color-fg)_12%,transparent)]">
          <div
            className="h-full origin-left bg-accent transition-all duration-100 rounded-full"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
        <div className="flex justify-between font-sans text-[0.52rem] tabular-nums tracking-widest text-muted/70">
          <span>{fmt(elapsed)}</span>
          <span>{track.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-1.5">
        <button
          type="button"
          className="inline-flex size-7 items-center justify-center text-muted transition-colors hover:text-accent"
          aria-label="Previous track"
          onClick={() => jump(-1)}
        >
          <SkipBack className="size-3.5" />
        </button>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-150 active:scale-[0.96] shadow-lg hover:brightness-105"
          aria-label={playing ? "Pause" : "Play"}
          onClick={toggle}
        >
          {playing ? (
            <Pause className="size-3.5 fill-current" />
          ) : (
            <Play className="ml-0.5 size-3.5 fill-current" />
          )}
        </button>
        <button
          type="button"
          className="inline-flex size-7 items-center justify-center text-muted transition-colors hover:text-accent"
          aria-label="Next track"
          onClick={() => jump(1)}
        >
          <SkipForward className="size-3.5" />
        </button>
      </div>

      <a
        href={track.spotify}
        target="_blank"
        rel="noreferrer"
        className="flex h-5 items-center justify-center gap-1 text-[0.55rem] uppercase tracking-[0.25em] text-accent/75 transition-colors hover:text-accent font-medium border-t border-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] pt-1.5"
      >
        Listen on Spotify
        <ExternalLink className="size-2.5" />
      </a>
    </div>
  );
}

function fmt(sec) {
  const s = Math.floor(sec || 0);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}