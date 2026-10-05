import React from 'react';
import { 
  Rocket, 
  Sun, 
  Wind, 
  Users, 
  ShieldCheck, 
  Compass, 
  Flame, 
  ArrowUpRight 
} from 'lucide-react';

export default function StatCards({ statsData }) {
  const cards = [
    {
      title: 'Orbital Velocity',
      value: statsData?.velocity || '27,480 km/h',
      change: 'Mach 22.4',
      subtitle: 'LEO Trajectory Vector',
      icon: Rocket,
      textLight: 'text-cyan-500',
      bgLight: 'bg-cyan-50 dark:bg-cyan-950/80',
    },
    {
      title: 'Solar Harvest Output',
      value: statsData?.solarEnergy || '4.82 GW',
      change: '+12.4% Flux',
      subtitle: 'Photovoltaic Wings (100% Sun)',
      icon: Sun,
      textLight: 'text-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-950/80',
    },
    {
      title: 'ECLSS Oxygen Purity',
      value: statsData?.oxygenPurity || '99.4% O2',
      change: '101.3 kPa',
      subtitle: 'Closed-Loop Bio-Recapture',
      icon: Wind,
      textLight: 'text-emerald-500',
      bgLight: 'bg-emerald-50 dark:bg-emerald-950/80',
    },
    {
      title: 'Active Orbiting Crew',
      value: statsData?.crewCount || '38 Personnel',
      change: '100% Nominal',
      subtitle: 'Across 6 Space Habitats',
      icon: Users,
      textLight: 'text-indigo-500',
      bgLight: 'bg-indigo-50 dark:bg-indigo-950/80',
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-sm hover:shadow-lg hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-orbitron font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {card.title}
              </span>
              <div className={`p-2.5 rounded-xl ${card.bgLight} ${card.textLight} group-hover:scale-105 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                {card.value}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-cyan-950 font-mono">
              <span className="text-cyan-500 font-bold flex items-center gap-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
                {card.change}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                {card.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
