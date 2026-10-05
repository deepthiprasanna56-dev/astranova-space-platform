import React, { useState } from 'react';
import { 
  Search, 
  Rocket, 
  RotateCw, 
  Radio, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  ChevronLeft, 
  ChevronRight, 
  Satellite, 
  Compass
} from 'lucide-react';

export default function DataTable({ onActionNotification }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const [fleet, setFleet] = useState([
    {
      id: 'ASTRA-01',
      name: 'Vanguard Star-Liner IX',
      type: 'Manned Crew Transport',
      target: 'Lunar Gateway L2',
      status: 'in-orbit',
      hull: 98,
      fuel: '84% Xenon',
      crew: '6 Astronauts',
      lastPing: '3m ago',
    },
    {
      id: 'ASTRA-02',
      name: 'Ares Pioneer Mars Lander',
      type: 'Atmospheric Entry Lander',
      target: 'Mars Jezero Basin',
      status: 'surface-active',
      hull: 94,
      fuel: '62% Methane',
      crew: '4 Specialists',
      lastPing: '8m ago',
    },
    {
      id: 'ASTRA-03',
      name: 'Oceanus Cryo-Drill Probe',
      type: 'Autonomous Ocean Drill',
      target: 'Europa Subsurface',
      status: 'in-orbit',
      hull: 99,
      fuel: '91% RTG Core',
      crew: 'Autonomous AI',
      lastPing: '1m ago',
    },
    {
      id: 'ASTRA-04',
      name: 'Chronos Heavy Cargo Shuttle',
      type: 'Cargo & Habitat Modules',
      target: 'Titan Kraken Mare',
      status: 'maneuvering',
      hull: 88,
      fuel: '49% Liquid H2',
      crew: '2 Pilots',
      lastPing: 'Just now',
    },
    {
      id: 'ASTRA-05',
      name: 'Helios Sun Grazing Probe',
      type: 'Solar Wind Observatory',
      target: 'Lagrange Point L1',
      status: 'in-orbit',
      hull: 96,
      fuel: '100% Solar-Ion',
      crew: 'Unmanned',
      lastPing: '24m ago',
    },
    {
      id: 'ASTRA-06',
      name: 'Artemis Subsurface Hab-03',
      type: 'Permanent Lava Tube Base',
      target: 'Moon Shackleton Crater',
      status: 'surface-active',
      hull: 100,
      fuel: '100% Fusion',
      crew: '18 Scientists',
      lastPing: '12m ago',
    }
  ]);

  const filteredFleet = fleet.filter((craft) => {
    const matchesFilter = filter === 'all' || craft.status === filter;
    const matchesSearch = craft.name.toLowerCase().includes(search.toLowerCase()) || 
                          craft.target.toLowerCase().includes(search.toLowerCase()) ||
                          craft.type.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleVectorBurn = (craft) => {
    setFleet(fleet.map(c => c.id === craft.id ? { ...c, status: 'maneuvering' } : c));
    if (onActionNotification) {
      onActionNotification(`Vector adjustment thruster burn commanded for ${craft.name}`);
    }
    setTimeout(() => {
      setFleet(prev => prev.map(c => c.id === craft.id ? { ...c, status: 'in-orbit', lastPing: 'Just now' } : c));
      if (onActionNotification) {
        onActionNotification(`Delta-V burn completed: ${craft.name} trajectory stabilized`);
      }
    }, 2000);
  };

  const handlePingComms = (craft) => {
    if (onActionNotification) {
      onActionNotification(`DSN X-Band transponder telemetry echoed from ${craft.name} (Latency: 1.28s)`);
    }
  };

  return (
    <div className="mt-6 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-sm overflow-hidden">
      
      {/* Table Header with Filters and Search */}
      <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-cyan-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-orbitron font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Rocket className="w-4 h-4 text-cyan-400" />
            Interplanetary Fleet & Probe Manifest
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
            Active deep space vessels, landers, and orbital stations under AstraNova command
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-cyan-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fleet vessels..."
              className="pl-8 pr-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-[#040816] border border-transparent focus:border-cyan-500 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-[#040816] rounded-xl text-xs font-mono font-semibold">
            {['all', 'in-orbit', 'surface-active', 'maneuvering'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-lg capitalize transition-all ${
                  filter === f
                    ? 'bg-cyan-500 text-black font-bold shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-cyan-400'
                }`}
              >
                {f.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-50/75 dark:bg-[#040816] text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-cyan-950 text-[11px]">
            <tr>
              <th className="py-3 px-4 sm:px-6">Vessel Callsign</th>
              <th className="py-3 px-4">Mission Role</th>
              <th className="py-3 px-4">Celestial Target</th>
              <th className="py-3 px-4">Flight Status</th>
              <th className="py-3 px-4">Hull & Fuel</th>
              <th className="py-3 px-4">Crew Complement</th>
              <th className="py-3 px-4">Telemetry Echo</th>
              <th className="py-3 px-4 text-right">Maneuvers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-cyan-950/60 font-medium">
            {filteredFleet.length === 0 ? (
              <tr>
                <td colSpan="8" className="py-8 text-center text-slate-400">
                  No spacecraft found matching criteria.
                </td>
              </tr>
            ) : (
              filteredFleet.map((craft) => (
                <tr 
                  key={craft.id}
                  className="hover:bg-slate-50/60 dark:hover:bg-[#09132c]/50 transition-colors"
                >
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                    <span className="text-cyan-600 dark:text-cyan-400">{craft.name}</span>
                    <span className="block text-[10px] text-slate-400">{craft.id}</span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                    {craft.type}
                  </td>

                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    {craft.target}
                  </td>

                  <td className="py-3.5 px-4">
                    {craft.status === 'in-orbit' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800">
                        <Satellite className="w-3 h-3" />
                        In Orbit
                      </span>
                    )}
                    {craft.status === 'surface-active' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        Surface Base
                      </span>
                    )}
                    {craft.status === 'maneuvering' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Delta-V Burn
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="w-24">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>{craft.hull}% Hull</span>
                        <span>{craft.fuel}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${craft.hull}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                    {craft.crew}
                  </td>

                  <td className="py-3.5 px-4 text-slate-400 text-[10px]">
                    {craft.lastPing}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleVectorBurn(craft)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Command Delta-V Vector Burn"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handlePingComms(craft)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Transponder Ping"
                      >
                        <Radio className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-cyan-950 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Displaying {filteredFleet.length} active solar spacecraft</span>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg border border-slate-200 dark:border-cyan-950 opacity-50" disabled>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold px-2">Page 1 of 1</span>
          <button className="p-1.5 rounded-lg border border-slate-200 dark:border-cyan-950 opacity-50" disabled>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
