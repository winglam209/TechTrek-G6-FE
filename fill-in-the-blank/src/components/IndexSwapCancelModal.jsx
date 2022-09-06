import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css"

import { db } from "../firebase";
import { collection, doc, getDocs, where, query, deleteDoc } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";

const IndexSwapCancelModal = ( props ) => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const data = props.module
  const show = props.show
  const onHide = props.onHide
  const updateTable=props.updateTable

  async function deleteData() {
    let result = [];
    const deleteQuery = query(
      collection(db, "Index-Swap"),
      where("Email", "==", user.email),
      where("Module Code", "==", data["Module Code"]),
      where("IndexObtained", "==", data["IndexObtained"]),
      where("IndexWanted", "==", data["IndexWanted"])
    );
    const querySnapshot = await getDocs(deleteQuery);

    querySnapshot.forEach((ref) => {
      result.push(ref.data());
      console.log(result);
      console.log(ref.id);
      deleteDoc(doc(db, "Index-Swap", ref.id));
    });

    updateTable();
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
          The selected Swap Index Request will be deleted.
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
        <Button variant="primary" onClick={()=>{deleteData(); onHide()}}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IndexSwapCancelModal;
