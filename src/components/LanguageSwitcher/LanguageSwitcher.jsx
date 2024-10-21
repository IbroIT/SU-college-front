import React from 'react';
import i18next from 'i18next';
import style from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
    };

    return (
        <ul className={style.languages}>
            <li onClick={() => changeLanguage('en')}>EN</li>
            <li onClick={() => changeLanguage('ru')}>RU</li>
            <li onClick={() => changeLanguage('ky')}>KG</li>
        </ul>
    );
};

export default LanguageSwitcher;
