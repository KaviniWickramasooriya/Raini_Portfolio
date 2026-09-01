import { shows } from "@/lib/content";

export function ShowsSection() {
  const upcoming = shows.filter((s) => s.status === "upcoming");
  const past = shows.filter((s) => s.status === "past");

  return (
    <section id="shows" className="bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="kicker">On stage</p>
        <h2 className="display-lg mt-3 text-fg">SHOWS</h2>
        <p className="mt-3 max-w-md text-muted">
          Selected dates. Private and wedding bookings through management.
        </p>
        <ol className="mt-12 divide-y divide-line">
          {upcoming.map((s) => (
            <li key={s.date + s.venue} className="grid grid-cols-1 items-baseline gap-1 py-6 sm:grid-cols-[8.5rem_1fr_auto]">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent">{s.date}</p>
              <div>
                <p className="font-serif text-2xl text-fg">{s.venue}</p>
                <p className="text-sm text-muted">{s.city}</p>
              </div>
              <span className="mt-2 inline-flex h-8 w-fit items-center rounded-full px-3 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-accent-fg bg-accent sm:mt-0">
                Upcoming
              </span>
            </li>
          ))}
        </ol>
        <h3 className="mt-16 font-sans text-xs uppercase tracking-[0.28em] text-subtle">Recently</h3>
        <ol className="mt-4 divide-y divide-line">
          {past.map((s) => (
            <li key={s.date + s.venue} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[8.5rem_1fr]">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">{s.date}</p>
              <div>
                <p className="font-serif text-xl text-muted">{s.venue}</p>
                <p className="text-sm text-subtle">{s.city}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}