import React, { useState } from 'react';
import { 
  Orbit, 
  Rocket, 
  Radio, 
  Compass, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cpu, 
  Wind, 
  Flame, 
  Radar, 
  CheckCircle2, 
  Clock, 
  Star, 
  ChevronRight,
  Sun,
  Eye,
  Activity
} from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  const [selectedPlanet, setSelectedPlanet] = useState('mars');
  const [transitEngine, setTransitEngine] = useState('ion');

  // Planetary simulation data
  const planetaryData = {
    moon: {
      name: 'Luna Shackleton Base',
      type: 'Earth Moon · South Pole',
      distance: '384,400 km',
      travelTime: '3 Days (Chemical Booster)',
      gravity: '0.166 g (16.6% Earth)',
      temperature: '-130°C to +120°C',
      atmosphere: 'Near Vacuum (Trace Helium/Argon)',
      waterIce: 'Estimated 600M metric tons in craters',
      badge: 'Permanent Lunar Gateway Station',
      color: 'from-slate-400 to-zinc-600',
      accent: 'text-slate-300'
    },
    mars: {
      name: 'Ares Prime Outpost',
      type: 'Mars · Jezero Basin Colony',
      distance: '225 Million km (Avg)',
      travelTime: '115 Days (Nuclear-Thermal Pulse)',
      gravity: '0.379 g (38% Earth)',
      temperature: '-63°C Average',
      atmosphere: '95.3% Carbon Dioxide, 2.6% N2',
      waterIce: 'Polar Ice Caps & Subsurface Glaciers',
      badge: 'Active Terraforming & Biosphere Alpha',
      color: 'from-amber-600 to-rose-700',
      accent: 'text-amber-400'
    },
    europa: {
      name: 'Oceanus Cryo-Drill',
      type: 'Jupiter Moon · Subsurface Ocean',
      distance: '628 Million km',
      travelTime: '2.4 Years (Gravity Slingshot)',
      gravity: '0.134 g',
      temperature: '-160°C Surface Crust',
      atmosphere: 'Trace Molecular Oxygen (O2)',
      waterIce: 'Global Liquid Saltwater Ocean under 15km Ice',
      badge: 'Target for Extraterrestrial Micro-Organisms',
      color: 'from-cyan-500 to-blue-700',
      accent: 'text-cyan-400'
    },
    titan: {
      name: 'Kraken Mare Station',
      type: 'Saturn Moon · Hydrocarbon Seas',
      distance: '1.4 Billion km',
      travelTime: '4.8 Years (High-Isp Ion Mesh)',
      gravity: '0.138 g',
      temperature: '-179°C Cryogenic Liquid',
      atmosphere: '98.4% Dense Nitrogen (1.45 atm)',
      waterIce: 'Liquid Methane/Ethane Rain & Lakes',
      badge: 'Abundant Cryo-Fuel Extraction Reserve',
      color: 'from-orange-500 to-amber-700',
      accent: 'text-orange-400'
    }
  };

  const techPillars = [
    {
      icon: Flame,
      title: 'Magnetoplasmadynamic Drives',
      desc: 'Superheated plasma accelerated by magnetic fields achieves exhaust velocities up to 110 km/s, slashing interplanetary transit times in half.',
      tag: 'Ion Propulsion',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Orbit,
      title: 'Centrifugal Gravity Rings',
      desc: 'Dual counter-rotating cylindrical habitats generate a continuous 1.0G Earth-equivalent vector, mitigating bone density loss on long voyages.',
      tag: 'Habitation',
      gradient: 'from-violet-500 to-indigo-600'
    },
    {
      icon: Wind,
      title: 'Closed-Loop ECLSS Biosphere',
      desc: 'Genetically engineered spirulina bioreactors produce 99.2% recyclable oxygen, water recapture, and fresh nutrient biomass in deep space.',
      tag: 'Life Support',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Radio,
      title: 'Quantum Deep-Space Relays',
      desc: 'Entangled photon transceiver arrays transmit gigabit telemetry streams across billions of kilometers with sub-nanosecond jitter.',
      tag: 'Communications',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: ShieldCheck,
      title: 'Active Magnetic Deflection',
      desc: 'Superconducting electromagnetic shields create an artificial magnetosphere around the hull, deflecting dangerous solar proton storms.',
      tag: 'Radiation Armor',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: Cpu,
      title: 'Autonomous Regolith Printing',
      desc: 'Heavy robotic rovers melt indigenous lunar and martian soil with concentrated solar mirrors to 3D-print pressurized habitat domes.',
      tag: 'Surface Base',
      gradient: 'from-sky-500 to-indigo-600'
    }
  ];

  const expeditions = [
    {
      name: 'Lunar Gateway Residency III',
      target: 'Moon High Orbit',
      date: 'Launch: Nov 14, 2026',
      duration: '45 Earth Days',
      seats: '2 Berths Remaining',
      vessel: 'Vanguard Star-Liner',
      price: 'Scientific & Civilian Access',
      status: 'Payload Assembled'
    },
    {
      name: 'Ares Pioneer Colonization',
      target: 'Mars Jezero Outpost',
      date: 'Launch: Jan 28, 2027',
      duration: '520 Earth Days (Round Trip)',
      seats: '4 Specialist Seats',
      vessel: 'Titan Heavy Explorer',
      price: 'Mission Clearance Req.',
      status: 'Booster Integration'
    },
    {
      name: 'Deep-Space Solar Observatory',
      target: 'Lagrange Point L2',
      date: 'Launch: March 04, 2027',
      duration: '180 Earth Days',
      seats: 'Autonomous Mission',
      vessel: 'Astra Probe IX',
      price: 'Research Consortium',
      status: 'Cryo Testing'
    }
  ];

  const currentPlanet = planetaryData[selectedPlanet];

  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background space void with glowing nebulae */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28 text-center">
        {/* Mission Status Ticker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 mb-8 animate-fade-in hover:scale-105 transition-transform cursor-pointer shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>LIVE MISSION: EUROPA CRYO-DRILL PASSING 4.2 AU</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
            Telemetry Optimal <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.12]">
          Civilization Beyond Earth.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
            The Solar Frontier
          </span>{' '}
          Awaits.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          AstraNova designs, builds, and operates interplanetary spacecraft, permanent orbital habitats, and autonomous robotic terraforming bases across the Solar System.
        </p>

        {/* Hero Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5"
          >
            <Radar className="w-5 h-5 text-slate-950" />
            <span>Launch Mission Control Deck</span>
          </button>

          <button
            onClick={() => onNavigate('login')}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-900/80 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-2xl shadow-sm hover:border-cyan-400 dark:hover:border-cyan-500 transition-all flex items-center justify-center gap-2.5"
          >
            <Rocket className="w-5 h-5 text-cyan-500" />
            <span>Astronaut Flight Clearance</span>
          </button>
        </div>

        {/* Key Metrics Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 38 Active Crew in Orbit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 14 Planetary Landers Deployed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% ECLSS Life-Support Recapture
          </span>
        </div>

        {/* Interactive Spacecraft HUD / Telemetry Showcase */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent shadow-2xl">
            <div className="bg-[#050b18] rounded-2xl overflow-hidden border border-cyan-950 text-left text-white">
              
              {/* Cockpit Window Header */}
              <div className="px-5 py-3.5 bg-[#030712] border-b border-cyan-950 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-cyan-500/80 animate-ping"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  </div>
                  <span className="text-xs font-orbitron font-semibold tracking-wider text-cyan-400">
                    ASTRA-IX STARSHIP // FLIGHT TELEMETRY HUD
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">THRUST VECTOR: 100% NOMINAL</span>
                  <button 
                    onClick={() => onNavigate('dashboard')}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline"
                  >
                    Control Deck →
                  </button>
                </div>
              </div>

              {/* Inside Cockpit HUD Visuals */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Orbital Velocity</span>
                    <div className="text-2xl font-orbitron font-bold text-cyan-300 mt-1">27,480 km/h</div>
                    <span className="text-[10px] text-emerald-400 font-mono">Mach 22.4 · LEO Vector</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Artificial Gravity</span>
                    <div className="text-2xl font-orbitron font-bold text-white mt-1">0.98 g</div>
                    <span className="text-[10px] text-cyan-400 font-mono">Centrifuge 4.2 RPM</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Cabin Oxygen Purity</span>
                    <div className="text-2xl font-orbitron font-bold text-white mt-1">99.4%</div>
                    <span className="text-[10px] text-emerald-400 font-mono">Pressure 101.3 kPa</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Shield Magnetic Flux</span>
                    <div className="text-2xl font-orbitron font-bold text-emerald-400 mt-1">4.2 Tesla</div>
                    <span className="text-[10px] text-slate-400 font-mono">Radiation Deflection Active</span>
                  </div>
                </div>

                {/* Simulated Trajectory & Orbit Graphic */}
                <div className="p-5 rounded-xl bg-[#030712] border border-cyan-950 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">
                      ● Interplanetary Slingshot Trajectory: Earth → Lunar Gateway → Mars Orbit
                    </span>
                    <span className="text-amber-400 font-semibold">T-MINUS 12h 44m TO BURNOUT</span>
                  </div>

                  {/* Visual orbital path */}
                  <div className="relative h-24 flex items-center justify-between px-6 overflow-hidden bg-slate-950/60 rounded-xl border border-slate-900">
                    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 opacity-60"></div>
                    
                    {/* Planet 1 Earth */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 ring-4 ring-blue-500/20 shadow-lg shadow-blue-500/40 flex items-center justify-center text-[10px] font-bold">
                        EARTH
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Departed</span>
                    </div>

                    {/* Ship Vector */}
                    <div className="relative z-10 flex flex-col items-center animate-pulse">
                      <div className="w-7 h-7 rounded-lg bg-cyan-400 text-black flex items-center justify-center shadow-lg shadow-cyan-400/50">
                        <Rocket className="w-4 h-4 rotate-45" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 font-bold mt-1">Current Position</span>
                    </div>

                    {/* Planet 2 Moon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-400 ring-2 ring-slate-300/30 flex items-center justify-center text-[9px] font-bold text-black">
                        LUNA
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Gateway L2</span>
                    </div>

                    {/* Planet 3 Mars */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-rose-600 ring-4 ring-rose-500/30 shadow-lg shadow-rose-500/40 flex items-center justify-center text-[10px] font-bold">
                        MARS
                      </div>
                      <span className="text-[10px] font-mono text-rose-300 mt-1">Destination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge 1 */}
          <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-[#070e20] backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-cyan-800/80 animate-float-slow">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Orbit className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Mission Status</p>
              <p className="text-xs font-orbitron font-bold text-slate-900 dark:text-white">Earth-Moon Transit</p>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -bottom-5 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-[#070e20] backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-cyan-800/80 animate-float-slow" style={{ animationDelay: '3s' }}>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Solar Array Yield</p>
              <p className="text-xs font-orbitron font-bold text-slate-900 dark:text-white">4.8 Gigawatts Output</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Planetary Habitability & Transit Simulator */}
      <section id="simulator" className="py-24 bg-slate-900/90 text-white relative border-y border-cyan-950">
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800">
              Interactive Mission Simulator
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4">
              Explore Our Planetary Outposts
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Select a celestial destination to inspect real-time orbital distance, gravitational specs, and surface survival telemetry.
            </p>

            {/* Destination Selection Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-[#030712] rounded-2xl max-w-lg mx-auto border border-cyan-950">
              {['moon', 'mars', 'europa', 'titan'].map((planet) => (
                <button
                  key={planet}
                  onClick={() => setSelectedPlanet(planet)}
                  className={`flex-1 py-2 px-3 text-xs font-orbitron uppercase font-bold rounded-xl transition-all ${
                    selectedPlanet === planet
                      ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {planet}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Planet Specification Card */}
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#050b18] border border-cyan-900/80 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                {currentPlanet.badge}
              </span>
              <h3 className="text-3xl font-display font-bold">
                {currentPlanet.name}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {currentPlanet.type}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Earth Distance</span>
                  <p className="text-sm font-bold text-white mt-0.5">{currentPlanet.distance}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Transit Duration</span>
                  <p className="text-sm font-bold text-cyan-400 mt-0.5">{currentPlanet.travelTime}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Surface Gravity</span>
                  <p className="text-sm font-bold text-white mt-0.5">{currentPlanet.gravity}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Surface Temp</span>
                  <p className="text-sm font-bold text-amber-400 mt-0.5">{currentPlanet.temperature}</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p><span className="text-white font-semibold">Atmospheric Composition:</span> {currentPlanet.atmosphere}</p>
                <p><span className="text-white font-semibold">Water / Volatiles:</span> {currentPlanet.waterIce}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Open {currentPlanet.name} Live Feed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Planet Sphere Mockup */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-[#081226] to-[#02050f] border border-cyan-950">
              <div className={`w-44 h-44 rounded-full bg-gradient-to-tr ${currentPlanet.color} shadow-2xl ring-4 ring-cyan-500/20 relative flex items-center justify-center overflow-hidden animate-pulse-glow`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#ffffff44,transparent_70%)]"></div>
                <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-white/80 drop-shadow">
                  {selectedPlanet}
                </span>
              </div>
              <div className="mt-4 text-center font-mono text-[11px] text-slate-400">
                <span>ORBITAL RECONNAISSANCE PASS: OK</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breakthrough Technology Pillars */}
      <section id="propulsion" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800">
            Deep Space Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4">
            Engineered For Permanent Interplanetary Habitation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            From high-impulse ion drives to closed-loop biospheres, explore the systems making human life multi-planetary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950/80 hover:border-cyan-500 dark:hover:border-cyan-500 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${p.gradient} flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-orbitron font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-cyan-950 flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Inspect Engineering Specifications</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flight Manifest & Expeditions Section */}
      <section id="expeditions" className="py-24 bg-slate-100/60 dark:bg-[#040916] border-y border-slate-200 dark:border-cyan-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800">
              Flight Manifest
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Upcoming Solar System Expeditions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              Review current launch windows and mission berths for scientific and civilian specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expeditions.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-cyan-950 shadow-md hover:border-cyan-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">{exp.target}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-bold text-[10px]">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {exp.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                    Vessel: {exp.vessel}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-cyan-950 text-xs font-medium text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Launch Window:</span>
                      <span className="font-mono text-slate-900 dark:text-white">{exp.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Mission Duration:</span>
                      <span className="font-mono text-slate-900 dark:text-white">{exp.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Berths Available:</span>
                      <span className="font-mono text-amber-500 font-bold">{exp.seats}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-cyan-950">
                  <button
                    onClick={() => onNavigate('login')}
                    className="w-full py-3 px-4 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
                  >
                    Request Flight Clearance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Control CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-14 border border-cyan-800/80 shadow-2xl">
          <div className="relative max-w-2xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Mission Control Clearance
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-4">
              Enter The Orbital Command Deck
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Inspect active spacecraft telemetry, control habitat life support, and review live sensor logs from Mars and the Lunar Gateway in real time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto px-7 py-3.5 bg-cyan-400 text-black hover:bg-cyan-300 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Radar className="w-4 h-4" />
                <span>Open Telemetry Dashboard</span>
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-800/80 hover:bg-slate-800 border border-cyan-800 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider transition-all text-white flex items-center justify-center gap-2"
              >
                <span>Cadet / Specialist Login</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
