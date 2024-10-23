import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className={style.blueLine}></div>
            <header className={style.header}>
                <div className={style.headerContainer}>
                    <div className={style.logo}>
                        <img
                            src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                            alt='Salymbekov College Logo'
                        />
                    </div>

                    <div className={style.actions}>
                        <h1 className={style.searchText}>{t('header.search')}</h1>
                        <Button fontSize='small'>
                            <Search fontSize='small' />
                        </Button>
                        <LanguageSwitcher /> 
                    </div>

                    <div className={style.burgerMenu} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </header>

            <nav className={style.headerNav}>
                <ul className={style.headerUl}>
                    <li className={style.navLi}>
                        {t('header.college')}
                        <div className={style.dropdownContent}>
                            <Link to="/college" ><p>{t('header.aboutCollege')}</p></Link>
                            <Link to="/mission" ><p>{t('header.mission')}</p></Link>
                            <Link to="/teachers"><p>{t('header.teachers')}</p></Link>
                            <Link to="/advice" ><p>{t('header.board')}</p></Link>
                            <Link to="/college"><p>{t('header.letterFromDirector')}</p></Link>
                        </div>
                    </li>
                    <li className={style.navLi}>
                        {t('header.professions')}
                        <div className={style.dropdownContent}>
                            <Link to="/computerscience" ><p>{t('header.computerScience')}</p></Link>
                            <Link to="/multimediaprograms" ><p>{t('header.multimediaPrograms')}</p></Link>
                            <Link to="/mobile"><p>{t('header.mobileApps')}</p></Link>
                        </div>
                    </li>
                    <li className={style.navLi}>
                        {t('header.admissions')}
                        <div className={style.dropdownContent}>
                            <Link to="/afterninthgrade" ><p>{t('header.afterNinthGrade')}</p></Link>
                            <Link to="/aftereleventhgrade" ><p>{t('header.afterEleventhGrade')}</p></Link>
                        </div>
                    </li>
                    <Link to="/faq" >
                        <li className={style.navLi}>{t('header.faqs')}</li>
                    </Link>
                    <Link to="/contacts">
                        <li className={style.navLi}>{t('header.contacts')}</li>
                    </Link>
                </ul>
            </nav>

            {isMenuOpen && (
                <div className={style.mobileMenu}>
                    <div className={style.mobileMenuHeader}>
                        <Link to="/" onClick={closeMenu}>
                            <img
                                src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                                alt='Salymbekov College Logo'
                            />
                        </Link>
                    </div>
                    <ul className={style.mobileMenuNav}>
                        <li className={style.navLi}>
                            {t('header.college')}
                            <div className={style.dropdownContent}>
                                <Link to="/college" onClick={closeMenu}><p>{t('header.aboutCollege')}</p></Link>
                                <Link to="/mission" onClick={closeMenu}><p>{t('header.mission')}</p></Link>
                                <Link to="/teachers" onClick={closeMenu}><p>{t('header.teachers')}</p></Link>
                                <Link to="/advice" onClick={closeMenu}><p>{t('header.board')}</p></Link>
                                <Link to="/college" onClick={closeMenu}><p>{t('header.letterFromDirector')}</p></Link>
                            </div>
                        </li>
                        <li className={style.navLi}>
                            {t('header.professions')}
                            <div className={style.dropdownContent}>
                                <Link to="/computerscience" onClick={closeMenu}><p>{t('header.computerScience')}</p></Link>
                                <Link to="/multimediaprograms" onClick={closeMenu}><p>{t('header.multimediaPrograms')}</p></Link>
                                <Link to="/mobile" onClick={closeMenu}><p>{t('header.mobileApps')}</p></Link>
                            </div>
                        </li>
                        <li className={style.navLi}>
                            {t('header.admissions')}
                            <div className={style.dropdownContent}>
                                <Link to="/afterninthgrade" onClick={closeMenu}><p>{t('header.afterNinthGrade')}</p></Link>
                                <Link to="/aftereleventhgrade" onClick={closeMenu}><p>{t('header.afterEleventhGrade')}</p></Link>
                            </div>
                        </li>
                        <Link to="/faq" onClick={closeMenu}>
                            <li className={style.navLi}>{t('header.faqs')}</li>
                        </Link>
                        <Link to="/contacts" onClick={closeMenu}>
                            <li className={style.navLi}>{t('header.contacts')}</li>
                        </Link>
                    </ul>
                    <LanguageSwitcher />
                </div>
            )}
        </>
    );
};
