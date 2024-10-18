import React, { useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                        <h1 className={style.searchText}>Поиск</h1>
                        <Button fontSize='small'>
                            <Search fontSize='small'/>
                        </Button>
                        <ul className={style.languages}>
                            <li>EN</li>
                            <li>RU</li>
                            <li>KG</li>
                        </ul>
                    </div>

                    <div className={style.burgerMenu} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </header>

            <nav className={style.headerNav}>
    <ul className={style.headerUl}>
        <li className={style.navLi}>
            КОЛЛЕДЖ
            <div className={style.dropdownContent}>
                <Link to="/college"><p>О колледже</p></Link>
                <Link to="/mission"><p>Миссия</p></Link>
                <Link to="/teachers"><p>Преподаватели</p></Link>
                <Link to="/advice"><p>Наблюдательный совет</p></Link>
                <Link to="/college"><p>Письмо Директора</p></Link>
            </div>
        </li>
        <li className={style.navLi}>
            ПРОФЕССИИ
            <div className={style.dropdownContent}>
            <Link to="/college"><p>О колледже</p></Link>
                <Link to="/college"><p>Миссия</p></Link>
                <Link to="/college"><p>Преподаватели</p></Link>
                <Link to="/college"><p>Наблюдательный совет</p></Link>
                <Link to="/college"><p>Письмо Директора</p></Link>
            </div>
        </li>
        <li className={style.navLi}>
            ПОСТУПАЮЩИМ
            <div className={style.dropdownContent}>
                <Link to="/college"><p>О колледже</p></Link>
                <Link to="/college"><p>Миссия</p></Link>
                <Link to="/college"><p>Преподаватели</p></Link>
                <Link to="/college"><p>Наблюдательный совет</p></Link>
                <Link to="/college"><p>Письмо Директора</p></Link>
            </div>
        </li>
        <li className={style.navLi}>
            ВОПРОСЫ-ОТВЕТЫ
            <div className={style.dropdownContent}>
            <Link to="/college"><p>О колледже</p></Link>
                <Link to="/college"><p>Миссия</p></Link>
                <Link to="/college"><p>Преподаватели</p></Link>
                <Link to="/college"><p>Наблюдательный совет</p></Link>
                <Link to="/college"><p>Письмо Директора</p></Link>
            </div>
        </li>
        <li className={style.navLi}>
            КОНТАКТЫ
            <div className={style.dropdownContent}>
            <Link to="/college"><p>О колледже</p></Link>
                <Link to="/college"><p>Миссия</p></Link>
                <Link to="/college"><p>Преподаватели</p></Link>
                <Link to="/college"><p>Наблюдательный совет</p></Link>
                <Link to="/college"><p>Письмо Директора</p></Link>
            </div>
        </li>
    </ul>
</nav>
            {isMenuOpen && (
                <div className={style.mobileMenu}>
                    <div className={style.mobileMenuHeader}>
                        <img 
                            src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png' 
                            alt='Salymbekov College Logo'
                        />
                    </div>
                    <ul className={style.mobileMenuNav}>
            <li className={style.navLi}>
            КОЛЛЕДЖ
            <div className={style.dropdownContent}>
                <Link to="/college" className={style.link}><p>О колледже</p></Link>
                <Link to="/mission" className={style.link}><p>Миссия</p></Link>
                <Link to="/teachers" className={style.link}><p>Преподаватели</p></Link>
                <Link to="/advice" className={style.link}><p>Наблюдательный совет</p></Link>
                <Link to="/college" className={style.link}><p>Письмо Директора</p></Link>
            </div>
        </li>
        <li className={style.navLi}>
            ПРОФЕССИИ
            <div className={style.dropdownContent}>
                <p>Программист</p>
                <p>Дизайнер</p>
                <p>Инженер</p>
            </div>
        </li>
        <li className={style.navLi}>
            ПОСТУПАЮЩИМ
            <div className={style.dropdownContent}>
                <p>Условия поступления</p>
                <p>Документы</p>
                <p>Экзамены</p>
            </div>
        </li>
        <li className={style.navLi}>
            ВОПРОСЫ-ОТВЕТЫ
            <div className={style.dropdownContent}>
                <p>Частые вопросы</p>
                <p>Ответы на них</p>
            </div>
        </li>
        <li className={style.navLi}>
            КОНТАКТЫ
            <div className={style.dropdownContent}>
                <p>Телефон</p>
                <p>Email</p>
                <p>Адрес</p>
            </div>
        </li>
                    </ul>
                    <ul className={style.mobileLanguages}>
                        <li>EN</li>
                        <li>RU</li>
                        <li>KG</li>
                    </ul>
                </div>
            )}
        </>
    );
};
    