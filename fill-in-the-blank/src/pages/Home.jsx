import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseAuth } from "../firebase";

import Login from "../components/Login";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  return <div className={styles.home}>{user ? <></> : <Login />}</div>;
};

export default Home;
