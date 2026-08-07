import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Cpu, Layers, Microscope, Zap, Activity, Info, BarChart3, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsTaiwan() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-inst-bg font-sans selection:bg-inst-accent selection:text-white">
      {/* Archival Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-inst-line bg-inst-bg/80 backdrop-blur-md px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-inst-ink hover:text-inst-accent transition-colors flex items-center gap-2">
              <Landmark size={20} />
              <span className="font-sans font-bold text-xl tracking-tight uppercase">Engineering Legends</span>
            </Link>
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-inst-muted">
              <Link to="/marvels" className="flex items-center gap-2 hover:text-inst-ink transition-colors">
                <ArrowLeft size={10} /> {t('nav.backToHub')}
              </Link>
              <Link to="/archive" className="hover:text-inst-ink transition-colors">{t('nav.archive')}</Link>
              <a href="#evolution" className="hover:text-inst-ink transition-colors">Evolution</a>
              <a href="#tsmc" className="hover:text-inst-ink transition-colors">TSMC</a>
              <a href="#challenges" className="hover:text-inst-ink transition-colors">Challenges</a>
              <a href="#future" className="hover:text-inst-ink transition-colors">Future</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector />
            <Search size={18} className="text-inst-muted cursor-pointer hover:text-inst-ink transition-colors" />
            <Menu size={18} className="text-inst-muted cursor-pointer hover:text-inst-ink transition-colors" />
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-24">
        {/* Hero Section */}
        <header className="max-w-5xl mx-auto px-8 text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 mb-12 border border-inst-accent/20 rounded-full text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em]"
          >
             <Cpu size={14} className="animate-spin-slow" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            The Silicon <br />
            Shield — <span className="serif-italic font-normal text-inst-accent">Taiwan</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              The Semiconductor Revolution
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into lithographic precision <br />
              and the architectural mastery of the sub-atomic world.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Taiwan's transformation into the world's semiconductor heartbeat is the result of decades of hyper-specialized engineering. Through the pure-play foundry model and unprecedented manufacturing discipline, the island has achieved atomic-scale precision that powers the modern global computing infrastructure."
            </p>
          </div>
        </section>

        {/* Evolution of Taiwan's Semiconductor Industry */}
        <section id="evolution" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Activity size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Industry Evolution</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">The Pure-Play Foundry Model</h3>
                <p className="text-sm text-inst-muted leading-loose">Established by Morris Chang in 1987, the model decoupled chip design from manufacturing, allowing for specialized optimization of the fabrication process—a fundamental shift in electronics history.</p>
              </div>
              <div className="pl-8 border-l border-inst-line">
                <span className="text-[10px] font-mono text-inst-accent uppercase block mb-4">Timeline Milestones</span>
                <ul className="space-y-4 text-xs text-inst-muted leading-relaxed uppercase tracking-wider">
                  <li><span className="font-black text-inst-ink">1970s /</span> Initial tech transfer & ERSO setup</li>
                  <li><span className="font-black text-inst-ink">1987 /</span> TSMC Founded, Pure-Play launch</li>
                  <li><span className="font-black text-inst-ink">2010s /</span> Leadership in FinFET technology</li>
                  <li><span className="font-black text-inst-ink">2026 /</span> 2nm GAA Production & Beyond</li>
                </ul>
              </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line overflow-hidden shadow-2xl relative group">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000" alt="Silicon Wafer" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
               <div className="absolute bottom-4 right-4 text-[8px] font-mono uppercase bg-inst-bg/80 px-2 py-1">Fig 01: Macro Silicon Lattice</div>
            </div>
          </div>
        </section>

        {/* TSMC: Engineering Achievements */}
        <section id="tsmc" className="py-40 bg-white/30 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Institutional Profile</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">TSMC: <br />World's Leading <br /><span className="serif-italic font-normal">Foundry</span></h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose italic">
                  "Excellence in manufacturing is not luck; it is the systematic reduction of entropy at the atomic scale."
                </p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all">
                      <Layers className="text-inst-accent mb-6" size={24} />
                      <h4 className="text-xl font-serif font-bold mb-4">Gigafab Facilities</h4>
                      <p className="text-xs text-inst-muted leading-relaxed uppercase tracking-widest mb-4">Super-Scale Manufacturing</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Integrated manufacturing complexes capable of processing 100,000+ wafers per month with unmatched consistency and 24/7 uptime.</p>
                   </div>
                   <div className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all">
                      <Microscope className="text-inst-accent mb-6" size={24} />
                      <h4 className="text-xl font-serif font-bold mb-4">EUV Lithography</h4>
                      <p className="text-xs text-inst-muted leading-relaxed uppercase tracking-widest mb-4">Precision Photolithography</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Early adoption of Extreme Ultraviolet (EUV) light (13.5nm wavelength) to print features smaller than the distance between silicon atoms.</p>
                   </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-8 border border-inst-line -z-10 group-hover:inset-0 transition-all duration-700" />
                  <div className="aspect-video overflow-hidden bg-zinc-100 relative shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200" alt="Cleanroom" className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <p className="text-[9px] font-mono uppercase tracking-[0.4em] mt-8 text-inst-muted text-center">Plate 03: ISO Class 1 Cleanroom Environments</p>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-serif font-bold text-inst-ink">Advanced Packaging (CoWoS)</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Moving beyond the chip level to 3D stacking (SoIC) and Chip-on-Wafer-on-Substrate (CoWoS), allowing high-bandwidth memory to sit directly beside the processor for AI and HPC logic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extreme Engineering Challenges */}
        <section id="challenges" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Zap size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Constraints</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
            {[
              { title: 'Quantum Effects', text: 'At sub-3nm nodes, electron tunneling and quantum leakage become dominant, requiring new gate-all-around (GAA) transistor architectures.' },
              { title: 'Contamination Control', text: 'A single speck of dust (sub-micron) can ruin a multi-million dollar wafer. Systems must operate in ultra-pure environments with 0.1% humidity variance.' },
              { title: 'Thermal Dissipation', text: 'Managing heat at the scale of billions of transistors per square millimeter involves complex materials science and active micro-cooling strategies.' },
              { title: 'Yield Optimization', text: 'High-volume manufacturing of complex nodes requires real-time AI to adjust thousands of process variables to maintain profitable yield rates.' }
            ].map((item, i) => (
              <div key={i} className="bg-inst-bg p-12 hover:bg-white transition-colors duration-500">
                <h4 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em] mb-4">Record {i+1}</h4>
                <h3 className="text-xl font-serif font-bold text-inst-ink mb-4">{item.title}</h3>
                <p className="text-sm text-inst-muted leading-loose">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Progress & Future Innovations */}
        <section id="future" className="py-40 bg-inst-ink text-white mb-48 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--inst-accent)_0%,_transparent_70%)]" />
          </div>
          
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-20 items-end mb-24">
              <div className="md:w-2/3">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">2026 Archive Addendum</span>
                <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none tracking-tighter">The Angstrom <br />Era Technologies</h2>
                <p className="text-lg text-white/70 leading-relaxed font-serif italic max-w-xl">
                  Pushing past the nanometer scale into Angstrom units, redefining the limits of physical materials.
                </p>
              </div>
              <div className="md:w-1/3">
                 <div className="p-8 border border-white/20 bg-white/5 backdrop-blur-md">
                    <Database size={32} className="text-inst-accent mb-6" />
                    <h4 className="font-bold mb-4 uppercase tracking-widest">Global Impact</h4>
                    <ul className="text-[10px] space-y-2 opacity-60 uppercase tracking-widest">
                       <li>• AI Supercomputing</li>
                       <li>• HPC Integration</li>
                       <li>• Autonomous Mobility</li>
                    </ul>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-6">
                  <h4 className="text-xl font-serif font-bold text-inst-accent">2nm GAA Production</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">"The transition to N2 nodes utilizes Nanosheet transistors to provide better electrostatics and lower power."</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-xl font-serif font-bold text-inst-accent">High-NA EUV</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">"Implementation of 0.55 Numerical Aperture EUV systems to push resolution limits even further."</p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-xl font-serif font-bold text-inst-accent">Advanced Packaging</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">"CoWoS-L and SoIC breakthroughs enabling massive silicon interposers for AI data centers."</p>
               </div>
            </div>
          </div>
        </section>

        {/* Engineering Insights & Lessons */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Info size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Insights</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 border border-inst-line bg-zinc-50 relative">
               <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-inst-accent" />
               <h4 className="text-xl font-serif font-bold mb-8 text-inst-ink">Multi-Disciplinary Core</h4>
               <p className="text-sm text-inst-muted leading-relaxed mb-8">Modern fabrication is not just electrical engineering. It is the perfect synchronization of:</p>
               <ul className="space-y-4 text-xs font-bold text-inst-muted uppercase tracking-widest">
                  <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> Materials Science (Atomic layering)</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> Mechanical Engineering (Vibration control)</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> Physics (Quantum behavior)</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> AI Systems (Process control)</li>
               </ul>
            </div>

            <div className="p-12 border border-inst-line flex flex-col justify-center">
               <h4 className="text-xl font-serif font-bold mb-6 text-inst-ink">Institutional Lessons</h4>
               <div className="space-y-6">
                  <p className="text-sm text-inst-muted leading-loose italic">1. Iteration is the path to mastery. Decades of small yield improvements lead to unstoppable competitive moats.</p>
                  <p className="text-sm text-inst-muted leading-loose italic">2. Precision at scale is the hardest engineering problem. It requires total organizational discipline.</p>
                  <p className="text-sm text-inst-muted leading-loose italic">3. Collaboration across national and institutional borders is required for sub-atomic advancement.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Key Specifications Summary */}
        <section className="max-w-4xl mx-auto px-8">
          <div className="bg-inst-ink text-white p-12 relative">
             <div className="absolute top-8 right-8">
                <BarChart3 size={40} className="text-inst-accent opacity-20" />
             </div>
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Leading Process Node", value: "3nm (Mass Production)" },
                  { label: "Upcoming Process Node", value: "2nm / Angstrom Era" },
                  { label: "R&D Investment (Annual)", value: "US$ 5B+" },
                  { label: "Production Capacity", value: "15M+ Wafers (12\" equiv)" },
                  { label: "Cleanroom Standard", value: "Class 1 (ISO 3)" },
                  { label: "Packaging Tech", value: "CoWoS, SoIC, WoW" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-lg font-serif font-bold text-inst-accent">{spec.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* Footer Meta */}
      <footer className="py-24 border-t border-inst-line text-center opacity-60">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4">Institutional Engineering Legends | Exhibit: Taiwan Semiconductor</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted">Archival Access Code: TW-SILICON-2026-EX</p>
      </footer>
    </div>
  );
}
