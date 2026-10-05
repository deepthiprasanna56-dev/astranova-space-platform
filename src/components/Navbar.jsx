import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Menu, 
  X, 
  ArrowRight, 
  Radio, 
  Orbit, 
  Sparkles, 
  Rocket, 
  LogOut, 
  Globe, 
  Radar, 
  Layers
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onNavigate, currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expeditions', href: '#expeditions' },
    { name: 'Habitats', href: '#habitats' },
    { name: 'Propulsion', href: '#propulsion' },
    { name: 'Planetary Simulator', href: '#simulator' },
    { name: 'Flight Manifest', href: '#manifest' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#030712]/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-cyan-950/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Orbital Ring */}
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
              <Orbit className="w-5 h-5 group-hover:rotate-45 transition-transform duration-700" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  ASTRA<span className="text-cyan-500">NOVA</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-orbitron font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 rounded border border-cyan-300 dark:border-cyan-800">
                  DEEP SPACE
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm ${
                    currentPage === 'dashboard'
                      ? 'bg-cyan-500 text-black font-extrabold shadow-cyan-500/25'
                      : 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800'
                  }`}
                >
                  <Radar className="w-4 h-4" />
                  Mission Control
                </button>
                <button
                  onClick={logout}
                  className="p-2 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Disengage Clearance"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all"
                >
                  Flight Access
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 rounded-xl hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Rocket className="w-4 h-4 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Mission Control</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 bg-white/95 dark:bg-[#070d1d]/95 backdrop-blur-xl border border-slate-200/80 dark:border-cyan-900/60 rounded-2xl shadow-2xl animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('dashboard');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 rounded-xl shadow-md"
              >
                <Radar className="w-4 h-4" />
                Launch Mission Control
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('login');
                }}
                className="w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl text-center"
              >
                Astronaut Flight Clearance
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
