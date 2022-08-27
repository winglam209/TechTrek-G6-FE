import { useContext } from "react";

import { authContext } from "../context/authContext";

import styles from "../styles/components/Login.module.css";

const Login = () => {
  const { setAuth } = useContext(authContext);
  return (
    <div className={styles.loginCard}>
      <h1>Login with your NTU Account</h1>
      <div className={styles.loginArea}>
        <h2 className={styles.inputHeader}>Username</h2>
        <input className={styles.inputField} />
        <h2 className={styles.inputHeader}>Password</h2>
        <input className={styles.inputField} />
        <button className={styles.loginButton} onClick={() => setAuth(true)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
