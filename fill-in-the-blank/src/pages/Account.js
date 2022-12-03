import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { StatsContainer } from "../components";
import {data} from '../data/BankAccount'

const Account = () => {
  const { showStats, isLoading, monthlyTransactions } = useAppContext();
  console.log(data)
  let user = 1;
  let account = data.filter((account) => {return account.id === user})
  console.log(account)
  //   useEffect(() => {
  //     showStats();
  //   }, []);

  // if (isLoading) {
  //   return <Loading center />;
  // }

  return (
    <>
      <Wrapper>
        <section className="section-center">
          <h3>YOUR ACCOUNTS</h3>
          <p>Let's work together to keep your finances in check!</p>
        </section>
        <StatsContainer />
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

export default Account;
