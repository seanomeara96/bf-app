import React from "react";
import styles from "./top-nav.module.css";
const TopNav = () => {
  return (
    <nav className={styles.container}>
      <span>Shop</span>
      <span>Top Brands</span>
      <span>Sales</span>
    </nav>
  );
};

export default TopNav;
