import React, { useState, useEffect } from 'react';
import { Radio, Wifi, Signal, AlertTriangle, CheckCircle2, Send, RefreshCw, Globe } from 'lucide-react';

const relays = [
  {
    id: 'DSN-CAN', name: 'Canberra Deep Space Station', location: 'Australia', band: 'X-Band / Ka-Band',
    dish: '70m DSS-43', latency: '1.28s', uplink: '2.115 GHz', downlink: '2.295 GHz', signalStrength: 92, status: 'locked',
  },
  {
    id: 'DSN-GDS', name: 'Goldstone Complex', location: 'California, USA', band: 'X-Band / S-Band',
    dish: '70m DSS-14', latency: '1.29s', uplink: '2.025 GHz', downlink: '2.200 GHz', signalStrength: 87, status: 'locked',
  },
  {
    id: 'DSN-MAD', name: 'Madrid Deep Space Station', location: 'Spain', band: 'Ka-Band',
    dish: '35m DSS-65', latency: '1.31s', uplink: '31.8 GHz', downlink: '26.0 GHz', signalStrength: 74, status: 'standby',
  },
  {
    id: 'QNT-L1', name: 'Quantum Relay Node L1', location: 'Earth-Sun L1 Lagrange', band: 'Quantum Entangled',
    dish: 'Photon Array', latency: '0.00s', uplink: 'Entangled', downlink: 'Entangled', signalStrength: 99, status: 'locked',
  },
  {
    id: 'RELAY-MARS', name: 'Mars Reconnaissance Relay', location: 'Mars Orbit', band: 'UHF / X-Band',
    dish: '3m HGA', latency: '8m 22s', uplink: '437.1 MHz', downlink: '401.6 MHz', signalStrength: 61, status: 'limited',
  },
];

const statusCfg = {
  locked:  { cls: 'text-emerald-400 bg-emerald-950 border-emerald-800', label: 'Signal Locked' },
  standby: { cls: 'text-slate-400 bg-slate-900 border-slate-700', label: 'Standby' },
  limited: { cls: 'text-amber-400 bg-amber-950 border-amber-800', label: 'Limited Link' },
};

const SignalBars = ({ strength }) => {
  const bars = 5;
  const filled = Math.round((strength / 100) * bars);
  const color = strength >= 80 ? '#22d3ee' : strength >= 60 ? '#fbbf24' : '#f87171';
  return (
    <div className="flex items-end gap-0.5 h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 rounded-sm transition-all"
          style={{
            height: `${((i + 1) / bars) * 100}%`,
            background: i < filled ? color : '#1e293b',
          }}
        />
      ))}
    </div>
  );
};

