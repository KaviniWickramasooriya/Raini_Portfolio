import { photos } from "@/lib/content";
import { TrackPlayer } from "@/components/track-player";

export function LandingHero() {
  return (
    <section id="top" className="hero hero-mobile-mode" aria-label="Raini Charuka">
      {/* Mobile Full Background Ghost Image */}
      <img
        src={photos.ghost}
        alt=""
        className="hero-ghost-mobile md:hidden"
        aria-hidden="true"
      />

      {/* Desktop Background Monogram Name (Large Screens Only) */}
      <div className="hero-name-full hidden md:flex" aria-hidden="true">
        <span className="hero-name-text">
          RAINI<span className="block">CHARUKA</span>
        </span>
      </div>

      {/* Mobile-Only Header Stack */}
      <div className="hero-mobile-header-stack md:hidden">
        <p className="hero-mobile-kicker">THE VOICE OF</p>
        <div className="hero-title-badge-mobile">
          <span>SINGER</span>
          <span className="hero-dot" />
          <span>PERFORMER</span>
          <span className="hero-dot" />
          <span>SONGWRITER</span>
        </div>
      </div>
      
      <div className="hero-stage">
        {/* Left Side Figure (Desktop Only) */}
        <img
          src={photos.heroLeft}
          alt=""
          className="figure-side figure-left rise-3 hidden md:block"
          aria-hidden="true"
        />
        
        {/* Mobile Central Image & Track Player */}
        <div className="flex flex-col items-center w-full md:contents">
          <img
            src={photos.heroCenter}
            alt="Raini Charuka standing in a luxury portrait"
            className="figure-center rise-2 md:hidden"
            fetchPriority="high"
          />

          {/* Desktop Central Image & Badge Stack shifted upward to raise both image and badge */}
          <div className="hidden md:flex flex-col items-center relative z-40 pb-6">
            <img
              src={photos.heroCenter}
              alt="Raini Charuka standing in a luxury portrait"
              className="figure-center-desktop rise-2"
              fetchPriority="high"
            />
            {/* Desktop Badge placed below the 3 figures */}
            <div className="hero-title-badge-desktop rise-2 mt-6">
              <span>Singer</span>
              <span className="hero-dot" />
              <span>Performer</span>
              <span className="hero-dot" />
              <span>Songwriter</span>
            </div>
          </div>
          
          {/* Mobile-Only Integrated Track Player Container */}
          <div className="w-[88%] max-w-[320px] mx-auto mt-[-0.4rem] mb-[-2.8rem] md:hidden relative z-20">
            <TrackPlayer compact />
          </div>
        </div>

        {/* Right Side Figure (Desktop Only) */}
        <img
          src={photos.heroRight}
          alt=""
          className="figure-side figure-right rise-4 hidden md:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}