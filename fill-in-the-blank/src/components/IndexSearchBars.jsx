import React from "react";

import styles from "../styles/components/IndexSearchBars.module.css";
import IndexSwapSearchTable from "../components/IndexSwapSearchTable";

const IndexSearchBars = ({
  searchModuleCode,
  setSearchModuleCode,
  searchCurrentIndex,
  setSearchCurrentIndex,
  searchDesiredIndex,
  setSearchDesiredIndex,
  clickSearchButton
}) => {
  return (
    <div>
      <input
        maxLength="6"
        minLength="6"
        className={styles.searchBar}
        placeholder="Enter Module Code"
        value={searchModuleCode}
        onChange={(e) => setSearchModuleCode(e.target.value)}
      />
      <p />
      <input
        type="number"
        maxLength="99999"
        className={styles.searchBar}
        placeholder="Enter Current Index"
        value={searchCurrentIndex}
        onChange={(e) => setSearchCurrentIndex(e.target.value)}
        onKeyDown={ (evt) => (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())}
        onWheel={() => document.activeElement.blur()}
      />
      <p />
      <input
        type="number"
        maxLength="99999"
        className={styles.searchBar}
        placeholder="Enter Desired Index"
        value={searchDesiredIndex}
        onChange={(e) => setSearchDesiredIndex(e.target.value)}
        onKeyDown={ (evt) => (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())}
        onWheel={() => document.activeElement.blur()}
      />
      <p />
      <button
        className={styles.searchButton}
        onClick={() => clickSearchButton(searchModuleCode, searchCurrentIndex, searchDesiredIndex)}
      >
        Search
      </button>
    </div>
    );
  };

export default IndexSearchBars;
