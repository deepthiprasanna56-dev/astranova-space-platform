import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  BarChart3, 
  Database, 
  Cloud, 
  Layers, 
  Lock, 
  Server, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Users
} from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  const [billingPeriod, setBillingPeriod] = useState('annual'); // 'monthly' | 'annual'
  const [activeMetricTab, setActiveMetricTab] = useState('performance');

  const metricTabs = {
    performance: {
      title: 'Sub-millisecond Latency',
      stat: '0.42 ms',
      sub: 'p99 Global Response Time',
      badge: '94% faster than standard pipelines',
      description: 'Distributed edge caching and instant streaming query execution across 280+ edge nodes globally.'
    },
    efficiency: {
      title: 'Compute Optimization',
      stat: '$148.5K',
      sub: 'Average Annual Savings',
      badge: 'Up to 38% reduced cloud spend',
      description: 'Dynamic resource re-allocation continuously trims over-provisioned Kubernetes clusters and unattached EBS volumes.'
    },
    reliability: {
      title: 'Zero Downtime Architecture',
      stat: '99.999%',
      sub: 'Guaranteed Production SLA',
      badge: 'Automated self-healing',
      description: 'Autonomous failover triggers health checkpoints and routes traffic away from degraded pods without human intervention.'
    }
  };

  const features = [
    {
      icon: Cpu,
      title: 'Autonomous Intelligence Engine',
      description: 'Deep neural networks analyze telemetry patterns to predict capacity crunches and bottlenecks before they hit production.',
      tag: 'AI-Powered',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Activity,
      title: 'Real-time Streaming Analytics',
      description: 'Process millions of events per second with microsecond latency using our zero-allocation memory pipeline.',
      tag: 'Ultra Fast',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise SOC-2 Security',
      description: 'End-to-end envelope encryption, automated compliance audit logs, and granular RBAC for sensitive infrastructure.',
      tag: 'Bank-Grade',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Mesh Observability',
      description: 'Single pane of glass unifying telemetry across AWS, Google Cloud, Azure, and bare-metal Kubernetes nodes.',
      tag: 'Hybrid Cloud',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Zap,
      title: 'Instant Event Webhooks',
      description: 'Push triggers to Slack, PagerDuty, Discord, or custom serverless endpoints whenever anomaly thresholds are met.',
      tag: 'DevOps Ready',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Layers,
      title: 'Automated Root-Cause Analysis',
      description: 'Pinpoint breaking commits, memory leaks, and cascading API errors with pinpoint contextual trace graphs.',
      tag: 'Zero Guesswork',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      company: 'HyperScale Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      quote: 'NexusAI cut our Mean-Time-To-Resolution (MTTR) by 76%. What used to take our SRE team three hours of log-digging now surfaces as a resolved action in seconds.',
      rating: 5
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Platform Engineering',
      company: 'QuantData Labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      quote: 'The real-time dashboard and telemetry visualization are years ahead of the competition. It transformed how our 200+ engineers monitor distributed services.',
      rating: 5
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Architect',
      company: 'Novus FinTech',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      quote: 'We migrated 15 microservices onto NexusAI in an afternoon. The dark-mode dashboard is pure art, and the alerting intelligence is astonishingly accurate.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: billingPeriod === 'annual' ? 24 : 29,
      desc: 'Essential analytics and metrics for high-velocity startup teams.',
      features: [
        'Up to 10 Managed Services',
        '100M Telemetry Events / month',
        '14-day metric retention',
        'Email & Slack notifications',
        'Community & Standard support',
        'Standard Dashboards'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: billingPeriod === 'annual' ? 68 : 79,
      desc: 'Full autonomous intelligence, tracing, and multi-cloud optimization.',
      features: [
        'Unlimited Managed Services',
        '1 Billion Telemetry Events / month',
        '90-day granular retention',
        'Autonomous AI Anomaly Detection',
        'Custom Webhooks & PagerDuty integration',
        '24/7 Priority Support (1hr SLA)',
        'Advanced Team RBAC & SSO'
      ],
      popular: true,
      cta: 'Get Started with Pro'
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'annual' ? 160 : 199,
      desc: 'Dedicated infrastructure, custom SLAs, and on-premise hybrid agents.',
      features: [
        'Infinite Telemetry Scaling',
        'Full Custom Data Retention',
        'Dedicated Solutions Architect',
        'Custom ML Model Fine-Tuning',
        'SOC-2 Type II & HIPAA compliance',
        'Custom Security Review & Pen-Testing',
        '99.999% Guaranteed SLA'
      ],
      popular: false,
      cta: 'Contact Enterprise'
    }
  ];

  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28 text-center">
        {/* Release Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 mb-8 animate-fade-in hover:scale-105 transition-transform cursor-pointer shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
          <span>Announcing NexusAI 2.4</span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
            Autonomous Incident Mitigation <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15]">
          Intelligent Observability &{' '}
          <span className="gradient-text">Real-Time Cloud</span> Operations
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          NexusAI is the next-generation observability suite that unifies logs, metrics, traces, and predictive AI into a single lightning-fast dashboard. Resolve incidents before they impact users.
        </p>

        {/* Hero Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => onNavigate('login')}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5"
          >
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center justify-center gap-2.5"
          >
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Explore Live Dashboard</span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 5-minute setup
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> SOC-2 Certified
          </span>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Outer glow frame */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent shadow-2xl">
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700/60 text-left">
              {/* Window Controls Bar */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-emerald-400" /> https://app.nexusai.cloud/production/cluster-us-east
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Stream
                  </span>
                  <button 
                    onClick={() => onNavigate('dashboard')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
                  >
                    Open Full View <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Inside Mockup Content */}
              <div className="p-4 sm:p-6 bg-slate-950/95 space-y-5">
                {/* Top quick stats in mockup */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[11px] font-medium text-slate-400">Global Cluster Health</span>
                    <div className="text-xl font-bold text-white mt-1">99.998%</div>
                    <span className="text-[10px] text-emerald-400 font-medium">All 48 Nodes Stable</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[11px] font-medium text-slate-400">Query Throughput</span>
                    <div className="text-xl font-bold text-white mt-1">2.4M req/s</div>
                    <span className="text-[10px] text-indigo-400 font-medium">+14.2% peak surge</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[11px] font-medium text-slate-400">Median Latency</span>
                    <div className="text-xl font-bold text-white mt-1">1.8 ms</div>
                    <span className="text-[10px] text-emerald-400 font-medium">-0.4ms optimization</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[11px] font-medium text-slate-400">Security Threats</span>
                    <div className="text-xl font-bold text-emerald-400 mt-1">0 Active</div>
                    <span className="text-[10px] text-slate-400 font-medium">WAF Rules Enforced</span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">Real-time Ingress & Egress Traffic Distribution</span>
                    <span className="font-mono text-indigo-400">Live Telemetry Sync</span>
                  </div>
                  {/* Visual simulated stream bars */}
                  <div className="h-28 flex items-end gap-1.5 sm:gap-2 pt-4">
                    {[45, 62, 58, 80, 92, 75, 88, 96, 68, 84, 91, 100, 78, 86, 94, 82, 89, 95, 72, 85, 93, 88].map((val, i) => (
                      <div key={i} className="flex-1 bg-slate-800/80 rounded-t overflow-hidden flex flex-col justify-end group">
                        <div 
                          style={{ height: `${val}%` }} 
                          className="w-full bg-gradient-to-t from-indigo-600 via-indigo-400 to-purple-400 rounded-t transition-all duration-500 group-hover:brightness-125"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>12:00 UTC</span>
                    <span>12:15 UTC</span>
                    <span>12:30 UTC</span>
                    <span>12:45 UTC</span>
                    <span>Current</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge 1 */}
          <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-float">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400">Cloud Efficiency</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">+38.5% ROI</p>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -bottom-5 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400">Autonomous Mitigation</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Resolved in 140ms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
            Trusted by modern infrastructure & engineering teams worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center opacity-70 dark:opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">CLOUDSCALE</div>
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">DATAVORTEX</div>
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">PULSEENGINE</div>
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">HYPERNET</div>
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">APEXSTACK</div>
            <div className="font-bold text-lg tracking-tight text-slate-700 dark:text-slate-300">QUANTFLOW</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            Engineered For Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Everything You Need To Operate Modern Cloud Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Replace dozens of fragmented monitoring tools with one unified high-performance operational intelligence suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => {
            const IconComponent = f.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${f.color} flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>Learn how it works</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Metric Showcase Section */}
      <section id="metrics" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
              Interactive Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Performance You Can Measure In Real Time
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Select a dimension to observe how NexusAI optimizes critical infrastructure metrics.
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex justify-center gap-2 p-1.5 bg-slate-800/80 rounded-2xl max-w-md mx-auto mb-10 border border-slate-700">
            {Object.keys(metricTabs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveMetricTab(key)}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl capitalize transition-all ${
                  activeMetricTab === key 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Metric Card Display */}
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                {metricTabs[activeMetricTab].badge}
              </span>
              <h3 className="text-2xl font-bold mt-2">
                {metricTabs[activeMetricTab].title}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {metricTabs[activeMetricTab].description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  Inspect in Live Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Calculated Benchmark</span>
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 my-2">
                {metricTabs[activeMetricTab].stat}
              </div>
              <span className="text-sm font-medium text-slate-300">
                {metricTabs[activeMetricTab].sub}
              </span>
              <div className="w-full mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Confidence: 99.8%</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            Customer Validation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Loved By Infrastructure Leaders
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            See how engineering teams around the world achieve uninterrupted reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Predictable Plans That Grow With You
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
              No hidden fees or unexpected surge charges. Choose the tier that matches your cloud scale.
            </p>

            {/* Toggle Monthly / Annual */}
            <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  billingPeriod === 'annual'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-md">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-2xl shadow-indigo-500/15 lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">{plan.desc}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">${plan.price}</span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">/ user / month</span>
                  </div>

                  <div className="mt-8 space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Includes:</p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <button
                    onClick={() => onNavigate('login')}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white p-8 sm:p-14 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4">
              Ready to Upgrade Your Cloud Observability?
            </h2>
            <p className="mt-4 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Join thousands of engineering teams who deploy faster and sleep better with NexusAI. Free 14-day trial with full feature access.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('login')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Get Started in 5 Minutes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto px-7 py-3.5 bg-indigo-700/60 hover:bg-indigo-700 border border-white/20 rounded-xl text-sm font-bold transition-all text-white flex items-center justify-center gap-2"
              >
                <span>View Dashboard Preview</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
