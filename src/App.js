import React from "react";
import styles from "./app.module.css";
import TopNav from "./components/top-nav/top-nav";
import SearchBar from "./components/search-bar/search-bar";
import HeroImage from "./components/hero-image/hero-image";
import ProductCarousel from "./components/product-carousel/product-carousel";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div className={styles.app}>
      <TopNav />
      <SearchBar />
      <HeroImage />
      <ProductCarousel
        title="handpicked for you"
        productSelectionLogic="algo"
      />
      <ProductCarousel title="new products" productSelectionLogic="latest" />
      <ProductCarousel title="top products" productSelectionLogic="top" />
      <Footer />
      {/*
      
      <BottomNav />
       */}
    </div>
  );
};

export default App;
