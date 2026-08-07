import { motion } from 'motion/react';
import { Landmark, Compass, Search, Menu, Globe, ArrowRight, Building2, Zap, Train, Rocket, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const countries = [
  { 
    id: 'china', 
    name: 'China', 
    label: 'Scale & Precision', 
    count: '01', 
    image: 'https://images.unsplash.com/photo-1543851759-4d693f8bed7e?w=800',
    description: 'Megastructures, High-Speed Rail, and Deep Space Exploration.'
  },
  { 
    id: 'saudi-arabia', 
    name: 'Saudi Arabia', 
    label: 'Energy & Water Mastery', 
    count: '02', 
    image: 'https://images.unsplash.com/photo-1586724237569-f3d021dd4c37?w=800',
    description: 'Mega-scale oil refining, stabilization, and total desalination supremacy.'
  },
  { 
    id: 'south-korea', 
    name: 'South Korea', 
    label: 'Maritime Engineering', 
    count: '03', 
    image: 'https://images.unsplash.com/photo-1540939801402-99042b41566b?w=800',
    description: 'Shipbuilding giants, LNG carriers, and autonomous oceanic systems.'
  },
  { 
    id: 'usa', 
    name: 'USA', 
    label: 'Innovation Frontiers', 
    count: '04', 
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800',
    description: 'Silicon Valley systems, aerospace breakthroughs, and smart infrastructure.'
  },
  { 
    id: 'japan', 
    name: 'Japan', 
    label: 'Structural Resilience', 
    count: '05', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    description: 'Seismic engineering, robotics, and Shinkansen technology.'
  },
  { 
    id: 'russia', 
    name: 'Russia', 
    label: 'Extreme Mastery', 
    count: '06', 
    image: 'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?w=800',
    description: 'Arctic engineering, nuclear supremacy, and the K-141 Kursk submarine architecture.'
  },
  { 
    id: 'france', 
    name: 'France', 
    label: 'Precision & Elegance', 
    count: '07', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    description: 'Commercial aerospace dominance, high-speed TGV rail, and nuclear energy sovereignty.'
  },
  { 
    id: 'taiwan', 
    name: 'Taiwan', 
    label: 'Silicon Core', 
    count: '08', 
    image: 'https://images.unsplash.com/photo-1535450849303-34e8e916a04a?w=800',
    description: 'Semiconductor manufacturing and high-precision electronics.'
  },
  { 
    id: 'germany', 
    name: 'Germany', 
    label: 'Precision & Efficiency', 
    count: '09', 
    image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800',
    description: 'Precision manufacturing, Industrie 4.0 systems, and automotive engineering mastery.'
  },
  { 
    id: 'india', 
    name: 'India', 
    label: 'Scale & Resilience', 
    count: '10', 
    image: 'https://images.unsplash.com/photo-1524491991490-b3c669143c61?w=800',
    description: 'Frugal aerospace, planetary-scale digital infrastructure, and ancient civilizational mastery.'
  },
  { 
    id: 'switzerland', 
    name: 'Switzerland', 
    label: 'Precision & Tunnels', 
    count: '11', 
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
    description: 'Alpine tunnel mastery, micro-engineering precision, and advanced energy systems.'
  }
];

export default function MarvelsHub() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-inst-bg font-sans selection:bg-inst-accent selection:text-white">
      {/* Institutional Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-inst-bg/80 backdrop-blur-md border-b border-inst-line px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex flex-col text-inst-ink hover:text-inst-accent transition-colors leading-none">
              <span className="font-serif font-black text-xl tracking-tight uppercase leading-none">Engineering</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-inst-accent font-medium mt-0.5 leading-none">Legends</span>
            </Link>
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-inst-muted">
              <Link to="/" className="hover:text-inst-ink transition-colors">{t('nav.home')}</Link>
              <Link to="/archive" className="hover:text-inst-ink transition-colors">{t('nav.archive')}</Link>
              <span className="text-inst-accent font-black">{t('nav.marvels')}</span>
              <Link to="/disciplines" className="hover:text-inst-ink transition-colors">{t('nav.disciplines')}</Link>
              <Link to="/voices" className="hover:text-inst-ink transition-colors">{t('nav.voices')}</Link>
              <Link to="/organizations" className="hover:text-inst-ink transition-colors">{t('nav.organizations', 'Organizations')}</Link>
              <Link to="/code-of-conduct" className="hover:text-inst-ink transition-colors">{t('nav.conduct')}</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector />
            <div className="hidden md:flex items-center gap-2 px-5 py-2 border border-inst-accent text-inst-accent font-bold text-[10px] uppercase tracking-widest hover:bg-inst-accent hover:text-white transition-all cursor-pointer">
              {t('nav.join')}
            </div>
            <Menu size={18} className="text-inst-muted cursor-pointer hover:text-inst-ink transition-colors" />
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 px-8">
        {/* Hub Hero */}
        <header className="max-w-7xl mx-auto text-center mb-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full archival-grid opacity-10 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 mb-12 border border-inst-accent/20 rounded-full text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em] bg-white/50"
          >
            <Globe size={12} className="animate-pulse" />
            <span>Exhibition Series: Global Engineering</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Engineering <br />
            <span className="serif-italic font-normal text-inst-accent">Marvels</span> Hub
          </motion.h1>

          <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
          <p className="max-w-2xl mx-auto text-lg text-inst-muted leading-relaxed font-medium uppercase tracking-[0.1em]">
            Navigating the technical supremacy of nations across civil, mechanical, and aerospace frontiers.
          </p>
        </header>

        {/* Global Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-inst-line border border-inst-line shadow-2xl overflow-hidden">
            {countries.map((country, i) => (
              <Link 
                key={country.id} 
                to={
                  country.id === 'china' ? '/marvels/china' : 
                  country.id === 'taiwan' ? '/marvels/taiwan' : 
                  country.id === 'south-korea' ? '/marvels/south-korea' : 
                  country.id === 'saudi-arabia' ? '/marvels/saudi-arabia' : 
                  country.id === 'usa' ? '/marvels/usa' : 
                  country.id === 'japan' ? '/marvels/japan' : 
                  country.id === 'russia' ? '/marvels/russia' : 
                  country.id === 'france' ? '/marvels/france' : 
                  country.id === 'germany' ? '/marvels/germany' : 
                  country.id === 'india' ? '/marvels/india' : 
                  country.id === 'switzerland' ? '/marvels/switzerland' : 
                  '#'
                }
                className="group relative bg-inst-bg aspect-[3/4] overflow-hidden flex flex-col justify-end p-10 hover:bg-white transition-all duration-700"
              >
                {/* Background Image with Hover Effect */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-20 group-hover:opacity-40" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inst-bg via-transparent to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono font-bold text-inst-accent mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">
                    Exhibit {country.count}
                  </span>
                  <div className="h-px w-8 bg-inst-accent mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <h3 className="text-4xl font-serif font-bold text-inst-ink mb-4 leading-none">
                    {country.name}
                  </h3>
                  <p className="text-[10px] font-bold text-inst-accent uppercase tracking-widest mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {country.label}
                  </p>
                  <p className="text-xs text-inst-muted leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {country.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-inst-ink">
                    <span>Explore Archive</span>
                    <ArrowRight size={14} className="transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                  </div>
                </div>

                {(country.id !== 'china' && country.id !== 'taiwan' && country.id !== 'south-korea' && country.id !== 'saudi-arabia' && country.id !== 'usa' && country.id !== 'japan' && country.id !== 'russia' && country.id !== 'france' && country.id !== 'germany' && country.id !== 'india' && country.id !== 'switzerland') && (
                  <div className="absolute top-6 right-6 px-3 py-1 border border-inst-line text-[8px] font-mono uppercase tracking-widest text-inst-muted">
                    Upcoming
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-inst-line text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4 opacity-40">Institutional Engineering Legends | Global Division</p>
        <div className="flex justify-center gap-12 mt-12 opacity-30 grayscale items-center">
           <Building2 size={24} />
           <Zap size={24} />
           <Train size={24} />
           <Rocket size={24} />
           <Cpu size={24} />
        </div>
      </footer>
    </div>
  );
}
