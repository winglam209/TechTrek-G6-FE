import React from "react";

import styles from "../styles/components/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input className={styles.searchBar} placeholder="Enter Module Number" />
      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
