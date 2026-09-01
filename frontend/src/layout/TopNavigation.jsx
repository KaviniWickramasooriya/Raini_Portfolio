import { PORTFOLIO_CONTENT } from "../portfolioContent";

export default function TopNavigation() {
  return (
    <header className="sticky top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center bg-neo-black/95 backdrop-blur-md brutalist-border border-t-0 border-x-0 text-white">
      <div className="font-serif text-lg tracking-[0.3em] font-bold">
        {PORTFOLIO_CONTENT.artistName}
      </div>

      <nav className="hidden lg:flex gap-10 text-[11px] tracking-[0.25em] uppercase font-semibold text-neo-grey">
        <a href="#about" className="hover:text-neo-red transition-colors">Profile</a>
        <a href="#music" className="hover:text-neo-red transition-colors">Discography</a>
        <a href="#visuals" className="hover:text-neo-red transition-colors">Visuals</a>
        <a href="#tour" className="hover:text-neo-red transition-colors">Events</a>
      </nav>

      <a 
        href="#contact" 
        className="bg-neo-white text-neo-black px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-neo-red hover:text-white transition-colors"
      >
        Inquire
      </a>
    </header>
  );
}