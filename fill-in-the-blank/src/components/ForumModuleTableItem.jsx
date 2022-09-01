import React from "react";

import styles from "../styles/components/ForumModuleTableItem.module.css";

const ForumModuleTableItem = React.forwardRef(({ module, onClick }, ref) => {
  return (
    <span onClick={onClick} ref={ref}>
      <div className={styles.moduleTableItemRow}>
        <p className={styles.moduleTableItemNumber}>{module["Module Code"]}</p>
        <p className={styles.moduleTableItemeName}>{module["Module Name"]}</p>
      </div>
      <hr className={styles.itemHr} />
    </span>
  );
});

export default ForumModuleTableItem;
