import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos,onViedoSelect }) => {
    console.log(videos);
    const videosList = videos.map(video => {
        return (
        <VideoItem 
        key={video.id.videoId} 
        video={video} 
        onViedoSelect={onViedoSelect}/>);
    })
    return <div className="ui relaxed divided list">{videosList}</div>
}

export default VideoList;