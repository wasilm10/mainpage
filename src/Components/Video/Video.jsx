import React, { useRef } from 'react'
import  './Video.css'
import v from '../../assets/video1.mp4'

const Video = ({playState,setPlayState}) => {
const player =useRef(null);
const closePlayer=(e)=>{
  if(e.target===player.current){
    setPlayState(false);
  }
}


  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={v} autoPlay muted controls></video>
    </div>
  )
}

export default Video