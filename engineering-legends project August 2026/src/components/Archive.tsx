import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { EngineerProfile } from './EngineerProfile';
import { engineers } from '../data';
import { Era } from '../types';
import { Search, Compass, BookOpen, Landmark, Sparkles, Feather, Cpu, X, Tag, Filter } from 'lucide-react';

export default function Archive() {
  const [selectedEra, setSelectedEra] = useState<Era | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const eraDefinitions: { id: Era; label: string; period: string; icon: React.ElementType; description: string }[] = [
    {
      id: 'ancient',
      label: 'Ancient Times',
      period: '3000 BC – 1st Century BC',
      icon: Landmark,
      description: 'The earliest stone monuments, monumental aqueducts, ashlar masonry, and hydrostatic mechanics.'
    },
    {
      id: 'after_christ',
      label: 'After Christ (Early AD Era)',
      period: '1st Century AD – 7th Century AD',
      icon: Sparkles,
      description: 'Pneumatics, classical steam turbines, automated temple doors, and early mechanical force pumps.'
    },
    {
      id: 'medieval',
      label: 'Medieval Times & Golden Age',
      period: '8th Century AD – 17th Century AD',
      icon: Feather,
      description: 'Algebra, surgical engineering, astrolabes, crankshafts, camera obscura optics, and water sequencers.'
    },
    {
      id: 'modern',
      label: 'Modern Engineering (From 18th Century)',
      period: '18th Century – Present Day',
      icon: Cpu,
      description: 'Separate steam condensers, AC power grids, first computer algorithms, suspension bridges, and flight software.'
    }
  ];

  const eraTabs: { id: Era | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All Era Legends', count: engineers.length },
    { id: 'ancient', label: 'Ancient Times', count: engineers.filter((e) => e.era === 'ancient').length },
    { id: 'after_christ', label: 'After Christ', count: engineers.filter((e) => e.era === 'after_christ').length },
    { id: 'medieval', label: 'Medieval Times', count: engineers.filter((e) => e.era === 'medieval').length },
    { id: 'modern', label: 'Modern (From 18th Century)', count: engineers.filter((e) => e.era === 'modern').length }
  ];

  const suggestedQueries = [
    'Steam Condenser',
    'AC Power',
    'Algorithm',
    'Astrolabe',
    'Pyramid',
    'Civil Engineering',
    'Software',
    'Ancient'
  ];

  const filteredEngineers = engineers.filter((engineer) => {
    const matchesEra = selectedEra === 'all' || engineer.era === selectedEra;
    const q = searchQuery.trim().toLowerCase();

    if (!q) return matchesEra;

    const matchesName = engineer.name.toLowerCase().includes(q);
    const matchesEraText = engineer.era.toLowerCase().includes(q) || engineer.eraLabel.toLowerCase().includes(q);
    const matchesDisciplines = engineer.disciplines.some((d) => d.toLowerCase().includes(q));
    const matchesAccomplishments = engineer.accomplishments.some((a) => a.toLowerCase().includes(q));
    const matchesNationality = engineer.nationality.toLowerCase().includes(q);
    const matchesLocation = engineer.location.toLowerCase().includes(q);
    const matchesLeadBio = engineer.biography.lead.toLowerCase().includes(q);
    const matchesBlueprint =
      engineer.blueprint.title.toLowerCase().includes(q) ||
      engineer.blueprint.subtitle.toLowerCase().includes(q) ||
      engineer.blueprint.concept.toLowerCase().includes(q);

    const matchesSearch =
      matchesName ||
      matchesEraText ||
      matchesDisciplines ||
      matchesAccomplishments ||
      matchesNationality ||
      matchesLocation ||
      matchesLeadBio ||
      matchesBlueprint;

    return matchesEra && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#9E774F] selection:text-white">
      <Navigation />

      {/* Hero Header Banner */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#F4F1EA] border-b border-[#E5E0D5] overflow-hidden">
        {/* Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase shadow-sm">
            <BookOpen className="w-4 h-4 text-[#9E774F]" />
            <span>EXHIBITION HALL: HISTORICAL BIOGRAPHIES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] uppercase tracking-tight">
            Hall of <span className="serif-italic italic font-normal text-[#9E774F]">Engineering Legends</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Search across historical engineering legends by <strong className="text-[#0F172A]">name</strong>, <strong className="text-[#0F172A]">era</strong> (Ancient, After Christ, Medieval, Modern), or <strong className="text-[#0F172A]">specific contributions & inventions</strong>.
          </p>

          {/* Interactive Search Bar Section */}
          <div className="pt-2 space-y-4">
            <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E5E0D5] shadow-md max-w-4xl space-y-3">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#9E774F]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legends by name, era, discipline, or contribution (e.g. Tesla, Steam, Ancient, AC Power)..."
                  className="w-full bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl pl-12 pr-10 py-3.5 font-sans text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#9E774F] focus:bg-white focus:ring-2 focus:ring-[#9E774F]/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 p-1 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#E5E0D5]/50 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Search Tags */}
              <div className="flex items-center gap-2 flex-wrap text-xs text-[#64748B] pt-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9E774F] flex items-center gap-1 font-semibold">
                  <Tag className="w-3 h-3" /> Quick Search:
                </span>
                {suggestedQueries.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all border ${
                      searchQuery.toLowerCase() === tag.toLowerCase()
                        ? 'bg-[#9E774F] text-white border-[#9E774F]'
                        : 'bg-[#FAF8F5] text-[#475569] border-[#E5E0D5] hover:border-[#9E774F] hover:text-[#9E774F]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Era Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#9E774F]" /> Era Filter:
              </span>
              {eraTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedEra(tab.id)}
                  className={`px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                    selectedEra === tab.id
                      ? 'bg-[#0F172A] text-white font-bold shadow-xs'
                      : 'bg-white border border-[#E5E0D5] text-[#475569] hover:border-[#9E774F] hover:text-[#9E774F]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    selectedEra === tab.id ? 'bg-[#9E774F] text-white' : 'bg-[#FAF8F5] text-[#9E774F]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Query Status Indicator */}
            {(searchQuery.trim() !== '' || selectedEra !== 'all') && (
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B] bg-white px-4 py-2 rounded-lg border border-[#E5E0D5] max-w-4xl">
                <span>
                  Showing <strong className="text-[#0F172A] font-bold">{filteredEngineers.length}</strong> {filteredEngineers.length === 1 ? 'legend' : 'legends'}
                  {searchQuery.trim() && <> matching &quot;<strong className="text-[#9E774F]">{searchQuery}</strong>&quot;</>}
                  {selectedEra !== 'all' && <> in <strong className="text-[#0F172A]">{eraTabs.find(t => t.id === selectedEra)?.label}</strong></>}
                </span>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedEra('all');
                  }}
                  className="text-[#9E774F] hover:underline uppercase tracking-wider text-[11px] font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Biographies Display List Grouped By Era */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 w-full">
        {filteredEngineers.length > 0 ? (
          eraDefinitions
            .filter((eraDef) => selectedEra === 'all' || selectedEra === eraDef.id)
            .map((eraDef) => {
              const engineersInEra = filteredEngineers.filter((e) => e.era === eraDef.id);
              if (engineersInEra.length === 0) return null;

              const EraIcon = eraDef.icon;

              return (
                <section key={eraDef.id} className="space-y-10">
                  {/* Era Section Banner Header */}
                  <div className="p-6 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#9E774F]/10 border border-[#9E774F]/30 flex items-center justify-center text-[#9E774F] shrink-0">
                        <EraIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] uppercase tracking-wide">
                            {eraDef.label}
                          </h2>
                          <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E0D5] font-mono text-xs text-[#9E774F] font-semibold">
                            {eraDef.period}
                          </span>
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-[#64748B] mt-1">
                          {eraDef.description}
                        </p>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-[#9E774F] bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E5E0D5] whitespace-nowrap">
                      {engineersInEra.length} Archival {engineersInEra.length === 1 ? 'Record' : 'Records'}
                    </div>
                  </div>

                  {/* Engineer Biographies List */}
                  <div className="space-y-12">
                    {engineersInEra.map((engineer) => (
                      <EngineerProfile key={engineer.id} engineer={engineer} />
                    ))}
                  </div>
                </section>
              );
            })
        ) : (
          <div className="p-12 text-center bg-white border border-[#E5E0D5] rounded-2xl font-mono text-[#64748B] space-y-4 shadow-xs">
            <Compass className="w-12 h-12 text-[#9E774F] mx-auto animate-bounce" />
            <p className="text-base text-[#0F172A] font-bold">No engineering legends found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-[#64748B]">Try searching for broader keywords like &quot;Civil&quot;, &quot;Steam&quot;, &quot;Algorithm&quot;, &quot;Ancient&quot;, or clear your era filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedEra('all');
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#9E774F] transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
