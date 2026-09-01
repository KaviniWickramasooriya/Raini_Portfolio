import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { artist, photos, tracks } from "@/lib/content";
import { TrackPlayer } from "@/components/track-player";
import { cn } from "@/lib/utils";

export function MusicSection() {
  const [openEmbed, setOpenEmbed] = useState(false);
  return (
    <section id="music" className="relative overflow-hidden bg-bg py-24 sm:py-32">
      <img
        src={photos.music}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 saturate-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-bg" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="kicker">Selected recordings</p>
          <h2 className="display-lg mt-3 text-fg">THE SONGS</h2>
          <p className="mt-4 max-w-md text-pretty text-muted">
            From a father-written debut to teledrama themes and film songs — a catalogue
            people hum without always knowing who first sang it.
          </p>
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <TrackPlayer />
            <button
              type="button"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-accent font-sans text-xs font-medium uppercase tracking-[0.18em] text-accent-fg transition-opacity hover:opacity-90"
              onClick={() => setOpenEmbed(true)}
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.24 1.02zm1.44-3.84c-.301.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.44-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.38-1.32 9.84-.66 13.68 1.62.42.24.6.84.3 1.26zm.12-4.08C15.24 7.32 8.82 7.14 5.1 8.28c-.66.18-1.38-.18-1.56-.84-.18-.66.18-1.38.84-1.56 4.32-1.32 11.4-1.14 15.66 1.38.6.36.78 1.14.42 1.74-.36.54-1.14.72-1.74.36z" />
              </svg>
              Open full catalogue on Spotify
            </button>
            {openEmbed ? (
              <div className="mt-4 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-border)]">
                <iframe
                  title="Raini Charuka on Spotify"
                  src={artist.spotifyEmbed}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            ) : null}
          </div>
          <ol className="divide-y divide-line rounded-[var(--radius-xl)] bg-surface/70 p-2 shadow-[var(--shadow-border)] backdrop-blur-sm">
            {tracks.map((t, i) => (
              <li key={t.id}>
                <a
                  href={t.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group flex min-h-16 items-center gap-4 rounded-[var(--radius-md)] px-3 py-3 transition-colors duration-150 hover:bg-fg/5",
                  )}
                >
                  <span className="w-6 font-sans text-xs tabular-nums text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative size-11 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                    <img src={t.cover} alt="" className="size-full object-cover" />
                    <span className="absolute inset-0 hidden items-center justify-center bg-bg/50 group-hover:flex">
                      <Play className="ml-0.5 size-3.5 fill-fg text-fg" />
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-serif text-lg leading-tight text-fg">
                      {t.title}
                    </span>
                    <span className="block truncate text-xs text-muted">{t.note}</span>
                  </span>
                  <span className="hidden font-sans text-xs text-subtle sm:inline">{t.year}</span>
                  <span className="font-sans text-xs tabular-nums text-subtle">{t.duration}</span>
                  <svg className="size-4 shrink-0 fill-subtle opacity-40 transition-opacity group-hover:opacity-100 group-hover:fill-accent" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.24 1.02zm1.44-3.84c-.301.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.44-.54.18-1.14-.12-1.32-.66-.18-.54.12-1.14.66-1.32 4.38-1.32 9.84-.66 13.68 1.62.42.24.6.84.3 1.26zm.12-4.08C15.24 7.32 8.82 7.14 5.1 8.28c-.66.18-1.38-.18-1.56-.84-.18-.66.18-1.38.84-1.56 4.32-1.32 11.4-1.14 15.66 1.38.6.36.78 1.14.42 1.74-.36.54-1.14.72-1.74.36z" />
                  </svg>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}