import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage so the user stays logged in on refresh
  const [user, setUser] = useState();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persist data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

 const addVehicle = (vehicle) => {
   if (user.vehicles){
    let matchFound = false;
    user.vehicles = user.vehicles.map(v => { 
      if(v.id === vehicle.id){ matchFound= true; return vehicle;}
      else return v;
    });
    if(!matchFound)
      user.vehicles= [...user.vehicles, vehicle]
   }else{
    user.vehicles = [vehicle];
   }
 }

 const deleteVehicle = (vehicleid) => {
  user.vehicles = user.vehicles?user.vehicles.filter(v => v.id !== vehicleid):[];
 }


  return (
    <AuthContext.Provider value={{ user, login, logout, addVehicle, deleteVehicle }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
