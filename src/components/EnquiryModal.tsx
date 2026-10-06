import React, { useState } from 'react';
import { EnquiryFormData, Vehicle } from '../types';
import { X, CheckCircle, Send, Phone, MapPin, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  selectedVehicle?: Vehicle | null;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  selectedVehicle,
  onClose
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredCarId: selectedVehicle?.id || '',
    enquiryType: 'General Enquiry',
    message: selectedVehicle ? `I would like to request more details and availability for the ${selectedVehicle.name}.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in your name, email address, and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredCarId: '',
      enquiryType: 'General Enquiry',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#120921] border border-[#d4af37]/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-400 flex items-center justify-center text-amber-300">
              <CheckCircle className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-metallic">
              Enquiry Received
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-amber-300 font-semibold">{formData.fullName}</span>. Our senior automotive specialist will contact you shortly at <span className="text-amber-300">{formData.phone}</span> regarding your enquiry.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg cursor-pointer"
              >
                Return to Showroom
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300/80 font-mono font-medium">
                Meritus Automobiles · VIP Concierge
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">
                {selectedVehicle ? `Enquire about ${selectedVehicle.name}` : 'Send an Enquiry'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Speak directly with our Singapore luxury vehicle consultants.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Tan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Phone Number (SG) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+65 8288 7000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@example.sg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Enquiry Category</label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0f2e] border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Test Drive">Book Test Drive</option>
                  <option value="Trade-In Valuation">Trade-In Vehicle Valuation</option>
                  <option value="Finance & COE">Singapore COE & Financing Options</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us your preferences, preferred viewing date, or trade-in car..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <a
                  href="tel:+6582887000"
                  className="text-slate-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  +65 8288 7000
                </a>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
