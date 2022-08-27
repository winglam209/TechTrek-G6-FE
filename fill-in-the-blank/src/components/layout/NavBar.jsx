import { useContext } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../../context/authContext";

import styles from "../../styles/components/layout/NavBar.module.css";

const NavBar = () => {
  const { auth, setAuth } = useContext(authContext);
  console.log(auth);
  return (
    <div className={styles.navBar}>
      <header className={styles.websiteTitle}>NTU WebApp</header>
      {auth ? (
        <div className={styles.navBarLinksRow}>
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
      ) : (
        <div className={styles.navBarLinksRow}></div>
      )}

      {auth ? (
        <button className={styles.loginButton} onClick={() => setAuth(false)}>
          Log Out
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
