import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/components/Table.module.css";

const DataTable = (prop) =>  {
    const {rows, cols} = prop;
    const [selectionModel, setSelectionModel] = React.useState([]);
    const navigate = useNavigate();

    return (
    <div className={`${styles.table} table`}>
        <DataGrid
        rows={rows}
        columns={cols}
        getRowId={(r) => r.AccountID}
        pageSize={10}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(() => {
                navigate(`/transactions/${newSelectionModel}`)
                return newSelectionModel;
            });
          }}
        />
    </div>
    );
}

export default DataTable;