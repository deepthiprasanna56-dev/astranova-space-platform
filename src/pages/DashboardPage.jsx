import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCards from '../components/dashboard/StatCards';
import ChartsSection from '../components/dashboard/ChartsSection';
import DataTable from '../components/dashboard/DataTable';
import QuickActionsModal from '../components/dashboard/QuickActionsModal';
import LifeSupportPanel from '../components/dashboard/LifeSupportPanel';
import PropulsionPanel from '../components/dashboard/PropulsionPanel';
import CommsPanel from '../components/dashboard/CommsPanel';
import CrewPanel from '../components/dashboard/CrewPanel';

import { 
  Download, 
  Rocket, 
  CheckCircle2, 
  Orbit, 
  Flame, 
  ShieldCheck, 
  Radio, 
  Terminal, 
  Wind,
  Wifi,
  Sun,
  Activity
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage({ onNavigate }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickActionOpen, setQuickActionOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Live telemetry state
  const [stats, setStats] = useState({
    velocity: '27,480 km/h',
    solarEnergy: '4.82 GW',
    oxygenPurity: '99.4% O2',
    crewCount: '38 Personnel',
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleRefreshTelemetry = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setStats({
        velocity: `${27450 + Math.floor(Math.random() * 80)} km/h`,
        solarEnergy: `${(4.8 + Math.random() * 0.1).toFixed(2)} GW`,
        oxygenPurity: `${(99.2 + Math.random() * 0.4).toFixed(1)}% O2`,
        crewCount: '38 Personnel',
      });
      setIsRefreshing(false);
      showToast('Deep Space Network Telemetry Re-Synced (Canberra & Goldstone)');
    }, 800);
  };

  const handleExportMissionLog = () => {
    const missionTelemetry = {
      agency: 'AstraNova Interplanetary',
      stardate: '2026.278',
      commander: user?.name || 'Commander Elena Vance',
      gatewayStation: 'Lunar Orbital Gateway Alpha',
      activeTelemetry: stats,
      lifeSupportStatus: '100% Closed Loop Recapture',
      radiationArmor: '4.2 Tesla Active Shield',
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(missionTelemetry, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `astranova-mission-log-${Date.now()}.json`;
    link.click();
    showToast('Mission Telemetry Log Exported (JSON)');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 flex transition-colors">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 p-4 rounded-2xl bg-[#050b18] text-white shadow-2xl border border-cyan-800 flex items-center gap-3 animate-slide-up text-xs font-mono font-semibold">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onNavigateHome={() => onNavigate('landing')}
      />

      {/* Main Command Deck */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        
        {/* Header */}
        <Header
          setSidebarOpen={setSidebarOpen}
          onOpenQuickAction={() => setQuickActionOpen(true)}
          onRefreshData={handleRefreshTelemetry}
          isRefreshing={isRefreshing}
        />

        {/* Dashboard Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
          
          {/* Welcome Deck Banner */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Orbital Telemetry & Flight Command
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800">
                  STATION ALPHA ACTIVE
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mt-1">
                Deep Space Network tracking 14 active spacecraft and 6 planetary surface outposts
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleExportMissionLog}
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-950 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Telemetry</span>
              </button>

              <button
                onClick={() => setQuickActionOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
              >
                <Rocket className="w-4 h-4" />
                <span>Launch Probe</span>
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Stat KPI Cards */}
              <StatCards statsData={stats} />

              {/* Resource Utilization Gauges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                
                {/* Xenon Fuel */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div className="flex-1 font-mono">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Xenon Reaction Fuel</span>
                      <span className="text-cyan-400 font-bold">84.6%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full rounded-full" style={{ width: '84.6%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Magnetic Shielding */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 font-mono">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Magnetic Shield Deflection</span>
                      <span className="text-rose-400 font-bold">94.2%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: '94.2%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Comms Signal Delay */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-400">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="flex-1 font-mono">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Earth Comms Delay</span>
                      <span className="text-amber-400 font-bold">1.28s (Light)</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Charts */}
              <ChartsSection />

              {/* Spacecraft Fleet Table */}
              <DataTable onActionNotification={showToast} />
            </>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <ChartsSection />
              <div className="p-6 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-950">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider">
                    Raw Telemetry Stream Console (DSN X-Band)
                  </h3>
                </div>
                <div className="bg-[#030712] text-slate-300 p-4 rounded-xl font-mono text-xs space-y-1.5 h-64 overflow-y-auto border border-cyan-950">
                  <p className="text-cyan-400">[2026.278 12:44:02] [DSN] Uplink lock acquired on ASTRA-VANGUARD-IX via Canberra 70m antenna</p>
                  <p className="text-slate-400">[2026.278 12:44:10] [ECLSS] Cabin atmospheric composition: 78.1% N2, 21.0% O2, 0.04% CO2, 0.86% Ar</p>
                  <p className="text-amber-400">[2026.278 12:44:18] [SOLAR] Coronal mass ejection detected by Helios probe at 1.0 AU. Alert broadcasted.</p>
                  <p className="text-emerald-400">[2026.278 12:44:29] [ION] Xenon thruster bank #4 completed 420-second delta-v orbit circularization burn</p>
                  <p className="text-slate-400">[2026.278 12:44:40] [RELAY] Quantum entangled photon packet verified with 0 parity errors</p>
                  <p className="text-cyan-400">[2026.278 12:44:55] [GRAVITY] Centrifugal ring spin stabilized at 4.2 RPM (1.002 Earth G-force)</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fleet' && (
            <div className="space-y-6">
              <DataTable onActionNotification={showToast} />
            </div>
          )}

          {activeTab === 'lifesupport' && (
            <LifeSupportPanel onToast={showToast} />
          )}

          {activeTab === 'propulsion' && (
            <PropulsionPanel onToast={showToast} />
          )}

          {activeTab === 'comms' && (
            <CommsPanel onToast={showToast} />
          )}

          {activeTab === 'crew' && (
            <CrewPanel onToast={showToast} />
          )}



        </main>
      </div>

      {/* Quick Launch Modal */}
      <QuickActionsModal
        isOpen={quickActionOpen}
        onClose={() => setQuickActionOpen(false)}
        onMissionLaunched={(mission) => {
          showToast(`Launch sequence executed for ${mission.name} (${mission.target})`);
        }}
      />

    </div>
  );
}
