import ReactPlayer from 'react-player/youtube';

type VideoProps = {
  videoId: string;
  handleError: (error: number) => void;
};

const Video = (props: VideoProps) => {
  const youtubeConfig = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      controls: 1,
    },
  };

  return (
    <div className="w-11/12 h-5/6">
      <ReactPlayer
        url={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
        config={youtubeConfig}
        controls={true}
        width="100%"
        height="100%"
        onError={error => {
          props.handleError(error);
        }}
      />
    </div>
  );
};

export default Video;
