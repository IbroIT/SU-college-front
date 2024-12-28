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

export const InformationSystem = () => {
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
              Информационная система
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ marginTop: "20px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Информационная система eBilim</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Информационная система eBilim – образовательная платформа для студентов
              Международного факультета медицины для полноценного ведения учебного процесса, 
              проведения модулей и экзаменов в онлайн-режиме. Портал предоставляет возможность 
              добавлять нагрузку, редактировать, добавлять и удалять студентов, преподавателей, 
              функции электронных ведомостей, расписания и электронная библиотека. Все элементы 
              интерфейса переведены на три языка: кыргызский, русский и английский. 
              <a href="https://eBilim.salymbekov.com" target="_blank" rel="noopener noreferrer">
                eBilim.salymbekov.com
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Информационная система Edu.salymbekov.com</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Информационная система Edu.salymbekov.com – образовательная платформа для студентов 
              Международного колледжа IT и бизнеса, адаптированный под учебный процесс и образовательную 
              деятельность колледжа и предоставляющий возможность полноценного проведения модулей, экзаменов 
              и размещения информации об учебной деятельности. 
              <a href="https://edu.salymbekov.com" target="_blank" rel="noopener noreferrer">
                edu.salymbekov.com
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Информационная система Lincoln University College</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Информационная система Lincoln University College – образовательный портал партнерского университета 
              Lincoln University College, предоставляющий возможность для студентов колледжа участвовать в совместном 
              учебном процессе, доступ к электронной библиотеке и ресурсам. 
              <a href="http://online.collaborative.lincoln.edu.my/" target="_blank" rel="noopener noreferrer">
                online.collaborative.lincoln.edu.my
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};
