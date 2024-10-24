import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state;

    return (
        <div>
            <h1>Search Results:</h1>
            {results.map((result, index) => (
                <div key={index}>
                    <p>{result.sentence}</p>
                    <small>Page: {result.key}</small>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
