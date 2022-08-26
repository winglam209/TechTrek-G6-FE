import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginCard}>
      <h1>Login with your NTU Account</h1>
      <div className={styles.loginArea}>
        <h2 className={styles.inputHeader}>Username</h2>
        <input className={styles.inputField} />
        <h2 className={styles.inputHeader}>Password</h2>
        <input className={styles.inputField} />
        <button className={styles.loginButton}>Login</button>
      </div>
    </div>
  );
};

export default Login;
