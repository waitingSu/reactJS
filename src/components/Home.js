import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Comment from './Comment';

export default class Home extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit('gundam info tw');
    }

    onSearchSubmit = async (term) => {
        const result = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        this.setState({
            videos: result.data.items,
            selectedVideo: result.data.items[0]
        });
    }

    onViedoSelect = (video) => {
        //console.log('from the App',video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onViedoSelect={this.onViedoSelect} />
                        </div>
                    </div>
                </div>
                <Comment />
            </div>
        )
    }
}