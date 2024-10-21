    import React from "react";
    import { ImageSection } from "../../components/ImageSection";
    import styles from './AboutCollege.module.scss';
    import { Choices } from "../../components/Choices";
    import { About } from "../../components/AboutCollege";
    import { MainSlider } from "../../components/MainSlider";
    import AnimatedScrollComponent from "../../components/AnimatedComponents";
    import { useTranslation } from 'react-i18next';

    export const AboutCollege = () => {
        const { t } = useTranslation(); 
        return(
            <>
            <MainSlider/>
            <AnimatedScrollComponent>
                <div className={styles.About}>
                    <div className={styles.AboutContainer}>
                        <div className={styles.AboutContainerLeftSide}>
                        <h1>{t('about.title')}</h1>
                        <img
                                src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png' 
                                alt='Salymbekov College Logo'
                            />
                        </div>
                    </div>
                </div>
                </AnimatedScrollComponent>
                <Choices />
                <About/>
                <ImageSection />
            </>
        )
    }
