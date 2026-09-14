import { bio, photos } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="about-poster relative overflow-hidden bg-bg pb-12 sm:pb-16 pt-12 sm:pt-16" aria-labelledby="about-title">
      <img
        src={photos.aboutMirror}
        alt=""
        className="about-mirror about-mirror-left"
        aria-hidden="true"
      />
      <img
        src={photos.aboutMirror}
        alt=""
        className="about-mirror about-mirror-right"
        aria-hidden="true"
      />

      {/* Ambient background glows for immersive mood */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_30%,transparent)_0%,transparent_75%)] pointer-events-none blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Kicker */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="kicker tracking-[0.45em] uppercase text-accent font-medium text-xs sm:text-sm">Lips · Eyes · Voice</p>
        </div>

        {/* Main Hero Typography & Centered Transparent Portrait Layout */}
        <div className="relative flex flex-col items-center justify-center text-center mb-10 lg:mb-14">
          
          {/* Centered Transparent Portrait Image without Card Frame */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[3/4] my-2 group">
            <img
              src={photos.aboutCenter}
              alt="Raini Charuka portrait"
              className="size-full object-cover object-[center_top] opacity-80 filter contrast-115 transition-transform duration-700 group-hover:scale-105 mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)"
            />
          </div>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-accent mt-3 max-w-xl mx-auto font-light tracking-wide z-20">
            "{bio.kicker}"
          </p>
        </div>

        {/* Bio Paragraphs & Stats */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h3 id="about-title" className="serif-title text-fg text-center text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            {bio.title}
          </h3>
          <div className="mt-8 space-y-6 text-pretty text-center text-base sm:text-lg leading-relaxed text-muted max-w-3xl mx-auto font-light">
            {bio.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 border-t border-line pt-10">
            {bio.stats.map((s) => (
              <div key={s.label} className="text-center group">
                <dt className="font-display text-4xl sm:text-5xl tracking-wide text-accent transition-transform duration-300 group-hover:scale-105">{s.value}</dt>
                <dd className="mt-2 font-sans text-[0.7rem] uppercase tracking-[0.25em] text-subtle font-medium">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}