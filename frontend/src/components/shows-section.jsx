import { upcomingShows } from "@/lib/content";
import { Calendar, MapPin, ArrowUpRight, ShieldAlert, Sparkles } from "lucide-react";

export function ShowsSection() {
  return (
    <section id="shows" className="relative overflow-hidden bg-bg py-20 sm:py-32 isolation">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_25%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-4 text-accent" />
              <p className="kicker tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">Live Performances</p>
            </div>
            <h2 className="display-lg text-fg tracking-wide uppercase">Upcoming Shows</h2>
            <p className="mt-3 font-sans text-muted text-sm sm:text-lg max-w-xl leading-relaxed">
              Experience the music live on stage. Dates ahead for concerts and international showcases.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/shows"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-surface border border-accent/30 px-5 py-3 sm:px-6 font-sans text-xs uppercase tracking-[0.2em] text-accent font-medium hover:bg-elevated hover:border-accent transition-all shadow-lg w-full sm:w-auto"
            >
              <span>View Full Schedule & Archive</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Upcoming Shows Creative Grid with Mobile-Optimized Styling (Compact Scrollable Row / Stacked Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {upcomingShows.map((show) => (
            <div
              key={show.id}
              className="rounded-[var(--radius-xl)] bg-surface border border-line overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-accent/50 hover:scale-[1.01] transition-all duration-300 backdrop-blur-xl"
            >
              <div className="aspect-[16/10] sm:aspect-[16/10] overflow-hidden relative">
                <img
                  src={show.image}
                  alt={show.title}
                  className="size-full object-cover filter brightness-90 contrast-105 group-hover:scale-110 transition-transform duration-700 object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/70 backdrop-blur-md text-accent font-sans text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.2em] px-2.5 sm:px-3 py-1 rounded-full border border-accent/20 font-semibold shadow-md">
                  {show.type} · {show.year}
                </span>

                <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-sans text-[0.7rem] sm:text-xs text-fg tracking-widest font-semibold flex items-center gap-1.5 bg-accent/25 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg backdrop-blur-md border border-accent/40 shadow-lg">
                  <Calendar className="size-3 text-accent sm:size-3.5" />
                  <span>{show.date}</span>
                </span>
              </div>

              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 sm:space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-2xl font-medium text-fg group-hover:text-accent transition-colors leading-snug">
                    {show.title}
                  </h3>
                  <p className="font-sans text-xs text-muted flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-accent shrink-0" />
                    <span className="truncate">{show.location}</span>
                  </p>
                  <p className="font-sans text-xs text-muted/80 leading-relaxed pt-1 sm:pt-2">
                    {show.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-line flex items-center justify-between">
                  <span className="font-sans text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-subtle">
                    Not bookable here
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.18em] text-accent hover:underline underline-offset-4 font-medium"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center px-5 py-3.5 sm:px-6 sm:py-4 rounded-[var(--radius-lg)] bg-surface/60 border border-line backdrop-blur-md max-w-2xl mx-auto">
          <ShieldAlert className="size-4 text-accent shrink-0" />
          <span className="font-sans text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-muted leading-relaxed">
            Appearances are listed for information only. Tickets are sold by promoters.
          </span>
        </div>

      </div>
    </section>
  );
}