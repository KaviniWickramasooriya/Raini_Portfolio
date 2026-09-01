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

  // Initialize or update audio element source on track change
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(track.audioUrl || "https://p.scdn.co/mp3-preview/default"); // Fallback preview stream
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

  // Handle play/pause toggle
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
        "rounded-[var(--radius-lg)] bg-surface/80 p-4 shadow-[var(--shadow-border)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {!compact ? (
          <img
            src={track.cover}
            alt=""
            className="size-12 shrink-0 rounded-[var(--radius-sm)] object-cover"
          />
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-lg leading-tight text-fg">{track.title}</p>
          <p className="truncate text-xs text-muted">
            Raini Charuka · {track.year}
          </p>
        </div>
        {playing ? (
          <span className="flex h-4 items-end gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="eq-bar inline-block w-0.5 rounded-full bg-accent"
                style={{
                  height: 14,
                  animationDelay: `${i * 120}ms`,
                }}
              />
            ))}
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="h-px w-full overflow-hidden bg-fg/15">
          <div
            className="h-full origin-left bg-accent transition-all duration-100"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between font-sans text-[0.65rem] tabular-nums tracking-wider text-subtle">
          <span>{fmt(elapsed)}</span>
          <span>{track.duration}</span>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-center gap-3">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-fg"
          aria-label="Previous track"
          onClick={() => jump(-1)}
        >
          <SkipBack className="size-4" />
        </button>
        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg transition-transform duration-150 active:scale-[0.96]"
          aria-label={playing ? "Pause" : "Play"}
          onClick={toggle}
        >
          {playing ? (
            <Pause className="size-5 fill-current" />
          ) : (
            <Play className="ml-0.5 size-5 fill-current" />
          )}
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-fg"
          aria-label="Next track"
          onClick={() => jump(1)}
        >
          <SkipForward className="size-4" />
        </button>
      </div>
      <a
        href={track.spotify}
        target="_blank"
        rel="noreferrer"
        className="mt-1 flex min-h-10 items-center justify-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
      >
        Listen on Spotify
        <ExternalLink className="size-3" />
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