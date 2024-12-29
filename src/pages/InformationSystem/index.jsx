import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const InformationSystem = () => {
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
              {t("informationSystem.title")}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ marginTop: "20px" }}>
        {t("informationSystem.sections", { returnObjects: true }).map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {section.description}{" "}
                <a href={`https://${section.link}`} target="_blank" rel="noopener noreferrer">
                  {section.link}
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};
