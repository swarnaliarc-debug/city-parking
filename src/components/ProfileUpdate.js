import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaCheckCircle } from 'react-icons/fa';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: 'Swarnali', phone: '', email: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleEdit = (ref) => ref.current.focus();
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => navigate('/parkingrecords'), 2000);
    }, 1500);
  };

  const pageStyle = {
    background: '#C8D5F2',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    margin: 0
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '30px 24px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.05)'
  };

  const inputWrapperStyle = {
    background: '#BCC9E8',
    borderRadius: '10px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={pageStyle}>
      {showSuccess && (
        <div style={{
          position: 'absolute', top: '40px', background: '#4BB543', color: 'white',
          padding: '12px 24px', borderRadius: '50px', display: 'flex', alignItems: 'center',
          gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10
        }}>
          <FaCheckCircle /> Profile Updated!
        </div>
      )}

      <div style={cardStyle} className="text-center">
        {/* Person SVG Icon */}
        <div className="mb-4 d-flex justify-content-center">
          <div style={{ 
            width: '100px', height: '100px', borderRadius: '50%', 
            background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' 
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="Blue">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {[
          { label: 'NAME', name: 'name', ref: nameRef },
          { label: 'PH NO', name: 'phone', ref: phoneRef },
          { label: 'EMAIL', name: 'email', ref: emailRef }
        ].map((field) => (
          <div key={field.name} style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '4px', display: 'block' }}>{field.label}</label>
            <div style={inputWrapperStyle}>
              <input
                ref={field.ref}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%' }}
              />
              <FaPencilAlt size={14} style={{ cursor: 'pointer', color: '#444' }} onClick={() => handleEdit(field.ref)} />
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={isSaving || showSuccess}
          style={{
            background: (isSaving || showSuccess) ? '#8E9ED4' : '#4A3AFF',
            color: 'white', border: 'none', padding: '12px 40px', borderRadius: '10px',
            fontWeight: 'bold', marginTop: '10px', cursor: (isSaving || showSuccess) ? 'not-allowed' : 'pointer', width: '100%'
          }}
        >
          {isSaving ? 'SAVING...' : showSuccess ? 'DONE!' : 'SUBMIT'}
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
