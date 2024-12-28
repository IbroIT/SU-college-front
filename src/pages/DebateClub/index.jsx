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
              Дебатный клуб Салымбеков Университет
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          О ДЕБАТНОМ КЛУБЕ
        </Typography>
        <Typography paragraph>
          Цель дебатного клуба – развитие у студентов Салымбеков Университет
          критического мышления для решения различных проблем в профессиональной
          деятельности и в практических жизненных ситуациях, т.е. тех навыков,
          которые не могут дать или дают в недостаточной степени традиционные
          образовательные программы.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ЗАДАЧИ ДЕБАТНОГО КЛУБА
        </Typography>
        <Typography component="ul">
          <li style={{listStyleType:'inherit'}}>обучающие, так как это способствуют закреплению, актуализации полученных ранее знаний, овладению новыми знаниями, умениями и навыками;</li>
          <li style={{listStyleType:'inherit'}}>развивающие, так как это способствует развитию интеллектуальных, лингвистических качеств, творческих способностей. Дебаты развивают логику, критическое мышление, позволяют сформировать системное видение проблемы, наличие взаимосвязей событий и явлений, различных аспектов их рассмотрения;</li>
          <li style={{listStyleType:'inherit'}}>воспитательные, так как это способствует формированию культуры спора, терпимости, признанию множественности подходов к решению проблемы;</li>
          <li style={{listStyleType:'inherit'}}>коммуникативные, так как учебная деятельность осуществляется в межличностном общении, обучение происходит в процессе совместной деятельности.</li>
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          ПРЕИМУЩЕСТВА ТЕХНОЛОГИИ ДЕБАТА
        </Typography>
        <Typography component="ul">
          <li style={{listStyleType:'inherit'}}>формирование речевого критического мышления обучаемых;</li>
          <li style={{listStyleType:'inherit'}}>дифференциация содержания учебного материала;</li>
          <li style={{listStyleType:'inherit'}}>обеспечение индивидуализации учебной деятельности;</li>
          <li style={{listStyleType:'inherit'}}>разнообразие форм и методов обучения;</li>
          <li style={{listStyleType:'inherit'}}>формирование обобщенных практических умений обучаемых.</li>
        </Typography>

      </Container>
    </>
  );
};

export default DebateClub;
