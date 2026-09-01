import { eras, photos } from "@/lib/content";

export function EraSection() {
  return (
    <section id="eras" className="era" aria-labelledby="eras-title">
      <div className="pointer-events-none absolute inset-x-0 top-16 z-10 px-4 text-center sm:top-20">
        <p className="kicker">Always in our hearts</p>
        <h2 id="eras-title" className="mt-3 font-serif text-3xl text-fg sm:text-4xl">
          From then, and forever
        </h2>
      </div>
      <div className="era-strips" aria-hidden="false">
        {eras.map((era) => (
          <figure
            key={era.year}
            className="era-strip"
            style={{ height: era.height }}
          >
            <img src={era.photo} alt={`${era.year} — ${era.title}`} />
            <figcaption className="era-year">{era.year}</figcaption>
          </figure>
        ))}
      </div>
      <p className="era-script" aria-hidden="true">
        legacy
      </p>
      <img
        src={photos.eraCenter}
        alt="Raini Charuka in a black dress"
        className="era-center"
      />
      <p className="absolute bottom-5 left-4 z-10 hidden font-sans text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:block">
        From now
      </p>
      <p className="absolute right-4 bottom-5 z-10 hidden font-sans text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:block">
        And forever
      </p>
    </section>
  );
}