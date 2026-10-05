import React from 'react';
import { 
  Orbit, 
  Rocket, 
  Radar, 
  Activity, 
  Wind, 
  Flame, 
  Radio, 
  Users, 
  Settings, 
  LogOut, 
  X, 
  Home, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  sidebarOpen, 
  setSidebarOpen, 
  onNavigateHome 
}) {
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'overview', label: 'Orbital Command Deck', icon: Radar },
    { id: 'fleet', label: 'Spacecraft Fleet', icon: Rocket, badge: '14 Active' },
    { id: 'telemetry', label: 'Telemetry & Radiation', icon: Activity },
    { id: 'lifesupport', label: 'ECLSS Life Support', icon: Wind, badge: '99.4% O2' },
    { id: 'propulsion', label: 'Ion Thrusters', icon: Flame },
    { id: 'comms', label: 'Deep Space Relays', icon: Radio },
    { id: 'crew', label: 'Astronaut Roster', icon: Users, badge: '38 Crew' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white dark:bg-[#040816] border-r border-slate-200 dark:border-cyan-950 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Top Branding */}
          <div className="h-16 px-5 border-b border-slate-200 dark:border-cyan-950 flex items-center justify-between">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500 text-black flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Orbit className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                ASTRA<span className="text-cyan-500">NOVA</span>
              </span>
            </button>

            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current Station Orbit Status */}
          <div className="px-4 py-3">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#070f24] border border-slate-200/80 dark:border-cyan-900/60 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Gateway Alpha</span>
              </div>
              <span className="text-[10px] text-cyan-400 font-bold">L2 ORBIT</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1 mt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-bold font-orbitron uppercase'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-mono ${
                      isActive 
                        ? 'bg-black/20 text-black' 
                        : 'bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section with Commander Profile */}
        <div className="p-3 border-t border-slate-200 dark:border-cyan-950 space-y-2">
          <button
            onClick={onNavigateHome}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Public Surface Website</span>
          </button>

          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-[#070f24] border border-slate-200/80 dark:border-cyan-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <img
                src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                alt="Commander"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-400 shrink-0"
              />
              <div className="overflow-hidden text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {user?.name || "Commander Elena Vance"}
                </p>
                <p className="text-[10px] font-mono text-cyan-500 truncate">
                  Level-5 Flight Director
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
              title="Disengage Clearance"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
