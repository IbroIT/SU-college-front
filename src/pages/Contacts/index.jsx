import React from "react";
import { useTranslation } from 'react-i18next';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import { styled } from '@mui/system';
import styles from './Contacts.module.scss';

const MapContainer = styled('div')({
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '20px',
    '@media (min-width:768px)': {
        height: '400px',
    },
});

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md" className={styles.contacts}>
            <Box className={styles.contactInfo}>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography variant="h5" className={styles.contactTitle}>
                            {t('contacts.contactTitle')}
                        </Typography>
                        <Typography variant="body1" gutterBottom className={styles.contactDetails}>
                            <strong>{t('contacts.address')}</strong> {t('contacts.addressDetails')}
                        </Typography>
                        <Typography variant="body1" gutterBottom className={styles.contactDetails}>
                            <strong>{t('contacts.phone')}</strong> {t('contacts.phoneDetails')}
                        </Typography>
                        <Typography variant="body1" gutterBottom className={styles.contactDetails}>
                            <strong>{t('contacts.email')}</strong> {t('contacts.emailDetails')}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box className={styles.mapContainer}>
                <MapContainer>
                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.148593118557!2d74.56556557642047!3d42.87511111904552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec84e013eb6d1%3A0x7d080ff79995b23f!2z0KDRi9C30YHQutC-0LPQviDRg9GB0LjQvdC10YHRjNC60L7Qs9C-LCDQmtC-0LvQvtC80LXQutGB0LrQsNGPINGD0LsuINCh0LDRgNCw0L0g0JzQsNCz0YDQsA!5e0!3m2!1sru!2skg!4v1700000000000!5m2!1sru!2skg"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </MapContainer>
            </Box>
        </Container>
    );
};
