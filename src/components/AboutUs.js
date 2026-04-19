import React from 'react';

const AboutUs = () => {
  // Add this to force the browser to behave
  const injectGlobalStyle = (
    <style>
      {`
        body, html {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          height: 100% !important;
        }
      `}
    </style>
  );

  const pageStyle = {
    background: '#C8D5F2',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center',     // Centers vertically
    margin: 0,
    padding: 0,
    position: 'fixed',        // Ensures it stays pinned to the viewport
    top: 0,
    left: 0
  };

  const mainCardStyle = {
    
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '30px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    textAlign: 'center'
  };

  return (
    <>
      {injectGlobalStyle}
      <div style={pageStyle}>
        <div style={mainCardStyle}>
          <div style={{ marginBottom: '15px' }}>
            <svg 
              viewBox="0 0 24 24" 
              style={{ width: '80px', height: '80px', fill: '#555' }}
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          
          <h3 style={{ fontWeight: 'bold', marginBottom: '15px' }}>ABOUT US</h3>
          
          <p style={{ color: '#444', margin: 0 }}>
            We are dedicated to providing seamless urban parking solutions. 
            Our mission is to make city navigation stress-free for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
