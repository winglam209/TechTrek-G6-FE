import React from "react";

import styles from "../styles/components/IndexSwapTableItem.module.css";

const IndexSwapTableItem = React.forwardRef(
  ({ module }, ref) => {
    return (
      <span ref={ref}>
        <div className={styles.moduleTableItemRow}>
          <p className={styles.moduleTableItemNumber}>
            {module["Module Code"]}
          </p>
          <p className={styles.moduleTableItemCurrentIndex}>{module["IndexObtained"]}</p>
          <p className={styles.moduleTableDesiredIndex}>{module["IndexWanted"]}</p>
          <button
            className={styles.moduleCancelButton}
            onClick={ () => {console.log("clicked: " + module["Module Code"]+";"+module["Name"])} }
          >
            Cancel
          </button>
        </div>
        <hr className={styles.itemHr} />
      </span>
    );
  }
);

export default IndexSwapTableItem;
