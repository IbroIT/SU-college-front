import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Mirlan from "../../components/images/WhatsApp Image 2024-10-18 at 16.19.20.jpeg";
import Gulina from "../../components/images/Изображение WhatsApp 2025-01-16 в 18.14.15_b0b41791.jpg";
import Aliya from "../../components/images/aliya.jpg";
import Nurzat from "../../components/images/nurzat.enc";
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { motion } from "framer-motion";
import History from '../../components/images/history.jpg'
import Physics from '../../components/images/physych.jpg'
import Elvira from '../../components/images/elvira.jpg'
import Kunduz from '../../components/images/kunduz.jpg'
import Beishegul from '../../components/images/beishegul.jpg'
import Chynara from '../../components/images/chynara.jpg'
export const Teachers = () => {
  const { t } = useTranslation();

  const teachers = [
    { name: t("teachers.alya"), subject: t("teachers.intro_cs_ai_ml"), image: Aliya },
    { name: t("teachers.mirlan"), subject: t("teachers.oop_database"), image: Mirlan },
    { name: t("teachers.kunduz"), subject: t("teachers.web_development"), image: Kunduz },
    { name: t("teachers.aidai"), subject: t("teachers.web_development"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.zubov"), subject: t("teachers.web_development_react"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.nurgul"), subject: t("teachers.russian_language"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.moloshev"), subject: t("teachers.history"), image: History },
    { name: t("teachers.gulina"), subject: t("teachers.chemistry"), image: Gulina },
    { name: t("teachers.kuzubakova"), subject: t("teachers.physics"), image: Physics },
    { name: t("teachers.eldiyar"), subject: t("teachers.training"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.ulukbek"), subject: t("teachers.english"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.chynara"), subject: t("teachers.algebra"), image: Chynara },
    { name: t("teachers.seitbekova"), subject: t("teachers.english"), image: Beishegul },
    { name: t("teachers.rima"), subject: t("teachers.english"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.komarzhova"), subject: t("teachers.algebra"), image: "https://via.placeholder.com/150" },
    { name: t("teachers.nurzat"), subject: t("teachers.highmath"), image: Nurzat },
    { name: t("teachers.elvira"), subject: t("teachers.english"), image: Elvira },

  ];
  const sortedTeachers = teachers.sort((a, b) => {
    const lastNameA = a.name?.split(" ").pop()?.toLowerCase() || "";
    const lastNameB = b.name?.split(" ").pop()?.toLowerCase() || "";
    return lastNameA.localeCompare(lastNameB, "ru");
  });
  
  
  

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
                    {t('teachers.title')}
                    </Typography>
        </motion.div>
      </Box>

        <Container sx={{ marginTop: '35px'}}>
          <Grid container spacing={4} justifyContent="center">
            {sortedTeachers.map((teacher, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      textAlign: "center",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      transition: "box-shadow 0.3s ease",
                      '&:hover': {
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={teacher.image}
                      alt={teacher.name}
                      sx={{
                        borderRadius: "50%",
                        width: "140px",
                        height: "140px",
                        margin: "16px auto",
                        filter: "grayscale(100%)",
                        transition: "filter 0.3s ease, transform 0.3s ease",
                        '&:hover': {
                          filter: "grayscale(0%)",
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {teacher.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {teacher.subject}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedScrollComponent>
      <Choices />
      <ImageSection />
    </>
  );
};
