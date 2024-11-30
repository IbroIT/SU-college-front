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
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const handleSearch = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            closeMenu();
            setSearchQuery('');
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
                    <Link className={style.linkNav} to="/owner">
                    <li>{t('header.owner')}</li>

                    </Link>
                </ul>
                <ul className={style.rightSide}>
                    <li>{t('header.map')}</li>
                    <Link className={style.linkNav} to="/director">
                    <li>{t('header.director')}</li>
                    </Link>
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
                        <Link to='/'>
                            <img
                                src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                                alt='Salymbekov College Logo'
                            />
                            </Link>
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
                <div className={style.navContainer}>
                    <ul className={style.headerUl}>
                        <li className={style.navLi}>
                            {t('header.college')}
                            <div className={style.dropdownContent}>
                                <div className={style.dropdownContentFirstDiv}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqaNZi8HVY6Son_GDGLzVfzPoaCfvTaACRmRzZ4Xup7dnGiN3uR2lryOr6AVzJGcQuCE&usqp=CAU" alt="" />
                                <h1>
                                {t('header.collegeInfo')}
                                </h1>
                                </div>
                                <div className={style.dropdownContentSecondDiv}>
                                <Link to="/college"><p>{t('header.aboutCollege')}</p></Link>
                                <Link to="/teachers"><p>{t('header.teachers')}</p></Link>
                                <Link to="/letter"><p>{t('header.letterFromDirector')}</p></Link>
                                </div>
                            </div>
                        </li>
                        <li className={style.navLi}>
                            {t('header.professions')}
                            <div className={style.dropdownContent}>
                            <div className={style.dropdownContentFirstDiv}>
                                <img src="https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt09a2ac83e51a0e06/661ce198092eb8747525079e/programming_20evolution.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale" alt="" />
                                <h1>
                                {t('header.professionsInfo')}
                                </h1>
                                </div>
                                <div className={style.dropdownContentSecondDiv}>
                                <Link to="/computerscience"><p>{t('header.computerScience')}</p></Link>
                                <Link to="/multimediaprograms"><p>{t('header.multimediaPrograms')}</p></Link>
                                <Link to="/mobile"><p>{t('header.mobileApps')}</p></Link>
                                </div>
                            </div>
                        </li>
                    <li className={style.navLi} onClick={toggleDropdown}>
                {t('header.admissions')}
                <div className={`${style.dropdownContent} ${isOpen ? style.show : ''}`}>
                    <div className={style.dropdownContentFirstDiv}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpElHNnP195I8dD2coxQZIKf4-SiakpYRrQ&s" alt="" />
                        <h1>
                        {t('header.admissionsDetails')}

                        </h1>
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
                    </div>
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