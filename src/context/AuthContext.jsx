import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('astranova_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [clearanceLevel, setClearanceLevel] = useState('Level-5 Flight Director');

  const login = (callsign, accessCode, remember = true) => {
    const flightUser = {
      id: 'ASTRA-8921-X',
      callsign: callsign.includes('@') ? callsign.split('@')[0] : callsign,
      name: 'Commander Elena Vance',
      clearance: 'Level-5 Mission Commander',
      station: 'Lunar Orbital Gateway (Station Alpha)',
      flightHours: '4,820 LEO/Deep-Space Hours',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      badgeId: 'CMDR-7704',
      status: 'Active Flight Ready',
    };

    setUser(flightUser);
    if (remember) {
      localStorage.setItem('astranova_user', JSON.stringify(flightUser));
    }
    return flightUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('astranova_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, clearanceLevel, setClearanceLevel }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
