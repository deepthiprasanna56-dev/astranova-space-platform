import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  RotateCw, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  ChevronLeft, 
  ChevronRight,
  SlidersHorizontal,
  Server
} from 'lucide-react';

export default function DataTable({ onActionNotification }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [activeMenuId, setActiveMenuId] = useState(null);

  const [services, setServices] = useState([
    {
      id: 'srv-01',
      name: 'auth-gateway-cluster',
      env: 'Production',
      region: 'us-east-1',
      status: 'operational',
      cpu: 42,
      memory: '1.2 GB',
      instances: 6,
      updated: '4m ago',
    },
    {
      id: 'srv-02',
      name: 'telemetry-stream-v2',
      env: 'Production',
      region: 'eu-central-1',
      status: 'operational',
      cpu: 68,
      memory: '3.8 GB',
      instances: 12,
      updated: '12m ago',
    },
    {
      id: 'srv-03',
      name: 'payment-webhook-worker',
      env: 'Production',
      region: 'us-west-2',
      status: 'warning',
      cpu: 89,
      memory: '2.4 GB',
      instances: 4,
      updated: '28m ago',
    },
    {
      id: 'srv-04',
      name: 'ml-inference-runtime',
      env: 'Staging',
      region: 'ap-south-1',
      status: 'deploying',
      cpu: 54,
      memory: '8.1 GB',
      instances: 2,
      updated: 'Just now',
    },
    {
      id: 'srv-05',
      name: 'graphql-edge-bff',
      env: 'Production',
      region: 'global-edge',
      status: 'operational',
      cpu: 31,
      memory: '900 MB',
      instances: 24,
      updated: '1h ago',
    },
    {
      id: 'srv-06',
      name: 'audit-log-archiver',
      env: 'Production',
      region: 'us-east-2',
      status: 'operational',
      cpu: 18,
      memory: '512 MB',
      instances: 3,
      updated: '3h ago',
    }
  ]);

  const filteredServices = services.filter((srv) => {
    const matchesFilter = filter === 'all' || srv.status === filter;
    const matchesSearch = srv.name.toLowerCase().includes(search.toLowerCase()) || 
                          srv.region.toLowerCase().includes(search.toLowerCase()) ||
                          srv.env.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRestart = (srv) => {
    setActiveMenuId(null);
    setServices(services.map(s => s.id === srv.id ? { ...s, status: 'deploying' } : s));
    if (onActionNotification) {
      onActionNotification(`Rolling restart initiated for ${srv.name}`);
    }
    setTimeout(() => {
      setServices(prev => prev.map(s => s.id === srv.id ? { ...s, status: 'operational', updated: 'Just now' } : s));
      if (onActionNotification) {
        onActionNotification(`Restart finished: ${srv.name} is Healthy`);
      }
    }, 2000);
  };

  const handleViewLogs = (srv) => {
    setActiveMenuId(null);
    if (onActionNotification) {
      onActionNotification(`Streaming live stdout logs for ${srv.name}`);
    }
  };

  return (
    <div className="mt-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Table Header with Filters and Search */}
      <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Active Microservices & Workloads
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Monitor real-time deployment status, memory allocation, and replica health
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter services..."
              className="pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
            {['all', 'operational', 'warning', 'deploying'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-lg capitalize transition-all ${
                  filter === f
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50/75 dark:bg-slate-850 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4 sm:px-6">Service Name</th>
              <th className="py-3 px-4">Environment</th>
              <th className="py-3 px-4">Region</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">CPU & Mem</th>
              <th className="py-3 px-4">Replicas</th>
              <th className="py-3 px-4">Updated</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium">
            {filteredServices.length === 0 ? (
              <tr>
                <td colSpan="8" className="py-8 text-center text-slate-400">
                  No matching services found.
                </td>
              </tr>
            ) : (
              filteredServices.map((srv) => {
                return (
                  <tr 
                    key={srv.id}
                    className="hover:bg-slate-50/60 dark:hover:bg-slate-850/40 transition-colors"
                  >
                    {/* Name */}
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-indigo-600 dark:text-indigo-400">{srv.name}</span>
                      </div>
                    </td>

                    {/* Environment */}
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        srv.env === 'Production'
                          ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                          : 'bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                      }`}>
                        {srv.env}
                      </span>
                    </td>

                    {/* Region */}
                    <td className="py-3.5 px-4 font-mono text-slate-600 dark:text-slate-400">
                      {srv.region}
                    </td>

                    {/* Status badge */}
                    <td className="py-3.5 px-4">
                      {srv.status === 'operational' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3" />
                          Healthy
                        </span>
                      )}
                      {srv.status === 'warning' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                          <AlertTriangle className="w-3 h-3" />
                          High Load
                        </span>
                      )}
                      {srv.status === 'deploying' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Deploying
                        </span>
                      )}
                    </td>

                    {/* CPU & Memory bar */}
                    <td className="py-3.5 px-4">
                      <div className="w-24">
                        <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                          <span>{srv.cpu}% CPU</span>
                          <span>{srv.memory}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              srv.cpu > 80 ? 'bg-amber-500' : 'bg-indigo-600'
                            }`}
                            style={{ width: `${srv.cpu}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Replicas */}
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                      {srv.instances} Pods
                    </td>

                    {/* Updated */}
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 text-[11px]">
                      {srv.updated}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right relative">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleRestart(srv)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Restart Service Pods"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleViewLogs(srv)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Stream Live Logs"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Showing {filteredServices.length} of {services.length} services</span>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-semibold px-2">Page 1 of 1</span>
          <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
