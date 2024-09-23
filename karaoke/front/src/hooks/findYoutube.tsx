import axios from "axios"
import { ChartItemProps } from "../shared/Types"

export const findYoutube = (props:ChartItemProps) => {
    axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        q: `${props.song.title} ${props.song.artist} 금영 노래방`,
        maxResults: 1
      }
    }).then((res)=>{
    //   navigate('/video', {state: res.data.items[0]})
    console.log(res)
    })
    .catch((err)=>{console.log(err)})
  }