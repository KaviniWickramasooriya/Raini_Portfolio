import { PORTFOLIO_CONTENT } from "../portfolioContent";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const icons = [<FaFacebookF/>, <FaXTwitter/>, <FaInstagram/>, <FaYoutube/>, <FaTiktok/>];

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-neo-charcoal text-white pt-32 pb-12 px-6 md:px-16 brutalist-border border-x-0 border-b-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        
        <div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-neo-gold font-bold block mb-3">Management & Bookings</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            GET IN <span className="text-neo-red">TOUCH</span>
          </h2>
          <p className="text-sm leading-loose text-neo-grey mb-10 max-w-md font-light">
            For concert bookings, media appearances, and corporate partnerships, connect directly through official channels.
          </p>

          <div className="flex gap-4 mb-12">
            {PORTFOLIO_CONTENT.socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full brutalist-border flex items-center justify-center text-neo-red hover:bg-neo-red hover:text-white transition-colors">
                {icons[i]}
              </a>
            ))}
          </div>

          <h4 className="text-xs tracking-widest uppercase text-neo-grey mb-1">Direct Booking Email</h4>
          <a href={`mailto:${PORTFOLIO_CONTENT.email}`} className="text-lg font-serif text-white hover:text-neo-gold transition-colors">{PORTFOLIO_CONTENT.email}</a>
        </div>

        <form className="brutalist-border bg-neo-black p-8 md:p-12 rounded-3xl flex flex-col gap-6 shadow-2xl" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully!"); }}>
          <input type="text" placeholder="YOUR NAME" className="brutalist-border bg-neo-charcoal rounded-full px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neo-red text-white" required />
          <input type="email" placeholder="EMAIL ADDRESS" className="brutalist-border bg-neo-charcoal rounded-full px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neo-red text-white" required />
          <input type="text" placeholder="PHONE NUMBER" className="brutalist-border bg-neo-charcoal rounded-full px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neo-red text-white" />
          <textarea placeholder="PROJECT DETAILS / MESSAGE" rows="4" className="brutalist-border bg-neo-charcoal rounded-2xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neo-red text-white resize-none" required></textarea>
          
          <button type="submit" className="brutalist-border bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-neo-red hover:text-white hover:border-neo-red transition-colors self-start">
            SUBMIT INQUIRY ↗
          </button>
        </form>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-neo-grey gap-4">
        <p>© Copyright {new Date().getFullYear()} {PORTFOLIO_CONTENT.artistName}. All Rights Reserved.</p>
        
        <div className="flex items-center gap-2">
          <span className="text-neo-gold">Professional Neo-Brutalist Architecture</span>
          <span className="text-white/20">•</span>
          <a 
            href="https://adnavra.com/" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-neo-red transition-colors font-mono tracking-wider flex items-center gap-1.5"
          >
            Powered by <span className="underline decoration-neo-red font-bold">Adnavra</span> ↗
          </a>
        </div>
      </div>
    </footer>
  );
}