import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const SocialSupport = () => {
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
              {t("socialsupport.title")}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

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
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#333",
            marginBottom: "1rem",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          {t("socialsupport.general_provisions")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            textAlign: "justify",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {t("socialsupport.description")}
          <br />
          <br />
          {t("socialsupport.purpose")}
          <br />
          <br />
          {t("socialsupport.benefits")}
          <br />
          <br />
          {t("socialsupport.types_of_benefits")}
          <br />
          <br />
          {t("socialsupport.support_decision")}
          <br />
          <br />
          {t("socialsupport.approval_process")}
          <br />
          <br />
          {t("socialsupport.financial_criteria")}
          <br />
          <br />
          {t("socialsupport.deferral_option")}
        </Typography>
      </Container>
    </>
  );
};
