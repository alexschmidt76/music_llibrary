import React from 'react';

function SearchBar(props) {
    return (
        <form>
            <input type='text' placeHolder='Enter a search term here' />
            <input type='submit' />
        </form>
    );
}

export default SearchBar;