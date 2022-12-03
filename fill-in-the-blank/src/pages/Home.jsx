import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseAuth } from "../firebase";

import Login from "../components/Login";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  return (
    <div>
      {user ? (
        <div className={styles.home}>
          <h1>Welcome to Banking Application!</h1>
          <h2>A Platform Made For You</h2>
        </div>
      ) : (
        <div className={styles.home}>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;
