import React from "react";
import styles from "./app.module.css";
import TopNav from "./components/top-nav/top-nav";
import SearchBar from "./components/search-bar/search-bar";
import HeroImage from "./components/hero-image/hero-image";
import ProductCarousel from "./components/product-carousel/product-carousel";
const App = () => {
  return (
    <div className={styles.app}>
      <TopNav />
      <SearchBar />
      <HeroImage />
      <ProductCarousel title="handpicked for you" productSelection="algo" />
      <ProductCarousel title="new products" productSelection="lates" />
      {/*
      <ShortCuts />
      <TopPicks />
      <NewReleases />
      <Footer />
      <BottomNav />
       */}
    </div>
  );
};

export default App;
