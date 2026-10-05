import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Plus, 
  Radio, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  X, 
  Rocket, 
  Compass, 
  Satellite
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { useAuth } from '../../context/AuthContext';

export default function Header({ 
  setSidebarOpen, 
  onOpenQuickAction, 
  onRefreshData,
  isRefreshing 
}) {
  const { user } = useAuth();
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Solar Flare CME Ejection Detected',
      message: 'Active magnetosphere deflection engaged on Gateway Station Alpha.',
      time: '3m ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Europa Probe Cryo-Core Checksum Nominal',
      message: 'Liquid nitrogen heat pipe tests passed with 100% telemetry lock.',
      time: '14m ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Titan Cargo Shuttle Completed Orbital Burn',
      message: 'Arrival burn scheduled at Saturn L1 waypoint in 72 hours.',
      time: '1h ago',
      read: true
    }
  ]);

  const unreadCount = alerts.filter(a => !a.read).length;

  const markAllAsRead = () => {
    setAlerts(alerts.map(a => ({ ...a, read: true })));
  };

  const clearAlert = (id) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <header className="h-16 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-[#030712]/90 backdrop-blur-md border-b border-slate-200 dark:border-cyan-950 flex items-center justify-between sticky top-0 z-30">
      
      {/* Left: Mobile hamburger & Stardate search */}
      <div className="flex items-center gap-3 flex-1 max-w-lg">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-xl text-slate-500 hover:text-cyan-500 dark:text-slate-400 lg:hidden transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Spacecraft / Frequency Search */}
        <div className="relative w-full hidden sm:block">
          <Search className="w-3.5 h-3.5 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search probes, spacecraft callsigns, frequencies, orbital vectors..."
            className="w-full pl-9 pr-14 py-2 text-xs font-mono rounded-xl bg-slate-100 dark:bg-[#070f24] border border-transparent focus:border-cyan-500 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[9px] font-mono text-cyan-400 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-cyan-900 rounded">
            CTRL+K
          </kbd>
        </div>
      </div>

      {/* Right: Telemetry sync, Deploy Probe, Alerts, Theme, Avatar */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Telemetry Sync Button */}
        <button
          onClick={onRefreshData}
          disabled={isRefreshing}
          className="p-2 rounded-xl text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
          title="Sync Deep Space Telemetry"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-cyan-400' : ''}`} />
        </button>

        {/* Deploy Scientific Probe / Mission */}
        <button
          onClick={onOpenQuickAction}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-orbitron font-bold uppercase tracking-wider rounded-xl shadow-md shadow-cyan-500/20 transition-all"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>Launch Probe</span>
        </button>

        {/* Deep Space Alerts Drawer */}
        <div className="relative">
          <button
            onClick={() => setAlertsOpen(!alertsOpen)}
            className="p-2 rounded-xl text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors relative"
            aria-label="View telemetry alerts"
          >
            <Radio className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-2 ring-white dark:ring-black animate-pulse" />
            )}
          </button>

          {alertsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-900 shadow-2xl z-50 animate-fade-in overflow-hidden">
              <div className="p-3.5 border-b border-slate-200 dark:border-cyan-950 flex items-center justify-between bg-slate-50 dark:bg-[#040816]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Deep Space Transmissions
                  </span>
                  {unreadCount > 0 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Mark read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-cyan-950/60 font-mono">
                {alerts.map((a) => (
                  <div
                    key={a.id}
                    className={`p-3.5 transition-colors flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 ${
                      !a.read ? 'bg-cyan-50/40 dark:bg-cyan-950/20' : ''
                    }`}
                  >
                    <div className="mt-0.5">
                      {a.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                      {a.type === 'success' && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      {a.type === 'info' && <Radio className="w-4 h-4 text-indigo-400" />}
                    </div>

                    <div className="flex-1 text-left">
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {a.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {a.message}
                      </p>
                      <span className="text-[9px] text-slate-400 dark:text-slate-500 mt-1 block">
                        {a.time}
                      </span>
                    </div>

                    <button
                      onClick={() => clearAlert(a.id)}
                      className="text-slate-400 hover:text-slate-200 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Commander Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-cyan-950">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
            alt="Commander"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-400"
          />
        </div>

      </div>
    </header>
  );
}
