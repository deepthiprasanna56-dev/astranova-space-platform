# 🪐 AstraNova — Interplanetary Exploration & Orbital Telemetry Deck

A bold, creative, and futuristic web platform built with **React 19**, **Vite**, and **Tailwind CSS**. Designed specifically around deep-space human expansion, orbital habitats, and interplanetary telemetry operations.

---

## 🌌 Creative Concept & Core Highlights

Departing completely from typical business SaaS designs, **AstraNova** brings to life a cinematic aerospace agency dedicated to human settlement across the Solar System (the Moon, Mars, Europa, and Titan).

### 1. 🪐 Landing Page 
- **Mission Status Ticker**: Real-time broadcast pill tracking active interplanetary probes across astronomical units (AU).
- **Hero Cockpit HUD**: Holographic starship telemetry preview displaying Mach 22.4 orbital velocity, artificial gravity centrifuge stats, 101.3 kPa cabin pressure, and interactive orbital slingshot trajectory vector (Earth → Moon → Mars).
- **Interactive Planetary Simulator**: Dynamic celestial switcher (*Luna Shackleton Base*, *Ares Prime Mars Outpost*, *Europa Oceanus Cryo-Drill*, *Titan Kraken Mare Station*) with real-time calculated distance from Earth, transit duration, surface gravity, temperature, and atmospheric gas analysis.
- **Breakthrough Technology Pillars**: High-impulse magnetoplasmadynamic ion drives, rotating centrifugal artificial gravity, closed-loop ECLSS biospheres, and autonomous regolith 3D printing.
- **Flight Manifest & Expeditions**: Scheduled launch windows with booster designations, mission berths, and status checks.
- **Mission Control Direct CTA**: Instant jump into the command deck.

### 2. 🚀 Astronaut Flight Clearance Page 
- **Dual Clearance Modes**: Toggle between active flight pass authorization and new cadet applications.
- **Holographic Astronaut Pass**: Preview of Flight Specialist ID, Level-5 clearance badge, station assignment (Lunar Gateway Station Alpha), and real-time medical vitals.
- **Live Form Validation**: Callsign formatting, cipher length verification, station selection, and password visibility toggle.
- **One-Click Commander Pass**: "**Fill Demo Pass**" button for instantaneous 1-click test authorization.
- **Emergency Signal Reset**: Deep Space Network recovery modal.

### 3. 🛰️ Orbital Command & Telemetry Deck 
- **Flight Director Navigation Drawer** : Fast routing between Orbital Deck, Fleet, Telemetry, Life Support, Ion Thrusters, and Astronaut Roster with orbit status pill.
- **Command Deck Header** : Stardate and frequency search with `CTRL+K` badge, live telemetry refresh, radio alert drawer, and quick launch trigger.
- **Orbital KPI Metric Cards** : Orbital Velocity (27,480 km/h · Mach 22.4), Photovoltaic Solar Output (4.82 GW), ECLSS Oxygen Purity (99.4% O2), and Active Orbiting Crew (38 Personnel).
- **Critical Resource Gauges**: Xenon Reaction Fuel (84.6%), Magnetic Shield Deflection (94.2%), and Earth Light-Speed Delay (1.28s).
- **Interactive Charts (Recharts)** :
  - **Dynamic AreaChart**: Ion thruster impulse vs. solar flare radiation flux with multi-timeframe toggles (`24h`, `7d`, `30d`, `90d`).
  - **Habitat Energy Grid Chart**: Energy reserves across Gateway L2, Mars Ares, Europa Deep, and Helios stations.
- **Spacecraft Fleet & Probe Manifest** :
  - Filter by flight status (*All*, *In Orbit*, *Surface Active*, *Delta-V Maneuver*).
  - Search by vessel callsign, target, or role.
  - Interactive row actions: **Command Vector Burn** and **Transponder Ping** with live telemetry feedback toasts.
- **Launch Probe Modal** : Deploy spacecraft payloads with booster selection, target celestial orbit, and instrument selection.
- **Telemetry Export**: Instant download of timestamped JSON mission telemetry logs.

### 4. 🌗 Deep Space Dark & Clean Aerospace Light Modes 
- **Deep Space Dark**: Cosmic voids (`#030712`), cyan ion drive glows, and starlight accents.
- **Cleanroom Light**: Minimalist aerospace cleanroom aesthetic with titanium and orbital slate.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Space Grotesk*, *Orbitron*, *Plus Jakarta Sans*)

---

## 🏃 Running Locally

```bash

npm run dev
```
Open **`http://localhost:5174`** (or `http://localhost:5173`) in your browser.

To build and preview for production:
```bash
npm run build
npm run preview
```

---

## ☁️ Deployment

### Vercel Deployment
Pre-configured with :
```bash
npm i -g vercel
vercel
```

### Netlify Deployment
Pre-configured with :
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Push
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```
