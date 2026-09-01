import { artist, photos } from "@/lib/content";
import { TrackPlayer } from "@/components/track-player";

export function LandingHero() {
  return (
    <section id="top" className="hero" aria-label="Raini Charuka">
      <img
        src={photos.ghost}
        alt=""
        className="hero-ghost-motion"
        aria-hidden="true"
      />
      <img
        src={photos.ghost}
        alt=""
        className="hero-ghost rise"
        aria-hidden="true"
        fetchPriority="high"
      />
      
      <div className="hero-name-split" aria-hidden="true">
        <span className="hero-name-part hero-name-left">RAI</span>
        <span className="hero-name-part hero-name-right">NI</span>
      </div>

      <div className="hero-title-badge rise-2">
        <span>Singer</span>
        <span className="hero-dot" />
        <span>Actress</span>
        <span className="hero-dot" />
        <span>Songwriter</span>
      </div>
      
      <div className="hero-stage">
        <img
          src={photos.heroLeft}
          alt=""
          className="figure-side figure-left rise-3"
          aria-hidden="true"
        />
        <img
          src={photos.heroCenter}
          alt="Raini Charuka standing in a white evening dress"
          className="figure-center rise-2"
          fetchPriority="high"
        />
        <img
          src={photos.heroRight}
          alt=""
          className="figure-side figure-right rise-4"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-20 z-10 flex justify-center px-4 sm:top-24">
        <p className="kicker rise text-center">The voice of</p>
      </div>

      <div className="hero-meta-left">
        <div className="hero-meta-card rise-3">
          <span className="hero-meta-label">Profile</span>
          <span className="hero-meta-value accent">Featured Artist</span>
          <span className="hero-meta-sub">Exclusive Portfolio</span>
        </div>
      </div>

      <div className="hero-meta-right">
        <div className="hero-meta-card rise-4 text-right">
          <span className="hero-meta-label">Location</span>
          <span className="hero-meta-value">Colombo, {artist.country}</span>
          <span className="hero-meta-sub accent">Est. 2009</span>
        </div>
      </div>

      <div className="hero-player rise-5">
        <TrackPlayer compact />
      </div>
    </section>
  );
}