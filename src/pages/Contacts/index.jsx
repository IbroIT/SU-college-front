import React from "react";
import styles from './Contacts.module.scss';
import { useTranslation } from 'react-i18next';
import AnimatedScrollComponent from '../../components/AnimatedComponents'
export const Contacts = () => {
    const { t } = useTranslation();
    
    return (
        <AnimatedScrollComponent>
        <div className={styles.contacts}>
            <div className={styles.contactInfo}>
                <h1 className={styles.contactTitle}>{t('contacts.contactTitle')}</h1>
                <div className={styles.contactDetails}>
                    <p><strong>{t('contacts.address')}</strong> {t('contacts.addressDetails')}</p>
                    <p><strong>{t('contacts.phone')}</strong> {t('contacts.phoneDetails')}</p>
                    <p><strong>{t('contacts.email')}</strong> {t('contacts.emailDetails')}</p>
                </div>
            </div>
            <div className={styles.mapContainer}>
                {/* Замените на встроенную карту или любой другой желаемый контент */}
                <iframe
                    title="location"
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.230977099779!2d30.3144573158217!3d59.93989697930888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjnCsDI4JzE4LjIiTiAzMMKwMjEnMTYuMyJF!5e0!3m2!1sru!2sru!4v1634824840481!5m2!1sru!2sru"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
        </AnimatedScrollComponent>
    );
};

