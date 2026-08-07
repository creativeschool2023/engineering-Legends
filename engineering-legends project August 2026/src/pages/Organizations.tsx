import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, ArrowLeft, Search, Menu, Globe, Building2, ShieldCheck, Heart, GraduationCap, Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

export default function Organizations() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-inst-bg font-sans selection:bg-inst-accent selection:text-white">
      {/* Archival Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-inst-line bg-inst-bg/85 backdrop-blur-md px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-inst-ink hover:text-inst-accent transition-colors flex items-center gap-2">
              <Landmark size={20} className="text-inst-accent" />
              <span className="font-sans font-bold text-xl tracking-tight uppercase">Engineering Legends</span>
            </Link>
            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-inst-muted items-center">
              <Link to="/marvels" className="flex items-center gap-2 hover:text-inst-ink transition-colors">
                <ArrowLeft size={10} /> {t('nav.backToHub')}
              </Link>
              <Link to="/archive" className="hover:text-inst-ink transition-colors">{t('nav.archive')}</Link>
              <Link to="/disciplines" className="hover:text-inst-ink transition-colors">{t('nav.disciplines')}</Link>
              <Link to="/voices" className="hover:text-inst-ink transition-colors">{t('nav.voices')}</Link>
              <span className="text-inst-accent font-black tracking-[0.3em] uppercase">{t('nav.organizations', 'Organizations')}</span>
              <Link to="/code-of-conduct" className="hover:text-inst-ink transition-colors">{t('nav.conduct')}</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-inst-muted hover:text-inst-ink transition-colors focus:outline-none lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-zinc-50 border-b border-inst-line shadow-lg p-6 lg:hidden flex flex-col gap-4 font-mono text-xs uppercase tracking-wider font-bold"
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200/50 text-inst-muted hover:text-inst-accent">{t('nav.home')}</Link>
            <Link to="/archive" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200/50 text-inst-muted hover:text-inst-accent">{t('nav.archive')}</Link>
            <Link to="/marvels" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200/50 text-inst-muted hover:text-inst-accent">{t('nav.marvels')}</Link>
            <Link to="/disciplines" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200/50 text-inst-muted hover:text-inst-accent">{t('nav.disciplines')}</Link>
            <Link to="/voices" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200/50 text-inst-muted hover:text-inst-accent">{t('nav.voices')}</Link>
            <span className="py-2 border-b border-zinc-200/50 text-inst-accent">{t('nav.organizations', 'Organizations')}</span>
            <Link to="/code-of-conduct" onClick={() => setMobileMenuOpen(false)} className="py-2 text-inst-muted hover:text-inst-accent">{t('nav.conduct')}</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-40 pb-24">
        {/* Hero Section */}
        <header className="max-w-5xl mx-auto px-8 text-center mb-32 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full archival-grid opacity-10 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 mb-12 border border-inst-accent/20 rounded-full text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.4em]"
          >
            <span>Archival Directory Series</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-inst-ink leading-[1.05] tracking-tighter mb-12"
          >
            Engineering <br />
            Organizations — <br />
            <span className="serif-italic font-normal text-inst-accent">Global Network</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-px w-24 bg-inst-accent mx-auto mb-12" />
            <p className="text-xl text-inst-muted leading-relaxed font-serif italic mb-4">
              Our Partners & Recognized Professional Bodies
            </p>
            <p className="text-xs text-inst-muted leading-loose uppercase tracking-[0.2em]">
              This directory connects engineers with the world's leading bodies, <br />
              standards organizations, and humanitarian groups.
            </p>
          </motion.div>
        </header>

        {/* Directory Focus - Exhibit Overview */}
        <section className="max-w-4xl mx-auto px-8 mb-48 text-center">
          <div className="p-16 border border-inst-line bg-white/50 relative group">
            <div className="absolute -inset-4 border border-inst-line -z-10 opacity-50" />
            <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block">Global Affiliations</span>
            <p className="text-lg text-inst-ink leading-[1.8] font-serif italic">
              "Connecting practicing experts and young engineers with professional governance bodies, voluntary consensus standards circles, and humanitarian movements that drive cross-disciplinary innovation and support sustainable growth across global boundaries."
            </p>
          </div>
        </section>

        {/* Global Engineering Bodies Section */}
        <section id="global" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Globe size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Global Engineering Bodies</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "World Federation of Engineering Organizations (WFEO)",
                desc: "The peak global body representing national engineering organizations across over 100 nations, guiding strategies towards UN sustainable development goals."
              },
              {
                title: "UNESCO — Engineering for Sustainable Development",
                desc: "Assisting member states to cultivate engineering education, capacity building, and policy frameworks critical to ecological preservation and security."
              },
              {
                title: "International Council on Systems Engineering (INCOSE)",
                desc: "An international authority fostering systems-thinking standards to optimize highly intricate, interdisciplinary engineering assemblies."
              },
              {
                title: "International Federation of Consulting Engineers (FIDIC)",
                desc: "Renowned for formulating the standardized model conditions of contract widely utilized in prominent infrastructure projects globally."
              }
            ].map((item, index) => (
              <div key={index} className="p-10 border border-inst-line bg-white/50 hover:border-inst-accent transition-all duration-300">
                <span className="text-[10px] font-mono text-inst-accent block mb-4 font-bold">PLATE 0{index + 1}</span>
                <h3 className="text-2xl font-serif font-bold mb-4 text-inst-ink">{item.title}</h3>
                <p className="text-sm text-inst-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Major Professional Societies Section */}
        <section id="societies" className="py-40 border-y border-inst-line bg-zinc-50/50 mb-48">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-24">
              <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
                <Building2 size={24} />
              </div>
              <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Major Professional Societies</h2>
              <div className="h-px w-16 bg-inst-accent mx-auto animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "IEEE",
                  subtitle: "Electrical & Electronic Systems",
                  desc: "The world's preeminent technical professional organization dedicated to pioneering electro-technology, telecommunications, and advanced compute design."
                },
                {
                  title: "ASME",
                  subtitle: "Mechanical Engineering Dynamics",
                  desc: "Setting the definitive codes and quality assurance rules governing boilers, pressure vessels, power systems, and premium precision machinery design."
                },
                {
                  title: "ASCE",
                  subtitle: "Civil & Structural Infrastructure",
                  desc: "Representing civil engineering professionals globally, setting structural codes and driving national infrastructure longevity reports."
                },
                {
                  title: "AIChE",
                  subtitle: "Chemical & Biological Sciences",
                  desc: "The premier forum championing advances in chemical processes, raw materials development, and molecular engineering methodologies."
                },
                {
                  title: "Institution of Engineering and Technology (IET)",
                  subtitle: "UK Multidisciplinary Core",
                  desc: "One of the world's largest engineering societies, certifying academic credentials and fostering progressive technology transfer across Europe."
                },
                {
                  title: "Institution of Mechanical Engineers (IMechE)",
                  subtitle: "UK Heritage & Mechanics",
                  desc: "A highly prestigious, historic institution supporting mechanical innovations, professional licensing, and technical research publications."
                }
              ].map((item, index) => (
                <div key={index} className="p-8 border-l border-inst-line bg-white hover:border-inst-accent transition-all duration-300">
                  <h4 className="text-2xl font-serif font-bold text-inst-ink mb-1">{item.title}</h4>
                  <p className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-wider mb-6">{item.subtitle}</p>
                  <p className="text-sm text-inst-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Accreditation Section */}
        <section id="standards" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Standards & Accreditation</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-all duration-350">
                <span className="text-[10px] font-mono text-inst-accent block mb-2">ISO Normative Frameworks</span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-inst-ink">International Organization for Standardization</h4>
                <p className="text-sm text-inst-muted leading-relaxed">Publishing highly strict international requirements for quality optimization (ISO 9001), energy systems, data safety protocols, and mechanical precision parameters.</p>
              </div>
              <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-all duration-350">
                <span className="text-[10px] font-mono text-inst-accent block mb-2">ASTM Consensus Systems</span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-inst-ink">ASTM International</h4>
                <p className="text-sm text-inst-muted leading-relaxed">Developing and validating over 12,000 global guidelines, establishing standard testing models for construction metals, polymeric compounds, and high-performance lubricants.</p>
              </div>
              <div className="group border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-all duration-350">
                <span className="text-[10px] font-mono text-inst-accent block mb-2">ASEE & NSPE Academic Directives</span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-inst-ink">ASEE & NSPE Governance</h4>
                <p className="text-sm text-inst-muted leading-relaxed">Fostering higher academic standards through ASEE research programs, while NSPE maintains elite professional licenses and strict ethical frameworks for practicing engineers.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-inst-line -z-10" />
              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden shadow-2xl relative border border-inst-line rounded">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
                  alt="Quality Control Standards" 
                  className="w-full h-full object-cover grayscale brightness-95 contrast-125" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[9px] font-mono uppercase tracking-widest mt-4 text-inst-muted text-center">Plate 07: High-Precision Dimensional Audit Systems Suggestion</p>
            </div>
          </div>
        </section>

        {/* Impact & Humanitarian Section */}
        <section id="humanitarian" className="py-40 bg-inst-ink text-white mb-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none animate-pulse">
            <Heart size={400} strokeWidth={1} />
          </div>
          
          <div className="max-w-5xl mx-auto px-8 relative z-10">
            <div className="text-center mb-32">
              <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.5em] mb-8 block text-white/60">Global Outreach Initiative</span>
              <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-none tracking-tighter">Humanitarian Action</h2>
              <div className="h-px w-24 bg-inst-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Engineers Without Borders",
                  scope: "Communities In Need",
                  desc: "Partnering globally with micro-communities to supply clean water delivery pipelines, solar mini-grids, and climate-safe residential designs."
                },
                {
                  title: "Engineering Ministries Int.",
                  scope: "Sustainable Architecture",
                  desc: "A multidisciplinary network deploying architects and heavy civil designers for schools, clinics, and clean water wells across evolving economies."
                },
                {
                  title: "ASHRAE Sustainable Built",
                  scope: "Ecological Air & Heat",
                  desc: "Formulating strict requirements governing ventilation designs, structural thermodynamics, and climate control configurations to safeguard modern architecture."
                }
              ].map((org, i) => (
                <div key={i} className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm hover:border-inst-accent transition-all duration-300">
                  <h3 className="text-3xl font-serif font-bold mb-4">{org.title}</h3>
                  <p className="text-xs text-inst-accent uppercase tracking-widest mb-8">{org.scope}</p>
                  <p className="text-sm text-white/70 leading-relaxed font-mono">{org.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India & Asia Focused Section */}
        <section id="regional" className="max-w-5xl mx-auto px-8 mb-48">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">India & Regional Excellence</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-all duration-350">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Institution of Engineers India (IEI)</h4>
                <p className="text-sm text-inst-muted leading-loose">Established in 1920, the IEI is the largest multidisciplinary professional framework of engineers in India. It maintains deep research networks across 15 engineering disciplines.</p>
              </div>
              <div className="border-l-2 border-inst-line pl-8 hover:border-inst-accent transition-all duration-350">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-inst-ink">Indian National Academy of Engineering (INAE)</h4>
                <p className="text-sm text-inst-muted leading-loose">Assembling India's most distinguished scholars and engineers to advise on micro-economic planning, state industrial standards, and critical spatial defense priorities.</p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-inst-line p-12 rounded">
              <h4 className="text-xl font-serif font-bold mb-8 text-inst-ink border-b border-inst-line pb-4">Regional Technical Chapters</h4>
              <div className="space-y-8">
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">CS India (CSI)</h5>
                  <p className="text-xs text-inst-muted leading-relaxed">Providing high-end computing frameworks, specialized software certification models, and networking ecosystems for software architects since 1965.</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest mb-2">ISTE Certification</h5>
                  <p className="text-xs text-inst-muted leading-relaxed">Fostering higher pedagogical practices, curriculum planning, and hardware teaching facilities across technical institutions in the region.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestions for Young Engineers Section */}
        <section id="suggestions" className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-24">
            <div className="w-16 h-16 rounded-full border border-inst-line flex items-center justify-center mb-8 text-inst-accent mx-auto">
              <Info size={24} />
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-inst-ink">Suggestions for Young Engineers</h2>
            <div className="h-px w-16 bg-inst-accent mx-auto mb-8" />
          </div>

          <div className="bg-inst-ink text-white p-16 rounded relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6 text-center">Professional Accrual Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
              {[
                { label: "Institutional Onboarding", value: "Join at least one international body (IEEE, ASME, IEI) in the early stage of your career." },
                { label: "Active Engagement", value: "Participate in their webinars, certifications, and technical competitions." },
                { label: "Strategic Sponsorship", value: "Apply for scholarships and mentorship programs offered by these organizations." },
                { label: "Universal Networking", value: "Attend annual conferences to network with experienced professionals." },
                { label: "Open-Source Contributions", value: "Contribute to open-source projects and technical communities." },
                { label: "Groundwater & Structural Initiatives", value: "Volunteer with Engineers Without Borders on real social impact projects." },
                { label: "Process Auditing Mastery", value: "Stay updated with latest standards (ISO / ASTM) and best practices in your domain." },
                { label: "Academic Authority Building", value: "Use these collaborative platforms to publish peer-reviewed papers." }
              ].map((spec, i) => (
                <div key={i} className="border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-widest block mb-2">0{i+1} — {spec.label}</span>
                  <span className="text-sm font-sans text-white/50 leading-relaxed font-light">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Meta */}
      <footer className="py-24 border-t border-inst-line text-center opacity-60">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-inst-muted mb-4">Institutional Engineering Legends | Index: Global Organizations</p>
        <p className="text-[8px] font-mono uppercase tracking-widest text-inst-muted">Archival Catalog Code: ORG-INDEX-2026-EX</p>
      </footer>
    </div>
  );
}
