import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Ensure this file exists

// Import your components
import Login from './components/Login';
import Register from './components/Register';
import ParkingRecords from './components/Parkingrecords';
import MyVehicles from './components/MyVehicles';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import ProfileUpdate from './components/ProfileUpdate';
import CityParkings from './components/CityParkings';
import Header from './components/Header';

// 1. Define the Shared Layout
const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes (No Header) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Layout: Only logged-in users can see these */}
          <Route 
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<ParkingRecords />} />
            <Route path="/cityparkings" element={<CityParkings />} />
            <Route path="/myvehicles" element={<MyVehicles />} />
            <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
