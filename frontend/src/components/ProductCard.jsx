import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "rgba(10, 25, 50, 0.6)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(0,255,255,0.1)",
      borderRadius: "20px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      transition: "0.3s",
      boxShadow: "0 0 25px rgba(0,255,255,0.05)"
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(0,255,255,0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 25px rgba(0,255,255,0.05)";
      }}
    >

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
        <span style={{
          color: "white",
          fontWeight: "600",
          fontSize: "14px",
          textAlign: "right"
        }}>
          {product.name}
        </span>
      </div>

      <p style={{ color: "#aaa", fontSize: "12px", textAlign: "right" }}>
        منذ ساعتين
      </p>

      <div style={{ display: "flex", gap: "8px" }}>
        
        <button
          onClick={() => navigate("/results")}
          style={{
            background: "linear-gradient(135deg,#ff00cc,#7c3aed)",
            border: "none",
            color: "white",
            borderRadius: "10px",
            padding: "8px",
            flex: 1,
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(255,0,200,0.4)"
          }}
        >
          تعديل المحتوى
        </button>

        <button
          style={{
            background: "linear-gradient(135deg,#00e5ff,#00bcd4)",
            border: "none",
            color: "white",
            borderRadius: "10px",
            padding: "8px",
            flex: 1,
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(0,255,255,0.4)"
          }}
        >
          تحميل الصورة
        </button>

      </div>
    </div>
  );
}