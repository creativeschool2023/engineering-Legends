import { motion } from 'motion/react';
import { Landmark, Search, Menu, ArrowLeft, Zap, Cpu, Activity, BarChart3, Compass, Shield, Wind, Microscope, Settings, Gauge, Eye, Thermometer, Mountain, ShieldAlert, Footprints, Layers, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsSwitzerland() {
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
              <a href="#tunnels" className="hover:text-inst-ink transition-colors">Tunneling</a>
              <a href="#precision" className="hover:text-inst-ink transition-colors">Precision</a>
              <a href="#energy" className="hover:text-inst-ink transition-colors">Hydropower</a>
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
            <Compass size={14} className="animate-pulse text-inst-accent" />
            <span>Institutional Exhibition Record</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Precision & <br />Subterranean — <br /><span className="serif-italic font-normal text-inst-accent">Switzerland</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Mastering the Alpine Barrier Through Absolute Precision
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              A scholarly investigation of subterranean mega-structures, <br />
              micro-mechanical tolerance boundaries, and clean alpine energy networks.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group border-double">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-30" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic text-justify">
              "Switzerland’s engineering identity is globally recognized for extreme precision, subterranean mastery, and outstanding industrial discipline. Presented with the high vertical boundaries of the Alps, Swiss engineers designed and bored the longest and deepest transit arteries on Earth. Beyond massive civil constructs, the nation serves as the absolute locus of micro-engineering—where watches, high-precision instrumentation, and biomedical process technologies are manufactured within sub-micron tolerances. Balanced with a strict ecological mandate for alpine preservation, the Swiss technical legacy represents a harmonious integration of heavy structural competence and delicate precision mechanics."
            </p>
          </div>
        </section>

        {/* Evolution of Swiss Engineering */}
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
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Alpine Railways & Tourism</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The pioneering construction of the Rigibahn (Europe's first rack railway) and mountain railways spearheaded engineering innovations to master steep inclines and harsh winter conditions.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Horizontal Integration</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Horology & High Precision</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Faced with agricultural limitations, Geneva and the Jura region specialized in precision watchmaking and microscopically tolerance-bound machining, establishing the global seal of Swiss chronometry.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">20th Century Breakthroughs</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Hydropower & First Gotthard Piercing</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">The development of mega-dams in alpine valleys coupled with the construction of the early Gotthard and Simplon railway tunnels, establishing Switzerland as the leading authority in deep rock mining.</p>
               </div>
               <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-colors">
                  <span className="text-[10px] font-mono text-inst-accent uppercase block mb-2">Modern Era (2000s - 2026)</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">The Alpine Transit & High-Tech Hub</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Inauguration of the New Railway Link through the Alps (NRLA), centering the massive Gotthard and Lötschberg Base Tunnels, coupled with advanced pharmaceutical and biomechanical fabrication.</p>
               </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-inst-line relative shadow-2xl overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800" alt="Swiss Mountain Train" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono uppercase">Record 01: Glacier Express Transit Engineering</div>
            </div>
          </div>
        </section>

        {/* Tunnel Engineering Mastery */}
        <section id="tunnels" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-start">
              <div className="md:w-1/3 sticky top-32">
                <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-4 block">Geotechnical Archive</span>
                <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink leading-tight">Subterranean <br />Supreme</h2>
                <div className="h-px w-24 bg-inst-accent mb-8" />
                <p className="text-sm text-inst-muted leading-loose mb-6">Analyzing the extreme structural dynamics of NRLA corridors—where giant Tunnel Boring Machines carved through 57 kilometers of solid, highly-pressurized Alpine granite.</p>
                <div className="border border-inst-line p-6 bg-white space-y-4">
                  <span className="text-[10px] font-mono uppercase block text-inst-accent">Featured Project</span>
                  <h4 className="text-lg font-serif font-bold text-inst-ink">Gotthard Base Tunnel</h4>
                  <p className="text-xs text-inst-muted leading-relaxed">Measuring 57.09 km in length, reaching a depth of 2,300 meters beneath the mountaintop, this is the deepest and longest rail tunnel ever executed.</p>
                </div>
              </div>

              <div className="md:w-2/3 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-inst-line border border-inst-line">
                   <div className="p-10 bg-white">
                      <Mountain size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Lötschberg Base Tunnel</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Alpine Connectivity</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Spanning 34.6 km, this critical corridor bypasses steep climb profiles, allowing freight trains of up to 4,000 tons to transit the Alps seamlessly at high speeds.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Settings size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Advanced TBM Physics</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Excavation Mechanics</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Deploying 450-meter-long Herrknecht TBMs wielding 9.5-meter cutting wheels, performing with microscopic GPS guidance and real-time seismic probing.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Wind size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Ventilation & Safety</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Atmospheric Extraction</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Dual industrial ventilation shafts in Sedrun and Faido pull toxic hot stale air and push cold oxygen. Emergency escape crossovers allow high-speed evacuation.</p>
                   </div>
                   <div className="p-10 bg-white">
                      <Layers size={20} className="text-inst-accent mb-6" />
                      <h4 className="text-xl font-serif font-bold mb-4">Water Management</h4>
                      <p className="text-xs text-inst-muted leading-relaxed mb-6 uppercase tracking-widest">Hydrological Diversion</p>
                      <p className="text-sm text-inst-muted leading-relaxed">Diverting structural groundwater through specialized warmth-isolation channels to prevent thermal damage, feeding it back as clean energy source.</p>
                   </div>
                </div>

                <div className="aspect-video overflow-hidden border border-inst-line relative group shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200" alt="Tunnel Boring Machine" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 border border-white/20 backdrop-blur-md bg-black/40 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.5em] block mb-2">Exhibition View</span>
                         <h5 className="text-white text-xl font-serif">Subterranean Shield Assembly | Gotthard Base Tunnel</h5>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precision Engineering & Manufacturing */}
        <section id="precision" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Cpu size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Precision boundaries</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-inst-ink text-white p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                  <Gauge size={160} />
               </div>
               <span className="text-[10px] font-mono text-inst-accent uppercase tracking-[0.4em] mb-6 block">Chronology & Micro-machining</span>
               <h3 className="text-4xl font-serif font-bold mb-8">Horological <br />Supremacy</h3>
               <p className="text-sm text-white/70 leading-loose mb-12">The fabrication of mechanical hairsprings (Parachrom) and escape wheels by Rolex, Patek Philippe, and Swatch Group pushes mechanical tolerance down to fractions of a micron. Utilizing modern laser interferometry and computerized wire CNC cutting, Swiss watchmakers engineer absolute chronological stability.</p>
               <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest pt-8 border-t border-white/10">
                  <div>
                     <span className="block text-inst-accent mb-1">Standard Deviation</span>
                     <span>±2 Seconds / Day</span>
                  </div>
                  <div>
                     <span className="block text-inst-accent mb-1">Scale Limits</span>
                     <span>Micro-millimeter Gear Teeth</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               {[
                 { name: 'CNC Machinery (Mikas & Tornos)', label: 'Mechanical Core Fabrication', text: 'Swiss-type automatic sliding headstock lathes, manufactured by Tornos and Mikron, dictate the highest limits of miniature component fabrication worldwide.' },
                 { name: 'Instrumentation (Leica Geosystems)', label: 'Geodetic Instrumentation', text: 'Producing the global benchmark of laser levels, digital total stations, and 3D terrain scanner arrays used to map underground geologic formations.' },
                 { name: 'Process Engineering (Lonza & Novartis)', label: 'Biotech & Pharma Craft', text: 'Designing sterile microfluidic clean-rooms and physical synthesis pathways that require absolute containment, thermal control, and particulate exclusion.' }
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

        {/* Hydropower & Energy Infrastructure */}
        <section id="energy" className="py-40 bg-zinc-50 border-y border-inst-line mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                <Zap size={64} className="text-inst-accent mb-12" />
                <h2 className="text-6xl font-serif font-black mb-8 leading-none">Alpine Kinetic <br />Reserves</h2>
                <div className="h-px w-24 bg-inst-accent mb-12" />
                <p className="text-lg text-inst-ink leading-relaxed font-serif italic">
                  "Swiss alpine hydropower serves as the batteries of central Europe. Pumped-storage facilities like Swiss Limmern and Nant de Drance coordinate gigawatts of reserve capacity in seconds, stabilizing the European grid network."
                </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-px bg-inst-line border border-inst-line">
                 {[
                   { title: 'Nant de Drance Plant', text: 'An underground cavern housing six state-of-the-art pump-turbines at 300MW each, capable of switching from full electrical pumping to full generation in under two minutes.' },
                   { title: 'Grande Dixence Dam', text: 'Standing 285 meters high, this gravity concrete dam remains the tallest of its kind globally, accumulating meltwater from 35 glaciers into massive potential energy.' },
                   { title: 'Pumped-Storage Engineering', text: 'Perfecting closed-loop water transit between high and low alpine lakes to buffer wind and solar fluctuations on the continental power grid.' },
                   { title: 'High-Voltage Swissgrid Node', text: 'An advanced extra-high-voltage transmission network monitoring, balancing, and distributing power between Germany, Italy, and France.' }
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

        {/* Other Notable Engineering Achievements */}
        <section id="notable" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Microscope size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Broad Spectrum Excellence</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             <div>
                <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden mb-12 shadow-2xl relative group">
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" alt="Swiss Lab Tech" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-4 right-4 bg-inst-bg/80 px-2 py-1 text-[8px] font-mono">Record: Basel Biocompatible Assembly</div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Biomedical Engineering</h3>
                <p className="text-sm text-inst-muted leading-relaxed mb-8">Swiss clusters near Zurich and Basel lead the world in medical device fabrication, producing advanced orthopedic implants, dental prosthetics (Straumann), and digital fluid-delivery controllers of exceptional material biocompatibility.</p>
             </div>

             <div className="space-y-12">
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">SBB Railway Signaling</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">System Integration</p>
                   <p className="text-sm text-inst-muted leading-relaxed">Pioneering ETCS Level 2 train control systems over complex interlocking routes, allowing dense railway timetables with zero collision probability.</p>
                </div>
                <div className="p-10 border border-inst-line bg-zinc-50">
                   <h4 className="text-2xl font-serif font-bold mb-4">Specialty Materials (Sika)</h4>
                   <p className="text-[10px] font-mono text-inst-accent uppercase tracking-widest mb-4">Structural Adhesion Science</p>
                   <p className="text-sm text-inst-muted leading-relaxed">Developing advanced chemical admixtures, concrete waterproofing coatings, and structural bonding solutions that hold high-pressure linings together in damp tunnels.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Extreme Challenges & Struggles */}
        <section id="challenges" className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-inst-ink text-white relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                <ShieldAlert className="text-inst-accent" />
                Extreme Geotechnical Battles
             </h3>
             <ul className="space-y-12">
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">01/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">High Geothermal Heat & Water Columns</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Deep inside the Gotthard mountain core, geologic temperatures spiked beyond 46°C. Workforces relied on highly complex active air-refrigeration grids and extreme high-pressure pumping platforms to evacuate boiling geothermic spring water bursting from the rock face."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">02/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">Squeezing Rock Formations</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"In weak sedimentary zones, mountain mass exerted extreme tectonic pressures, threatens to collapse newly bored shafts. Swiss tunnelers designed innovative sliding steel rings that compressed under pressure, absorbing the rock displacement without structural fragmentation."</p>
                   </div>
                </li>
                <li className="flex gap-8">
                   <span className="text-inst-accent font-bold font-mono text-2xl">03/</span>
                   <div>
                      <h4 className="text-xl font-serif font-bold mb-2">The High-Cost Swiss Quality Dilemma</h4>
                      <p className="text-sm text-white/60 leading-loose italic">"Operating in one of the most expensive economic regions on Earth, Swiss enterprises cannot compete on margin or quantity. High quality, strict adherence to environmental laws, and superior automation density are defensive measures required to justify high export prices."</p>
                   </div>
                </li>
             </ul>
          </div>
        </section>

        {/* What Switzerland Excels At (Global Leadership) */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Pillars of Swiss Superiority</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { title: 'Subterranean Civil Work', desc: 'Boring mega-diameter rail tunnels beneath massive rock barriers with zero-displacement precision.' },
               { title: 'Micro-Mechanical Craft', desc: 'Working in sub-micron tolerance bands for watches, microscopic gears, and precision robotic joints.' },
               { title: 'Grid-Scale Storage', desc: 'Hydraulic kinetic reserve coordination that operates as Central Europe\'s structural backup power.' },
               { title: 'Aesthetic Standards', desc: 'Formulating pristine, reliable, long-lasting machinery that holds its value over multiple decades.' }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all group">
                  <span className="text-inst-accent text-xs font-mono font-bold block mb-4">0{i+1}</span>
                  <h4 className="text-lg font-serif font-bold text-inst-ink mb-4">{item.title}</h4>
                  <p className="text-xs text-inst-muted leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Multi-Disciplinary Engineering Integration */}
        <section className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Institutional Integration</h2>
             <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Mountain size={24} />, title: 'Geomechanics', desc: 'Assessing high-overburden tectonic pressure profiles to design resilient steel and concrete linings.' },
               { icon: <Cpu size={24} />, title: 'Control Systems', desc: 'Synchronizing multi-gigawatt pumped-hydro turbine relays with high-voltage SBB grid frequency.' },
               { icon: <Settings size={24} />, title: 'Tribology', desc: 'Minimizing friction constraints inside microscopic, dry jewelled bearings in elite mechanical watches.' },
               { icon: <Microscope size={24} />, title: 'Material Science', desc: 'Synthesizing advanced biocompatible polymers and non-magnetic metals (Parachrom) for extreme environments.' },
               { icon: <Wind size={24} />, title: 'Aerology & Safety', desc: 'Modeling airflow kinematics in 57-kilometer corridors to extract high-pressure fumes within minutes.' },
               { icon: <Droplet size={24} />, title: 'Hydrology', desc: 'Capturing, channeling, and storing glacier runoff in specialized reservoirs with strict zero-leak concrete standards.' }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-inst-line bg-white hover:shadow-xl transition-all group">
                  <div className="text-inst-accent mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-inst-ink mb-4">{item.title}</h4>
                  <p className="text-xs text-inst-muted leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Modern Innovations & Insights */}
        <section className="max-w-4xl mx-auto px-8 mb-48">
          <div className="p-16 border border-inst-line bg-zinc-50 relative">
             <div className="absolute top-0 right-0 w-32 h-32 archival-grid opacity-20 pointer-events-none" />
             <h3 className="text-3xl font-serif font-bold mb-12 text-inst-ink">Insights, Solutions & Innovations (2026)</h3>
             <ul className="space-y-8">
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">01/</span>
                   <div>
                     <h5 className="text-sm font-mono uppercase font-bold text-inst-ink mb-2">Sustainable Underground Works</h5>
                     <p className="text-sm text-inst-muted leading-loose italic">"Modern 2026 Swiss initiatives reuse 100% of excavated tunnel sediment into raw materials for concrete fabrication. This avoids long-distance mineral hauling, minimizing the structural carbon footprint of heavy civil engineering."</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">02/</span>
                   <div>
                     <h5 className="text-sm font-mono uppercase font-bold text-inst-ink mb-2">Micro-Systems & Medical Robotics</h5>
                     <p className="text-sm text-inst-muted leading-loose italic">"Merging Swiss chronometry heritage with modern robotic surgery. Miniaturizable tools with active spatial feedback let surgeons handle delicate blood vessels with sub-micron surgical accuracy."</p>
                   </div>
                </li>
                <li className="flex gap-6">
                   <span className="text-inst-accent font-bold font-mono">03/</span>
                   <div>
                     <h5 className="text-sm font-mono uppercase font-bold text-inst-ink mb-2">Self-Correction Path for Young Engineers</h5>
                     <p className="text-sm text-inst-muted leading-loose italic">"To combat modern execution pressure and technical shortcuts, engineers must refuse the mindset of cheap speed. True precision is born from solid, first-principles understanding, thorough modeling, and extreme care in code compilation or material sizing. Do not rely on external tools to verify what your own mathematical rigor should guarantee."</p>
                   </div>
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
             <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Technical Specifications: Switzerland</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                {[
                  { label: "Gotthard Tunnel Length", value: "57.09 Kilometers" },
                  { label: "Gotthard Maximum Depth", value: "2,300 Meters" },
                  { label: "Lötschberg Base Tunnel", value: "34.6 Kilometers" },
                  { label: "Grande Dixence Wall Height", value: "285 Meters" },
                  { label: "Nant de Drance Capacity", value: "900 Megawatts (MW)" },
                  { label: "Chronometer Deviation Limit", value: "±2 Seconds / Day" },
                  { label: "Annual Watch Export Value", value: "CHF 26+ Billion" },
                  { label: "TBM Cutter Head Diameter", value: "9.58 Meters" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-lg font-serif font-bold text-inst-accent">{spec.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Suggested Visuals & Image Ideas */}
        <section className="max-w-4xl mx-auto px-8 mt-32">
          <div className="p-8 border border-inst-line bg-white/20">
             <h4 className="text-xs font-mono font-bold text-inst-accent uppercase tracking-widest mb-6">Archive Asset & Visual Catalog Suggestions</h4>
             <ul className="text-xs text-inst-muted space-y-3 list-disc pl-6 leading-relaxed">
               <li><strong>Asset SL-01:</strong> Architectural render of Gotthard Base Tunnel crosscut, highlighting the dual-tube lining and concrete reinforcement arches.</li>
               <li><strong>Asset SL-02:</strong> Close-up macro visual of an intricate high-end mechanical watch escapement wheel, exposing the sub-micron tolerance-beveled gearing.</li>
               <li><strong>Asset SL-03:</strong> Panoramic photograph of the Grande Dixence high-gravity concrete wall against the clean white alpine glacier background.</li>
               <li><strong>Asset SL-04:</strong> Dynamic action imagery of a heavy Alpine rail locomotive emerging cleanly from the high-speed Lötschberg Base Tunnel portal.</li>
               <li><strong>Asset SL-05:</strong> Geotechnical drawing schematic illustrating the active water diversion channels draining warm geothermal aquifers from the granite rock.</li>
               <li><strong>Asset SL-06:</strong> Real-time digital control dashboard representing the Nant de Drance extra-high-voltage grid-frequency balance loops.</li>
             </ul>
          </div>
        </section>
      </main>

      {/* Footer Meta */}
      <footer className="py-24 border-t border-inst-line text-center opacity-60">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 text-center">Institutional Engineering Legends | Exhibit: Switzerland Precision & Tunnels</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted text-center">Archival Access Code: CH-PRECISION-2026-EX</p>
      </footer>
    </div>
  );
}
