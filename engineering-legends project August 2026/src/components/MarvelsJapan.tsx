import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Train, Zap, ShieldAlert, Wrench, Settings, Microscope, Activity, Info, BarChart3, Database, Cpu, Wind, Building2, Layers, Compass, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsJapan() {
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
              <a href="#rail" className="hover:text-inst-ink transition-colors">Transportation</a>
              <a href="#disaster" className="hover:text-inst-ink transition-colors">Resilience</a>
              <a href="#robotics" className="hover:text-inst-ink transition-colors">Precision</a>
              <a href="#struggles" className="hover:text-inst-ink transition-colors">Challenges</a>
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
             <Settings size={14} className="animate-spin-slow" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Precision & <br />Resilience — <br /><span className="serif-italic font-normal text-inst-accent">Japan</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Mastery of the Unstable
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into disaster-resilient infrastructure, <br />
              robotic automation, and absolute high-speed precision.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Japan's engineering legacy is defined by a unique synthesis of extreme precision and defensive resilience. Operating within the world's most seismically volatile environment, Japanese engineers have pioneered base isolation techniques, superconducting maglev systems, and automated production philosophies like Kaizen. This exhibition archives the technical discipline required to maintain absolute stability in a state of constant environmental flux."
            </p>
          </div>
        </section>

        {/* Evolution of Japanese Engineering */}
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
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">1950s-1970s</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Post-War Quality Revolution</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Adoption of Kaizen and Monozukuri philosophies led to global dominance in automotive and consumer electronics, anchored by rigorous quality control.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">1980s-2000s</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Infrastructure & Robotics</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Completion of the Shinkansen network and the Akashi Kaikyo Bridge, alongside the rise of Fanuc and Yaskawa as global industrial robotics leaders.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">2020s & Beyond</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Maglev & Human-Centric AI</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Pioneering superconducting Maglev technology and soft robotics to solve demographic challenges while maintaining 2026-level precision.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" alt="Shinkansen" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Series E5 Shinkansen</div>
            </div>
          </div>
        </section>

        {/* High-Speed Rail & Maglev */}
        <section id="rail" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Transportation Archive</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Velocity <br />Record</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Detailing the transition from the world's safest high-speed rail to L0 Series Maglev technology.</p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="p-12 bg-white border border-inst-line">
                   <div className="flex items-center gap-4 mb-8">
                      <Train className="text-inst-accent" size={24} />
                      <h3 className="text-3xl font-serif font-bold">SCMaglev (Chuo Shinkansen)</h3>
                   </div>
                   <p className="text-sm text-inst-muted leading-relaxed mb-8">Utilizing superconducting magnets cooled with liquid helium to achieve levitation. The L0 Series has reached test speeds of <strong>603 km/h</strong>, representing the absolute peak of land-based transportation engineering.</p>
                   <div className="grid grid-cols-2 gap-8 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-inst-line">
                      <div>
                         <span className="block text-inst-accent mb-1">Status</span>
                         <span>Under Construction (Tokyo-Nagoya)</span>
                      </div>
                      <div>
                         <span className="block text-inst-accent mb-1">Target Speed</span>
                         <span>505 km/h (Commercial)</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 border border-inst-line bg-white">
                      <h4 className="text-xl font-serif font-bold mb-4">Shinkansen Reliability</h4>
                      <p className="text-sm text-inst-muted leading-relaxed">Average delay of less than 30 seconds per train, including weather-related incidents. Zero passenger fatalities due to derailment or collision in 60 years of operation.</p>
                   </div>
                   <div className="p-8 border border-inst-line bg-white">
                      <h4 className="text-xl font-serif font-bold mb-4">Vibration Control</h4>
                      <p className="text-sm text-inst-muted leading-relaxed">Engineered trackbeds and advanced aerodynamic nose designs to mitigate "Tunnel Sonic Boom" and maintain urban quietness.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Resilient Engineering */}
        <section id="disaster" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <ShieldAlert size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Seismic Resilience</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="aspect-[4/5] bg-zinc-100 border border-inst-line overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-15420518418c7-d198d1ee7627?w=800" alt="Tokyo Skyscraper" className="w-full h-full object-cover grayscale brightness-90 contrast-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-inst-ink/40 to-transparent" />
               <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-[10px] font-mono text-inst-accent uppercase tracking-widest block mb-2">Technical Feat</span>
                  <h4 className="text-2xl font-serif font-bold">Akashi Kaikyo Bridge</h4>
                  <p className="text-xs text-white/70 mt-2 font-mono italic">Built to survive 8.5M earthquakes and 286 km/h winds.</p>
               </div>
            </div>
            <div className="space-y-12">
               <div>
                  <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Structural Defense</h3>
                  <p className="text-sm text-inst-muted leading-relaxed mb-8">Japanese seismic engineering utilizes three primary tiers of defense: <strong>Seishin</strong> (vibration control), <strong>Taishin</strong> (seismic resistance), and <strong>Menshin</strong> (base isolation).</p>
               </div>
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-inst-line flex items-center justify-center text-inst-accent">
                        <Layers size={18} />
                     </div>
                     <div>
                        <h5 className="text-lg font-serif font-bold text-inst-ink mb-2">Base Isolation</h5>
                        <p className="text-xs text-inst-muted leading-relaxed">Lead-rubber bearings decoupling the building foundation from the ground, absorbing up to 80% of seismic energy.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-inst-line flex items-center justify-center text-inst-accent">
                        <Wind size={18} />
                     </div>
                     <div>
                        <h5 className="text-lg font-serif font-bold text-inst-ink mb-2">Tuned Mass Dampers</h5>
                        <p className="text-xs text-inst-muted leading-relaxed">Massive pendulums (up to 1,000 tons) in skyscrapers like the Tokyo Skytree to counteract sway from wind and tremors.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Robotics & Precision */}
        <section id="robotics" className="py-40 bg-inst-ink text-white mb-48 relative overflow-hidden">
          <div className="absolute inset-0 archival-grid opacity-10 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <Microscope size={64} className="text-inst-accent mb-12" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">The Precision <br />Imperative</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-white/70 leading-relaxed font-serif italic mb-8">
                  "Monozukuri is not just manufacturing; it is the spiritual and technical pursuit of absolute perfection in the physical object."
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="p-6 border border-white/10 bg-white/5">
                      <h4 className="text-2xl font-bold text-inst-accent">Fanuc</h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Industrial Automation</p>
                   </div>
                   <div className="p-6 border border-white/10 bg-white/5">
                      <h4 className="text-2xl font-bold text-inst-accent">Yaskawa</h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Mechatronic Systems</p>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 {[
                   { title: 'Sub-Millimeter Precision', text: 'Mastering CNC machining and optical lithography at tolerances that approach atomic scales for semiconductor tools.' },
                   { title: 'Humanoid Collaboration', text: 'Pioneering cobots (collaborative robots) designed to work safely alongside aging workforces, focusing on sensory feedback.' },
                   { title: 'Total Quality Management', text: 'Implementation of Poka-Yoke (error-proofing) systems that prevent defects before they occur in massive automotive lines.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                      <h5 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h5>
                      <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Civil */}
        <section id="infrastructure" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Civil Infrastructure</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="aspect-[3/4] bg-zinc-100 border border-inst-line overflow-hidden relative shadow-lg group">
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600" alt="Shibuya Crossing" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-inst-ink/60 opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white text-xs font-mono uppercase tracking-widest">Urban Integration: The world's most complex multimodal transit hubs.</p>
                </div>
             </div>
             <div className="md:col-span-2 p-12 border border-inst-line bg-white flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold mb-8 text-inst-ink">Tunneling & Bridges</h3>
                <p className="text-sm text-inst-muted leading-loose mb-8">Japanese engineers have mastered tunneling through unstable volcanic rock and undersea foundations (Seikan Tunnel). The integration of remote sensing and real-time structural monitoring allows these massive assets to remain operational despite high geological pressure.</p>
                <div className="grid grid-cols-2 gap-12">
                   <div>
                      <span className="text-[10px] font-mono text-inst-accent uppercase block mb-1">Seikan Tunnel</span>
                      <p className="text-xs text-inst-ink font-bold">53.85 km Length (23.3 km Undersea)</p>
                   </div>
                   <div>
                      <span className="text-[10px] font-mono text-inst-accent uppercase block mb-1">Metropolitan Discharge</span>
                      <p className="text-xs text-inst-ink font-bold">G-Cans: World's largest underground flood diversion tank.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Struggles Section */}
        <section id="struggles" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <ShieldAlert size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink text-center">Engineering Struggles</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
             {[
               { title: 'The Seismic Battle', text: 'Constant monitoring of 8.5+ magnitude potential. Engineers must simulate trillions of stress variables to predict failures in aging infrastructure during the Big One.' },
               { title: 'Material Fatigue', text: 'High-frequency train cycles and corrosive coastal air lead to rapid oxidation and mechanical wear. Predictive maintenance is the only thing preventing catastrophic failure.' },
               { title: 'Demographic Pressure', text: 'An aging specialized workforce means centuries of tacit "craftman" knowledge must be digitized and transferred into AI-driven robotic systems.' },
               { title: 'Maglev Complexity', text: 'Maintaining superconducting temperatures (-269°C) across hundreds of kilometers of mountainous terrain is a multi-disciplinary logistics nightmare.' }
             ].map((item, i) => (
               <div key={i} className="p-12 bg-white hover:bg-zinc-50 transition-colors">
                  <h4 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em] mb-4">Challenge 0{i+1}</h4>
                  <h5 className="text-2xl font-serif font-bold mb-4 text-inst-ink">{item.title}</h5>
                  <p className="text-sm text-inst-muted leading-relaxed italic">"{item.text}"</p>
               </div>
             ))}
          </div>
        </section>

        {/* Multi-Disciplinary Engineering */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
               <Database size={48} className="text-inst-accent opacity-10" />
            </div>
            <h3 className="text-4xl font-serif font-bold mb-12 text-inst-ink">Institutional Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
               {[
                 { title: 'Mechanical & Mechatronics', text: 'Integration of high-speed actuators, sensors, and control loops for sub-millimeter precision in robotics.' },
                 { title: 'Seismic & Structural', text: 'Designing non-linear structural models capable of surviving large-scale deformations.' },
                 { title: 'Materials & Metallurgy', text: 'Development of advanced superconducting alloys and disaster-resilient polymers.' },
                 { title: 'Electrical & Control', text: 'Managing high-voltage maglev grids and real-time autonomous transit synchronization.' },
                 { title: 'Robotics & AI', text: 'Building the software architecture for safe human-robot collaboration in factory environments.' },
                 { title: 'Thermal Engineering', text: 'Managing cryogenic cooling for superconductors and heat dissipation in ultra-dense urban infrastructure.' }
               ].map((item, i) => (
                 <div key={i}>
                    <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">Domain {i+1}</h5>
                    <h6 className="text-lg font-bold mb-2 text-inst-ink uppercase tracking-tight">{item.title}</h6>
                    <p className="text-xs text-inst-muted leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Key Specifications Summary */}
        <section className="max-w-4xl mx-auto px-8">
          <div className="bg-inst-ink text-white p-12 relative overflow-hidden">
             <div className="absolute top-8 right-8">
                <BarChart3 size={40} className="text-inst-accent opacity-20" />
             </div>
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications Summary</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Maglev Record Speed", value: "603 km/h" },
                  { label: "Akashi Kaikyo Span", value: "1,991 Meters" },
                  { label: "Shinkansen Punctuality", value: "99.9% (Annual)" },
                  { label: "Tokyo Skytree Height", value: "634 Meters" },
                  { label: "Seikan Tunnel Depth", value: "240M Below Sea" },
                  { label: "Maglev Cooling", value: "-269°C (Liq Helium)" },
                  { label: "Robot Density (per 10k)", value: "390+ Units" },
                  { label: "Seismic Base Isolation", value: "80% Energy Absorption" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Japan Precision & Resilience</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: JP-PRECISION-2026-EX</p>
      </footer>
    </div>
  );
}
