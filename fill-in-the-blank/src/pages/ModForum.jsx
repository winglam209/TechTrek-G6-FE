import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import styles from "../styles/pages/ModForum.module.css";

const ModForum = () => {
  const [moduleData, setModuleData] = useState();
  const { moduleCode } = useParams();

  const queryMod = query(
    collection(db, "Module"),
    where("Module Code", "==", moduleCode)
  );

  async function getModuleData() {
    let result = [];
    const querySnapshot = await getDocs(queryMod);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result[0]);
  }

  useEffect(() => {
    getModuleData();
  }, [moduleCode]);

  console.log(moduleData);

  return (
    moduleData && (
      <div className={styles.modForum}>
        <h1 className={styles.modForumHeader}>Forum page</h1>

        <div className={styles.modForumBody}>
          <div className={styles.modForumDescriptionSection}>
            <h1 className={styles.modNameHeader}>
              {moduleData["Module Code"] + " - " + moduleData["Module Name"]}
            </h1>
            <p className={styles.modDescriptionP}>{moduleData.Description}</p>
          </div>

          <div className={styles.commentSection}>
            <h2>Comments</h2>

            {/* user comment input */}
            <div className={styles.commentInputBox}>
              <textarea className={styles.commentInputField}></textarea>
              <button>Post</button>
            </div>
            <hr className={styles.hr} />

            {/* user post */}
          </div>
        </div>
      </div>
    )
  );
};

export default ModForum;
