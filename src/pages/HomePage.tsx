import React from 'react';
import { PageRoute, Vehicle } from '../types';
import { HERO_SHOWROOM_IMAGE, VEHICLES, WHY_CHOOSE_US, SHOWROOM_STATS } from '../data/vehicles';
import { SafeImage } from '../components/SafeImage';
import { Phone, MapPin, ArrowRight, ShieldCheck, Award, Sparkles, Gauge, Car, CheckCircle2, ChevronRight, Calendar, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenEnquiry: (carName?: string) => void;
  onBookTestDrive: (vehicle?: Vehicle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectVehicle,
  onOpenEnquiry,
  onBookTestDrive
}) => {
  // Primary featured cars for Section 2
  const collectionVehicles = VEHICLES.slice(0, 3);
  // Spotlight featured car for Section 4
  const featuredSpotlight = VEHICLES.find((v) => v.id === 'porsche-911-gt3-rs') || VEHICLES[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* =========================================================================
          SECTION 1 — LUXURY HERO
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-amber-500/20">
        {/* Background Image with Dark Purple Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={HERO_SHOWROOM_IMAGE}
            alt="Meritus Automobiles Singapore Luxury Showroom"
            className="w-full h-full object-cover scale-105 transform animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-[#0a0512]/75 to-purple-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/80 pointer-events-none" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-amber-500/30 text-xs font-semibold text-amber-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Singapore’s Premier Automobile Showroom · Jurong West</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto text-wrap-balance">
            Drive Excellence.<br />
            <span className="text-gold-metallic">Experience Luxury.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to <strong className="text-amber-200 font-semibold">Meritus Automobiles</strong>, Singapore's trusted destination for luxury supercars, executive sedans, and bespoke motoring elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                onNavigate('our-cars');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-xl shadow-amber-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
            >
              Explore Our Cars
              <ArrowRight className="w-4 h-4 text-[#0d0718] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onNavigate('contact-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-100 bg-purple-950/60 hover:bg-purple-900/60 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Contact Us
            </button>
          </div>

          {/* Phone call pill */}
          <div className="pt-6 inline-flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="text-slate-400">Direct VIP Line:</span>
            <a
              href="tel:+6582887000"
              className="text-amber-300 font-bold hover:text-amber-100 flex items-center gap-1.5 transition-colors underline decoration-amber-500/40 underline-offset-4"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              +65 8288 7000
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PREMIUM AUTOMOTIVE COLLECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-500/20 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              Curated Showroom Vehicles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Premium Automotive Collection
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('our-cars');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
          >
            View Full Inventory ({VEHICLES.length} Cars)
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collectionVehicles.map((car) => (
            <div
              key={car.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] bg-black overflow-hidden">
                <SafeImage
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110920] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-purple-950/80 border border-amber-500/40 text-amber-300 backdrop-blur-sm">
                    {car.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="font-serif text-lg font-bold text-gold-metallic drop-shadow-md">
                    S${car.priceSgd.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                    {car.shortDescription}
                  </p>
                </div>

                {/* Key specs row */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-300 border-t border-amber-500/15">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>0-100: {car.specs.acceleration}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectVehicle(car)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — WHY CHOOSE MERITUS AUTOMOBILES
          ========================================================================= */}
      <section className="bg-gradient-to-b from-purple-950/20 via-[#0d0718] to-[#0a0512] py-20 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              The Meritus Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Why Choose Meritus Automobiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We redefine luxury automobile ownership in Singapore through integrity, white-glove service, and meticulous technical certification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item) => {
              const renderCardIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Car':
                    return <Car className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                  case 'ShieldCheck':
                    return <ShieldCheck className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                  case 'Users':
                    return <Users className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                  case 'CheckCircle2':
                    return <CheckCircle2 className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                  case 'Award':
                    return <Award className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                  case 'Sparkles':
                  default:
                    return <Sparkles className="w-5 h-5 text-amber-300 group-hover:text-[#0d0718]" />;
                }
              };

              return (
                <div
                  key={item.id}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group border border-amber-500/25 hover:border-amber-400/50 transition-all duration-300 shadow-xl"
                >
                  {/* Card Header Image */}
                  <div className="relative h-48 bg-black overflow-hidden">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-[#0d0718]/30 to-transparent" />

                    {/* Top Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/85 border border-amber-500/40 text-amber-300 backdrop-blur-md">
                          {item.badge}
                        </span>
                      </div>
                    )}

                    {/* Feature Icon Badge */}
                    <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-purple-950/90 border border-amber-400/50 shadow-xl text-amber-300 flex items-center justify-center">
                      {renderCardIcon(item.icon)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2 font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px] text-amber-400 font-mono font-medium">
                      <span>Meritus Standard</span>
                      <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — FEATURED VEHICLES SHOWCASE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
            Flagship Spotlight
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Featured Vehicle Showcase
          </h2>
        </div>

        {/* Large Featured Card */}
        <div className="glass-card border-amber-500/40 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-black">
            <SafeImage
              src={featuredSpotlight.image}
              alt={featuredSpotlight.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-[#0d0718]">
                Featured Showroom Vehicle
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#120921] to-[#0a0512]">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-amber-300 font-mono">
                <span>{featuredSpotlight.year} · {featuredSpotlight.condition}</span>
                <span>COE Included</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {featuredSpotlight.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredSpotlight.fullDescription}
              </p>

              {/* Specs pill grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                <div className="p-3 rounded-xl bg-purple-950/50 border border-amber-500/20">
                  <span className="text-slate-400 block text-[10px]">Engine</span>
                  <span className="font-semibold text-white">{featuredSpotlight.specs.engine}</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/50 border border-amber-500/20">
                  <span className="text-slate-400 block text-[10px]">Max Power</span>
                  <span className="font-semibold text-amber-300">{featuredSpotlight.specs.power}</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/50 border border-amber-500/20">
                  <span className="text-slate-400 block text-[10px]">0 - 100 km/h</span>
                  <span className="font-semibold text-amber-300">{featuredSpotlight.specs.acceleration}</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/50 border border-amber-500/20">
                  <span className="text-slate-400 block text-[10px]">Transmission</span>
                  <span className="font-semibold text-white">{featuredSpotlight.specs.transmission}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">Showroom Price (SGD)</span>
                <span className="font-serif text-2xl font-bold text-gold-metallic">
                  S${featuredSpotlight.priceSgd.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onBookTestDrive(featuredSpotlight)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 transition-colors cursor-pointer"
                >
                  Book Test Drive
                </button>
                <button
                  onClick={() => onSelectVehicle(featuredSpotlight)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — LUXURY CUSTOMER EXPERIENCE + STATS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              White-Glove Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Bespoke Luxury Customer Experience
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              At Meritus Automobiles, purchasing a motor car is an intimate journey of passion and precision. From our private VIP consultation suites in Jurong West to personalized road testing and COE management, every detail is handled with absolute confidentiality and care.
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-3.5 bg-purple-950/40 p-2.5 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-black">
                  <SafeImage
                    src={HERO_SHOWROOM_IMAGE}
                    alt="Singapore COE Bidding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">Tailored Singapore COE Bidding & Financial Consultation</span>
              </li>
              <li className="flex items-center gap-3.5 bg-purple-950/40 p-2.5 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-black">
                  <SafeImage
                    src={HERO_SHOWROOM_IMAGE}
                    alt="150-Point Inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">150-Point Technical Certification & Warranty Assurance</span>
              </li>
              <li className="flex items-center gap-3.5 bg-purple-950/40 p-2.5 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400/50 bg-black">
                  <SafeImage
                    src={HERO_SHOWROOM_IMAGE}
                    alt="Doorstep VIP Test Drives"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">Doorstep VIP Test Drives & Private Delivery Ceremonies</span>
              </li>
            </ul>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {SHOWROOM_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl text-center space-y-2 border-amber-500/20 hover:border-amber-400/40 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-metallic">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA + CONTACT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center bg-gradient-to-br from-[#1a0c30] via-[#120723] to-[#0a0512] border border-amber-500/40 shadow-2xl space-y-8">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
              Start Your Automotive Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
              Your Next Drive Starts Here.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Visit our modern Singapore showroom in Jurong West or contact our senior team to arrange a private consultation or test drive.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
            <a
              href="tel:+6582887000"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call +65 8288 7000
            </a>

            <button
              onClick={() => {
                onNavigate('contact-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 bg-purple-950/60 border border-amber-500/40 hover:border-amber-300 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              Visit Our Showroom
            </button>
          </div>

          <div className="relative z-10 pt-4 text-xs text-slate-400">
            Showroom Address: <strong className="text-amber-200">Jurong West Street 41, #04-268 BLK 479, Singapore 640479</strong>
          </div>
        </div>
      </section>
    </div>
  );
};
