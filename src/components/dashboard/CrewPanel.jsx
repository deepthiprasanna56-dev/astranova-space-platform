import React, { useState } from 'react';
import { Users, Star, Shield, Activity, Mail, CheckCircle2, Clock, Award } from 'lucide-react';

const crew = [
  {
    id: 'EVA-001', name: 'Cdr. Elena Vance', role: 'Flight Director', dept: 'Command', station: 'Gateway Alpha — Level 5',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    status: 'on-duty', vitals: { hr: 68, spo2: 99, temp: 36.7 }, missions: 4, eva: 12, days: 382,
    specialties: ['Orbital Mechanics', 'Mission Planning', 'EVA Operations'],
  },
  {
    id: 'PLT-002', name: 'Maj. Arjun Mehra', role: 'Chief Pilot', dept: 'Flight Ops', station: 'Gateway Alpha',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    status: 'on-duty', vitals: { hr: 72, spo2: 98, temp: 36.9 }, missions: 3, eva: 8, days: 274,
    specialties: ['Rendezvous & Docking', 'Lunar Approach', 'Emergency Procedures'],
  },
  {
    id: 'SCI-003', name: 'Dr. Yuki Tanaka', role: 'Chief Science Officer', dept: 'Research', station: 'Mars Jezero',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    status: 'surface-ops', vitals: { hr: 76, spo2: 97, temp: 36.5 }, missions: 2, eva: 3, days: 118,
    specialties: ['Astrobiology', 'Geochemistry', 'Sample Analysis'],
  },
  {
    id: 'ENG-004', name: 'Eng. Sofia Rossi', role: 'Systems Engineer', dept: 'Engineering', station: 'Gateway Alpha',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80',
    status: 'on-duty', vitals: { hr: 65, spo2: 99, temp: 36.6 }, missions: 2, eva: 6, days: 201,
    specialties: ['ECLSS Systems', 'Robotics', 'Power Systems'],
  },
  {
    id: 'MED-005', name: 'Dr. Marcus Webb', role: 'Flight Surgeon', dept: 'Medical', station: 'Gateway Alpha',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    status: 'rest-cycle', vitals: { hr: 58, spo2: 99, temp: 36.4 }, missions: 3, eva: 2, days: 340,
    specialties: ['Space Medicine', 'Radiation Countermeasures', 'Emergency Surgery'],
  },
  {
    id: 'ENG-006', name: 'Eng. Priya Sharma', role: 'Propulsion Specialist', dept: 'Engineering', station: 'Gateway Alpha',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    status: 'eva-active', vitals: { hr: 84, spo2: 97, temp: 37.1 }, missions: 2, eva: 9, days: 156,
    specialties: ['Ion Propulsion', 'VASIMR Systems', 'Xenon Management'],
  },
];

const statusCfg = {
  'on-duty':     { label: 'On Duty',      cls: 'text-emerald-400 bg-emerald-950 border-emerald-800', dot: 'bg-emerald-400' },
  'surface-ops': { label: 'Surface Ops',  cls: 'text-amber-400  bg-amber-950  border-amber-800',  dot: 'bg-amber-400 animate-pulse' },
  'rest-cycle':  { label: 'Rest Cycle',   cls: 'text-slate-400  bg-slate-900  border-slate-700',  dot: 'bg-slate-500' },
  'eva-active':  { label: 'EVA Active',   cls: 'text-cyan-400   bg-cyan-950   border-cyan-800',   dot: 'bg-cyan-400 animate-ping' },
};

const deptColor = {
  Command: 'bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400',
  'Flight Ops': 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400',
  Research: 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-400',
  Engineering: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400',
  Medical: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400',
};

