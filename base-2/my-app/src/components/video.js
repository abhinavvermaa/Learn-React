import "./video.css";
function Video({ title, channel = "sam coder",views,time }) {
  return (
    <>
    <div className="container">
      <div className="pic">
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="images" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views<span>.</span>{time}
      </div>
    </div>
    </>
  );
}

export default Video;
