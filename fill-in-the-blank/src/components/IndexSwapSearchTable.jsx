import React from "react";
import { useNavigate } from "react-router-dom";

import IndexSwapSearchTableItem from "./IndexSwapSearchTableItem";
import styles from "../styles/components/IndexSwapSearchTable.module.css";

const IndexSwapSearchTable = ({ moduleData, noResults, resetNoResults }) => {

function return_info(){
    if (noResults === false){
      // console.log("yes");
      return(
        moduleData.map((module) => {
          return (
            <IndexSwapSearchTableItem
              module={module}
              key={module.Email}
             />
            );
        })
      );
    }
    else if (noResults === true) {
      // console.log("no");
      return(
        <div
          style={
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          }
        >
          <p style={{fontWeight: "bold", fontSize: 20, color:"red"}}>
            <br />
            <br />
            &emsp;&emsp;&emsp;&emsp; No Results Found!
            <br /> Please Create a New Request Below!
          </p>
        </div>
      );
    }
  }

  return (
    <div>
      {/* module header */}
      <div>
        <div className={styles.moduleTableTitleRow}>
          <p className={styles.moduleNumberTitle}>Module Code</p>
          <p className={styles.moduleCurrentIndexTitle}>Current Index</p>
          <p className={styles.moduleDesiredIndexTitle}>Desired Index</p>
          <p className={styles.moduleName}>Name</p>
        </div>
        <hr className={styles.tableHeaderHr} />

      </div>
      {/* module table content */}
      {return_info()}
    </div>
  );
};

export default IndexSwapSearchTable;
