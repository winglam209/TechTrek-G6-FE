import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styles from "../styles/components/Table.module.css";

const cols = [
    { field: 'TransactionID', headerName: 'Transaction ID', width: 70 },
    { field: 'AccountID', headerName: 'Account ID', width: 130 },
    { field: 'ReceivingAccountID', headerName: 'Receiving Account ID', width: 130 },
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'TransactionAmount', headerName: 'Transaction Amount', width: 130 },
    { field: 'Comment', headerName: 'Comment', width: 130 },

//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
    {
        "TransactionID": 1,
        "AccountID": 621156213,
        "ReceivingAccountID": 339657462,
        "Date": "2022-11-08T04:00:00.000Z",
        "TransactionAmount": 500.00,
        "Comment": "Monthly Pocket Money"
    },
    {
        "TransactionID": 2,
        "AccountID": 958945214,
        "ReceivingAccountID": 621156213,
        "Date": "2022-11-08T04:00:00.000Z",
        "TransactionAmount": 8996.00,
        "Comment": "School Fees"
    },
];

const DataTable = () =>  {
    return (
    <div className={styles.table}>
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

export default DataTable;