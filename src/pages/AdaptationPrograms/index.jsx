import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const AdaptationPrograms = () => {
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
              Адаптационные программы
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container
        sx={{
          textAlign: "center", // Центрирование текста
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
          Ознакомьтесь с адаптационной программой:
        </Typography>

        <h1 style={{height: "250px"}}>
          <a
            href="https://salymbekov.com/wp-content/uploads/2024/06/adobe-scan-12-ijunja-2024-g.-1.html"
            style={{
              color: "#5a738f", // Цвет ссылки
              textDecoration: "none", // Убираем подчеркивание
              fontWeight: "bold", // Сделать текст жирным
            }}
            target="_blank" // Открыть ссылку в новой вкладке
            rel="noopener noreferrer"
          >
            Адаптационная программа 2023-2024 г.
          </a>
        </h1>
      </Container>
    </>
  );
};
