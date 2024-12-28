import React from "react";
import { AppBar, Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export const Direction = () => {
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
              Направления подготовки
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
          КОНТАКТЫ ПРИЕМНОЙ КОМИССИИ
        </Typography>

        <Divider sx={{ marginBottom: "20px" }} />

        <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: 1.8 }}>
          <strong>Адрес:</strong>
          <br />
          ул. Малдыбаева, 24б / Ахунбаева, 125 (Международный колледж IT и бизнеса)
          <br />
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: 1.8 }}>
          <strong>Телефоны:</strong>
          <br />
          <strong>+996 778 99 88 89</strong> (Международный колледж IT и бизнеса)
          <br />
          <strong>+996 706 99 88 89</strong> (Международный колледж IT и бизнеса)
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "40px", lineHeight: 1.8 }}>
          <strong>Email:</strong> <a href="mailto:info@salymbekov.com">info@salymbekov.com</a>
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
          Направления подготовки
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
          Международный колледж IT и бизнеса
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
          <strong>Компьютерная наука (Computer Science)</strong> (срок обучения: 1 год 10 мес., 2 года 10 мес.) Экспериментальный учебный план
          <br />
          <strong>Мультимедийные программы (Multimedia programs)</strong> (срок обучения: 1 год 10 мес., 2 года 10 мес.) Экспериментальный учебный план
          <br />
          <strong>Мобильные вычисления (Mobile Computing)</strong> (срок обучения: 1 год 10 мес., 2 года 10 мес.) Экспериментальный учебный план
        </Typography>
      </Container>
    </>
  );
};
