import React from 'react';
import { PageRoute } from '../types';
import { Crown, Phone, MapPin, Mail, Instagram, Facebook, Linkedin, Youtube, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08040d] border-t border-[#d4af37]/25 text-slate-300 relative overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-500/15">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient p-0.5">
                <div className="w-full h-full bg-[#130a21] rounded-[6px] flex items-center justify-center">
                  <Crown className="w-4 h-4 text-amber-300" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold text-gold-metallic">
                Meritus Automobiles
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Singapore’s premier destination for luxury supercars, executive sedans, and bespoke automobile acquisitions. Built on trust, quality, and white-glove automotive excellence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-purple-950/60 border border-amber-500/20 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-950/60 border border-amber-500/20 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-950/60 border border-amber-500/20 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-950/60 border border-amber-500/20 flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-300 uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('our-cars')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Our Cars & Inventory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about-us')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  About Meritus Automobiles
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact-us')} className="hover:text-amber-200 transition-colors cursor-pointer">
                  Contact Us & Location
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiry()} className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-medium">
                  Book Test Drive / Private Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Showroom & Showroom Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-300 uppercase">
              Showroom Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between py-1 border-b border-amber-500/10">
                <span>Monday – Saturday</span>
                <span className="text-amber-200 font-medium">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-amber-500/10">
                <span>Sunday & Public Holidays</span>
                <span className="text-amber-200 font-medium">10:00 AM – 6:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Private VIP evening consultations available by appointment.
              </p>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-amber-300 uppercase">
              Contact & Showroom
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Jurong West Street 41, #04-268 BLK 479,<br />
                  Singapore 640479
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+6582887000" className="text-slate-200 hover:text-amber-300 font-semibold transition-colors">
                  +65 8288 7000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:enquiry@meritusautomobiles.sg" className="hover:text-amber-300 transition-colors">
                  enquiry@meritusautomobiles.sg
                </a>
              </li>
              <li className="pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  100% Certified LTA & COE Compliance
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Meritus Automobiles. All Rights Reserved. Singapore Automobile Dealer.</p>
          <div className="flex gap-6 text-[11px]">
            <a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-200 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-200 transition-colors">COE Advisory</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
