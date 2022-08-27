import { useContext } from "react";

import { authContext } from "../context/authContext";

import Login from "../components/Login";

import styles from "../styles/pages/Home.module.css";

const Home = () => {
  const { auth } = useContext(authContext);
  return <div className={styles.home}>{auth ? <></> : <Login />}</div>;
};

export default Home;
