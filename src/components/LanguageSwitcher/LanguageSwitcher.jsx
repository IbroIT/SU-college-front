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
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png' alt="English Flag" />
                
            </li>
            <li onClick={() => changeLanguage('ru')} className={style.languageOption}>
                <img src='https://cdn.britannica.com/42/3842-050-68EEE2C4/Flag-Russia.jpg' alt="Russian Flag" />
        
            </li>
            <li onClick={() => changeLanguage('ky')} className={style.languageOption}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg' alt="Kyrgyz Flag" />
                
            </li>
        </ul>
    );
};

export default LanguageSwitcher;
