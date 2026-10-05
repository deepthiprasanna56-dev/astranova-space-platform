import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Server, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Activity,
  Layers,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function StatCards({ statsData }) {
  const cards = [
    {
      title: 'Cloud Cost Optimization',
      value: statsData?.costSavings || '$148,250',
      change: '+18.4%',
      trend: 'up',
      subtitle: 'vs previous 30 days',
      icon: DollarSign,
      color: 'from-blue-600 to-indigo-600',
      bgLight: 'bg-indigo-50/70',
      textLight: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      title: 'Active Kubernetes Nodes',
      value: statsData?.activeNodes || '1,284',
      change: '+8.2%',
      trend: 'up',
      subtitle: 'Across 12 global regions',
      icon: Server,
      color: 'from-purple-600 to-pink-600',
      bgLight: 'bg-purple-50/70',
      textLight: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Average p99 Latency',
      value: statsData?.latency || '14.2 ms',
      change: '-24.8%',
      trend: 'improved',
      subtitle: 'Sub-millisecond edge routing',
      icon: Clock,
      color: 'from-emerald-600 to-teal-600',
      bgLight: 'bg-emerald-50/70',
      textLight: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'System Health & SLA',
      value: statsData?.uptime || '99.998%',
      change: '100% OK',
      trend: 'optimal',
      subtitle: 'Zero critical incidents',
      icon: ShieldCheck,
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50/70',
      textLight: 'text-amber-600 dark:text-amber-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const isPositive = card.trend === 'up' || card.trend === 'improved' || card.trend === 'optimal';
        return (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {card.title}
              </span>
              <div className={`p-2.5 rounded-xl ${card.bgLight} dark:bg-slate-800 ${card.textLight} group-hover:scale-105 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {card.value}
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-1 font-semibold">
                {card.trend === 'improved' || card.trend === 'up' ? (
                  <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    {card.change}
                  </span>
                ) : (
                  <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {card.change}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                {card.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
