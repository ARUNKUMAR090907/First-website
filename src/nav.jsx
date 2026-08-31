import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'fixed',top:"1px",zIndex:"10",width:"100%" }} className="glass-nav">
      <div className="spark-container" style={{
        paddingTop: '14px',
        paddingBottom: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        
        <Link to="/" style={{ textDecoration: 'none' }}>
         
          <div style={{display:"flex",gap:"2%",width:"500px",position:"relative",left:"10px"}}>
            <h1  className='n1'style={{
              fontSize: '2rem',
              color: 'rgb(154, 66, 3)',
              letterSpacing: '0.5px',
              lineHeight: 1
            }}>
              SP<span style={{ color: '#ffffff' }} className='n1'>ARK</span>
            </h1>
            <span className='n2' style={{ fontSize: '1.3rem', color: 'rgb(154, 66, 3)', fontWeight: 'bold', letterSpacing: '1px',marginTop:"0px" }}>
              - THE WORLD OF CAKES
            </span>
          </div>
        </Link>

        <nav className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              fontWeight: isActive('/') ? '700' : '500',
              color: isActive('/') ? '#C51944' : '#374151',
              fontSize: '0.95rem'
            }}
          >
            Home
          </Link>

          <Link
            to="/customize"
            style={{
              textDecoration: 'none',
              fontWeight: isActive('/customize') ? '700' : '600',
              color: isActive('/customize') ? '#C51944' : '#2C130D',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>3D Studio</span>
            <span className="badge-spark" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>NEW</span>
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              fontWeight: isActive('/about') ? '700' : '500',
              color: isActive('/about') ? '#C51944' : '#374151',
              fontSize: '0.95rem'
            }}
          >
            About Us
          </Link>

          <Link
            to="/help"
            style={{
              textDecoration: 'none',
              fontWeight: isActive('/help') ? '700' : '500',
              color: isActive('/help') ? '#C51944' : '#374151',
              fontSize: '0.95rem'
            }}
          >
            Help & FAQ
          </Link>

          <a
            href="tel:8925100859"
            className="spark-btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            Call: 8925100859
          </a>
        </nav>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.4rem',
            fontWeight: '800',
            cursor: 'pointer',
            color: '#2C130D',
            padding: '4px 8px'
          }}
        >
          {mobileOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          background: '#FFFFFF',
          borderTop: '1px solid #F3E8EE',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '600', color: '#2C130D', fontSize: '1rem' }}
          >
            Home Catalog
          </Link>

          <Link
            to="/customize"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '700', color: '#C51944', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span>3D Cake Studio</span>
            <span className="badge-spark">NEW</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '600', color: '#2C130D', fontSize: '1rem' }}
          >
            Our Story & About
          </Link>

          <Link
            to="/help"
            onClick={() => setMobileOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '600', color: '#2C130D', fontSize: '1rem' }}
          >
            Help & Support FAQ
          </Link>

          <a
            href="tel:8925100859"
            className="spark-btn-gold"
            style={{ width: '100%', textAlign: 'center', marginTop: '4px' }}
          >
            Call Bakery: 8925100859
          </a>
        </div>
      )}
    </header>
  );
}

export default Nav;