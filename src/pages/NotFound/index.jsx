import React from 'react';
import './NotFound.css';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';

export const NotFound = () => {
    const { t } = useTranslation(); 

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">{t("notFound.title")}</h1>
            <p className="not-found-message">{t("notFound.message")}</p>
            <Link to="/college">
            <a className="not-found-link">{t("notFound.link")}</a>
            </Link>
        </div>
    );
};

