import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Hero3DCanvas } from './Hero3DCanvas';
import { EngineerPortrait } from './EngineerPortraits';
import { engineers, disciplinesData } from '../data';
import { BookOpen, Layers, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredEngineers = engineers.slice(0, 4);
  const featuredDisciplines = disciplinesData.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#9E774F] selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <Hero3DCanvas />

      {/* SECTION 1: FEATURED HALL OF LEGENDS PREVIEW */}
      <section className="py-20 bg-[#F4F1EA] border-t border-b border-[#E5E0D5] relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E5E0D5] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase shadow-sm">
                <BookOpen className="w-3.5 h-3.5 text-[#9E774F]" />
                <span>EXHIBITION HALL PREVIEW</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight">
                Featured <span className="serif-italic italic font-normal text-[#9E774F]">Engineering Legends</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#64748B] max-w-2xl">
                Explore the pioneers who laid the physical and mathematical foundations for modern civilization.
              </p>
            </div>

            <Link
              to="/archive"
              className="px-6 py-3 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 shadow-sm"
            >
              <span>VIEW ALL LEGENDS</span>
              <ArrowRight className="w-4 h-4 text-[#9E774F]" />
            </Link>
          </div>

          {/* Featured Legends Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEngineers.map((engineer) => (
              <div
                key={engineer.id}
                className="group bg-white border border-[#E5E0D5] rounded-xl p-5 space-y-4 transition-all duration-300 hover:border-[#9E774F] hover:shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <EngineerPortrait engineer={engineer} className="w-full h-56 rounded-lg" />

                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#9E774F] uppercase tracking-widest font-semibold">
                      {engineer.plateId}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-[#9E774F] transition-colors">
                      {engineer.name}
                    </h3>
                    <p className="font-sans text-xs text-[#64748B]">{engineer.lifespan}</p>
                  </div>

                  <p className="font-serif italic text-xs text-[#475569] line-clamp-2">
                    "{engineer.quote}"
                  </p>
                </div>

                <Link
                  to="/archive"
                  className="w-full mt-4 bg-[#FAF8F5] border border-[#E5E0D5] text-[#0F172A] hover:border-[#9E774F] hover:text-[#9E774F] font-mono font-bold text-xs uppercase tracking-wider py-2 rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>EXAMINE BLUEPRINT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E774F]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: DISCIPLINES TAXONOMY PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E5E0D5] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase shadow-sm">
              <Layers className="w-3.5 h-3.5 text-[#9E774F]" />
              <span>TAXONOMY STANDARD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#0F172A] uppercase tracking-tight">
              Engineering <span className="serif-italic italic font-normal text-[#9E774F]">Disciplines</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B] max-w-2xl">
              Specialized technical branches categorized across global industry domains.
            </p>
          </div>

          <Link
            to="/disciplines"
            className="px-6 py-3 rounded-lg bg-white border border-[#9E774F] text-[#0F172A] hover:bg-[#FAF8F5] font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>EXPLORE FULL TAXONOMY</span>
            <ArrowRight className="w-4 h-4 text-[#9E774F]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDisciplines.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-[#E5E0D5] rounded-xl p-6 space-y-3 hover:border-[#9E774F] transition-all shadow-xs"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-[#9E774F] uppercase font-semibold">{d.category}</span>
                <span className="font-mono text-xs font-bold text-[#0F172A] bg-[#F4F1EA] px-2 py-0.5 rounded">{d.difficulty}% COMPLEXITY</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0F172A]">{d.name}</h3>
              <p className="font-sans text-xs text-[#64748B] leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: GLOBAL NETWORK CALLOUT */}
      <section className="py-16 bg-[#F4F1EA] border-t border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#9E774F]" />
              <span>INSTITUTIONAL NETWORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] uppercase">
              Connected with Peak Engineering Bodies Worldwide
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed">
              Partnered across 100+ national member organizations including WFEO, UNESCO, IEEE, ASME, ASCE, and IEI India to advance sustainable global infrastructure.
            </p>
          </div>

          <Link
            to="/organizations"
            className="px-8 py-4 bg-[#0F172A] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-lg shadow-md hover:bg-[#1E293B] transition-all shrink-0 flex items-center gap-2"
          >
            <Globe className="w-4 h-4 text-[#9E774F]" />
            VIEW GLOBE NETWORK SPHERE
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
