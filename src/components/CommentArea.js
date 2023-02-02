import React from "react";
import Comment from "./Comment";

function CommentArea({ comments }) {
  const allComments = comments.map((comment) => {
    return (
      <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    );
  });
  return allComments;
}

export default CommentArea;
