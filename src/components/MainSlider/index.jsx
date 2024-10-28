import React, { useState, useEffect } from 'react';
import styles from './MainSlider.module.scss';
import { Box, Typography, Button } from '@mui/material';
import AnimatedScrollComponent from '../AnimatedComponents';
import { useTranslation } from 'react-i18next';

export const MainSlider = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Определяем слайды
    const slides = [
        {
            content: (
                <iframe 
                    className={styles.video} 
                    src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen 
                />
            ),
        },
        {
            content: (
                <div className={styles.slide2Container}>
                    <Box textAlign="left" p={2} className={styles.textContainer}>
                        <Typography variant="h2" className={styles.title}>{t('slider.title')}</Typography>
                        <Button variant="contained" color="primary" className={styles.button}>
                            {t('slider.button')}
                        </Button>
                    </Box>
                </div>
            ),
        },
    ];

    const nextSlide = () => {
        // Проверяем ширину экрана
        const isMobile = window.innerWidth < 768;

        // Изменяем логику переключения слайдов в зависимости от устройства
        if (isMobile) {
            // На мобильных устройствах только первый слайд
            setCurrentSlide(0);
        } else {
            // На десктопе переключаем слайды
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <AnimatedScrollComponent>
            <div className={styles.sliderContainer}>
                <div className={styles.slide}>
                    {slides[currentSlide].content}
                </div>
            </div>
        </AnimatedScrollComponent>
    );
};
