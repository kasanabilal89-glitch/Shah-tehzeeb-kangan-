import React from 'react';
import { Sparkles, Calendar, UtensilsCrossed, ChevronDown, Award, Flame, Clock } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Image with Deep Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBiryani}
          alt="Royal Awadhi Dum Biryani Banquet at Tehzeeb"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Multilayered rich dark forest green & vignette gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071813] via-[#071813]/85 to-[#071813]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071813] via-transparent to-[#071813]/70" />
        <div className="absolute inset-0 bg-jali-pattern opacity-30 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-28 left-6 md:left-12 pointer-events-none opacity-40 hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#C8A049]">
          <path d="M0 0 H40 M0 0 V40 M10 10 H30 M10 10 V30 M0 20 L20 0 M20 20 L30 10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="absolute top-28 right-6 md:right-12 pointer-events-none opacity-40 hidden sm:block rotate-90">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#C8A049]">
          <path d="M0 0 H40 M0 0 V40 M10 10 H30 M10 10 V30 M0 20 L20 0 M20 20 L30 10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl pt-8 sm:pt-16">
          {/* Subtle Royal Crest / Kicker */}
          <div className="inline-flex items-center gap-3 py-1 px-4 mb-6 rounded-full border border-[#C8A049]/40 bg-[#102d24]/60 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#C8A049]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#e5c678] font-semibold">
              The Royal Courts of Awadh &amp; Mughal Gastronomy
            </span>
          </div>

          {/* Main Headline & Tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F0DF] leading-[1.08] mb-4">
            <span className="block font-serif-title italic font-normal text-2xl sm:text-3xl lg:text-4xl text-[#d4b45d] mb-1">
              Dastarkhwan-e-Tehzeeb
            </span>
            <span className="text-white drop-shadow-md">
              {RESTAURANT_INFO.tagline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#d5cbba] font-light leading-relaxed mb-8 max-w-2xl">
            Where centuries-old culinary secrets of the royal khansamas come alive. Savor fragrant slow-cooked Dum Pukht biryanis, silken Shahi Nihari, and flame-kissed kebabs crafted with authentic saffron and hand-pounded spices.
          </p>

          {/* Buttons & CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#9E6435] text-[#071813] shadow-xl shadow-[#040e0b]/80 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5 text-[#071813] group-hover:rotate-12 transition-transform" />
              <span>Book a Royal Table</span>
            </button>

            <button
              onClick={onExploreMenu}
              className="px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest text-[#F3EAD6] border border-[#C8A049]/60 hover:bg-[#C8A049]/15 hover:border-[#C8A049] transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <UtensilsCrossed className="w-5 h-5 text-[#C8A049]" />
              <span>Explore Dastarkhwan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Heritage Pillar Badges / Trust Metrics Bar (bottom of hero) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#0c231c]/80 backdrop-blur-md border border-[#C8A049]/25 shadow-2xl">
          <div className="flex items-center gap-3 border-r border-[#1b4d3e]/50 pr-4">
            <div className="p-2.5 rounded-xl bg-[#C8A049]/10 text-[#C8A049]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-[#F3EAD6] tabular-nums">14 Hours</div>
              <div className="text-xs text-[#a99e8b]">Dum Pukht Slow-Cooking</div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:border-r border-[#1b4d3e]/50 pr-4">
            <div className="p-2.5 rounded-xl bg-[#C8A049]/10 text-[#C8A049]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-[#F3EAD6] tabular-nums">52 Spices</div>
              <div className="text-xs text-[#a99e8b]">Heirloom Royal Potli Blend</div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-[#1b4d3e]/50 pr-4">
            <div className="p-2.5 rounded-xl bg-[#C8A049]/10 text-[#C8A049]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-[#F3EAD6]">100% Halal</div>
              <div className="text-xs text-[#a99e8b]">Finest Farmed Meats</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#C8A049]/10 text-[#C8A049]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-[#F3EAD6] tabular-nums">Since 1912</div>
              <div className="text-xs text-[#a99e8b]">Centuries of Royal Lineage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a 
          href="#story" 
          aria-label="Scroll to story" 
          className="text-[#C8A049]/70 hover:text-[#C8A049] animate-bounce transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
