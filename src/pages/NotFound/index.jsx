import React from 'react';
import './NotFound.css'; // Импортируем CSS файл для стилей
import { useTranslation } from 'react-i18next'; // Импортируем хук для перевода

const NotFound = () => {
    const { t } = useTranslation(); // Инициализируем перевод

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">{t("notFound.title")}</h1>
            <p className="not-found-message">{t("notFound.message")}</p>
            <a href="/" className="not-found-link">{t("notFound.link")}</a>
        </div>
    );
};

export default NotFound;
