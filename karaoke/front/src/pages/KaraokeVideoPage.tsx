import { useLocation } from "react-router-dom"
import Video from "../organisms/Video"



const KaraokeVideoPage = () => {
  const state = useLocation()
  return (
    <div>
        <Video videoId={state.state.id.videoId}/>
    </div>
  )
}

export default KaraokeVideoPage