import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { VEHICLES } from '../data/vehicles';
import { X, Sparkles, Send, Bot, User, Car, ShieldCheck } from 'lucide-react';
import { Vehicle } from '../types';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  suggestedCarId?: string;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({
  isOpen,
  onClose,
  onSelectVehicle
}) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Welcome to Meritus Automobiles VIP AI Assistant. I can recommend the ideal luxury vehicle based on your preferences, explain Singapore COE Category trends, or assist with financing calculations. How may I assist your drive today?"
    }
  ]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '');
      
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const carListContext = VEHICLES.map(v => `${v.name} (${v.category}, S$${v.priceSgd.toLocaleString()}, ${v.specs.engine}, ${v.specs.power})`).join('\n');
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are the AI Luxury Car Concierge for Meritus Automobiles, Singapore's premier luxury showroom located at Jurong West Street 41, #04-268 BLK 479, Singapore 640479 (Phone: +65 8288 7000).
Available Showroom Cars:
${carListContext}

User Query: "${userMsg}"

Provide a sophisticated, polite, high-end recommendation (150 words max). If one of our cars matches best, mention it clearly by exact name.`
        });

        const reply = response.text || "Thank you for your enquiry. At Meritus Automobiles, we recommend exploring our Rolls-Royce Ghost or Porsche 911 GT3 RS for unparalleled performance in Singapore.";
        
        // Find if a car matches
        const matchedCar = VEHICLES.find(v => reply.toLowerCase().includes(v.brand.toLowerCase()) || reply.toLowerCase().includes(v.model.toLowerCase()));

        setMessages((prev) => [...prev, { sender: 'ai', text: reply, suggestedCarId: matchedCar?.id }]);
      } else {
        // High quality rule-based fallback if API key is not supplied
        await new Promise(res => setTimeout(res, 800));
        let fallbackReply = "At Meritus Automobiles, we curate cars tailored to Singapore driving perfection. ";
        let matchCarId: string | undefined = undefined;

        if (userMsg.toLowerCase().includes('track') || userMsg.toLowerCase().includes('sports') || userMsg.toLowerCase().includes('porsche') || userMsg.toLowerCase().includes('fast')) {
          fallbackReply += "For pure track-bred excitement and precision active aerodynamics, the Porsche 911 GT3 RS (992) or Ferrari 296 GTB are ideal choices.";
          matchCarId = 'porsche-911-gt3-rs';
        } else if (userMsg.toLowerCase().includes('comfort') || userMsg.toLowerCase().includes('v12') || userMsg.toLowerCase().includes('executive') || userMsg.toLowerCase().includes('rolls')) {
          fallbackReply += "For ultimate executive presence, whisper-quiet V12 power, and bespoke luxury, the Rolls-Royce Ghost Series II and Mercedes-Maybach S 680 are unrivaled.";
          matchCarId = 'rolls-royce-ghost-series-ii';
        } else if (userMsg.toLowerCase().includes('coe') || userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('finance')) {
          fallbackReply += "All Meritus Automobiles pricing includes Singapore Category B COE estimates with complete 150-point technical certification and transparent financing options.";
        } else {
          fallbackReply += "Based on your interest, I invite you to explore our flagship Rolls-Royce Ghost Series II or Porsche 911 GT3 RS currently available in our Jurong West showroom.";
          matchCarId = 'porsche-911-gt3-rs';
        }

        setMessages((prev) => [...prev, { sender: 'ai', text: fallbackReply, suggestedCarId: matchCarId }]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "Our luxury automotive specialist is available to answer your query directly at +65 8288 7000 or visit us at Jurong West Street 41, Singapore 640479."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl h-[580px] bg-[#120921] border border-[#d4af37]/40 rounded-2xl shadow-2xl flex flex-col text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0c0617] border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold-gradient p-0.5">
              <div className="w-full h-full bg-[#130a21] rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-gold-metallic">
                Meritus AI Luxury Concierge
              </h3>
              <span className="text-[10px] text-amber-200/70 font-mono">Powered by Gemini AI · Singapore</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-amber-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-amber-500/20 text-slate-100 border border-amber-500/30 rounded-br-none'
                  : 'bg-purple-950/50 text-slate-200 border border-amber-500/15 rounded-bl-none'
              }`}>
                <p>{m.text}</p>

                {m.suggestedCarId && (
                  <div className="mt-3 pt-2 border-t border-amber-500/20">
                    <button
                      onClick={() => {
                        const car = VEHICLES.find(v => v.id === m.suggestedCarId);
                        if (car) {
                          onClose();
                          onSelectVehicle(car);
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-gold-gradient text-[#0d0718] font-bold text-[11px] flex items-center gap-1.5 cursor-pointer hover:brightness-110"
                    >
                      <Car className="w-3.5 h-3.5" />
                      View Vehicle Details
                    </button>
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <Bot className="w-4 h-4" />
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-purple-950/40 border border-amber-500/15 text-slate-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                Consulting Meritus automotive database...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-[#0c0617] border-t border-amber-500/20 flex gap-2">
          <input
            type="text"
            placeholder="Ask about supercars, COE rates, or vehicle specs..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-purple-950/40 border border-amber-500/20 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-4 py-2.5 rounded-xl bg-gold-gradient text-[#0d0718] font-bold text-xs cursor-pointer hover:bg-gold-gradient-hover disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
