import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { unSdgsData } from '../data';
import { ShieldCheck, Award, CheckCircle2, Sparkles, BookOpen, Lock, Feather } from 'lucide-react';

export default function CodeOfConduct() {
  const [signed, setSigned] = useState(false);
  const [signatoryName, setSignatoryName] = useState('');
  const [activeSdgId, setActiveSdgId] = useState<number | null>(null);

  const handleSignPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signatoryName) return;
    setSigned(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col font-sans selection:bg-[#b87333] selection:text-[#0a0e17]">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#0d1321] border-b border-[#b87333]/30 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px),
                              linear-gradient(to bottom, #b87333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#b87333]/50 text-[#b87333] font-mono text-xs tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>INSTITUTIONAL CHARTER: ESTABLISHED MMXXVI</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-slate-100 uppercase tracking-tight">
            Code of <span className="text-[#b87333]">Conduct</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-300 max-w-3xl">
            "The foundational ethical pledge uniting professional engineers worldwide under the 17 UN Sustainable Development Goals and structural integrity standards."
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 w-full">
        {/* Core Ethical Principles - Engraved Metal Plaque */}
        <section className="relative bg-gradient-to-br from-[#111827] via-[#0d1321] to-[#1e293b] border-2 border-[#b87333] rounded-2xl p-8 sm:p-12 space-y-8 shadow-[0_0_50px_rgba(184,115,51,0.2)]">
          {/* L Corner Brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#b87333]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#b87333]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#b87333]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b87333]" />

          <div className="text-center space-y-2 border-b border-[#b87333]/40 pb-6">
            <span className="font-mono text-xs text-[#b87333] tracking-widest uppercase">
              THE FIVE FUNDAMENTAL ETHICAL CANONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 uppercase">
              The Professional Engineer's Ethos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            <div className="bg-[#0a0e17]/80 p-5 rounded-xl border border-[#94a3b8]/15 space-y-2">
              <div className="font-mono text-xs text-[#b87333] font-bold">CANON I: SAFETY OF HUMAN LIFE</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineers shall hold paramount the safety, health, and welfare of the public in the performance of their professional duties.
              </p>
            </div>

            <div className="bg-[#0a0e17]/80 p-5 rounded-xl border border-[#94a3b8]/15 space-y-2">
              <div className="font-mono text-xs text-[#b87333] font-bold">CANON II: COMPETENCE & VERIFICATION</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineers shall perform services only in the areas of their competence, relying on first-principles mathematics and verified data.
              </p>
            </div>

            <div className="bg-[#0a0e17]/80 p-5 rounded-xl border border-[#94a3b8]/15 space-y-2">
              <div className="font-mono text-xs text-[#b87333] font-bold">CANON III: TRUTHFUL STATEMENTS</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineers shall issue public statements only in an objective, truthful, and auditable manner without falsification.
              </p>
            </div>

            <div className="bg-[#0a0e17]/80 p-5 rounded-xl border border-[#94a3b8]/15 space-y-2">
              <div className="font-mono text-xs text-[#b87333] font-bold">CANON IV: SUSTAINABLE DESIGN</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineers shall strive to protect environmental integrity and design infrastructure aligned with long-term climate resilience.
              </p>
            </div>
          </div>
        </section>

        {/* UN SDG 17 Goals Interactive Grid */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#b87333] tracking-widest uppercase">
              GLOBAL ALIGNMENT
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-100 uppercase">
              17 UN Sustainable Development Goals
            </h2>
            <p className="font-sans text-xs text-slate-400">
              Click any goal to examine how engineering disciplines directly drive its technological execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {unSdgsData.map((sdg) => {
              const isOpen = activeSdgId === sdg.id;
              return (
                <div
                  key={sdg.id}
                  onClick={() => setActiveSdgId(isOpen ? null : sdg.id)}
                  style={{ borderTopColor: sdg.color }}
                  className={`cursor-pointer bg-[#0d1321] border border-[#94a3b8]/20 border-t-4 rounded-xl p-4 space-y-3 transition-all duration-300 hover:border-[#b87333] ${
                    isOpen ? 'ring-2 ring-[#b87333] shadow-xl' : ''
                  }`}
                >
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-lg font-bold" style={{ color: sdg.color }}>
                      SDG #{sdg.id}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">DETAILS</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-slate-100">{sdg.title}</h3>

                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {sdg.alignment}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Charter Signature & Pledge Section */}
        <section className="bg-[#0d1321] border-2 border-[#b87333] rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#94a3b8]/20">
            <div>
              <div className="font-mono text-xs text-[#b87333] tracking-widest uppercase">
                DIGITAL PLEDGE REPOSITORY
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-100">Sign the Engineer's Charter</h2>
            </div>

            {/* Rotating Seal */}
            <div className="w-14 h-14 rounded-full bg-[#111827] border-2 border-[#b87333] flex items-center justify-center text-[#b87333] shadow-[0_0_15px_rgba(184,115,51,0.4)] animate-spin-slow">
              <Award className="w-7 h-7 text-[#d4af37]" />
            </div>
          </div>

          {signed ? (
            <div className="p-6 bg-[#111827] border border-emerald-500/40 rounded-xl space-y-3 text-center font-mono animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <div className="text-lg text-emerald-400 font-bold">PLEDGE VERIFIED & RECORDED</div>
              <p className="text-xs text-slate-300">
                Thank you, <span className="text-[#b87333] font-bold">{signatoryName}</span>. Your digital signature has been permanently logged in the MMXXVI Charter Register.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSignPledge} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 uppercase mb-2">FULL NAME & CREDENTIALS (e.g. Jane Doe, PE)</label>
                <input
                  type="text"
                  value={signatoryName}
                  onChange={(e) => setSignatoryName(e.target.value)}
                  placeholder="Enter your professional signature..."
                  className="w-full bg-[#111827] border border-[#b87333]/40 rounded p-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#b87333]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#b87333] to-[#d4af37] text-[#0a0e17] font-bold uppercase tracking-widest rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>SIGN THE CHARTER PLEDGE</span>
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
