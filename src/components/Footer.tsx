import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  ExternalLink,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#040e0b] text-[#F3EAD6] pt-20 pb-12 border-t-2 border-[#C8A049]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1b4d3e]">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A049] flex items-center justify-center bg-[#102d24]">
                <Sparkles className="w-5 h-5 text-[#C8A049]" />
              </div>
              <span className="font-display text-xl font-bold tracking-widest text-[#F7F0DF]">
                TEHZEEB
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A049] font-medium">
              Royal Awadhi &amp; Mughlai Fine Dining
            </p>
            <p className="text-sm text-[#a89d8b] leading-relaxed pr-4">
              Reviving the culinary majesty of the royal courts of Awadh. Every slow-cooked deg, charcoal roast, and fragrant biryani honours centuries of refinement and Kashmiri hospitality.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/shahetehzeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0c231c] border border-[#1b4d3e] text-[#C8A049] flex items-center justify-center hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0c231c] border border-[#1b4d3e] text-[#C8A049] flex items-center justify-center hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0c231c] border border-[#1b4d3e] text-[#C8A049] flex items-center justify-center hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Timings & Royal Seatings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-serif-title font-bold text-[#F7F0DF] uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C8A049]" />
              <span>Royal Dining Hours</span>
            </h3>
            <div className="space-y-3 text-sm text-[#c5baa6]">
              <div>
                <span className="text-xs uppercase text-[#e5c678] font-semibold block">Dopahar (Lunch)</span>
                <p>{RESTAURANT_INFO.timings.lunch}</p>
              </div>
              <div>
                <span className="text-xs uppercase text-[#e5c678] font-semibold block">Shaam-o-Shab (Dinner)</span>
                <p>{RESTAURANT_INFO.timings.dinner}</p>
              </div>
              <div>
                <span className="text-xs uppercase text-[#e5c678] font-semibold block">Weekly Schedule</span>
                <p>{RESTAURANT_INFO.timings.days}</p>
              </div>
            </div>
          </div>

          {/* Col 3: Location & Map Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-serif-title font-bold text-[#F7F0DF] uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A049]" />
              <span>Location &amp; Estate</span>
            </h3>
            
            <p className="text-sm text-[#c5baa6]">
              {RESTAURANT_INFO.address}
            </p>

            {/* Interactive Map Preview Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#C8A049]/40 bg-[#0c231c] p-1 group">
              <div className="h-40 w-full rounded-xl overflow-hidden relative bg-[#071813] flex items-center justify-center">
                {/* Stylized vector map artwork representing Kangan mountain valley & highway */}
                <svg className="w-full h-full object-cover" viewBox="0 0 400 160" fill="none">
                  <rect width="400" height="160" fill="#081E17" />
                  <path d="M-20 160 L120 60 L240 130 L380 40 L450 160 Z" fill="#0c231c" opacity="0.6"/>
                  <path d="M50 160 L180 30 L290 120 L400 80 L420 160 Z" fill="#102e25" opacity="0.5"/>
                  {/* River Sindh */}
                  <path d="M0 130 C120 120, 200 150, 400 110" stroke="#1d4d3e" strokeWidth="10" strokeLinecap="round" />
                  {/* NH-1D Highway Line */}
                  <path d="M0 80 Q200 70 400 85" stroke="#C8A049" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8"/>
                  
                  {/* Pinpoint for Tehzeeb */}
                  <circle cx="200" cy="75" r="18" fill="#C8A049" fillOpacity="0.2"/>
                  <circle cx="200" cy="75" r="8" fill="#C8A049"/>
                  <circle cx="200" cy="75" r="3" fill="#071813"/>
                  <text x="200" y="50" textAnchor="middle" fill="#F7F0DF" fontSize="11" fontFamily="Cormorant Garamond" fontWeight="bold">
                    Dastarkhwan-e-Tehzeeb
                  </text>
                  <text x="200" y="105" textAnchor="middle" fill="#e5c678" fontSize="9" fontFamily="sans-serif">
                    Rather Plaza · Kangan (NH-1D)
                  </text>
                </svg>

                {/* Direct Google Maps link overlay */}
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                >
                  <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A049] text-[#071813] flex items-center gap-1.5 shadow-lg">
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              {/* Quick Contact bar under map */}
              <div className="pt-2.5 px-3 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#a89d8b]">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-[#e5c678] flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A049]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="hover:text-[#e5c678] flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C8A049]" />
                  <span>{RESTAURANT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807664]">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved. 
            <span className="block sm:inline sm:ml-2">Crafted with royal honor in Kangan, Kashmir.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1b4d3e] text-[#c5baa6] hover:text-[#C8A049] hover:border-[#C8A049] transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 text-[#C8A049]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
