import {useState,useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideo = (defaultSearchVideo) =>{
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchVideo);
    },[defaultSearchVideo]);

    const search = async (term) => {
        const result = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        
        setVideos(result.data.items);
    }

    return [videos,search];
};

export default useVideo;