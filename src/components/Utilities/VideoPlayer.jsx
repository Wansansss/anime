"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () =>{
        setIsOpen((prevstate) => !prevstate)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
                
                <button 
                onClick={handleVideoPlayer}
                className="text-white float-right bg-indigo-700 hover:bg-red-600 px-4 mb-1 hover:text-white hover:scale-105 transition-all font-bold rounded shadow-xl text-xl">
                    X
                </button>
                
                <YouTube 
                videoId={youtubeId} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Video tidak bisa diputar, coba yang lain")}
                
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return(
            <button 
    onClick={handleVideoPlayer}
    className="fixed bottom-5 right-5 w-32 bg-indigo-700 hover:bg-red-600 hover:scale-105 transition-all text-white text-lg rounded shadow-2xl">
        Tonton Trailer
    </button>


        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/> 
    
}

export default VideoPlayer