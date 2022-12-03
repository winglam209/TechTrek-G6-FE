import { useAuthState } from "react-firebase-hooks/auth";
import ActionButton from "../components/ActionButton";

import { firebaseAuth } from "../firebase";

import Login from "../components/Login";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  return (
    <div>
      {user ? (
        <div className={styles.home}>
          <h1>Welcome to NTYou!</h1>
          <h2>A Platform Made For You</h2>
          <ActionButton
            colour="primary"
            text="Delete"
            onClick={() => console.log('testing')}
          />
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
