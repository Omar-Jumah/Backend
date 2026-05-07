import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import StatsCard from "../components/StatsCard";
import CreditWidget from "../components/CreditWidget";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    savedHours: 0,
    engagement: "0%",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Products error:", err));

    fetch("http://localhost:5000/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Stats error:", err));
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 20%, rgba(0,245,255,0.18), transparent 30%), radial-gradient(circle at 80% 80%, rgba(0,100,180,0.18), transparent 35%), linear-gradient(135deg, #03111f, #071c2d, #020914)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "35px 20px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          minHeight: "86vh",
          display: "flex",
          borderRadius: "24px",
          overflow: "hidden",
          background: "rgba(5, 25, 42, 0.78)",
          border: "1px solid rgba(130, 230, 255, 0.25)",
          boxShadow:
            "0 0 70px rgba(0,220,255,0.18), inset 0 0 35px rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: "220px",
            background:
              "linear-gradient(180deg, rgba(7, 45, 68, 0.88), rgba(4, 23, 38, 0.94))",
            borderLeft: "1px solid rgba(0,245,255,0.25)",
            padding: "25px 16px",
            flexShrink: 0,
          }}
        >
          <h2
            style={{
              color: "#00f5ff",
              fontSize: "21px",
              margin: "0 0 34px",
              textShadow: "0 0 18px rgba(0,245,255,0.7)",
              textAlign: "center",
            }}
          >
            SmartShop AI
          </h2>

          {[
            { name: "لوحة التحكم", icon: "▦", active: true },
            { name: "منتجاتي", icon: "◈", active: false },
            { name: "توليد المحتوى", icon: "✦", active: false },
            { name: "تحسين الصور", icon: "▣", active: false },
            { name: "الإعدادات", icon: "⚙", active: false },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                padding: "13px 14px",
                marginBottom: "12px",
                borderRadius: "8px",
                color: item.active ? "#eaffff" : "#91a8ba",
                background: item.active
                  ? "rgba(0,245,255,0.13)"
                  : "transparent",
                borderRight: item.active
                  ? "3px solid #00f5ff"
                  : "3px solid transparent",
                fontWeight: item.active ? "800" : "600",
                fontSize: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: item.active
                  ? "0 0 18px rgba(0,245,255,0.12)"
                  : "none",
              }}
            >
              <span>{item.name}</span>
              <span style={{ color: item.active ? "#00f5ff" : "#7d95aa" }}>
                {item.icon}
              </span>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "26px 26px 40px" }}>
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "ltr",
              marginBottom: "22px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={circleIcon}>?</span>
              <span style={circleIcon}>🔔</span>
            </div>

            <h2
              style={{
                color: "#00f5ff",
                margin: 0,
                fontSize: "21px",
                textShadow: "0 0 16px rgba(0,245,255,0.7)",
              }}
            >
              SmartShop AI
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#fff", fontWeight: "700" }}>
                SmartShop User
              </span>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#00d9ff,#7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px rgba(0,245,255,0.5)",
                }}
              >
                S
              </div>
            </div>
          </div>

          <h1
            style={{
              color: "white",
              margin: "0 0 16px",
              textAlign: "right",
              fontSize: "28px",
              fontWeight: "800",
            }}
          >
            Action Hub
          </h1>

          {/* Welcome Card */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(12, 85, 112, 0.75), rgba(8, 45, 75, 0.55))",
              border: "1px solid rgba(0,245,255,0.42)",
              borderRadius: "14px",
              padding: "26px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 0 30px rgba(0,245,255,0.18)",
              marginBottom: "22px",
            }}
          >
            <button
              style={{
                background: "linear-gradient(135deg,#00f5ff,#00c8ff)",
                color: "#002033",
                border: "none",
                borderRadius: "10px",
                padding: "13px 38px",
                fontWeight: "900",
                cursor: "pointer",
                boxShadow: "0 0 28px rgba(0,245,255,0.7)",
              }}
            >
              توليد سريع
            </button>

            <div>
              <h2 style={{ color: "white", margin: 0, fontSize: "26px" }}>
                أهلاً بك مجددًا!
              </h2>
              <p
                style={{
                  color: "#9cc7d8",
                  margin: "6px 0 0",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                جاهز لرفع مبيعاتك؟
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "18px",
              marginBottom: "18px",
            }}
          >
            <StatsCard
              title="المنتجات التي تم إنشاؤها"
              value={stats.totalProducts}
              extra="+15%"
              type="line"
            />
            <StatsCard
              title="الوقت الموفر (ساعة)"
              value={stats.savedHours}
              type="circle"
            />
            <StatsCard
              title="تفاعل الجمهور"
              value={stats.engagement}
              type="wave"
            />
          </div>

          <CreditWidget />

          {/* Products */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "28px",
              marginBottom: "14px",
            }}
          >
            <span style={{ color: "#7b91a6", fontSize: "13px" }}>المعروض</span>
            <h2 style={{ color: "white", margin: 0, fontSize: "24px" }}>
              أحدث المنتجات
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "18px",
            }}
          >
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

const circleIcon = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#cdefff",
  boxShadow: "0 0 14px rgba(0,245,255,0.18)",
};