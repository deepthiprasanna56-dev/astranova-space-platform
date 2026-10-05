import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatCards from '../components/dashboard/StatCards';
import ChartsSection from '../components/dashboard/ChartsSection';
import DataTable from '../components/dashboard/DataTable';
import QuickActionsModal from '../components/dashboard/QuickActionsModal';
import { 
  Download, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Terminal, 
  ShieldAlert,
  Server,
  Zap,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage({ onNavigate }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickActionOpen, setQuickActionOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulated live stats state
  const [stats, setStats] = useState({
    costSavings: '$148,250',
    activeNodes: '1,284',
    latency: '14.2 ms',
    uptime: '99.998%',
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setStats({
        costSavings: `$${(148 + Math.floor(Math.random() * 5))},${Math.floor(Math.random() * 900 + 100)}`,
        activeNodes: `${1280 + Math.floor(Math.random() * 20)}`,
        latency: `${(13.8 + Math.random() * 0.8).toFixed(1)} ms`,
        uptime: '99.999%',
      });
      setIsRefreshing(false);
      showToast('Telemetry data synchronized with edge nodes');
    }, 800);
  };

  const handleExportData = () => {
    const reportData = {
      timestamp: new Date().toISOString(),
      user: user?.email || 'admin@nexusai.cloud',
      cluster: 'us-east-1-prod',
      telemetry: stats,
      systemHealth: '100% Nominal'
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `nexusai-report-${Date.now()}.json`;
    link.click();
    showToast('Telemetry report downloaded (JSON)');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex transition-colors">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 p-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700 dark:border-slate-200 flex items-center gap-3 animate-slide-up text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
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

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Header */}
        <Header
          setSidebarOpen={setSidebarOpen}
          onOpenQuickAction={() => setQuickActionOpen(true)}
          onRefreshData={handleRefreshData}
          isRefreshing={isRefreshing}
        />

        {/* Dashboard Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {/* Welcome Banner */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Operational Command Center
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  Cluster Live
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Real-time telemetry, auto-scaling metrics, and workload status for <span className="font-semibold text-slate-700 dark:text-slate-300">Production Mesh US-East</span>
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleExportData}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Audit</span>
              </button>

              <button
                onClick={() => setQuickActionOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 flex items-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Deploy Workload</span>
              </button>
            </div>
          </div>

          {/* Conditional rendering based on activeTab */}
          {activeTab === 'overview' && (
            <>
              {/* Stat KPI Cards */}
              <StatCards statsData={stats} />

              {/* Resource Utilization Gauges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Compute Usage (CPU)</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">48.2%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: '48.2%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>NVMe Volume Capacity</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">62.8%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '62.8%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Ingress Bandwidth Peak</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">29.4%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '29.4%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <ChartsSection />

              {/* Data Table */}
              <DataTable onActionNotification={showToast} />
            </>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <ChartsSection />
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-indigo-500" />
                  <h3 className="font-bold text-sm">Real-time Container Log Stream</h3>
                </div>
                <div className="bg-slate-950 text-slate-300 p-4 rounded-xl font-mono text-xs space-y-1.5 h-64 overflow-y-auto">
                  <p className="text-emerald-400">[2026-10-05 12:00:15] [INFO] Cluster autoscaler registered 14 new pods across US-East-1</p>
                  <p className="text-slate-400">[2026-10-05 12:00:19] [DEBUG] TLS handshake negotiated via TLSv1.3 AES-GCM (client ip: 198.51.100.4)</p>
                  <p className="text-indigo-400">[2026-10-05 12:00:24] [METRIC] p99 ingress latency recorded at 0.38ms (threshold: 5.0ms)</p>
                  <p className="text-amber-400">[2026-10-05 12:00:32] [WARN] Memory consumption on payment-webhook-worker reached 89% threshold</p>
                  <p className="text-emerald-400">[2026-10-05 12:00:33] [INFO] Horizontal Pod Autoscaler spawned 2 replica instances</p>
                  <p className="text-slate-400">[2026-10-05 12:00:40] [DEBUG] Syncing state with Redis cluster cache replica group</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clusters' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-2">Connected Multi-Cloud Clusters</h3>
                <p className="text-xs text-slate-500 mb-6">Manage high-availability Kubernetes clusters across hybrid clouds.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm">us-east-prod-k8s</span>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-600 px-2 py-0.5 rounded-full font-bold">Active</span>
                    </div>
                    <p className="text-xs text-slate-500">AWS EKS 1.31 · 24 Nodes · 480 vCPU</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm">eu-central-gke-01</span>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-600 px-2 py-0.5 rounded-full font-bold">Active</span>
                    </div>
                    <p className="text-xs text-slate-500">Google GKE · 16 Nodes · 320 vCPU</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'projects' || activeTab === 'alerts' || activeTab === 'team' || activeTab === 'settings') && (
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold capitalize">{activeTab} Management Module</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Detailed settings and configuration options for {activeTab}. Connected directly to the NexusAI control plane.
              </p>
              <button
                onClick={() => setActiveTab('overview')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-500 transition-colors"
              >
                Return to Overview Dashboard
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Quick Action Modal */}
      <QuickActionsModal
        isOpen={quickActionOpen}
        onClose={() => setQuickActionOpen(false)}
        onServiceCreated={(service) => {
          showToast(`Successfully deployed ${service.name} (${service.region})`);
        }}
      />
    </div>
  );
}
