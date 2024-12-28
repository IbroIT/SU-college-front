import React from 'react';
import i18next from 'i18next';
import style from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
    };

    return (
        <ul className={style.languages}>
            <li onClick={() => changeLanguage('en')} className={style.languageOption}>
                <p>EN</p> 
            </li>
            <li onClick={() => changeLanguage('ru')} className={style.languageOption}>
                <p>RU</p> 
            </li>
            <li onClick={() => changeLanguage('ky')} className={style.languageOption}>
                <p>KG</p> 
            </li>
        </ul>
    );
};

export default LanguageSwitcher;
