import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { StatsContainer } from "../components";

const Account = () => {
  const { showStats, isLoading, monthlyTransactions } = useAppContext();
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
