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
import { Activity, Radio, Sun, Orbit, Zap } from 'lucide-react';

export default function ChartsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [timeRange, setTimeRange] = useState('7d');

  const telemetryDatasets = {
    '24h': [
      { time: '00:00', thrust: 820, flux: 1350 },
      { time: '04:00', thrust: 940, flux: 1362 },
      { time: '08:00', thrust: 1100, flux: 1380 },
      { time: '12:00', thrust: 1380, flux: 1410 },
      { time: '16:00', thrust: 1250, flux: 1390 },
      { time: '20:00', thrust: 990, flux: 1365 },
      { time: '23:59', thrust: 880, flux: 1358 },
    ],
    '7d': [
      { time: 'Day 1', thrust: 8200, flux: 1360 },
      { time: 'Day 2', thrust: 8900, flux: 1365 },
      { time: 'Day 3', thrust: 9400, flux: 1380 },
      { time: 'Day 4', thrust: 11200, flux: 1420 },
      { time: 'Day 5', thrust: 12400, flux: 1450 },
      { time: 'Day 6', thrust: 10800, flux: 1390 },
      { time: 'Day 7', thrust: 11600, flux: 1410 },
    ],
    '30d': [
      { time: 'Week 1', thrust: 58000, flux: 1362 },
      { time: 'Week 2', thrust: 69000, flux: 1378 },
      { time: 'Week 3', thrust: 74000, flux: 1415 },
      { time: 'Week 4', thrust: 82000, flux: 1430 },
    ],
    '90d': [
      { time: 'Month 1', thrust: 240000, flux: 1365 },
      { time: 'Month 2', thrust: 295000, flux: 1390 },
      { time: 'Month 3', thrust: 320000, flux: 1420 },
    ]
  };

  const stationPower = [
    { station: 'Gateway L2', power: 92, color: '#06b6d4' },
    { station: 'Mars Ares', power: 78, color: '#f59e0b' },
    { station: 'Europa Deep', power: 64, color: '#8b5cf6' },
    { station: 'Helios Sun', power: 98, color: '#10b981' },
    { station: 'Titan Cryo', power: 51, color: '#ec4899' },
  ];

  const currentData = telemetryDatasets[timeRange];

  const CustomTelemetryTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-900 shadow-xl text-xs font-mono space-y-1">
          <p className="font-bold text-slate-900 dark:text-white">{label}</p>
          <p className="text-cyan-500 font-semibold">
            Ion Impulse: <span className="font-bold">{payload[0]?.value?.toLocaleString()} kN-sec</span>
          </p>
          <p className="text-amber-500 font-semibold">
            Solar Radiation: <span className="font-bold">{payload[1]?.value?.toLocaleString()} W/m²</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6">
      
      {/* Ion Propulsion & Solar Flux Area Chart */}
      <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-500" />
                <h3 className="text-base font-orbitron font-bold text-slate-900 dark:text-white">
                  Ion Thruster Output & Solar Flux Stream
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                Real-time magnetoplasmadynamic impulse vs solar radiation density
              </p>
            </div>

            {/* Time range selector */}
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-[#040816] rounded-xl border border-slate-200/80 dark:border-cyan-950 text-xs font-mono">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 font-semibold rounded-lg uppercase transition-all ${
                    timeRange === range
                      ? 'bg-cyan-500 text-black shadow-xs font-bold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-cyan-400'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="thrustGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="fluxGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={isDark ? '#0d1829' : '#f1f5f9'} 
                  vertical={false} 
                />
                <XAxis 
                  dataKey="time" 
                  tickLine={false} 
                  stroke={isDark ? '#64748b' : '#94a3b8'} 
                  fontSize={11}
                  fontFamily="monospace"
                />
                <YAxis 
                  tickLine={false} 
                  stroke={isDark ? '#64748b' : '#94a3b8'} 
                  fontSize={11}
                  fontFamily="monospace"
                  tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
                />
                <Tooltip content={<CustomTelemetryTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="thrust" 
                  stroke="#06b6d4" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#thrustGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="flux" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#fluxGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-cyan-950 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Ion Thrust
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Solar Flux
            </span>
          </div>
          <span className="text-emerald-500 font-bold">● Telemetry Lock (8.4 GHz)</span>
        </div>
      </div>

      {/* Planetary Habitat Power Levels */}
      <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500" />
              <h3 className="text-base font-orbitron font-bold text-slate-900 dark:text-white">
                Habitat Energy Grids
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              5 Outposts
            </span>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            Photovoltaic and micro-fusion reactor reserves by outpost
          </p>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stationPower} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={isDark ? '#0d1829' : '#f1f5f9'} />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis 
                  dataKey="station" 
                  type="category" 
                  tickLine={false} 
                  axisLine={false}
                  stroke={isDark ? '#94a3b8' : '#64748b'} 
                  fontSize={11}
                  fontFamily="monospace"
                  width={80}
                />
                <Tooltip 
                  formatter={(value) => [`${value}% Charged`, 'Energy Reserve']}
                  contentStyle={{ 
                    backgroundColor: isDark ? '#070e20' : '#ffffff', 
                    borderColor: isDark ? '#0891b2' : '#e2e8f0',
                    borderRadius: '0.75rem',
                    fontSize: '11px',
                    fontFamily: 'monospace'
                  }}
                />
                <Bar dataKey="power" radius={[0, 6, 6, 0]} barSize={14}>
                  {stationPower.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-cyan-950 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Micro-Fusion Grid:</span>
          <span className="text-emerald-400 font-bold">100% NOMINAL</span>
        </div>
      </div>

    </div>
  );
}
