import React, {useState} from "react";
import Video from "./Video.js";
import video from "../data/video.js";
import CommentArea from "./CommentArea.js";

function App() {

  const [commentVisibility, setCommentVisibility] = useState(true);

  return (
    <div className="App">
      <Video videoInfo={video} commentVisibility={commentVisibility} setCommentVisibility={setCommentVisibility}/>
      {commentVisibility ? <CommentArea comments={video.comments}/> : null}
    </div>
  );
}

export default App;
