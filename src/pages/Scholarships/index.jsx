import React from "react";
import { AppBar, Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Scholarships = () => {
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
              {t('scholarships.scholarships_and_benefits')}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ padding: "40px 20px", maxWidth: "lg" }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.6rem", sm: "2rem" },
          }}
        >
          {t('scholarships.benefits_policy')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#333",
          }}
        >
          {t('scholarships.social_support_description')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#333",
          }}
        >
          {t('scholarships.social_support_condition')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#5a738f",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          {t('scholarships.student_categories_for_benefits')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>{t('scholarships.category_i')}:</strong> {t('scholarships.category_i_description')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>{t('scholarships.category_ii')}:</strong> {t('scholarships.category_ii_description')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>{t('scholarships.category_iii')}:</strong> {t('scholarships.category_iii_description')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>{t('scholarships.category_iv')}:</strong> {t('scholarships.category_iv_description')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>{t('scholarships.category_v')}:</strong> {t('scholarships.category_v_description')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#5a738f",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          {t('scholarships.commission_composition')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          {t('scholarships.commission_members')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "40px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          {t('scholarships.basis_resolution')}
        </Typography>
      </Container>
    </>
  );
};
