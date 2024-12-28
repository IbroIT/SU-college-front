import React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Instructions = () => {
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
              Инструкция и положения
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container
        sx={{
          padding: { xs: "20px", sm: "40px" },
          textAlign: "left",
          maxWidth: "800px",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1rem",
            color: "#333",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Ресурсные базы и ресурсы Салымбеков университет руководствуются
          следующими инструкциями и положениями при ведении образовательной и
          учебно-воспитательной деятельности.
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            textAlign: "justify",
          }}
        >
          Эти положения помогают обеспечить эффективность учебного процесса, способствуют
          улучшению образовательных стандартов и направлены на поддержание высокого
          качества образования. С учетом изменений в законодательстве, а также
          рекомендаций Министерства образования, Салымбеков университет постоянно
          обновляет и адаптирует свои методические материалы и инструкции для
          обеспечения студентов актуальной информацией.
        </Typography>
      </Container>
    </>
  );
};
