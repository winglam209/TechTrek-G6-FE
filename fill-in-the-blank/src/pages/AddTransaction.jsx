import React, { useState } from 'react';
import Textfield from "../components/Textfield";
import ActionButton from '../components/ActionButton';

import "../styles/pages/AddTransaction.module.css"

const AddTransaction = () => {

  const [receiverAccountId, setReceiverAccountId] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  const [comments, setComments] = useState("");

  return (
    <div className='add-transaction-container'>
      <h3>Add New Transaction</h3>
      <Textfield
        name="Receiver Account ID"
        labelText="Receiver Account ID"
        value={receiverAccountId}
        handleChange={(e) => setReceiverAccountId(e.target.value)}
      />
      <Textfield
        name="Transaction Amount"
        labelText="Transaction Amount"
        value={transactionAmount}
        handleChange={(e) => setTransactionAmount(e.target.value)}
      />
      <Textfield
        name="Comments"
        labelText="Comments"
        value={comments}
        handleChange={(e) => setComments(e.target.value)}
      />
      <ActionButton
        text="Create Transaction"
        onClick={() => { }}
      />
    </div>
  )
}

export default AddTransaction;