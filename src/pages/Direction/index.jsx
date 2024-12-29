import React from "react";
import { AppBar, Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Direction = () => {
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
              {t("direction.heading")}
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
          {t("direction.contacts")}
        </Typography>

        <Divider sx={{ marginBottom: "20px" }} />

        <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: 1.8 }}>
          <strong>{t("direction.address.label")}</strong>
          <br />
          {t("direction.address.value")}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: 1.8 }}>
          <strong>{t("direction.phones.label")}</strong>
          <br />
          <strong>{t("direction.phones.value1")}</strong>
          <br />
          <strong>{t("direction.phones.value2")}</strong>
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "40px", lineHeight: 1.8 }}>
          <strong>{t("direction.email.label")}</strong>{" "}
          <a href="mailto:info@salymbekov.com">{t("direction.email.value")}</a>
        </Typography>

        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.6rem", sm: "2rem" },
          }}
        >
          {t("direction.programs")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginBottom: "10px",
            fontWeight: "bold",
            color: "#5a738f",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          {t("direction.college")}
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
          <strong>{t("direction.program1")}</strong> {t("direction.program1.details")}
          <br />
          <strong>{t("direction.program2")}</strong> {t("direction.program2.details")}
          <br />
          <strong>{t("direction.program3")}</strong> {t("direction.program3.details")}
        </Typography>
      </Container>
    </>
  );
};
