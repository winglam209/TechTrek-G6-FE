import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

import styles from "../styles/pages/IndexSwap.module.css";
import IndexSearchBars from "../components/IndexSearchBars";
import IndexSwapTable from "../components/IndexSwapTable";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";


const IndexSwap = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  const [moduleData, setModuleData] = useState([]);
  const [searchModuleCode, setSearchModuleCode] = useState("");
  const [searchCurrentIndex, setSearchCurrentIndex] = useState("");
  const [searchDesiredIndex, setSearchDesiredIndex] = useState("");
  const [searchState, setSearchState] = useState(false);

  const navigate = useNavigate();

  const searchQuery = query(
    collection(db, "Index-Swap"),
    where("Email", "==", user.email)
  );

  async function getIndexSwapData() {
    let result = [];
    const querySnapshot = await getDocs(searchQuery);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result);
  };

  useEffect(() => {
    getIndexSwapData();
  }, [searchState]);

  const clickSearchButton = (searchModuleCode,searchCurrentIndex,searchDesiredIndex) => {
    setSearchState(!searchState);
    async function validateCourseCode() {
      let result = [];
      const courseCodeSearchQuery = query(
        collection(db, "Module"),
        where("Module Code", "==", searchModuleCode)
      );
      const querySnapshot = await getDocs(courseCodeSearchQuery);

      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      return result.items;
    };

    async function validateCurrentIndexNum() {
      let result = [];
      const currentIndexNumSearchQuery = query(
        collection(db, "Module"),
        where("Module Code", "==", searchModuleCode),
        where("Index", "array-contains", searchCurrentIndex)
      );
      const querySnapshot = await getDocs(currentIndexNumSearchQuery);

      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      return result.items;
    };

    async function validateDesiredIndexNum() {
      let result = [];
      const desiredIndexNumSearchQuery = query(
        collection(db, "Module"),
        where("Module Code", "==", searchModuleCode),
        where("Index", "array-contains", searchDesiredIndex)
      );
      const querySnapshot = await getDocs(desiredIndexNumSearchQuery);

      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      return result.items;
    };

    if (searchModuleCode === "" || searchCurrentIndex==="" || searchDesiredIndex===""){
        window.alert("Please fill up all search fields!");
    }
    else if (validateCourseCode.length === 0){
        window.alert("Invalid Course Code!" +validateCourseCode.length+"  1")
    }
    else if (validateCurrentIndexNum.length === 0){
        window.alert("Invalid Index Number!")
    }
    else if (validateDesiredIndexNum.length === 0){
        window.alert("Invalid Index Number!")
    }
    else if (searchCurrentIndex===searchDesiredIndex){
        window.alert("You have already obtained the index that you want!")
    }
    else {
        navigate(`/indexSwap/${searchModuleCode}/${searchCurrentIndex}/${searchDesiredIndex}`);
    }
    console.log(searchModuleCode+";"+searchCurrentIndex+";"+searchDesiredIndex);
  };

  return (
    <div className={styles.indexSwap}>
      <h1 className={styles.indexSwapHeader}>Index Swap</h1>

      <h2 className={styles.indexSwapHeader}>Your Requests</h2>
      <div className={styles.indexSwapBody}>
        <div className={styles.handleOverflow}>
          <IndexSwapTable moduleData={moduleData} />
          </div>
      </div>

      <p />

      <h2 className={styles.indexSwapHeader}>Search For Peer Requests</h2>
      <div className={styles.indexSwapBody}>
        <IndexSearchBars
          searchModuleCode={searchModuleCode.toUpperCase()}
          setSearchModuleCode={setSearchModuleCode}
          searchCurrentIndex={searchCurrentIndex}
          setSearchCurrentIndex={setSearchCurrentIndex}
          searchDesiredIndex={searchDesiredIndex}
          setSearchDesiredIndex={setSearchDesiredIndex}
          clickSearchButton={clickSearchButton}
        />
      </div>

    </div>
  );
};

export default IndexSwap;
