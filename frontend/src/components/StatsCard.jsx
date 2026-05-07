import React from "react";

export default function StatsCard({ title, value, extra, type }) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "118px",
        borderRadius: "16px",
        padding: "18px 22px",
        position: "relative",
        overflow: "hidden",
        textAlign: "right",
        background:
          type === "circle"
            ? "radial-gradient(circle at 25% 35%, rgba(0,245,255,0.45), transparent 24%), radial-gradient(circle at 45% 38%, rgba(255,0,190,0.22), transparent 25%), linear-gradient(135deg, rgba(13,55,84,0.72), rgba(8,31,57,0.88))"
            : type === "wave"
            ? "radial-gradient(circle at 18% 25%, rgba(255,0,190,0.38), transparent 26%), radial-gradient(circle at 80% 75%, rgba(0,245,255,0.18), transparent 28%), linear-gradient(135deg, rgba(16,42,77,0.78), rgba(9,31,58,0.9))"
            : "radial-gradient(circle at 20% 25%, rgba(255,0,190,0.32), transparent 26%), radial-gradient(circle at 75% 80%, rgba(0,245,255,0.18), transparent 28%), linear-gradient(135deg, rgba(14,48,82,0.78), rgba(8,30,56,0.9))",
        border: "1px solid rgba(145, 235, 255, 0.22)",
        boxShadow:
          "0 0 24px rgba(0, 245, 255, 0.10), inset 0 0 22px rgba(255,255,255,0.035)",
      }}
    >
      <p
        style={{
          color: "rgba(220,235,245,0.62)",
          fontSize: "13px",
          margin: 0,
          fontWeight: "600",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          color: "#ffffff",
          fontSize: "34px",
          margin: "10px 0 0",
          fontWeight: "800",
          letterSpacing: "0.5px",
        }}
      >
        {value}
      </h2>

      {extra && (
        <p
          style={{
            color: "#54f59b",
            fontSize: "15px",
            margin: "4px 0 0",
            fontWeight: "700",
          }}
        >
          ↗ {extra}
        </p>
      )}

      {type === "circle" && (
        <div style={{ position: "absolute", bottom: "18px", left: "24px" }}>
          <svg width="74" height="74" viewBox="0 0 74 74">
            <circle
              cx="37"
              cy="37"
              r="27"
              fill="none"
              stroke="rgba(137,229,255,0.25)"
              strokeWidth="8"
            />
            <circle
              cx="37"
              cy="37"
              r="27"
              fill="none"
              stroke="#57e9ff"
              strokeWidth="8"
              strokeDasharray="128 170"
              strokeLinecap="round"
              transform="rotate(-90 37 37)"
              style={{ filter: "drop-shadow(0 0 10px #57e9ff)" }}
            />
          </svg>
        </div>
      )}

      {type === "wave" && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "18px",
            right: "18px",
            height: "45px",
          }}
        >
          <svg viewBox="0 0 160 50" style={{ width: "100%", height: "100%" }}>
            <path
              d="M0 37 C15 25, 25 45, 40 28 S65 18, 80 32 S105 39, 120 24 S145 21, 160 30"
              fill="none"
              stroke="#68eaff"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px #68eaff)" }}
            />
          </svg>
        </div>
      )}

      {type === "line" && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "18px",
            right: "18px",
            height: "45px",
          }}
        >
          <svg viewBox="0 0 160 50" style={{ width: "100%", height: "100%" }}>
            <path
              d="M0 38 C20 35, 25 30, 42 31 C58 32, 60 22, 77 22 C98 22, 95 15, 112 15 C130 15, 132 7, 150 8 L160 4"
              fill="none"
              stroke="#39f59b"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px #39f59b)" }}
            />
          </svg>
        </div>
      )}
    </div>
  );
}