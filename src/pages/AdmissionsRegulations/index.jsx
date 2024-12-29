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
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

export const AdmissionsRegulations = () => {
  const { t } = useTranslation(); // Initialize translation

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
              {t('admissionsRegulations.header')}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ marginTop: "20px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{t('admissionsRegulations.ixInfo')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {t('admissionsRegulations.section1')}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{t('admissionsRegulations.xDocuments')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {t('admissionsRegulations.section2')}
            </Typography>
            <Typography>
              {t('admissionsRegulations.section3')}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};
