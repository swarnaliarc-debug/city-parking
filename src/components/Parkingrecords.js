import React, { useState, useEffect } from 'react';
import { FaCar, FaMotorcycle } from 'react-icons/fa';
import { useAuth } from './AuthContext';

const ParkingRecords = () => {
  const { user } = useAuth();
  const [records, setRecords] = useState([]);
  const [userVehicles, setUserVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const pageStyle = { background: '#C8D5F2', minHeight: '100vh', paddingBottom: '40px' };
  
  const mainCardStyle = {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '16px 16px 8px 16px',
    maxWidth: '400px',
    margin: '32px auto 0 auto'
  };

  const detailCardStyle = {
    background: 'transparent',
    border: '1.5px solid #000',
    borderRadius: '15px',
    padding: '15px',
    margin: '16px auto',
    position: 'relative',
    maxWidth: '720px'
  };

  const parkingLocations = [
    { id: "SPOT-01", title: "City Center 2" },
    { id: "SPOT-02", title: "City Center 1" },
    { id: "SPOT-03", title: "Acropolis Mall" },
    { id: "SPOT-04", title: "Mani Square Mall" }
  ];

   const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      try {
        const [recordsRes, vehiclesRes] = await Promise.all([
          fetch(apiUrl+'/parking-history'),
          fetch(`${apiUrl}/uservehicles/${user.id}`)
        ]);
        const recordsData = await recordsRes.json();
        const vehiclesData = await vehiclesRes.json();
        setRecords(recordsData);
        setUserVehicles(vehiclesData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const renderIcon = (vehicle, size, isParked) => {
    if (!vehicle) return <FaCar size={size} />;
    const typeValue = String(vehicle.type || "").toLowerCase();
    const iconStyle = { opacity: isParked ? 1 : 0.4, transition: '0.3s' };
    
    if (typeValue === "two wheeler") {
      return <FaMotorcycle className="me-3" size={size} style={iconStyle} />;
    }
    return <FaCar className="me-3" size={size} style={iconStyle} />;
  };

  const getParkingName = (id) => {
    const loc = parkingLocations.find(l => l.id === id);
    return loc ? loc.title : id;
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString([], {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });
  };

  if (loading) return <div style={pageStyle} className="text-center pt-5">Loading Records...</div>;

  return (
    <div style={pageStyle}>
      <div style={{ padding: '16px' }}>
        <h3 className="text-center fw-bold mb-4" style={{ color: '#000' }}>Parking Records</h3>

        {/* 1. Top Status Pills */}
        <div style={mainCardStyle}>
          {userVehicles.map(veh => {
            const isParked = records.some(r => r.vehicle && r.vehicle.id === veh.id && !r.exitDateTime);

            return (
              <div key={veh.id} style={{
                background: isParked ? '#C1C9F5' : 'rgba(103, 115, 127, 0.2)', 
                borderRadius: '12px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '15px',
                color: isParked ? '#333' : '#67737F',
                fontWeight: '500',
                transition: '0.3s ease'
              }}>
                <div className="d-flex align-items-center">
                  {renderIcon(veh, 24, isParked)}
                  <span className="fw-bold">{veh.plateNumber || "No Plate"}</span>
                </div>
                
                <div className="d-flex align-items-center">
                  <div style={{ 
                    height: '12px', width: '12px', borderRadius: '50%', 
                    background: isParked ? '#00FF00' : '#67737F', 
                    border: isParked ? '1px solid black' : 'none', marginRight: '8px' 
                  }}></div>
                  <span style={{ opacity: isParked ? 1 : 0.6 }}>{isParked ? 'In' : 'Out'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Detailed History Cards */}
        {records.length > 0 ? (
          records.slice().reverse().map((record) => (
            <div key={record.id} style={detailCardStyle}>
              <small style={{ float: 'right', fontWeight: 'bold', color: '#000' }}>
                {getParkingName(record.parkingId)}
              </small>
              
              <div className="d-flex align-items-center mb-2">
                {renderIcon(record.vehicle, 20, true)}
                <span className="fw-bold">{record.vehicle?.plateNumber}</span>
              </div>

              <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '13px' }}>
                <div className="d-flex flex-column gap-1">
                  <span className="fw-bold text-dark">
                    Entry: {formatTime(record.entryDateTime)}
                  </span>
                  {record.exitDateTime && (
                    <span className="fw-bold text-dark">
                      Exit: {formatTime(record.exitDateTime)}
                    </span>
                  )}
                </div>

                <div className="d-flex align-items-center">
                  {!record.exitDateTime ? (
                    <>
                      <div style={{ height: '10px', width: '10px', borderRadius: '50%', background: '#00FF00', border: '1px solid black', marginRight: '5px' }}></div>
                      <span className="fw-bold text-dark">Parked</span>
                    </>
                  ) : (
                    <span className="fw-bold px-2 py-1" style={{ 
                        background: '#C1C9F5', 
                        borderRadius: '8px', 
                        fontSize: '12px',
                        color: '#206ab3'
                    }}>
                      {(() => {
                        const diff = new Date(record.exitDateTime) - new Date(record.entryDateTime);
                        const mins = Math.floor(diff / 60000);
                        const hours = Math.floor(mins / 60);
                        if (hours > 0) return `${hours}h ${mins % 60}m`;
                        return `${mins} mins`;
                      })()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">No parking records found.</div>
        )}
      </div>
    </div>
  );
};

export default ParkingRecords;
