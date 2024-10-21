import React from "react";
import styles from './Choices.module.scss';
import { Link } from "react-router-dom";
import AnimatedScrollComponent from "../AnimatedComponents";
import { useTranslation } from 'react-i18next';

export const Choices = () => {
    const { t } = useTranslation();

    return (
        <AnimatedScrollComponent>
            <div className={styles.designSections}>
                <Link to='/multimediaprograms' className={styles.link}>
                    <div className={styles.section}>
                        <div className={styles.imageContainer}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3696/3696413.png" alt={t('choices.multimediaApplications')} />
                        </div>
                        <div className={styles.textContainer}>
                            <h3>{t('choices.multimediaApplications')}</h3>
                        </div>
                    </div>
                </Link>
                <Link to='/computerscience' className={styles.link}>
                    <div className={styles.section}>
                        <div className={styles.imageContainer}>
                            <img src="https://cdn-icons-png.flaticon.com/512/4109/4109173.png" alt={t('choices.computerScience')} />
                        </div>
                        <div className={styles.textContainer}>
                            <h3>{t('choices.computerScience')}</h3>
                        </div>
                    </div>
                </Link>
                <Link to='/multimediaprograms' className={styles.link}>
                    <div className={styles.sectionBig}>
                        <div className={styles.imageContainer}>
                            <img src="https://cdn-icons-png.flaticon.com/512/8187/8187010.png" alt={t('choices.multimediaPrograms')} />
                        </div>
                        <div className={styles.textContainer}>
                            <h3>{t('choices.multimediaPrograms')}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </AnimatedScrollComponent>
    );
};
