import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation

export const AdaptationPrograms = () => {
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
              {t("adaptationprograms.title")} {/* Translated title */}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container
        sx={{
          textAlign: "center", // Center text
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1rem",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {t("adaptationprograms.content.heading")} {/* Translated heading */}
        </Typography>

        <h1 style={{ height: "250px" }}>
          <a
            href={t("adaptationprograms.content.linkUrl")} // Dynamic link URL
            style={{
              color: "#5a738f", // Link color
              textDecoration: "none", // Remove underline
              fontWeight: "bold", // Bold text
            }}
            target="_blank" // Open link in new tab
            rel="noopener noreferrer"
          >
            {t("adaptationprograms.content.linkText")} {/* Translated link text */}
          </a>
        </h1>
      </Container>
    </>
  );
};
