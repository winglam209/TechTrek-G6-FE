import React from "react";
import Login from "../components/Login";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Login />
    </div>
  );
};

export default Home;
