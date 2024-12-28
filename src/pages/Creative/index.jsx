import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export const CreativeTeams = () => {
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
              Творческие коллективы и кружки Салымбеков Университет
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          О ТВОРОЧЕСКИХ КОЛЛЕКТИВАХ И КРУЖКАХ
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Для укрепления учебно-воспитательной, образовательной и научной
          деятельности Салымбеков университет предоставляет своим студентам
          возможность участия в творческих коллективах, кружках в соответствии
          с их интересами и желаниями.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          Доступные кружки:
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Танцы
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Клуб разговорного английского языка (english talking club)
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Дебаты и лидерские качества
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Киберспорт
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}>
              Спорт и шахматы
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreativeTeams;
