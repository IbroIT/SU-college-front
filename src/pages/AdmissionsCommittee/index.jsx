import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const AdmissionCommittee = () => {
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
              Приемная комиссия
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container
        sx={{
          padding: { xs: "20px", sm: "40px" },
          maxWidth: "900px",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "#333",
          }}
        >
          Контакты приемной комиссии
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
          <strong>Адрес:</strong> ул. Малдыбаева, 24б / Ахунбаева, 125 (Международный колледж IT и бизнеса) / Американский институт технологий “AIT”
          <br />

        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
          <strong>Телефоны:</strong>
          <ul>
            <li>+996 778 99 88 89 (Международный колледж IT и бизнеса)</li>
            <li>+996 706 99 88 89 (Международный колледж IT и бизнеса)</li>
          </ul>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginBottom: "1.5rem",
          }}
        >
          <strong>Email:</strong> info@salymbekov.com
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginTop: "2rem",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "#333",
          }}
        >
          Дорогие Абитуриенты!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Салымбеков Университет рад приветствовать Вас в новом учебном году и с радостью открывает для Вас свои двери. Университет является современным инновационным образовательным учреждением, аккредитованным в соответствии с международными стандартами образования, и предоставляющим качественное и передовое высшее образование в сфере IT, медицины, бизнеса, развития личностного роста и лидерских качеств.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Основанный в 2019 году, как продолжение образовательной деятельности Фонда Аскара Салымбекова, Салымбеков университет имеет все материальные, технические и человеческие ресурсы для подготовки квалифицированных специалистов в сфере IT, бизнеса и медицины. На базе Салымбеков университет успешно функционируют Международный факультет медицины и Международный колледж IT и бизнеса, Бизнес школа Салымбекова с региональными филиалами по всей республике.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Университет уделяет огромное внимание внеучебной деятельности студентов. Так, студенты активно участвуют в ведении проекта ENACTUS, различных IT мероприятиях совместно с другими студентами, ежедневно ведутся тренинги Бизнес школы по развитию лидерских качеств, личностного роста и интеллектуального развития. Для укрепления здоровья студенты могут играть футбол, посещать тренажерные залы на базе спорткомплекса «Дордой спорт», регулярно проводятся неформальные встречи на природе для обеспечения культурного отдыха студентов.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Добро пожаловать в Салымбеков университет!
        </Typography>
      </Container>
    </>
  );
};
