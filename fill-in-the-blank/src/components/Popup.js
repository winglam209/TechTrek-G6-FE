import styled from "styled-components";
import { useState } from "react";
import Textfield from "./Textfield";
import Select from "./Select";
import Calendar from "./Calendar";
import { useAppContext } from "../context/appContext";

const Popup = ({ onSubmit }) => {
  const {
    clearPopup,
    transactionType,
    transactionTypeOptions,
    handleChange,
    transactionDate,
    showAlert,
    description,
    value,
    showPopup
  } = useAppContext();


  const handleTransactionInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };



  return (
    <Wrapper>
        <div className={`popup-wrapper ${showPopup}`}>
        <div className="center">
          <form className="form" onSubmit={onSubmit}>
            <>
              {/* <Select
                labelText="Transaction Type"
                name="transactionType"
                value={transactionType}
                handleChange={handleTransactionInput}
                list={transactionTypeOptions}
              /> */}
              <Textfield
                name="Receiving Account"
                labelText="description"
                value={description}
                handleChange={handleTransactionInput}
              />
              <Calendar label="Scheduled Transactions" />
              <Textfield
                name="Transaction Amount"
                labelText="value"
                value={value}
                handleChange={handleTransactionInput}
              />
              <Textfield
                name="Comments"
                labelText="value"
                value={value}
                handleChange={handleTransactionInput}
              />
            </>
            <button
              type="submit"
              className="btn btn-block"
              onClick={clearPopup}
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  .display {
    padding-left: 2rem;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  .popup {
    padding-left: 1.5rem;
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  .popup-wrapper {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 500;
  }

  .show {
    display: block;
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Popup;
