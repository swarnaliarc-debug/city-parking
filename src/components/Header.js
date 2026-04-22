import React, { useState } from 'react';
import { FaBars, FaTimes, FaPowerOff } from 'react-icons/fa'; // Matches your image
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoutClick = () => setShowLogoutConfirm(true);
  
  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'City Parkings', path: '/CityParkings' },
    { name: 'My Vehicles', path: '/MyVehicles' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Help', path: '/Help' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 1. Logout Confirmation Pop-up */}
      {showLogoutConfirm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            textAlign: 'center',
            maxWidth: '320px',
            width: '90%'
          }}>
            <FaPowerOff size={40} color="#d9534f" style={{ marginBottom: '15px' }} />
            <h4 style={{ marginBottom: '10px', color: '#333' }}>Sign Out?</h4>
            <p style={{ color: '#666', marginBottom: '25px' }}>Are you sure you want to log out of your account?</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                style={{ padding: '8px 20px', borderRadius: '8px', border: '1px solid #ccc', background: 'none', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                style={{ padding: '8px 20px', borderRadius: '8px', border: 'none', background: '#d9534f', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Mobile Sidebar */}
      <div className="mobile-sidebar" style={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? '0' : '-280px',
        width: '280px',
        height: '100vh',
        background: '#B7C6F4',
        zIndex: 1100,
        transition: '0.3s ease',
        padding: '20px',
        boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
      }}>
        <div className="d-flex justify-content-end mb-4">
          <FaTimes size={25} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.name} className="border-bottom">
                <Link 
                  to={item.path} 
                  onClick={toggleMenu} 
                  className={`mobile-link text-decoration-none d-block py-3 px-2 ${isActive(item.path) ? 'active-mobile' : 'text-dark'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 3. Overlay for Mobile */}
      {isMenuOpen && (
        <div onClick={toggleMenu} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1050 }} />
      )}

      {/* 4. Main Navbar Header */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2" 
           style={{ 
             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
             border: '1px solid rgba(0, 0, 0, 0.1)',
             background: '#aac6e1', 
             position: 'relative', 
             zIndex: 900 
           }}>
        
        <div className="d-flex align-items-center">
          <div className="mobile-hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}>
            <FaBars size={28} color="#67737F" />
          </div>

          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`desktop-link ${isActive(item.path) ? 'active-desktop' : ''}`}
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  marginLeft: '20px',
                  textTransform: 'uppercase',
                  transition: '0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', gap:'12px', alignItems: 'center'}}>
          {/* User Profile Pill */}
          <div style={{
              background: 'radial-gradient(ellipse, rgba(164, 192, 219, 0.5) 40%, rgba(164, 192, 219, 1) 57%)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '16px', 
              padding: '4px 12px', 
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
              
             }}>
            <Link to={"/profileupdate"} style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '14px' }}>
              {user ? user.username : 'Guest'}
            </Link>
            
            {user && (
              <button 
                onClick={handleLogoutClick}
                title="Sign Out"
                style={{
                  background: 'none',
                  color: '#d9534f', // Red Power Icon
                  border: 'none',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaPowerOff size={18} />
              </button>
            )}
          </div>
          
          <img src="cityparkinglogo.png" alt="Logo" style={{ width: '44px' }} />
        </div>
      </div>

      <style>{`
        .desktop-link { color: #206ab3; }
        .desktop-link:hover, .active-desktop { color: #003366 !important; }
        .mobile-link { transition: all 0.3s ease; }
        .mobile-link:hover, .active-mobile {
          background-color: rgba(255, 255, 255, 0.4);
          color: #206ab3 !important;
          padding-left: 15px !important;
        }
        .active-mobile { font-weight: bold; border-left: 4px solid #206ab3; }
        @media (max-width: 756px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
        @media (min-width: 757px) {
          .mobile-sidebar, .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
