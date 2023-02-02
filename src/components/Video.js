import React from "react";
import VideoInfo from "./VideoInfo";
import VideoPlayer from "./VideoPlayer";

function Video({ videoInfo, commentVisibility, setCommentVisibility }) {
  return (
    <>
      <VideoPlayer embedUrl={videoInfo.embedUrl} />
      <VideoInfo
        title={videoInfo.title}
        views={videoInfo.views}
        uploadDate={videoInfo.createdAt}
        likes={videoInfo.upvotes}
        dislikes={videoInfo.downvotes}
        commentVisibility={commentVisibility}
        setCommentVisibility={setCommentVisibility}
      />
    </>
  );
}

export default Video;
