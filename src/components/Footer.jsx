import React, { useState } from 'react';
import { 
  Orbit, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Radio, 
  Globe, 
  Compass, 
  Zap, 
  Signal, 
  Wifi
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#02050e] border-t border-slate-200 dark:border-cyan-950/80 pt-16 pb-12 transition-colors relative overflow-hidden">
      {/* Background starlight dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Deep Space Network Telemetry */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Orbit className="w-5 h-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                ASTRA<span className="text-cyan-500">NOVA</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Leading the next epoch of human presence across the Solar System through autonomous orbital habitats, deep-space ion propulsion, and terraforming research.
            </p>

            {/* Deep Space Tracking Stations Status */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Signal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  Deep Space Network (DSN)
                </span>
                <span className="text-emerald-500 font-bold">X-BAND LOCKED</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Goldstone: Active</span>
                <span>Madrid: Tracking</span>
                <span>Canberra: Online</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-slate-500 dark:text-slate-400">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Planetary Missions */}
          <div>
            <h4 className="text-xs font-orbitron font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Missions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li><a href="#expeditions" className="hover:text-cyan-500 transition-colors">Artemis VII Lunar Base</a></li>
              <li><a href="#expeditions" className="hover:text-cyan-500 transition-colors">Ares Pioneer Mars Outpost</a></li>
              <li><a href="#expeditions" className="hover:text-cyan-500 transition-colors">Europa Oceanus Cryo-Drill</a></li>
              <li><a href="#expeditions" className="hover:text-cyan-500 transition-colors">Titan Methane Surveyor</a></li>
              <li><button onClick={() => onNavigate('dashboard')} className="hover:text-cyan-500 transition-colors text-left">Live Fleet Telemetry</button></li>
            </ul>
          </div>

          {/* Research & Engineering */}
          <div>
            <h4 className="text-xs font-orbitron font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Technology
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li><a href="#propulsion" className="hover:text-cyan-500 transition-colors">Magnetoplasmadynamic Thrusters</a></li>
              <li><a href="#habitats" className="hover:text-cyan-500 transition-colors">Centrifugal Artificial Gravity</a></li>
              <li><a href="#propulsion" className="hover:text-cyan-500 transition-colors">Closed-Loop ECLSS Life Support</a></li>
              <li><a href="#simulator" className="hover:text-cyan-500 transition-colors">Planetary Regolith Sintering</a></li>
              <li><a href="#propulsion" className="hover:text-cyan-500 transition-colors">Radiation Water-Wall Shielding</a></li>
            </ul>
          </div>

          {/* Cosmic Dispatch Newsletter */}
          <div>
            <h4 className="text-xs font-orbitron font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Cosmic Dispatch
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              Direct telemetry feeds, interplanetary launch windows, and astrobiology bulletins.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="specialist@astranova.space"
                required
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-cyan-950 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 font-mono"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-cyan-500/20"
              >
                <span>Receive Telemetry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 mt-2 animate-fade-in font-medium font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Transmission confirmed. Frequencies registered.
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 AstraNova Interplanetary Agency. All solar exploration rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>STARDATE: 2026.278</span>
            <span>COORDINATES: 0.0°N 0.0°E (LEO)</span>
            <span>COSPAR ID: 2026-088A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
