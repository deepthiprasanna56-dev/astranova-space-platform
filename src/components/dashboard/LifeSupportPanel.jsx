import React, { useState, useEffect } from 'react';
import {
  Wind, Droplets, Thermometer, AlertTriangle,
  CheckCircle2, Activity, RefreshCw, Gauge, Leaf, Zap
} from 'lucide-react';

const GaugeRing = ({ value, max = 100, color, size = 80 }) => {
  const radius = 30;
  const circ = 2 * Math.PI * radius;
  const pct = (value / max) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r={radius} fill="none" stroke="currentColor" strokeWidth="7" className="text-slate-200 dark:text-slate-800" />
      <circle
        cx="40" cy="40" r={radius} fill="none"
        stroke={color} strokeWidth="7"
        strokeDasharray={`${pct} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
      <text x="40" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill={color}>
        {value.toFixed(1)}%
      </text>
    </svg>
  );
};

const systems = [
  { id: 'ows', label: 'Oxygen Generation (OGS)', desc: 'Water electrolysis — Sabatier reactor active', ok: true },
  { id: 'co2', label: 'CO₂ Scrubber (CDRA)', desc: '4-bed molecular sieve cycled 22h ago', ok: true },
  { id: 'wpa', label: 'Water Processor (WPA)', desc: 'Urine reclamation + condensate recovery at 94%', ok: true },
  { id: 'temp', label: 'Thermal Control (ATCS)', desc: 'Internal temperature: 21.4 °C / Humidity: 46%', ok: true },
  { id: 'pcs', label: 'Pressure Control (PCS)', desc: 'Cabin: 14.7 psi | Node-2: 14.6 psi — NOMINAL', ok: true },
  { id: 'fire', label: 'Fire Detection (AFSS)', desc: 'All ionization + photoelectric sensors clear', ok: true },
];

export default function LifeSupportPanel({ onToast }) {
  const [o2, setO2] = useState(99.4);
  const [co2, setCo2] = useState(0.04);
  const [humidity, setHumidity] = useState(46.2);
  const [pressure, setPressure] = useState(14.70);
  const [temp, setTemp] = useState(21.4);
  const [refreshing, setRefreshing] = useState(false);
  const [sysState, setSysState] = useState(systems);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setO2(+(99.0 + Math.random() * 0.6).toFixed(1));
      setCo2(+(0.03 + Math.random() * 0.02).toFixed(3));
      setHumidity(+(45 + Math.random() * 3).toFixed(1));
      setPressure(+(14.68 + Math.random() * 0.06).toFixed(2));
      setTemp(+(21.0 + Math.random() * 1.2).toFixed(1));
      setRefreshing(false);
      onToast?.('ECLSS Diagnostics Refreshed — All systems nominal');
    }, 900);
  };

  const toggleSystem = (id) => {
    setSysState(prev => prev.map(s => s.id === id ? { ...s, ok: !s.ok } : s));
    onToast?.(`System override acknowledged — manual check requested`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Wind className="w-5 h-5 text-cyan-400" />
            ECLSS Life Support — Station Alpha
          </h2>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            Environmental Control &amp; Life Support System · Real-time atmospheric telemetry
          </p>
        </div>
        <button
          onClick={refresh}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh Diagnostics
        </button>
      </div>

      {/* Atmospheric Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { label: 'O₂ Purity', value: o2, color: '#22d3ee', unit: '%' },
          { label: 'CO₂ Level', value: co2 * 2500, max: 100, color: '#f87171', display: `${co2.toFixed(3)}%`, unit: '' },
          { label: 'Humidity', value: humidity, color: '#a78bfa', unit: '%' },
          { label: 'Cabin Pressure', value: (pressure / 16.0) * 100, color: '#34d399', display: `${pressure} psi`, unit: '' },
          { label: 'Temperature', value: ((temp - 18) / 8) * 100, color: '#fbbf24', display: `${temp}°C`, unit: '' },
        ].map((g, i) => (
          <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-sm">
            <GaugeRing value={g.value} max={g.max || 100} color={g.color} size={72} />
            {g.display && (
              <p className="text-xs font-mono font-bold mt-1" style={{ color: g.color }}>{g.display}</p>
            )}
            <p className="text-[10px] font-mono text-slate-400 mt-1 text-center">{g.label}</p>
          </div>
        ))}
      </div>

      {/* System Status Grid */}
      <div className="rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-cyan-950 flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Subsystem Health Monitor
          </h3>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-cyan-950/50">
          {sysState.map((sys) => (
            <div key={sys.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 hover:bg-slate-50/60 dark:hover:bg-[#09132c]/50 transition-colors">
              <div className="flex items-start sm:items-center gap-3">
                {sys.ok
                  ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                  : <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0 animate-pulse" />
                }
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{sys.label}</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">{sys.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-7 sm:ml-0">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${sys.ok
                  ? 'text-emerald-400 bg-emerald-950 border-emerald-800'
                  : 'text-amber-400 bg-amber-950 border-amber-800'}`}>
                  {sys.ok ? 'NOMINAL' : 'ALERT'}
                </span>
                <button
                  onClick={() => toggleSystem(sys.id)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg border border-slate-200 dark:border-cyan-900 text-slate-500 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  Override
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cabin Atmospheric Breakdown */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950">
        <h3 className="text-xs font-orbitron font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Leaf className="w-4 h-4 text-emerald-400" />
          Cabin Atmospheric Composition
        </h3>
        <div className="space-y-3">
          {[
            { gas: 'Nitrogen (N₂)', pct: 78.1, color: 'bg-blue-400', val: '78.1%' },
            { gas: 'Oxygen (O₂)', pct: 21.0, color: 'bg-cyan-400', val: '21.0%' },
            { gas: 'Argon (Ar)', pct: 0.86, color: 'bg-violet-400', val: '0.86%' },
            { gas: 'Carbon Dioxide (CO₂)', pct: 0.04, color: 'bg-rose-400', val: `${co2.toFixed(3)}%` },
          ].map((g) => (
            <div key={g.gas} className="flex items-center gap-3 text-xs font-mono">
              <span className="w-44 text-slate-500 shrink-0">{g.gas}</span>
              <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className={`${g.color} h-full rounded-full transition-all duration-700`} style={{ width: `${Math.min(g.pct * 4.7, 100)}%` }} />
              </div>
              <span className="w-12 text-right font-bold text-slate-900 dark:text-white">{g.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
