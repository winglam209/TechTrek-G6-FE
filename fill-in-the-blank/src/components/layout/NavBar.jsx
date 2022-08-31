import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase";

import styles from "../../styles/components/layout/NavBar.module.css";

const NavBar = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  const logout = () => {
    signOut(firebaseAuth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("Signed out failed: ", error);
      });
  };

  return (
    <div className={styles.navBar}>
      <header className={styles.websiteTitle}>NTU WebApp</header>
      {user ? (
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

      {user ? (
        <button className={styles.loginButton} onClick={logout}>
          Log Out
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
