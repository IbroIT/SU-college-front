import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import style from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import axios from 'axios';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchQuery.trim()) {
                navigate(`/search?query=${searchQuery}`);
                closeMenu();
                setSearchQuery('');
            }
        }
    };
    return (
        <>
         <nav className={style.mainNav}>
        <div className={style.mainContainer}>
            <ul className={style.leftSide}>
                <Link className={style.linkNav}  to="/students">
                <li>{t('header.students')}</li>
                </Link>
                <li>{t('header.staff')}</li>
                <li>{t('header.parents')}</li>
            </ul>
            <ul className={style.rightSide}>
                <li>{t('header.map')}</li>
                <li>{t('header.director')}</li>
                <li>{t('header.news')}</li>
                <input
                    type="text"
                    placeholder={t('header.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <Button onClick={handleSearch} fontSize='small'>
                    <Search fontSize='small' />
                </Button>
            </ul>
        </div>
    </nav>
        <header className={style.header}>
                <div className={style.headerContainer}>
                    <div className={style.logo}>
                        <img
                            src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                            alt='Salymbekov College Logo'
                        />
                    </div>
                    <div className={style.actions}>
                        <LanguageSwitcher />
                    </div>
                    <div className={style.burgerMenu} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </header>
            <nav className={`${style.headerNav} ${isMenuOpen ? style.mobileMenuOpen : ''}`}>
                <ul className={style.headerUl}>
                    <li className={style.navLi}>
                        {t('header.college')}
                        <div className={style.dropdownContent}>
                            <div className={style.dropdownContentFirstDiv}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqaNZi8HVY6Son_GDGLzVfzPoaCfvTaACRmRzZ4Xup7dnGiN3uR2lryOr6AVzJGcQuCE&usqp=CAU" alt="" />
                            <h1>
                            From a group of academic pioneers in 1868 to the
                             Free Speech Movement in 1964, Berkeley is a place 
                             where the brightest minds from across the globe
                              come together to explore, ask questions and improve the world.</h1>
                            </div>
                            <div className={style.dropdownContentSecondDiv}>
                            <Link to="/college"><p>{t('header.aboutCollege')}</p></Link>
                            <Link to="/mission"><p>{t('header.mission')}</p></Link>
                            <Link to="/teachers"><p>{t('header.teachers')}</p></Link>
                            <Link to="/advice"><p>{t('header.board')}</p></Link>
                            <Link to="/college"><p>{t('header.letterFromDirector')}</p></Link>
                            </div>
                        </div>
                    </li>
                    <li className={style.navLi}>
                        {t('header.professions')}
                        <div className={style.dropdownContent}>
                        <div className={style.dropdownContentFirstDiv}>
                            <img src="https://www.berkeley.edu/wp-content/uploads/2021/02/about-megamenu-ez.jpg" alt="" />
                            <h1>
                            From a group of academic pioneers in 1868 to the
                             Free Speech Movement in 1964, Berkeley is a place 
                             where the brightest minds from across the globe
                              come together to explore, ask questions and improve the world.</h1>
                            </div>
                            <div className={style.dropdownContentSecondDiv}>
                            <Link to="/computerscience"><p>{t('header.computerScience')}</p></Link>
                            <Link to="/multimediaprograms"><p>{t('header.multimediaPrograms')}</p></Link>
                            <Link to="/mobile"><p>{t('header.mobileApps')}</p></Link>
                            </div>
                        </div>
                    </li>
                    <li className={style.navLi}>
                        {t('header.admissions')}
                        <div className={style.dropdownContent}>
                        <div className={style.dropdownContentFirstDiv}>
                            <img src="https://www.berkeley.edu/wp-content/uploads/2021/02/about-megamenu-ez.jpg" alt="" />
                            <h1>
                            From a group of academic pioneers in 1868 to the
                             Free Speech Movement in 1964, Berkeley is a place 
                             where the brightest minds from across the globe
                              come together to explore, ask questions and improve the world.</h1>
                            </div>
                            <div className={style.dropdownContentSecondDiv}>
                            <Link to="/afterninthgrade"><p>{t('header.afterNinthGrade')}</p></Link>
                            <Link to="/aftereleventhgrade"><p>{t('header.afterEleventhGrade')}</p></Link>
                            </div>
                        </div>
                    </li>
                    <Link to="/faq">
                        <li className={style.navLi}>{t('header.faqs')}</li>
                    </Link>
                    <Link to="/contacts">
                        <li className={style.navLi}>{t('header.contacts')}</li>
                    </Link>
                </ul>
            </nav>
            {isMenuOpen && (
    <div className={`${style.mobileMenu} ${style.mobileMenuOpen}`}>
        <div className={style.mobileMenuHeader}>
            <Link to="/" onClick={closeMenu}>
                <img
                    src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                    alt='Salymbekov College Logo'
                    className={style.mobileLogo}
                />
            </Link>
        </div>
        <div className={style.searchMenu}>
        <input
        type="text"
        placeholder={t('header.searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}>
        </input>
        <Button onClick={handleSearch}fontSize='small'>
        <Search fontSize='small' />
        </Button>
        </div>
        <ul className={style.mobileMenuNav}>
            <li className={style.navLi}>
                {t('header.college')}
                <div className={`${style.dropdownContent} ${isMenuOpen ? style.show : ''}`}>
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
            <Link className={style.link} to="/faq"  onClick={closeMenu}>
                <li className={style.navLi}>{t('header.faqs')}</li>
            </Link>
            <Link className={style.link} to="/contacts" onClick={closeMenu}>
                <li className={style.navLi}>{t('header.contacts')}</li>
            </Link>
            <div className={style.mobileActions}>
                <LanguageSwitcher />
            </div>
        </ul>
    </div>
)}
        </>
    );
};