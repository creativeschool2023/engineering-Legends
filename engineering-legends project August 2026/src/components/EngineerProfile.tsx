import React, { useState } from 'react';
import { Engineer } from '../types';
import { EngineerPortrait } from './EngineerPortraits';
import { Award, FileText, Heart, CheckCircle, Calendar, MapPin, Zap } from 'lucide-react';

interface EngineerProfileProps {
  engineer: Engineer;
}

export const EngineerProfile: React.FC<EngineerProfileProps> = ({ engineer }) => {
  const [archived, setArchived] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCite = () => {
    const citation = `${engineer.name}. "${engineer.blueprint.title}". Engineering Legends Exhibition Archive, MMXXVI. Plate ID: ${engineer.plateId}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <article className="relative bg-white border border-[#E5E0D5] rounded-2xl shadow-sm p-6 md:p-10 space-y-10 overflow-hidden text-[#0F172A] transition-all duration-300 hover:border-[#9E774F]">
      {/* Background Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Top Main Grid: 45% Artwork Portrait | 55% Bio & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5 space-y-4">
          <EngineerPortrait engineer={engineer} className="w-full h-[400px] lg:h-[480px] rounded-xl" />
          
          {/* Quick Meta Card */}
          <div className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-4 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-[#64748B]">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#9E774F]" /> LIFESPAN</span>
              <span className="text-[#0F172A] font-bold">{engineer.lifespan}</span>
            </div>
            <div className="flex items-center justify-between text-[#64748B] border-t border-[#E5E0D5] pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#9E774F]" /> LOCATION</span>
              <span className="text-[#0F172A] font-bold">{engineer.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Era Badge & Plate ID */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9E774F]/10 border border-[#9E774F] text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase font-semibold">
              <Zap className="w-3.5 h-3.5 text-[#9E774F]" />
              <span>{engineer.eraLabel}</span>
            </div>
            <span className="font-mono text-xs text-[#64748B] border border-dashed border-[#9E774F] px-2.5 py-1 rounded-md font-medium">
              PLATE ID: {engineer.plateId}
            </span>
          </div>

          {/* Title / Name */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] uppercase tracking-tight leading-tight">
            {engineer.name}
          </h2>

          {/* Discipline Tags */}
          <div className="flex flex-wrap gap-2">
            {engineer.disciplines.map((d, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E0D5] text-[#475569] font-mono text-xs uppercase tracking-wider hover:border-[#9E774F] hover:text-[#9E774F] transition-colors font-medium"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Quote Block */}
          <div className="relative pl-6 border-l-4 border-[#9E774F] py-3 bg-[#F4F1EA] rounded-r-xl">
            <span className="absolute -top-3 left-2 text-5xl font-serif text-[#9E774F]/30 select-none">“</span>
            <p className="font-serif italic text-lg sm:text-xl text-[#0F172A] leading-relaxed">
              "{engineer.quote}"
            </p>
            {engineer.quoteContext && (
              <p className="text-xs font-mono text-[#9E774F] font-semibold mt-2 tracking-wider uppercase">
                — {engineer.quoteContext}
              </p>
            )}
          </div>

          {/* Bio Lead & Paragraphs */}
          <div className="space-y-3 font-sans text-[#334155] leading-relaxed text-sm sm:text-base">
            <p className="first-letter:font-serif first-letter:text-4xl first-letter:font-bold first-letter:text-[#9E774F] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {engineer.biography.lead}
            </p>
            {engineer.biography.full.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs text-[#9E774F] tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <Award className="w-4 h-4 text-[#9E774F]" /> CORE HISTORICAL ACHIEVEMENTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {engineer.accomplishments.map((acc, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E5E0D5] flex items-center gap-3 font-sans text-xs text-[#1E293B] hover:border-[#9E774F] transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#9E774F] shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ARCHIVAL IMPACT INDEX METRICS ROW */}
      <div className="relative z-10 bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#E5E0D5] font-mono text-xs">
          <span className="text-[#9E774F] tracking-[0.2em] uppercase font-semibold">ARCHIVAL IMPACT INDEX</span>
          <span className="text-[#64748B]">STRUCTURAL METRICS AUDIT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D5]">
          {engineer.technicalMetrics.map((metric, idx) => (
            <div key={idx} className={`space-y-1 ${idx !== 0 ? 'md:pl-6 pt-4 md:pt-0' : ''}`}>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
                {metric.value} <span className="text-sm font-normal text-[#9E774F]">{metric.unit}</span>
              </div>
              <div className="font-sans text-xs font-semibold text-[#475569] uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AUTHENTIC TECHNICAL BLUEPRINT SCHEMATIC CARD */}
      <div className="relative z-10 bg-[#FAF8F5] border-2 border-[#9E774F] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm overflow-hidden">
        {/* Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(158, 119, 79, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(158, 119, 79, 0.2) 1px, transparent 1px)`,
            backgroundSize: '15px 15px'
          }}
        />

        {/* Corner L Brackets */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#9E774F]" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#9E774F]" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#9E774F]" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#9E774F]" />

        {/* Blueprint Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#9E774F]/40">
          <div>
            <div className="font-mono text-xs text-[#9E774F] tracking-[0.2em] uppercase font-semibold">
              PATENT BLUEPRINT SCHEMATIC
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">{engineer.blueprint.title}</h3>
            <p className="font-sans text-xs text-[#64748B]">{engineer.blueprint.subtitle}</p>
          </div>
          <div className="bg-white border border-dashed border-[#9E774F] px-3 py-1.5 rounded font-mono text-xs text-[#9E774F] font-semibold">
            PLATE ID: {engineer.plateId}
          </div>
        </div>

        {/* Blueprint Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Concept & Principles */}
          <div className="lg:col-span-7 space-y-4 font-sans text-xs sm:text-sm text-[#334155]">
            <div>
              <h5 className="font-mono text-xs text-[#9E774F] tracking-[0.2em] uppercase mb-1 font-semibold">
                SYSTEM CONCEPT
              </h5>
              <p className="leading-relaxed bg-white p-3.5 rounded-lg border border-[#E5E0D5]">
                {engineer.blueprint.concept}
              </p>
            </div>

            <div>
              <h5 className="font-mono text-xs text-[#9E774F] tracking-[0.2em] uppercase mb-2 font-semibold">
                UNDERLYING PHYSICS & MECHANICAL PRINCIPLES
              </h5>
              <ul className="space-y-2">
                {engineer.blueprint.principles.map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-[#E5E0D5]">
                    <span className="w-5 h-5 rounded-full bg-[#9E774F]/10 border border-[#9E774F] text-[#9E774F] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[#1E293B] leading-normal">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Technical Specifications Table */}
          <div className="lg:col-span-5 space-y-3">
            <h5 className="font-mono text-xs text-[#9E774F] tracking-[0.2em] uppercase font-semibold">
              ENGINEERING SPECIFICATIONS
            </h5>
            <div className="bg-white border border-[#E5E0D5] rounded-lg overflow-hidden font-mono text-xs">
              <table className="w-full text-left divide-y divide-[#E5E0D5]">
                <tbody className="divide-y divide-[#E5E0D5]">
                  {engineer.blueprint.specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="px-3 py-2.5 text-[#64748B]">{spec.label}</td>
                      <td className="px-3 py-2.5 text-right font-bold text-[#9E774F]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stamp Notation */}
            <div className="pt-2 flex justify-between font-mono text-[10px] text-[#64748B]">
              <span>SCALE: 1:100 SCHEMATIC</span>
              <span>APPROVED: ARCHIVAL VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Blueprint Action Buttons */}
        <div className="pt-4 border-t border-[#9E774F]/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCite}
              className="px-4 py-2 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] font-bold uppercase transition-all flex items-center gap-2 shadow-xs"
            >
              {copied ? <CheckCircle className="w-4 h-4 text-[#9E774F]" /> : <FileText className="w-4 h-4 text-[#9E774F]" />}
              {copied ? 'CITATION COPIED' : 'CITE RECORD'}
            </button>

            <button
              onClick={() => setArchived(!archived)}
              className={`px-4 py-2 rounded-lg border font-bold uppercase transition-all flex items-center gap-2 ${
                archived
                  ? 'bg-rose-50 border-rose-300 text-rose-700'
                  : 'bg-white border-[#E5E0D5] text-[#0F172A] hover:border-[#9E774F] hover:text-[#9E774F]'
              }`}
            >
              <Heart className={`w-4 h-4 ${archived ? 'fill-rose-600 text-rose-600' : ''}`} />
              {archived ? 'SAVED TO ARCHIVE' : 'ARCHIVE RECORD'}
            </button>
          </div>

          <div className="text-[11px] text-[#64748B] uppercase tracking-widest font-medium">
            STATUS: ARCHIVAL PERMANENT
          </div>
        </div>
      </div>
    </article>
  );
};
