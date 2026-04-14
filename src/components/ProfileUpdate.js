import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa'; 

const ProfileUpdate = () => {
  const pageStyle = {
    background: '#C8D5F2', 
    minHeight: '100vh'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '40px 24px',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const inputGroupStyle = {
    marginBottom: '24px',
    textAlign: 'left'
  };

const inputStyle = {
  background: '#BCC9E8',
  border: 'none',
  borderRadius: '10px',
  padding: '10px 10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between', // Fixed this line
  alignItems: 'center',
  fontSize: '16px'
};

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '12px',
    marginBottom: '4px',
    display: 'block'
  };

  return (
    <div style={pageStyle}>
  
      <div className="container">
        <div style={cardStyle} className="text-center">
          
          {/* Profile Avatar */}
          <div className="mb-5 d-flex justify-content-center">
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#7B8FCF' }}></div>
          </div>

          {/* Name Field */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>NAME</label>
            <div style={inputStyle}>
              <input type="text" className="form-control mb-1" placeholder="Swarnali" style={inputStyle} />
              <span></span>
              <FaPencilAlt size={16} color="#444" />
            </div>
          </div>

          {/* Phone Field */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>PH NO</label>
            <div style={inputStyle}>
              <input type="text" className="form-control mb-1" style={inputStyle} />
              <span></span>
              <FaPencilAlt size={14} color="#444" />
            </div>
          </div>

          {/* Email Field */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>EMAIL</label>
            <div style={inputStyle}>
              <input type="text" className="form-control mb-1" style={inputStyle} />
              <span></span>
              <FaPencilAlt size={16} color="#444" />
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn mt-4" style={{ color: '#4A3AFF', fontWeight: 'bold', letterSpacing: '1px', background: 'transparent', border: 'none' }}>
            SUBMIT
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