export default function CommsPanel({ onToast }) {
  const [stations, setStations] = useState(relays);
  const [message, setMessage] = useState('');
  const [txLog, setTxLog] = useState([
    { t: '16:21:00', dir: '↑ TX', station: 'DSN-CAN', msg: 'Thruster burn command uplinked', ok: true },
    { t: '16:09:45', dir: '↓ RX', station: 'QNT-L1', msg: 'Crew status report from Ares Prime', ok: true },
    { t: '15:58:12', dir: '↓ RX', station: 'RELAY-MARS', msg: 'Mars weather telemetry packet (partial)', ok: false },
  ]);

  useEffect(() => {
    const iv = setInterval(() => {
      setStations(prev => prev.map(s => ({
        ...s,
        signalStrength: Math.min(100, Math.max(40, s.signalStrength + (Math.random() > 0.5 ? 1 : -1))),
      })));
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  const transmit = () => {
    if (!message.trim()) return;
    const active = stations.find(s => s.status === 'locked');
    const now = new Date().toLocaleTimeString('en-US', { hour12: false });
    setTxLog(l => [{ t: now, dir: '↑ TX', station: active?.id || 'DSN-CAN', msg: message, ok: true }, ...l.slice(0, 9)]);
    onToast?.(`Signal uplinked via ${active?.name || 'Canberra'}: "${message.slice(0, 40)}"`);
    setMessage('');
  };

  const pingStation = (id) => {
    const s = stations.find(x => x.id === id);
    onToast?.(`Transponder echo from ${s.name} — Latency: ${s.latency}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Radio className="w-5 h-5 text-violet-400" />
            Deep Space Network Relay Control
          </h2>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            DSN ground stations · quantum relay nodes · interplanetary uplink/downlink
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
            {stations.filter(s => s.status === 'locked').length} Locked
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800 font-bold">
            {stations.filter(s => s.status === 'limited').length} Limited
          </span>
        </div>
      </div>

      {/* Relay Station Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {stations.map((s) => {
          const cfg = statusCfg[s.status];
          return (
            <div key={s.id} className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 hover:border-violet-500/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${cfg.cls}`}>
                    {cfg.label}
                  </span>
                </div>
                <SignalBars strength={s.signalStrength} />
              </div>

              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">{s.name}</h3>
              <p className="text-[10px] font-mono text-slate-400 mb-3">
                <Globe className="w-3 h-3 inline mr-1" />{s.location} · {s.dish}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] font-mono mb-4">
                <div className="flex justify-between col-span-2">
                  <span className="text-slate-400">Signal Strength</span>
                  <span className={`font-bold ${s.signalStrength >= 80 ? 'text-cyan-400' : s.signalStrength >= 60 ? 'text-amber-400' : 'text-rose-400'}`}>
                    {s.signalStrength}%
                  </span>
                </div>
                <div className="flex justify-between"><span className="text-slate-400">Band:</span><span className="text-white">{s.band}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Latency:</span><span className="text-violet-400 font-bold">{s.latency}</span></div>
                <div className="flex justify-between col-span-2"><span className="text-slate-400">↑ Uplink:</span><span className="text-emerald-400">{s.uplink}</span></div>
                <div className="flex justify-between col-span-2"><span className="text-slate-400">↓ Downlink:</span><span className="text-cyan-400">{s.downlink}</span></div>
              </div>

              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${s.signalStrength >= 80 ? 'bg-cyan-400' : s.signalStrength >= 60 ? 'bg-amber-400' : 'bg-rose-400'}`}
                  style={{ width: `${s.signalStrength}%` }}
                />
              </div>

              <button
                onClick={() => pingStation(s.id)}
                className="w-full py-2 rounded-xl text-[11px] font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                Ping Transponder Echo
              </button>
            </div>
          );
        })}
      </div>

      {/* Uplink Composer */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950">
        <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Send className="w-4 h-4 text-violet-400" />
          Mission Uplink Composer
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && transmit()}
            placeholder="Type command or message to transmit to spacecraft..."
            className="flex-1 px-4 py-2.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-[#040816] border border-slate-200 dark:border-cyan-950 focus:border-violet-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-500"
          />
          <button
            onClick={transmit}
            disabled={!message.trim()}
            className="px-5 py-2.5 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            Transmit
          </button>
        </div>
      </div>

      {/* TX/RX Log */}
      <div className="rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-cyan-950 flex items-center gap-2">
          <Signal className="w-4 h-4 text-violet-400" />
          <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Uplink / Downlink Event Log
          </h3>
        </div>
        <div className="bg-[#030712] p-4 font-mono text-xs space-y-1.5 max-h-44 overflow-y-auto">
          {txLog.map((e, i) => (
            <p key={i}>
              <span className="text-slate-600">[{e.t}]</span>{' '}
              <span className={e.dir.startsWith('↑') ? 'text-cyan-400' : 'text-violet-400'}>{e.dir}</span>{' '}
              <span className="text-slate-500">[{e.station}]</span>{' '}
              <span className={e.ok ? 'text-slate-300' : 'text-amber-400'}>{e.msg}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
