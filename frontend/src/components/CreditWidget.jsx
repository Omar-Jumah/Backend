import React, { useState } from "react";
import styles from "./CreditWidget.module.css";

export default function CreditWidget() {
  const [credits] = useState(100);

  return (
    <div className={styles.widget}>

      <button className={styles.button}>
        شراء كريديت
      </button>

      <div className={styles.info}>
        <p className={styles.label}>
          الكريديت المتاح
        </p>

        <h2 className={styles.value}>
          {credits}
        </h2>
      </div>

    </div>
  );
}