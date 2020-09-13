import React  from 'react'
import './VideoItems.css'

const VideoItems = ({ video , onSelect })=>{
    return(
        <div onClick={()=> onSelect(video)} className="video-item item">
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItems;


    
