import React from "react";
import { AppBar, Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Resources = () => {
  const { t } = useTranslation(); // Initialize the translation function

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
              {t('educationalResources.title')} {/* Using translation key */}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>
      <Container
        sx={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#333',
            marginBottom: '1rem',
            textAlign: 'justify',
            lineHeight: '1.6',
          }}
        >
          {t('educationalResources.intro')} {/* Using translation key */}
        </Typography>
      </Container>
      <Container sx={{ padding: "20px" }}>
        <Grid container spacing={4}>
          {t('educationalResources.resources', { returnObjects: true }).map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={resource.image}
                  alt={resource.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                    {resource.title} {/* Direct access of title */}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {resource.description} {/* Direct access of description */}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
