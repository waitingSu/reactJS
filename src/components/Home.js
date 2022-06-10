import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Comment from './Comment';
import useVideo from '../hooks/useVideo';

const Home = () => {
    const [videos,search] = useVideo('gundam info tw');
    const [selectedVideo,setSelectedVideo] = useState(null);

    

    useEffect(() => {
        setSelectedVideo(videos[0]);
    },[videos]);
    
    /*轉成 inline callback
    const onViedoSelect = (video) => {
        //console.log('from the App',video);
        setSelectedVideo(video);
    };*/

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onViedoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
            <Comment />
        </div>
    );
};

export default Home;