import React from "react";

import styles from "../styles/components/IndexSwapSearchTableItem.module.css";
import IndexSwapEmailReqModal from "./IndexSwapEmailReqModal";

const IndexSwapTableItem = React.forwardRef(
  ({ module }, ref) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <span ref={ref}>
        <div className={styles.moduleTableItemRow}>
          <p className={styles.moduleTableItemNumber}>
            {module["Module Code"]}
          </p>
          <p className={styles.moduleTableItemCurrentIndex}>{module["IndexObtained"]}</p>
          <p className={styles.moduleTableDesiredIndex}>{module["IndexWanted"]}</p>
          <p className={styles.moduleTableName}>{module["Name"]}</p>
          <button
            className={styles.moduleRequestButton}
            onClick={ () => {setModalShow(true); console.log("clicked: " + module["Module Code"]+";"+module["Name"])} }
          >
            Request
          </button>
        </div>
        <hr className={styles.itemHr} />
        <div>
            <IndexSwapEmailReqModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              module={module}
             />
        </div>
      </span>
    );
  }
);

export default IndexSwapTableItem;
