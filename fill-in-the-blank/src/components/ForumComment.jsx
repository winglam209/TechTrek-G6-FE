import { useState } from "react";

import { db } from "../firebase";
import { doc, updateDoc, Timestamp } from "firebase/firestore";

import dayjs from "dayjs";

import UserAvatar from "./UserAvatar";

import styles from "../styles/components/ForumComment.module.css";

const ForumComment = ({
  commentId,
  currentUserName,
  commentUserName,
  commentDate,
  commentText,
  refreshPage,
  setRefreshPage,
}) => {
  const convertTimeStamp = commentDate.toDate();
  const convertedCommentDate = dayjs(convertTimeStamp).format("DD/MM/YYYY");

  const [editState, setEditState] = useState(false);
  const [editCommentText, setEditCommentText] = useState("");

  function editComment() {
    setEditState(true);
    setEditCommentText(commentText);
  }

  async function updateComment() {
    const docRef = doc(db, "Forum", commentId);

    if (commentText === editCommentText) {
      setEditState(false);
    } else {
      try {
        await updateDoc(docRef, {
          Comments: editCommentText,
          Date: Timestamp.now(),
        });

        setEditState(false);
        setRefreshPage(!refreshPage);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <div className={styles.userCommentRow}>
        <UserAvatar userName={commentUserName} />
        <div className={styles.userCommentContent}>
          <div className={styles.userCommentInfo}>
            <p className={styles.userCommentName}>{commentUserName}</p>
            <p className={styles.userCommentDate}>{convertedCommentDate}</p>
            {
              // If the user is the same as the comment user, show the delete button
              currentUserName === commentUserName &&
                (editState ? (
                  <div>
                    <button
                      className={styles.userCommentEditButton}
                      onClick={() => updateComment()}
                    >
                      Submit
                    </button>
                    <button
                      className={styles.userCommentEditButton}
                      onClick={() => setEditState(false)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.userCommentEditButton}
                    onClick={editComment}
                  >
                    edit
                  </button>
                ))
            }
          </div>
          {editState ? (
            <textarea
              value={editCommentText}
              onChange={(e) => setEditCommentText(e.target.value)}
            >
              {editCommentText}
            </textarea>
          ) : (
            <p className={styles.userCommentText}>{commentText}</p>
          )}
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default ForumComment;
