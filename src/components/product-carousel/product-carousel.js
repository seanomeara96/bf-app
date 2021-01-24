import React from "react";
import products from "../../products.json";
import Container from "../container/container";
import ProductPreview from "../product-preview/product-preview";
import styles from "./product-carousel.module.css";
const ProductCarousel = ({ title, productSelectionLogic }) => {
  let productList = products
    .slice(-4)
    .reverse()
    .map((product) => (
      <ProductPreview
        key={product["Images"]}
        alt={product["Name"]}
        imgSrc={
          product["Images"].split(": ")[
            product["Images"].split(": ").length - 1
          ]
        }
        brand={product["Brand"]}
        productName={product["Name"]}
        price={product["Retail Price"]}
      />
    ));
  return (
    <Container>
      <h2 className={styles.title}>{title}</h2>
      {productList}
    </Container>
  );
};

export default ProductCarousel;

/**
 * {
    "Product ID": 39,
    "Product Type": "P",
    "Code": "CAR_CAFC",
    "Name": "Carin Finishing Cream 100ml",
    "Brand": "Carin",
    "Description": "Who is it for?  All hair types Introduction  A hugely successful product in Ireland for the last twenty years, Carin Beeswax Finishing Cream is suitable for adding the final touch to both men and women’s hairstyles. This beeswax-based product is a great multitasker: you can use it for smoothing, polishing, defining curls, tame frizz and flyaway hair. The natural beeswax in Carin Finishing Cream creates a protective film around the hair, leaving it soft without being greasy – and a little goes a long way, so it’s also economical!  Multitasking product: use it for smoothing, defining curls, tame frizz and flyaways  Suitable for both men and women Contains natural beeswax and mineral oils for healthy, shiny hair Leaves hair soft without greasiness Economical: a little goes a long way  Directions for use  Apply to wet or dry hair in very small amounts Massage into hands and distribute through the hair as desired  BeautyFeatures Style Guide:  Add a touch of Carin Beeswax Finishing Cream to the ends of you hair to both repair and prevent split ends!  Key Information: Contains natural Beeswax",
    "Cost Price": 2.52,
    "Retail Price": 8.95,
    "Sale Price": 7.95,
    "Calculated Price": 7.95,
    "Fixed Shipping Price": 0,
    "Free Shipping": "N",
    "Warranty": "",
    "Weight": 0.2,
    "Width": 0,
    "Height": 0,
    "Depth": 0,
    "Allow Purchases": "Y",
    "Product Visible": "Y",
    "Product Availability": "",
    "Product Inventoried": "Y",
    "Stock Level": 41,
    "Low Stock Level": 0,
    "Date Added": "07/02/2012",
    "Date Modified": "21/01/2021",
    "Category Details": "Category Name: Hair, Category Path: Shop/Hair|Category Name: Styling , Category Path: Shop/Hair/Styling",
    "Images": "Product Image File: Carin-Finishing-Cream-100ml__94730.jpg, Product Image URL: http://www.beautyfeatures.ie/product_images/k/682/Carin-Finishing-Cream-100ml__94730.jpg",
    "Page Title": "Carin Finishing Cream 100ml : BeautyFeatures.ie",
    "META Keywords": "Carin Finishing Cream 100ml, Carin",
    "META Description": "Buy Carin Finishing Cream 100ml from BeautyFeatures.ie and enjoy next day delivery from our warehouse in Bray Co Wicklow. Order before 2pm for immediate dispatch.",
    "Product Condition": "New",
    "Product URL": "/carin-finishing-cream-100ml/",
    "Redirect Old URL?": "",
    "Product Tax Code": "",
    "Product Custom Fields": "Hair Type=All Types\";\"Cult Heroes=Cult Heroes"
  }
 */
