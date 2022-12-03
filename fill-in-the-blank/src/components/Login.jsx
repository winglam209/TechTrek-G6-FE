import { useState } from "react";
import Textfield from "../components/Textfield";
import ActionButton from "./ActionButton";

import { loginAPI, addUserToLocalStorage } from "../services/auth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import styles from "../styles/components/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const tokenAPI = axios.create({
    baseURL:"http://127.0.0.1:4000",
    headers: {
        "Content-Type": "application/json",
    },
  });

  let handleSignIn = async () => {
    const token = await loginAPI(email, password);
    if (token) {
      addUserToLocalStorage(token);
      navigate("/dashboard");
    }
  }

  console.log("email:", email);
  console.log("password:", password);

  return (
    <div className={styles.loginCard}>
      <h1 className={styles.loginCardHeader}>Login to your DBS account</h1>
      <div className={styles.loginArea}>
        <Textfield
          name="Email"
          labelText="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Textfield
          name="Password"
          labelText="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <ActionButton text="Login" colour="primary" onClick={handleSignIn} />
      </div>
    </div>
  );
};

export default Login;
