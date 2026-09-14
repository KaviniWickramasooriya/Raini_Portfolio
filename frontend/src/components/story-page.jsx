import { artist, photos } from "@/lib/content";

export function StorySection() {
  return (
    <article className="min-h-screen bg-bg text-fg pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <p className="kicker mb-3">The Story</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-fg mb-6">
            {artist.first} {artist.last}
          </h1>
          <p className="font-sans text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Maryon Raini Charuka Goonatillake — singer, songwriter, performer, and three-time coach on The Voice Sri Lanka.
          </p>
        </div>

        {/* Featured Image Grid / Intro Card */}
        <div className="relative mb-20 overflow-hidden rounded-[var(--radius-xl)] bg-surface border border-line p-2 sm:p-4">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-lg)]">
            <img
              src={photos.heroCenter}
              alt="Studio portrait of Raini Charuka"
              className="size-full object-cover object-center filter saturate-75 brightness-90"
            />
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 border-y border-line py-12">
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Born</span>
            <span className="font-serif text-xl text-fg">10 April 1991</span>
          </div>
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Place</span>
            <span className="font-serif text-xl text-fg">Kegalle, Sri Lanka</span>
          </div>
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Based</span>
            <span className="font-serif text-xl text-fg">Colombo</span>
          </div>
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Debut</span>
            <span className="font-serif text-xl text-fg">Neela Kandugate, 2009</span>
          </div>
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Parents</span>
            <span className="font-serif text-xl text-fg">Rookantha & Chandralekha</span>
          </div>
          <div>
            <span className="block font-sans text-[0.65rem] tracking-[0.25em] uppercase text-accent mb-2">Sister</span>
            <span className="font-serif text-xl text-fg">Windy Goonatillake</span>
          </div>
        </div>

        <div className="mb-20 font-serif italic text-xl sm:text-2xl text-accent max-w-3xl leading-relaxed">
          The name Charuka is assembled from the letters of her parents’ names. In 1997 Rookantha named an album after her. The work that followed is not an echo — it is a second architecture.
        </div>

        {/* Biography Content */}
        <div className="mb-24">
          <span className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-6">Biography</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-fg mb-10 leading-tight">
            A house of song, then a door of her own.
          </h2>
          <div className="space-y-6 font-sans text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
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
        <div className="mb-24 border-t border-line pt-16">
          <span className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-4">Timeline</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg mb-16">
            Notes in order
          </h2>

          <div className="space-y-12">
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
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-12 border-b border-line/60 last:border-none">
                <span className="font-serif text-2xl text-accent">{item.year}</span>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-fg mb-2">{item.title}</h3>
                  <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distinctions Section */}
        <div className="border-t border-line pt-16">
          <span className="block font-sans text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-4">Distinctions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-fg mb-12">
            Recognition & Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-[var(--radius-lg)] p-6 border border-line">
              <h3 className="font-serif text-xl text-fg mb-3">Raigam Award</h3>
              <p className="font-sans text-muted text-sm leading-relaxed">Best Singer in a Teledrama — Maha Katharaka, for the series Click.</p>
            </div>
            <div className="bg-surface rounded-[var(--radius-lg)] p-6 border border-line">
              <h3 className="font-serif text-xl text-fg mb-3">The Voice</h3>
              <p className="font-sans text-muted text-sm leading-relaxed">Three-time coach on The Voice Sri Lanka and The Voice Teens. #TeamRaini.</p>
            </div>
            <div className="bg-surface rounded-[var(--radius-lg)] p-6 border border-line">
              <h3 className="font-serif text-xl text-fg mb-3">UN SDG</h3>
              <p className="font-sans text-muted text-sm leading-relaxed">Ambassador, Turn It Around Through the Power of Music, 2021.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}