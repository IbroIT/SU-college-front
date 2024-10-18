import React from 'react';
import './NotFound.css'; // Импортируем CSS файл для стилей
const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">Извините, такой страницы нет</h1>
            <p className="not-found-message">Проверьте URL или вернитесь на главную страницу.</p>
            <a href="/" className="not-found-link">На главную страницу</a>
        </div>
    );
};

export default NotFound;
