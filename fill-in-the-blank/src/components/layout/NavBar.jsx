import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarButtonsRow}>
        <header className={styles.websiteTitle}>NTU WebApp</header>
        <Link className={styles.navBarLink} to="/indexSwap">
          Index Swap
        </Link>
        <Link className={styles.navBarLink} to="/forum">
          Forum
        </Link>
        <Link className={styles.navBarLink} to="/groupFinder">
          Group Finder
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
