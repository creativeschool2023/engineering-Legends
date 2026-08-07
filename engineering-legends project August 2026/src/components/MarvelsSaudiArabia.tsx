import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Droplets, Zap, Activity, Info, BarChart3, Database, Globe, Filter, Flame, Thermometer, Compass, Layers, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsSaudiArabia() {
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
              <a href="#energy" className="hover:text-inst-ink transition-colors">Energy</a>
              <a href="#water" className="hover:text-inst-ink transition-colors">Water</a>
              <a href="#struggles" className="hover:text-inst-ink transition-colors">Struggles</a>
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
             <Flame size={14} className="animate-pulse" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Energy & Water — <br /><span className="serif-italic font-normal text-inst-accent">Saudi Arabia</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Mastery of the Elements
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into mega-scale petrochemical <br />
              refining and absolute desalination supremacy.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Saudi Arabia's engineering legacy is defined by the absolute transformation of its harsh geological reality. By developing the world's most sophisticated oil refining infrastructure and pioneering hybrid desalination at a continental scale, the Kingdom has solved the fundamental challenge of survival and economic dominance in an arid environment, setting global records for production and technical resilience."
            </p>
          </div>
        </section>

        {/* Evolution Section */}
        <section id="evolution" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Activity size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Evolution</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <div className="pl-6 border-l-2 border-inst-accent">
                  <h3 className="text-2xl font-serif font-bold mb-2">1930s-1940s: Initial Infrastructure</h3>
                  <p className="text-sm text-inst-muted leading-relaxed">Discovery of the Dammam No. 7 well led to the rapid establishment of initial pipelines and export terminals in Ras Tanura.</p>
               </div>
               <div className="pl-6 border-l-2 border-inst-accent">
                  <h3 className="text-2xl font-serif font-bold mb-2">1970s-1980s: Industrial Revolution</h3>
                  <p className="text-sm text-inst-muted leading-relaxed">The founding of SABIC and major expansion of Saudi Aramco established the groundwork for complex downstream petrochemical processing.</p>
               </div>
               <div className="pl-6 border-l-2 border-inst-accent">
                  <h3 className="text-2xl font-serif font-bold mb-2">2020s-2026: The Sustainability Pivot</h3>
                  <p className="text-sm text-inst-muted leading-relaxed">Transitioning toward hybrid technologies, solar desalination, and digital twin management for ultra-efficient plant operations.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line overflow-hidden shadow-2xl relative">
               <img src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800" alt="Oil Infrastructure" className="w-full h-full object-cover grayscale brightness-90 contrast-125" />
               <div className="absolute bottom-4 left-4 text-[8px] font-mono uppercase bg-inst-bg/80 px-2 py-1">Record 01: Archival Pipeline Grid</div>
            </div>
          </div>
        </section>

        {/* Refinery Engineering */}
        <section id="energy" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Institutional Record</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Refining <br />Supremacy</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Detailing the technical complexity of the Ras Tanura Refinery and the Abqaiq Processing Plant—the world's largest crude oil stabilization facility.</p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Flame size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Ras Tanura Refinery</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Complex Hydroprocessing</p>
                      <p className="text-sm text-inst-muted leading-relaxed">A massive complex incorporating atmospheric and vacuum distillation, hydrocracking, and catalytic reforming units with a capacity exceeding 550,000 barrels per day.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Activity size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Abqaiq Plant</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Crude Stabilization</p>
                      <p className="text-sm text-inst-muted leading-relaxed">The "heart" of the Saudi energy network, stabilizing up to 7 million barrels of crude oil per day through a network of 18 stabilization trains.</p>
                   </div>
                </div>

                <div className="aspect-video overflow-hidden border border-inst-line relative group shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1543167664-964093952ba5?w=1200" alt="Refinery at Night" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 border border-white/20 backdrop-blur-md bg-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.5em] block mb-2">Exhibition View</span>
                         <h5 className="text-white text-xl font-serif">Hydrocarbon Synthesis at Scale</h5>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desalination Engineering */}
        <section id="water" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Droplets size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Water Desalination</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-inst-ink text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                  <Filter size={160} />
               </div>
               <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Record: Ras Al Khair</span>
               <h3 className="text-4xl font-serif font-bold mb-8">World's Largest <br />Hybrid Plant</h3>
               <p className="text-sm text-white/70 leading-loose mb-12">Utilizing a combination of Multi-Stage Flash (MSF) distillation and Reverse Osmosis (RO) to produce 1.025 million cubic meters of water per day while generating 2,400 MW of power.</p>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-white/10">
                  <div>
                     <span className="block text-inst-accent mb-1">MSF Tech</span>
                     <span>Thermal Distillation</span>
                  </div>
                  <div>
                     <span className="block text-inst-accent mb-1">RO Tech</span>
                     <span>Membrane Filtration</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               {[
                 { name: 'Yanbu & Jubail', label: 'Massive Distribution', text: 'Integrating thousands of kilometers of high-pressure pipelines to transport desalinated water from the coast to metropolitan centers across the desert.' },
                 { name: 'Shuaiba Plant', label: 'Fuel Flexibility', text: 'Pioneering heavy fuel oil and gas flexibility within thermal desalination units to optimize operational costs.' },
                 { name: 'Al Khafji Solar', label: 'Sustainable Innovation', text: 'The world\'s first large-scale solar-powered RO plant, reducing carbon footprint of water production significantly.' }
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

        {/* Extreme Struggles */}
        <section id="struggles" className="py-40 bg-inst-ink text-white mb-48 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full archival-grid opacity-10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                <Thermometer size={64} className="text-inst-accent mb-12 animate-pulse" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">Engineering <br />Against Entropy</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-white/70 leading-relaxed font-serif italic italic">
                  "In the 50°C heat of the Arabian Gulf, every technical system is in a constant state of battle against the physics of degradation."
                </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-px bg-white/10 border border-white/10">
                 {[
                   { title: 'Extreme Corrosion', text: 'Hot seawater (45°C-50°C) is highly aggressive. Engineers must utilize titanium alloys and specialized coatings to prevent catastrophic failure of heat exchangers and pumps.' },
                   { title: 'Biofouling & Scaling', text: 'Intense biological activity in warm waters leads to rapid filter clogging. Daily management involves complex chemical dosing and automatic back-flushing systems.' },
                   { title: 'High Energy Load', text: 'Desalination is inherently energy-intensive. Integrating energy recovery devices (ERDs) is a continuous struggle to maintain sustainable production costs.' },
                   { title: 'Operational Pressure', text: 'Zero-downtime is expected. Working in protective gear under desert sun means maintenance is a test of human and mechanical endurance.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 bg-black/40 hover:bg-black/60 transition-colors">
                      <h4 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em] mb-4">Record 0{i+1}</h4>
                      <h5 className="text-xl font-serif font-bold mb-2">{item.title}</h5>
                      <p className="text-xs text-white/60 leading-relaxed uppercase tracking-wider">{item.text}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Disciplinary Engineering */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Compass size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink text-center">Multi-Disciplinary Integration</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Activity size={24} />, title: 'Chemical Process', desc: 'Managing phase transitions, chemical dosing, and refinery cracking stoichiometry at massive flow rates.' },
               { icon: <Database size={24} />, title: 'AI & Digital Control', desc: 'Utilizing digital twins and real-time AI to optimize energy-to-water ratios and predictive maintenance schedules.' },
               { icon: <Layers size={24} />, title: 'Materials & Corrosion', desc: 'Developing and monitoring advanced alloys and cathodic protection systems for high-salinity environments.' },
               { icon: <Zap size={24} />, title: 'Electrical Power', desc: 'Synchronizing multi-gigawatt power production with fluctuating desalination loads on a unified grid.' },
               { icon: <Thermometer size={24} />, title: 'Mechanical & Thermal', desc: 'Engineering robust steam turbines, multi-stage flashes, and ultra-high-pressure RO pump systems.' },
               { icon: <Building2 size={24} />, title: 'Civil & Structural', desc: 'Constructing reinforced concrete and composite structures capable of withstanding seismic loads and salt-air ingress.' }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all group">
                  <div className="text-inst-accent mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-inst-ink mb-4">{item.title}</h4>
                  <p className="text-xs text-inst-muted leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Modern Innovations Section */}
        <section id="innovations" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-zinc-100 border border-inst-line overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1510511459019-5dee997dd0dc?w=800" alt="Control Room" className="w-full h-full object-cover grayscale brightness-90" />
               <div className="absolute top-4 right-4 text-[8px] font-mono uppercase bg-inst-bg/80 px-2 py-1">Digital Archive: Control Center Delta</div>
            </div>
            <div>
               <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">2026 Innovation Log</span>
               <h2 className="text-5xl font-serif font-black mb-8 text-inst-ink leading-tight tracking-tighter">Energy Recovery <br /><span className="serif-italic font-normal">Breakthroughs</span></h2>
               <div className="space-y-6 text-sm text-inst-muted leading-loose">
                  <p>Installation of next-generation pressure exchangers in RO units has recovered up to 98% of brine energy, driving production costs to record lows.</p>
                  <p>Digital twin integration allows for real-time membrane performance analytics, extending the life of RO modules by 40% through AI-driven backwashing cycles.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Engineering Insights & Lessons */}
        <section className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-zinc-50 relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 text-inst-ink">Institutional Insights</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">01/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Engineering in extreme heat requires a fundamental shift in materials selection. Complacency in coating or alloy choice leads to catastrophic system failure within months."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">02/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"The tight synchronization of power and water (Co-generation) is the most efficient metabolic model for industrializing arid zones."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">03/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Technological resilience is not just better machines, but better digital oversight. AI is the only way to manage 5,000+ process variables in real-time."</p>
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
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Refining Capacity (Daily)", value: "550,000+ Barrels" },
                  { label: "Plant Stabilization Capacity", value: "7,000,000+ Barrels/Day" },
                  { label: "Desalination Output", value: "1,000,000+ m3/Day" },
                  { label: "Desalination Energy Recovery", value: "Up to 98% Efficiency" },
                  { label: "MSF/RO Hybrid Configuration", value: "Dual-Stage Integration" },
                  { label: "Max Operational Temp", value: "50°C (Ambient)" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Saudi Arabia Energy & Water</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: SA-ENERGY-2026-EX</p>
      </footer>
    </div>
  );
}
