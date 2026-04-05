import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaMotorcycle, FaBars } from 'react-icons/fa';
import { PiFileXlsDuotone } from 'react-icons/pi';

const MyVehicles = () => {
  const pageStyle = {
    background: '#C8D5F2', // Main background color
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const mainCardStyle = {
    background: 'rgba(255, 255, 255, 0.4)', // Semi-transparent container
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '16px 16px 8px 16px',
    maxWidth: '400px',
    margin: '32px auto 0 auto'
  };

  const statusPillStyle = {
    background: '#C1C9F5', // Light purple/blue pill
    borderRadius: '12px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
    color: '#333',
    fontWeight: '500'
  };

  const detailCardStyle = {
    background: 'transparent',
    border: '1.5px solid #000',
    borderRadius: '15px',
    padding: '15px',
    margin: '16px auto',
    position: 'relative',
    maxWidth: '720px'
  };

    const buttonStyle = {
    backgroundColor: '#0087D5',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 50px',
    fontSize: '18px'
    }

  return (
    <div style={pageStyle}>
      {/* Navbar Area */}
      <div className="d-flex justify-content-between align-items-center p-1" style={{ boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.2)', background: '#BAD0E5'}}>
        <FaBars size={30} color="#67737F" style={{padding: '0px 4px' }} />
        <div>
          <img src="cityparkinglogo.png" alt="Logo" style={{ width: '44px', padding: '4px 4px' }} />
        </div>
      </div>
      <div style={{ padding: '16px'}}>
        <h3 className="text-center fw-bold mb-4" style={{ color: '#000' }}>My Vehicles</h3>




        {/* 2. Detailed History Cards */}
        <div style={detailCardStyle}>
          <small style={{ position: 'absolute', right: '15px', top: '10px', opacity: 0.6 }}>01.03.2026</small>
          <div className="d-flex align-items-center mb-2">
            <FaMotorcycle className="me-3" size={20} />
            <span className="fw-bold">WB 06F 5977</span>
          </div>
          <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '13px' }}>
            <span>Entry: 11.00 A.M</span>
            <div className="d-flex align-items-center">
               <div style={{ height: '10px', width: '100%', borderRadius: '50%', background: '#00FF00', marginRight: '5px' }}></div>
               <span>Parked</span>
            </div>
          </div>
        </div>

        <div style={detailCardStyle}>
          <small style={{ position: 'absolute', right: '15px', top: '10px', opacity: 0.6 }}>22.02.2026</small>
          <div className="d-flex align-items-center mb-2">
            <FaCar className="me-3" size={20} />
            <span className="fw-bold">WB 06F 5977</span>
          </div>
          <div className="d-flex gap-3" style={{ fontSize: '13px' }}>
            <span>Entry: 11.00 A.M</span>
            <span>Exit: 02.00 P.M</span>
          </div>
        </div>
        <div style={{ display: 'flex', margin: '16px auto', alignItems: 'center', justifyContent: 'center'}}><button className="btn btn-primary shadow-sm" style={buttonStyle}>Add Vehicle</button></div>
      </div>
    </div>
  );
};

export default MyVehicles;
