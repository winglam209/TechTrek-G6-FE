import React from "react";
import { useNavigate } from "react-router-dom";

import IndexSwapSearchTableItem from "./IndexSwapSearchTableItem";
import styles from "../styles/components/IndexSwapSearchTable.module.css";

const IndexSwapSearchTable = ({ moduleData }) => {

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
      {moduleData.map((module) => {
        return (
          <IndexSwapSearchTableItem
            module={module}
            key={module.Email}
           />
          );
        })
      }
    </div>
  );
};

export default IndexSwapSearchTable;
