import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import i18n from '../../i18n.js';
import { scrollToElement } from '../scrollUtils.js';
import styles from './SearchBar.module.scss';

const SearchResults = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            const searchInTranslations = (query) => {
                const results = [];
                const languages = ['en', 'kg', 'ru'];

                const routeMap = {
                    aboutCollege: '/college',
                    teachers: '/teachers',
                    faq: '/faq',
                    contacts: '/contacts',
                    multimediaPrograms: '/multimediaprograms',
                    mobile: '/mobile',
                    computerScience: '/computerscience',
                    afterNinthGrade: '/afterninthgrade',
                    afterEleventhGrade: '/aftereleventhgrade',
                };

                const searchRecursive = (obj, parentKey = '') => {
                    for (const key in obj) {
                        const value = obj[key];
                        if (typeof value === 'string') {
                            if (value.toLowerCase().includes(query.toLowerCase())) {
                                results.push({
                                    text: value,
                                    link: routeMap[key] || '#', // Если ссылка не найдена, ставим по умолчанию #
                                    id: `${key}-result`
                                });
                            }
                        } else if (typeof value === 'object') {
                            searchRecursive(value, key);
                        }
                    }
                };

                languages.forEach((lang) => {
                    const translations = i18n.getResourceBundle(lang, 'translation');
                    searchRecursive(translations);
                });

                setResults(results);
            };

            searchInTranslations(query);
        }
    }, [query]);

    return (
        <div className={styles['search-results-container']}>
            <h1 className={styles['search-title']}>Search Results</h1>
            {results.length > 0 ? (
                <ul className={styles['results-list']}>
                    {results.map((result, index) => (
                        <li key={index}>
                            <Link
                                to={result.link}
                                onClick={() => {
                                    // Прокручиваем до элемента, если он существует на целевой странице
                                    setTimeout(() => {
                                        scrollToElement(result.id);
                                    }, 500); // Добавляем задержку, чтобы страница успела загрузиться
                                }}
                            >
                                {result.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles['no-results']}>No results found for "{query}".</p>
            )}
        </div>
    );
};

export default SearchResults;
