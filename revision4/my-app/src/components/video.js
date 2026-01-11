import "./video.css";
function Video({ title,id, channel = "sam coder",views,time , verified , children}) {
 
  console.log('render video');
  return (
    <>
    <div className="container">
      <div className="pic">
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="images" />
      </div>
      <div className="title">{title}</div>
     <div className="channel">{channel}{verified && "✅" }</div> 
      <div className="views">
        {views} views<span>.</span>{time}
      </div>
      <div>
        {children}
      </div>
    </div>
    </>
  );
}

export default Video;
