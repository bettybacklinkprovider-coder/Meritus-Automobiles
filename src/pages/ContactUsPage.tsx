import React, { useState } from 'react';
import { PageRoute } from '../types';
import { VEHICLES } from '../data/vehicles';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, Sparkles, Navigation, ShieldCheck } from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredCar, setPreferredCar] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide your name, phone number, and email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pb-20 space-y-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#180d2e] via-[#0f071f] to-[#0a0512] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-300/90 font-mono font-medium">
            VIP Automotive Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Contact Meritus Automobiles
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Our luxury automobile specialists are at your disposal for showroom appointments, test drives, and Singapore COE consultations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Showroom Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/30 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-white">
                Showroom Location
              </h2>

              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Address</span>
                    <strong className="text-white text-sm font-medium leading-snug block mt-0.5">
                      Jurong West Street 41, #04-268 BLK 479,<br />
                      Singapore 640479
                    </strong>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone Line</span>
                    <a href="tel:+6582887000" className="text-amber-300 hover:underline text-sm font-bold block mt-0.5">
                      +65 8288 7000
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Email Inquiry</span>
                    <a href="mailto:enquiry@meritusautomobiles.sg" className="text-slate-200 hover:text-amber-300 text-xs font-medium block mt-0.5">
                      enquiry@meritusautomobiles.sg
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Opening Hours Card */}
            <div className="glass-card p-6 rounded-2xl border-amber-500/30 space-y-3">
              <h3 className="font-serif text-lg font-bold text-amber-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                Showroom Operating Hours
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-amber-500/15">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-amber-200">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-amber-500/15">
                  <span>Sunday & Public Holidays</span>
                  <span className="font-semibold text-amber-200">10:00 AM – 6:00 PM</span>
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  Private VIP viewing appointments available after operational hours upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-2xl border-amber-500/40 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300/80 font-mono font-medium">
                  Direct Messaging
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  Send Us an Enquiry
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below and our team will get back to you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-400 flex items-center justify-center text-amber-300">
                    <CheckCircle className="w-10 h-10 text-amber-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gold-metallic">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-amber-300 font-semibold">{fullName}</span>. Our representative will contact you shortly at <span className="text-amber-300">{phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Lim"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="david@example.sg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Phone Number (SG) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+65 8288 7000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Vehicle Interest</label>
                    <select
                      value={preferredCar}
                      onChange={(e) => setPreferredCar(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a0f2e] border border-amber-500/20 text-slate-100 focus:outline-none focus:border-amber-400 text-xs"
                    >
                      <option value="General Enquiry">General Showroom Enquiry</option>
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} (S${v.priceSgd.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know how we can assist you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-amber-500/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Singapore Map View */}
        <div className="mt-12 glass-card p-6 rounded-3xl border-amber-500/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Navigation className="w-5 h-5 text-amber-400" />
                Singapore Showroom Map & Directions
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Jurong West Street 41, #04-268 BLK 479, Singapore 640479
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Jurong+West+Street+41+Singapore+640479"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0d0718] bg-gold-gradient hover:bg-gold-gradient-hover cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Styled Map Graphic Container */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#0e071c] border border-amber-500/20 flex items-center justify-center">
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 text-center space-y-3 p-6 max-w-md bg-purple-950/80 backdrop-blur-md rounded-2xl border border-amber-500/40">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto animate-bounce" />
              <h4 className="font-serif text-lg font-bold text-amber-300">Meritus Automobiles Showroom</h4>
              <p className="text-xs text-slate-300">
                Jurong West Street 41, #04-268 BLK 479, Singapore 640479
              </p>
              <div className="text-[11px] text-amber-200/80 font-mono">
                5 mins from Lakeside MRT Station / PIE Exit 31
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
