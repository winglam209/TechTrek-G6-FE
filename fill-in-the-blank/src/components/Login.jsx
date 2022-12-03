import { useState } from "react";
import Textfield from "../components/Textfield";
import ActionButton from "./ActionButton";

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

export default Login;
