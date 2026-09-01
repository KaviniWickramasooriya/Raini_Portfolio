import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin } from "lucide-react";
import { artist, photos } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2 || !email.includes("@") || message.length < 8) {
      toast.error("Please add your name, a real email, and a short note.");
      return;
    }

    setSending(true);
    window.setTimeout(() => {
      const prev = JSON.parse(localStorage.getItem("raini-bookings") ?? "[]");
      prev.push({ name, email, message, at: new Date().toISOString() });
      localStorage.setItem("raini-bookings", JSON.stringify(prev));
      setSending(false);
      form.reset();
      toast.success("Request saved. Management will be in touch.");
    }, 500);
  }

  return (
    <section id="contact" className="contact-section relative overflow-hidden bg-wine-deep">
      <img
        src={photos.contact}
        alt=""
        aria-hidden="true"
        className="contact-bg-image pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="contact-overlay absolute inset-0 bg-wine-deep/80 backdrop-blur-[1px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 items-center">
        <div>
          <p className="kicker">Bookings</p>
          <h2 className="display-lg mt-3 text-fg">WRITE TO US</h2>
          <p className="mt-4 max-w-md text-pretty text-muted">
            Concerts, television, private evenings. Tell us the date and the room — Raini’s
            management reads every note.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-fg">
              <Mail className="size-4 text-accent" />
              <a href={`mailto:${artist.email}`} className="hover:text-accent">
                {artist.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-fg">
              <MapPin className="size-4 text-accent" />
              {artist.city}, {artist.country}
            </li>
          </ul>
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-[var(--radius-xl)] bg-surface/90 p-5 shadow-[var(--shadow-border)] backdrop-blur-md sm:p-7"
        >
          <label className="block text-xs uppercase tracking-[0.18em] text-muted">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              suppressHydrationWarning
              className="mt-2 h-11 w-full rounded-[var(--radius-sm)] bg-elevated px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/60"
            />
          </label>
          <label className="mt-4 block text-xs uppercase tracking-[0.18em] text-muted">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              suppressHydrationWarning
              className="mt-2 h-11 w-full rounded-[var(--radius-sm)] bg-elevated px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/60"
            />
          </label>
          <label className="mt-4 block text-xs uppercase tracking-[0.18em] text-muted">
            Message
            <textarea
              name="message"
              required
              rows={5}
              suppressHydrationWarning
              className="mt-2 w-full resize-y rounded-[var(--radius-md)] bg-elevated px-3 py-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/60"
            />
          </label>
          <Button type="submit" className="mt-6 w-full uppercase tracking-[0.18em]" disabled={sending}>
            {sending ? "Sending…" : "Send request"}
          </Button>
        </form>
      </div>
    </section>
  );
}