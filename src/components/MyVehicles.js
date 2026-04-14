import React, { useState } from 'react';
import { FaCar, FaMotorcycle, FaChevronCircleDown, FaPencilAlt, FaTrash } from 'react-icons/fa';

const MyVehicles = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Tracks dropdown state
  const [vehicles, setVehicles] = useState([
    { id: 1, type: 'two-wheeler', number: 'WB 06F 5977', model: 'Honda', brand: 'Activa', colour: 'Black' },
    { id: 2, type: 'four-wheeler', number: 'WB 02F 6376', model: 'Swift', brand: 'Suzuki', colour: 'White' }
  ]);

  const [formData, setFormData] = useState({
    type: 'two-wheeler',
    model: '',
    brand: '',
    regNo: '',
    colour: ''
  });

  // SAVE OR UPDATE LOGIC
  const handleSave = () => {
    if (!formData.regNo) return alert("Please enter Registration Number");

    if (formData.id) {
      setVehicles(vehicles.map(v => v.id === formData.id ? {
        ...v,
        type: formData.type,
        number: formData.regNo,
        model: formData.model,
        brand: formData.brand,
        colour: formData.colour
      } : v));
    } else {
      const newVehicle = {
        id: Date.now(),
        type: formData.type,
        number: formData.regNo,
        model: formData.model || 'Model',
        brand: formData.brand || 'Brand',
        colour: formData.colour || 'Colour'
      };
      setVehicles([newVehicle, ...vehicles]);
    }

    setShowForm(false);
    resetForm();
  };

  const handleEdit = (vehicle) => {
    setFormData({
      id: vehicle.id,
      type: vehicle.type,
      brand: vehicle.brand,
      model: vehicle.model,
      regNo: vehicle.number,
      colour: vehicle.colour
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this vehicle?")) {
      setVehicles(vehicles.filter(v => v.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ type: 'two-wheeler', model: '', brand: '', regNo: '', colour: '' });
  };

  // STYLES
  const pageStyle = { background: '#C8D5F2', minHeight: '100vh', position: 'relative' };
  const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
  const mainCardStyle = { background: '#E8EDF9', borderRadius: '20px', padding: '30px 24px', maxWidth: '400px', width: '90%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' };
  const inputContainerStyle = { background: '#BCC9E8', borderRadius: '15px', padding: '12px 18px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' };
  const inputTextStyle = { background: 'transparent', border: 'none', width: '100%', fontWeight: 'bold', fontSize: '14px', outline: 'none', color: '#333' };
  
  const detailCardStyle = { 
    background: 'transparent', border: '1.5px solid #000', borderRadius: '20px', padding: '20px 25px', margin: '16px auto', maxWidth: '450px', display: 'flex', alignItems: 'center', 
    opacity: showForm ? 0.3 : 1, // Dims background
    pointerEvents: showForm ? 'none' : 'auto' // Disables clicks
  };

  return (
    <div style={pageStyle}>
      <div style={{ padding: '16px' }}>
        <h3 className="text-center fw-bold mb-4">My Vehicles</h3>

        {/* BACKGROUND LIST */}
        {vehicles.map((v) => (
          <div key={v.id} style={detailCardStyle}>
            <div style={{ minWidth: '60px', textAlign: 'center', marginRight: '20px' }}>
              {v.type === 'two-wheeler' ? <FaMotorcycle size={45} /> : <FaCar size={45} />}
            </div>
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{v.number}</div>
              <div style={{ fontSize: '15px', textTransform: 'uppercase' }}><b>{v.brand}</b> • {v.model}</div>
              <div style={{ fontSize: '15px', textTransform: 'uppercase' }}>{v.colour}</div>
            </div>
            <div className="d-flex flex-column gap-3">
              <FaPencilAlt size={18} color="#666" style={{ cursor: 'pointer' }} onClick={() => handleEdit(v)} />
              <FaTrash size={18} color="#dc3545" style={{ cursor: 'pointer' }} onClick={() => handleDelete(v.id)} />
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <button className="btn btn-primary" style={{ backgroundColor: '#0087D5', border: 'none', borderRadius: '10px', padding: '10px 50px' }} onClick={() => setShowForm(true)}>Add Vehicle</button>
        </div>

        {/* MODAL OVERLAY */}
        {showForm && (
          <div style={overlayStyle}>
            <div style={mainCardStyle}>
              <h5 className="text-center fw-bold mb-4" style={{ color: '#30119C' }}>{formData.id ? 'EDIT VEHICLE' : 'ADD VEHICLE'}</h5>
              
              {/* DROPDOWN WITH DYNAMIC ICONS */}
              <div style={inputContainerStyle}>
                <select 
                  style={{ ...inputTextStyle, appearance: 'none', cursor: 'pointer' }}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  onFocus={() => setIsSelectOpen(true)}
                  onBlur={() => setIsSelectOpen(false)}
                >
                  <option value="two-wheeler">Two Wheeler</option>
                  <option value="four-wheeler">Four Wheeler</option>
                </select>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {formData.type === 'two-wheeler' ? <FaMotorcycle color="#30119C" size={22} /> : <FaCar color="#30119C" size={22} />}
                  <FaChevronCircleDown 
                    color="white" 
                    size={18} 
                    style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s ease' }} 
                  />
                </div>
              </div>

              {/* INPUT FIELDS */}
              {['brand', 'model', 'regNo', 'colour'].map((f) => (
                <div key={f} style={inputContainerStyle}>
                  <input type="text" placeholder={`Vehicle ${f}`} style={inputTextStyle} value={formData[f]} onChange={(e) => setFormData({ ...formData, [f]: e.target.value })} />
                </div>
              ))}

              <div className="text-center mt-4">
                <button className="btn w-100 mb-2" style={{ color: '#fff', background: '#30119C', borderRadius: '10px', padding: '10px' }} onClick={handleSave}>
                  {formData.id ? 'UPDATE' : 'SUBMIT'}
                </button>
                <button className="btn btn-link text-muted text-decoration-none w-100" onClick={() => { setShowForm(false); resetForm(); }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVehicles;
