import React from 'react';
import { Link } from "react-router-dom";
import datas from './data.js';
import Nav from './nav.jsx';
import Foot from './foot.jsx';
import { motion } from 'framer-motion';

function Otp1() {
  const data = datas[0];
  const orderTime = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const steps = [
    { title: "ORDER PLACED", desc: "Order #SPK-8925 confirmed", time: orderTime, status: "completed" },
    { title: "COOKING STARTED", desc: "Chef Arun is baking your fresh cake tiers", time: "In Progress", status: "active" },
    { title: "OUT FOR DELIVERY", desc: "Spark express rider assigning", time: "Estimated in 35 mins", status: "pending" },
    { title: "ORDER DELIVERED", desc: "Enjoy your fresh slice of joy", time: "Expected soon", status: "pending" }
  ];

  return (
    <>
      <Nav />

      <div className="spark-container" style={{ paddingTop: '30px', paddingBottom: '60px' }}>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <span className="badge-spark">Live Order Tracker</span>
          <h1 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#2C130D', marginTop: '6px' }}>
            Tracking Your Spark Order
          </h1>
          <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
            Real-time status updates from our bakery kitchen directly to your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="spark-card"
          style={{
            padding: '24px',
            marginBottom: '32px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',
            height: 'auto'
          }}
        >
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
            borderBottom: '1px solid #F3E8EE'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '85px', height: '85px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={data.img} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="badge-gold">Order #SPK-{8920 + data.id}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#2C130D', marginTop: '2px' }}>
                  {data.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
                  Weight: {data.wt} • Total Paid: <strong style={{ color: '#C51944' }}>Rs.{data.pri}</strong>
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '10px 0' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#2C130D', marginBottom: '20px' }}>
              Order Progress Status:
            </h4>

            <div className="tracking-steps-container" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative'
            }}>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: step.status === 'completed'
                      ? 'linear-gradient(135deg, #10B981, #059669)'
                      : step.status === 'active'
                      ? 'linear-gradient(135deg, #C51944, #F9526E)'
                      : '#E5E7EB',
                    color: step.status === 'pending' ? '#9CA3AF' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    flexShrink: 0,
                    boxShadow: step.status === 'active' ? '0 0 0 5px rgba(197, 25, 68, 0.2)' : 'none',
                    zIndex: 2
                  }}>
                    {step.status === 'completed' ? 'OK' : idx + 1}
                  </div>

                  <div style={{
                    flex: 1,
                    background: step.status === 'active' ? 'rgba(197, 25, 68, 0.04)' : '#FFFFFF',
                    padding: '12px 16px',
                    borderRadius: '14px',
                    border: step.status === 'active' ? '1px solid rgba(197, 25, 68, 0.25)' : '1px solid #F3E8EE'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                      <h5 style={{
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        color: step.status === 'pending' ? '#6B7280' : '#2C130D',
                        marginBottom: '2px'
                      }}>
                        {step.title}
                      </h5>
                      <span style={{ fontSize: '0.78rem', color: step.status === 'active' ? '#C51944' : '#6B7280', fontWeight: '600' }}>
                        {step.time}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: '#6B7280', margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '24px',
            paddingTop: '18px',
            borderTop: '1px solid #F3E8EE',
            justifyContent: 'center'
          }}>
            <a href="tel:8925100859" className="spark-btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              Call Bakery Dispatch (8925100859)
            </a>
            <Link to="/" className="spark-btn-outline" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>

      <Foot />
    </>
  );
}

export default Otp1;