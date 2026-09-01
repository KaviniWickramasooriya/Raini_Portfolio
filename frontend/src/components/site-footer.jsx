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

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TwitterXIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TiktokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3.2 15.6a6.34 6.34 0 0 0 10.86 4.43v-7.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.24-.24Z"/>
    </svg>
  );
}

const social = [
  { href: "https://www.facebook.com/rainicharukagoonatillake/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/rainicharuka", label: "Instagram", Icon: InstagramIcon },
  { href: "https://x.com/RainiCharuka", label: "X", Icon: TwitterXIcon },
  { href: "https://www.youtube.com/RainiCharuka", label: "YouTube", Icon: YoutubeIcon },
  { href: "https://www.tiktok.com/@rainicharuka?lang=en", label: "TikTok", Icon: TiktokIcon },
  { href: "https://open.spotify.com/artist/560riUcFnPmvtt6XYVLMa9", label: "Spotify", Icon: SpotifyIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6">
        <p className="font-display text-4xl tracking-[0.2em] text-fg">RAINI</p>
        <p className="script text-3xl">Charuka</p>
        <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Social">
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
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-xs tracking-wide text-subtle">
            © {new Date().getFullYear()} {artist.legal}. All rights reserved.
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-subtle">
            Website developed by <span className="text-accent">adnavra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}