export default function CrewPanel({ onToast }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = crew.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  const contactCrew = (member) => {
    onToast?.(`Priority message queued for ${member.name} via encrypted crew comms`);
  };

  const medCheck = (member) => {
    onToast?.(`Medical telemetry requested for ${member.name} — HR: ${member.vitals.hr} bpm, SpO₂: ${member.vitals.spo2}%`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" />
            Astronaut Crew Roster — Deep Space Personnel
          </h2>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            38 total crew across 3 active stations · showing active flight crew
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono flex-wrap">
          {Object.entries(statusCfg).map(([k, v]) => (
            <span key={k} className={`px-2.5 py-1 rounded-full border font-bold ${v.cls}`}>
              {crew.filter(c => c.status === k).length} {v.label}
            </span>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search crew by name or role..."
          className="flex-1 px-4 py-2 text-xs font-mono rounded-xl bg-white dark:bg-[#070e20] border border-slate-200 dark:border-cyan-950 focus:border-indigo-500 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-500"
        />
        <div className="inline-flex p-1 bg-slate-100 dark:bg-[#040816] rounded-xl text-xs font-mono font-semibold gap-1">
          {['all', 'on-duty', 'eva-active', 'surface-ops', 'rest-cycle'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap ${
                filter === f ? 'bg-cyan-500 text-black font-bold shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-cyan-400'
              }`}
            >
              {f === 'all' ? 'All' : statusCfg[f]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Crew Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(member => {
          const cfg = statusCfg[member.status];
          return (
            <div
              key={member.id}
              onClick={() => setSelected(selected?.id === member.id ? null : member)}
              className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer transition-all"
            >
              {/* Top row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-400/50"
                  />
                  <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#070e20] ${cfg.dot}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{member.name}</p>
                  <p className="text-[10px] font-mono text-slate-400 truncate">{member.role}</p>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${cfg.cls}`}>{cfg.label}</span>
                </div>
              </div>

              {/* Dept + Station */}
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                <span className={`px-2 py-0.5 rounded font-semibold ${deptColor[member.dept] || ''}`}>{member.dept}</span>
                <span className="text-slate-400 truncate ml-2">{member.station}</span>
              </div>

              {/* Mission stats */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono mb-4 p-2.5 rounded-xl bg-slate-50 dark:bg-[#040816]">
                <div><p className="text-slate-400">Missions</p><p className="font-bold text-slate-900 dark:text-white">{member.missions}</p></div>
                <div><p className="text-slate-400">EVA Hours</p><p className="font-bold text-cyan-400">{member.eva * 7}h</p></div>
                <div><p className="text-slate-400">Days In Space</p><p className="font-bold text-indigo-400">{member.days}</p></div>
              </div>

              {/* Vitals */}
              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono mb-4">
                <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-center">
                  <p className="text-rose-400 font-bold">{member.vitals.hr} bpm</p>
                  <p className="text-slate-400">Heart Rate</p>
                </div>
                <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-center">
                  <p className="text-cyan-400 font-bold">{member.vitals.spo2}%</p>
                  <p className="text-slate-400">SpO₂</p>
                </div>
                <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-center">
                  <p className="text-amber-400 font-bold">{member.vitals.temp}°C</p>
                  <p className="text-slate-400">Core Temp</p>
                </div>
              </div>

              {/* Expanded specialties */}
              {selected?.id === member.id && (
                <div className="mb-4 space-y-1">
                  <p className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">Specialties</p>
                  {member.specialties.map(s => (
                    <span key={s} className="inline-block mr-1 mb-1 text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={e => { e.stopPropagation(); contactCrew(member); }}
                  className="flex-1 py-2 rounded-xl text-[10px] font-orbitron font-bold uppercase tracking-wider bg-indigo-500 hover:bg-indigo-400 text-white transition-colors flex items-center justify-center gap-1"
                >
                  <Mail className="w-3 h-3" /> Contact
                </button>
                <button
                  onClick={e => { e.stopPropagation(); medCheck(member); }}
                  className="flex-1 py-2 rounded-xl text-[10px] font-orbitron font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-white transition-colors flex items-center justify-center gap-1"
                >
                  <Activity className="w-3 h-3" /> Med Check
                </button>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 text-xs font-mono">
            No crew members found matching the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
