import React, { useState } from "react";

export default function CreditWidget() {
  const [credits] = useState(100);

  return (
    <div style={{
      background: "rgba(10, 30, 60, 0.6)",
      backdropFilter: "blur(15px)",
      border: "1px solid rgba(0,255,255,0.1)",
      borderRadius: "18px",
      padding: "16px 22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 0 25px rgba(0,255,255,0.05)"
    }}>
      
      <button style={{
        background: "linear-gradient(135deg,#ff00cc,#7c3aed)",
        border: "none",
        color: "white",
        borderRadius: "12px",
        padding: "10px 20px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 0 20px rgba(255,0,200,0.4)"
      }}>
        شراء كريديت
      </button>

      <div style={{ textAlign: "right" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
          الكريديت المتاح
        </p>
        <h2 style={{
          color: "#00ffff",
          fontSize: "26px",
          margin: 0
        }}>
          {credits}
        </h2>
      </div>
    </div>
  );
}