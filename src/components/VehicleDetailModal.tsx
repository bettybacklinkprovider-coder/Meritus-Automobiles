import React, { useState } from 'react';
import { Vehicle } from '../types';
import { SafeImage } from './SafeImage';
import { X, Check, Phone, Calendar, ShieldCheck, Gauge, Zap, Sparkles, ChevronRight } from 'lucide-react';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookTestDrive: (vehicle: Vehicle) => void;
  onEnquire: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onBookTestDrive,
  onEnquire
}) => {
  if (!vehicle) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  // COE Category description
  const coeLabel = vehicle.specs.coeCategory === 'Cat B' ? 'Category B (Cars > 1,600cc or > 130bhp)' : 'Category A';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#110920] border border-[#d4af37]/40 rounded-2xl shadow-2xl shadow-purple-950/80 overflow-hidden text-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-black/90 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery & Main Preview */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          <SafeImage
            src={images[activeImageIndex]}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110920] via-transparent to-black/30" />

          {/* Status badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              vehicle.status === 'In Showroom' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}>
              {vehicle.status}
            </span>
          </div>

          {/* Vehicle title overlay */}
          <div className="absolute bottom-4 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300/80 font-mono">
                {vehicle.year} · {vehicle.condition} · {vehicle.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {vehicle.name}
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-amber-300/70 block">Estimated Price (incl. COE)</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-metallic">
                S${vehicle.priceSgd.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail gallery selector */}
        {images.length > 1 && (
          <div className="flex gap-2 p-3 bg-[#0c0617] border-b border-amber-500/15 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                  activeImageIndex === idx ? 'border-amber-400 scale-105' : 'border-amber-500/20 opacity-60 hover:opacity-100'
                }`}
              >
                <SafeImage src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Vehicle Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {vehicle.fullDescription}
            </p>
          </div>

          {/* Detailed Specs Grid */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-amber-300 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-amber-400" />
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Engine</span>
                <span className="font-medium text-white text-sm">{vehicle.specs.engine}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Max Power</span>
                <span className="font-medium text-amber-300 text-sm">{vehicle.specs.power}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">0-100 km/h</span>
                <span className="font-medium text-amber-300 text-sm">{vehicle.specs.acceleration}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Top Speed</span>
                <span className="font-medium text-white text-sm">{vehicle.specs.topSpeed}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Transmission</span>
                <span className="font-medium text-white">{vehicle.specs.transmission}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Drivetrain</span>
                <span className="font-medium text-white">{vehicle.specs.drivetrain}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Exterior Finish</span>
                <span className="font-medium text-white">{vehicle.exteriorColor}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-amber-500/15">
                <span className="text-slate-400 block mb-1">Interior Leather</span>
                <span className="font-medium text-white">{vehicle.interiorColor}</span>
              </div>
            </div>
          </div>

          {/* COE & Guarantee */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-purple-950/50 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm text-amber-200">
                  Singapore COE & Quality Certified
                </h4>
                <p className="text-xs text-slate-300">
                  Includes {coeLabel}. 150-point technical inspection completed by Meritus master technicians.
                </p>
              </div>
            </div>
            <div className="text-xs text-amber-300 font-mono font-medium whitespace-nowrap">
              Ref ID: {vehicle.id.toUpperCase().slice(0, 10)}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#0a0512] border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Questions? Call showroom at <a href="tel:+6582887000" className="text-amber-300 font-bold hover:underline">+65 8288 7000</a></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookTestDrive(vehicle);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Test Drive
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(vehicle);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Enquire Now
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
