import React from "react";
import styles from "./search-bar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" />
    </div>
  );
};

export default SearchBar;
