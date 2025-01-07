import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedScrollComponent from "../../components/AnimatedComponents";


const MapContainer = styled(motion.div)({
    width: "100%",
    height: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "20px",
    "@media (min-width:768px)": {
        height: "400px",
    },
});

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
        <AnimatedScrollComponent>
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
                        {t("Contacts.Introduce")}
                    </Typography>
                </motion.div>
            </Box>

            <Container
                maxWidth="md"
                sx={{ mt: 4 }}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.6, color: "#555" }}
                    component={motion.div}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t("Contacts.WelcomeMessage")}
                </Typography>

                {/* Contact Information */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <motion.div variants={cardVariants}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        <HomeIcon
                                            sx={{
                                                verticalAlign: "middle",
                                                mr: 1,
                                                color: "#00695c",
                                            }}
                                        />
                                        {t("Contacts.AddressTitle")}
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        {t("Contacts.FactualAddress")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <motion.div variants={cardVariants}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        <PhoneIcon
                                            sx={{
                                                verticalAlign: "middle",
                                                mr: 1,
                                                color: "#00695c",
                                            }}
                                        />
                                        {t("Contacts.PhoneTitle")}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                    +996 706 99 88 89
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                                        <EmailIcon
                                            sx={{
                                                verticalAlign: "middle",
                                                mr: 1,
                                                color: "#00695c",
                                            }}
                                        />
                                        {t("Contacts.EmailTitle")}
                                    </Typography>
                                    <Typography variant="body1">
                                        {t("Contacts.Email")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>

                <MapContainer
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
>
    <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.3393070805881!2d74.6000781418017!3d42.84418970298898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec987f324329b%3A0x2cd99bcd0df5fc1f!2z0KHQsNC70YvQvNCx0LXQutC-0LIg0KPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2skg!4v1736154683428!5m2!1sru!2skg"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
    ></iframe>
</MapContainer>

            </Container>
            </AnimatedScrollComponent>
        </>
    );
};
