import React from "react";
import { AppBar, Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

export const StudentService = () => {
  return (
    <>
      <AppBar position="static">
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
              Комиссия по социальной поддержке студентов
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      {/* Content Section */}
      <Container
        sx={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "#f4f4f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            textAlign: "justify",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          Основной целью Центра обслуживания студентов является предоставление информации, касательно результатов обучения (справки, трансрипты). Вся информация надежно хранится в ИС Ebilim, по запросу студента заведующий студенческим отделом кадров предоставляет информацию по требованиям студентов.
        </Typography>

        {/* Teacher's Image and Name */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                component="img"
                height="300"
                image="https://salymbekov.com/wp-content/uploads/2022/05/bopushova-asina-toktosunovna-300x200.jpg" // Add the URL of the teacher's image here
                alt="Бопушева Асина Токтосуновна"
                sx={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                  Бопушева Асина Токтосуновна
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Заведующий Студенческим отделом кадров (СОК)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
