import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.item}>
      <div className={styles.ldsDualRing}></div>
      <div className={styles.text}>Loading</div>
    </div>
  );
};

export default LoadingSpinner;
