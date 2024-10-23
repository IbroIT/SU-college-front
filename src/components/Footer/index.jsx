import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.socialNetworksSection}>
                    <h3 className={styles.title}>{t('footer.title')}</h3>
                    <div className={styles.icons}>
                        <i className={`fab fa-facebook-f ${styles.icon}`} />
                        <i className={`fab fa-twitter ${styles.icon}`} />
                        <i className={`fab fa-instagram ${styles.icon}`} />
                        <i className={`fab fa-linkedin-in ${styles.icon}`} />
                    </div>
                </div>
                
                <div className={styles.infoSection}>
                    <Link to='/contacts' className={styles.linkCustom}>
                    <div className={styles.contactInfo}>
                        <h4 className={styles.sectionTitle}>{t('footer.contactUs')}</h4>
                        <p className={styles.contactItem}>{t('footer.phone')}</p>
                        <p className={styles.contactItem}>{t('footer.email')}</p>
                    </div>
                    </Link>
                    <Link to='/college' className={styles.linkCustom}>
                    <div className={styles.aboutUs}>
                      <h4 className={styles.sectionTitle}>{t('footer.aboutUs')}</h4>
                      <p className={styles.aboutText}>
                        {t('footer.aboutText')}
                      </p>
                    </div>
                  </Link>
                  
                  <Link to="/faq" className={styles.linkCustom}>
                    <div className={styles.faq}>
                      <h4 className={styles.sectionTitle}>{t('footer.faq')}</h4>
                      {t('footer.faqItems', { returnObjects: true }).map((item, index) => (
                        <p key={index} className={styles.faqItem}>{item}</p>
                      ))}
                    </div>
                  </Link>

                </div>
            </div>
            <div className={styles.footerBottom}>
                <p className={styles.copyRight}>
                    {t('footer.copyRight', { year: new Date().getFullYear() })}
                </p>
                <p className={styles.developerText}>
                    {t('footer.developer')}
                </p>
            </div>
        </>
    );
};
