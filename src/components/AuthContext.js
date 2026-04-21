import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state using a function to pull from localStorage immediately
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addVehicle = (vehicle) => {
    if (!user) return;

    // 1. Create a updated version of the vehicles array
    const currentVehicles = user.vehicles || [];
    const isExisting = currentVehicles.find(v => v.id === vehicle.id);
    
    const updatedVehicles = isExisting
      ? currentVehicles.map(v => (v.id === vehicle.id ? vehicle : v))
      : [...currentVehicles, vehicle];

    // 2. Create a NEW user object and update state/storage
    const updatedUser = { ...user, vehicles: updatedVehicles };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const deleteVehicle = (vehicleid) => {
    if (!user || !user.vehicles) return;

    // 1. Filter out the vehicle
    const updatedVehicles = user.vehicles.filter(v => v.id !== vehicleid);
    
    // 2. Create a NEW user object and update state/storage
    const updatedUser = { ...user, vehicles: updatedVehicles };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, addVehicle, deleteVehicle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);