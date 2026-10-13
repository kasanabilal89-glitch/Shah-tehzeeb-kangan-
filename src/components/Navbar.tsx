import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Calendar } from 'lucide-react';
import { royalAudio } from '../utils/audio';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const state = royalAudio.toggle();
    setAudioActive(state);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071813]/95 backdrop-blur-md shadow-2xl border-b border-[#C8A049]/30 py-3'
          : 'bg-gradient-to-b from-[#071813]/90 via-[#071813]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          
          {/* Zone 1: Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-decoration-none whitespace-nowrap shrink-0"
          >
            {/* Elegant Royal Crest Emblem */}
            <div className="w-10 h-10 rounded-full border border-[#C8A049] flex items-center justify-center bg-gradient-to-br from-[#102e25] to-[#040e0b] shadow-md group-hover:border-[#e5c678] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C8A049] fill-current">
                <path d="M12 2L15 8H9L12 2Z M12 22C6.48 22 2 17.52 2 12C2 9.24 3.12 6.74 4.93 4.93L6.34 6.34C4.89 7.79 4 9.79 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 9.79 19.11 7.79 17.66 6.34L19.07 4.93C20.88 6.74 22 9.24 22 12C22 17.52 17.52 22 12 22Z" opacity="0.6"/>
                <polygon points="12,5 14,10 19,10 15,13 17,18 12,15 7,18 9,13 5,10 10,10" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-widest text-[#F3EAD6] group-hover:text-[#e5c678] transition-colors">
                TEHZEEB
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A049]/90 font-medium -mt-0.5">
                Royal Awadhi Cuisine
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#E0D7C4] hover:text-[#C8A049] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A049] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions & Book a Table Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Ambient Sound Button */}
            <button
              onClick={toggleAudio}
              title={audioActive ? "Mute Royal Sitar Ambience" : "Play Royal Sitar Ambience"}
              aria-label="Toggle Royal Ambience Audio"
              className={`p-2 rounded-full border transition-all ${
                audioActive
                  ? 'border-[#C8A049] text-[#C8A049] bg-[#C8A049]/15 shadow-sm shadow-[#C8A049]/20'
                  : 'border-[#1b4d3e] text-[#b3a893] hover:text-[#C8A049] hover:border-[#C8A049]/50'
              }`}
            >
              {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Prominent Gold Book a Table CTA */}
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#a36b3b] text-[#071813] shadow-lg shadow-[#071813]/50 hover:shadow-[#C8A049]/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 hidden sm:inline" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#C8A049] border border-[#C8A049]/30 hover:bg-[#C8A049]/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071813]/98 backdrop-blur-lg border-b border-[#C8A049]/30 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif-title tracking-wider text-[#F3EAD6] hover:text-[#C8A049] py-2 border-b border-[#1b4d3e]/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#a36b3b] text-[#071813]"
              >
                Reserve a Royal Table
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
