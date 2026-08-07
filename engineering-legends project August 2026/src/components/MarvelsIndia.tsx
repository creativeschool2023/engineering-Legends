import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Zap, Rocket, Cpu, Activity, BarChart3, Database, Globe, Filter, Building2, Layers, Compass, Shield, Wind, Sparkles, Microscope, Settings, Waves, Anchor, UserCheck, AlertCircle, Clock, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsIndia() {
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
              <a href="#taj-mahal" className="hover:text-inst-ink transition-colors">Taj Mahal & Medieval</a>
              <a href="#space" className="hover:text-inst-ink transition-colors">Space</a>
              <a href="#infrastructure" className="hover:text-inst-ink transition-colors">Infrastructure</a>
              <a href="#digital" className="hover:text-inst-ink transition-colors">Digital</a>
              <a href="#challenges" className="hover:text-inst-ink transition-colors">Challenges</a>
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
             <Compass size={14} className="animate-pulse" />
            <span>Institutional Exhibition Record</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
             Scale & <br />Resilience — <br /><span className="serif-italic font-normal text-inst-accent">India</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Mastery Through Frugal Innovation
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into planetary-scale digital infrastructure, <br />
              cost-effective aerospace, and the resilience of a civilizational power.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "India's engineering journey is a profound narrative of scale, resilience, and the unique philosophy of frugal innovation. From the meticulously planned cities of the Indus Valley to the global orchestration of digital public goods, Indian technical excellence thrives under constraints. By delivering world-class space missions at a fraction of global costs and building massive logistical arteries through the world's highest mountains, India defines a new paradigm of high-impact engineering that serves population-level needs with ruggedized efficiency."
            </p>
          </div>
        </section>

        {/* Taj Mahal & Medieval Innovations Feature Exhibit */}
        <section id="taj-mahal" className="max-w-6xl mx-auto px-8 mb-48 border border-inst-line bg-white p-10 md:p-14 relative shadow-2xl">
          <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-inst-accent uppercase tracking-[0.3em] bg-inst-bg border-b border-l border-inst-line">
            Special Exhibition Record: IN-MEDIEVAL-1631
          </div>

          <div className="mb-14">
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-3 block">Architectural, Hydraulic & Material Engineering</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-inst-ink mb-6 tracking-tight">The Taj Mahal & Medieval Engineering</h2>
            <p className="text-base text-inst-muted leading-relaxed max-w-4xl">
              Constructed between 1631 and 1653 AD under the Mughal Emperor Shah Jahan and chief architect Ustad Ahmad Lahori, the Taj Mahal complex in Agra represents a pinnacle of medieval Indo-Islamic civil engineering, structural geometry, hydraulic water management, metallurgy, and material science. Engineered directly along the floodplains of the Yamuna River, its realization required solving formidable geotechnical, structural, and logistical challenges without modern power machinery.
            </p>
          </div>

          {/* Section: Evolution in Medieval Times */}
          <div className="mb-16 border-t border-inst-line pt-10">
            <h3 className="text-2xl font-serif font-bold text-inst-ink mb-6 flex items-center gap-3">
              <span className="text-inst-accent font-mono text-sm">01 /</span> Evolution of Indian Engineering in Medieval Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-inst-muted leading-relaxed">
              <div className="p-6 bg-inst-bg border border-inst-line space-y-3">
                <h4 className="font-bold text-inst-ink uppercase tracking-wider text-xs font-mono">Ancient Mathematical Foundations</h4>
                <p>
                  Medieval Indian engineering drew heavily upon classical mathematical treatises such as Aryabhata's <em>Aryabhatiya</em> and Brahmagupta's astronomical texts, applying sophisticated trigonometry, geometric proportioning, and precise surveying tools (gonomons and plumb-lines) to structural layouts.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line space-y-3">
                <h4 className="font-bold text-inst-ink uppercase tracking-wider text-xs font-mono">Hydraulic Management & Stepwells</h4>
                <p>
                  Centuries of subterranean water management culminated in complex stepwell architecture (Baoris) and damming techniques along major river basins, establishing the hydraulic expertise required for imperial garden irrigation and pressurized fountain systems.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line space-y-3">
                <h4 className="font-bold text-inst-ink uppercase tracking-wider text-xs font-mono">Materials & Lime Mortar Chemistry</h4>
                <p>
                  Advancements in <em>Surkhi</em> (crushed brick aggregate) mixed with slaked lime, gum arabic, sugar syrup (jaggery), and pulse proteins created hyper-durable hydraulic mortars capable of setting underwater and bearing immense compressive loads.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line space-y-3">
                <h4 className="font-bold text-inst-ink uppercase tracking-wider text-xs font-mono">Emergence of Monumental Wonders</h4>
                <p>
                  The synthesis of indigenous temple stone-carving traditions with Persian double-dome architecture birthed monumental structures across Delhi, Agra, and Mandu, reaching its ultimate structural equilibrium in the Taj Mahal.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Structural Sub-Systems */}
          <div className="mb-16 border-t border-inst-line pt-10">
            <h3 className="text-2xl font-serif font-bold text-inst-ink mb-6 flex items-center gap-3">
              <span className="text-inst-accent font-mono text-sm">02 /</span> The Engineering Core of the Taj Mahal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 bg-inst-bg border border-inst-line">
                <span className="font-mono text-[10px] text-inst-accent uppercase font-bold block mb-2">A. Foundation Matrix</span>
                <h4 className="font-serif font-bold text-base mb-2">Subterranean Timber Wells</h4>
                <p className="text-xs text-inst-muted leading-relaxed">
                  Deep cylindrical wells were dug down to the permanent water table, lined with stone masonry, and stuffed with rubble. Heavy Ebony and Sal timber shafts were driven inside, preserved perpetually under saturated, anaerobic riverbed conditions.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line">
                <span className="font-mono text-[10px] text-inst-accent uppercase font-bold block mb-2">B. Double Dome Structural Mechanics</span>
                <h4 className="font-serif font-bold text-base mb-2">35m Outer & Inner Shell</h4>
                <p className="text-xs text-inst-muted leading-relaxed">
                  A double-shelled marble dome system—with an outer onion profile resting on a cylindrical drum and a separate inner vault—eliminated interior cavernous echo while providing structural stability and light weight.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line">
                <span className="font-mono text-[10px] text-inst-accent uppercase font-bold block mb-2">C. Seismic Bias Angle</span>
                <h4 className="font-serif font-bold text-base mb-2">Outward Minaret Inclination</h4>
                <p className="text-xs text-inst-muted leading-relaxed">
                  All four 40-meter minarets lean outward by ~0.5° from the vertical plane. This intentional distortion compensates for human optical parallax and guarantees that during earthquakes, minarets fall outward away from the central tomb.
                </p>
              </div>
              <div className="p-6 bg-inst-bg border border-inst-line">
                <span className="font-mono text-[10px] text-inst-accent uppercase font-bold block mb-2">D. Hydraulics & Lapidary</span>
                <h4 className="font-serif font-bold text-base mb-2">Purus Rahat & Parchin Kari</h4>
                <p className="text-xs text-inst-muted leading-relaxed">
                  Bullock-powered Persian wheel cascades raised river water through copper conduits into pressurized copper urns. Simultaneously, 28 varieties of semi-precious stones were inlaid into pure Makrana white marble using micro-lapidary tolerances.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Medieval Innovations & Extreme Challenges */}
          <div className="mb-16 border-t border-inst-line pt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-inst-ink mb-6 flex items-center gap-3">
                <span className="text-inst-accent font-mono text-sm">03 /</span> Medieval Innovations
              </h3>
              <ul className="space-y-4 text-xs text-inst-muted leading-relaxed">
                <li className="p-4 border border-inst-line bg-inst-bg">
                  <strong className="text-inst-ink block mb-1">Crucible Steel & Wootz Metallurgy:</strong> Production of high-carbon steel blades and structural iron tie-rods resistant to atmospheric oxidation.
                </li>
                <li className="p-4 border border-inst-line bg-inst-bg">
                  <strong className="text-inst-ink block mb-1">Earthen Ramps & Heavy Pulley Gantry:</strong> Construction of a 15-kilometer inclined earth ramp to haul 10-ton marble blocks to top elevations using oxen teams and wooden rollers.
                </li>
                <li className="p-4 border border-inst-line bg-inst-bg">
                  <strong className="text-inst-ink block mb-1">Water Pressure Siphons:</strong> Interconnected clay pipes and copper vessels maintaining uniform pressure head across 24 self-regulating garden fountains without mechanical pumps.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-inst-ink mb-6 flex items-center gap-3">
                <span className="text-inst-accent font-mono text-sm">04 /</span> Extreme Engineering Challenges
              </h3>
              <ul className="space-y-4 text-xs text-inst-muted leading-relaxed">
                <li className="p-4 border border-inst-line bg-zinc-50">
                  <strong className="text-inst-ink block mb-1">Silt Migration & Riverbed Sinking:</strong> Building a 220,000-ton stone structure directly on river silt required constant hydrostatic testing and massive masonry well foundations to prevent differential settling.
                </li>
                <li className="p-4 border border-inst-line bg-zinc-50">
                  <strong className="text-inst-ink block mb-1">Logistical Transport over 300+ Miles:</strong> Over 20,000 tons of translucent white marble had to be quarried in Makrana, Rajasthan, and transported over 300 miles using specialized bullock carts and river barges.
                </li>
                <li className="p-4 border border-inst-line bg-zinc-50">
                  <strong className="text-inst-ink block mb-1">Climatic Weathering & Scour:</strong> Protecting the base plinth against annual monsoon floods of the Yamuna River required constructing a continuous red sandstone riverfront terrace wall.
                </li>
              </ul>
            </div>
          </div>

          {/* Section: Technical Specifications Grid */}
          <div className="bg-inst-ink text-white p-8 md:p-10 mb-8">
            <h4 className="text-xs font-mono font-bold text-inst-accent uppercase tracking-[0.4em] mb-6">Technical Specifications: Taj Mahal Complex</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 text-xs font-mono">
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Plinth Dimensions</span>
                <span className="text-base font-bold font-serif text-white">95.4m x 95.4m x 5.7m</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Total Height</span>
                <span className="text-base font-bold font-serif text-white">73 Meters (240 ft)</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Outer Dome Height</span>
                <span className="text-base font-bold font-serif text-white">35.0 Meters</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Minaret Height</span>
                <span className="text-base font-bold font-serif text-white">40.0 Meters (Leaned 0.5°)</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Primary Material</span>
                <span className="text-base font-bold font-serif text-white">Makrana Pure White Marble</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Masonry Mortar</span>
                <span className="text-base font-bold font-serif text-white">Surkhi Hydraulic Lime Mortar</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Labor Workforce</span>
                <span className="text-base font-bold font-serif text-white">20,000+ Artisans & Engineers</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Timeline</span>
                <span className="text-base font-bold font-serif text-white">1631–1653 AD (22 Years)</span>
              </div>
              <div className="border-b border-white/10 pb-2">
                <span className="text-white/50 block text-[10px] uppercase">Historical Cost</span>
                <span className="text-base font-bold font-serif text-white">~32M Rupees (~$1B+ USD Today)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution of Indian Engineering */}
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
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Ancient Foundations</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Civilizational Planning</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The Indus Valley Civilization (c. 3300–1300 BCE) pioneered urban drainage systems, standardized brick dimensions, and the 'Great Bath'—a masterpiece of hydraulic waterproofing.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Medieval & Colonial</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Fortification & Water Management</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The development of the Grand Trunk Road and intricate stepwells (Baoris) for groundwater conservation, followed by the establishment of the world's largest railway network during the 19th century.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Modern Era (1950s - 2026)</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Atomic, Space & Digital</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">From the building of mega-dams like Bhakra-Nangal to the IT revolution of the 1990s and the current era of Digital Public Infrastructure (UPI, Aadhaar) and massive highway connectivity.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1524491991490-b3c669143c61?w=800" alt="Taj Mahal Engineering" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Archival Civilizational Geometry</div>
            </div>
          </div>
        </section>

        {/* Space Engineering Excellence */}
        <section id="space" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Orbital Archive</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Frugal <br />Aerospace</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose">Analyzing ISRO's paradigm-shifting efficiency in planetary exploration and launch vehicle reliability.</p>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Rocket size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Chandrayaan-3</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Lunar South Pole Mastery</p>
                      <p className="text-sm text-inst-muted leading-relaxed">The world's first successful landing at the Lunar South Pole, executed with a budget significantly lower than several commercial cinematic productions.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Zap size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Mangalyaan (MOM)</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Mars Arrival Efficiency</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Reaching Mars in the first attempt using a gravity-assist trajectory that optimized propellant consumption for a light-lift PSL vehicle.</p>
                   </div>
                </div>

                <div className="aspect-video overflow-hidden border border-inst-line relative group shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200" alt="Saturn Launch" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 border border-white/20 backdrop-blur-md bg-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.5em] block mb-2">Exhibition View</span>
                         <h5 className="text-white text-xl font-serif">Sriharikota Range | Propulsion Control</h5>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Civil Engineering */}
        <section id="infrastructure" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Building2 size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Mega-Connectivity</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-inst-ink text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                  <Layers size={160} />
               </div>
               <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Record: Chenab Bridge</span>
               <h3 className="text-4xl font-serif font-bold mb-8 italic">Highest Rail <br />Arch Architecture</h3>
               <p className="text-sm text-white/70 leading-loose mb-12">Spanning the Chenab River at 359 meters above the bed, this structural masterpiece utilizes a massive steel arch designed to withstand winds of 266 km/h and massive seismic loads in the Himalayas.</p>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-white/10">
                  <div>
                     <span className="block text-inst-accent mb-1">Height</span>
                     <span>359m (Tallest)</span>
                  </div>
                  <div>
                     <span className="block text-inst-accent mb-1">Scale</span>
                     <span>1.3km Length</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               {[
                 { name: 'Atal Setu (MTHL)', label: 'Maritime Logistics', text: 'India\'s longest sea bridge, integrating advanced orthotropic steel deck (OSD) technology for maximum span and minimal weight.' },
                 { name: 'Dedicated Freight Corridors', label: 'Heavy Rail Expansion', text: 'Massive logistical arteries designed exclusively for fast-moving freight, capable of carrying double-stack containers.' },
                 { name: 'Metro Grid Expansion', label: 'Urban Fluidity', text: 'Executing metro systems in over 20 cities simultaneously, integrating tunneling with heritage preservation at record speeds.' }
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

        {/* IT & Digital Engineering */}
        <section id="digital" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                <Database size={64} className="text-inst-accent mb-12" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">Digital <br />Public Goods</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-inst-ink leading-relaxed font-serif italic italic">
                  "India has engineered the world's most sophisticated digital rail—the India Stack. UPI and Aadhaar represent a shift where digital infrastructure is a fundamental public utility, not just a private product."
                </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-px bg-inst-line border border-inst-line">
                 {[
                   { title: 'Unified Payments Interface', text: 'A real-time payment system that handles over 10 billion transactions monthly, integrating hundreds of banks via a single open-source protocol.' },
                   { title: 'Aadhaar (ID Stack)', text: 'The world\'s largest biometric ID system, providing the digital backbone for subsidy delivery and financial inclusion at a population scale.' },
                   { title: 'Open Network for Digital Commerce', text: 'An unbundled e-commerce protocol that allows direct interoperability between any buyer and seller, democratizing digital retail.' },
                   { title: 'COWIN Logistics', text: 'A cloud-native platform that managed the orchestration of 2 billion vaccine doses with real-time digital certification.' }
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

        {/* Defense & Aerospace Engineering */}
        <section id="defense" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Shield size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Strategic Sovereignty</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div>
                <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-2xl relative group">
                   <img src="https://images.unsplash.com/photo-1544200175-ca6e80a7b323?w=800" alt="Submarine" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono">Record: INS Vikrant Platform</div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">INS Vikrant</h3>
                <p className="text-sm text-inst-muted leading-relaxed mb-8">India's first indigenously designed and built aircraft carrier. A floating city powered by 4 gas turbines, integrating over 2,000 kilometers of cabling and a complex STOBAR aviation deck.</p>
             </div>

             <div className="space-y-12">
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">BrahMos Missile</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Supersonic Ballistics</p>
                   <p className="text-sm text-inst-muted leading-relaxed">The world's fastest supersonic cruise missile, capable of Mach 3 speeds and highly precise terminal guidance, launchable from land, sea, and air.</p>
                </div>
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Tejas LCA</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Advanced Composites</p>
                   <p className="text-sm text-inst-muted leading-relaxed">A light combat aircraft featuring a compound delta wing design and extensive use of local carbon-fiber composites for superior agility and reduced signature.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Extreme Challenges & Struggles */}
        <section id="challenges" className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-inst-ink text-white relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                <AlertCircle className="text-inst-accent" />
                Engineering Struggles
             </h3>
             <ul className="space-y-12">
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">01/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Terrain vs Logistics</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Building the Atal Tunnel at 10,000 feet required engineers to bore through the Serial Nala fault zone—a section of geological instability where water inflow threatened to halt progress for years. Precision was a survival requirement."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">02/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Resource Frugality</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"In Indian engineering, constraints are characters in the story. ISRO's ability to reach Mars was a test of optimizing every gram of weight and every millisecond of burn, as there was no budget for failure or over-design."</p>
                   </div>
                </li>
                <li className="flex gap-8 border-t border-white/10 pt-12">
                   <span className="text-inst-accent font-bold font-mono text-2xl">03/</span>
                   <div className="w-full">
                      <h4 className="text-xl font-serif font-bold mb-2 text-inst-accent">The 2026 Developer Dilemma</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                         <div className="p-6 bg-zinc-900 border border-white/5">
                            <Clock size={20} className="text-inst-accent mb-4" />
                            <h5 className="text-sm font-bold uppercase mb-2">Execution Pressure</h5>
                            <p className="text-xs text-white/50 leading-relaxed">Software engineers face an era of 'Hyper-Agile' delivery where unrealistic deadlines and 70-hour work weeks impact the structural integrity of the code bases they build.</p>
                         </div>
                         <div className="p-6 bg-zinc-900 border border-white/5">
                            <HeartPulse size={20} className="text-inst-accent mb-4" />
                            <h5 className="text-sm font-bold uppercase mb-2">The Mental Load</h5>
                            <p className="text-xs text-white/50 leading-relaxed">A growing skills gap between academic theory and industry reality creates a high mental load for early-career engineers, who must 're-learn' engineering in high-pressure environments.</p>
                         </div>
                      </div>
                   </div>
                </li>
             </ul>
          </div>
        </section>

        {/* Engineering Insights & Solutions */}
        <section className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-zinc-50 relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 text-inst-ink">Institutional Insights: Resilience</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">01/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"True innovation doesn't require infinite resources; it requires infinite imagination. India's history of 'Jugaad' has evolved into 'Frugal Engineering'—a systematic methodology for high-performance, low-cost utility."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">02/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"For the modern Indian engineer: Ownership of your technical dignity is the only solution to burnout. Focus on mastery of fundamentals, advocate for realistic architectural timelines, and build for reliability over mere feature-velocity."</p>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">03/</span>
                   <p className="text-sm text-inst-muted leading-loose italic">"Scale is India's most difficult and rewarding teacher. When you build for a billion people, every edge case becomes a common occurrence; your systems must be inherently self-healing."</p>
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
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications: India</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Chenab Bridge Height", value: "359 Meters" },
                  { label: "Atal Setu Length", value: "21.8 Kilometers" },
                  { label: "UPI Monthly Trans", value: "11.7+ Billion (Avg)" },
                  { label: "Mangalyaan Cost", value: "~$74 Million (Record)" },
                  { label: "INS Vikrant Power", value: "88 MW (Total)" },
                  { label: "Hwy Construction Rate", value: "37 km / day (Peak)" },
                  { label: "Chandrayaan-3 Payload", value: "3,900 kg (Combined)" },
                  { label: "Aadhaar Bio Nodes", value: "1.3+ Billion Identities" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: India Scale & Resilience</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: IN-RESILIENCE-2026-EX</p>
      </footer>
    </div>
  );
}
