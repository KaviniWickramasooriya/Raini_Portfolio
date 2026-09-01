import SmoothScroll from "./layout/SmoothScroller";
import GrainEffect from "./layout/GrainEffect";
import PreciseCursor from "./layout/PreciseCursor";
import TopNavigation from "./layout/TopNavigation";

import LandingHero from "./modules/LandingHero";
import CareerTimeline from "./modules/CareerTimeline";
import DiscographyStudio from "./modules/DiscographyStudio";
import EditorialShowcase from "./modules/EditorialShowcase";
import TourGrid from "./modules/LiveTourGrid";
import MerchEdition from "./modules/ExclusiveMerch";
import PhilanthropyWork from "./modules/PhilanthropyWork";
import ContactFooter from "./modules/ContactFooter";

export default function App() {
  return (
    <SmoothScroll>
      <GrainEffect />
      <PreciseCursor />
      <TopNavigation />
      
      <main>
        <LandingHero />
        <CareerTimeline />
        <DiscographyStudio />
        <EditorialShowcase />
        <TourGrid />
        <MerchEdition />
        <PhilanthropyWork />
        <ContactFooter />
      </main>
    </SmoothScroll>
  );
}