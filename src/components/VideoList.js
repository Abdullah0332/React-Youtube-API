import React from 'react';
import VideoItems from './VideoItems'


const VideoList = ({ videos , onSelect }) =>{
    const data=videos.map(video=>{
        return <VideoItems 
                key={video.id.videoId} 
                onSelect={onSelect} 
                video={video}
            />
    })
    return (
        <div className="ui relaxed divided list">
            {data}
        </div>
    )
}

export default VideoList;
