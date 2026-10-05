import React, { useState } from 'react';
import { X, Rocket, CheckCircle2, Orbit, Flame, Globe } from 'lucide-react';

export default function QuickActionsModal({ isOpen, onClose, onMissionLaunched }) {
  const [formData, setFormData] = useState({
    name: '',
    booster: 'Nova Starship Heavy',
    target: 'Lunar South Pole L2',
    payloadType: 'Astrobiology Core Drill',
    propellantMass: '450 Tons Xenon/LOX'
  });
  const [isLaunching, setIsLaunching] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      setSuccess(true);
      setTimeout(() => {
        if (onMissionLaunched) {
          onMissionLaunched(formData);
        }
        setSuccess(false);
        onClose();
      }, 1000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-mono">
      <div className="bg-white dark:bg-[#070e20] rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 dark:border-cyan-900 shadow-2xl space-y-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-cyan-950">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-400 text-black flex items-center justify-center font-bold shadow-md shadow-cyan-500/20">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-orbitron font-bold text-slate-900 dark:text-white">
                Authorize Spacecraft Launch
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Deploy payload to interplanetary trajectory from Cape Canaveral / Gateway
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Spacecraft Mission Designation
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ASTRA-PIONEER-X"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#040816] border border-slate-200 dark:border-cyan-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Launch Vehicle
              </label>
              <select
                value={formData.booster}
                onChange={(e) => setFormData({ ...formData, booster: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#040816] border border-slate-200 dark:border-cyan-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Nova Starship Heavy">Nova Starship Heavy</option>
                <option value="Vanguard Ion Booster">Vanguard Ion Booster</option>
                <option value="Falcon Interplanetary">Falcon Interplanetary</option>
              </select>
            </div>

            <div>
              <label className="block font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Orbital Target
              </label>
              <select
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#040816] border border-slate-200 dark:border-cyan-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Lunar South Pole L2">Lunar South Pole L2</option>
                <option value="Mars Jezero Outpost">Mars Jezero Outpost</option>
                <option value="Europa Oceanus Subsurface">Europa Oceanus Subsurface</option>
                <option value="Titan Kraken Mare">Titan Kraken Mare</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-orbitron font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Scientific Payload Core
            </label>
            <select
              value={formData.payloadType}
              onChange={(e) => setFormData({ ...formData, payloadType: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#040816] border border-slate-200 dark:border-cyan-950 text-slate-900 dark:text-white focus:outline-none"
            >
              <option value="Astrobiology Core Drill">Astrobiology Core Drill & Spectrometer</option>
              <option value="Pressurized Colonist Habitat Module">Pressurized Colonist Habitat Module</option>
              <option value="Quantum Laser Relay Transceiver">Quantum Laser Relay Transceiver</option>
              <option value="Hydrocarbon In-Situ Fuel Processor">Hydrocarbon In-Situ Fuel Processor</option>
            </select>
          </div>

          {success && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-bold animate-fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Launch trajectory locked. Booster ignited for orbital insertion!
            </div>
          )}

          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-cyan-950">
            <button
              type="button"
              onClick={onClose}
              disabled={isLaunching}
              className="px-4 py-2 font-semibold text-slate-400 hover:text-white rounded-xl"
            >
              Abort Launch
            </button>
            <button
              type="submit"
              disabled={isLaunching}
              className="px-5 py-2.5 font-orbitron font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 flex items-center gap-2 disabled:opacity-60"
            >
              {isLaunching ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Ignition Sequence T-0...</span>
                </>
              ) : (
                <>
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Execute Launch Burn</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
