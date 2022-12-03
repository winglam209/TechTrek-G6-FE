import React, { useState } from "react";
import Textfield from "../components/Textfield";
import styled from "styled-components";

const users = [
  {
    UserID: 1,
    Username: "ExecutiveDBS",
    Password: "DBSBestBank2022",
    Firstname: "Tom",
    Lastname: "Lim",
    Email: "TomLim@easymail.com",
    Address: "Block 123 Serangoon Garden #10-129",
    OptIntoPhyStatements: 0,
  },
  {
    UserID: 2,
    Username: "SeederDBS",
    Password: "iWant2JoinDBS",
    Firstname: "Mary",
    Lastname: "Tan",
    Email: "MaryTan@simplemail.com",
    Address: "Block 234 Changi Business Park #50-123",
    OptIntoPhyStatements: 1,
  },
  {
    UserID: 3,
    Username: "AcerDBS",
    Password: "Top5Seeder",
    Firstname: "Gary",
    Lastname: "Ong",
    Email: "GaryOng@easymail.com",
    Address: "Block 345 Jurong Business Park #25-214",
    OptIntoPhyStatements: 0,
  },
  {
    UserID: 4,
    Username: "AssociateDBS",
    Password: "Whatis2Years",
    Firstname: "Harry",
    Lastname: "Goh",
    Email: "HarryGoh@bestbank.com",
    Address: "Block 456 One North Fusionopolis #34-743",
    OptIntoPhyStatements: 0,
  },
  {
    UserID: 5,
    Username: "PresidentDBS",
    Password: "Multiplier3.5%",
    Firstname: "Cheryl",
    Lastname: "Chia",
    Email: "CherylChia@bestbank.com",
    Address: "Block 567 Marina Bay Sands #63-743",
    OptIntoPhyStatements: 1,
  },
];

const Profile = () => {
  const [newEmail, setNewEmail] = useState(users[0].Email);
  const [newAddress, setNewAddress] = useState(users[0].Address);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const updateUser = (e) => {
    e.preventDefault();
    users[0] = {
      ...users[0],
      newEmail,
      newAddress,
    };
    setUpdateSuccess(true);
  };

  return (
    <>
      <Wrapper>
        <form className="form">
          <h3>your contact details</h3>
          <div className="form-center">
            <Textfield
              name="Username"
              labelText="username"
              value={users[0].Username}
              disabled="true"
              // handleChange={handleChange}
            />
            <Textfield
              name="First Name"
              labelText="firstName"
              value={users[0].Firstname}
              disabled="true"
              // handleChange={handleChange}
            />
            <Textfield
              name="Last Name"
              labelText="lastName"
              value={users[0].Lastname}
              disabled='true'
              // handleChange={handleChange}
            />
            <Textfield
              name="Email Address"
              labelText="email"
              value={newEmail}
              handleChange={(e) => setNewEmail(e.target.value)}
            />
            <Textfield
              name="Home Address"
              labelText="address"
              value={newAddress}
              handleChange={(e) => setNewAddress(e.target.value)}
            />
          </div>
          <button className="btn btn-block" onClick={(e) => updateUser(e)}>
            Update
          </button>
          {updateSuccess && <p style={{ color: "green" }}>Update Success!</p>}
        </form>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }

  p {
    color: var(--grey-500);
  }

  .btn {
    width: 50%;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }

  .form-row {
    /* padding-left:35%; */
    margin-bottom: 1.38rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Profile;
