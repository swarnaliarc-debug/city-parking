import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook

const Register = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleRegister = () => {
    // You can add logic here (like saving data) before moving to the next page
    navigate('/parkingrecords'); 
  };

  const pageStyle = {
    backgroundColor: '#CAD7E6',
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden'
  };

  const curveHeaderStyle = {
    background: 'linear-gradient(180deg, #67737F 0%, #BAD0E5 100%)',
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
    clipPath: 'ellipse(100% 100% at 50% 0%)', // Centered the curve for better look
    marginBottom: '-30px'
  };

  const sectionBoxStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '8px',
    width: '100%',
    maxWidth: '360px',
    marginBottom: '8px'
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '8px',
    height: '35px',
    fontSize: '14px',
    color: '#333',
    padding: '0 10px'
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
    marginBottom: '10px',
    display: 'block'
  };

  const buttonStyle = {
    backgroundColor: '#0087D5',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 60px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={pageStyle}>
      <div style={curveHeaderStyle}>
             <img src="cityparkinglogo.png" alt="Logo" style={{ width: '50px' }} />
        <h2 style={{ marginTop: '20px', marginBottom: '5px' }}>JOIN US</h2>
        <p>Create an account</p>
      </div>

      <div style={{ zIndex: 2, width: '100%', maxWidth: '360px', padding: '20px' }}>
        <div className="d-flex flex-column align-items-center">
          
          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Name</label>
            <input type="text" className="form-control mb-2" placeholder="First name" style={inputStyle} />
            <input type="text" className="form-control" placeholder="Last name" style={inputStyle} />
          </div>

          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Age & Gender</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" style={{...inputStyle, width: '40%'}} placeholder="Age" />
              <input type="text" style={{...inputStyle, width: '60%'}} placeholder="Gender" />
            </div>
          </div>

          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Contact Details</label>
            <input type="email" className="form-control mb-2" placeholder="Email" style={inputStyle} />
            <input type="text" className="form-control" placeholder="Ph no" style={inputStyle} />
          </div>

          <button 
            style={buttonStyle} 
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
