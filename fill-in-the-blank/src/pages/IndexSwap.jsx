import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

import styles from "../styles/pages/IndexSwap.module.css";

const IndexSwap = () => {
  const q = query(
    collection(db, "Index-Swap"),
    where("Email", "==", "xyz@gmail.com")
  );

  async function getData() {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }
  getData();

  return (
    <div className={styles.indexSwap}>
      <h1>Index swap page</h1>
    </div>
  );
};

export default IndexSwap;
