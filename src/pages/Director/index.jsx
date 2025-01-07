import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NurzatManasovna from '../../../src/components/images/nurzat manasovna.jpg'
export const Director = () => {
    const { t } = useTranslation();

    return (
        <AnimatedScrollComponent>
            {/* Header Section */}
            <Box
                sx={{
                    backgroundColor: "#5a738f",
                    padding: { xs: "60px 20px", sm: "90px" },
                    textAlign: "center",
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
                            fontSize: { xs: "1.8rem", sm: "2.5rem" },
                        }}
                    >
{t('director.title')}
                    </Typography>
                </motion.div>
            </Box>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            src={NurzatManasovna}
                            alt="Жунушалиева Нурзат Манасовна"
                            sx={{
                                width: "100%",
                                height: "auto",
                                aspectRatio: "1",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" sx={{ lineHeight: 1.6, color: "#555" }}>
                            {t('director.bio1')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio2')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio3')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio4')}
                        </Typography>
                    </Grid>
                    <Grid sx={{marginLeft: '35px'}}>
                    <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                    {t('director.bio5')}
                    </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio6')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio7')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio8')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio9')}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                        {t('director.bio10')}
                        </Typography>
                    </Grid>
            
                </Grid>
            </Container>
        </AnimatedScrollComponent>
    );
};
