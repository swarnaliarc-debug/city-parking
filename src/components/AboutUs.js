import React from 'react';
import { FaCar, FaMotorcycle, FaBars } from 'react-icons/fa';

const AboutUs = () => {
  const pageStyle = {
    background: '#C8D5F2', // Main background color
    minHeight: '100vh'
  };

  const mainCardStyle = {
    background: 'rgba(255, 255, 255, 0.4)', // Semi-transparent container
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '16px 16px 8px 16px',
    maxWidth: '400px',
    margin: '32px auto 0 auto'
  };

  
  return (
    <div style={pageStyle}>
      <div style={{ padding: '16px'}}>
      <div style={mainCardStyle}>
         {/* Main Content Card */}
      <main className="content-card">
        <div className="user-icon-container text-center w-100">
          <svg 
      viewBox="0 0 24 24" // Fixed: needs 4 values to scale properly
      style={{ width: '100px', height: '100px' }} // Adjusted: made it "Big"
      className="user-icon"
   >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <h3 className="section-title text-center">ABOUT US</h3>
        <p>We are .............................................................................................</p>
      </main>
    </div> 
      </div>
    </div>
  );
};

export default AboutUs;
