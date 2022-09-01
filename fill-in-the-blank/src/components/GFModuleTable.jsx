import React from "react";

import GFModuleTableItem from "./GFModuleTableItem";

import styles from "../styles/components/GFModuleTable.module.css";

const ModuleTable = ({ moduleData }) => {
  const onClickTableItem = (moduleCode, classIndex) => {
    console.log("clicked: " + moduleCode + " " + classIndex);
  };

  return (
    <div>
      {/* module header */}
      <div>
        <div className={styles.moduleTableTitleRow}>
          <p className={styles.moduleNumberTitle}>Module Number</p>

          <p className={styles.moduleClassIndexTitle}>Class Index</p>

          <p className={styles.moduleNameTitle}>Module Name</p>
        </div>
        <hr className={styles.tableHeaderHr} />
      </div>
      {/* module table content */}
      {moduleData.map((module) => {
        return module.Index.map((classIndex, index) => {
          return (
            <GFModuleTableItem
              module={module}
              key={index}
              classIndex={classIndex}
              onClick={() =>
                onClickTableItem(module["Module Code"], classIndex)
              }
            />
          );
        });
      })}
    </div>
  );
};

export default ModuleTable;
