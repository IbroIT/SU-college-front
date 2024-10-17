import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import style from './Header.module.scss';

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
                    <li className={style.navLi}>КОЛЛЕДЖ</li>
                    <li className={style.navLi}>ПРОФЕССИИ</li>
                    <li className={style.navLi}>ПОСТУПАЮЩИМ</li>
                    <li className={style.navLi}>ВОПРОСЫ-ОТВЕТЫ</li>
                    <li className={style.navLi}>КОНТАКТЫ</li>
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
                        <li>КОЛЛЕДЖ</li>
                        <li>ПРОФЕССИИ</li>
                        <li>ПОСТУПАЮЩИМ</li>
                        <li>ВОПРОСЫ-ОТВЕТЫ</li>
                        <li>КОНТАКТЫ</li>
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
    