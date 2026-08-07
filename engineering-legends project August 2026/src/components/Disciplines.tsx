import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { BlueprintSimulatorModal } from './BlueprintSimulatorModal';
import { disciplinesData } from '../data';
import { Discipline } from '../types';
import { 
  Building2, Settings, Zap, FlaskConical, Cpu, Code, Database, Brain, Network, 
  Wind, Sun, Sprout, HeartPulse, Dna, Pill, Rocket, Anchor, Atom, Bot, Sparkles, 
  Volume2, Search, Layers 
} from 'lucide-react';

export default function Disciplines() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSimulatorDiscipline, setActiveSimulatorDiscipline] = useState<Discipline | null>(null);

  const categories = ['All', 'Core & Traditional', 'Technology & Information', 'Environmental & Sustainable', 'Health & Bio', 'Space, Ocean & Extreme', 'Design & Emerging'];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Settings': return Settings;
      case 'Zap': return Zap;
      case 'FlaskConical': return FlaskConical;
      case 'Cpu': return Cpu;
      case 'Code': return Code;
      case 'Database': return Database;
      case 'Brain': return Brain;
      case 'Network': return Network;
      case 'Wind': return Wind;
      case 'Sun': return Sun;
      case 'Sprout': return Sprout;
      case 'HeartPulse': return HeartPulse;
      case 'Dna': return Dna;
      case 'Pill': return Pill;
      case 'Rocket': return Rocket;
      case 'Anchor': return Anchor;
      case 'Atom': return Atom;
      case 'Bot': return Bot;
      case 'Sparkles': return Sparkles;
      case 'Volume2': return Volume2;
      default: return Settings;
    }
  };

  const filteredDisciplines = disciplinesData.filter((d) => {
    const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.focusAreas.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (diff: number) => {
    if (diff <= 60) return { stroke: '#64748B', label: 'STEEL' };
    if (diff <= 80) return { stroke: '#9E774F', label: 'COPPER' };
    if (diff <= 94) return { stroke: '#D97706', label: 'AMBER' };
    return { stroke: '#DC2626', label: 'CRITICAL' };
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#9E774F] selection:text-white">
      <Navigation />

      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-[#F4F1EA] border-b border-[#E5E0D5] overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase font-semibold shadow-xs">
            <Layers className="w-4 h-4 text-[#9E774F]" />
            <span>INTERNATIONAL TAXONOMY STANDARD: 25+ DISCIPLINES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#0F172A] uppercase tracking-tight">
            Engineering <span className="serif-italic italic font-normal text-[#9E774F]">Disciplines</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#64748B] max-w-3xl leading-relaxed">
            Explore the specialized technical taxonomy of modern engineering, difficulty indexes, and test interactive blueprint simulations.
          </p>

          {/* Controls Bar */}
          <div className="pt-4 flex flex-col lg:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E774F]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter specialized branches..."
                className="w-full bg-white border border-[#E5E0D5] rounded-lg pl-10 pr-4 py-3 font-mono text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#9E774F] shadow-xs transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="w-full flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0F172A] text-white font-bold shadow-xs'
                      : 'bg-white border border-[#E5E0D5] text-[#475569] hover:border-[#9E774F] hover:text-[#9E774F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisciplines.map((discipline) => {
            const IconComp = getIconComponent(discipline.iconName);
            const diffMeta = getDifficultyColor(discipline.difficulty);

            return (
              <div
                key={discipline.id}
                className="group relative bg-white border border-[#E5E0D5] rounded-xl p-6 space-y-5 transition-all duration-300 hover:border-[#9E774F] hover:shadow-md flex flex-col justify-between"
              >
                {/* L Corner Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#9E774F] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#9E774F] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#9E774F] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#9E774F] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E5E0D5] flex items-center justify-center text-[#9E774F] group-hover:border-[#9E774F] transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Circular Difficulty Ring */}
                    <div className="relative w-12 h-12 flex items-center justify-center font-mono text-xs font-bold text-[#0F172A]">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E0D5" strokeWidth="4" />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke={diffMeta.stroke}
                          strokeWidth="4"
                          strokeDasharray="125.6"
                          strokeDashoffset={125.6 - (125.6 * discipline.difficulty) / 100}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <span className="absolute text-[10px]">{discipline.difficulty}%</span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#9E774F] tracking-widest font-semibold">
                      {discipline.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] group-hover:text-[#9E774F] transition-colors">
                      {discipline.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                    {discipline.description}
                  </p>

                  {/* Focus Areas Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {discipline.focusAreas.map((focus, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E5E0D5] text-[10px] font-mono text-[#475569]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Test Blueprint Simulator Button */}
                <button
                  onClick={() => setActiveSimulatorDiscipline(discipline)}
                  className="mt-4 w-full bg-[#FAF8F5] border border-dashed border-[#9E774F] text-[#9E774F] hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] font-mono font-bold text-xs uppercase tracking-widest py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <Settings className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-500" />
                  TEST BLUEPRINT SIMULATOR
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Simulator Modal */}
      {activeSimulatorDiscipline && (
        <BlueprintSimulatorModal
          discipline={activeSimulatorDiscipline}
          onClose={() => setActiveSimulatorDiscipline(null)}
        />
      )}

      <Footer />
    </div>
  );
}
