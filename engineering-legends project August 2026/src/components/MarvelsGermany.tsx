import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Zap, Car, Cpu, Factory, Activity, BarChart3, Database, Globe, Filter, Building2, Layers, Compass, Shield, Wind, Sparkles, Microscope, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsGermany() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-inst-bg font-sans selection:bg-inst-accent selection:text-white">
      {/* Archival Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-inst-line bg-inst-bg/80 backdrop-blur-md px-8 py-6">
        <div className="max-w-7xl auto flex justify-between items-center">
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
              <a href="#automotive" className="hover:text-inst-ink transition-colors">Automotive</a>
              <a href="#automation" className="hover:text-inst-ink transition-colors">Automation</a>
              <a href="#energy" className="hover:text-inst-ink transition-colors">Energy</a>
              <a href="#structural" className="hover:text-inst-ink transition-colors">Infrastructure</a>
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
            <span>Institutional Exhibition Record</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
             Precision & <br />Mastery — <br /><span className="serif-italic font-normal text-inst-accent">Germany</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Efficiency Through Absolute Quality
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into Industrie 4.0, automotive supremacy, <br />
              and the technical complexity of the Energiewende.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Germany's engineering identity is defined by a global reputation for uncompromising precision, industrial efficiency, and the pioneering of 'Industrie 4.0'. From the inception of the internal combustion engine to the world's most ambitious energy transition, the German technical legacy focuses on systemic quality and long-term craftsmanship. By integrating advanced robotics, cyber-physical systems, and sustainable infrastructure, Germany maintains its position as the world's premier architect of industrial machines and transport systems."
            </p>
          </div>
        </section>

        {/* Evolution of German Engineering */}
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
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">19th Century Foundations</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Internal Combustion</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The work of Nikolaus Otto and Rudolf Diesel established Germany as the global epicenter of internal combustion and mechanical power, creating the blueprint for the modern automotive world.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Post-War Era</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Wirtschaftswunder</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The 'Economic Miracle' saw the rapid reconstruction of industrial capacity, focusing on heavy machinery, chemical engineering (BASF), and high-precision machine tools.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">21st Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Industrie 4.0</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The digital transformation of manufacturing, where Cyber-Physical Systems (CPS), smart grids, and AI integration redefine the efficiency of the global supply chain.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800" alt="Precision Engine" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Porsche High-Precision Powertrain</div>
            </div>
          </div>
        </section>

        {/* Automotive & Precision Engineering */}
        <section id="automotive" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Automotive Archive</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Mechanical <br />Dominance</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Analyzing the structural integrity and powertrain efficiency of the world's most premium automotive manufacturers.</p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Car size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Precision Powertrains</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Efficiency Logistics</p>
                      <p className="text-sm text-inst-muted leading-relaxed">From Porsche's flat-six to Mercedes' F1-derived hybrids, the focus remains on sub-millimeter tolerances and absolute thermal management.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Settings size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Machine Tools</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">The Machines that Make Machines</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Germany leads in the production of high-end CNC milling and multi-spindle lathes, forming the backbone of global high-precision manufacturing.</p>
                   </div>
                </div>

                <div className="aspect-video overflow-hidden border border-inst-line relative group shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200" alt="German Car Design" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 border border-white/20 backdrop-blur-md bg-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.5em] block mb-2">Exhibition View</span>
                         <h5 className="text-white text-xl font-serif">Advanced Aerodynamics Testing | Stuttgart</h5>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Automation & Robotics */}
        <section id="automation" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Cpu size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Industrie 4.0</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-inst-ink text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                  <Factory size={160} />
               </div>
               <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Record: Smart Factory</span>
               <h3 className="text-4xl font-serif font-bold mb-8">Cyber-Physical <br />Mastery</h3>
               <p className="text-sm text-white/70 leading-loose mb-12">The integration of KUKA robotics with Siemens' MindSphere platform enables 'Digital Twins' — real-time virtual simulations of entire production lines for predictive maintenance and zero-downtime operations.</p>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-white/10">
                  <div>
                     <span className="block text-inst-accent mb-1">Automation Density</span>
                     <span>397 Robots / 10k Workers</span>
                  </div>
                  <div>
                     <span className="block text-inst-accent mb-1">Smart Systems</span>
                     <span>Digital Twin Integration</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               {[
                 { name: 'KUKA Robotics', label: 'Precision Mechatronics', text: 'World-leading articulated arm robots designed for high-speed assembly and sub-millimeter precision welding in automotive plants.' },
                 { name: 'Siemens PLC', label: 'Industrial Control', text: 'The global standard in Programmable Logic Controllers, managing the complex logic of major infrastructure and manufacturing facilities.' },
                 { name: 'Bosch Rexroth', label: 'Drive & Control', text: 'Advanced hydraulic and electric drive systems that power the most complex industrial movements globally.' }
               ].map((item, i) => (
                 <div key={i} className="group">
                    <span className="text-[10px] font-mono text-inst-accent uppercase tracking-widest block mb-1">Log: {item.label}</span>
                    <h4 className="text-xl font-serif font-bold text-inst-ink mb-2">{item.name}</h4>
                    <p className="text-sm text-inst-muted leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Renewable Energy & Infrastructure */}
        <section id="energy" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                <Wind size={64} className="text-inst-accent mb-12" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">Energiewende <br />Transition</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-inst-ink leading-relaxed font-serif italic italic">
                  "The Energiewende is the largest structural reconfiguration of a national power grid in history. The engineering challenge is maintaining 99.99% reliability while transitioning to 80% weather-dependent renewables."
                </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-px bg-inst-line border border-inst-line">
                 {[
                   { title: 'Offshore Wind Clusters', text: 'Gigawatt-scale wind farms in the North Sea utilizing high-voltage DC (HVDC) transmission to minimize energy loss over hundreds of kilometers.' },
                   { title: 'Smart Grid Management', text: 'Advanced AI nodes that predict regional energy surplus and deficit, managing storage and load-balancing in real-time.' },
                   { title: 'Hydrogen Backbone', text: 'Repurposing existing gas infrastructure for the transport of green hydrogen to decarbonize heavy industrial clusters like the Ruhr valley.' },
                   { title: 'ICE High-Speed Rail', text: 'The Intercity Express (ICE) system, capable of 330 km/h, representing the pinnacle of European high-speed rail comfort and kinetic efficiency.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 bg-white hover:bg-zinc-50 transition-colors">
                      <h4 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em] mb-4">Record 0{i+1}</h4>
                      <h5 className="text-xl font-serif font-bold mb-2">{item.title}</h5>
                      <p className="text-xs text-inst-muted leading-relaxed uppercase tracking-wider">{item.text}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chemical & Materials Engineering */}
        <section id="materials" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Microscope size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Materials Excellence</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div>
                <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-2xl relative group">
                   <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800" alt="Chemical Plant" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono">Record: BASF Ludwigshafen Site</div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">BASF Verbund</h3>
                <p className="text-sm text-inst-muted leading-relaxed mb-8">The world's largest integrated chemical complex. The 'Verbund' principle ensures that the byproduct of one process becomes the raw material for the next, creating a closed-loop of extreme efficiency.</p>
             </div>

             <div className="space-y-12">
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Advanced Polymers</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Specialty Chemistry</p>
                   <p className="text-sm text-inst-muted leading-relaxed">Developing high-performance resins and polymers that define the durability of both commercial aircraft and medical technology.</p>
                </div>
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Carbon Fiber Composites</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Lightweighting Mastery</p>
                   <p className="text-sm text-inst-muted leading-relaxed">Germany leads in the industrial-scale manufacturing of carbon fiber components for the next generation of electric vehicles and aerospace structures.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Extreme Struggles */}
        <section className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-inst-ink text-white relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                <Shield className="text-inst-accent" />
                Engineering Struggles
             </h3>
             <ul className="space-y-12">
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">01/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">The Zero-Defect Burden</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"In German engineering, perfection is the standard. Achieving zero-defect manufacturing in highly complex systems requires an intense psychological and operational pressure that drives extreme automation but also massive R&D costs."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">02/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Grid Stability & Intermittency</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"The transition to renewables is a struggle of physics. Managing a grid where power input can drop 50% in hours due to weather requires the most complex control systems ever engineered."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">03/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Cyber-Physical Integration</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Industrie 4.0 is not just about software; it is about the sub-millisecond synchronization of mechanical reality with digital logic. One latency error can destroy a multi-million euro production line."</p>
                   </div>
                </li>
             </ul>
          </div>
        </section>

        {/* Multi-Disciplinary Engineering */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Institutional Integration</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Settings size={24} />, title: 'Mechatronics', desc: 'The seamless integration of high-speed mechanical systems with electronic control nodes.' },
               { icon: <Zap size={24} />, title: 'Automation Control', desc: 'Developing the PLCs and edge-computing nodes that manage entire industrial ecosystems.' },
               { icon: <Microscope size={24} />, title: 'Material Science', desc: 'Engineering the alloys and chemicals that define the durability of global industry.' },
               { icon: <Car size={24} />, title: 'Automotive Systems', desc: 'Mastering the integration of safety, engine efficiency, and aerodynamic stability.' },
               { icon: <Globe size={24} />, title: 'Smart Grids', desc: 'The digital orchestration of decentralized energy sources at a continental scale.' },
               { icon: <Layers size={24} />, title: 'Digital Twins', desc: 'Predictive modeling of physical assets to ensure zero-defect operational continuity.' }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all group">
                  <div className="text-inst-accent mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-inst-ink mb-4">{item.title}</h4>
                  <p className="text-xs text-inst-muted leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Key Specifications Summary */}
        <section className="max-w-4xl mx-auto px-8">
          <div className="bg-inst-ink text-white p-12 relative overflow-hidden">
             <div className="absolute top-8 right-8">
                <BarChart3 size={40} className="text-inst-accent opacity-20" />
             </div>
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications: Germany</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Autobahn Network", value: "13,191 Kilometers" },
                  { label: "Robot Density (per 10k)", value: "397 Units" },
                  { label: "ICE Top Op Speed", value: "330 km/h" },
                  { label: "Grid Stability (SAIDI)", value: "10-12 Minutes/Year" },
                  { label: "Offshore Wind Capacity", value: "8.5+ GW (North Sea)" },
                  { label: "Machine Tool Export Share", value: "Global Leadership" },
                  { label: "Renewable Share (Current)", value: "52% of Generation" },
                  { label: "BASF Verbund Scale", value: "10 Square Kilometers" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Germany Precision & Efficiency</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: DE-PRECISION-2026-EX</p>
      </footer>
    </div>
  );
}
