import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import './play.css'



const Play = () => {
     const { id } = useParams();
     const [watch, setWatch] = useState('')
     const Movie = 'http://localhost:8000'
     useEffect(() => {
          async function Watch() {
               const res = await axios.get(`${Movie}/movies/action/${id}`)
               setWatch(res.data)
          }
          Watch()
     }, [id])

     const Youtube = 'https://www.youtube.com/watch?v='
     const Url = `${Youtube}${watch.youtube_video_id}`;
  return (
    <div className='row__detail'>
     <div className='play__content'>
          <ReactPlayer 
               url={Url} 
               width="100%"
               playsinline={true}
               controls={true}
          />
     </div>
    </div>
  )
}

export default Play