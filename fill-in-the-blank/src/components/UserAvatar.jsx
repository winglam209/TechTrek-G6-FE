import { useState, useEffect } from "react";

import styles from "../styles/components/UserAvatar.module.css";

const UserAvatar = ({ userName }) => {
  const [userInitials, setUserInitials] = useState();

  function getUserInitials(userName) {
    let userInitials = "";

    userInitials = userName
      .split(" ")
      .map((n) => n[0])
      .join("");

    setUserInitials(userInitials);
  }

  useEffect(() => {
    getUserInitials(userName);
  }, [userName]);

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarLetters}>{userInitials}</div>
    </div>
  );
};

export default UserAvatar;
