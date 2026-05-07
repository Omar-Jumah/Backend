import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const navigate = useNavigate();

  const [result, setResult] = useState({
    score: "95%",
    description:
      "نسخة عربية احترافية لعرض الحذاء الرياضي بأسلوب تسويقي جذاب يبرز الراحة، الأداء العالي، والتصميم العصري، مما يجعله خيارًا مثاليًا لعشاق الرياضة والأناقة.",
    ad:
      "إعلانات حذاء رياضي، معدل تفاعل عالي، مناسب لجميع منصات التواصل الاجتماعي ويجذب العملاء بطريقة احترافية.",
    hashtags: "#موضة #حذاء_رياضي #متجر_إلكتروني #تسويق #رياضة",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/ai/result")
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch(() => {});
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("تم النسخ!");
  };

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
        <aside
          style={{
            width: "220px",
            background:
              "linear-gradient(180deg, rgba(7,45,68,0.88), rgba(4,23,38,0.94))",
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
            { name: "لوحة التحكم", icon: "▦", active: false },
            { name: "منتجاتي", icon: "◈", active: false },
            { name: "توليد المحتوى", icon: "✦", active: true },
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
              }}
            >
              <span>{item.name}</span>
              <span style={{ color: item.active ? "#00f5ff" : "#7d95aa" }}>
                {item.icon}
              </span>
            </div>
          ))}
        </aside>

        <main style={{ flex: 1, padding: "26px 26px 40px" }}>
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
              textAlign: "center",
              fontSize: "28px",
              margin: "0 0 24px",
              fontWeight: "800",
            }}
          >
            AI Result
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            <div className="glass-card">
              <h2 style={cardTitle}>الصورة المحسّنة</h2>

              <img src={result.image} alt="product" className="image-glow" />

              <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
                <button style={cyanButton}>تحميل الصورة</button>
                <button style={pinkButton}>تعديل الصورة</button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                className="glass-card"
                style={{
                  minHeight: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2 style={cardTitle}>المحتوى المنشأ</h2>
                  <p style={{ color: "#9cc7d8", margin: "8px 0 0" }}>
                    مقياس الجودة
                  </p>
                  <p
                    style={{
                      color: "#00ff99",
                      margin: "4px 0 0",
                      fontWeight: "800",
                    }}
                  >
                    ممتاز
                  </p>
                </div>

                <div
                  style={{
                    width: "92px",
                    height: "92px",
                    borderRadius: "50%",
                    border: "6px solid #00eaff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "900",
                    boxShadow: "0 0 25px rgba(0,245,255,0.65)",
                  }}
                >
                  {result.score}
                </div>
              </div>

              {[
                { title: "وصف المنتج", content: result.description },
                { title: "إعلانات التواصل الاجتماعي", content: result.ad },
                { title: "الوسوم المقترحة", content: result.hashtags },
              ].map((section) => (
                <div key={section.title} className="glass-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      onClick={() => copyToClipboard(section.content)}
                      className="copy-btn"
                    >
                      نسخ 📋
                    </button>
                    <h3 className="section-title">{section.title}</h3>
                  </div>

                  <p className="section-text">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              marginTop: "22px",
              padding: "13px",
              borderRadius: "12px",
              background: "rgba(0,245,255,0.08)",
              border: "1px solid rgba(0,245,255,0.32)",
              color: "#00f5ff",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            ← العودة للداشبورد
          </button>
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

const cardTitle = {
  color: "white",
  margin: "0 0 16px",
  fontSize: "22px",
  fontWeight: "900",
  textAlign: "right",
};

const cyanButton = {
  flex: 1,
  background: "linear-gradient(135deg,#00f5ff,#00a8c8)",
  border: "none",
  color: "#002033",
  borderRadius: "10px",
  padding: "12px",
  cursor: "pointer",
  fontWeight: "900",
  boxShadow: "0 0 22px rgba(0,245,255,0.45)",
};

const pinkButton = {
  flex: 1,
  background: "linear-gradient(135deg,#ff00cc,#7c3aed)",
  border: "none",
  color: "white",
  borderRadius: "10px",
  padding: "12px",
  cursor: "pointer",
  fontWeight: "900",
  boxShadow: "0 0 22px rgba(255,0,200,0.45)",
};