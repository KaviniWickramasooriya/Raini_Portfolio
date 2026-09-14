import { artist } from "@/lib/content";
import { Music, Mail, ArrowUpRight, Globe, Share2, MessageCircle, Video } from "lucide-react";

const socialLinks = [
  { label: "Spotify", href: artist.spotify, icon: Music },
  { label: "Instagram", href: artist.instagram, icon: Share2 },
  { label: "Facebook", href: "https://www.facebook.com/rainicharukagoonatillake/", icon: Globe },
  { label: "TikTok", href: "https://www.tiktok.com/@rainicharuka?lang=en", icon: Music },
  { label: "X (Twitter)", href: "https://x.com/RainiCharuka", icon: MessageCircle },
  { label: "YouTube", href: artist.youtube, icon: Video },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-bg border-t border-line overflow-hidden isolation text-fg">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] sm:w-[800px] sm:h-[300px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_20%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-line">
          
          {/* Brand & Bio column */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <a href="/" className="inline-flex items-center gap-3 group">
              <img
                src={artist.logo}
                alt="RC Logo"
                className="size-11 sm:size-12 object-contain rounded-full border border-accent/30 shadow-md group-hover:border-accent transition-colors"
              />
              <span className="font-display text-2xl tracking-[0.2em] text-fg sm:text-3xl">
                {artist.first}
                <span className="text-accent"> {artist.last.toUpperCase()}</span>
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-muted max-w-sm leading-relaxed font-light">
              Official portfolio and digital sanctuary for Sri Lankan recording artist, television coach, and performer Raini Charuka Goonatillake.
            </p>
            <div className="pt-1 sm:pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-surface border border-accent/30 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-accent font-medium hover:bg-elevated hover:border-accent transition-all shadow-lg"
              >
                <span>Management Enquiries</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Links Column */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4 text-center md:text-left">
            <p className="kicker tracking-[0.3em] uppercase text-accent font-semibold text-xs">Navigation</p>
            <ul className="space-y-2.5 sm:space-y-3 font-sans text-xs uppercase tracking-[0.2em] flex flex-col items-center md:items-start">
              <li>
                <a href="/" className="text-muted hover:text-fg transition-colors py-1 inline-block">Home</a>
              </li>
              <li>
                <a href="/story" className="text-muted hover:text-fg transition-colors py-1 inline-block">The Story</a>
              </li>
              <li>
                <a href="/music" className="text-muted hover:text-fg transition-colors py-1 inline-block">Music Catalogue</a>
              </li>
              <li>
                <a href="/shows" className="text-muted hover:text-fg transition-colors py-1 inline-block">Shows & Schedule</a>
              </li>
              <li>
                <a href="/gallery" className="text-muted hover:text-fg transition-colors py-1 inline-block">Visual Gallery</a>
              </li>
            </ul>
          </div>

          {/* Socials & Management Direct Column */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="w-full">
              <p className="kicker tracking-[0.3em] uppercase text-accent font-semibold text-xs mb-2.5 sm:mb-3">Management</p>
              <a
                href={`mailto:${artist.email}`}
                className="inline-flex items-center justify-center md:justify-start gap-2 font-serif text-base sm:text-xl text-fg hover:text-accent transition-colors underline underline-offset-4 break-all"
              >
                <Mail className="size-4 text-accent shrink-0" />
                <span>{artist.email}</span>
              </a>
              <p className="font-sans text-xs text-muted mt-2">
                For press, concert bookings, and collaboration requests.
              </p>
            </div>

            <div className="w-full">
              <p className="kicker tracking-[0.3em] uppercase text-accent font-semibold text-xs mb-2.5 sm:mb-3">Connect Online</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="size-10 rounded-[var(--radius-sm)] bg-surface border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-subtle">
            © {new Date().getFullYear()} Raini Charuka. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-6 font-sans text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-subtle flex-wrap justify-center">
            <span>Colombo, Sri Lanka</span>
            <span className="hidden sm:inline">·</span>
            <span>Website developed by <a href="https://adnavra.com" target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">Adnavra</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
}