import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['landing', 'login', 'dashboard'].includes(hash)) {
      return hash;
    }
    return 'landing';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['landing', 'login', 'dashboard'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Navbar is shown on Landing Page and Login Page navigation */}
      {currentPage === 'landing' && (
        <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      )}

      {/* Page Routing */}
      <div className="flex-1">
        {currentPage === 'landing' && (
          <LandingPage onNavigate={navigateTo} />
        )}
        {currentPage === 'login' && (
          <LoginPage onNavigate={navigateTo} />
        )}
        {currentPage === 'dashboard' && (
          <DashboardPage onNavigate={navigateTo} />
        )}
      </div>

      {/* Footer on Landing Page */}
      {currentPage === 'landing' && (
        <Footer onNavigate={navigateTo} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
