import React from "react";
import styles from "./product-preview.module.css";
import Button from "../button/button";
const ProductPreview = ({ thumbnail, brand, productName, price, alt }) => {
  return (
    <div className={styles.preview}>
      <div className={styles.inner}>
        <img className={styles.image} src={thumbnail} alt={alt} />
        <span className={styles.brand}>{brand}</span>
        <span className={styles.price}>€{price}</span>
        <Button primary>add to cart</Button>
      </div>
    </div>
  );
};

export default ProductPreview;
