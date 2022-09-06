import React from "react";
import { useNavigate } from "react-router-dom";

import IndexSwapTableItem from "./IndexSwapTableItem";
import styles from "../styles/components/IndexSwapTable.module.css";

const IndexSwapTable = ({ moduleData, updateTable }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* module header */}
      <div>
        <div className={styles.moduleTableTitleRow}>
          <p className={styles.moduleNumberTitle}>Module Code</p>
          <p className={styles.moduleCurrentIndexTitle}>Current Index</p>
          <p className={styles.moduleDesiredIndexTitle}>Desired Index</p>
        </div>
        <hr className={styles.tableHeaderHr} />

      </div>
      {/* module table content */}
      {moduleData.map((module) => {
        return (
          <IndexSwapTableItem
            module={module}
            key={module["Module Code"]}
            updateTable={updateTable}
            />
          );
        })
      }
    </div>
  );
};

export default IndexSwapTable;
