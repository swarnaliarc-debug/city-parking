import React from 'react';
import { FaBars, FaFacebook, FaInstagram } from 'react-icons/fa';

const Help = () => {
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
    <div className="d-flex justify-content-between align-items-center p-1" style={{ boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.2)', background: '#BAD0E5'}}>
           
          </div>
          <div style={{ padding: '16px'}}></div><div className="container">
        <div style={mainCardStyle}>
          <p style={{ textAlign: 'left', fontSize: '14px', marginBottom: '40px' }}>We Are Here To Help you</p>

          {/* Large Mail Icon */}
        <div className="mb-4 text-center">
  <svg width="80" height="60" viewBox="0 0 24 24" fill="none" stroke="#617D98" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13L2 7" />
  </svg>
</div>

          <h4 className="mb-1 text-center" style={{ fontWeight: '400' }}>Email Us</h4>
          <p className="text-muted mb-4 text-center" style={{ fontSize: '14px' }}>
           Send us your queries
           </p>
          
          <h3 className="mb-5 text-center"  style={{ fontWeight: '300', fontSize: '24px' }}>help@cityparking.in</h3>

          <div style={{ marginTop: '100px' }}>
            <p className="mb-3 text-center" style={{ fontSize: '14px' }}>Follow us</p>
            <div className="d-flex justify-content-center gap-3">
              <FaFacebook size={35} color="#1877F2" />
              <FaInstagram size={35} style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '8px', color: 'white', padding: '2px' }} />
            </div>
          </div>
        </div>
      </div>
      </div>  
      
 

  );
};


export default Help;
