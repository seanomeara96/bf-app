import React from "react";
import Container from "../container/container";
import styles from "./bottom-nav.module.css";

const BottomNav = () => {
  return (
    <div className={styles.container}>
      <Container>
        <span>Explore</span>
        <span>Account</span>
        <span>Cart</span>
      </Container>
    </div>
  );
};

export default BottomNav;
