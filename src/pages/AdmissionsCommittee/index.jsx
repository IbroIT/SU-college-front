import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export const AdmissionCommittee = () => {
  const { t } = useTranslation();

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
              {t('admissioncommittee.title')}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container
        sx={{
          padding: { xs: "20px", sm: "40px" },
          maxWidth: "900px",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "#333",
          }}
        >
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
       {t('admissioncommittee.address')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
          <ul>
            {t('admissioncommittee.phones', { returnObjects: true }).map((phone, index) => (
              <li key={index}>{phone}</li>
            ))}
          </ul>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
           {t('admissioncommittee.email')}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginTop: "2rem",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "#333",
          }}
        >
          {t('admissioncommittee.welcomeTitle')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          {t('admissioncommittee.welcomeMessage')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          {t('admissioncommittee.aboutMessage')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          {t('admissioncommittee.extracurricularMessage')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          {t('admissioncommittee.finalMessage')}
        </Typography>
      </Container>
    </>
  );
};
