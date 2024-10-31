import React from "react";
import styles from './Director.module.scss';
import { ImageSection } from "../../components/ImageSection";
import { useTranslation } from 'react-i18next'; // Importing the translation hook
import AnimatedScrollComponent from "../../components/AnimatedComponents";
export const Director = () => {
    const { t } = useTranslation(); // Using the translation hook

    return (
        <>
        <AnimatedScrollComponent>
        <div className={styles.directorContainer}>
            <h1 className={styles.title}>{t('director.title')}</h1>
            <div className={styles.image}>
                <img src="https://salymbekov.com/wp-content/uploads/2023/02/zhunushalieva-nurzat-manasovna-e1676031324273.jpg" alt={t('director.title')} className={styles.mainImage} />
            </div>
            <div className={styles.content}>
                <p className={styles.bio}>
                    {t('director.bio1')}
                </p>
                <p className={styles.bio}>
                    {t('director.bio2')}
                </p>
                <p className={styles.bio}>
                    {t('director.bio3')}
                </p>
                <p className={styles.bio}>
                    {t('director.bio4')}
                </p>
            </div>
        </div>
        </AnimatedScrollComponent>
        <ImageSection />
        </>
    );
}
