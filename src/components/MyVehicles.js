import React, { useState } from 'react';
import { FaCar, FaMotorcycle, FaChevronCircleDown, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const VehicleType = Object.freeze({
    TWO_WHEELER: "Two wheeler",
    FOUR_WHEELER: "Four wheeler"
});

const MyVehicles = () => {
  const { user, addVehicle, deleteVehicle } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const vehicles = user && user.vehicles ? user.vehicles : [];
  
  const [formData, setFormData] = useState({
    type: VehicleType.TWO_WHEELER,
    model: '',
    brandname: '',
    regNo: '', // This is what we use in the form
    color: ''
  });

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const handleSave = async () => {
    // 1. Basic validation
    if (!formData.regNo) {
      return alert("Please enter the Registration Number");
    }

    setLoading(true);

    // 2. Prepare the payload to match your Java Entity names
    const vehiclePayload = {
      id: formData.id ? formData.id : null,
      type: formData.type,
      plateNumber: formData.regNo, // Mapping regNo to plateNumber for Java
      model: formData.model,
      brandname: formData.brandname,
      color: formData.color
    };

    try {
      const url = `${apiUrl}/vehicle?userid=${user.id}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehiclePayload),
      });

      if (response.ok) {
        const savedVehicle = await response.json();
        
        // If it's a new vehicle, add to list; otherwise, you might need an updateVehicle in AuthContext
        addVehicle(savedVehicle); 
        
        alert("Vehicle saved successfully!");
        setShowForm(false);
        resetForm();
      } else {
        // This catches the unique constraint error from Java
        alert("Error: This Registration Number is already in use.");
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vehicle?")) return;

    try {
      const response = await fetch(`${apiUrl}/vehicle/${id}`, { method: 'DELETE' });
      if (response.ok) {
        deleteVehicle(id);
      } else {
        alert("Failed to delete the vehicle.");
      }
    } catch (error) {
      alert("Error connecting to server.");
    }
  };

  const handleEdit = (vehicle) => {
    setFormData({
      id: vehicle.id,
      type: vehicle.type,
      brandname: vehicle.brandname,
      model: vehicle.model,
      regNo: vehicle.plateNumber, 
      color: vehicle.color
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({ type: VehicleType.TWO_WHEELER, model: '', brandname: '', regNo: '', color: '' });
  };

  // ... (Styles and Return remain the same as your code)
  const pageStyle = { background: '#C8D5F2', minHeight: '100vh', paddingBottom: '40px' };
  const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
  const mainCardStyle = { background: '#E8EDF9', borderRadius: '20px', padding: '30px 24px', maxWidth: '400px', width: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' };
  const inputContainerStyle = { background: '#BCC9E8', borderRadius: '15px', padding: '12px 18px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' };
  const inputTextStyle = { background: 'transparent', border: 'none', width: '100%', fontWeight: 'bold', fontSize: '14px', outline: 'none', color: '#333', textTransform: 'uppercase' };
  
  const detailCardStyle = (isBlurred) => ({ 
    background: 'transparent', border: '1.5px solid #000', borderRadius: '20px', padding: '20px 25px', margin: '16px auto', maxWidth: '450px', display: 'flex', alignItems: 'center', 
    opacity: isBlurred ? 0.3 : 1,
    pointerEvents: isBlurred ? 'none' : 'auto',
    transition: '0.3s ease'
  });

  return (
    <div style={pageStyle}>
      <div style={{ padding: '16px' }}>
        <h3 className="text-center fw-bold mb-4" >My Vehicles</h3>

        {vehicles.length === 0 && !loading && (
          <p className="text-center text-muted">No vehicles added yet.</p>
        )}

        {vehicles.map((v) => (
          <div key={v.id} style={detailCardStyle(showForm)}>
            <div style={{ minWidth: '60px', textAlign: 'center', marginRight: '20px' }}>
              {v.type === VehicleType.TWO_WHEELER ? <FaMotorcycle size={40} color="#30119C" /> : <FaCar size={40} color="#30119C" />}
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: '20px', textTransform: 'uppercase',fontWeight: 'bold', letterSpacing: '1px' }}>{v.plateNumber}</div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', color: '#555' }}>
                <b>{v.brandname}</b> • {v.model}
              </div>
              <div style={{ fontSize: '13px', textTransform: 'uppercase', color: '#777' }}>{v.color}</div>
            </div>
            <div className="d-flex flex-column gap-3">
              <FaPencilAlt size={18} color="#30119C" style={{ cursor: 'pointer' }} onClick={() => handleEdit(v)} />
              <FaTrash size={18} color="#dc3545" style={{ cursor: 'pointer' }} onClick={() => handleDelete(v.id)} />
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <button 
            className="btn btn-primary shadow-sm" 
            style={{ backgroundColor: '#0087D5', border: 'none', borderRadius: '10px', padding: '12px 60px', fontWeight: 'bold' }} 
            onClick={() => { resetForm(); setShowForm(true); }}
            disabled={loading}
          >
            {loading ? 'Saving...' : '+ Add Vehicle'}
          </button>
        </div>

        {showForm && (
          <div style={overlayStyle}>
            <div style={mainCardStyle}>
              <h5 className="text-center fw-bold mb-4" style={{ color: '#30119C' }}>
                {formData.id ? 'EDIT VEHICLE' : 'ADD NEW VEHICLE'}
              </h5>
              
              <div style={inputContainerStyle}>
                <select 
                  style={{ ...inputTextStyle, appearance: 'none', cursor: 'pointer' }}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  onFocus={() => setIsSelectOpen(true)}
                  onBlur={() => setIsSelectOpen(false)}
                >
                  <option value={VehicleType.TWO_WHEELER}>Two Wheeler</option>
                  <option value={VehicleType.FOUR_WHEELER}>Four Wheeler</option>
                </select>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {formData.type === VehicleType.TWO_WHEELER ? <FaMotorcycle color="#30119C" size={22} /> : <FaCar color="#30119C" size={22} />}
                  <FaChevronCircleDown 
                    color="#30119C" 
                    size={18} 
                    style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s ease' }} 
                  />
                </div>
              </div>

              {/* BRAND INPUT */}
              <div style={inputContainerStyle}>
                <input 
                  style={inputTextStyle} 
                  placeholder="Brand Name" 
                  value={formData.brandname} 
                  onChange={(e) => setFormData({...formData, brandname: e.target.value})} 
                />
              </div>

              {/* MODEL INPUT */}
              <div style={inputContainerStyle}>
                <input 
                  style={inputTextStyle} 
                  placeholder="Model Name" 
                  value={formData.model} 
                  onChange={(e) => setFormData({...formData, model: e.target.value})} 
                />
              </div>

              {/* REGISTRATION NUMBER INPUT */}
              <div style={inputContainerStyle}>
                <input 
                  style={inputTextStyle} 
                  placeholder="Registration Number" 
                  value={formData.regNo} 
                  onChange={(e) => setFormData({...formData, regNo: e.target.value.toUpperCase()})} 
                />
              </div>

              {/* COLOR INPUT */}
              <div style={inputContainerStyle}>
                <input 
                  style={inputTextStyle} 
                  placeholder="Vehicle Color" 
                  value={formData.color} 
                  onChange={(e) => setFormData({...formData, color: e.target.value})} 
                />
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-secondary w-100" onClick={() => setShowForm(false)}>Cancel</button>
                <button className="btn btn-primary w-100" onClick={handleSave} disabled={loading}>
                   {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVehicles;
