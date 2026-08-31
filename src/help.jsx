import React, { useState } from 'react';
import Nav from './nav.jsx';
import Foot from './foot.jsx';
import { motion } from 'framer-motion';

export default function Help() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const faqs = [
    {
      q: "How fast is SPARK cake delivery?",
      a: "We offer 2-Hour Express Delivery across Chennai and surrounding areas for standard cakes, and 4-Hour delivery for complex multi-tier custom 3D cakes."
    },
    {
      q: "Can I order 100% Eggless cakes?",
      a: "Yes! All our cakes can be prepared as 100% eggless using organic fruit pectin and yogurt substitutes without compromising flavor or fluffiness."
    },
    {
      q: "How does the 3D Cake Customizer work?",
      a: "Visit our 3D Studio tab to choose tiers, flavors, frosting colors, toppings, and enter custom message inscriptions. You can rotate the 3D model 360 degrees before placing your order."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, NetBanking, and Cash on Delivery (COD)."
    },
    {
      q: "Do you handle large corporate or wedding cake orders?",
      a: "Optionally! Contact our master baker directly at 8925100859 or submit an inquiry below for bulk pricing."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    setSubmitted(true);
    setTimeout(() => {
      setMessage('');
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Nav />

      <div className="spark-container" style={{ paddingTop: '30px', paddingBottom: '60px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <span className="badge-spark">Customer Support Center</span>
          <h1 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#2C130D', marginTop: '6px' }}>
            How Can We Help You Today?
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about delivery, eggless options, or custom 3D orders? We are here to help.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '44px' }}>
          <a
            href="tel:8925100859"
            className="spark-card"
            style={{ padding: '24px', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <span className="badge-spark" style={{ marginBottom: '8px', display: 'inline-block' }}>DIRECT CALL</span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#2C130D', marginTop: '6px' }}>Call Us Directly</h3>
            <p style={{ color: '#C51944', fontWeight: '700', fontSize: '1.05rem', marginTop: '4px' }}>8925100859</p>
            <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>Mon-Sun: 8am - 10pm</span>
          </a>

          <a
            href="mailto:sparkcakes@gmail.com"
            className="spark-card"
            style={{ padding: '24px', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <span className="badge-gold" style={{ marginBottom: '8px', display: 'inline-block' }}>EMAIL DESK</span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#2C130D', marginTop: '6px' }}>Email Support</h3>
            <p style={{ color: '#C51944', fontWeight: '700', fontSize: '0.925rem', marginTop: '4px' }}>sparkcakes@gmail.com</p>
            <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>Replies within 2 hrs</span>
          </a>

          <div style={{ padding: '24px', textAlign: 'center' }}>
          </div>
        </div>
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#2C130D', textAlign: 'center', marginBottom: '20px' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="spark-card"
                style={{ overflow: 'hidden' }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: '700',
                    fontSize: '0.98rem',
                    color: '#2C130D',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: '#C51944', fontWeight: '800', fontSize: '0.85rem' }}>
                    {activeFaq === idx ? 'HIDE' : 'VIEW'}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div style={{
                    padding: '0 20px 16px',
                    color: '#4B5563',
                    fontSize: '0.925rem',
                    lineHeight: '1.6',
                    borderTop: '1px solid #F3E8EE',
                    paddingTop: '12px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="spark-card" style={{ padding: '28px', maxWidth: '620px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#2C130D', marginBottom: '6px' }}>
            Send Us a Message
          </h3>
          <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '18px' }}>
            Looking for a custom cake inquiry or have feedback? Send a note directly to Chef Arun.
          </p>

          {submitted ? (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              color: '#065F46',
              padding: '14px',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              Thank you! Your message has been received. Our team will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Your Message / Inquiry</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we assist you with your celebration?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #D1D5DB' }}
                />
              </div>

              <button type="submit" className="spark-btn-primary" style={{ padding: '12px', fontSize: '0.95rem' }}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

      </div>

      <Foot />
    </>
  );
}