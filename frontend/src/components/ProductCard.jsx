import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
          }
          alt={product.name}
          className={styles.image}
        />

        <span className={styles.name}>
          {product.name}
        </span>
      </div>

      <p className={styles.time}>منذ ساعتين</p>

      <div className={styles.actions}>
        <button
          onClick={() =>
            navigate("/results", {
              state: { product },
            })
          }
          className={styles.editButton}
        >
          تعديل المحتوى
        </button>

        <button className={styles.downloadButton}>
          تحميل الصورة
        </button>
      </div>
    </div>
  );
}