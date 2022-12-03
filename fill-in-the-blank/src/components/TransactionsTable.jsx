import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styles from "../styles/components/Table.module.css";

const TransactionsTable = () =>  {
    const cols = [
        { field: 'TransactionID', headerName: 'Transaction ID', width: 200 },
        { field: 'AccountID', headerName: 'Account ID', width: 200 },
        { field: 'ReceivingAccountID', headerName: 'Receiving Account ID', width: 200 },
        { field: 'Date', headerName: 'Date', width: 200 },
        { field: 'TransactionAmount', headerName: 'Transaction Amount', width: 200 },
        { field: 'Comment', headerName: 'Comment', width: 200 },
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
          {
            "TransactionID": 3,
            "AccountID": 958945215,
            "ReceivingAccountID": 621156210,
            "Date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 9996.00,
            "Comment": "Misc. Fees"
        },
      ];

    // const {rows, cols} = prop;
    const [selectionModel, setSelectionModel] = React.useState([]);
    console.log(selectionModel);

    return (
    <div className={`${styles.table} table`}>
        <DataGrid
        rows={rows}
        columns={cols}
        getRowId={(r) => r.TransactionID}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel)
          }}
        />
        <button className="btn btn-block" type="submit" style={{width: "100px"}}>
          Delete
        </button>
    </div>
    );
}

export default TransactionsTable;