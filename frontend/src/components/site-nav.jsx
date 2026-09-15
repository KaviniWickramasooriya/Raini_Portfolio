import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { artist } from "@/lib/content";
import { cn } from "@/lib/utils";

const mainNav = [
  { label: "Home", to: "/" },
  { label: "The Story", to: "/story" },
  { label: "Music", to: "/music" },
  { label: "Shows", to: "/shows" },
  { label: "Gallery", to: "/gallery" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-250",
        scrolled || open
          ? "bg-bg/85 shadow-[var(--shadow-border)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <img
            src={artist.logo}
            alt="RC Logo"
            className="size-9 sm:size-10 object-contain rounded-full border border-accent/30 shadow-md group-hover:border-accent transition-colors"
          />
          <span className="font-display text-xl tracking-[0.18em] text-fg sm:text-2xl">
            {artist.first}
            <span className="text-accent"> {artist.last.toUpperCase()}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-muted transition-colors duration-150 hover:text-fg [&.active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden h-10 items-center rounded-[var(--radius-sm)] bg-accent px-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-accent-fg transition-opacity duration-150 hover:opacity-90 md:inline-flex"
        >
          Write
        </Link>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav
          className="flex flex-col gap-1 border-t border-line px-4 py-6 md:hidden"
          aria-label="Mobile"
        >
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-11 items-center font-serif text-2xl text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent font-sans text-sm font-medium uppercase tracking-[0.18em] text-accent-fg"
            onClick={() => setOpen(false)}
          >
            Write
          </Link>
        </nav>
      ) : null}
    </header>
  );
}