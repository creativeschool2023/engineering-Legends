import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Globe, Shield, Users, BookOpen, Layers, Award } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/archive', label: 'Biographies', icon: BookOpen },
    { path: '/disciplines', label: 'Disciplines', icon: Layers },
    { path: '/organizations', label: 'Organizations', icon: Globe },
    { path: '/voices', label: 'Voices', icon: Users },
    { path: '/code-of-conduct', label: 'Code of Conduct', icon: Shield },
    { path: '/marvels', label: 'Marvels', icon: Award }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Thin Copper Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#9E774F] via-[#84603B] to-[#0F172A] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E5E0D5] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#9E774F]/40 flex items-center justify-center text-[#9E774F] group-hover:border-[#0F172A] group-hover:shadow-md transition-all">
              <Compass className="w-5 h-5 transition-transform duration-700 group-hover:rotate-180" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-[#0F172A] uppercase group-hover:text-[#9E774F] transition-colors">
                Engineering Legends
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#64748B] uppercase">
                Digital Exhibition Archive
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 group ${
                    active ? 'text-[#9E774F] font-semibold' : 'text-[#475569] hover:text-[#0F172A] hover:-translate-y-[1px]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#9E774F]' : 'text-[#64748B] group-hover:text-[#9E774F]'}`} />
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#9E774F] transition-all duration-300 ${
                      active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white border border-[#E5E0D5] text-[#0F172A] hover:text-[#9E774F] hover:border-[#9E774F] transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-[#E5E0D5] px-6 py-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border font-mono text-xs tracking-wider uppercase transition-all ${
                      active
                        ? 'bg-[#9E774F]/10 border-[#9E774F] text-[#9E774F] font-semibold'
                        : 'border-[#E5E0D5] text-[#475569] hover:bg-white hover:border-[#9E774F]/40'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#9E774F]" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-[#E5E0D5] flex justify-center">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
