import React from "react";
import styles from './About.module.scss';
import AnimatedScrollComponent from "../AnimatedComponents";
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <AnimatedScrollComponent>
                <div className={styles.About}>
                    <div className={styles.AboutContainer}>
                        <div className={styles.MainText}>
                            <h1>{t('about.title')}</h1>
                            <p>{t('about.subtitle')}</p>
                        </div>
                        <div className={styles.AboutText}>
                            <p>{t('about.description')}</p>
                        </div>
                    </div>
                </div>
            </AnimatedScrollComponent>
        </>
    );
};
