import { upcomingShows, archiveShows } from "@/lib/content";
import { Calendar, MapPin, ShieldAlert, ArrowUpRight, History } from "lucide-react";

export function ShowsPage() {
  return (
    <article className="min-h-screen bg-bg text-fg pt-28 pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolation">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_30%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_15%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-14">
          <p className="kicker mb-3 tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">The Stage</p>
          <h1 className="display-lg text-fg tracking-wide uppercase mb-4">Shows</h1>
          <p className="font-sans text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Previous appearances and dates ahead — concerts, television, and tours. This website does not take bookings. For press or collaboration, write to management.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-line text-xs uppercase tracking-[0.2em] text-muted shadow-sm">
            <ShieldAlert className="size-3.5 text-accent shrink-0" />
            <span>Appearances are listed for information only. Tickets, if any, are sold by the promoter — never through this site.</span>
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="mb-24">
          <p className="kicker mb-6 tracking-[0.3em] uppercase text-accent font-semibold text-xs">Upcoming</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-fg mb-10 tracking-tight">Ahead</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingShows.map((show) => (
              <div
                key={show.id}
                className="rounded-[var(--radius-xl)] bg-surface border border-line overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="size-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-accent font-sans text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-accent/20">
                    {show.type} · {show.year}
                  </span>
                  <span className="absolute bottom-4 left-4 font-sans text-xs text-fg tracking-widest font-semibold flex items-center gap-1.5 bg-accent/20 px-3 py-1 rounded-md backdrop-blur-md border border-accent/30">
                    <Calendar className="size-3.5 text-accent" />
                    <span>{show.date}</span>
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-fg group-hover:text-accent transition-colors">
                      {show.title}
                    </h3>
                    <p className="font-sans text-xs text-muted flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-accent shrink-0" />
                      <span>{show.location}</span>
                    </p>
                    <p className="font-sans text-xs text-muted/80 leading-relaxed pt-2">
                      {show.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-line flex items-center justify-between">
                    <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-subtle">
                      Not bookable here
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.18em] text-accent hover:underline underline-offset-4"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Timeline Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <History className="size-4 text-accent" />
            <p className="kicker tracking-[0.3em] uppercase text-accent font-semibold text-xs">Archive</p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-fg mb-12 tracking-tight">Previously</h2>

          {/* Vertical Timeline Layout */}
          <div className="relative border-l border-accent/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {archiveShows.map((arch) => (
              <div key={arch.id} className="relative group">
                {/* Timeline Dot / Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 rounded-full bg-surface border-2 border-accent shadow-[0_0_12px_rgba(212,184,150,0.5)] group-hover:bg-accent transition-colors" />

                <div className="rounded-[var(--radius-xl)] bg-surface/80 border border-line p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-accent/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-accent font-bold bg-elevated px-3 py-1 rounded-full border border-accent/20">
                        {arch.type}
                      </span>
                      <span className="font-sans text-xs text-accent/80 font-semibold tracking-wider">
                        {arch.year}
                      </span>
                    </div>
                    <span className="font-display text-xl text-subtle/60 tracking-wider">
                      {arch.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-fg mb-2 group-hover:text-accent transition-colors">
                    {arch.title}
                  </h3>

                  <p className="font-sans text-xs text-muted font-medium flex items-center gap-1.5 mb-3">
                    <MapPin className="size-3.5 text-accent shrink-0" />
                    <span>{arch.location}</span>
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-muted/90 leading-relaxed max-w-3xl">
                    {arch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-20 text-center border-t border-line pt-12 space-y-4">
            <p className="font-serif text-lg text-muted">
              Enquiries, not tickets. Dates are announced on social channels. For press and collaboration only — contact management.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex h-11 items-center rounded-[var(--radius-sm)] bg-accent px-8 font-sans text-xs uppercase tracking-[0.2em] text-accent-fg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Write to management
              </a>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}