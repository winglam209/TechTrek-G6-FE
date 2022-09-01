import React from "react";

import ForumModuleTableItem from "./ForumModuleTableItem";

import styles from "../styles/components/ForumModuleTable.module.css";

const ForumModuleTable = ({ moduleData }) => {
  const onClickTableItem = (moduleCode) => {
    console.log("clicked: " + moduleCode);
  };

  return (
    <div>
      {/* module header */}
      <div>
        <div className={styles.moduleTableTitleRow}>
          <p className={styles.moduleNumberTitle}>Module Code</p>
          <p className={styles.moduleNameTitle}>Module Name</p>
        </div>
        <hr className={styles.tableHeaderHr} />
      </div>
      {/* module table content */}
      {moduleData.map((module, index) => {
        return (
          <ForumModuleTableItem
            key={index}
            module={module}
            onClick={() => onClickTableItem(module["Module Code"])}
          />
        );
      })}
    </div>
  );
};

export default ForumModuleTable;
