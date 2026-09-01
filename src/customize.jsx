import React, { useState } from 'react';
import Nav from './nav.jsx';
import Foot from './foot.jsx';
import Cake3D from './cake3d.jsx';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FLAVORS = [
  { id: 'choco', name: 'Belgian Chocolate', color: '#3D1E16', priceAdd: 0 },
  { id: 'vanilla', name: 'Madagascar Vanilla', color: '#FFFDD0', priceAdd: 0 },
  { id: 'redvelvet', name: 'Red Velvet', color: '#A31D24', priceAdd: 100 },
  { id: 'strawberry', name: 'Strawberry Rose', color: '#FFB6C1', priceAdd: 80 },
  { id: 'matcha', name: 'Japanese Matcha', color: '#708238', priceAdd: 120 },
  { id: 'blueberry', name: 'Wild Blueberry', color: '#2B3A67', priceAdd: 110 }
];

const FROSTINGS = [
  { id: 'white', name: 'Pure Buttercream', color: '#FFFFFF', border: '#E5E7EB' },
  { id: 'rose', name: 'Pink Champagne', color: '#F472B6', border: '#F472B6' },
  { id: 'dark', name: 'Dark Ganache', color: '#2C130D', border: '#2C130D' },
  { id: 'gold', name: 'Royal Gold', color: '#F59E0B', border: '#F59E0B' },
  { id: 'violet', name: 'Violet Velvet', color: '#8B5CF6', border: '#8B5CF6' }
];

