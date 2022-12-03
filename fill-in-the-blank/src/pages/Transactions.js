import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { StatsContainer } from "../components";
import TransactionsTable from "../components/TransactionsTable";
import Popup from "../components/Popup";
import Select from "../components/Select";

const Transactions = () => {
  const { showStats, isLoading, monthlyTransactions } = useAppContext();

  const { displayPopup, showPopup } = useAppContext();

  return (
    <>
      <Popup />

      <Wrapper>
        <button className="btn-hero" type="submit" onClick={displayPopup}>
          Add Transaction
        </button>
        <TransactionsTable />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Transactions;
