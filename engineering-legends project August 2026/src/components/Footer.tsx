import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Settings, ArrowUp, Send, CheckCircle2, Shield, Globe, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [transmitted, setTransmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setTransmitted(true);
    setTimeout(() => {
      setEmail('');
      setTransmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4F1EA] border-t border-[#E5E0D5] text-[#0F172A] overflow-hidden pt-16 pb-12">
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#E5E0D5]">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white border border-[#9E774F]/50 flex items-center justify-center text-[#9E774F]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold text-[#0F172A] uppercase tracking-wider">
                Engineering Legends
              </span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed font-sans">
              A museum-grade digital exhibition honoring history's most revolutionary engineers, their physical blueprints, and structural impact on civilization.
            </p>
            <div className="pt-2 text-xs font-mono text-[#9E774F] font-semibold">
              PLATE ID ARCHIVE: MMXXVI EDITION
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#9E774F] font-semibold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" /> Exhibition Halls
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#475569]">
              <li>
                <Link to="/archive" className="hover:text-[#9E774F] transition-colors flex items-center gap-2">
                  <span className="text-[#9E774F]">›</span> Digital Biographies
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="hover:text-[#9E774F] transition-colors flex items-center gap-2">
                  <span className="text-[#9E774F]">›</span> Engineering Disciplines
                </Link>
              </li>
              <li>
                <Link to="/organizations" className="hover:text-[#9E774F] transition-colors flex items-center gap-2">
                  <span className="text-[#9E774F]">›</span> Global Network
                </Link>
              </li>
              <li>
                <Link to="/voices" className="hover:text-[#9E774F] transition-colors flex items-center gap-2">
                  <span className="text-[#9E774F]">›</span> Sentiment Repository
                </Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="hover:text-[#9E774F] transition-colors flex items-center gap-2">
                  <span className="text-[#9E774F]">›</span> Institutional Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Organizations */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#9E774F] font-semibold flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" /> Institutional Affiliations
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#64748B]">
              <li className="flex justify-between items-center border-b border-[#E5E0D5] pb-1">
                <span>WFEO Global Federation</span>
                <span className="text-[10px] text-[#9E774F] font-semibold">PARIS</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#E5E0D5] pb-1">
                <span>UNESCO Sustainable Eng.</span>
                <span className="text-[10px] text-[#9E774F] font-semibold">GLOBAL</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#E5E0D5] pb-1">
                <span>IEEE & ASME Standards</span>
                <span className="text-[10px] text-[#9E774F] font-semibold">USA</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#E5E0D5] pb-1">
                <span>IEI Institution of Engineers</span>
                <span className="text-[10px] text-[#9E774F] font-semibold">INDIA</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Transmit */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-[#9E774F] font-semibold flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> Research Updates
            </h4>
            <p className="text-xs text-[#64748B] font-sans">
              Transmit your email to receive monthly architectural blueprint breakdowns and research papers.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENGINEER@INSTITUTE.ORG"
                  className="w-full bg-white border border-[#E5E0D5] rounded-lg px-3 py-2 text-xs font-mono text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#9E774F]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-mono font-bold text-xs uppercase tracking-widest py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                {transmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#9E774F]" />
                    TRANSMITTED
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#9E774F] group-hover:translate-x-1 transition-transform" />
                    TRANSMIT ARCHIVE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            © MMXXVI Engineering Legends Archive Initiative <span className="text-[#9E774F] mx-2">◆</span> All Rights Reserved
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B]">
              ARCHIVAL ACCURACY: 100% VERIFIED
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-2.5 rounded-full bg-white border border-[#E5E0D5] text-[#0F172A] hover:border-[#9E774F] hover:text-[#9E774F] transition-all shadow-xs flex items-center justify-center"
              aria-label="Back to Top"
            >
              <Settings className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700 text-[#9E774F]" />
              <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