export default function Customize() {
  const navigate = useNavigate();
  const [tiers, setTiers] = useState(2);
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[0]);
  const [selectedFrosting, setSelectedFrosting] = useState(FROSTINGS[0]);
  const [toppings, setToppings] = useState({
    candle: true,
    strawberries: true,
    sprinkles: true,
    macarons: false
  });
  const [inscription, setInscription] = useState('HAPPY BIRTHDAY');
  const [autoRotate, setAutoRotate] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  // Price Calculation
  const basePrice = tiers === 1 ? 699 : tiers === 2 ? 1299 : 1999;
  const flavorExtra = selectedFlavor.priceAdd;
  const toppingsExtra = (toppings.macarons ? 150 : 0) + (toppings.strawberries ? 80 : 0);
  const totalPrice = basePrice + flavorExtra + toppingsExtra;

  const toggleTopping = (key) => {
    setToppings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !phone || !address) {
      alert('Please fill in your Name, Phone Number, and Delivery Address.');
      return;
    }
    setShowModal(false);
    navigate('/otp1');
  };

  return (
    <>
      <Nav />
      <div className="spark-container" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <span className="badge-spark">Interactive 3D Cake Studio</span>
          <h1 style={{ fontSize: '2.3rem', color: '#2C130D', fontWeight: '800', marginTop: '6px' }}>
            Design & Customize Your Dream Cake
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Real-time 3D preview powered by Three.js. Choose your tiers, flavors, frosting, toppings, and custom inscription banner.
          </p>
        </motion.div>

        {/* Main Grid: Left 3D Canvas, Right Controls */}
        <div className="customizer-grid">
          
          {/* Left Column: 3D Visualizer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="spark-card"
            style={{ padding: '20px', position: 'relative', background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',height:"80%" }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2C130D' }}>Live 3D Preview</h3>
                <span style={{ fontSize: '0.825rem', color: '#6B7280' }}>
                  {tiers} {tiers === 1 ? 'Tier' : 'Tiers'} • {selectedFlavor.name}
                </span>
              </div>

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="spark-btn-outline"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                {autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
              </button>
            </div>

            {/* Three.js Canvas Container */}
            <div style={{ background: 'radial-gradient(circle, rgba(249,82,110,0.06) 0%, rgba(255,253,249,0.2) 80%)', borderRadius: '16px' }}>
              <Cake3D
                tiers={tiers}
                flavorColor={selectedFlavor.color}
                frostingColor={selectedFrosting.color}
                toppings={toppings}
                inscription={inscription}
                autoRotate={autoRotate}
              />
            </div>

            {/* Quick Specs Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #F3E8EE',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <div>
                <span style={{ fontSize: '0.825rem', color: '#6B7280', display: 'block' }}>Estimated Total:</span>
                <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#C51944' }}>Rs.{totalPrice}</span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="spark-btn-gold"
                style={{ padding: '12px 24px', fontSize: '0.95rem',marginLeft:"50%" }}
              >
                Order This 3D Cake
              </button>
            </div>
          </motion.div>

          {/* Right Column: Customization Controls Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="spark-card"
            style={{ padding: '24px' ,height:"100%"}}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#2C130D', marginBottom: '20px' }}>
              Customization Options
            </h3>

            {/* 1. Tier Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#374151', display: 'block', marginBottom: '8px' }}>
                1. Select Cake Tiers
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[1, 2, 3].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTiers(t)}
                    style={{
                      padding: '10px',
                      borderRadius: '12px',
                      border: tiers === t ? '2px solid #C51944' : '1px solid #E5E7EB',
                      background: tiers === t ? 'rgba(197, 25, 68, 0.06)' : '#FFFFFF',
                      color: tiers === t ? '#C51944' : '#374151',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {t} {t === 1 ? 'Tier' : 'Tiers'}
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '400', color: '#6B7280' }}>
                      {t === 1 ? '1 kg' : t === 2 ? '2.5 kg' : '4 kg'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Base Flavor Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#374151', display: 'block', marginBottom: '8px' }}>
                2. Base Cake Flavor & Color
              </label>
              <div className="customizer-options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {FLAVORS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlavor(f)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      border: selectedFlavor.id === f.id ? '2px solid #C51944' : '1px solid #E5E7EB',
                      background: selectedFlavor.id === f.id ? 'rgba(197, 25, 68, 0.04)' : '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: f.color,
                      border: '1px solid rgba(0,0,0,0.15)',
                      flexShrink: 0
                    }}></span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#1F2937' }}>{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Frosting Color Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#374151', display: 'block', marginBottom: '8px' }}>
                3. Icing & Frosting Color
              </label>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {FROSTINGS.map((fr) => (
                  <button
                    key={fr.id}
                    onClick={() => setSelectedFrosting(fr)}
                    title={fr.name}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: fr.color,
                      border: selectedFrosting.id === fr.id ? '3px solid #C51944' : `1px solid ${fr.border}`,
                      boxShadow: selectedFrosting.id === fr.id ? '0 0 0 3px rgba(197,25,68,0.25)' : 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease'
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* 4. Toppings & Extras */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#374151', display: 'block', marginBottom: '8px' }}>
                4. Toppings & Decor
              </label>
              <div className="customizer-options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {[
                  { key: 'candle', label: 'Candle Flame' },
                  { key: 'strawberries', label: 'Fresh Strawberries' },
                  { key: 'sprinkles', label: 'Rainbow Sprinkles' },
                  { key: 'macarons', label: 'Macarons (+Rs.150)' }
                ].map((top) => (
                  <label
                    key={top.key}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px',
                      borderRadius: '10px',
                      border: '1px solid #E5E7EB',
                      background: toppings[top.key] ? 'rgba(249, 82, 110, 0.08)' : '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={toppings[top.key]}
                      onChange={() => toggleTopping(top.key)}
                      style={{ accentColor: '#C51944', width: '16px', height: '16px' }}
                    />
                    {top.label}
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Custom 3D Cake Inscription */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#374151', display: 'block', marginBottom: '8px' }}>
                5. Custom Message on 3D Banner
              </label>
              <input
                type="text"
                maxLength={24}
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                placeholder="e.g. Happy Birthday caren"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #D1D5DB',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Final Order Action */}
            <button
              onClick={() => setShowModal(true)}
              className="spark-btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              Confirm 3D Cake & Proceed to Order (Rs.{totalPrice})
            </button>
          </motion.div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="spark-card"
            style={{ width: '100%', maxWidth: '520px', padding: '28px', position: 'relative', overflowY: 'auto', maxHeight: '90vh' }}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', color: '#6B7280' }}
            >
              CLOSE
            </button>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2C130D', marginBottom: '4px' }}>
              Finalize Custom 3D Cake Order
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '18px' }}>
              {tiers}-Tier {selectedFlavor.name} Cake (Rs.{totalPrice})
            </p>

            <form onSubmit={handleOrderSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 8925100859"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Delivery Date & Time</label>
                <input
                  type="datetime-local"
                  required
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Delivery Address *</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter complete delivery address"
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="spark-btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="spark-btn-primary"
                  style={{ flex: 2 }}
                >
                  Place Order (Rs.{totalPrice})
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <Foot />
    </>
  );
}
