import { artist } from "@/lib/content";

function SpotifyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm4.86 15.16a.66.66 0 0 1-.9.22c-2.47-1.51-5.58-1.85-9.24-1.01a.66.66 0 1 1-.3-1.29c4.02-.92 7.45-.52 10.2 1.16a.66.66 0 0 1 .24.92Zm1.3-2.9a.82.82 0 0 1-1.13.27c-2.83-1.74-7.14-2.25-10.48-1.23a.82.82 0 1 1-.48-1.57c3.82-1.16 8.55-.6 11.8 1.4a.82.82 0 0 1 .28 1.13Zm.12-3.02c-3.4-2.02-9.01-2.2-12.25-1.22a.99.99 0 1 1-.57-1.9c3.73-1.12 10.02-.9 13.95 1.42a.99.99 0 1 1-1.13 1.7Z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.6 12 4.6 12 4.6s-6.4 0-8.3.4A3.1 3.1 0 0 0 1.5 7.2 32 32 0 0 0 1.1 12a32 32 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.1 3.1 0 0 0 2.2-2.2 32 32 0 0 0 .4-4.8 32 32 0 0 0-.4-4.8ZM10 15.2V8.8l5.3 3.2L10 15.2Z" />
    </svg>
  );
}

const social = [
  { href: artist.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: artist.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: artist.spotify, label: "Spotify", Icon: SpotifyIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6">
        <p className="font-display text-4xl tracking-[0.2em] text-fg">RAINI</p>
        <p className="script text-3xl">Charuka</p>
        <nav className="flex items-center gap-2" aria-label="Social">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-accent"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </nav>
        <p className="text-center text-xs tracking-wide text-subtle">
          © {new Date().getFullYear()} {artist.legal}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}