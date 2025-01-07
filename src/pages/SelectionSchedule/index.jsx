import React from "react";
import { AppBar, Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { motion } from "framer-motion";

export const SelectionSchedule = () => {
  const scheduleData = [
    {
      round: "Первый тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "17 июля, 08:00" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "24 июля, 17:00" },
      ],
    },
    {
      round: "Второй тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "30 июля, 08:00" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "07 августа, 17:00" },
      ],
    },
    {
      round: "Третий тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "13 августа, 08:00" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "20 августа, 17:00" },
      ],
    },
    {
      round: "Четвертый тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "26 августа, 08:00" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "28 августа, 17:00" },
      ],
    },
  ];

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
              График отбора и зачисления
            </Typography>
          </motion.div>
        </Box>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Салымбеков университет проводит политику отбора и зачисления абитуриентов в строгом соответствии с нормами и правилами Министерства образования и науки КР, который ежегодно формирует и публикует график проведения туров отбора.
        </Typography>
        <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
          График проведения туров отбора и зачисления абитуриентов 2024-2025 учебный год
        </Typography>
        {scheduleData.map((round, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {round.round}
            </Typography>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Действие</TableCell>
                    <TableCell>Дата</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {round.dates.map((date, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{date.activity}</TableCell>
                      <TableCell>{date.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Container>
    </>
  );
};
