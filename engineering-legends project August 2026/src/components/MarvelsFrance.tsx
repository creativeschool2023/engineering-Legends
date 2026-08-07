import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Zap, Rocket, Train, Activity, Info, BarChart3, Database, Globe, Filter, Building2, Layers, Compass, Shield, Wind, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsFrance() {
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
              <a href="#aerospace" className="hover:text-inst-ink transition-colors">Aerospace</a>
              <a href="#nuclear" className="hover:text-inst-ink transition-colors">Nuclear</a>
              <a href="#transport" className="hover:text-inst-ink transition-colors">Transport</a>
              <a href="#structural" className="hover:text-inst-ink transition-colors">Structural</a>
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
             <Sparkles size={14} className="animate-pulse" />
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
             Precision & <br />Elegance — <br /><span className="serif-italic font-normal text-inst-accent">France</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              The Architecture of Innovation
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into global aerospace dominance, <br />
              nuclear sovereignty, and the record-breaking velocity of the TGV.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "France's engineering legacy is a masterclass in the integration of industrial scale and aesthetic refinement. By pioneering the highest high-speed rail velocities in Europe, maintaining absolute nuclear energy independence, and leading the world's most complex commercial aviation consortiums, French engineers have refined a unique philosophy where performance and elegance are inseparable. This exhibition archives the technical risk-taking and precision required to sustain global leadership across the most sensitive engineering domains."
            </p>
          </div>
        </section>

        {/* Evolution of French Engineering */}
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
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Iron & Industrialization</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The construction of the Eiffel Tower (1889) redefined the limits of wrought iron engineering, setting a global precedent for vertical structural mastery and artistic integration.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Mid 20th Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Post-War Nuclear & TGV</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The "Messmer Plan" initiated a total pivot toward nuclear energy, while the development of the TGV (Train à Grande Vitesse) proved the viability of high-speed overland logistics.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">21st Century</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Airbus & Sustainable Space</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Consolidating global aerospace through Airbus and Ariane 6, while pioneering EPR (European Pressurized Reactor) technology for the next generation of energy.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1431274172761-fca41d93e114?w=800" alt="Eiffel Tower Detail" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Archival Iron Lattice</div>
            </div>
          </div>
        </section>

        {/* Aerospace Engineering */}
        <section id="aerospace" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Aeronautical Record</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Aerial <br />Hegemony</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Analyzing the structural complexity of the Airbus consortium and the ballistic precision of the Ariane rocket family.</p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Rocket size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Airbus A380</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Double-Deck Structural Logic</p>
                      <p className="text-sm text-inst-muted leading-relaxed">The world's largest passenger aircraft, requiring the most complex multi-national supply chain integration and the mastering of composite wing aerodynamics.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Zap size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Ariane 6</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Heavy-Lift Precision</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Utilizing the Vulcain 2.1 engine, Ariane 6 represents a total modernization of Europe's access to space, balancing cost-efficiency with absolute orbital reliability.</p>
                   </div>
                </div>

                <div className="aspect-video overflow-hidden border border-inst-line relative group shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1544015759-45053073740e?w=1200" alt="Ariane Launch" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 border border-white/20 backdrop-blur-md bg-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.5em] block mb-2">Exhibition View</span>
                         <h5 className="text-white text-xl font-serif">Kourou Launch Complex | French Guiana</h5>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuclear Power Leadership */}
        <section id="nuclear" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Zap size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Nuclear Sovereignty</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-inst-ink text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                  <Database size={160} />
               </div>
               <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Record: EPR Technology</span>
               <h3 className="text-4xl font-serif font-bold mb-8">Generation III+ <br />Reactor Mastery</h3>
               <p className="text-sm text-white/70 leading-loose mb-12">The European Pressurized Reactor (EPR) is the most advanced PWR currently deployed, featuring quadruple redundancy in safety systems and a massive "core catcher" for total containment.</p>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-white/10">
                  <div>
                     <span className="block text-inst-accent mb-1">Redundancy</span>
                     <span>4x Train Safety</span>
                  </div>
                  <div>
                     <span className="block text-inst-accent mb-1">Output</span>
                     <span>1,650 MWe / Unit</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               {[
                 { name: 'Fuel Cycle Management', label: 'La Hague Site', text: 'France leads the world in nuclear fuel reprocessing, extracting uranium and plutonium from spent fuel to close the energy cycle.' },
                 { name: 'Flamanville 3', label: 'Technical Complexity', text: 'A flagship EPR project demonstrating the extreme civil engineering required for high-pressure containment vessels.' },
                 { name: 'SMR Innovation', label: 'Nuward Project', text: 'Developing Small Modular Reactors to decentralize nuclear power and decarbonize heavy industry by 2030.' }
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

        {/* High-Speed Rail - TGV */}
        <section id="transport" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                <Train size={64} className="text-inst-accent mb-12" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">Velocity <br />Record</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-inst-ink leading-relaxed font-serif italic italic">
                  "The TGV is not merely a train, but a highly synchronized kinetic object. At 320 km/h, the engineering challenge shifts from propulsion to aerodynamic stability and power delivery."
                </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-px bg-inst-line border border-inst-line">
                 {[
                   { title: 'V150 Record', text: 'Attaining 574.8 km/h in 2007, the TGV holds the world record for conventional wheeled rail vehicles, pushing the limits of ballast and pantograph geometry.' },
                   { title: 'Articulated Boogies', text: 'A unique design where cars share a wheel set, significantly reducing weight, improving vibration damping, and enhancing safety in rare derailment scenarios.' },
                   { title: 'Pantograph Dynamics', text: 'Managing the connection to 25kV overhead lines at extreme speeds, requiring sophisticated active tensioning and arc prevention systems.' },
                   { title: 'Signaling Hierarchy', text: 'Utilizing TVM 430, a cab-signaling system that replaces trackside lights with real-time digital speed commands as speeds exceed human reaction times.' }
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

        {/* Structural Engineering - Millau Viaduct & Channel Tunnel */}
        <section id="structural" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Building2 size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Structural Supremacy</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div>
                <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-2xl relative group">
                   <img src="https://images.unsplash.com/photo-1549403301-4be647796d11?w=800" alt="Millau Viaduct" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono">Record: Tallest Bridge (343m)</div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Millau Viaduct</h3>
                <p className="text-sm text-inst-muted leading-relaxed mb-8">An engineering masterpiece by Michel Virlogeux, utilizing a cable-stayed design to cross the Tarn Valley. The pylon peaks surpass the Eiffel Tower in height, requiring extreme tolerance for thermal expansion and wind oscillation.</p>
             </div>

             <div className="space-y-12">
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Channel Tunnel</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Undersea Geotechnical Challenge</p>
                   <p className="text-sm text-inst-muted leading-relaxed">A 50km link under the English Channel, requiring three separate tunnels bored through Chalk Marl. The synchronization of French and British boring machines at the midpoint remains a pinnacle of survey precision.</p>
                </div>
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Eiffel Tower</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Ballistic Iron Construction</p>
                   <p className="text-sm text-inst-muted leading-relaxed">7,300 tons of puddled iron held together by 2.5 million rivets. Gustave Eiffel's design proved that wind resistance is a function of transparency, not just mass.</p>
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
                      <h4 className="text-xl font-serif font-bold mb-2">Aesthetic vs Structural Integrity</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"In French engineering, beauty is a constraint. Designing the Millau Viaduct required the structural calculation of a 2.5km deck that looks as though it is floating on clouds, balancing massive tension with visual lightness."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">02/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Nuclear Safety & Public Perception</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Maintaining 56 reactors requires more than just mechanical oversight; it is a struggle of absolute transparency and fail-safe psychology in a highly dense European landscape."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">03/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">International Integration Friction</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Airbus is an engineering miracle of diplomacy. Building a wing in the UK, a fuselage in Germany, and assembling in Toulouse requires sub-millimeter data synchronization across four borders."</p>
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
               { icon: <Rocket size={24} />, title: 'Aerospace Systems', desc: 'Integration of fly-by-wire controls, composite aerodynamics, and cryogenic propulsion.' },
               { icon: <Zap size={24} />, title: 'Nuclear Physics', desc: 'Managing neutron flux, thermal-hydraulics, and passive containment for absolute energy security.' },
               { icon: <Building2 size={24} />, title: 'Civil & Geotechnical', desc: 'Mastering undersea boring and cable-stayed bridge dynamics at continental scales.' },
               { icon: <Train size={24} />, title: 'High-Speed Rail', desc: 'Synchronizing kinetic energy, catenary power, and digital signaling for 300+ km/h safe ops.' },
               { icon: <Compass size={24} />, title: 'Precision Instruments', desc: 'Developing the high-accuracy sensors and controls that power Dassault fighters and Ariane rockets.' },
               { icon: <Wind size={24} />, title: 'Aero-Dynamics', desc: 'The study of fluid logic in both commercial aviation and the wind-swept decks of the Millau Viaduct.' }
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
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications: France</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "TGV Record Speed", value: "574.8 km/h" },
                  { label: "Millau Viaduct Height", value: "343 Meters" },
                  { label: "Nuclear Contribution", value: "70% of Grid" },
                  { label: "Airbus A380 Capacity", value: "Up to 853 Passengers" },
                  { label: "Ariane 6 GTO Payload", value: "11.5 Tons" },
                  { label: "Channel Tunnel Length", value: "50.45 Kilometers" },
                  { label: "Eiffel Tower Iron Count", value: "7,300 Tons" },
                  { label: "EPR Power Output", value: "1,650 MWe" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: France Precision & Elegance</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: FR-PRECISION-2026-EX</p>
      </footer>
    </div>
  );
}
