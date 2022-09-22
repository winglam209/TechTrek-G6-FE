import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

import styles from "../styles/pages/IndexSwapSearch.module.css";
import IndexSwapSearchTable from "../components/IndexSwapSearchTable";
import IndexSwapCreateReqModal from "../components/IndexSwapCreateReqModal";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";


const IndexSwapSearch = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  const [moduleData, setModuleData] = useState([]);
  const { moduleCode, currentIndex, desiredIndex } = useParams();
  const [modalShow, setModalShow] = React.useState(false);
  const [noResults, setNoResults] = React.useState(false);

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

    setNoResults(false);
    
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result);

    if (result.length === 0){
      setNoResults(true)
    }
    return result;
  }


  async function checkExistingReqData() {
    let result = [];
    const searchQuery = query(
      collection(db, "Index-Swap"),
      where("Email", "==", user.email),
      where("Module Code", "==", moduleCode),
      where("IndexObtained", "==", currentIndex),
      where("IndexWanted", "==", desiredIndex)
    );
    const querySnapshot = await getDocs(searchQuery);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  }


  async function checkCreateReq(){
      let checkReqData = await getIndexSwapData();
      let checkExistData = await checkExistingReqData();
      if (checkReqData.length !== 0){
        window.alert("There is no need to create a new request. Please look under Search Results!")
      }
      else if(checkExistData.length !== 0){
        window.alert("You have already made this request. Please look under Your Requests!")
      }
      else{
        setModalShow(true);
      }
  }

  useEffect(() => {
      getIndexSwapData();
  });

  return (
    <div className={styles.indexSwap}>
      <h1 className={styles.indexSwapHeader}>Index Swap</h1>

      <h2 className={styles.indexSwapHeader}>Search Results</h2>
      <div className={styles.indexSwapBody}>
        <div className={styles.handleOverflow}>
          <IndexSwapSearchTable
            moduleData={moduleData}
            noResults={noResults}
            resetNoResults={() => setNoResults(false)}
          />
          </div>
      </div>

      <p />

      <h2 className={styles.indexSwapHeader}>Create Request</h2>
      <div className={styles.indexSwapBody}>
        <p />
        <button
          className={styles.createReqButton}
          onClick={() =>  { checkCreateReq(); console.log("clicked: " + moduleCode+";"+currentIndex+";"+desiredIndex)} }
        >
          Create Request
        </button>
      </div>
      <div>
          <IndexSwapCreateReqModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            moduleCode={moduleCode}
            currentIndex={currentIndex}
            desiredIndex={desiredIndex}
           />
      </div>
    </div>
  );
};

export default IndexSwapSearch;
