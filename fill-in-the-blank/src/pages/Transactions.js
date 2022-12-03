import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { StatsContainer } from "../components";
import TransactionsTable from "../components/TransactionsTable";
import Popup from "../components/Popup";
import Select from "../components/Select";

const Transactions = () => {
  const { showStats, isLoading, monthlyTransactions } = useAppContext();

  const {
    displayPopup,
    showPopup,
  } = useAppContext();

  const cols = [
    { field: "TransactionID", headerName: "Transaction ID", width: 200 },
    { field: "AccountID", headerName: "Account ID", width: 200 },
    {
      field: "ReceivingAccountID",
      headerName: "Receiving Account ID",
      width: 200,
    },
    { field: "Date", headerName: "Date", width: 200 },
    {
      field: "TransactionAmount",
      headerName: "Transaction Amount",
      width: 200,
    },
    { field: "Comment", headerName: "Comment", width: 200 },
  ];

  const rows = [
    {
      TransactionID: 1,
      AccountID: 621156213,
      ReceivingAccountID: 339657462,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 500.0,
      Comment: "Monthly Pocket Money",
    },
    {
      TransactionID: 2,
      AccountID: 958945214,
      ReceivingAccountID: 621156213,
      Date: "2022-11-08T04:00:00.000Z",
      TransactionAmount: 8996.0,
      Comment: "School Fees",
    },
  ];

  return (
    <>
      <Popup />
      <button className="btn-hero" type="submit" onClick={displayPopup}>
        Add Transaction
      </button>
      <Wrapper>
        {/* <section className="section-center">
          <h3>YOUR ACCOUNTS</h3>
          <p>Let's work together to keep your finances in check!</p>
        </section>
        <StatsContainer /> */}
        <TransactionsTable rows={rows} cols={cols} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 3rem;
  .chart-overview {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 2rem;
  }
`;

export default Transactions;
