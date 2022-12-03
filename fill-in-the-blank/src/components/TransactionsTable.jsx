import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styles from "../styles/components/Table.module.css";

const TransactionsTable = (prop) =>  {
    const {rows, cols} = prop;
    return (
    <div className={`${styles.table} table`}>
        <DataGrid
        rows={rows}
        columns={cols}
        getRowId={(r) => r.TransactionID}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
    );
}

export default TransactionsTable;