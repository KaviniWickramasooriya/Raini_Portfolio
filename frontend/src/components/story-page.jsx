import { artist, photos } from "@/lib/content";
import { Sparkles, Award, Compass, Heart, Mic2 } from "lucide-react";

export function StorySection() {
  return (
    <article className="min-h-screen bg-bg text-fg pt-28 pb-32 px-5 sm:px-6 lg:px-8 relative overflow-hidden isolation">
      {/* Ambient background architectural glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-wine)_25%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />
      <div className="absolute top-2/3 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_12%,transparent)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      {/* Main Container with generous mobile horizontal padding */}
      <div className="mx-auto max-w-5xl relative z-10 px-2 sm:px-0">
        
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Sparkles className="size-4 text-accent" />
            <p className="kicker tracking-[0.35em] sm:tracking-[0.4em] uppercase text-accent font-medium text-xs">The Biography</p>
          </div>
          <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-fg mb-4 sm:mb-6">
            {artist.first} <span className="text-accent italic font-light">{artist.last}</span>
          </h1>
          <p className="font-sans text-muted text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Maryon Raini Charuka Goonatillake — singer, songwriter, cultural performer, and three-time coach on The Voice Sri Lanka.
          </p>
        </div>

        {/* Featured Cinematic Image Frame */}
        <div className="relative mb-16 sm:mb-24 overflow-hidden rounded-[var(--radius-xl)] bg-surface border border-line p-2 sm:p-4 shadow-2xl">
          <div className="aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-lg)] relative group">
            <img
              src={photos.story}
              alt="Raini Charuka Portrait"
              className="size-full object-cover object-center filter saturate-90 brightness-95 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-90 sm:opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-center sm:text-left">
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-accent font-semibold block mb-1">
                Legacy & Voice
              </span>
              <p className="font-serif text-base sm:text-2xl text-fg italic font-light">
                "The work that followed is not an echo — it is a second architecture."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-6 mb-20">
          {[
            { label: "Born", value: "10 April 1991", icon: Sparkles },
            { label: "Place", value: "Kegalle, Sri Lanka", icon: Compass },
            { label: "Based", value: "Colombo", icon: Heart },
            { label: "Debut", value: "Neela Kandugate, 2009", icon: Mic2 },
            { label: "Parents", value: "Rookantha & Chandralekha", icon: Sparkles },
            { label: "Sister", value: "Windy Goonatillake", icon: Heart },
          ].map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label + idx}
                className="bg-surface/70 backdrop-blur-md rounded-[var(--radius-lg)] p-4 sm:p-6 border border-line shadow-lg hover:border-accent/40 transition-colors text-center flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <Icon className="size-3 text-accent" />
                  <span className="font-sans text-[0.55rem] sm:text-[0.65rem] tracking-[0.25em] uppercase text-accent font-medium">
                    {fact.label}
                  </span>
                </div>
                <span className="font-serif text-sm sm:text-xl text-fg font-normal block leading-snug">
                  {fact.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Poetic Quote Banner */}
        <div className="mb-24 relative p-6 sm:p-12 rounded-[var(--radius-xl)] bg-elevated border border-accent/30 shadow-2xl text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_10%,transparent)_0%,transparent_70%)] pointer-events-none" />
          <p className="relative z-10 font-serif italic text-lg sm:text-3xl text-fg max-w-3xl mx-auto leading-relaxed font-light">
            "The name Charuka is assembled from the letters of her parents’ names. In 1997 Rookantha named an album after her. She built from there into her own sovereign artistry."
          </p>
        </div>

        {/* Biography Pro-Formatted Narrative */}
        <div className="mb-28 text-center sm:text-left">
          <div className="inline-flex items-center justify-center sm:justify-start gap-2 mb-4 w-full sm:w-auto">
            <span className="h-px w-8 bg-accent hidden sm:inline-block" />
            <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold">Biography Narrative</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-5xl font-normal text-fg mb-8 sm:mb-10 leading-tight">
            A house of song, then a door of her own.
          </h2>
          <div className="space-y-6 font-sans text-muted text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0 font-light text-left">
            <p>
              Raini was born on 10 April 1991 in Kegalle and raised first in Mattegoda, inside a household where composition was daily weather. At three she appeared on her father’s “Banana Song.” Jingles for Sirasa FM and brands from Prima to Munchee followed while she was still a child.
            </p>
            <p>
              She studied at St. Bridget’s Convent, Wycherley International and St. Nicholas’ International in Colombo; then, after the family moved to the United States in 2005, at Susan E. Wagner High School in New York and the University of Hartford in Connecticut. She trained as an actor at Delaware State University, earned a private pilot licence, and appeared in Off-Broadway and school productions including West Side Story, Wicked and The Lion King.
            </p>
            <p>
              In 2009, on a return to Sri Lanka, she released her first solo — “Neela Kandugate,” lyrics and music by Rookantha, in duet with Gayan Perera of DADDY. The video was shot in two days. She went back to university. The song did not go back with her; it stayed, and became a debut.
            </p>
            <p>
              What followed is now the popular memory of a generation: “Tharumini,” “Mathakada Handaawe” from the film Sinhawalokanaya (in which she played Samadaree), “Chanchala Dase,” “Nobala,” “Malwaaram,” “Dawasak Ewi,” “Kaluwarata Hitha Baya Hinda.” Her voice has carried more than eight teledrama themes; “Maha Katharaka,” for the series Click, won her the Raigam Award for Best Singer in a Teledrama.
            </p>
            <p>
              The family returned in 2018. At Sugathadasa Stadium she sang her mother’s first song, “Kusumata Lanwee,” and was introduced as a qualified pilot — a detail that sent a ripple of girls toward aviation. She co-founded the events company Party People Entertainment, produced her own short-film extensions of music videos, and in 2021 was named a UN SDG ambassador for Turn It Around Through the Power of Music.
            </p>
            <p>
              On Sirasa TV she has coached three seasons of The Voice / The Voice Teens. In 2024 she contributed playback to the film Kambili. In 2025–26 the catalogue widened again: “Pichcha Malee,” “Ma Numba Nisa,” and the family live album Jaana with Rookantha and Windy.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-28 border-t border-line pt-20">
          <div className="text-center sm:text-left mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 mb-3">
              <span className="h-px w-8 bg-accent hidden sm:inline-block" />
              <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold">Chronological Era</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg">
              Notes in order
            </h2>
          </div>

          <div className="space-y-10 relative border-l border-accent/30 ml-3 sm:ml-6 pl-5 sm:pl-8 text-left">
            {[
              { year: "1991", title: "Born in Kegalle", desc: "Maryon Raini Charuka Goonatillake is born on 10 April at the General Hospital, Kegalle. Her third name, Charuka, is drawn from the letters of Rookantha and Chandralekha." },
              { year: "1994", title: "First recording", desc: "At three, she is featured on her father's 'Banana Song' — the first public note of a voice that would later define a generation of Sri Lankan pop." },
              { year: "2005", title: "New York years", desc: "The family moves to the United States. Raini studies at Susan E. Wagner High School, New York, and later at the University of Hartford, Connecticut. She earns a private pilot licence and an acting certificate from Delaware State University." },
              { year: "2009", title: "Debut — Neela Kandugate", desc: "On a return to Colombo she releases her first solo, written and composed by Rookantha, in duet with Gayan Perera. A career in her own name begins." },
              { year: "2011", title: "Sinhawalokanaya", desc: "She plays Samadaree in Suneth Malinga Lokuhewa's cricket film and sings 'Mathakada Handaawe' — still among her most requested live songs." },
              { year: "2014–16", title: "Chanchala Dase · Nobala", desc: "A run of singles that become catalogue standards. 'Chanchala Dase' and 'Nobala' remain among her most streamed recordings." },
              { year: "2018", title: "Homecoming", desc: "The family returns to Sri Lanka. Raini sings her mother's 'Kusumata Lanwee' at Sugathadasa Stadium before a capacity audience." },
              { year: "2020–", title: "The Voice", desc: "She becomes a three-time coach on The Voice Sri Lanka / The Voice Teens — #TeamRaini — mentoring a new generation of singers on Sirasa TV." },
              { year: "2021", title: "Awards & advocacy", desc: "Raigam Award for Best Singer in a Teledrama for 'Maha Katharaka' (Click). Named a UN SDG ambassador for Turn It Around Through the Power of Music." },
              { year: "2024–26", title: "The present tense", desc: "Playback on Kambili. New singles including 'Pichcha Malee' and 'Ma Numba Nisa'. The family live album Jaana. A voice that is no longer only lineage — it is her own." },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[23.5px] sm:-left-[39.5px] top-1.5 size-2.5 sm:size-3 rounded-full bg-accent border-4 border-bg group-hover:scale-125 transition-transform shadow-md" />
                
                <span className="font-sans text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase text-accent font-semibold block mb-1">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl text-fg mb-2 font-normal">
                  {item.title}
                </h3>
                <p className="font-sans text-muted text-xs sm:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Distinctions Section */}
        <div className="border-t border-line pt-20 text-center sm:text-left">
          <div className="inline-flex items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="h-px w-8 bg-accent hidden sm:inline-block" />
            <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold">Honours</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg mb-12">
            Recognition & Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Raigam Award", desc: "Best Singer in a Teledrama — Maha Katharaka, for the series Click.", icon: Award },
              { title: "The Voice", desc: "Three-time coach on The Voice Sri Lanka and The Voice Teens. #TeamRaini.", icon: Mic2 },
              { title: "UN SDG", desc: "Ambassador, Turn It Around Through the Power of Music, 2021.", icon: Sparkles },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title + idx}
                  className="bg-surface/80 backdrop-blur-md rounded-[var(--radius-xl)] p-6 sm:p-8 border border-line shadow-xl hover:border-accent/50 transition-all group"
                >
                  <div className="size-10 rounded-lg bg-elevated border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-serif text-xl text-fg mb-2 font-normal">{card.title}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed font-light">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </article>
  );
}