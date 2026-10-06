import React from 'react';
import { PageRoute } from '../types';
import { HERO_SHOWROOM_IMAGE } from '../data/vehicles';
import { SafeImage } from '../components/SafeImage';
import { ShieldCheck, Crown, Award, Users, CheckCircle2, ArrowRight, Sparkles, MapPin, Building2 } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenEnquiry: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pb-20 space-y-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#180d2e] via-[#0f071f] to-[#0a0512] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
            Singapore Automobile Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-white">
            About Meritus Automobiles
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Founded with a vision of uncompromising prestige, Meritus Automobiles is Singapore's premier boutique showroom for bespoke luxury and high-performance motor cars.
          </p>
        </div>
      </section>

      {/* Company Story & Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              Our Journey in Singapore
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Crafting Exceptional Automotive Experiences Since 2011
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Located in Jurong West, Singapore, <strong className="text-amber-200 font-semibold">Meritus Automobiles</strong> was established to bridge discerning clients with the world’s most coveted motor cars. We specialize in rare exotic supercars, ultra-luxurious executive sedans, and bespoke European grand tourers.
              </p>
              <p>
                In a complex market governed by Singapore Certificate of Entitlement (COE) regulations and LTA standards, Meritus provides absolute transparency, expert guidance, and white-glove personal concierge support from initial viewing to registration.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-amber-500/20 text-xs">
              <div>
                <span className="font-serif text-2xl font-bold text-gold-metallic block">15+ Years</span>
                <span className="text-slate-400">Singapore Market Reputation</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-gold-metallic block">100% Certified</span>
                <span className="text-slate-400">LTA & COE Compliance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden glass-card p-2 border-amber-500/30">
            <SafeImage
              src={HERO_SHOWROOM_IMAGE}
              alt="Meritus Automobiles Showroom Interior"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/30 text-xs">
              <span className="text-amber-300 font-semibold block">Jurong West Flagship Showroom</span>
              <span className="text-slate-300">Jurong West Street 41, #04-268 BLK 479, Singapore 640479</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="bg-gradient-to-b from-[#130a21] to-[#0a0512] py-16 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              Guiding Philosophy
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Mission & Core Values
            </h2>
            <p className="text-xs text-slate-300">
              The principles that define every interaction at Meritus Automobiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden border border-amber-500/25 group hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-40 bg-black overflow-hidden">
                <SafeImage
                  src={HERO_SHOWROOM_IMAGE}
                  alt="Unmatched Prestige"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-purple-950/80 border border-amber-500/30 text-amber-300">
                  <Crown className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Unmatched Prestige</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    We curate only prime condition vehicles with verified provenance, low mileage, and impeccable maintenance histories.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-amber-500/25 group hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-40 bg-black overflow-hidden">
                <SafeImage
                  src={HERO_SHOWROOM_IMAGE}
                  alt="Absolute Integrity"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-purple-950/80 border border-amber-500/30 text-amber-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Absolute Integrity</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    Clear pricing with complete COE breakdown, transparent vehicle inspection reports, and zero hidden administration fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-amber-500/25 group hover:border-amber-400/50 transition-all flex flex-col">
              <div className="relative h-40 bg-black overflow-hidden">
                <SafeImage
                  src={HERO_SHOWROOM_IMAGE}
                  alt="Client Partnership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-purple-950/80 border border-amber-500/30 text-amber-300">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Client Partnership</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    Our relationship extends beyond delivery, providing lifelong maintenance support, warranty protection, and trade-in advocacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section (150-Point Inspection) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border-amber-500/30 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              Rigorous Quality Protocol
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              150-Point Technical Certification
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every vehicle in our inventory undergoes a multi-stage technical inspection by certified master technicians before entering the showroom floor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-purple-950/40 border border-amber-500/20 space-y-2">
              <span className="font-bold text-amber-300 block">1. Powertrain Diagnostic</span>
              <p className="text-slate-400">Complete computer diagnostic scan, engine compression test, gearbox calibration.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-amber-500/20 space-y-2">
              <span className="font-bold text-amber-300 block">2. Structural Integrity</span>
              <p className="text-slate-400">Chassis alignment verification, paint thickness gauge check, accident-free guarantee.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-amber-500/20 space-y-2">
              <span className="font-bold text-amber-300 block">3. Brake & Suspension</span>
              <p className="text-slate-400">Brake pad & carbon ceramic disk checks, active damper testing, tire tread depth scan.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-amber-500/20 space-y-2">
              <span className="font-bold text-amber-300 block">4. Interior Detail</span>
              <p className="text-slate-400">Leather hydration treatment, climate control sterilization, electronic module checks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="glass-card p-10 rounded-3xl border-amber-500/30 space-y-4">
          <h2 className="font-serif text-3xl font-bold text-white">
            Experience the Meritus Standard Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Book a private tour of our Jurong West showroom or explore our full collection online.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('our-cars');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover cursor-pointer"
            >
              Explore Our Collection
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 border border-amber-500/40 hover:bg-purple-950/50 cursor-pointer"
            >
              Request Private Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
