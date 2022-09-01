import React from "react";

import styles from "../styles/components/SearchBar.module.css";

const SearchBar = ({
  searchModuleCode,
  setSearchModuleCode,
  clickSearchButton,
}) => {
  return (
    <div>
      <input
        className={styles.searchBar}
        placeholder="Enter Module Code"
        value={searchModuleCode}
        onChange={(e) => setSearchModuleCode(e.target.value)}
      />
      <button
        className={styles.searchButton}
        onClick={() => clickSearchButton()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
