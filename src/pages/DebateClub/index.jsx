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

export const DebateClub = () => {
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
              {t("debateclub")} {t("university")}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t("about_debateclub")}
        </Typography>
        <Typography paragraph>
          {t("goal_debateclub")}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {t("tasks_debateclub")}
        </Typography>
        <Typography component="ul">
          <li style={{ listStyleType: "inherit" }}>{t("task_1")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("task_2")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("task_3")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("task_4")}</li>
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          {t("debate_technology_advantages")}
        </Typography>
        <Typography component="ul">
          <li style={{ listStyleType: "inherit" }}>{t("advantage_1")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("advantage_2")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("advantage_3")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("advantage_4")}</li>
          <li style={{ listStyleType: "inherit" }}>{t("advantage_5")}</li>
        </Typography>
      </Container>
    </>
  );
};

export default DebateClub;
