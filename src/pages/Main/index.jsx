import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import styles from './Main.module.scss'; 
import { ImageSection } from '../../components/ImageSection';
import { MainSlider } from '../../components/MainSlider';
export const Main = () => {
    return (
        <>
        <MainSlider/>

        <div className={styles.designSections}>
    <div className={styles.section}>
        <div className={styles.imageContainer}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/gu-bei-chen/it-4.png" alt="Мультимедийные приложения" />
        </div>
        <div className={styles.textContainer}>
            <h3>Мультимедийные приложения</h3>
        </div>
    </div>
    <div className={styles.section}>
        <div className={styles.imageContainer}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/gu-bei-chen/it-4.png" alt="Комьютерная наука" />
        </div>
        <div className={styles.textContainer}>
            <h3>Комьютерная наука</h3>
        </div>
    </div>
    <div className={styles.sectionBig}>
        <div className={styles.imageContainer}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/gu-bei-chen/it-4.png" alt="Мультимедийные программы" />
        </div>
        <div className={styles.textContainer}>
            <h3>Мультимедийные программы</h3>
        </div>
    </div>
</div>


    
        <ImageSection/>
            </>
    );
};
