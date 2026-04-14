import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

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
      <Outlet /> {/* This is where the page content will swap out */}
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITHOUT Header (Login/Register) */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages WITH Header (Wrapped in MainLayout) */}
        <Route element={<MainLayout />}>
          <Route path="/cityparkings" element={<CityParkings />} />
          <Route path="/parkingrecords" element={<ParkingRecords />} />
          <Route path="/myvehicles" element={<MyVehicles />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
