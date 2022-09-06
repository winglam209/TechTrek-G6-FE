import React from "react";

import styles from "../styles/components/IndexSwapTableItem.module.css";
import IndexSwapCancelModal from "./IndexSwapCancelModal";

const IndexSwapTableItem = React.forwardRef(
  ({ module, updateTable }, ref) => {
    const [modalShow, setModalShow] = React.useState(false);

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
            onClick={ () => {setModalShow(true); console.log("clicked: " + module["Module Code"]+";"+module["Name"])} }
          >
            Cancel
          </button>
        </div>
        <hr className={styles.itemHr} />
        <div>
            <IndexSwapCancelModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              module={module}
              updateTable={updateTable}
             />
        </div>
      </span>
    );
  }
);

export default IndexSwapTableItem;
