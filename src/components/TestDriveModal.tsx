import React, { useState } from 'react';
import { Vehicle } from '../types';
import { VEHICLES } from '../data/vehicles';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, Car } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  selectedVehicle?: Vehicle | null;
  onClose: () => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({
  isOpen,
  selectedVehicle,
  onClose
}) => {
  if (!isOpen) return null;

  const [vehicleId, setVehicleId] = useState<string>(selectedVehicle?.id || VEHICLES[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [submitted, setSubmitted] = useState(false);

  const activeCar = VEHICLES.find((v) => v.id === vehicleId) || selectedVehicle || VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !date) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#120921] border border-[#d4af37]/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-400 flex items-center justify-center text-amber-300">
              <CheckCircle className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-metallic">
              Test Drive Scheduled!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your test drive for <span className="text-amber-300 font-semibold">{activeCar.name}</span> is confirmed for <span className="text-amber-300">{date}</span> at <span className="text-amber-300">{timeSlot}</span> at our Jurong West showroom.
            </p>
            <p className="text-xs text-slate-400">
              Our team will send a confirmation SMS to {phone}.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300/80 font-mono font-medium flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                VIP Test Drive Appointment
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">
                Schedule Your Drive
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Experience precision handling and luxury firsthand in Singapore.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Select Vehicle</label>
                <select
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0f2e] border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} (S${v.priceSgd.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Phone Number (SG) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+65 8288 7000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.sg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-purple-950/40 border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Time Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1a0f2e] border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-1">
                * Test drivers must hold a valid Singapore Class 3 driving license or recognized International Driving Permit.
              </p>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                Confirm Test Drive Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
