import React from "react";
import queryProducts from "../../utils/query";
import styles from "./product-carousel.module.css";
const ProductCarousel = ({ title, productSelectionLogic }) => {
  let productList = queryProducts(productSelectionLogic);
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.scroll}>
        <div className={styles.horizontal}>{productList}</div>
      </div>
    </>
  );
};

export default ProductCarousel;
