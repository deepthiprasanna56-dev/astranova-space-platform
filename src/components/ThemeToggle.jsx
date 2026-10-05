import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-xl border transition-all duration-300 flex items-center justify-center
        ${theme === 'dark' 
          ? 'bg-slate-800/80 border-slate-700 text-amber-400 hover:bg-slate-700 hover:text-amber-300' 
          : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-indigo-600'}
        shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${className}`}
      aria-label="Toggle color theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
