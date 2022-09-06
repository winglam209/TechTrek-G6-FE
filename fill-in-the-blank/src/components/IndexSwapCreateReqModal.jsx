import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css"

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";

const IndexSwapCreateReqModal = ( props ) => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const moduleCode = props.moduleCode
  const currentIndex = props.currentIndex
  const desiredIndex = props.desiredIndex
  const show = props.show
  const onHide = props.onHide

  async function addData() {
    const docRef = await addDoc(collection(db, "Index-Swap"), {
      "Email": user.email,
      "IndexObtained": currentIndex,
      "IndexWanted": desiredIndex,
      "Module Code": moduleCode
    });
    window.alert("Creation of request is successful!");
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
          The searched Swap Index Request will be added.
          <p style={{fontWeight: "bold"}}>
            &emsp;&emsp;&emsp;&emsp;&emsp; Are you sure to proceed?
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
        <Button variant="primary" onClick={()=>{addData(); onHide()}}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IndexSwapCreateReqModal;
