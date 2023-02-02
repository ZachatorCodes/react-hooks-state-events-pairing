import React, {useState} from "react";

function VideoInfo({ title, views, uploadDate, likes, dislikes, commentVisibility, setCommentVisibility }) {

  const [numLikes, setLikes] = useState(likes);
  const [numDislikes, setDislikes] = useState(dislikes);

  function handleLikeClick(e) {
    setLikes((numLikes) => numLikes + 1);
  }

  function handleDislikeClick() {
    setDislikes((numDislikes) => numDislikes + 1);
  }

  function handleToggleComments() {
    setCommentVisibility(commentVisibility => !commentVisibility);
  }

  return (
    <>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {uploadDate}
      </p>
      <button onClick={handleLikeClick}>{numLikes}👍</button>
      <button onClick={handleDislikeClick}>{numDislikes}👎</button>
      <br />
      <button onClick={handleToggleComments}>{commentVisibility ? "Hide Comments" : "Show Comments"}</button>
    </>
  );
}

export default VideoInfo;
