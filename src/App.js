import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from  './components/Login';
import Register from './components/Register';
import ParkingRecords from './components/Parkingrecords';
import MyVehicles from './components/MyVehicles'
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import ProfileUpdate from './components/ProfileUpdate';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path='/parkingrecords' element={<ParkingRecords />}/>
        <Route path='/myvehicles' element={<MyVehicles />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/help' element={<Help />}/>
        <Route path='/ProfileUpdate' element={<ProfileUpdate />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

