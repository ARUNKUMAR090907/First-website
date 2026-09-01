import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import datas from "./data.js";
import Nav from './nav.jsx';
import Foot from './foot.jsx';
import { motion } from 'framer-motion';

function Prodet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = datas.find((det) => det.id === Number(id));

  // Interactive Product Options
  const [selectedWt, setSelectedWt] = useState("1.5kg");
  const [isEggless, setIsEggless] = useState(false);
  const [customText, setCustomText] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Form Fields for Modal
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");

  if (!data) {
    return (
      <>
        <Nav />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2>Cake product not found</h2>
          <Link to="/" className="spark-btn-primary" style={{ marginTop: "16px" }}>
            Return to Home
          </Link>
        </div>
        <Foot />
      </>
    );
  }

  // Price Calculation
  const wtMultiplier = selectedWt === "1kg" ? 0.8 : selectedWt === "1.5kg" ? 1.0 : selectedWt === "2kg" ? 1.3 : 1.8;
  const computedPrice = Math.round(data.pri * wtMultiplier) + (isEggless ? 50 : 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill in your Name, Phone Number, and Delivery Address.");
      return;
    }
    setShowModal(false);
    navigate(`/otp/${data.id}`);
  };

  return (
    <>
      <Nav />
      
      <div className="spark-container" style={{ paddingTop: "24px", paddingBottom: "50px" }}>
        
        {/* Breadcrumb */}
        <div style={{ marginBottom: "20px", fontSize: "0.85rem", color: "#6B7280" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#6B7280" }}>Home Catalog</Link> / 
          <span style={{ color: "#C51944", fontWeight: "600", marginLeft: "4px" }}>{data.name}</span>
        </div>

        <div className="product-detail-layout" style={{ display: "flex", gap: "36px", flexWrap: "wrap", alignItems: "start" }}>
          
          {/* Left Column: Product Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="spark-card product-detail-img"
            style={{ flex: "1 1 400px", padding: "14px" }}
          >
            <div style={{ borderRadius: "16px", overflow: "hidden", height: "380px" }}>
              <img
                src={data.img}
                alt={data.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: "1 1 440px" }}
          >
            <span className="badge-spark">{data.category}</span>
            <h1 style={{ fontSize: "2.1rem", fontWeight: "800", color: "#2C130D", marginTop: "6px" }}>
              {data.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0 14px", flexWrap: "wrap" }}>
              <span className="rating-stars">Rating {data.rating} / 5</span>
              <span style={{ color: "#6B7280", fontSize: "0.85rem" }}>({data.reviews} reviews)</span>
              <span style={{ color: "#10B981", fontSize: "0.825rem", fontWeight: "600" }}>In Stock • 2-Hr Express Delivery</span>
            </div>

            <p style={{ color: "#4B5563", fontSize: "0.98rem", lineHeight: "1.6", marginBottom: "20px" }}>
              {data.desc}
            </p>
            <div style={{
              background: "#FFFFFF",
              padding: "16px 20px",
              borderRadius: "14px",
              border: "1px solid #F3E8EE",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: '10px'
            }}>
              <div>
                <span style={{ fontSize: '0.825rem', color: '#6B7280', display: 'block' }}>Total Price:</span>
                <span style={{ fontSize: "2rem", fontWeight: "800", color: "#C51944" }}>Rs.{computedPrice}</span>
              </div>
              <span className="badge-gold">100% Freshly Baked</span>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "700", color: "#374151", display: "block", marginBottom: "8px" }}>
                Select Cake Weight / Size:
              </label>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["1kg", "1.5kg", "2kg", "3kg"].map((wt) => (
                  <button
                    key={wt}
                    onClick={() => setSelectedWt(wt)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "10px",
                      border: selectedWt === wt ? "2px solid #C51944" : "1px solid #E5E7EB",
                      background: selectedWt === wt ? "rgba(197, 25, 68, 0.06)" : "#FFFFFF",
                      color: selectedWt === wt ? "#C51944" : "#374151",
                      fontWeight: "700",
                      cursor: "pointer"
                    }}
                  >
                    {wt}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
                background: "#FFFFFF",
                padding: "8px 14px",
                borderRadius: "10px",
                border: "1px solid #E5E7EB"
              }}>
                <input
                  type="checkbox"
                  checked={isEggless}
                  onChange={() => setIsEggless(!isEggless)}
                  style={{ accentColor: "#C51944", width: "16px", height: "16px" }}
                />
                Make 100% Eggless (+Rs.50)
              </label>
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: "700", color: "#374151", display: "block", marginBottom: "6px" }}>
                Message on Cake (Optional):
              </label>
              <input
                type="text"
                maxLength={30}
                placeholder="e.g. Happy Birthday caren"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  fontSize: "0.875rem"
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => setShowModal(true)}
                className="spark-btn-primary"
                style={{ flex: "1 1 180px", padding: "12px", fontSize: "0.95rem" }}
              >
                Order Now (Rs.{computedPrice})
              </button>

             
            </div>
          </motion.div>
        </div>
      </div>
      {showModal && (
        <div style={{
          position: "fixed",
          inset: 0,
          height:"100%",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px"
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="spark-card"
            style={{ width: "100%", maxWidth: "520px", padding: "28px", position: "relative", overflowY: "auto", maxHeight: "90vh" }}
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", fontSize: "0.875rem", fontWeight: "700", cursor: "pointer", color: "#6B7280" }}
            >
              CLOSE
            </button>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#2C130D", marginBottom: "4px" }}>
              Complete Your Cake Order
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#6B7280", marginBottom: "18px" }}>
              {data.name} ({selectedWt}) • Total: Rs.{computedPrice}
            </p>

            <form onSubmit={handleOrderSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #D1D5DB" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 8925100859"
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #D1D5DB" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Delivery Date & Time *</label>
                <input
                  type="datetime-local"
                  required
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #D1D5DB" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Delivery Address *</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter street, city, landmark"
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #D1D5DB" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.85rem", fontWeight: "700", display: "block", marginBottom: "4px" }}>Special Instructions</label>
                <textarea
                  rows={2}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Any dietary preferences or delivery notes"
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #D1D5DB" }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
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
                  Confirm & Track Order (Rs.{computedPrice})
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

export default Prodet;