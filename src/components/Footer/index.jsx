import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.socialNetworksSection}>
                    <h3 className={styles.title}>Salymbekov College</h3>
                    <div className={styles.icons}>
                        <i className={`fab fa-facebook-f ${styles.icon}`} />
                        <i className={`fab fa-twitter ${styles.icon}`} />
                        <i className={`fab fa-instagram ${styles.icon}`} />
                        <i className={`fab fa-linkedin-in ${styles.icon}`} />
                    </div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.contactInfo}>
                        <h4 className={styles.sectionTitle}>Contact Us</h4>
                        <p className={styles.contactItem}>Phone: +123 456 7890</p>
                        <p className={styles.contactItem}>Email: info@salymbekov.edu</p>
                    </div>
                    <div className={styles.aboutUs}>
                        <h4 className={styles.sectionTitle}>About Us</h4>
                        <p className={styles.aboutText}>
                            Salymbekov College is committed to quality education and leadership skills.
                        </p>
                    </div>
                    <div className={styles.faq}>
                        <h4 className={styles.sectionTitle}>FAQ</h4>
                        <p className={styles.faqItem}>1. What programs do you offer?</p>
                        <p className={styles.faqItem}>2. How can I apply for admission?</p>
                        <p className={styles.faqItem}>3. What are the tuition fees?</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p className={styles.copyRight}>
                    © {new Date().getFullYear()} Salymbekov College. All rights reserved.
                </p>
                <p className={styles.developerText}>
                    Developed by M205
                </p>
            </div>
        </>
    );
};
