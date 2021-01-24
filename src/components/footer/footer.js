import React from "react";
import Container from "../container/container";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <SocialIcons facebook instagram twitter pinterest tiktok />
      </Container>
    </footer>
  );
};

export default Footer;
