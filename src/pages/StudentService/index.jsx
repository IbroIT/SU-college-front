import React from "react";
import { AppBar, Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

export const StudentService = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

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
              {t("studentservice.title")} {/* Translated title */}
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
          {t("studentservice.content")} {/* Translated content */}
        </Typography>

        {/* Teacher's Image and Name */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                component="img"
                height="300"
                image={t("studentservice.teacher.image")} // Dynamic image URL
                alt={t("studentservice.teacher.name")} // Dynamic alt text
                sx={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                  {t("studentservice.teacher.name")} {/* Translated teacher name */}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t("studentservice.teacher.position")} {/* Translated teacher position */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
