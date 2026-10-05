import React, { useState } from 'react';
const MoonScene = React.lazy(() => import('../components/MoonScene'));
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
      color: 'from-sky-500 to-blue-700',
      accent: 'text-sky-400'
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

  const [selectedTech, setSelectedTech] = useState(null);

  const techPillars = [
    {
      icon: Flame,
      title: 'Magnetoplasmadynamic Drives',
      desc: 'Superheated plasma accelerated by magnetic fields achieves exhaust velocities up to 110 km/s, slashing interplanetary transit times in half.',
      tag: 'Ion Propulsion',
      gradient: 'from-orange-500 to-blue-600',
      accentColor: '#22d3ee',
      overview: 'AstraNova\'s MPD thruster array uses electromagnetic Lorentz forces to accelerate xenon plasma to exhaust velocities far exceeding any chemical rocket. Combined with the VASIMR RF-200 variable-thrust engine, our propulsion suite can shift between high-thrust orbital insertion burns and ultra-efficient deep-space cruise modes.',
      specs: [
        { label: 'Max Exhaust Velocity', value: '110 km/s' },
        { label: 'Specific Impulse (Isp)', value: '9,600 – 30,000 s' },
        { label: 'Continuous Thrust', value: '2.4 N per bank (×4 banks)' },
        { label: 'Power Consumption', value: '50 kW (ion) / 200 kW (VASIMR)' },
        { label: 'Propellant', value: 'Xenon (primary) / Krypton (backup)' },
        { label: 'Delta-V Budget', value: '12,000 m/s (Earth–Mars cycle)' },
        { label: 'Earth–Mars Transit', value: '39 days (vs. 7 months chemical)' },
        { label: 'Thruster Lifespan', value: '>50,000 operating hours' },
      ],
      systems: ['Xenon Hall-Effect Thruster Bank α/β', 'VASIMR RF-200 Plasma Engine γ', 'RCS 12× Mono-prop Attitude Array', 'Emergency Solid-Fuel Retro ε', 'Propellant Feed & Pressure Control'],
      status: 'Firing — Bank α Active',
      statusColor: 'text-orange-400 bg-orange-950 border-orange-800',
    },
    {
      icon: Orbit,
      title: 'Centrifugal Gravity Rings',
      desc: 'Dual counter-rotating cylindrical habitats generate a continuous 1.0G Earth-equivalent vector, mitigating bone density loss on long voyages.',
      tag: 'Habitation',
      gradient: 'from-slate-500 to-slate-600',
      accentColor: '#a78bfa',
      overview: 'The AstraNova Gravity Ring System uses dual counter-rotating tori to generate artificial gravity without inducing net angular momentum on the spacecraft. Crew health data shows zero bone density loss or muscle atrophy in 18-month deep-space missions — a critical breakthrough for Mars transit.',
      specs: [
        { label: 'Ring Diameter', value: '120 meters (outer torus)' },
        { label: 'Rotation Speed', value: '4.2 RPM' },
        { label: 'Simulated Gravity', value: '0.98 g (±0.02 g variance)' },
        { label: 'Crew Capacity', value: '18 permanent residents' },
        { label: 'Living Volume', value: '14,400 m³ pressurized' },
        { label: 'Radiation Shielding', value: 'Water-wall 12cm + Magnetic 4.2T' },
        { label: 'Air Pressure', value: '101.3 kPa (Earth sea-level)' },
        { label: 'Bone Density Loss', value: '0% (vs. 1-2%/month ISS)' },
      ],
      systems: ['Counter-Rotating Torus Drive System', 'Active Vibration Isolation Mounts', 'Airlock & Docking Collar Node', 'Emergency Derotation Braking', 'Pressure Vessel Integrity Sensors'],
      status: 'Fully Operational',
      statusColor: 'text-emerald-400 bg-emerald-950 border-emerald-800',
    },
    {
      icon: Wind,
      title: 'Closed-Loop ECLSS Biosphere',
      desc: 'Genetically engineered spirulina bioreactors produce 99.2% recyclable oxygen, water recapture, and fresh nutrient biomass in deep space.',
      tag: 'Life Support',
      gradient: 'from-emerald-500 to-amber-600',
      accentColor: '#34d399',
      overview: 'AstraNova\'s Environmental Control and Life Support System achieves near-perfect closed-loop recapture of all water, oxygen, and carbon. The bioreactor module uses CRISPR-optimized Spirulina platensis algae strains that produce oxygen 8× faster than wild-type while simultaneously synthesizing crew nutrition.',
      specs: [
        { label: 'O₂ Purity Output', value: '99.4% (cabin atmospheric)' },
        { label: 'Water Recapture Rate', value: '98.7% (urine + condensate)' },
        { label: 'CO₂ Scrub Efficiency', value: '99.96% (CDRA 4-bed sieve)' },
        { label: 'Bioreactor Volume', value: '800 liters (Spirulina culture)' },
        { label: 'Daily O₂ Production', value: '2.8 kg/person/day' },
        { label: 'Resupply Interval', value: '18 months (consumables only)' },
        { label: 'Cabin Pressure', value: '14.7 psi (sea-level equivalent)' },
        { label: 'Temperature Control', value: '21.0–22.0 °C (±0.5°C)' },
      ],
      systems: ['OGS Oxygen Generation (Sabatier)', 'CDRA CO₂ Removal 4-Bed Sieve', 'WPA Water Processor Assembly', 'Spirulina Bioreactor Module', 'ATCS Thermal Control Loops'],
      status: '99.4% O₂ — Nominal',
      statusColor: 'text-emerald-400 bg-emerald-950 border-emerald-800',
    },
    {
      icon: Radio,
      title: 'Quantum Deep-Space Relays',
      desc: 'Entangled photon transceiver arrays transmit gigabit telemetry streams across billions of kilometers with sub-nanosecond jitter.',
      tag: 'Communications',
      gradient: 'from-amber-500 to-orange-600',
      accentColor: '#fbbf24',
      overview: 'AstraNova\'s hybrid quantum-classical deep space network eliminates traditional light-speed communication delays for critical telemetry. Quantum entanglement channels handle command & control data with zero latency, while X-Band and Ka-Band phased arrays carry high-bandwidth science data at up to 10 Gbps.',
      specs: [
        { label: 'Quantum Channel Latency', value: '0.00s (entangled pairs)' },
        { label: 'Classical DSN Uplink', value: '2.115 GHz X-Band (Canberra 70m)' },
        { label: 'Data Rate (Ka-Band)', value: '10 Gbps @ Mars opposition' },
        { label: 'Dish Aperture', value: '5m HGA steerable parabolic' },
        { label: 'Signal Coverage', value: 'Earth to Kuiper Belt (50 AU)' },
        { label: 'Relay Nodes', value: '5 stations (DSN + L1 Quantum)' },
        { label: 'Encryption', value: 'Post-quantum lattice cryptography' },
        { label: 'Uptime SLA', value: '99.97% (3-station redundancy)' },
      ],
      systems: ['Canberra DSN 70m Station (Primary)', 'Goldstone X/S-Band Array', 'Madrid Ka-Band Station', 'L1 Quantum Entanglement Node', 'Mars Reconnaissance UHF Relay'],
      status: 'Signal Locked — DSN-CAN',
      statusColor: 'text-amber-400 bg-amber-950 border-amber-800',
    },
    {
      icon: ShieldCheck,
      title: 'Active Magnetic Deflection',
      desc: 'Superconducting electromagnetic shields create an artificial magnetosphere around the hull, deflecting dangerous solar proton storms.',
      tag: 'Radiation Armor',
      gradient: 'from-rose-500 to-pink-600',
      accentColor: '#f87171',
      overview: 'Solar energetic particle events and galactic cosmic rays are the primary hazard for long-duration deep space missions. AstraNova\'s superconducting coil array generates a 4.2-Tesla dipole field — equivalent to 10× Earth\'s magnetosphere — completely encasing the crew habitat in an invisible radiation shield.',
      specs: [
        { label: 'Magnetic Field Strength', value: '4.2 Tesla (dipole)' },
        { label: 'Protected Volume', value: '50m radius around crew module' },
        { label: 'GCR Attenuation', value: '94.2% Galactic Cosmic Ray flux' },
        { label: 'SPE Protection', value: '99.8% Solar Proton Event' },
        { label: 'Coil Temperature', value: '-269°C (LHe superconducting)' },
        { label: 'Power Draw', value: '480 kW (coil maintenance)' },
        { label: 'Annual Rad Dose (crew)', value: '<20 mSv (below ICRP limit)' },
        { label: 'Shield Mass', value: '12,400 kg (coil assembly)' },
      ],
      systems: ['HTS Superconducting Coil Array (×8)', 'Liquid Helium Cryocooler', 'Quench Detection & Protection', 'Real-Time Dosimetry Sensors', 'Solar Particle Event Alert System'],
      status: '4.2 Tesla — Active',
      statusColor: 'text-rose-400 bg-rose-950 border-rose-800',
    },
    {
      icon: Cpu,
      title: 'Autonomous Regolith Printing',
      desc: 'Heavy robotic rovers melt indigenous lunar and martian soil with concentrated solar mirrors to 3D-print pressurized habitat domes.',
      tag: 'Surface Base',
      gradient: 'from-sky-500 to-slate-600',
      accentColor: '#38bdf8',
      overview: 'Before human crews arrive, AstraNova\'s autonomous robotic construction fleet lands and begins printing habitat domes from native regolith. Concentrating solar arrays heat local soil to 1,500°C, fusing it into structural components. No Earth-sourced construction materials are required — enabling self-sustaining colonization.',
      specs: [
        { label: 'Print Speed', value: '2.4 m³/hour structural output' },
        { label: 'Wall Thickness', value: '3.2 meters (radiation + pressure)' },
        { label: 'Habitat Internal Volume', value: '1,200 m³ per dome module' },
        { label: 'Regolith Sintering Temp', value: '1,500°C (solar concentrator)' },
        { label: 'Construction Fleet', value: '6× autonomous rovers/printer units' },
        { label: 'Time to First Habitat', value: '90 Earth days (uncrewed prep)' },
        { label: 'Pressure Rating', value: '14.7 psi (Earth sea-level)' },
        { label: 'Operational Sites', value: 'Moon Shackleton + Mars Jezero' },
      ],
      systems: ['Regolith Excavator Rover (×2)', 'Concentrated Solar Array (4m²)', 'Sintering Print Head Assembly', 'Structural Integrity Inspector Bot', 'Autonomous Mission Control AI'],
      status: 'Printing — Jezero Dome 4',
      statusColor: 'text-sky-400 bg-sky-950 border-sky-800',
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
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28 text-center">
        {/* Mission Status Ticker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-orange-50 dark:bg-orange-950/70 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 mb-8 animate-fade-in hover:scale-105 transition-transform cursor-pointer shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
          <span>LIVE MISSION: EUROPA CRYO-DRILL PASSING 4.2 AU</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
            Telemetry Optimal <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.12]">
          Civilization Beyond Earth.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-slate-400">
            The Solar Frontier
          </span>{' '}
          Awaits.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          AstraNova designs, builds, and operates interplanetary spacecraft, permanent orbital habitats, and autonomous robotic terraforming bases across the Solar System.
        </p>
        <React.Suspense fallback={<div className="mx-auto mt-8 h-[280px] w-full sm:mt-10 sm:h-[360px] lg:h-[430px]" />}><MoonScene /></React.Suspense>


        {/* Hero Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-300 hover:from-orange-300 hover:to-amber-200 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5"
          >
            <Radar className="w-5 h-5 text-slate-950" />
            <span>Launch Mission Control Deck</span>
          </button>

          <button
            onClick={() => onNavigate('login')}
            className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-orange-900/80 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-2xl shadow-sm hover:border-orange-400 dark:hover:border-orange-500 transition-all flex items-center justify-center gap-2.5"
          >
            <Rocket className="w-5 h-5 text-orange-500" />
            <span>Astronaut Flight Clearance</span>
          </button>
        </div>

        {/* Key Metrics Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-400" /> 38 Active Crew in Orbit
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-400" /> 14 Planetary Landers Deployed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-400" /> 100% ECLSS Life-Support Recapture
          </span>
        </div>

        {/* Interactive Spacecraft HUD / Telemetry Showcase */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-orange-500/40 via-slate-500/20 to-transparent shadow-2xl">
            <div className="bg-[#050b18] rounded-2xl overflow-hidden border border-orange-950 text-left text-white">
              
              {/* Cockpit Window Header */}
              <div className="px-5 py-3.5 bg-[#030712] border-b border-orange-950 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-orange-500/80 animate-ping"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                  </div>
                  <span className="text-xs font-orbitron font-semibold tracking-wider text-orange-400">
                    ASTRA-IX STARSHIP // FLIGHT TELEMETRY HUD
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">THRUST VECTOR: 100% NOMINAL</span>
                  <button 
                    onClick={() => onNavigate('dashboard')}
                    className="text-orange-400 hover:text-orange-300 font-bold underline"
                  >
                    Control Deck →
                  </button>
                </div>
              </div>

              {/* Inside Cockpit HUD Visuals */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-orange-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Orbital Velocity</span>
                    <div className="text-2xl font-orbitron font-bold text-orange-300 mt-1">27,480 km/h</div>
                    <span className="text-[10px] text-emerald-400 font-mono">Mach 22.4 · LEO Vector</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-orange-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Artificial Gravity</span>
                    <div className="text-2xl font-orbitron font-bold text-white mt-1">0.98 g</div>
                    <span className="text-[10px] text-orange-400 font-mono">Centrifuge 4.2 RPM</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-orange-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Cabin Oxygen Purity</span>
                    <div className="text-2xl font-orbitron font-bold text-white mt-1">99.4%</div>
                    <span className="text-[10px] text-emerald-400 font-mono">Pressure 101.3 kPa</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-orange-900/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Shield Magnetic Flux</span>
                    <div className="text-2xl font-orbitron font-bold text-emerald-400 mt-1">4.2 Tesla</div>
                    <span className="text-[10px] text-slate-400 font-mono">Radiation Deflection Active</span>
                  </div>
                </div>

                {/* Simulated Trajectory & Orbit Graphic */}
                <div className="p-5 rounded-xl bg-[#030712] border border-orange-950 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-orange-400 font-bold uppercase tracking-wider">
                      ● Interplanetary Slingshot Trajectory: Earth → Lunar Gateway → Mars Orbit
                    </span>
                    <span className="text-amber-400 font-semibold">T-MINUS 12h 44m TO BURNOUT</span>
                  </div>

                  {/* Visual orbital path */}
                  <div className="relative h-24 flex items-center justify-between px-6 overflow-hidden bg-slate-950/60 rounded-xl border border-slate-900">
                    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-orange-500 via-slate-500 to-rose-500 opacity-60"></div>
                    
                    {/* Planet 1 Earth */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 ring-4 ring-blue-500/20 shadow-lg shadow-blue-500/40 flex items-center justify-center text-[10px] font-bold">
                        EARTH
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">Departed</span>
                    </div>

                    {/* Ship Vector */}
                    <div className="relative z-10 flex flex-col items-center animate-pulse">
                      <div className="w-7 h-7 rounded-lg bg-orange-400 text-black flex items-center justify-center shadow-lg shadow-orange-400/50">
                        <Rocket className="w-4 h-4 rotate-45" />
                      </div>
                      <span className="text-[10px] font-mono text-orange-300 font-bold mt-1">Current Position</span>
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
          <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-[#070e20] backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-orange-800/80 animate-float-slow">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <Orbit className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Mission Status</p>
              <p className="text-xs font-orbitron font-bold text-slate-900 dark:text-white">Earth-Moon Transit</p>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className="absolute -bottom-5 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 p-3 bg-white dark:bg-[#070e20] backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-orange-800/80 animate-float-slow" style={{ animationDelay: '3s' }}>
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
      <section id="simulator" className="py-24 bg-slate-900/90 text-white relative border-y border-orange-950">
        <div className="absolute inset-0 bg-[radial-gradient(#c2410c_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-orange-400 bg-orange-950/80 px-3.5 py-1.5 rounded-full border border-orange-800">
              Interactive Mission Simulator
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold mt-4">
              Explore Our Planetary Outposts
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Select a celestial destination to inspect real-time orbital distance, gravitational specs, and surface survival telemetry.
            </p>

            {/* Destination Selection Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-[#030712] rounded-2xl max-w-lg mx-auto border border-orange-950">
              {['moon', 'mars', 'europa', 'titan'].map((planet) => (
                <button
                  key={planet}
                  onClick={() => setSelectedPlanet(planet)}
                  className={`flex-1 py-2 px-3 text-xs font-orbitron uppercase font-bold rounded-xl transition-all ${
                    selectedPlanet === planet
                      ? 'bg-orange-500 text-black shadow-md shadow-orange-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {planet}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Planet Specification Card */}
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#050b18] border border-orange-900/80 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
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
                  <p className="text-sm font-bold text-orange-400 mt-0.5">{currentPlanet.travelTime}</p>
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
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-slate-600 hover:from-orange-400 hover:to-slate-500 text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <span>Open {currentPlanet.name} Live Feed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Planet Sphere Mockup */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-[#081226] to-[#02050f] border border-orange-950">
              <div className={`w-44 h-44 rounded-full bg-gradient-to-tr ${currentPlanet.color} shadow-2xl ring-4 ring-orange-500/20 relative flex items-center justify-center overflow-hidden animate-pulse-glow`}>
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
      <section id="propulsion" className="py-24 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/80 px-3.5 py-1.5 rounded-full border border-orange-200 dark:border-orange-800">
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
                onClick={() => setSelectedTech(p)}
                className="group relative p-8 rounded-3xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-orange-950/80 hover:border-orange-500 dark:hover:border-orange-500 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${p.gradient} flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-orbitron font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-orange-300 border border-slate-200 dark:border-slate-700">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-orange-950 flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Inspect Engineering Specifications</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Orbital Habitats Section */}
      <section id="habitats" className="py-24 bg-slate-100/60 dark:bg-[#040a18] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#c2410c60_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/80 px-3.5 py-1.5 rounded-full border border-orange-200 dark:border-orange-800">
              Orbital Habitat Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4">
              Where Humans Live In Deep Space
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
              Our permanent orbital and surface habitats are engineered to sustain human life indefinitely across the solar system — with artificial gravity, closed biospheres, and radiation shielding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lunar Gateway Station Alpha',
                orbit: 'Moon High Orbit (L2 Halo)',
                crew: '18 permanent residents',
                gravity: '1.0 g (centrifuge)',
                power: '840 MW fusion + solar',
                shielding: 'Water-wall + 4.2T magnetic',
                desc: 'The primary interplanetary waypoint and cislunar staging hub. Dual counter-rotating rings provide continuous Earth-equivalent gravity for long-duration crews.',
                status: 'Fully Operational',
                statusColor: 'text-emerald-400 bg-emerald-950 border-emerald-800',
                accentColor: 'from-orange-500 to-blue-600',
              },
              {
                name: 'Ares Prime Mars Outpost',
                orbit: 'Mars Surface — Jezero Basin (28°N)',
                crew: '8 science & engineering crew',
                gravity: '0.38 g (surface Martian)',
                power: '220 MW micro-fusion reactor',
                shielding: 'Basalt regolith 3m overhead dome',
                desc: 'Pressurized lava-tube habitat system buried under Martian regolith for radiation protection. First permanent human settlement on another planet.',
                status: 'Active Operations',
                statusColor: 'text-amber-400 bg-amber-950 border-amber-800',
                accentColor: 'from-amber-500 to-rose-600',
              },
              {
                name: 'Europa Oceanus Submersible',
                orbit: 'Europa — Subsurface Ocean (15km depth)',
                crew: 'Autonomous AI + 4 remote operators',
                gravity: '0.134 g (surface)',
                power: '12 MW RTG radioisotope core',
                shielding: 'Titanium pressure hull (8,000 psi)',
                desc: 'Cryogenic drill-through probe habitat operating in Europa\'s global saltwater ocean. Searching for microbial life in one of the most promising locations in the solar system.',
                status: 'Deep Dive Active',
                statusColor: 'text-slate-400 bg-slate-950 border-slate-800',
                accentColor: 'from-slate-500 to-slate-600',
              }
            ].map((hab, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-orange-950 shadow-md hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${hab.accentColor} flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  <Orbit className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{hab.name}</h3>
                </div>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1">{hab.orbit}</p>
                <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded border mb-4 ${hab.statusColor}`}>
                  {hab.status}
                </span>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{hab.desc}</p>

                <div className="space-y-1.5 pt-4 border-t border-slate-100 dark:border-orange-950 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Crew Complement:</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{hab.crew}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gravity Vector:</span>
                    <span className="text-orange-500 font-semibold">{hab.gravity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Power Source:</span>
                    <span className="text-amber-500 font-semibold">{hab.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rad Shielding:</span>
                    <span className="text-emerald-500 font-semibold">{hab.shielding}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('dashboard')}
                  className="mt-5 w-full py-2.5 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 transition-colors"
                >
                  View Live Habitat Telemetry
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Manifest & Expeditions Section */}
      <section id="expeditions" className="py-24 bg-slate-100/60 dark:bg-[#040916] border-y border-slate-200 dark:border-orange-950">
        <div id="manifest" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-orbitron font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/80 px-3.5 py-1.5 rounded-full border border-orange-200 dark:border-orange-800">
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
                className="p-7 rounded-3xl bg-white dark:bg-[#070e20] border border-slate-200/80 dark:border-orange-950 shadow-md hover:border-orange-500 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">{exp.target}</span>
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

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-orange-950 text-xs font-medium text-slate-600 dark:text-slate-300">
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

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-orange-950">
                  <button
                    onClick={() => onNavigate('login')}
                    className="w-full py-3 px-4 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 transition-colors shadow-md shadow-orange-500/20"
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
      <section className="py-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 border border-orange-800/80 shadow-2xl">
          <div className="relative max-w-2xl">
            <span className="px-3.5 py-1 rounded-full text-xs font-orbitron font-bold uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/40">
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
                className="w-full sm:w-auto px-7 py-3.5 bg-orange-400 text-black hover:bg-orange-300 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Radar className="w-4 h-4" />
                <span>Open Telemetry Dashboard</span>
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-800/80 hover:bg-slate-800 border border-orange-800 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider transition-all text-white flex items-center justify-center gap-2"
              >
                <span>Cadet / Specialist Login</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engineering Specifications Modal ── */}
      {selectedTech && (() => {
        const Icon = selectedTech.icon;
        return (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelectedTech(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Panel */}
            <div
              onClick={e => e.stopPropagation()}
              className="relative w-full sm:max-w-3xl max-h-[92dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#050c1d] border-t sm:border border-slate-200 dark:border-orange-900/80 shadow-2xl shadow-black/60 flex flex-col"
              style={{ '--accent': selectedTech.accentColor }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#050c1d]/95 backdrop-blur-md p-5 sm:p-7 border-b border-slate-100 dark:border-orange-950 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedTech.gradient} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-orbitron font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {selectedTech.tag}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${selectedTech.statusColor}`}>
                        {selectedTech.status}
                      </span>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {selectedTech.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-7 space-y-7">

                {/* Overview */}
                <div className="p-4 rounded-2xl border-l-4 bg-slate-50 dark:bg-[#07111f]" style={{ borderColor: selectedTech.accentColor }}>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{selectedTech.overview}</p>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedTech.specs.map((s, i) => (
                      <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#070e20] border border-slate-200/80 dark:border-orange-950/80 text-xs font-mono gap-4">
                        <span className="text-slate-400 shrink-0">{s.label}</span>
                        <span className="font-bold text-slate-900 dark:text-white text-right" style={{ color: selectedTech.accentColor }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsystems */}
                <div>
                  <h3 className="font-orbitron font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Integrated Subsystems
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.systems.map((sys, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-xl border border-slate-200 dark:border-orange-900/60 bg-white dark:bg-[#07111f] text-slate-700 dark:text-slate-300"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100 dark:border-orange-950">
                  <button
                    onClick={() => { setSelectedTech(null); onNavigate('dashboard'); }}
                    className="flex-1 py-3 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black transition-all hover:opacity-90 shadow-lg"
                    style={{ background: selectedTech.accentColor }}
                  >
                    View Live Telemetry in Mission Control
                  </button>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="flex-1 py-3 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Close Specifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
