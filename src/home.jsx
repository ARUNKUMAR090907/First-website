import React, { useState } from 'react';
import Nav from './nav.jsx';
import datas from './data.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Foot from './foot.jsx';
import Rev from './re.jsx';
import back from './assets/b2.avif'
import car1 from './assets/c5.png';
import car2 from './assets/c4.png';
import car3 from './assets/home1.jpg';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', 'Chocolate', 'Red Velvet', 'Berry & Fruit', 'Cheesecake', 'Premium'];

  // Premium cakes for Carousel Track
  const premiumCakes = datas.filter((item) => item.isPremium);

  // Filtering & Sorting
  let filteredCakes = datas.filter((cake) => {
    const matchesCategory = activeCategory === 'All' || cake.category === activeCategory;
    const matchesSearch = cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cake.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'low-to-high') {
    filteredCakes.sort((a, b) => a.pri - b.pri);
  } else if (sortBy === 'high-to-low') {
    filteredCakes.sort((a, b) => b.pri - a.pri);
  } else if (sortBy === 'rating') {
    filteredCakes.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Nav />

      <div className="spark-container" id='car' style={{ marginTop: '4%',width:"100%" }}>
        <div
          id="heroCarousel"
          className="carousel slide  carousel-fade shadow-lg"
          data-bs-ride="carousel"
          style={{ borderRadius: '20px', overflow: 'hidden',width:"108%",height:"720px" }}
        >
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1 mx-10"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active hero-carousel-height" style={{ height: '100%', position: 'relative' }}>
              <img
                src={car1}
                className="d-block w-100"
                alt="Artisanal Spark Cakes"
                style={{ height: '720px',width:"100%", filter: 'brightness(0.7)' }}
              />
              <div
                className="carousel-caption hero-carousel-caption"
                style={{
                  bottom: '-10%',
                  textAlign: 'left',
                  left: '8%',
                  right: '8%',
                  maxWidth: '650px'
                }}
              >
                <span className="badge-gold mb-2" style={{ fontSize: '0.8rem' }}>PREMIUM LUXURY COLLECTION</span>
                <h2 className="hero-carousel-title" style={{ fontSize: '2.8rem', fontWeight: '800', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  Where Every Slice Tells A Story
                </h2>
                <p className="hero-carousel-desc" style={{ fontSize: '1.05rem', opacity: 0.95, marginBottom: '20px' }}>
                  Handcrafted with pure Belgian chocolate, organic berries, and fresh cream. Express 2-hour delivery.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="#catalog" className="spark-btn-gold">
                    Explore Catalog
                  </a>
                  <Link to="/customize" className="spark-btn-primary">
                    Design in 3D
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item hero-carousel-height" style={{  position: 'relative' }}>
              <img
                src={car2}
                className="d-block w-100"
                alt="Custom 3D Celebration Cakes"
                style={{ height: '720px', objectFit: 'cover', filter: 'brightness(0.68)' }}
              />
              <div
                className="carousel-caption hero-carousel-caption"
                style={{
                  bottom: '-10%',
                  textAlign: 'left',
                  left: '8%',
                  right: '8%',
                  maxWidth: '650px'
                }}
              >
                <span className="badge-spark mb-2" style={{ fontSize: '0.8rem', background: '#FFFFFF', color: '#C51944' }}>
                  INTERACTIVE 3D STUDIO
                </span>
                <h2 className="hero-carousel-title" style={{ fontSize: '2.8rem', fontWeight: '800', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  Create & Preview Your Custom Cake in 3D
                </h2>
                <p className="hero-carousel-desc" style={{ fontSize: '1.05rem', opacity: 0.95, marginBottom: '20px' }}>
                  Choose tier sizes, flavor colors, frosting, toppings, and personalized message inscriptions in real time.
                </p>
                <Link to="/customize" className="spark-btn-gold">
                  Launch 3D Studio
                </Link>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item hero-carousel-height" style={{ height: '440px', position: 'relative' }}>
              <img
                src={car3}
                className="d-block w-100"
                alt="Freshly Baked Delights"
                style={{ height: '720px', objectFit: 'cover', filter: 'brightness(0.68)' }}
              />
              <div
                className="carousel-caption hero-carousel-caption"
                style={{
                  bottom:"-10%",
                  textAlign: 'left',
                  left: '10%',
                  right: '8%',
                  maxWidth: '650px'
                }}
              >
                <span className="badge-spark mb-2" style={{ fontSize: '0.8rem' }}>CELEBRATIONS & EVENTS</span>
                <h2 className="hero-carousel-title" style={{ fontSize: '2.8rem', fontWeight: '800', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  Make Every Birthday & Anniversary Unforgettable
                </h2>
                <p className="hero-carousel-desc" style={{ fontSize: '1.05rem', opacity: 0.95, marginBottom: '20px' }}>
                  Over 50,000+ happy celebrations crafted with passion and master artistry.
                </p>
                <a href="#catalog" className="spark-btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon m-50" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* 3D Customizer Teaser Banner */}
      <div className="spark-container" style={{ marginTop: '28px', marginBottom: '10px',}}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="spark-card"
          style={{
            background: 'linear-gradient(135deg, #2C130D 0%, #4A1A12 100%)',
            color: '#FFFFFF',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            borderRadius: '20px',
            height:"300px"
          }}
        >
          <div>
            <span className="badge-gold mb-2" style={{ display: 'inline-block' }}>NEW FEATURE</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#FFFDF9', margin: '4px 0' }}>
              Want a Customized Cake?
            </h3>
            <p style={{ color: '#F3E8EE', fontSize: '0.95rem', maxWidth: '600px' }}>
              Use our interactive 3D WebGL studio to select flavor colors, multi-tier sizes, toppings, and custom 3D banner messages.
            </p>
          </div>
          <Link to="/customize" className="spark-btn-gold" style={{ fontSize: '0.95rem', padding: '12px 24px' }}>
            Open 3D Cake Customizer
          </Link>
        </motion.div>
      </div>

      {/* Premium Cakes Featured Track Section */}
      <div className="spark-container" style={{ marginTop: '36px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span className="badge-gold">CHEF'S SELECTION</span>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#2C130D', marginTop: '4px' }}>
              Premium Luxury Cakes
            </h2>
          </div>
        </div>

        {/* Scrollable Horizontal Track */}
        <div style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '16px',
          scrollbarWidth: 'thin'
        }}>
          {premiumCakes.map((cake) => (
            <motion.div
              key={cake.id}
              whileHover={{ y: -5 }}
              className="spark-card"
              style={{ minWidth: '250px', flex: '0 0 auto', padding: '14px' }}
            >
              <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '270px', marginBottom: '12px' }}>
                <img src={cake.img} alt={cake.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '10px', left: '10px' }} className="badge-gold">
                  PREMIUM
                </span>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#2C130D', marginBottom: '4px' }}>
                {cake.name}
              </h4>
              <p style={{ fontSize: '0.825rem', color: '#6B7280', height: '36px', overflow: 'hidden' }}>
                {cake.desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <div>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#C51944' }}>Rs.{cake.pri}</span>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', marginLeft: '4px' }}>({cake.wt})</span>
                </div>
                <Link to={`/prodet/${cake.id}`} className="spark-btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                  Buy
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Cake Catalog Section */}
      <div id="catalog"  style={{ marginTop: '36px', marginBottom: '40px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span className="badge-spark">FRESHLY BAKED DAILY</span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', color: '#2C130D', marginTop: '4px' }}>
            Explore Our Cake Menu
          </h2>
        </div>

        {/* Filter Controls & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          background: '#FFFFFF',
          padding: '16px 20px',
          borderRadius: '16px',
          border: '1px solid #F3E8EE'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: activeCategory === cat ? 'none' : '1px solid #E5E7EB',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #C51944, #F9526E)' : '#FFFDF9',
                  color: activeCategory === cat ? '#FFFFFF' : '#374151',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flex: '1 1 280px', justifyContent: 'flex-end' }}>
            <input
              type="text"
              placeholder="Search cake name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1px solid #D1D5DB',
                outline: 'none',
                fontSize: '0.875rem',
                minWidth: '170px',
                flex: '1'
              }}
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1px solid #D1D5DB',
                outline: 'none',
                fontSize: '0.875rem',
                background: '#FFFFFF'
              }}
            >
              <option value="default">Sort by Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Responsive Cake Grid */}
        {filteredCakes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px 20px', color: '#6B7280' }}>
            <h3>No cakes found matching "{searchQuery}"</h3>
            <p>Try resetting search filters.</p>
          </div>
        ) : (
          <div id='back'>
            {filteredCakes.map((cake) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
        
                transition={{ duration: 0.7}}
                className="spark-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="cake-card-img-height" style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '300px', marginBottom: '12px' }}>
                  <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.6 }}
            
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                  <img
                    src={cake.img}
                    alt={cake.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  </motion.div>
                  {cake.isPremium && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px' }} className="badge-gold">
                      PREMIUM
                    </span>
                  )}
                  <span style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.75)',
                    color: '#FFFDF9',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}>
                    Rating {cake.rating}/5
                  </span>
                </div>

                <h3 className="cake-card-title" style={{ fontSize: '1.15rem', fontWeight: '700', color: '#2C130D', marginBottom: '4px' }}>
                  {cake.name}
                </h3>
                
                <p style={{ fontSize: '0.825rem', color: '#6B7280', flex: '1', marginBottom: '12px', lineHeight: '1.5' }}>
                  {cake.desc}
                </p>

                <div className="card-action-row">
                  <div>
                    <span className="cake-card-price" style={{ fontSize: '1.35rem', fontWeight: '800', color: '#C51944' }}>Rs.{cake.pri}</span>
                    <span style={{ fontSize: '0.78rem', color: '#6B7280', marginLeft: '4px' }}>/ {cake.wt}</span>
                  </div>

                  <Link id='but' to={`/prodet/${cake.id}`} className="spark-btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Customer Reviews Section */}
      <Rev />

      {/* Footer */}
      <Foot />
    </>
  );
}