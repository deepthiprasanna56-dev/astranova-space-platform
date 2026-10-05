import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Shield,
  Orbit,
  Radar,
  Radio,
  Fingerprint,
  KeyRound,
  Compass,
  Rocket
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';

export default function LoginPage({ onNavigate }) {
  const [isRegisteringCadet, setIsRegisteringCadet] = useState(false);
  const [formData, setFormData] = useState({
    callsign: 'cmdr.vance@astranova.space',
    securityCode: 'AstraNova2026!',
    confirmCode: '',
    fullName: 'Commander Elena Vance',
    assignedStation: 'Lunar Orbital Gateway (Station Alpha)',
    rememberSession: true
  });
  const [errors, setErrors] = useState({});
  const [showCode, setShowCode] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [signalModalOpen, setSignalModalOpen] = useState(false);
  const [emergencyCallsign, setEmergencyCallsign] = useState('');
  const [emergencySuccess, setEmergencySuccess] = useState(false);

  const { login } = useAuth();

  const validate = () => {
    const errs = {};
    if (isRegisteringCadet && !formData.fullName.trim()) {
      errs.fullName = 'Full Specialist Name is required';
    }

    if (!formData.callsign) {
      errs.callsign = 'Mission ID / Callsign is required';
    } else if (!formData.callsign.includes('@') && formData.callsign.length < 4) {
      errs.callsign = 'Enter a valid flight ID (e.g. cmdr.vance@astranova.space)';
    }

    if (!formData.securityCode) {
      errs.securityCode = 'Security Access Key is required';
    } else if (formData.securityCode.length < 6) {
      errs.securityCode = 'Access Key must be at least 6 characters';
    }

    if (isRegisteringCadet && formData.securityCode !== formData.confirmCode) {
      errs.confirmCode = 'Access Keys do not match';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleClearanceSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      login(formData.callsign, formData.securityCode, formData.rememberSession);

      setTimeout(() => {
        onNavigate('dashboard');
      }, 700);
    }, 900);
  };

  const handleFillDemo = () => {
    setFormData({
      callsign: 'cmdr.vance@astranova.space',
      securityCode: 'AstraNova2026!',
      confirmCode: 'AstraNova2026!',
      fullName: 'Commander Elena Vance',
      assignedStation: 'Lunar Orbital Gateway (Station Alpha)',
      rememberSession: true
    });
    setErrors({});
  };

  const handleEmergencyReset = (e) => {
    e.preventDefault();
    if (!emergencyCallsign) return;
    setEmergencySuccess(true);
    setTimeout(() => {
      setEmergencySuccess(false);
      setSignalModalOpen(false);
      setEmergencyCallsign('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 text-xs font-orbitron font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Planetary Surface</span>
        </button>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Split Authentication Terminal */}
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white dark:bg-[#050b18] border border-slate-200/90 dark:border-cyan-950 shadow-2xl">
          
          {/* Left Branded Astronaut Flight Badge Panel */}
          <div className="hidden lg:flex lg:col-span-5 relative bg-gradient-to-br from-[#06122c] via-[#040a19] to-[#02050e] text-white p-8 flex-col justify-between overflow-hidden border-r border-cyan-950">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Mission Brand Title */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500 text-black flex items-center justify-center font-bold shadow-lg shadow-cyan-500/30">
                  <Orbit className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold tracking-tight">ASTRA<span className="text-cyan-400">NOVA</span></span>
                  <p className="text-[10px] font-mono text-cyan-400">FLIGHT CLEARANCE PORTAL</p>
                </div>
              </div>
            </div>

            {/* Holographic Astronaut Badge Visual */}
            <div className="my-6 p-5 rounded-2xl bg-slate-900/90 border border-cyan-800/80 space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-cyan-950">
                <span className="text-[10px] font-orbitron font-bold text-cyan-400 uppercase tracking-widest">
                  DEEP SPACE FLIGHT PASS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">LEVEL-5 ACTIVE</span>
              </div>

              <div className="flex items-center gap-3.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Astronaut"
                  className="w-14 h-14 rounded-xl object-cover ring-2 ring-cyan-400 shadow"
                />
                <div>
                  <h4 className="text-sm font-display font-bold text-white">Commander Elena Vance</h4>
                  <p className="text-[11px] font-mono text-slate-400">ID: CMDR-7704-ALPHA</p>
                  <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Station Alpha (Lunar Orbit)
                  </span>
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-cyan-950/80">
                <span>Radiation Dose: 0.12 mSv</span>
                <span className="text-emerald-400">Heart Rate: 64 BPM</span>
              </div>
            </div>

            {/* Clearance Security Highlights */}
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Encrypted 4096-bit Quantum Handshake</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interplanetary Relay Synchronization</span>
              </div>
            </div>
          </div>

          {/* Right Clearance Terminal Form */}
          <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-center">
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
                  {isRegisteringCadet ? 'Register Flight Cadet' : 'Mission Clearance Terminal'}
                </h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {isRegisteringCadet 
                    ? 'Register your astronaut profile for deep space training.' 
                    : 'Input your flight credentials to access the Orbital Telemetry Deck.'}
                </p>
              </div>

              {/* Demo 1-Click Credentials Button */}
              <button
                type="button"
                onClick={handleFillDemo}
                className="text-xs font-orbitron font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-300 dark:border-cyan-800 transition-colors flex items-center gap-1.5"
                title="Auto-fill Commander Credentials"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Fill Demo Pass</span>
              </button>
            </div>

            <form onSubmit={handleClearanceSubmit} className="space-y-4">
              {isRegisteringCadet && (
                <div>
                  <label className="block text-xs font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Specialist Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Elena Vance"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>
              )}

              {/* Callsign / Mission ID */}
              <div>
                <label className="block text-xs font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Flight Callsign / Mission ID
                </label>
                <input
                  type="text"
                  value={formData.callsign}
                  onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                  placeholder="cmdr.vance@astranova.space"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {errors.callsign && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.callsign}</p>
                )}
              </div>

              {/* Security Access Code */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Security Access Cipher
                  </label>
                  {!isRegisteringCadet && (
                    <button
                      type="button"
                      onClick={() => setSignalModalOpen(true)}
                      className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-mono"
                    >
                      Emergency Key Reset?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showCode ? 'text' : 'password'}
                    value={formData.securityCode}
                    onChange={(e) => setFormData({ ...formData, securityCode: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full pl-3.5 pr-10 py-2.5 text-xs sm:text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCode(!showCode)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.securityCode && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.securityCode}</p>
                )}
              </div>

              {/* Station Selection */}
              <div>
                <label className="block text-xs font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Station Terminal Access
                </label>
                <select
                  value={formData.assignedStation}
                  onChange={(e) => setFormData({ ...formData, assignedStation: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="Lunar Orbital Gateway (Station Alpha)">Lunar Orbital Gateway (Station Alpha)</option>
                  <option value="Ares Prime Mars Surface Outpost">Ares Prime Mars Surface Outpost</option>
                  <option value="Cape Canaveral Ground Command">Cape Canaveral Ground Command</option>
                  <option value="Europa Oceanus Deep Submersible">Europa Oceanus Deep Submersible</option>
                </select>
              </div>

              {/* Submit Clearance */}
              <button
                type="submit"
                disabled={isAuthenticating || authSuccess}
                className="w-full mt-2 py-3.5 px-4 rounded-xl text-xs font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isAuthenticating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Establishing Deep Space Handshake...</span>
                  </>
                ) : authSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                    <span>Clearance Verified! Entering Mission Deck...</span>
                  </>
                ) : (
                  <>
                    <Fingerprint className="w-4 h-4" />
                    <span>{isRegisteringCadet ? 'Submit Cadet Application' : 'Authorize Flight Clearance'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Mode switch */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
              {isRegisteringCadet ? (
                <p>
                  Already hold an active flight pass?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegisteringCadet(false)}
                    className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Authorize Clearance
                  </button>
                </p>
              ) : (
                <p>
                  New astronaut or scientific researcher?{' '}
                  <button
                    type="button"
                    onClick={() => setIsRegisteringCadet(true)}
                    className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Apply for Cadet Pass
                  </button>
                </p>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Emergency Reset Modal */}
      {signalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#070e20] rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-cyan-900 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <Radio className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-orbitron font-bold text-slate-900 dark:text-white">
                Emergency Signal Key Reset
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Enter your Mission Callsign to transmit an emergency recovery token to your Ground Station terminal.
            </p>

            <form onSubmit={handleEmergencyReset} className="space-y-3">
              <input
                type="text"
                value={emergencyCallsign}
                onChange={(e) => setEmergencyCallsign(e.target.value)}
                placeholder="cmdr.vance@astranova.space"
                required
                className="w-full px-3.5 py-2 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {emergencySuccess && (
                <p className="text-xs text-emerald-500 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Recovery pulse transmitted via Deep Space Network.
                </p>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSignalModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:bg-slate-800 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-orbitron font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow"
                >
                  Transmit Recovery Token
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="py-4 text-center text-xs font-mono text-slate-500">
        AstraNova Aerospace Terminal v4.8 // 256-bit Interplanetary Laser Relay
      </div>
    </div>
  );
}
