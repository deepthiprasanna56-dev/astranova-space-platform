import React, { useState, useEffect } from 'react';
import { Flame, Zap, Activity, RotateCw, AlertTriangle, CheckCircle2, Gauge } from 'lucide-react';

const thrusters = [
  { id: 'T1', name: 'Ion Thruster Bank α', type: 'Xenon Hall-Effect', thrust: '2.4 N', isp: '9,600s', power: '50 kW', status: 'firing', temp: 1840 },
  { id: 'T2', name: 'Ion Thruster Bank β', type: 'Xenon Hall-Effect', thrust: '2.4 N', isp: '9,600s', power: '50 kW', status: 'standby', temp: 312 },
  { id: 'T3', name: 'Plasma Pulse Engine γ', type: 'VASIMR RF-200', thrust: '5.7 N', isp: '30,000s', power: '200 kW', status: 'firing', temp: 2640 },
  { id: 'T4', name: 'RCS Attitude Array δ', type: '12× Mono-prop thrusters', thrust: '22 N (×12)', isp: '2,200s', power: '0.8 kW', status: 'nominal', temp: 480 },
  { id: 'T5', name: 'Emergency Retro ε', type: 'Solid-Fuel Braking', thrust: '440 N', isp: '280s', power: 'N/A', status: 'armed', temp: 21 },
];

const statusCfg = {
  firing:  { label: 'Firing',  cls: 'text-cyan-400 bg-cyan-950 border-cyan-800', dot: 'bg-cyan-400 animate-ping' },
  standby: { label: 'Standby', cls: 'text-slate-400 bg-slate-900 border-slate-700', dot: 'bg-slate-500' },
  nominal: { label: 'Nominal', cls: 'text-emerald-400 bg-emerald-950 border-emerald-800', dot: 'bg-emerald-400' },
  armed:   { label: 'Armed',   cls: 'text-amber-400 bg-amber-950 border-amber-800', dot: 'bg-amber-400 animate-pulse' },
};

export default function PropulsionPanel({ onToast }) {
  const [fleet, setFleet] = useState(thrusters);
  const [xenon, setXenon] = useState(84.6);
  const [totalDeltaV, setTotalDeltaV] = useState(3840);
  const [commandLog, setCommandLog] = useState([
    { t: '16:22:04', msg: 'Thruster Bank α firing — 420s circularization burn', color: 'text-cyan-400' },
    { t: '16:08:11', msg: 'VASIMR Plasma Engine γ — RF power output 198.4 kW', color: 'text-emerald-400' },
    { t: '15:54:29', msg: 'RCS array δ — 12-thruster attitude correction nominal', color: 'text-slate-400' },
  ]);

  const fireThrust = (id) => {
    setFleet(prev => prev.map(t => {
      if (t.id !== id) return t;
      const next = t.status === 'firing' ? 'standby' : 'firing';
      return { ...t, status: next, temp: next === 'firing' ? t.temp + 400 : Math.max(300, t.temp - 200) };
    }));
    const t = fleet.find(x => x.id === id);
    const newStatus = t.status === 'firing' ? 'cut off' : 'ignition commanded';
    const now = new Date().toLocaleTimeString('en-US', { hour12: false });
    setCommandLog(l => [{ t: now, msg: `${t.name} — ${newStatus}`, color: 'text-amber-400' }, ...l.slice(0, 4)]);
    onToast?.(`${t.name} ${newStatus} via Flight Control`);
    setXenon(x => +(x - 0.3 + Math.random() * 0.1).toFixed(1));
    setTotalDeltaV(v => v + 12);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            Ion Propulsion Control — Deep Space Drive
          </h2>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            Xenon ion thruster array · VASIMR plasma engine · RCS attitude control
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-2 rounded-xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-950">
            <p className="text-slate-400">Xenon Remaining</p>
            <p className="text-cyan-400 font-bold text-base">{xenon}%</p>
          </div>
          <div className="px-3 py-2 rounded-xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-950">
            <p className="text-slate-400">Δv Achieved</p>
            <p className="text-emerald-400 font-bold text-base">{totalDeltaV.toLocaleString()} m/s</p>
          </div>
        </div>
      </div>

      {/* Xenon Fuel Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-400">
          <Gauge className="w-5 h-5" />
        </div>
        <div className="flex-1 font-mono">
          <div className="flex justify-between text-xs font-semibold mb-2">
            <span className="text-slate-700 dark:text-slate-300">Xenon Propellant Tank — Primary</span>
            <span className="text-cyan-400 font-bold">{xenon}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${xenon}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Estimated burn time remaining: ~{Math.round(xenon * 2.8)} hours at full thrust</p>
        </div>
      </div>

      {/* Thruster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {fleet.map((t) => {
          const cfg = statusCfg[t.status];
          return (
            <div key={t.id} className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 hover:border-orange-500/50 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${cfg.cls}`}>
                    {cfg.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{t.id}</span>
              </div>

              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-0.5">{t.name}</h3>
              <p className="text-[10px] font-mono text-slate-400 mb-3">{t.type}</p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] font-mono mb-4">
                <div className="flex justify-between"><span className="text-slate-400">Thrust:</span><span className="text-white font-semibold">{t.thrust}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Isp:</span><span className="text-cyan-400 font-semibold">{t.isp}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Power:</span><span className="text-amber-400 font-semibold">{t.power}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Temp:</span><span className={`font-semibold ${t.temp > 1000 ? 'text-rose-400' : 'text-emerald-400'}`}>{t.temp}°C</span></div>
              </div>

              <button
                onClick={() => fireThrust(t.id)}
                disabled={t.status === 'armed'}
                className={`w-full py-2 rounded-xl text-[11px] font-orbitron font-bold uppercase tracking-wider transition-all ${
                  t.status === 'armed'
                    ? 'bg-amber-950 text-amber-400 border border-amber-800 cursor-not-allowed'
                    : t.status === 'firing'
                    ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-md'
                }`}
              >
                {t.status === 'firing' ? '⬛ Cut Thrust' : t.status === 'armed' ? '🔒 Armed – Standby' : '🔥 Ignite Thrust'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Command Log */}
      <div className="rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-cyan-950 flex items-center gap-2">
          <Activity className="w-4 h-4 text-orange-400" />
          <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Propulsion Event Log
          </h3>
        </div>
        <div className="bg-[#030712] p-4 font-mono text-xs space-y-1.5 h-40 overflow-y-auto">
          {commandLog.map((e, i) => (
            <p key={i}><span className="text-slate-600">[{e.t}]</span> <span className={e.color}>{e.msg}</span></p>
          ))}
        </div>
      </div>
    </div>
  );
}
