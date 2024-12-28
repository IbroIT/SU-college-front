import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

export const TutorMovement = () => {
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
              Тьюторское движение Салымбеков Университет
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          О ТЬЮТОРСКОМ ДВИЖЕНИИ
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Салымбеков университет постоянно поддерживает взаимоподдержку и
          взаимовыручку студентов, особенно старших курсов, готовые оказать любую
          помощь студентам-первокурсникам и младших курсов. Тьюторское движение
          находится под ответственностью Студенческого Совета и является важной
          составляющей учебно-воспитательного и образовательного процессов.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          РУКОВОДИТЕЛЬ ТЬЮТОРСКОГО ДВИЖЕНИЯ
        </Typography>
        
        {/* Добавляем изображение человека */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            alt="Рахманкулова Минура"
            src="https://salymbekov.com/wp-content/uploads/2023/02/ramankulova-minura-300x200.jpg" // Убедитесь, что путь к картинке правильный
            sx={{
              width: { xs: 240, sm: 260 },
              height: { xs: 240, sm: 260 },
              mb: { xs: 2, sm: 0 },
              mr: { sm: 2 },
            }}
          />
          <Typography paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            Рахманкулова Минура – Председатель Студенческого Совета, руководитель
            тьюторского движения.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TutorMovement;
