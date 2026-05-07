import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResultsPage.module.css";

export default function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const defaultImage =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700";

  const [result, setResult] = useState({
    score: "95%",
    description:
      "نسخة عربية احترافية لعرض المنتج بأسلوب تسويقي جذاب يبرز الجودة والتصميم العصري.",
    ad: "إعلان احترافي مناسب لجميع منصات التواصل الاجتماعي ويجذب العملاء.",
    hashtags: "#منتج #متجر_إلكتروني #تسويق",
    image: product?.image || defaultImage,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/ai/result")
      .then((res) => res.json())
      .then((data) => {
        setResult({
          score: data.score || "95%",
          description:
            data.description ||
            "نسخة عربية احترافية لعرض المنتج بأسلوب تسويقي جذاب يبرز الجودة والتصميم العصري.",
          ad:
            data.ad ||
            "إعلان احترافي مناسب لجميع منصات التواصل الاجتماعي ويجذب العملاء.",
          hashtags: data.hashtags || "#منتج #متجر_إلكتروني #تسويق",
          image: product?.image || data.image || defaultImage,
        });
      })
      .catch(() => {});
  }, [product, defaultImage]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("تم النسخ!");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main style={{ flex: 1, padding: "26px 26px 40px" }}>
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
            <div className={styles.glassCard}>
              <h2
                style={{
                  color: "white",
                  margin: "0 0 16px",
                  fontSize: "22px",
                  fontWeight: "900",
                  textAlign: "right",
                }}
              >
                الصورة المحسّنة
              </h2>

              <img
                src={result.image}
                alt={product?.name || "product"}
                className={styles.imageGlow}
              />

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "18px",
                }}
              >
                <button style={cyanButton}>تحميل الصورة</button>
                <button style={pinkButton}>تعديل الصورة</button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                className={styles.glassCard}
                style={{
                  minHeight: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      color: "white",
                      margin: "0 0 16px",
                      fontSize: "22px",
                      fontWeight: "900",
                      textAlign: "right",
                    }}
                  >
                    المحتوى المنشأ
                  </h2>

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
                <div key={section.title} className={styles.glassCard}>
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
                      className={styles.copyBtn}
                    >
                      نسخ 📋
                    </button>

                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                  </div>

                  <p className={styles.sectionText}>{section.content}</p>
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