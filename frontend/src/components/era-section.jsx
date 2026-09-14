import { photos } from "@/lib/content";

export function EraSection() {
  // Expanded chronological musical milestones for a rich interactive timeline
  const timelineMilestones = [
    {
      year: "2009",
      title: "The Debut",
      subtitle: "Neela Kandugate",
      description: "Stepping onto the national stage with a melody composed by her father, Rookantha Goonatillake.",
      photo: photos.heroLeft,
    },
    {
      year: "2010–2013",
      title: "Teledrama & Radio",
      subtitle: "Household Voice",
      description: "Becoming the signature voice behind landmark television themes across the island.",
      photo: photos.profile,
    },
    {
      year: "2014",
      title: "Chanchala Daase",
      subtitle: "Award-Winning Hit",
      description: "Capturing national acclaim and winning the DMVA Female Vocalist award.",
      photo: photos.award,
    },
    {
      year: "2018–2020",
      title: "Silver Screen & Live",
      subtitle: "Concert Stages",
      description: "Headlining major arena shows and contributing unforgettable cinematic soundtracks.",
      photo: photos.heroRight,
      objectPosition: "object-[center_35%]",
    },
    {
      year: "2021–Present",
      title: "The Voice & Today",
      subtitle: "Coach & Icon",
      description: "Mentoring the next generation on television and releasing timeless contemporary singles.",
      photo: photos.voice,
      objectPosition: "object-[center_30%]",
    },
  ];

  return (
    <section id="eras" className="era relative overflow-hidden bg-bg py-24 sm:py-32 isolation" aria-labelledby="eras-title">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_25%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <p className="kicker tracking-[0.45em] uppercase text-accent font-medium text-xs sm:text-sm mb-3">Always in our hearts</p>
          <h2 id="eras-title" className="font-serif text-3xl sm:text-5xl text-fg tracking-tight">
            From then, and forever
          </h2>
          <div className="w-16 h-[1px] bg-accent/40 mx-auto mt-6" />
        </div>

        {/* Timeline Layout: Horizontal cards on desktop & sleek vertical stack with custom mobile styling */}
        <div className="relative mb-20">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-accent/20 -translate-y-1/2 z-0" />

          {/* Vertical line for mobile */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-[1px] bg-accent/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {timelineMilestones.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="rounded-[var(--radius-xl)] bg-surface/85 border border-line p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl hover:border-accent/50 transition-all duration-300 group relative pl-14 lg:pl-6"
              >
                <div>
                  {/* Mobile timeline bullet point indicator */}
                  <span className="lg:hidden absolute left-4 top-7 size-4 rounded-full bg-surface border-2 border-accent shadow-[0_0_10px_rgba(212,184,150,0.6)] group-hover:bg-accent transition-colors" />

                  <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] mb-6 relative border border-accent/20">
                    <img
                      src={milestone.photo}
                      alt={milestone.title}
                      className={`size-full object-cover filter grayscale contrast-115 brightness-90 transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 ${milestone.objectPosition || "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-accent font-sans text-[0.6rem] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-accent/20 font-semibold shadow-sm">
                      {milestone.year}
                    </span>
                  </div>

                  <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold block mb-1">
                    {milestone.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-fg mb-3 group-hover:text-accent transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-display text-lg text-subtle/50">0{idx + 1}</span>
                  <span className="hidden lg:block size-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Subtitles */}
        <div className="relative flex justify-between items-center max-w-4xl mx-auto px-4 pt-8 border-t border-line">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted font-medium">
            From now
          </span>
          <span className="font-serif italic text-sm sm:text-base text-accent tracking-wider">
            "A timeless artistic journey"
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted font-medium">
            And forever
          </span>
        </div>

      </div>
    </section>
  );
}