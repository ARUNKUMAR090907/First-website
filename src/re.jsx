import React from 'react';
import car1 from './assets/r1.jpg';
import car2 from './assets/c3.avif';
import car3 from './assets/c2.avif';
import { motion } from "framer-motion";

function Rev() {
  const reviews = [
    {
      id: 1,
      name: "Priya S.",
      role: "Verified Buyer",
      img: car1,
      rating: "5.0 / 5.0",
      comment: "The 3D Cake Customizer made ordering for my sister's birthday so easy. The Velvet Spark cake tasted even better than it looked!"
    },
    {
      id: 2,
      name: "Karthik R.",
      role: "Celebration Host",
      img: car2,
      rating: "5.0 / 5.0",
      comment: "Delivered within 90 minutes! Fresh, eggless, and super moist. Everyone at the party was asking where we bought it."
    },
    {
      id: 3,
      name: "Ananya M.",
      role: "Corporate Client",
      img: car3,
      rating: "5.0 / 5.0",
      comment: "Ordered 5 custom cakes for our company anniversary. Master Baker Arun and team delivered pure perfection."
    }
  ];

  return (
    <div className="spark-container" style={{ marginTop: "40px", marginBottom: "30px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <span className="badge-gold">VERIFIED REVIEWS</span>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#2C130D", marginTop: "4px" }}>
          Top Customer Reviews & Stories
        </h2>
        <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>
          Over 5,000+ 5-Star ratings from happy cake lovers across the region.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "20px"
      }}>
        {reviews.map((rev) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="spark-card"
            style={{ padding: "20px", display: "flex", flexDirection: "column" ,height:"200px"}}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "50%", overflow: "hidden", border: "2px solid #C51944" }}>
                <img src={rev.img} alt={rev.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#2C130D", margin: 0 }}>
                  {rev.name}
                </h4>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{rev.role}</span>
                <div style={{ color: "#B45309", fontSize: "0.8rem", fontWeight: '700', marginTop: "2px" }}>
                  Rating: {rev.rating}
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#4B5563", fontStyle: "italic", flex: 1, lineHeight: "1.6" }}>
              "{rev.comment}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Rev;