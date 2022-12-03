import React, { useState, useEffect } from "react";
import axios from 'axios';
import { firebaseAuth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import styles from "../styles/components/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tokenAPI = axios.create({
    baseURL:"http://127.0.0.1:4000",
    headers: {
        "Content-Type": "application/json",
    },
});

let handleSignIn = async (e) => {
  const payload = JSON.stringify({"username": e.username , "password": e.password})
  try {
      let response = await tokenAPI.post("/login/",  payload)
      console.log(response)
      if (response.status === 200) {
          console.log(response.data.accessToken)
          // setAuthToken(response.data.accessToken)
          // setUser(jwt_decode(response.data.accessToken))
          // localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
          // navigate("/")
      }
  } catch {
      alert("Wrong password/user combination")
  }
}

  return (
    <div className={styles.loginCard}>
      <h1 className={styles.loginCardHeader}>Login with your DigiBank Account</h1>
      <div className={styles.loginArea}>
        <h2 className={styles.inputHeader}>Email</h2>
        <input
          className={styles.inputField}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2 className={styles.inputHeader}>Password</h2>
        <input
          className={styles.inputField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={handleSignIn}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
