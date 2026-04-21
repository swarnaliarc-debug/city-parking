import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { useAuth } from './AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get current path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/Parkingrecords' },
    { name: 'City Parkings', path: '/CityParkings' },
    { name: 'My Vehicles', path: '/MyVehicles' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Help', path: '/Help' }
  ];

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 1. Mobile Sidebar */}
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

      {/* 2. Overlay for Mobile */}
      {isMenuOpen && (
        <div onClick={toggleMenu} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1050 }} />
      )}

      {/* 3. Main Navbar Header */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2" 
           style={{ 
             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
             background: '#aac6e1', 
             position: 'relative', 
             zIndex: 900 
           }}>
        
        <div className="d-flex align-items-center">
          <div className="mobile-hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}>
            <FaBars size={28} color="#67737F" />
          </div>

           <style>
            {`
              .desktop-link {
                color: inherit;
                padding: 8px 12px;
                border-radius: 4px;
              }
              .desktop-link:hover {
                background-color: rgba(32, 106, 179, 0.1) !important;
                color: rgb(32, 106, 179);
              }
              .active-desktop {
                color: rgb(32, 106, 179) !important;
              }
            `}
          </style>

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

        <div style={{display: 'flex', flexDirection: 'row', gap:'8px', alignItems: 'center'}}>
          <Link to={"/profileupdate"} style={{ textDecoration: 'none' }} >
          <div style={{
              background: 'rgb(32, 106, 179, 0.1)', 
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px', // Pill shape looks cleaner
              padding: '6px 16px', 
              height: 'auto',
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center'
             }}>{ user? user.username: 'Guest'}</div>
          </Link>
          <img src="cityparkinglogo.png" alt="Logo" style={{ width: '44px' }} />
        </div>
      </div>

      {/* 4. CSS for Hovers and Active States */}
      <style>{`
        /* Base Desktop Link Color */
        .desktop-link {
          color: #206ab3;
        }

        /* Desktop Hover & Active */
        .desktop-link:hover, .active-desktop {
          color: #003366 !important;
        }
        /* Mobile Hover & Active */
        .mobile-link {
          transition: all 0.3s ease;
        }
        .mobile-link:hover, .active-mobile {
          background-color: rgba(255, 255, 255, 0.4);
          color: #206ab3 !important;
          padding-left: 15px !important;
        }
        .active-mobile {
            font-weight: bold;
            border-left: 4px solid #206ab3;
        }

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
