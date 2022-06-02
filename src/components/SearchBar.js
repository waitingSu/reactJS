import React from "react";

export default class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO:記得做父組件的callbeck
        this.props.onSearchSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value.toLowerCase() });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search from Real Youtube</label>
                        <input type="text" value={this.state.term} 
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}