import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { Activity, Globe, DownloadCloud, Sparkles } from 'lucide-react';

export default function ChartsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [timeRange, setTimeRange] = useState('7d');

  // Datasets for different time ranges
  const dataSets = {
    '24h': [
      { time: '00:00', requests: 420, bandwidth: 210 },
      { time: '04:00', requests: 310, bandwidth: 180 },
      { time: '08:00', requests: 840, bandwidth: 490 },
      { time: '12:00', requests: 1250, bandwidth: 780 },
      { time: '16:00', requests: 1420, bandwidth: 890 },
      { time: '20:00', requests: 980, bandwidth: 560 },
      { time: '23:59', requests: 620, bandwidth: 340 },
    ],
    '7d': [
      { time: 'Mon', requests: 4800, bandwidth: 2900 },
      { time: 'Tue', requests: 5900, bandwidth: 3600 },
      { time: 'Wed', requests: 7200, bandwidth: 4800 },
      { time: 'Thu', requests: 6800, bandwidth: 4300 },
      { time: 'Fri', requests: 8900, bandwidth: 5900 },
      { time: 'Sat', requests: 5400, bandwidth: 3200 },
      { time: 'Sun', requests: 6100, bandwidth: 3900 },
    ],
    '30d': [
      { time: 'Week 1', requests: 28000, bandwidth: 17500 },
      { time: 'Week 2', requests: 34500, bandwidth: 21400 },
      { time: 'Week 3', requests: 41200, bandwidth: 26800 },
      { time: 'Week 4', requests: 46800, bandwidth: 31200 },
    ],
    '90d': [
      { time: 'Jan', requests: 118000, bandwidth: 74000 },
      { time: 'Feb', requests: 142000, bandwidth: 91000 },
      { time: 'Mar', requests: 168000, bandwidth: 108000 },
    ]
  };

  const regionalData = [
    { region: 'US East', load: 84, color: '#6366f1' },
    { region: 'EU Central', load: 68, color: '#8b5cf6' },
    { region: 'AP South', load: 52, color: '#ec4899' },
    { region: 'US West', load: 43, color: '#3b82f6' },
    { region: 'SA East', load: 29, color: '#10b981' },
  ];

  const currentData = dataSets[timeRange];

  // Custom Recharts Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl text-xs space-y-1">
          <p className="font-bold text-slate-900 dark:text-white">{label}</p>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">
            Requests: <span className="font-bold">{payload[0]?.value?.toLocaleString()} req/s</span>
          </p>
          <p className="text-purple-600 dark:text-purple-400 font-medium">
            Bandwidth: <span className="font-bold">{payload[1]?.value?.toLocaleString()} MB/s</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6">
      {/* Main Area Chart: Telemetry & Traffic */}
      <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Cluster Throughput & Telemetry Stream
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Real-time request volume across all edge nodes & serverless containers
              </p>
            </div>

            {/* Time range selector */}
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 font-semibold rounded-lg uppercase transition-all ${
                    timeRange === range
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Area Chart Container */}
          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="reqGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="bandGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={isDark ? '#1e293b' : '#f1f5f9'} 
                  vertical={false} 
                />
                <XAxis 
                  dataKey="time" 
                  tickLine={false} 
                  stroke={isDark ? '#64748b' : '#94a3b8'} 
                  fontSize={11} 
                />
                <YAxis 
                  tickLine={false} 
                  stroke={isDark ? '#64748b' : '#94a3b8'} 
                  fontSize={11}
                  tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="#6366f1" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#reqGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="bandwidth" 
                  stroke="#a855f7" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#bandGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart Sub Legend */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Requests
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Bandwidth
            </span>
          </div>
          <span className="font-mono text-[11px] text-emerald-500">● Live sync</span>
        </div>
      </div>

      {/* Side Bar Chart: Regional Capacity Distribution */}
      <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Regional Compute Load
              </h3>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
              5 Regions
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Allocated edge compute capacity by geographical region
          </p>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={isDark ? '#1e293b' : '#f1f5f9'} />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis 
                  dataKey="region" 
                  type="category" 
                  tickLine={false} 
                  axisLine={false}
                  stroke={isDark ? '#94a3b8' : '#64748b'} 
                  fontSize={11}
                  width={75}
                />
                <Tooltip 
                  formatter={(value) => [`${value}% utilized`, 'Load']}
                  contentStyle={{ 
                    backgroundColor: isDark ? '#1e293b' : '#ffffff', 
                    borderColor: isDark ? '#334155' : '#e2e8f0',
                    borderRadius: '0.75rem',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="load" radius={[0, 6, 6, 0]} barSize={14}>
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Autonomous balancing:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
