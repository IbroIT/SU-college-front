import React from "react";
import { AppBar, Box, Container, Typography, Divider, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

export const Documents = () => {
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
                            Необходимые документы для поступления
                        </Typography>
                    </motion.div>
                </Box>
            </AppBar>

            <Container sx={{ padding: { xs: "20px", sm: "40px" }, marginTop: "40px" }}>
                <Paper sx={{ padding: "20px", borderRadius: "8px", boxShadow: 3 }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        Для граждан Кыргызской Республики:
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <ul>
                            <li>Заявление на имя ректора Учреждения «Салымбеков Университет» (образец);</li>
                            <li>Документ государственного образца о среднем общем или среднем профессиональном образовании (аттестат или диплом);</li>
                            <li>Копия паспорта;</li>
                            <li>2 фото (4×6 см), 4 фото (3×4 см);</li>
                            <li>Медицинская справка 086-У;</li>
                            <li>Военный билет или приписное свидетельство;</li>
                        </ul>
                    </Typography>

                    <Divider sx={{ marginBottom: "20px" }} />

                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        Для граждан стран ближнего и дальнего зарубежья:
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <ul>
                            <li>Заявление на имя ректора Учреждения «Салымбеков Университет» (образец);</li>
                            <li>Паспорт с въездной визой, соответствующей требованиям законодательства КР и его копию;</li>
                            <li>Оригинал документа о полном среднем образовании с указанием изучаемых предметов и оценок (баллов) и нотариально заверенную копию;</li>
                            <li>Нотариально заверенный перевод документа о полном среднем образовании на официальный язык КР;</li>
                            <li>Справку из Министерства Образования и Науки КР об эквивалентности полного среднего образования;</li>
                            <li>2 фото (4×6 см), 4 фото (3×4 см);</li>
                            <li>Результаты мед обследования;</li>
                        </ul>
                    </Typography>
                </Paper>
            </Container>
        </>
    );
};
