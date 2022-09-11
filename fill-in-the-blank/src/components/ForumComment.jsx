import React from "react";

import dayjs from "dayjs";

import UserAvatar from "./UserAvatar";

import styles from "../styles/components/ForumComment.module.css";

const ForumComment = ({
  currentUserName,
  commentUserName,
  commentDate,
  commentText,
}) => {
  const convertTimeStamp = commentDate.toDate();
  const convertedCommentDate = dayjs(convertTimeStamp).format("DD/MM/YYYY");

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
              currentUserName === commentUserName && (
                <button className={styles.userCommentEditButton}>edit</button>
              )
            }
          </div>

          <p className={styles.userCommentText}>{commentText}</p>
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default ForumComment;
