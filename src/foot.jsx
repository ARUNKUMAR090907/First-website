import React from 'react';
import { Link } from 'react-router-dom';
import qr from './assets/qr.png';
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f4.png';

function Foot() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, pink,pink)',
      color: '#000000',
      padding: '50px 0 24px',
      marginTop: '50px',
      borderTop: '3px solid #C51944'
    }}>
      <div className="spark-container">
        
        {/* Multi-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '50px',
          paddingBottom: '36px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              
              <h2 className='n1' style={{ fontSize: '1.8rem', fontWeight: '500', color: '#996909', margin: 0 }}>
                SPARK
              </h2>
            </div>
            <p style={{
              fontSize: '0.9rem',
              fontWeight: '700',
              color: '#F9526E',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Where Every Slice Tells A Story
            </p>
            <p style={{ fontSize: '0.85rem', color: '#000c21', lineHeight: '1.6' }}>
              India's premier artisanal bakery featuring real-time 3D cake customization, 100% fresh ingredients, and express delivery.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#F59E0B', marginBottom: '14px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link to="/" style={{ color: '#000000', textDecoration: 'none', fontSize: '0.875rem' }}>Home Catalog</Link></li>
              <li><Link to="/customize" style={{ color: '#F9526E', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '700' }}>3D Cake Studio</Link></li>
              <li><Link to="/about" style={{ color: '#000a18', textDecoration: 'none', fontSize: '0.875rem' }}>Our Bakery Story</Link></li>
              <li><Link to="/help" style={{ color: '#000000', textDecoration: 'none', fontSize: '0.875rem' }}>Help & Support FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: QR Contact */}
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#F59E0B', marginBottom: '12px' }}>
              Scan QR for Mobile Order
            </h4>
            <div style={{
              background: 'pink',
              padding: '10px',
              borderRadius: '12px',
              display: 'inline-block',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
              <img src={qr} alt="Scan QR Code" className="footer-qr-img" />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#000000', marginTop: '6px' }}>
              Scan with camera to order on mobile
            </p>
          </div>

          {/* Col 4: Associate Partners */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#F59E0B', marginBottom: '14px' }}>
              Associate Partners
            </h4>
            <div className="footer-partner-logos">
              <img src={f1} alt="Partner 1" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
              <img src={f2} alt="Partner 2" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
              <img src={f3} alt="Partner 3" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '0.825rem', color: '#000000', marginTop: '12px', lineHeight: '1.5' }}>
              Ph.no: 8925100859<br />
              Email: sparkcakes@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          fontSize: '0.8rem',
          color: '#000000'
        }}>
          © {new Date().getFullYear()} SPARK - The World of Cakes. All Rights Reserved. Mastercrafted by Arun .
        </div>

      </div>
    </footer>
  );
}

export default Foot;