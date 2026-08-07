import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Anchor, Compass, Zap, Activity, Info, BarChart3, Database, Globe, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsSouthKorea() {
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
              <a href="#scale" className="hover:text-inst-ink transition-colors">Scale</a>
              <a href="#disciplines" className="hover:text-inst-ink transition-colors">Disciplines</a>
              <a href="#innovations" className="hover:text-inst-ink transition-colors">Innovations</a>
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
             <Anchor size={14} className="animate-bounce" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Masters of <br />
            Maritime — <span className="serif-italic font-normal text-inst-accent">South Korea</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Maritime Engineering Supremacy
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into the structural integrity <br />
              and propulsion mastery of modern oceanic giants.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "South Korea has emerged as the global nexus for complex maritime engineering. By synchronizing naval architecture with advanced robotics and smart manufacturing, the nation consistently produces the world's largest container ships, tankers, and highly complex floating production facilities, setting the global benchmark for maritime technical excellence."
            </p>
          </div>
        </section>

        {/* Evolution of Shipbuilding */}
        <section id="evolution" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Activity size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Shipbuilding Evolution</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">The Rise of Giant Yards</h3>
              <ul className="space-y-6 text-sm text-inst-muted leading-relaxed">
                 <li><span className="text-inst-accent font-bold">1970s Expansion /</span> Rapid industrialization led to the founding of mega-yards in Ulsan, Geoje, and Yeongam, establishing a global lead in high-volume, high-complexity construction.</li>
                 <li><span className="text-inst-accent font-bold">The Big Three /</span> HD Hyundai Heavy Industries (HHI), Samsung Heavy Industries (SHI), and Hanwha Ocean (formerly DSME) dominate the global order book for high-value vessels.</li>
                 <li><span className="text-inst-accent font-bold">Technological Shift /</span> From simple bulk carriers to LNG tankers, eco-ships, and the world's most advanced autonomous vessel control systems.</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] bg-zinc-100 border border-inst-line overflow-hidden shadow-2xl relative group">
               <img src="https://images.unsplash.com/photo-1540939801402-99042b41566b?w=800" alt="Shipyard" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
               <div className="absolute top-4 right-4 text-[8px] font-mono uppercase bg-inst-bg/80 px-2 py-1">Fig 01: Mega-Gantry Crane Operations</div>
            </div>
          </div>
        </section>

        {/* Scale of Maritime Engineering */}
        <section id="scale" className="py-40 border-y border-inst-line bg-white/30 mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-24">
              <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
                <Ship size={24} />
              </div>
              <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink text-center">The Scale of Giants</h2>
              <div className="h-px w-16 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="p-12 border border-inst-line bg-white hover:border-inst-accent transition-colors">
                  <h4 className="text-2xl font-serif font-bold mb-6">Ultra Large Container Vessels (ULCVs)</h4>
                  <p className="text-sm text-inst-muted leading-loose">Engineering vessels exceeding 400 meters in length and capable of carrying over 24,000 TEU (Twenty-foot Equivalent Units). These ships require unprecedented hull girder strength and torsional rigidity to withstand oceanic stress.</p>
               </div>
               <div className="p-12 border border-inst-line bg-white hover:border-inst-accent transition-colors">
                  <h4 className="text-2xl font-serif font-bold mb-6">Mega Cruise Ships & Floating Cities</h4>
                  <p className="text-sm text-inst-muted leading-loose">The design of structures like the "Icon of the Seas" class involves complex naval architecture to manage stability, weight distribution, and redundant life-safety systems for thousands of passengers.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Core Engineering Disciplines */}
        <section id="disciplines" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              {/* @ts-ignore */}
              <Compass size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Core Engineering Disciplines</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-inst-line border border-inst-line">
            {[
              { title: 'Naval Architecture', text: 'Hydrodynamic optimization of hull forms using advanced CFD to reduce drag and improve fuel efficiency.' },
              { title: 'Propulsion Systems', text: 'Installation of massive two-stroke engines exceeding 100,000 HP, often paired with dual-fuel (LNG/Ammonia) capability.' },
              { title: 'Materials Science', text: 'Specialized steel alloys for cryogenic LNG storage and high-tensile hull plating for extreme fatigue resistance.' },
              { title: 'Vibration Control', text: 'Sophisticated damping technologies to ensure structural integrity and passenger comfort in rough sea conditions.' },
              { title: 'Automation & AI', text: 'Digital twin integration for predictive maintenance and AI-driven route optimization for global logistics.' },
              { title: 'Electrical Systems', text: 'Managing massive power generation needs, including HVSC (High Voltage Shore Connection) for zero-emission port stays.' }
            ].map((item, i) => (
              <div key={i} className="bg-inst-bg p-8 hover:bg-white transition-colors duration-500">
                <h4 className="text-[10px] font-mono font-bold text-inst-accent mb-4">Record 0{i+1}</h4>
                <h3 className="text-lg font-serif font-bold text-inst-ink mb-4">{item.title}</h3>
                <p className="text-xs text-inst-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Innovations */}
        <section id="innovations" className="py-40 bg-inst-ink text-white mb-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <Anchor size={400} strokeWidth={1} />
          </div>
          
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="text-center mb-32">
              <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block text-white/60">Digital & Green Frontiers</span>
              <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none tracking-tighter">Modern Innovations</h2>
              <div className="h-px w-24 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl font-serif font-bold mb-8 text-inst-accent">Alternative Fuel Systems</h3>
                <ul className="space-y-6 text-sm text-white/70 leading-relaxed font-mono">
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Leadership in LNG-fueled container and tanker ships.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Development of Ammonia and Methanol ready engine architectures.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> On-ship carbon capture and storage (CCS) R&D.</li>
                </ul>
              </div>

              <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl font-serif font-bold mb-8 text-inst-accent">Smart & Autonomous</h3>
                <ul className="space-y-6 text-sm text-white/70 leading-relaxed font-mono">
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> "HiNAS" AI system for collision avoidance and automatic navigation.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Digital twin modeling of full-ship systems for remote diagnosis.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Unmanned engine room monitoring using localized IoT sensors.</li>
                </ul>
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
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink text-center">Engineering Insights</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
               <div>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Gigantic Multi-Disciplinary Integration</h4>
                  <p className="text-sm text-inst-muted leading-loose">Shipbuilding represents the apex of large-scale manufacturing. Every vessel is a custom engineering project requiring the synchronization of thousands of suppliers and precision assembly of millions of components.</p>
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Reliability Under Extreme Conditions</h4>
                  <p className="text-sm text-inst-muted leading-loose">Designing for a 25-year lifespan in the most corrosive environment on Earth (salt water) while maintaining 99% operational uptime is a triumph of materials and maintenance engineering.</p>
               </div>
            </div>

            <div className="bg-zinc-50 border border-inst-line p-12">
               <h4 className="text-xl font-serif font-bold mb-8 text-inst-ink">Technical Comparisons</h4>
               <div className="space-y-8">
                  <div>
                     <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">Manufacturing Precision</h5>
                     <p className="text-xs text-inst-muted leading-relaxed">While other nations focus on smaller high-tech vessels, South Korea excels at technical precision at an industrial scale, producing mega-vessels with the same tolerance levels as high-precision automotive lines.</p>
                  </div>
                  <div>
                     <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">Sustainable Engineering</h5>
                     <p className="text-xs text-inst-muted leading-relaxed">Early pivots toward LNG and green methanol have given Korean yards a technical moat in the transition to decarbonized global shipping.</p>
                  </div>
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
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Key Specifications Summary</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "ULCV Capacity", value: "24,000+ TEU" },
                  { label: "Mega Ship Length", value: "400+ Meters" },
                  { label: "Main Engine Output", value: "100,000+ HP" },
                  { label: "LNG Tank Capacity", value: "174,000+ Cubic Meters" },
                  { label: "Cruise Passenger Capacity", value: "7,000+ Personnel" },
                  { label: "Deadweight Tonnage (DWT)", value: "300,000+ Tons" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Korea Maritime</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: KR-MARITIME-2026-EX</p>
      </footer>
    </div>
  );
}
