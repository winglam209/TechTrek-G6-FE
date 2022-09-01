import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

import GFModuleTable from "../components/GFModuleTable";
import SearchBar from "../components/SearchBar";

import styles from "../styles/pages/GroupFinder.module.css";

const GroupFinder = () => {
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

  return (
    <div className={styles.groupFinder}>
      <h1 className={styles.groupFinderHeader}>Group Finder</h1>

      <div className={styles.groupFinderBody}>
        <SearchBar />
        <GFModuleTable moduleData={moduleData} />
      </div>
    </div>
  );
};

export default GroupFinder;
