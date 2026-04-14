import React, { useState } from 'react'; // Added useState
import { FaBars, FaTimes } from 'react-icons/fa'; // Added FaTimes for closing
import { Link } from 'react-router-dom';

const Header = () => {
  // 1. Create the toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* 2. The Sidebar Menu (Slides in from the left) */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? '0' : '-250px', // Animates based on state
        width: '250px',
        height: '100vh',
        background: '#B7C6F4',
        zIndex: 1001,
        transition: '0.3s ease',
        padding: '20px',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
      }}>
        <div className="d-flex justify-content-end">
          <FaTimes size={25} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        </div>
        <nav className="mt-4">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="py-2 border-bottom"><Link to="/Parkingrecords" onClick={toggleMenu} className="text-dark text-decoration-none">Home</Link></li>
            <li className="py-2 border-bottom"><Link to="/CityParkings" onClick={toggleMenu} className="text-dark text-decoration-none">City Parkings</Link></li>
            <li className="py-2 border-bottom"><Link to="/MyVehicles" onClick={toggleMenu} className="text-dark text-decoration-none">My Vehicles</Link></li>
            <li className="py-2 border-bottom"><Link to="/ProfileUpdate" onClick={toggleMenu} className="text-dark text-decoration-none">Profile</Link></li>
            <li className="py-2 border-bottom"><Link to="/AboutUs" onClick={toggleMenu} className="text-dark text-decoration-none">About Us</Link></li>
            <li className="py-2 border-bottom"><Link to="/Help" onClick={toggleMenu} className="text-dark text-decoration-none">Help</Link></li>
          </ul>
        </nav>
      </div>

      {/* 3. Dark Overlay (closes menu when you click outside) */}
      {isMenuOpen && (
        <div 
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 1000
          }}
        />
      )}

      {/* 4. Your Original Navbar Header */}
      <div className="d-flex justify-content-between align-items-center p-1" style={{ boxShadow: '0 8px 10px -5px rgba(0, 0, 0, 0.2)', background: '#BAD0E5', position: 'relative', zIndex: 900}}>
        {/* Added onClick here to trigger the menu */}
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          <FaBars size={30} color="#67737F" style={{padding: '0px 4px' }} />
        </div>
        <div>
          <img src="cityparkinglogo.png" alt="Logo" style={{ width: '44px', padding: '4px 4px' }} />
        </div>
      </div>
    </>
  );
};

export default Header;
