import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { GlobeVisualization } from './GlobeVisualization';
import { organizationsData, youngEngineerTips } from '../data';
import { Organization } from '../types';
import { Globe, Building, ShieldCheck, ExternalLink, Award, MapPin, Users, CheckCircle2, BookOpen } from 'lucide-react';

export default function Organizations() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOrg, setSelectedOrg] = useState<Organization>(organizationsData[0]);

  const categories = [
    { id: 'all', label: 'All Organizations' },
    { id: 'global', label: 'Global Governance' },
    { id: 'society', label: 'Professional Societies' },
    { id: 'standards', label: 'Standards & Accreditation' },
    { id: 'humanitarian', label: 'Humanitarian' },
    { id: 'regional', label: 'Regional Authorities' }
  ];

  const filteredOrgs = organizationsData.filter(
    (org) => selectedCategory === 'all' || org.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col font-sans selection:bg-[#b87333] selection:text-[#0a0e17]">
      <Navigation />

      {/* Header Banner */}
      <section className="relative pt-32 pb-12 bg-[#0d1321] border-b border-[#b87333]/30 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px),
                              linear-gradient(to bottom, #b87333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#b87333]/50 text-[#b87333] font-mono text-xs tracking-widest uppercase">
            <Globe className="w-4 h-4 text-[#d4af37]" />
            <span>GLOBAL ENGINEERING FEDERATIONS & SOCIETIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-slate-100 uppercase tracking-tight">
            Global <span className="text-[#b87333]">Network</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-300 max-w-3xl">
            "Connecting international peak bodies, professional societies, standards accreditation councils, and humanitarian engineering networks."
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 w-full">
        {/* Interactive 3D Canvas Globe Visualization */}
        <section className="space-y-4">
          <GlobeVisualization
            organizations={organizationsData}
            onSelectOrg={(org) => setSelectedOrg(org)}
            selectedOrgId={selectedOrg.id}
          />
        </section>

        {/* Selected Organization Detail Showcase */}
        {selectedOrg && (
          <section className="bg-[#0d1321] border-2 border-[#b87333] rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_35px_rgba(184,115,51,0.2)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#94a3b8]/20">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#b87333]/20 border border-[#b87333] text-[#b87333] font-mono text-xs uppercase font-bold">
                    {selectedOrg.plateId}
                  </span>
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    {selectedOrg.categoryLabel}
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-100">{selectedOrg.name}</h2>
              </div>

              <a
                href={selectedOrg.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded bg-[#b87333] hover:bg-[#d4af37] text-[#0a0e17] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>VISIT OFFICIAL PORTAL</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-300">
              <div className="bg-[#111827] p-4 rounded-lg border border-[#94a3b8]/15 space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#b87333]" /> HEADQUARTERS</div>
                <div className="text-slate-100 font-bold">{selectedOrg.location}</div>
              </div>

              <div className="bg-[#111827] p-4 rounded-lg border border-[#94a3b8]/15 space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-[#b87333]" /> ESTABLISHED</div>
                <div className="text-slate-100 font-bold">{selectedOrg.established} AD</div>
              </div>

              <div className="bg-[#111827] p-4 rounded-lg border border-[#94a3b8]/15 space-y-1">
                <div className="text-slate-400 flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#b87333]" /> GLOBAL REACH</div>
                <div className="text-slate-100 font-bold">{selectedOrg.members}</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-sm text-slate-300 leading-relaxed bg-[#111827]/60 p-4 rounded-lg border border-[#94a3b8]/15">
                {selectedOrg.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-mono text-xs text-[#b87333] tracking-widest uppercase">
                  KEY INSTITUTIONAL INITIATIVES & STANDARDS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedOrg.focusAreas.map((focus, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-[#111827] border border-[#94a3b8]/20 font-mono text-xs text-slate-200"
                    >
                      ✓ {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Young Engineer Tips Vertical Timeline */}
        <section className="bg-[#0d1321] border border-[#b87333]/40 rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#b87333] uppercase tracking-widest">
              <BookOpen className="w-4 h-4 text-[#d4af37]" />
              <span>INSTITUTIONAL STRATEGY GUIDE</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-100 uppercase">
              8 Strategic Pillars for Young Engineers
            </h2>
            <p className="font-sans text-xs text-slate-400">
              Guidance compiled from senior leaders at IEEE, ASME, ASCE, WFEO, and IEI for career accreditation.
            </p>
          </div>

          <div className="relative border-l-2 border-[#b87333]/40 ml-4 pl-6 space-y-8">
            {youngEngineerTips.map((tip, idx) => (
              <div key={idx} className="relative space-y-1">
                {/* Step Marker Circle */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#111827] border-2 border-[#b87333] text-[#b87333] font-mono text-xs font-bold flex items-center justify-center">
                  {tip.step}
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-100">{tip.title}</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
