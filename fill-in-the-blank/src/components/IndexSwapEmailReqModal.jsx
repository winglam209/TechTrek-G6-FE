import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import styles from "../styles/components/IndexSwapCancelModal.module.css"; css not working somehow
import "bootstrap/dist/css/bootstrap.min.css"

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";

import { useEffect, useState } from "react";


const IndexSwapEmailReqModal = ( props ) => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const data = props.module
  const show = props.show
  const onHide = props.onHide

  const [mailState, setMailState] = useState({
      subject: "Message regarding index swap from: "+user.email+" to "+data["Email"],
      sendEmail: user.email,
      recvEmail: data["Email"],
      message: "Hi, I would like to swap index with you for "+data["Module Code"]+". I have "+data["IndexWanted"]+" and would like to trade it for "+data["IndexObtained"]+". Thanks."
   });


   const submitRequest = async (e) => {
    console.log({ mailState });
    const response = await fetch("http://localhost:3001/sendRequest", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton={false}
        style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }
      >
        <div>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Are you sure you want to request for swap?
          <p style={{fontWeight: "bold"}}>
            An E-mail containing the request and your E-mail address will be sent to the requestee.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer
        style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }
      >
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        &emsp;&emsp;
        <Button variant="primary" onClick={()=>{submitRequest(); onHide()}}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default IndexSwapEmailReqModal;
