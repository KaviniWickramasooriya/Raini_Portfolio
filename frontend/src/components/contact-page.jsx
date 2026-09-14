import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { artist, photos } from "@/lib/content";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function ContactPage() {
  const [subject, setSubject] = useState("GENERAL");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully. Thank you for reaching out.");
  };

  return (
    <article className="min-h-screen bg-bg text-fg pt-28 pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolation">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_35%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <p className="kicker mb-3 tracking-[0.4em] uppercase text-accent font-medium text-xs sm:text-sm">Correspondence</p>
          <h1 className="display-lg text-fg tracking-wide uppercase mb-4">Contact</h1>
          <p className="font-sans text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Press, collaborations, and general enquiries. Event bookings are not accepted through this website.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info & Portrait Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-[var(--radius-xl)] bg-surface border border-line p-6 sm:p-8 shadow-2xl overflow-hidden relative group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-lg)] mb-6 relative">
                <img
                  src={photos.contact}
                  alt="Raini Charuka portrait"
                  className="size-full object-cover filter saturate-75 brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-lg text-fg tracking-wider">Raini Charuka</span>
              </div>

              <div className="space-y-4">
                <span className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent">Management</span>
                <a
                  href={`mailto:${artist.email}`}
                  className="inline-flex items-center gap-2 font-serif text-xl sm:text-2xl text-fg hover:text-accent transition-colors underline decoration-accent/40 underline-offset-8"
                >
                  <Mail className="size-5 text-accent" />
                  <span>{artist.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form matching reference layout */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-xl)] bg-surface border border-line p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="inline-flex size-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-fg">Message Received</h3>
                  <p className="font-sans text-muted max-w-md mx-auto text-base">
                    Thank you for your correspondence. Management will review your message and reach out if required.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="inline-flex h-11 items-center rounded-[var(--radius-sm)] bg-accent px-6 font-sans text-xs uppercase tracking-[0.18em] text-accent-fg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <p className="font-sans text-xs text-muted leading-relaxed border-b border-line pb-4">
                    This form does <span className="text-fg font-semibold">not</span> book events. Choose press, collaboration, or a general note.
                  </p>

                  {/* Subject Selector */}
                  <div>
                    <label className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-3 font-semibold">
                      Subject
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["PRESS", "COLLABORATION", "GENERAL"].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSubject(s)}
                          className={cn(
                            "h-12 rounded-[var(--radius-sm)] font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all border",
                            subject === s
                              ? "bg-fg text-bg border-fg shadow-lg scale-[1.02]"
                              : "bg-elevated text-muted border-line hover:border-accent/40 hover:text-fg"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-2 font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full h-12 rounded-[var(--radius-sm)] bg-elevated border border-line px-4 font-sans text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-2 font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full h-12 rounded-[var(--radius-sm)] bg-elevated border border-line px-4 font-sans text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-2 font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full rounded-[var(--radius-sm)] bg-elevated border border-line p-4 font-sans text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-accent px-8 font-sans text-xs uppercase tracking-[0.2em] text-accent-fg font-medium hover:opacity-90 transition-opacity shadow-lg"
                    >
                      <span>Send message</span>
                      <Send className="size-3.5" />
                    </button>
                    <span className="font-sans text-xs text-muted">
                      or email directly at <a href={`mailto:${artist.email}`} className="text-accent underline underline-offset-4">{artist.email}</a>
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </article>
  );
}