import React from "react";
import styles from "./hero-image.module.css";
const HeroImage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt="the ordinary offer"
        src="https://cdn11.bigcommerce.com/s-63354/product_images/uploaded_images/beauty-features-mobile-banner-the-ordinary.jpg?t=1610015632&_ga=2.213000412.976479337.1609747081-1182666886.1602669683"
      />
    </div>
  );
};

export default HeroImage;
