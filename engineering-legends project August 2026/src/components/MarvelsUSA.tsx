import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Building2, Zap, Rocket, Cpu, Cloud, Globe, Activity, Info, BarChart3, Database, Shield, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsUSA() {
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
              <a href="#civil" className="hover:text-inst-ink transition-colors">Civil</a>
              <a href="#computing" className="hover:text-inst-ink transition-colors">Digital</a>
              <a href="#aerospace" className="hover:text-inst-ink transition-colors">Aerospace</a>
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
             <Rocket size={14} className="animate-pulse" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Innovation <br />at Scale — <br /><span className="serif-italic font-normal text-inst-accent">USA</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              The Engine of Modernity
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into the multi-disciplinary supremacy <br />
              from massive infrastructure to the sub-atomic digital frontier.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "The United States has consistently served as the global laboratory for engineering innovation. By pioneering the mass construction of skyscrapers, the absolute reliability of deep space missions, and the architectural complexity of the global internet, American engineering has defined the 20th and 21st centuries. This exhibition investigates the technical risk-taking and systematic integration that allow for innovation at an imperial scale."
            </p>
          </div>
        </section>

        {/* Evolution of American Engineering */}
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
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">19th Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Infrastructure Boom</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The expansion of the transcontinental railroad and early suspension bridges like the Brooklyn Bridge set the stage for continental-scale planning.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Mid 20th Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">The Space Age & Interstate</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The Apollo Program refined systems engineering to its peak, while the 48,000-mile Interstate Highway System reshaped the nation's civil landscape.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">21st Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Digital & Sustainable Mastery</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Transition into AI-driven process control, reusable aerospace systems, and the construction of massive data centers powering the global cloud.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1549419193-41c33c3a9f0f?w=800" alt="Apollo 11 Launch" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Saturn V Propulsion</div>
            </div>
          </div>
        </section>

        {/* Civil & Skyscrapers */}
        <section id="civil" className="py-40 bg-white/30 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-32">
               <h2 className="text-6xl font-serif font-black mb-8 text-inst-ink leading-none tracking-tighter">Civil & Structural <br />Marvels</h2>
               <div className="h-px w-24 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
               <div>
                  <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-xl">
                     <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800" alt="Golden Gate" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Foundations of Modernity</h3>
                  <p className="text-sm text-inst-muted leading-relaxed mb-8">Iconic projects like the <strong>Hoover Dam</strong> (arch-gravity structure) and the <strong>Golden Gate Bridge</strong> (aerodynamic suspension design) showcased America's ability to subdue extreme geography through structural innovation.</p>
                  <ul className="space-y-4 text-xs font-bold text-inst-muted uppercase tracking-widest">
                     <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> Hoover Dam: 6.6M Tons of Concrete</li>
                     <li className="flex items-center gap-3"><span className="w-6 h-[1px] bg-inst-accent" /> Bridge Span: 1,280 Meters</li>
                  </ul>
               </div>

               <div>
                  <div className="aspect-[3/4] bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-xl relative">
                     <img src="https://images.unsplash.com/photo-1543716091-a841c0024e4d?w=800" alt="Skyscrapers" className="w-full h-full object-cover grayscale brightness-90 contrast-110" />
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-inst-bg/50" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Vertical Engineering</h3>
                  <p className="text-sm text-inst-muted leading-relaxed">From the steel masonry of the <strong>Empire State Building</strong> to the ultra-high-strength concrete and wind-damping systems of <strong>One World Trade Center</strong>, American engineers pioneered the skyscraper through advances in vertical transport (elevators) and lateral load management.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Digital Frontier */}
        <section id="computing" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Cpu size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">The Digital Architecture</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             <div className="p-12 border border-inst-line bg-white hover:border-inst-accent transition-colors">
                <Shield className="text-inst-accent mb-6" size={24} />
                <h4 className="text-2xl font-serif font-bold mb-4 text-inst-ink">Silicon Supremacy</h4>
                <p className="text-sm text-inst-muted leading-relaxed">The birth of the transistor at Bell Labs and the rise of Silicon Valley defined the modern CPU and GPU. Companies like Intel and NVIDIA have mastered high-volume manufacturing of billions of transistors on single chips.</p>
             </div>
             <div className="p-12 border border-inst-line bg-white hover:border-inst-accent transition-colors">
                <Cloud className="text-inst-accent mb-6" size={24} />
                <h4 className="text-2xl font-serif font-bold mb-4 text-inst-ink">Infrastructure of the Internet</h4>
                <p className="text-sm text-inst-muted leading-relaxed">From <strong>ARPANET</strong> to the hyperscale data centers of 2026, American engineering handles the global routing of Petabytes of data through massive undersea fiber optics and AI-driven server management.</p>
             </div>
          </div>

          <div className="aspect-[21/9] border border-inst-line bg-zinc-100 overflow-hidden relative shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=1200" alt="Data Center" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-4">Infrastructure View</span>
                <h5 className="text-white text-4xl font-serif font-bold italic">The Physical Heart of the Cloud</h5>
             </div>
          </div>
        </section>

        {/* Aerospace Engineering */}
        <section id="aerospace" className="py-40 bg-inst-ink text-white mb-48 relative overflow-hidden">
          <div className="absolute inset-0 archival-grid opacity-10 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-32 items-center mb-32">
               <div className="md:w-1/2">
                  <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Orbital Records</span>
                  <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none tracking-tighter">Aerospace <br />Supremacy</h2>
                  <p className="text-lg text-white/70 leading-relaxed font-serif italic mb-8">
                     "From the Moon landing to the first landing of a reusable orbital rocket, America has consistently redefined the limits of physical propulsion."
                  </p>
                  <div className="h-px w-24 bg-inst-accent" />
               </div>
               <div className="md:w-1/2 grid grid-cols-2 gap-8">
                  <div className="p-8 border border-white/10 bg-white/5">
                     <h4 className="text-3xl font-serif font-bold text-inst-accent mb-2">SpaceX</h4>
                     <p className="text-[10px] font-mono uppercase tracking-widest text-white/50">Reusable Launch Systems</p>
                  </div>
                  <div className="p-8 border border-white/10 bg-white/5">
                     <h4 className="text-3xl font-serif font-bold text-inst-accent mb-2">NASA</h4>
                     <p className="text-[10px] font-mono uppercase tracking-widest text-white/50">Deep Space Exploration</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-6">
                  <h5 className="text-xl font-bold uppercase tracking-widest border-b border-inst-accent pb-2">Mars Perseverance</h5>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">Autonomous landing technology and aerial exploration on the Red Planet.</p>
               </div>
               <div className="space-y-6">
                  <h5 className="text-xl font-bold uppercase tracking-widest border-b border-inst-accent pb-2">Starship Architecture</h5>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">Multi-purpose, fully reusable launch vehicle designed for interplanetary logistics.</p>
               </div>
               <div className="space-y-6">
                  <h5 className="text-xl font-bold uppercase tracking-widest border-b border-inst-accent pb-2">ISS Supply Chain</h5>
                  <p className="text-sm text-white/60 leading-relaxed font-mono italic">Maintaining a continuous human presence in LEO through complex LSS engineering.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Struggles Section */}
        <section id="struggles" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Wind size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Struggles</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="p-12 border border-inst-line bg-zinc-50 flex flex-col justify-between">
                <div>
                   <h4 className="text-xl font-serif font-bold mb-6">Seismic & Wind Lateral Loads</h4>
                   <p className="text-sm text-inst-muted leading-loose mb-8">Building super-tall buildings in cities like New York or Chicago requires overcoming the "Vortex Shedding" effect. Engineers must design complex mass dampers and aerodynamic "blow-through" floors to prevent structural fatigue from wind oscillation.</p>
                </div>
                <div className="text-[10px] font-mono text-inst-accent uppercase font-bold tracking-widest">Physics vs. Stature</div>
             </div>
             <div className="p-12 border border-inst-line bg-zinc-50 flex flex-col justify-between">
                <div>
                   <h4 className="text-xl font-serif font-bold mb-6">Thermal & Quantum Constraints</h4>
                   <p className="text-sm text-inst-muted leading-loose mb-8">As semiconductor nodes shrink to sub-3nm, the struggle against "Electron Tunneling" and massive heat density in data centers requires constant breakthroughs in liquid cooling and GAA (Gate-All-Around) architectures.</p>
                </div>
                <div className="text-[10px] font-mono text-inst-accent uppercase font-bold tracking-widest">Entropy vs. Calculation</div>
             </div>
             <div className="p-12 border border-inst-line bg-zinc-50 flex flex-col justify-between">
                <div>
                   <h4 className="text-xl font-serif font-bold mb-6">Extreme Reliability</h4>
                   <p className="text-sm text-inst-muted leading-loose mb-8">Space hardware must operate in 0.1% tolerance in vacuum and radiation. A single component failure millions of miles from Earth is final, requiring 10x redundancy in every electronic and mechanical system.</p>
                </div>
                <div className="text-[10px] font-mono text-inst-accent uppercase font-bold tracking-widest">Distance vs. Integrity</div>
             </div>
             <div className="p-12 border border-inst-line bg-zinc-50 flex flex-col justify-between">
                <div>
                   <h4 className="text-xl font-serif font-bold mb-6">Scaling Infrastructure</h4>
                   <p className="text-sm text-inst-muted leading-loose mb-8">Scaling the internet for 5B+ users requires handling "Thundering Herd" problems and maintaining sub-100ms latency across global distances—a struggle for seamless packet routing and fiber capacity.</p>
                </div>
                <div className="text-[10px] font-mono text-inst-accent uppercase font-bold tracking-widest">Volume vs. Velocity</div>
             </div>
          </div>
        </section>

        {/* Multi-Disciplinary Engineering */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line relative">
            <div className="absolute top-0 right-0 p-8">
               <Database size={48} className="text-inst-accent opacity-10" />
            </div>
            <h3 className="text-4xl font-serif font-bold mb-12 text-inst-ink">Institutional Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
               {[
                 { title: 'Civil & Geotechnical', text: 'Managing massive earth-moving and core-drilling in complex rock formations for dams and highways.' },
                 { title: 'Aerospace & Propulsion', text: 'Developing liquid-oxygen/methane engines (Raptor) and thermal protection systems (heat shields).' },
                 { title: 'Semiconductor Science', text: 'Atomic-layer deposition and lithographic precision at the limits of physical matter.' },
                 { title: 'Software & Systems', text: 'Building the highly redundant operating systems that manage the national power grid and orbital flights.' },
                 { title: 'Materials Engineering', text: 'Developing light-weight carbon composites for aircraft and high-yield steel for suspension cables.' },
                 { title: 'AI & Control', text: 'Predictive maintenance for skyscrapers and data center load balancing using real-time machine learning.' }
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
          <div className="bg-inst-ink text-white p-12 relative">
             <div className="absolute top-8 right-8">
                <BarChart3 size={40} className="text-inst-accent opacity-20" />
             </div>
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications Summary</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Hoover Dam Height", value: "221 Meters" },
                  { label: "Falcon 9 First Stage Thrust", value: "1.7M lbs" },
                  { label: "One WTC Roof Height", value: "417 Meters" },
                  { label: "Semiconductor Process Node", value: "3nm / 2nm (R&D)" },
                  { label: "Global Internet Capacity", value: "Petabits/Sec" },
                  { label: "Highway System Length", value: "77,000+ Kilometers" },
                  { label: "Golden Gate Cable Diameter", value: "0.92 Meters" },
                  { label: "Hyper-scale Data Centers", value: "1,000+ Units" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: USA Innovation</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: US-INNOV-2026-EX</p>
      </footer>
    </div>
  );
}
