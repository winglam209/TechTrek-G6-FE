import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

import SearchBar from "../components/SearchBar";

import styles from "../styles/pages/Forum.module.css";
import ForumModuleTable from "../components/ForumModuleTable";

const Forum = () => {
  const q = query(collection(db, "Module"));
  const [moduleData, setModuleData] = useState([]);

  async function getModuleData() {
    let result = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result);
  }

  useEffect(() => {
    getModuleData();
  }, []);

  // console.log(moduleData);
  return (
    <div className={styles.forum}>
      <h1 className={styles.forumHeader}>Forum page</h1>

      <div className={styles.forumBody}>
        <SearchBar />
        <ForumModuleTable moduleData={moduleData} />
      </div>
    </div>
  );
};

export default Forum;
