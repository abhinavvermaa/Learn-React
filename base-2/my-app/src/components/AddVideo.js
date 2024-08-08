import "./AddVideo.css";
import { useState } from "react";

const initailState = {
  time: "1 yr ago",
  channel: "coder Dost",
  verified: true,
  title: "",
  views:""
};

function AddVideo({addVideos}) {
  const [video, setVideo] = useState(initailState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video)
    console.log(video);
    setVideo(initailState);
  }
  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideo({...video,
      [e.target.name] : e.target.value
    })
    console.log(video);
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}

      />
      <button
        onClick={handleSubmit}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
