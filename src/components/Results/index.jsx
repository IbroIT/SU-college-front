import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import style from './SearchResults.module.scss';

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [searchResults, setSearchResults] = useState({ en: [], kg: [], ru: [] });

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get('http://localhost:3001/search', {
                    params: { query }
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query]);

    return (
        <div className={style.searchResultsContainer}>
            <h2>Search Results for: {query}</h2>
            <div>
                <h3>English:</h3>
                <ul>
                    {searchResults.en.length > 0 ? (
                        searchResults.en.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </ul>
            </div>

            <div>
                <h3>Кыргызча:</h3>
                <ul>
                    {searchResults.kg.length > 0 ? (
                        searchResults.kg.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </ul>
            </div>

            <div>
                <h3>Русский:</h3>
                <ul>
                    {searchResults.ru.length > 0 ? (
                        searchResults.ru.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SearchResultsPage;
