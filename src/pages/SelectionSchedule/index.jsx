import React from "react";
import { AppBar, Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { motion } from "framer-motion";

export const SelectionSchedule = () => {
  const scheduleData = [
    {
      round: "Первый тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "18-20 июля" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "20 июля в 14.00 ч." },
        { activity: "Размещение списков абитуриентов, рекомендованных к зачислению", date: "21 июля до 09.00 ч." },
        { activity: "Подтверждение абитуриентами желания быть зачисленным в вуз", date: "21-23 июля до 16.00 ч." },
      ],
    },
    {
      round: "Второй тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "25-27 июля" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "27 июля в 14.00 ч." },
        { activity: "Размещение списков абитуриентов, рекомендованных к зачислению", date: "28 июля до 09.00 ч." },
        { activity: "Подтверждение абитуриентами желания быть зачисленным в вуз", date: "28-30 июля до 16.00 ч." },
      ],
    },
    {
      round: "Третий тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "01-03 августа" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "03 августа в 14.00 ч." },
        { activity: "Размещение списков абитуриентов, рекомендованных к зачислению", date: "04 августа до 09.00 ч." },
        { activity: "Подтверждение абитуриентами желания быть зачисленным в вуз", date: "04-06 августа до 16.00 ч." },
      ],
    },
    {
      round: "Четвертый тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "08-10 августа" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "10 августа в 14.00 ч." },
        { activity: "Размещение списков абитуриентов, рекомендованных к зачислению", date: "11 августа до 09.00 ч." },
        { activity: "Подтверждение абитуриентами желания быть зачисленным в вуз", date: "11-13 августа до 16.00 ч." },
      ],
    },
    {
      round: "Пятый тур",
      dates: [
        { activity: "Регистрация абитуриентов для участия в конкурсе", date: "15-17 августа" },
        { activity: "Завершение регистрации для участия в конкурсе", date: "17 августа в 14.00 ч." },
        { activity: "Размещение списков абитуриентов, рекомендованных к зачислению", date: "18 августа до 09.00 ч." },
        { activity: "Подтверждение абитуриентами желания быть зачисленным в вуз", date: "18-20 августа до 16.00 ч." },
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
          Салымбеков университет проводит политику отбора и зачисления абитуриентов в строгом соответствии с нормами и правилами Министерства образования и науки КР, который ежегодно формирует и публикует график проведения туров отбора и зачисления абитуриентов в высшие учебные заведения КР.
        </Typography>
        <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
          График проведения туров отбора и зачисления абитуриентов в высшие учебные заведения Кыргызской Республики по итогам общереспубликанского тестирования на 2022-2023 учебный год
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