import React from 'react';

const Register = () => {
  const pageStyle = {
    backgroundColor: '#CAD7E6', // The "Outer" normal background color
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
     color: 'black',
    fontFamily: 'Arial, sans-serif'
  };

  const curveHeaderStyle = {
    // 1. The Gradient inside the curve
    background: 'linear-gradient(180deg, #67737F 0%, #BAD0E5 100%)',
    width: '100%',
    height: '250px', // Controls how far down the curve goes
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
    
    // 2. The Parabolic Curve function
    // ellipse(width height at x y)
    clipPath: 'ellipse(100% 100% at 90% 30%)', 
    marginBottom: '-50px' // Pulls the form up into the curved area
  };
const sectionBoxStyle = {
    background: 'rgba(255, 255, 255, 0.15)', // Semi-transparent overlay
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '15px',
    width: '100%',
    maxWidth: '360px',
    marginBottom: '15px'
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '8px',
    height: '30px',
    fontSize: '14px',
    color: '#333'
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
    border: 'none',
    borderRadius: '10px',
    padding: '10px 50px',
    fontSize: '18px',
    marginTop: '10px'
  };

  return (
    <div style={pageStyle}>
      {/* This div contains the gradient and the curve */}
      <div style={curveHeaderStyle}>
        <img src="cityparkinglogo.png" alt="Logo" style={{ width: '50px' }} />
        <h2 style={{ marginTop: '20px' }}>JOIN US</h2>
        <p>Create an account</p>
      </div>

      {/* The rest of your form components go here */}
      <div style={{ zIndex: 2, width: '100%', maxWidth: '360px' }}>
          {/* Grouped Form Sections */}
      <div className="w-100 d-flex flex-column align-items-center">
        
        {/* Name Box */}
        <div style={sectionBoxStyle}>
          <label style={labelStyle}>Name</label>
          <input type="text" className="form-control mb-2" placeholder="First name" style={inputStyle} />
          <input type="text" className="form-control" placeholder="Last name" style={inputStyle} />
        </div>

        {/* Age & Gender Box */}
        <div style={sectionBoxStyle}>
          <label style={labelStyle}>Age & Gender</label>
          <div className="row g-2">
            <div className="col-5">
              <input type="text" className="form-control" placeholder="Age" style={inputStyle} />
            </div>
            <div className="col-7">
              <input type="text" className="form-control" placeholder="Gender" style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Contact Details Box */}
        <div style={sectionBoxStyle}>
          <label style={labelStyle}>Contact Details</label>
          <input type="email" className="form-control mb-2" placeholder="Email" style={inputStyle} />
          <input type="text" className="form-control" placeholder="Ph no" style={inputStyle} />
        </div>
        <button className="btn btn-primary shadow-sm" style={buttonStyle}>
          Register
        </button>
      </div>

      </div>
    </div>
  );
};

export default Register;
