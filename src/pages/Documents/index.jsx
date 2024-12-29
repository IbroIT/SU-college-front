import React from "react";
import { AppBar, Box, Container, Typography, Divider, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Documents = () => {
    const { t } = useTranslation();

    return (
        <>
            <AppBar position="static">
                <Box
                    sx={{
                        backgroundColor: "#5a738f",
                        padding: { xs: "60px 20px", sm: "90px" },
                        textAlign: "center",
                        boxShadow: "none",
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                fontSize: { xs: "2.5rem", sm: "3rem" },
                            }}
                        >
                            {t('documents.title')}
                        </Typography>
                    </motion.div>
                </Box>
            </AppBar>

            <Container sx={{ padding: { xs: "20px", sm: "40px" }, marginTop: "40px" }}>
                <Paper sx={{ padding: "20px", borderRadius: "8px", boxShadow: 3 }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        {t('documents.citizensKG')}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <ul>
                            <li>{t('documents.application')}</li>
                            <li>{t('documents.educationDocument')}</li>
                            <li>{t('documents.passportCopy')}</li>
                            <li>{t('documents.photos')}</li>
                            <li>{t('documents.medicalCertificate')}</li>
                            <li>{t('documents.militaryBook')}</li>
                        </ul>
                    </Typography>

                    <Divider sx={{ marginBottom: "20px" }} />

                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        {t('documents.citizensForeign')}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <ul>
                            <li>{t('documents.application')}</li>
                            <li>{t('documents.passportWithVisa')}</li>
                            <li>{t('documents.originalEducationDocument')}</li>
                            <li>{t('documents.notarizedTranslation')}</li>
                            <li>{t('documents.educationEquivalence')}</li>
                            <li>{t('documents.photos')}</li>
                            <li>{t('documents.medicalResults')}</li>
                        </ul>
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};
