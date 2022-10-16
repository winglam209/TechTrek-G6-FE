import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db, firebaseAuth } from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "../styles/pages/ModForum.module.css";
import UserAvatar from "../components/UserAvatar";
import ForumComment from "../components/ForumComment";

const ModForum = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  const [moduleData, setModuleData] = useState();
  const [userName, setUserName] = useState();
  const [forumComments, setForumComments] = useState();
  const [userCommentText, setUserCommentText] = useState("");
  const [refreshPage, setRefreshPage] = useState(true);

  const { moduleCode } = useParams();

  const queryUserName = query(
    collection(db, "Users"),
    where("UID", "==", user.uid)
  );

  const queryMod = query(
    collection(db, "Module"),
    where("Module Code", "==", moduleCode)
  );

  async function getUserName() {
    let result = [];
    const querySnapshot = await getDocs(queryUserName);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    setUserName(result[0].Name);
  }

  async function getModuleData() {
    let result = [];
    const querySnapshot = await getDocs(queryMod);

    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setModuleData(result[0]);
  }

  async function getForumComments(modueCode) {
    let result = [];
    const queryForumComments = query(
      collection(db, "Forum"),
      where("Module Code", "==", modueCode),
      orderBy("Date", "desc")
    );
    const querySnapshot = await getDocs(queryForumComments);

    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, data: doc.data() });
    });
    setForumComments(result);
  }

  useEffect(() => {
    getModuleData();
    getUserName();
  }, [moduleCode]);

  useEffect(() => {
    moduleData && getForumComments(moduleData["Module Code"]);
  }, [moduleData, refreshPage]);

  console.log(moduleData);
  console.log(forumComments);

  console.log(userCommentText);

  async function postUserComment() {
    const docRef = await addDoc(collection(db, "Forum"), {
      "Name of User": userName,
      Comments: userCommentText,
      Date: Timestamp.now(),
      "Module Code": moduleCode,
    });
    console.log("Document written with ID: ", docRef.id);

    setUserCommentText("");
    setRefreshPage(!refreshPage);
  }

  console.log(userCommentText, "userCommentText");

  return (
    moduleData && (
      <div className={styles.modForum}>
        <h1 className={styles.modForumHeader}>Forum page</h1>

        <div className={styles.modForumBody}>
          <div className={styles.modForumDescriptionSection}>
            <h1 className={styles.modNameHeader}>
              {moduleData["Module Code"] + " - " + moduleData["Module Name"]}
            </h1>
            <p className={styles.modDescriptionP}>{moduleData.Description}</p>
          </div>

          <div className={styles.commentSection}>
            <h2>Comments</h2>

            {/* user comment input */}
            <div className={styles.commentInputBox}>
              <UserAvatar userName={userName} />
              <textarea
                className={styles.commentInputField}
                onChange={(e) => setUserCommentText(e.target.value)}
                value={userCommentText}
              >
                {userCommentText}
              </textarea>
              <button className={styles.postButton} onClick={postUserComment}>
                Post
              </button>
            </div>
            <hr className={styles.hr} />

            {/* <ForumComment /> */}
            {forumComments &&
              forumComments.map((comment, index) => {
                return (
                  <ForumComment
                    key={index}
                    commentId={comment.id}
                    currentUserName={userName}
                    commentUserName={comment.data["Name of User"]}
                    commentDate={comment.data.Date}
                    commentText={comment.data.Comments}
                    refreshPage={refreshPage}
                    setRefreshPage={setRefreshPage}
                  />
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default ModForum;
