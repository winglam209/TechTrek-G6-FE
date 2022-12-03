import { useState } from "react";
import Textfield from "../components/Textfield";
import ActionButton from "./ActionButton";
import styled from "styled-components";

import styles from "../styles/components/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // signInWithEmailAndPassword(firebaseAuth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log("Signed in as: ", user);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };

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

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  p {
    color: var(--grey-500);
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .form-row {
    /* padding-left:35%; */
    margin-bottom: 1.38rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Login;
