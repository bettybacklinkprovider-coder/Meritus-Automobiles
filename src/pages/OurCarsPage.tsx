import React, { useState, useMemo } from 'react';
import { PageRoute, Vehicle, CarCategory } from '../types';
import { VEHICLES } from '../data/vehicles';
import { SafeImage } from '../components/SafeImage';
import { Search, Filter, Gauge, Car, ShieldCheck, ChevronRight, Calculator, RefreshCw } from 'lucide-react';

interface OurCarsPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenEnquiry: (carName?: string) => void;
  onBookTestDrive: (vehicle?: Vehicle) => void;
}

export const OurCarsPage: React.FC<OurCarsPageProps> = ({
  onNavigate,
  onSelectVehicle,
  onOpenEnquiry,
  onBookTestDrive
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(3000000);
  const [activeTab, setActiveTab] = useState<'inventory' | 'calculator'>('inventory');

  // Singapore Finance Calculator state
  const [calcVehicleId, setCalcVehicleId] = useState<string>(VEHICLES[0].id);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(30); // 30% down payment standard in SG
  const [loanYears, setLoanYears] = useState<number>(7);
  const [interestRatePct, setInterestRatePct] = useState<number>(2.78);

  const selectedCalcVehicle = VEHICLES.find((v) => v.id === calcVehicleId) || VEHICLES[0];

  // Calculate monthly installment SGD
  const calculatedLoanAmount = useMemo(() => {
    const price = selectedCalcVehicle.priceSgd;
    const downPayment = (price * downPaymentPct) / 100;
    return price - downPayment;
  }, [selectedCalcVehicle, downPaymentPct]);

  const calculatedMonthlyPayment = useMemo(() => {
    const totalInterest = calculatedLoanAmount * (interestRatePct / 100) * loanYears;
    const totalPayable = calculatedLoanAmount + totalInterest;
    return Math.round(totalPayable / (loanYears * 12));
  }, [calculatedLoanAmount, interestRatePct, loanYears]);

  // Unique brands
  const brands = useMemo(() => {
    const unique = Array.from(new Set(VEHICLES.map((v) => v.brand)));
    return ['All', ...unique];
  }, []);

  // Categories
  const categories = ['All', 'Supercar', 'Executive Sedan', 'Grand Tourer', 'Luxury SUV', 'Electric & Hybrid'];

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.specs.engine.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
      const matchesPrice = car.priceSgd <= maxPrice;

      return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedBrand, selectedCategory, maxPrice]);

  return (
    <div className="pb-20 space-y-12">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#160b29] to-[#0a0512] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
            Meritus Automobiles Inventory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Our Luxury Collection
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Explore Singapore’s finest showroom selection of pristine exotic supercars, hand-finished sedans, and luxury grand tourers.
          </p>

          {/* Toggle between inventory & finance calculator */}
          <div className="pt-4 inline-flex p-1 rounded-xl bg-purple-950/60 border border-amber-500/30">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                activeTab === 'inventory'
                  ? 'bg-gold-gradient text-[#0d0718] shadow-md'
                  : 'text-slate-300 hover:text-amber-300'
              }`}
            >
              Showroom Inventory ({filteredVehicles.length})
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-gold-gradient text-[#0d0718] shadow-md'
                  : 'text-slate-300 hover:text-amber-300'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Singapore COE & Finance Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'inventory' ? (
          <div className="space-y-8">
            {/* Filter Bar */}
            <div className="glass-card p-6 rounded-2xl border-amber-500/25 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative md:col-span-2">
                  <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search brand, model, engine (e.g. Porsche, V12)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-purple-950/50 border border-amber-500/20 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Brand Selector */}
                <div>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#190d30] border border-amber-500/20 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    {brands.map((b) => (
                      <option key={b} value={b}>
                        Brand: {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Selector */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#190d30] border border-amber-500/20 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        Category: {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price slider row */}
              <div className="pt-2 border-t border-amber-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">Max Budget (SGD):</span>
                  <span className="font-serif font-bold text-amber-300">
                    S${maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={3000000}
                  step={100000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full sm:w-64 accent-amber-400"
                />
                {(searchTerm || selectedBrand !== 'All' || selectedCategory !== 'All' || maxPrice < 3000000) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedBrand('All');
                      setSelectedCategory('All');
                      setMaxPrice(3000000);
                    }}
                    className="text-amber-400 hover:text-amber-200 flex items-center gap-1 font-medium transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Inventory Grid */}
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-16 glass-card rounded-2xl space-y-4">
                <Car className="w-12 h-12 text-amber-400 mx-auto opacity-60" />
                <h3 className="font-serif text-xl font-bold text-white">No vehicles match your criteria</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try adjusting your search terms or contact our concierge team for custom import sourcing.
                </p>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover cursor-pointer"
                >
                  Request Custom Vehicle Sourcing
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map((car) => (
                  <div
                    key={car.id}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col group"
                  >
                    {/* Vehicle image */}
                    <div className="relative aspect-[16/10] bg-black overflow-hidden">
                      <SafeImage
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#110920] via-transparent to-transparent opacity-80" />

                      {/* Status */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          car.status === 'In Showroom'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {car.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <span className="font-serif text-lg font-bold text-gold-metallic drop-shadow-md">
                          S${car.priceSgd.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-amber-300/80 font-mono">
                          {car.year} · {car.condition} · {car.category}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-1">
                          {car.name}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                          {car.shortDescription}
                        </p>
                      </div>

                      {/* Technical Specs */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-2 border-t border-amber-500/15">
                        <div className="flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{car.specs.power}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>0-100: {car.specs.acceleration}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => onOpenEnquiry(car.name)}
                          className="flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 transition-colors cursor-pointer"
                        >
                          Enquire Now
                        </button>
                        <button
                          onClick={() => onSelectVehicle(car)}
                          className="flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-md transition-all cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* =========================================================================
             SINGAPORE COE & FINANCE CALCULATOR TAB
             ========================================================================= */
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-3xl border-amber-500/30 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300/80 font-mono font-medium">
                Singapore Financial Guidance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                COE & Monthly Installment Estimator
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Estimate monthly financing and down payment for your chosen Meritus vehicle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-5 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Select Vehicle</label>
                  <select
                    value={calcVehicleId}
                    onChange={(e) => setCalcVehicleId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#190d30] border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (S${v.priceSgd.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Down Payment Percentage:</span>
                    <span className="font-bold text-amber-300">{downPaymentPct}% (S${((selectedCalcVehicle.priceSgd * downPaymentPct) / 100).toLocaleString()})</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={70}
                    step={5}
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Loan Tenure (Years):</span>
                    <span className="font-bold text-amber-300">{loanYears} Years ({loanYears * 12} Months)</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={7}
                    step={1}
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Annual Interest Rate (%):</span>
                    <span className="font-bold text-amber-300">{interestRatePct}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min={1.88}
                    max={3.88}
                    step={0.1}
                    value={interestRatePct}
                    onChange={(e) => setInterestRatePct(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
              </div>

              {/* Calculation Output Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-[#1b0e33] to-[#0d0617] border border-amber-500/30 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-amber-300">
                    Estimated Breakdown
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-amber-500/15">
                      <span className="text-slate-400">Showroom Price:</span>
                      <span className="text-white font-medium">S${selectedCalcVehicle.priceSgd.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-amber-500/15">
                      <span className="text-slate-400">Down Payment ({downPaymentPct}%):</span>
                      <span className="text-white font-medium">S${((selectedCalcVehicle.priceSgd * downPaymentPct) / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-amber-500/15">
                      <span className="text-slate-400">Net Loan Amount:</span>
                      <span className="text-white font-medium">S${calculatedLoanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-amber-500/15">
                      <span className="text-slate-400">COE Included:</span>
                      <span className="text-amber-300 font-medium">{selectedCalcVehicle.specs.coeCategory}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center bg-purple-950/60 p-4 rounded-xl border border-amber-500/30">
                    <span className="text-[11px] text-slate-400 block uppercase tracking-wider">Estimated Monthly Payment</span>
                    <span className="font-serif text-3xl font-extrabold text-gold-metallic">
                      S${calculatedMonthlyPayment.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">/ month for {loanYears} years</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiry(selectedCalcVehicle.name)}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover cursor-pointer shadow-lg"
                >
                  Apply for Finance Approval
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
