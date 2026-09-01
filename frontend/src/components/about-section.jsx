import { bio, photos } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="about-poster" aria-labelledby="about-title">
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
      <div className="pointer-events-none absolute inset-x-0 top-16 z-10 px-4 text-center sm:top-20">
        <p className="kicker">Lips · Eyes · Voice</p>
      </div>
      <p className="about-type" aria-hidden="true">
        SINGER
        <span className="block">ACTRESS</span>
      </p>
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end pb-12 pt-28 sm:pb-16">
        <img
          src={photos.aboutCenter}
          alt="Raini Charuka, full-length portrait"
          className="about-figure"
        />
      </div>
      <div className="relative z-10 mx-auto -mt-20 max-w-3xl px-6 pb-24 text-center sm:-mt-28">
        <p className="kicker">{bio.kicker}</p>
        <h2 id="about-title" className="serif-title mt-4 text-fg">
          {bio.title}
        </h2>
        <div className="mt-8 space-y-5 text-pretty text-left text-[0.95rem] leading-relaxed text-muted sm:text-center">
          {bio.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <dl className="mx-auto mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
          {bio.stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-4xl tracking-wide text-accent">{s.value}</dt>
              <dd className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.22em] text-subtle">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}