import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

export const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const faqs = t("FAQ.Questions", { returnObjects: true });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
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
            {t("FAQ.Header")}
          </Typography>
        </motion.div>
      </Box>

      {/* FAQ Section */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 4 },
          bgcolor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          mt: "20px", // Добавлен margin-top
          zIndex: 1,
          position: "relative",
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                mb: 2,
                boxShadow: 3,
                borderRadius: "10px",
                bgcolor: "#fff",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  bgcolor: expanded === index ? "#5a738f" : "#fff",
                  color: expanded === index ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "#f9f9f9",
                  color: "#000",
                  p: { xs: 1.5, sm: 2 },
                  borderTop: "1px solid #e0e0e0",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};
