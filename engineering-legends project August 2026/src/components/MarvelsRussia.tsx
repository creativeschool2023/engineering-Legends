import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Zap, Rocket, Cpu, Activity, BarChart3, Database, Thermometer, ShieldAlert, Waves, Anchor, Compass, Info, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsRussia() {
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
              <a href="#space" className="hover:text-inst-ink transition-colors">Space</a>
              <a href="#nuclear" className="hover:text-inst-ink transition-colors">Nuclear</a>
              <a href="#kursk" className="hover:text-inst-ink transition-colors">Kursk Sub</a>
              <a href="#arctic" className="hover:text-inst-ink transition-colors">Arctic</a>
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
             <Anchor size={14} className="animate-pulse" />
            <span>Institutional Exhibition Record</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Extreme Powers — <br /><span className="serif-italic font-normal text-inst-accent">Russia</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Mastering the Unforgiving
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into polar engineering, nuclear sovereignty, <br />
              and the technical resilience of the Arctic frontier.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Russian engineering is defined by its absolute mastery over the world's most extreme climatic and physical boundaries. From the pioneering of long-duration space habitation to the deployment of the world's only nuclear icebreaker fleet, the Russian technical legacy is one of ruggedized complexity. By designing for -60°C permafrost and the high-pressure depths of the Arctic, Russia has established a unique paradigm of engineering survival at a continental scale."
            </p>
          </div>
        </section>

        {/* Evolution of Russian Engineering */}
        <section id="evolution" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Activity size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Evolution</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Soviet Era Foundations</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Rapid Industrialization</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The establishmet of the "Naukograds" (science cities) focused on massive hydroelectric dams, heavy industry, and the initial integration of nuclear power into the national grid.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">1950s - 1980s</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Height of Polar & Space Supremacy</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Pioneering the Sputnik missions, the Soyuz spacecraft architecture (still world-leading in reliability), and the development of heavy-lift propulsion like the Energia system.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">2000s - 2026</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">The Arctic Turn</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Refocusing on the Northern Sea Route, floating nuclear plants (Akademik Lomonosov), and the restoration of mega-infrastructure like the Crimean Bridge.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1590059132718-26218fca8baa?w=800" alt="Soyuz Launch" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Soyuz MS-21 Propulsion</div>
            </div>
          </div>
        </section>

        {/* Space Engineering */}
        <section id="space" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Orbital Archive</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Orbital <br />Redundancy</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Analyzing the structural integrity of the Soyuz family — the most flown human-rated spacecraft in history.</p>
              </div>

              <div className="md:w-2/3 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Rocket size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Soyuz Architecture</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Orbital Life Support</p>
                      <p className="text-sm text-inst-muted leading-relaxed">A three-module design (Orbital, Descent, Instrumentation) that prioritizes safety over volume. The automated "Kurs" docking system remains a masterpiece of microwave-radar control.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Zap size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Angara A5</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Heavy-Lift Propulsion</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Utilizing the RD-191 engine, a simplified version of the RD-170, for ecological launch stability and massive payload capability to GTO.</p>
                   </div>
                </div>
                <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200" alt="Space Control" className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuclear Engineering */}
        <section id="nuclear" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Microscope size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Nuclear Supremacy</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="bg-inst-ink text-white p-12 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                   <Zap size={200} />
                </div>
                <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Record: BN-Series</span>
                <h3 className="text-4xl font-serif font-bold mb-8 italic">Fast Neutron <br />Reactors</h3>
                <p className="text-sm text-white/70 leading-loose mb-12">Russia lead global efforts in "closing the nuclear fuel cycle". The BN-800 reactor at Beloyarsk acts as a breader, converting waste into fuel, representing a paradigm shift in energy sustainability.</p>
                <div className="flex gap-12 text-[10px] font-bold">
                   <div>
                      <span className="text-inst-accent block mb-1">Type</span>
                      <span>Sodium-Cooled</span>
                   </div>
                   <div>
                      <span className="text-inst-accent block mb-1">Capacity</span>
                      <span>880 MWe</span>
                   </div>
                </div>
             </div>
             
             <div className="space-y-12">
                <div className="p-8 border border-inst-line">
                   <h4 className="text-xl font-serif font-bold mb-2">Akademik Lomonosov</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Floating Nuclear Unit</p>
                   <p className="text-sm text-inst-muted leading-relaxed">The world's first industrial-scale floating nuclear power plant, providing 70MW of carbon-free energy to remote Arctic settlements.</p>
                </div>
                <div className="p-8 border border-inst-line">
                   <h4 className="text-xl font-serif font-bold mb-2">VVER-1200</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Generation III+ PWR</p>
                   <p className="text-sm text-inst-muted leading-relaxed">Advanced safety systems including passive heat removal and "core catchers" ensuring absolute containment even in total power loss scenarios.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Kursk Submarine Special Exhibit */}
        <section id="kursk" className="py-40 bg-inst-ink text-white mb-48 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-full archival-grid opacity-10 pointer-events-none" />
           <div className="max-w-6xl mx-auto px-8 relative z-10">
              <div className="flex flex-col md:flex-row gap-24 items-center">
                 <div className="md:w-1/2">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-3 px-6 py-2 mb-12 border border-inst-accent/40 rounded-full text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em]"
                    >
                       <Anchor size={14} />
                      <span>Special Exhibit: Project 949A</span>
                    </motion.div>
                    <h2 className="text-7xl font-serif font-black mb-8 leading-none tracking-tighter">Kursk <br />(K-141)</h2>
                    <p className="text-lg text-white/70 leading-relaxed font-serif italic mb-12">
                       "One of the largest attack submarines ever constructed, designed to challenge aircraft carrier groups with an unprecedented concentration of nuclear propulsion and missile power."
                    </p>
                    <div className="grid grid-cols-2 gap-8 text-[10px] font-mono font-bold uppercase tracking-widest border-t border-white/10 pt-12">
                       <div>
                          <span className="text-inst-accent block mb-1">Class</span>
                          <span>Oscar II</span>
                       </div>
                       <div>
                          <span className="text-inst-accent block mb-1">Displacement</span>
                          <span>18,000 Tons</span>
                       </div>
                    </div>
                 </div>

                 <div className="md:w-1/2 space-y-12">
                    <div className="aspect-[16/9] bg-white/5 border border-white/10 overflow-hidden relative">
                       <img src="https://images.unsplash.com/photo-1544200175-ca6e80a7b323?w=800" alt="Submarine" className="w-full h-full object-cover grayscale brightness-50" />
                       <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 text-[8px] font-mono">Archival Render: Oscar II Profile</div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                       <div className="p-8 bg-zinc-900">
                          <h4 className="text-lg font-serif font-bold mb-2">Double Hull Engineering</h4>
                          <p className="text-xs text-white/50 leading-relaxed uppercase tracking-wider">Reinforced structural integrity through a 2-meter separation between the outer hydrodynamic hull and the inner pressure titanium vessel.</p>
                       </div>
                       <div className="p-8 bg-zinc-900">
                          <h4 className="text-lg font-serif font-bold mb-2">Granit Missile System</h4>
                          <p className="text-xs text-white/50 leading-relaxed uppercase tracking-wider">Housing 24 P-700 Granit missiles in angled tubes outside the pressure hull, allowing for high-speed underwater launches.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-24 p-12 border border-inst-accent/20 bg-inst-accent/5">
                 <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-4">
                    <ShieldAlert className="text-inst-accent" />
                    Engineering Challenges & Struggles
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                       <h5 className="text-[10px] font-mono text-inst-accent mb-2 uppercase font-bold tracking-widest">Stealth vs Density</h5>
                       <p className="text-xs text-white/60 leading-relaxed">Packing two OK-650 reactors into a relatively small volume creates massive thermal noise signatures. Achieving quieting required complex rubber "anechoic" tiling across the entire outer hull.</p>
                    </div>
                    <div>
                       <h5 className="text-[10px] font-mono text-inst-accent mb-2 uppercase font-bold tracking-widest">Arctic Pressure</h5>
                       <p className="text-xs text-white/60 leading-relaxed">Operating in the Barents Sea means surviving ice-pack collisions and extreme salinity. Every seal and weld was engineered for 500+ meters of depth at sub-zero water temperatures.</p>
                    </div>
                    <div>
                       <h5 className="text-[10px] font-mono text-inst-accent mb-2 uppercase font-bold tracking-widest">The Torpedo Logic</h5>
                       <p className="text-xs text-white/60 leading-relaxed">The internal layout had to isolate weapons from crew, yet the catastrophic failure of HTP fuel in a torpedo proved that physical boundaries are only as strong as their weakest chemical link.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Arctic & Permafrost Engineering */}
        <section id="arctic" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="flex flex-col md:flex-row gap-20 items-center">
             <div className="md:w-1/2">
                <Thermometer size={64} className="text-inst-accent mb-8" />
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering the <br /><span className="serif-italic font-normal">Polar Frontier</span></h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose italic mb-8">
                   "In Siberia, the ground is not a foundation, but a dynamic, frozen organism. Building for permafrost requires thermal siphons — passive cooling tubes that keep the earth frozen to prevent structural collapse."
                </p>
             </div>
             <div className="md:w-1/2 grid grid-cols-1 gap-8">
                <div className="p-8 border border-inst-line bg-zinc-50 relative">
                   <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-inst-ink">Crimean Bridge</h4>
                   <p className="text-xs text-inst-muted leading-relaxed uppercase tracking-widest mb-4">Seismic Infrastructure</p>
                   <p className="text-sm text-inst-muted">Utilizing complex piling systems in soft mud to withstand seismic loads while remaining a critical 19km logistical artery.</p>
                </div>
                <div className="p-8 border border-inst-line bg-zinc-50 relative">
                   <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-inst-ink">Yamal LNG</h4>
                   <p className="text-xs text-inst-muted leading-relaxed uppercase tracking-widest mb-4">Arctic Mega-Plant</p>
                   <p className="text-sm text-inst-muted">An LNG facility built on 30,000 piles in permafrost, utilizing modular construction techniques to survive the 9-month Arctic winter during assembly.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Engineering Insights & Lessons */}
        <section className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-zinc-50 relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 text-inst-ink">Institutional Lessons From the Cold</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">01/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Materials science is the gatekeeper of Arctic survival. Standard steel shatters like glass at -50°C; we must engineer alloys at the crystal lattice level to maintain ductility."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">02/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Redundancy is not a luxury in space or deep-sea nuclear, it is the fundamental moral obligation of the engineer."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">03/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Extreme environments require 'Ruggedized Simplicity'. Over-complex digital systems fail under thermal stress; the most resilient machines are those with the fewest points of potential fracture."</p>
                </li>
             </ul>
          </div>
        </section>

        {/* Key Specifications Summary */}
        <section className="max-w-4xl mx-auto px-8">
          <div className="bg-inst-ink text-white p-12 relative overflow-hidden">
             <div className="absolute top-8 right-8">
                <BarChart3 size={40} className="text-inst-accent opacity-20" />
             </div>
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications: Imperial Scale</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Kursk Submarine Length", value: "154 Meters" },
                  { label: "Sayano-Shushenskaya Height", value: "242 Meters" },
                  { label: "Soyuz Reliability Rate", value: "97.4% Launch Success" },
                  { label: "Angara A5 Payload (LEO)", value: "24.5 Tons" },
                  { label: "BN-800 Fuel Efficiency", value: "Closed Cycle Capability" },
                  { label: "Crimean Bridge Length", value: "19 Kilometers" },
                  { label: "Yamal LNG Piles", value: "30,000+ Units" },
                  { label: "Min Operational Temp", value: "-60°C (Digital Nodes)" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Russia Extreme Operations</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: RU-EXTREME-2026-EX</p>
      </footer>
    </div>
  );
}
