import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <Box className={styles.socialNetworksSection}>
                    <Typography variant="h3" className={styles.title}>Salymbekov College</Typography>
                    <div className={styles.icons}>
                        <i className={`fab fa-facebook-f ${styles.icon}`} />
                        <i className={`fab fa-twitter ${styles.icon}`} />
                        <i className={`fab fa-instagram ${styles.icon}`} />
                        <i className={`fab fa-linkedin-in ${styles.icon}`} />
                    </div>
                </Box>
                <Box className={styles.infoSection}>
                    <Box className={styles.contactInfo}>
                        <Typography variant="subtitle1" className={styles.sectionTitle}>Contact Us</Typography>
                        <Typography variant="body2" className={styles.contactItem}>Phone: +123 456 7890</Typography>
                        <Typography variant="body2" className={styles.contactItem}>Email: info@salymbekov.edu</Typography>
                    </Box>
                    <Box className={styles.aboutUs}>
                        <Typography variant="subtitle1" className={styles.sectionTitle}>About Us</Typography>
                        <Typography variant="body2" className={styles.aboutText}>
                            Salymbekov College is committed to quality education and leadership skills.
                        </Typography>
                    </Box>
                    <Box className={styles.faq}>
                        <Typography variant="subtitle1" className={styles.sectionTitle}>FAQ</Typography>
                        <Typography variant="body2" className={styles.faqItem}>1. What programs do you offer?</Typography>
                        <Typography variant="body2" className={styles.faqItem}>2. How can I apply for admission?</Typography>
                        <Typography variant="body2" className={styles.faqItem}>3. What are the tuition fees?</Typography>
                    </Box>
                </Box>
            </div>
            <Box className={styles.footerBottom}>
                <Typography variant="body2" className={styles.copyRight}>
                    © {new Date().getFullYear()} Salymbekov College. All rights reserved.
                </Typography>
                <Typography variant="body2" className={styles.developerText}>
                    Developed by M205
                </Typography>
            </Box>
        </>
    );
};
