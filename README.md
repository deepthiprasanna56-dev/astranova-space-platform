# 🚀 NexusAI — Intelligent Cloud Observability & Operations Platform

A modern, high-performance web platform built with **React 19**, **Vite**, and **Tailwind CSS**. Features a high-converting landing page, an enterprise authentication flow with live validation and demo auto-fill, and a real-time operational dashboard with dynamic Recharts data visualizations.

---

## 🌟 Key Features

### 1. 🌐 Landing Page
- **Hero Section**: Dynamic announcement pill, gradient headline typography, dual call-to-actions, and interactive simulated cluster telemetry preview.
- **Floating Status Widgets**: Visual badges with floating micro-animations (ROI metrics, sub-millisecond MTTR, autonomous incident mitigation).
- **Interactive Metric Showcase**: Switch between *Performance*, *Compute Efficiency*, and *Zero Downtime Reliability* benchmarks in real time.
- **Enterprise Capabilities Grid**: 6 structured feature cards highlighting distributed telemetry, multi-cloud mesh, and SOC-2 security.
- **Customer Social Proof**: Testimonials with star ratings, verifiable roles, and corporate client roster.
- **Transparent Pricing Matrix**: Monthly vs. Annual billing toggle with real-time 20% discount calculation and feature checklists.
- **Conversion CTA Banner**: High-contrast glassmorphic action banner.

### 2. 🔐 Authentication & Security Page
- **Dual Mode (Sign In / Register)**: Instant toggle between login and onboarding account creation.
- **Live Form Validation**: Email regex formatting, minimum password length check, password match validation on sign up, and immediate inline feedback.
- **Interactive Security Elements**:
  - Show / Hide password toggle with animated eye icons.
  - "Remember me" session persistence.
  - "Forgot Password?" recovery modal with simulated link dispatch.
  - Social authentication providers (Google, GitHub SSO).
- **One-Click Demo Credentials**: "Fill Demo Info" button for instantaneous preview without manual typing.

### 3. 📊 High-Performance Operations Dashboard
- **Responsive Drawer & Sidebar Navigation**:
  - Seamless desktop sidebar & mobile slide-out drawer with backdrop blur.
  - Route between *Overview*, *Telemetry & Logs*, *Cloud Infrastructure*, *Deployments*, *Incidents*, and *Settings*.
  - Live cluster state indicator (US-East-1 Optimal).
- **Real-Time KPI Cards**:
  - Cloud Cost Optimization ($148K saved, +18.4% trend)
  - Active Kubernetes Nodes (1,284 nodes across 12 regions)
  - Average p99 Latency (14.2 ms, -24.8% decrease)
  - System Health SLA (99.998%, 0 unresolved incidents)
- **Live Resource Utilization**: Animated visual progress meters for CPU Compute, NVMe Volume Storage, and Ingress Bandwidth.
- **Interactive Charts (Recharts)**:
  - **Dynamic AreaChart**: Throughput & bandwidth stream with timeframe switcher (`24h`, `7d`, `30d`, `90d`).
  - **Horizontal BarChart**: Geographical compute distribution across 5 continents with custom tooltips.
- **Interactive Microservices & Workloads Table**:
  - Real-time search filter and status tabs (*All*, *Operational*, *Warning*, *Deploying*).
  - CPU & memory consumption progress bars.
  - Interactive row actions: **Rolling Restart** simulation and **Live Stdout Terminal** inspection.
- **Quick Deploy Modal**: Provision new microservices with custom environment, region, replica counts, and memory thresholds.
- **Notification Drawer**: Filterable alert log with unread counts and batch read dismissal.
- **Data Export**: One-click download of timestamped JSON audit and telemetry reports.

### 4. 🌗 Full Dark Mode & Light Mode Support
- Persistent theme preference saved in `localStorage`.
- Automatic detection of user's operating system `prefers-color-scheme`.
- Custom glassmorphism, tailored scrollbars, and accessible high-contrast palettes for both modes.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Typography**: Google Fonts (Plus Jakarta Sans)

---

## 📁 Project Directory Structure

```text
nexus-web/
├── dist/                      # Production build output
├── public/
│   └── favicon.svg            # Custom SVG platform icon
├── src/
│   ├── assets/                # Static assets
│   ├── components/            # Reusable UI components
│   │   ├── dashboard/         # Dashboard specific modules
│   │   │   ├── ChartsSection.jsx      # Recharts Area & Bar charts
│   │   │   ├── DataTable.jsx          # Filterable microservices table
│   │   │   ├── Header.jsx             # Top search, alerts, user profile
│   │   │   ├── QuickActionsModal.jsx  # New service deployment modal
│   │   │   ├── Sidebar.jsx            # Desktop & mobile drawer navigation
│   │   │   └── StatCards.jsx          # KPI metric cards with trend badges
│   │   ├── Footer.jsx         # Footer with links, status, and newsletter
│   │   ├── Navbar.jsx         # Sticky glassmorphic navbar with mobile menu
│   │   └── ThemeToggle.jsx    # Smooth light/dark mode switcher
│   ├── context/
│   │   ├── AuthContext.jsx    # User authentication & demo session state
│   │   └── ThemeContext.jsx   # Theme state & system preference sync
│   ├── pages/
│   │   ├── DashboardPage.jsx  # Complete operations control center
│   │   ├── LandingPage.jsx    # Product landing, showcase, pricing & CTA
│   │   └── LoginPage.jsx      # Auth form with validation & quick fill
│   ├── App.css
│   ├── App.jsx                # Hash router & root page transitions
│   ├── index.css              # Tailwind base, glassmorphism & scrollbars
│   └── main.jsx               # Application entry point
├── index.html                 # HTML shell with Google Fonts & metadata
├── netlify.toml               # Netlify configuration & rewrite rules
├── package.json
├── postcss.config.js          # PostCSS Tailwind integration
├── tailwind.config.js         # Custom theme configuration & animations
├── vercel.json                # Vercel deployment configuration
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
cd nexus-web
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
Create an optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment Instructions

### Option 1: Deploy to Vercel
1. Install Vercel CLI (or connect via GitHub):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Or in the [Vercel Dashboard](https://vercel.com/):
   - Click **Add New Project** -> **Import Git Repository**.
   - Framework preset will automatically be detected as **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click **Deploy**!

### Option 2: Deploy to Netlify
1. With Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```
2. Or in the [Netlify Dashboard](https://app.netlify.com/):
   - Click **Add new site** -> **Import an existing project**.
   - Select your GitHub repository.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The included `netlify.toml` automatically handles SPA routing.

---

## 🐙 Push to GitHub

To push this codebase to your GitHub account:

```bash
git init
git add .
git commit -m "feat: complete NexusAI website with landing page, login page, and dashboard"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```
