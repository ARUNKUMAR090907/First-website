import React from 'react';
import Nav from './nav.jsx';
import Foot from './foot.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  const team = [
    { name: 'Arun Kumar', role: 'Master Baker & Founder', desc: 'With over 15 years of artisanal baking experience, Arun brings world-class techniques to every cake.' },
    { name: 'Priya Sharma', role: 'Head Pastry Chef', desc: 'Trained in Paris, Priya specializes in French patisserie and our signature velvet cake layers.' },
    { name: 'Karthik Rajan', role: 'Cake Decorator', desc: 'Karthik transforms every cake into edible art, focusing on intricate sugar work and 3D designs.' },
  ];

  return (
    <>
      <Nav />
      <div className="spark-container" style={{ paddingTop: '80px', paddingBottom: '60px' }}>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="badge-spark">OUR STORY</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#2C130D', marginTop: '8px' }}>
            Crafting Joy, One Slice at a Time
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '620px', margin: '12px auto 0' }}>
            SPARK – The World of Cakes was founded with a single passion: to bring premium artisanal cakes, made with the finest ingredients, directly to your celebration.
          </p>
        </motion.div>

        {/* About Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {[
            { title: '🎂 Our Legacy', body: 'Established in 2010, SPARK has grown from a home kitchen into Chennai\'s most beloved artisanal bakery, serving over 50,000+ happy celebrations.' },
            { title: '🌿 Fresh Ingredients', body: 'We source only the finest Belgian chocolate, organic farm cream, Kashmiri saffron, and fresh seasonal fruits for every single cake.' },
            { title: '⚡ Express Delivery', body: 'Our dedicated Spark Riders ensure your fresh cake arrives at your doorstep within 2 hours of baking, perfectly packaged.' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="spark-card"
              style={{ padding: '24px', height: 'auto' }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#2C130D', marginBottom: '10px' }}>{card.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: '1.65' }}>{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span className="badge-gold">MEET THE TEAM</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#2C130D', marginTop: '6px' }}>
            The Artisans Behind Every Cake
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="spark-card"
              style={{ padding: '24px', textAlign: 'center', height: 'auto' }}
            >
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #C51944, #F9526E)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', margin: '0 auto 14px', color: '#fff', fontWeight: '800'
              }}>
                {member.name.charAt(0)}
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#2C130D', marginBottom: '4px' }}>{member.name}</h4>
              <span className="badge-spark" style={{ fontSize: '0.7rem' }}>{member.role}</span>
              <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.6', marginTop: '10px' }}>{member.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="spark-btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            Explore Our Cakes
          </Link>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default About;