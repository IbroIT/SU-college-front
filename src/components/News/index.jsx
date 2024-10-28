import React from "react";
import { useTranslation } from 'react-i18next';
import styles from './News.module.scss';

const News = ({ title }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.NewsSection}>
            <h2>{t(title)}</h2>
            <div className={styles.NewsContainer}>
                <div className={styles.NewsItem}>
                    <img
                        src="https://salymbekov.com/wp-content/uploads/2024/09/458082655_18050859841843726_3082619888451672741_n-jpg.webp"
                        alt={t('news.newLibrary.title')}
                        className={styles.NewsImage}
                    />
                    <h3>{t('news.newLibrary.title')}</h3>
                    <p>{t('news.newLibrary.description')}</p>
                </div>
                <div className={styles.NewsItem}>
                    <img
                        src="https://salymbekov.com/wp-content/uploads/2024/09/458145108_18050877337843726_8612339337790275341_n-jpg.webp"
                        alt={t('news.collegeAthletes.title')}
                        className={styles.NewsImage}
                    />
                    <h3>{t('news.collegeAthletes.title')}</h3>
                    <p>{t('news.collegeAthletes.description')}</p>
                </div>
            </div>
        </div>
    );
};

export default News;
