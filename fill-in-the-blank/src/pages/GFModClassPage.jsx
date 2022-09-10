import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "../styles/pages/GFModClassPage.module.css";
import ProfileCard from "../components/ProfileCard";

const GFModClassPage = () => {
  const { moduleCode, classIndex } = useParams();

  console.log(moduleCode, classIndex);

  //query module name
  const ModuleNameQuery = query(
    collection(db, "Module"),
    where("Module Code", "==", moduleCode.toUpperCase())
  );

  async function queryInfo() {
    let result = [];
    const querySnapshot = await getDocs(ModuleNameQuery);
    const res = await querySnapshot["_snapshot"]["docs"]["keyedMap"]["root"]["value"]["data"]["value"]["mapValue"]["fields"]["Module Name"]
    sessionStorage.setItem("moduleName",JSON.stringify(res))
    
    console.log(sessionStorage.getItem("moduleName"))
  }
  queryInfo()
  var moduleName = sessionStorage.getItem("moduleName");
  console.log(moduleName)
  moduleName = moduleName.slice(16,-2)

  return(     
    <div className={styles.groupFinder} style = {{marginLeft:65, marginTop: 32}}>
      <h1 className={styles.groupFinderTitle}>Group Finder</h1>
      <h2 className={styles.groupFinderModuleName}> { moduleName } </h2>
      <h5> Your Profile</h5>
      <ProfileCard></ProfileCard>
    </div>
    
  )
};

export default GFModClassPage;
