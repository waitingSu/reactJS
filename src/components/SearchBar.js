import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        //TODO:記得做父組件的callbeck
        onSearchSubmit(term);
    }

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search from Real Youtube</label>
                    <input type="text" value={term}
                        onChange={onInputChange} />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;