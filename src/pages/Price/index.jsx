import React from "react";
import { AppBar, Box, Container, Typography, Divider, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export const Price = () => {
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
                            Стоимость обучения
                        </Typography>
                    </motion.div>
                </Box>
            </AppBar>

            <Container sx={{ padding: { xs: "20px", sm: "40px" }, marginTop: "40px" }}>
                <Paper sx={{ padding: "20px", borderRadius: "8px", boxShadow: 3 }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
                        КОНТАКТЫ ПРИЕМНОЙ КОМИССИИ
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px", lineHeight: "1.6" }}>
                        <strong>Адрес:</strong> ул. Малдыбаева, 24б / Ахунбаева, 125 (Международный колледж IT и бизнеса)
                        <br />
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px", lineHeight: "1.6" }}>
                        <strong>Телефоны:</strong>
                        <br />
                        +996 778 99 88 89 (Международный колледж IT и бизнеса)
                        <br />
                        +996 706 99 88 89 (Международный колледж IT и бизнеса)
                    
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        <strong>Email:</strong> info@salymbekov.com
                    </Typography>

                    <Divider sx={{ marginBottom: "20px" }} />

                    <Typography variant="h5" component="h2" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                        Стоимость обучения в Салымбеков университет
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.6" }}>
                        Стоимость обучения в Салымбеков университет определяется в соответствии с Уставом, Стратегическими целями и задачами, Учетной политикой, внутренними документами, а также законами и нормами Кыргызской Республики. В соответствии с указами высших государственных органов, студенты университета имеют право оплачивать стоимость обучения равными частями в течении учебного года.
                    </Typography>


                    <Typography variant="h6" sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}>
                        Международный колледж IT и бизнеса
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Разработка программного обеспечения
                                </Typography>
                                <Typography variant="body2">302 000 сом (3 500 USD)</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Разработка мобильных приложений
                                </Typography>
                                <Typography variant="body2">302 000 сом (3 500 USD)</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: "15px", borderRadius: "8px", boxShadow: 2 }}>
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Разработка мультимедийных приложений
                                </Typography>
                                <Typography variant="body2">302 000 сом (3 500 USD)</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};
