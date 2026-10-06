import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Phone, Menu, X, Crown, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenEnquiry: (carName?: string) => void;
  onOpenAiConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
  onOpenAiConcierge
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'our-cars', label: 'Our Cars' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0a0512]/90 border-b border-[#d4af37]/20 transition-all duration-200">
      {/* Top micro bar for quick phone & address */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-xs border-b border-[#d4af37]/10 bg-[#0d0718]/80 text-slate-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-amber-200/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Singapore Showroom Open Today
          </span>
          <span>Jurong West Street 41, #04-268 BLK 479, Singapore 640479</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={onOpenAiConcierge}
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Luxury Concierge</span>
          </button>
          <a
            href="tel:+6582887000"
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-100 transition-colors font-medium tracking-wide"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            +65 8288 7000
          </a>
        </div>
      </div>

      {/* Main 3-Zone Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#aa7c11] to-[#593d03] p-0.5 shadow-lg shadow-amber-500/10">
            <div className="w-full h-full bg-[#130a21] rounded-[7px] flex items-center justify-center group-hover:bg-[#1a0e2e] transition-colors">
              <Crown className="w-5 h-5 text-amber-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gold-metallic">
              Meritus
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-200/60 uppercase -mt-1 font-sans font-semibold">
              Automobiles
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-slate-300 hover:text-amber-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+6582887000"
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-300 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            +65 8288 7000
          </a>
          <button
            onClick={() => onOpenEnquiry()}
            className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap transform active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenEnquiry()}
            className="px-3 py-1.5 rounded-md text-xs font-bold text-[#0d0718] bg-gold-gradient cursor-pointer"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-amber-300 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d4af37]/20 bg-[#120921] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-amber-500/15 text-amber-300 font-semibold border-l-2 border-amber-400'
                    : 'text-slate-200 hover:bg-purple-900/30 hover:text-amber-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-amber-500/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConcierge();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-amber-300 border border-amber-500/30 bg-purple-950/40"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              AI Luxury Vehicle Assistant
            </button>
            <a
              href="tel:+6582887000"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-slate-200 bg-purple-950/60 border border-amber-500/20"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call +65 8288 7000
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
