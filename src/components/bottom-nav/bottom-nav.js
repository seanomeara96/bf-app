import React from "react";
import styles from "./bottom-nav.module.css";

const BottomNav = () => {
  return (
    <div className={styles.container}>
      <span>Explore</span>
      <span>Account</span>
      <span>Cart</span>
    </div>
  );
};

export default BottomNav;
