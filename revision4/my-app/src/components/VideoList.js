import PLayButton from "./playbutton";
import Video from "./video";

function VideoList({videos}){
  return (
<>
    {videos.map((video) => (
      <Video
        key={video.id}
        title={video.title}
        className={video.className}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
        id={video.id}
      >
        <PLayButton
          onClick={() => console.log('Playing', video.title)}
          onPlay={() => console.log("paused",video.title)}
        >
          {video.title}
        </PLayButton>
      </Video>
    ))}
    </>
  )
}

export default VideoList;