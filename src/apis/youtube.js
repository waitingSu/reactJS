import axios from 'axios'

const KEY='AIzaSyDSgoDuNS6IysvBD8TRC6LV7C-mid0AS68';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});