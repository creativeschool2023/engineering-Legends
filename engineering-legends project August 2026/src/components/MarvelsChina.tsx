import { motion } from 'motion/react';
import { Landmark, Compass, Search, Menu, ArrowLeft, Building2, Zap, Train, Rocket, Cpu, BarChart3, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function MarvelsChina() {
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
              <a href="#power" className="hover:text-inst-ink transition-colors">Power</a>
              <a href="#mechanical" className="hover:text-inst-ink transition-colors">Mechanical</a>
              <a href="#aerospace" className="hover:text-inst-ink transition-colors">Aerospace</a>
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
            <span>Digital Exhibition Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Engineering <br />
            Marvels — <span className="serif-italic font-normal text-inst-accent">China</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-medium mb-4">
              Scale, Precision & Innovation
            </p>
            <p className="text-sm text-inst-muted leading-loose uppercase tracking-[0.2em]">
              An investigation into the technical supremacy <br />
              of 21st-century megastructures and systems.
            </p>
          </motion.div>
        </header>

        {/* Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Exhibit Overview</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "China's emergence as a global engineering superpower is defined by the sheer scale of its infrastructure and the rapid assimilation of high-precision technologies. From the world's longest sea-crossing bridges to the most powerful high-speed rail networks, these projects represent a new frontier in structural, mechanical, and aerospace engineering."
            </p>
          </div>
        </section>

        {/* Civil Engineering */}
        <section id="civil" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Building2 size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Civil Engineering</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Hong Kong–Zhuhai–Macau Bridge</h3>
                <ul className="space-y-4 text-sm text-inst-muted leading-relaxed">
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">01/</span> The world's longest bridge-tunnel sea crossing, spanning 55 kilometers across the Pearl River Delta.</li>
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">02/</span> Incorporates a 6.7km undersea tunnel and four artificial islands to maintain navigation channels for deep-sea vessels.</li>
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">03/</span> Designed for a 120-year service life, capable of withstanding magnitude 8 earthquakes and super typhoons.</li>
                </ul>
              </div>
              <div className="order-1 md:order-2 aspect-video bg-zinc-100 border border-inst-line overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1543851759-4d693f8bed7e?w=800" alt="HZMB" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="aspect-video bg-zinc-100 border border-inst-line overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" alt="Three Gorges" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-inst-ink">Three Gorges & Baihetan Dams</h3>
                <ul className="space-y-4 text-sm text-inst-muted leading-relaxed">
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">01/</span> Three Gorges Dam remains the world's largest power station by installed capacity (22,500 MW).</li>
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">02/</span> Baihetan Dam features the world's first 1,000 MW hydro-turbine units, representing a massive leap in large-scale generator technology.</li>
                  <li className="flex gap-4"><span className="text-inst-accent font-bold">03/</span> Complex geological engineering overcoming seismic risks in mountainous terrain using massive concrete arch structures.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Power & Electrical */}
        <section id="power" className="py-40 border-y border-inst-line bg-white/30 mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-24">
              <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
                <Zap size={24} />
              </div>
              <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Power & Electrical</h2>
              <div className="h-px w-16 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 border-l border-inst-line bg-white hover:border-inst-accent transition-colors">
                <h4 className="text-xl font-serif font-bold mb-4">Ultra-High Voltage (UHV)</h4>
                <p className="text-xs text-inst-muted leading-loose uppercase tracking-wider mb-6">Long-Range Efficiency</p>
                <p className="text-sm text-inst-muted leading-relaxed">Transmission of power at 800kV (DC) and 1000kV (AC) across thousands of kilometers with minimal energy loss, linking Western energy hubs to Eastern load centers.</p>
              </div>
              <div className="p-8 border-l border-inst-line bg-white hover:border-inst-accent transition-colors">
                <h4 className="text-xl font-serif font-bold mb-4">Hydropower Integration</h4>
                <p className="text-xs text-inst-muted leading-loose uppercase tracking-wider mb-6">Clean Energy Gigawatts</p>
                <p className="text-sm text-inst-muted leading-relaxed">Systematic integration of the Yangtze and Yellow River hydro-resources into a unified national grid using advanced frequency control systems.</p>
              </div>
              <div className="p-8 border-l border-inst-line bg-white hover:border-inst-accent transition-colors">
                <h4 className="text-xl font-serif font-bold mb-4">Smart Grid Systems</h4>
                <p className="text-xs text-inst-muted leading-loose uppercase tracking-wider mb-6">AI-Driven Distribution</p>
                <p className="text-sm text-inst-muted leading-relaxed">Utilization of digital twins and real-time AI analytics to predict load variations and manage the world's most complex electrical distribution network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanical & Robotics */}
        <section id="mechanical" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Train size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Mechanical & Robotics</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-12 text-inst-ink">High-Speed Rail: <br />The Fuxing & CRH</h3>
              <div className="space-y-12">
                <div className="group">
                  <span className="text-[10px] font-mono text-inst-accent block mb-2">Technological Standard</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Modular Construction</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Revolutionary "pre-cast" assembly methods where entire bridge sections are transported and placed by "Iron Monster" machines (SLJ900), slashing construction timelines.</p>
                </div>
                <div className="group">
                  <span className="text-[10px] font-mono text-inst-accent block mb-2">Precision Mechanics</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Automation & Mechatronics</h4>
                  <p className="text-sm text-inst-muted leading-relaxed">Integration of high-precision sensors and automatic control units in Fuxing trains, allowing for stable operations at 350-400 km/h with millimeter-level rail alignment.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-inst-line -z-10" />
              <div className="aspect-[3/4] bg-zinc-100 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1532105956691-944200613d4b?w=800" alt="High Speed Rail" className="w-full h-full object-cover grayscale brightness-90" />
              </div>
              <p className="text-[9px] font-mono uppercase tracking-widest mt-4 text-inst-muted text-center">Plate 02: CRH Series High-Speed Locomotive</p>
            </div>
          </div>
        </section>

        {/* Aerospace Engineering */}
        <section id="aerospace" className="py-40 bg-inst-ink text-white mb-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <Rocket size={400} strokeWidth={1} />
          </div>
          
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="text-center mb-32">
              <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block text-white/60">Orbital & Deep Space</span>
              <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none tracking-tighter">Aerospace Engineering</h2>
              <div className="h-px w-24 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl font-serif font-bold mb-8">FAST Telescope</h3>
                <p className="text-xs text-inst-accent uppercase tracking-widest mb-8">500m Aperture Spherical Radio Telescope</p>
                <ul className="space-y-6 text-sm text-white/70 leading-relaxed font-mono">
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Active surface technology using 4,450 triangular panels.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Cable-net structure suspended over a karst depression.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Hydraulic actuators for precise real-time panel adjustment.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Cable-driven parallel robot for receiver positioning.</li>
                </ul>
              </div>

              <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-3xl font-serif font-bold mb-8">Chang'e Lunar Program</h3>
                <p className="text-xs text-inst-accent uppercase tracking-widest mb-8">Structural Moon Exploration</p>
                <ul className="space-y-6 text-sm text-white/70 leading-relaxed font-mono">
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Soft landing technology on the moon's far side (world first).</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Queqiao relay satellite for far-side communication.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Automated sample return missions involving lunar ascent.</li>
                  <li className="flex items-start gap-4"><span className="text-inst-accent">•</span> Autonomous rover mechatronics for extreme lunar terrain.</li>
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
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Engineering Insights</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Multi-disciplinary Integration</h4>
                <p className="text-sm text-inst-muted leading-loose">The ability to unify civil, electrical, and AI systems at a massive scale is China’s core technical advantage. Digital twins of entire cities and bridge networks allow for predictive maintenance and optimization impossible in fragmented systems.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Overcoming Extreme Challenges</h4>
                <p className="text-sm text-inst-muted leading-loose">Projects like the Qinghai-Tibet Railway or High-Altitude dams showcase world-leading expertise in permafrost engineering and seismic dampening in high-risk zones.</p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-inst-line p-12">
              <h4 className="text-xl font-serif font-bold mb-8 text-inst-ink border-b border-inst-line pb-4">Technical Comparative Analysis</h4>
              <div className="space-y-8">
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">Transportation</h5>
                  <p className="text-xs text-inst-muted leading-relaxed">While India's Mumbai-Ahmedabad HSR represents a new benchmark for Indian rail, China's network (~45,000 km) operates at a volume and speed consistency (350km/h+) that required original aerodynamic profiling of "Fuxing" series trains.</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">Hydropower</h5>
                  <p className="text-xs text-inst-muted leading-relaxed">India's major dams like Tehri demonstrate high-altitude civil proficiency, but Baihetan's use of 1,000 MW hydro-turbine units represents the global ceiling of large-component mechanical manufacturing.</p>
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
                  { label: "HZMB Sea Crossing", value: "55 Kilometers" },
                  { label: "FAST Telescope Aperture", value: "500 Meters" },
                  { label: "HSR Operating Speed", value: "350 - 400 km/h" },
                  { label: "Baihetan Turbine Capacity", value: "1,000 MW Per Unit" },
                  { label: "Three Gorges Dam Output", value: "22,500 MW" },
                  { label: "UHV Transmission", value: "up to 1,100 kV (AC/DC)" }
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
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4">Institutional Engineering Legends | Exhibit: China Marvels</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted">Archival Access Code: CN-MARVEL-2024-EX</p>
      </footer>
    </div>
  );
}
