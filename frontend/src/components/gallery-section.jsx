import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { davikaStrips, gallery } from "@/lib/content";

export function GallerySection() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="kicker">The beauty of</p>
          <h2 className="mt-3 font-serif text-5xl tracking-wide text-fg sm:text-7xl">RAINI</h2>
          <p className="mt-2 font-serif text-xl italic text-muted">Black & White — and everything between</p>
        </div>
        <div className="triptych mx-auto mt-14 max-w-3xl">
          {davikaStrips.map((s, i) => (
            <figure
              key={i}
              className={`overflow-hidden bg-elevated ${i === 1 ? "triptych-center-item" : ""}`}
            >
              <img
                src={s.src}
                alt="Raini Charuka, triptych portrait"
                style={{ objectPosition: s.pos }}
                className={i === 1 ? "triptych-center-img" : ""}
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-3 sm:px-6 md:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setActive(i)}
            className="group portrait-frame relative overflow-hidden bg-elevated"
            aria-label={`Open ${g.alt}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/20" />
          </button>
        ))}
      </div>
      {active !== null ? (
        <div
          className="lightbox-root fixed inset-0 flex items-center justify-center bg-bg/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center text-fg"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="size-6" />
          </button>
          <button
            type="button"
            className="absolute left-2 inline-flex size-11 items-center justify-center text-fg sm:left-6"
            aria-label="Previous photograph"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
            }}
          >
            <ChevronLeft className="size-8" />
          </button>
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="max-h-[86svh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-2 inline-flex size-11 items-center justify-center text-fg sm:right-6"
            aria-label="Next photograph"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % gallery.length));
            }}
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      ) : null}
    </section>
  );
}