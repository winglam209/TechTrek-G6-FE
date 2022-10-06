import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import styles from "../styles/pages/GFModClassPage.module.css";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import UserAvatar from "../components/UserAvatar";
import {Modal} from 'react-bootstrap';  
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase";



const GFModClassPage = () => {
  const { moduleCode, classIndex } = useParams();
  const [ moduleNameHolder, setModuleName] = useState("");
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");

  async function addProfile() {
    const docRef = await addDoc(collection(db, "Group-Finder"), {
      "Email": email,
      "Index": classIndex,
      "Intro": intro,
      "Module Code": moduleCode,
      "Name" : name
    });
    window.alert("Creation of profile is successful!");
  };

  console.log(moduleCode, classIndex);

  //query module name
  const ModuleNameQuery = query(
    collection(db, "Module"),
    where("Module Code", "==", moduleCode.toUpperCase())
  );

  async function queryInfo() {
    const querySnapshot = await getDocs(ModuleNameQuery);
    const res = await querySnapshot["_snapshot"]["docs"]["keyedMap"]["root"]["value"]["data"]["value"]["mapValue"]["fields"]["Module Name"]
    //sessionStorage.setItem("moduleName",JSON.stringify(res))
    setModuleName(res);
    //console.log(sessionStorage.getItem("moduleName"))
  }

  const searchQuery = query(
    collection(db, "Group-Finder"),
    where("Email", "==", user.email)
  );

  async function getSearchModuleData() {
    let result = [];
    const querySnapshot = await getDocs(searchQuery);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setUserData(result);
  }

  console.log(userData)

  useEffect(() => {
    queryInfo();
    getSearchModuleData();
  }, [])

  //var moduleName = sessionStorage.getItem("moduleName");
  var moduleName = JSON.stringify(moduleNameHolder)
  console.log(moduleName)
  moduleName = moduleName.slice(16,-2)

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const CreateProfile = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCreate = () => setShow(false);

  

  return(     
    <div className={styles.groupFinder} style = {{marginLeft:65, marginTop: 32}}>
      <h1 className={styles.groupFinderTitle}>Group Finder</h1>
      <h2 className={styles.groupFinderModuleName}> { moduleName } </h2>
      <h5> Your Profile</h5>

          {userData.length === 0 ? (
                  <Card variant="outlined" style = {{width: '20rem' }}>
                  <AspectRatio minHeight="50px" maxHeight="1px" sx={{ my: 2 }}>
                    {/* <img
                      src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
                      alt=""
                    /> */}
                  <UserAvatar
                    userName={"Empty"}
                  />
                  </AspectRatio>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Typography fontSize="3g" fontWeight="lg" level="h2" sx={{ alignSelf: 'flex-start' }}>
                      Empty Profile
                    </Typography>
                    <Typography level="body2">Create your Profile</Typography>
                  </Box>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                  >
                  </IconButton>
            
                  <Box sx={{ display: 'flex' }}>
                    <Button
                      variant="outlined"
                      size="sm"
                      color="primary"
                      aria-label="Explore Bahamas Islands"
                      sx={{ ml: 'auto', fontWeight: 600 }}
                      onClick={CreateProfile}
                    >
                      Create
                    </Button>
                  </Box>
                  <Modal show={show}>
                    <Modal.Header handleShow>
                      <Modal.Title>Create Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                      <label>
                        Name:  
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>
                      <label>
                        Email:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" onChange={(e)=> setEmail(e.target.value)}/>
                      </label>
                      <label>
                        Short Intro:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="intro" onChange={(e)=> setIntro(e.target.value)}/>
                      </label>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      <Button variant="outlined" onClick={()=>{addProfile()}}>Create</Button>
                    </Modal.Footer>
                  </Modal>
                </Card>
          ) : (
            <Card variant="outlined" style = {{width: '20rem' }}>
            <AspectRatio minHeight="50px" maxHeight="1px" sx={{ my: 2 }}>
              {/* <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
                alt=""
              /> */}
            <UserAvatar
              userName={"Clementine Trinetta"}
            />
            </AspectRatio>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography fontSize="3g" fontWeight="lg" level="h2" sx={{ alignSelf: 'flex-start' }}>
                Clementine Trinetta
              </Typography>
              <Typography level="body2">Looking for Group</Typography>
            </Box>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
            >
            </IconButton>
      
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography level="body3">Clementine_Trinetta@gmail.com</Typography>
              </div>
              <Button
                variant="outlined"
                size="sm"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', fontWeight: 600 }}
              >
                Group
              </Button>
            </Box>
          </Card>
          )
          }


      <h5> Peers Profile</h5>
      <div style={{display: "flex", flexWrap:"wrap"}}>
      <Card variant="outlined" style = {{width: '20rem' }}>
      <AspectRatio minHeight="50px" maxHeight="1px" sx={{ my: 2 }}>
        {/* <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
          alt=""
        /> */}
      <UserAvatar
        userName={"Clementine Trinetta"}
      />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography fontSize="3g" fontWeight="lg" level="h2" sx={{ alignSelf: 'flex-start' }}>
          Clementine Trinetta
        </Typography>
        <Typography level="body2">Looking for Group</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
      </IconButton>

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Clementine_Trinetta@gmail.com</Typography>
        </div>
        <Button
          variant="outlined"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Group
        </Button>
      </Box>
    </Card>
    <span>&nbsp;&nbsp;</span>
    <Card variant="outlined" style = {{width: '20rem' }}>
      <AspectRatio minHeight="50px" maxHeight="1px" sx={{ my: 2 }}>
        {/* <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
          alt=""
        /> */}
      <UserAvatar
        userName={"Carmela Wareing"}
      />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography fontSize="3g" fontWeight="lg" level="h2" sx={{ alignSelf: 'flex-start' }}>
          Carmela Wareing
        </Typography>
        <Typography level="body2">Looking for Group</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
      </IconButton>

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Carmela_Wareing@gmail.com</Typography>
        </div>
        <Button
          variant="outlined"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Group
        </Button>
      </Box>
    </Card>
    <span>&nbsp;&nbsp;</span>
    <Card variant="outlined" style = {{width: '20rem' }}>
      <AspectRatio minHeight="50px" maxHeight="1px" sx={{ my: 2 }}>
        {/* <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
          alt=""
        /> */}
      <UserAvatar
        userName={"Latisha Posner"}
      />
      </AspectRatio>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography fontSize="3g" fontWeight="lg" level="h2" sx={{ alignSelf: 'flex-start' }}>
          Latisha Posner
        </Typography>
        <Typography level="body2">Looking for Group</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
      </IconButton>

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Latisha_Posner@gmail.com</Typography>
        </div>
        <Button
          variant="outlined"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Group
        </Button>
      </Box>
    </Card>
    <span>&nbsp;&nbsp;</span>
    
    </div>
      {/* <ProfileCard></ProfileCard> */}
    </div>
    
  )
};

export default GFModClassPage;
