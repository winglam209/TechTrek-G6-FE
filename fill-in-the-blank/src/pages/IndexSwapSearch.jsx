import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

import styles from "../styles/pages/IndexSwapSearch.module.css";
import IndexSwapSearchTable from "../components/IndexSwapSearchTable";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";


const IndexSwapSearch = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  const [moduleData, setModuleData] = useState([]);
  const { moduleCode, currentIndex, desiredIndex } = useParams();

  const searchQuery = query(
    collection(db, "Index-Swap"),
    where("Email", "!=", user.email),
    where("Module Code", "==", moduleCode),
    where("IndexObtained", "==", desiredIndex),
    where("IndexWanted", "==", currentIndex)
  );

  async function getIndexSwapData() {
    let result = [];
    const querySnapshot = await getDocs(searchQuery);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result);
  }

  useEffect(() => {
      getIndexSwapData();
  });

  return (
    <div className={styles.indexSwap}>
      <h1 className={styles.indexSwapHeader}>Index Swap</h1>

      <h2 className={styles.indexSwapHeader}>Your Requests</h2>
      <div className={styles.indexSwapBody}>
        <div className={styles.handleOverflow}>
          <IndexSwapSearchTable moduleData={moduleData} />
          </div>
      </div>

      <p />

      <h2 className={styles.indexSwapHeader}>Insert Create Request</h2>
      <div className={styles.indexSwapBody}>

      </div>

    </div>
  );
};

export default IndexSwapSearch;
