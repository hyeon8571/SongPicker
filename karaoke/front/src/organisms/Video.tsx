import ReactPlayer from "react-player/youtube"

type VideoProps = {
  videoId: string
}

const Video = (props:VideoProps) => {
  return (
    <div className="w-full">
        <ReactPlayer url={`https://youtu.be/${props.videoId}`} />
    </div>
  )
}

export default Video