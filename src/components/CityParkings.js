import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import '../App.css';

const parkingDetails = [
  {
    id: 1,
    title: "City Center 2, Rajarhat",
    address: "Plot No 2D/5, Near Chinar Park/Post Office, Hatiara, Rajarhat New Town, Kolkata - 700157",
    charges: "Four-wheelers: ₹20/hr, Two-wheelers: ₹10/hr",
  },
  {
    id: 2,
    title: "City Center 1, SaltLake",
    address: "No. 25, Block DC, Sector 1, Salt Lake City, Kolkata - 700064",
    charges: "Standard mall parking rates apply."
  },
  {
    id: 3,
    title: "Acropolis Mall, Kasba",
    address: "1858, Rajdanga Main Rd, Kasba, Kolkata - 700107",
    charges: "Parking charges vary by duration."
  },
  {
    id: 4,
    title: "Mani Square Mall, E M Bypass",
    address: "164/1, Manicktala Main Rd, EM Bypass, Kolkata - 700054",
    charges: "Paid parking available 24/7."
  }
];

function CityParkings() {
  const [openId, setOpenId] = useState(1); 

  const pageStyle = {
    background: '#C8D5F2', 
    minHeight: '100vh'
  };

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={pageStyle}> 
      <div className="app-container">
        <main className="content-box">
          <h1 className="main-title">City Parkings</h1>
          
          <div className="accordion-list">
            {parkingDetails.map((item) => (
              <div key={item.id} style={{width: '300px', marginBottom: '10px'}}>
                <div 
                  className="card-header" 
                  onClick={() => toggleAccordion(item.id)}
                  style={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', // Added to center icon vertically
                    background: '#fff', 
                    padding: '10px', 
                    borderRadius: '5px' 
                  }}
                >
                  {item.title}
                  
                  {/* Circular Arrow Icon */}
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid #67737F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transform: openId === item.id ? 'rotate(0deg)' : 'rotate(180deg)'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#67737F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </div>
                </div>
                
                {openId === item.id && (
                  <div className="card-body" style={{ background: '#f9f9f9', padding: '10px', border: '1px solid #ddd' }}>
                    <p className="address-text">{item.address}</p>
                    <p className="charges-title"><strong>Parking Charges</strong></p>
                    <p className="charges-text">{item.charges}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CityParkings;
