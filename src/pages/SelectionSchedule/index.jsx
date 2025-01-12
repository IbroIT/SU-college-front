import React from "react";
import { useTranslation } from "react-i18next";
import { AppBar, Box, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { motion } from "framer-motion";

export const SelectionSchedule = () => {
  const { t } = useTranslation();
  const scheduleData = [
    {
      round: t("selectionSchedule.rounds.round1"),
      dates: [
        {
          activity: t("selectionSchedule.dates.registrationStart"),
          date: t("selectionSchedule.dates.firstRound"),
        },
        {
          activity: t("selectionSchedule.dates.registrationEnd"),
          date: t("selectionSchedule.dates.firstRoundEnd"),
        },
      ],
    },
    {
      round: t("selectionSchedule.rounds.round2"),
      dates: [
        {
          activity: t("selectionSchedule.dates.registrationStart"),
          date: t("selectionSchedule.dates.secondRoundStart"),
        },
        {
          activity: t("selectionSchedule.dates.registrationEnd"),
          date: t("selectionSchedule.dates.secondRoundEnd"),
        },
      ],
    },
    {
      round: t("selectionSchedule.rounds.round3"),
      dates: [
        {
          activity: t("selectionSchedule.dates.registrationStart"),
          date: t("selectionSchedule.dates.thirdRoundStart"),
        },
        {
          activity: t("selectionSchedule.dates.registrationEnd"),
          date: t("selectionSchedule.dates.thirdRoundEnd"),
        },
      ],
    },
    {
      round: t("selectionSchedule.rounds.round4"),
      dates: [
        {
          activity: t("selectionSchedule.dates.registrationStart"),
          date: t("selectionSchedule.dates.fourthRoundStart"),
        },
        {
          activity: t("selectionSchedule.dates.registrationEnd"),
          date: t("selectionSchedule.dates.fourthRoundEnd"),
        },
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
            boxShadow: "none"
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
                fontSize: { xs: "2.5rem", sm: "3rem" }
              }}
            >
              {t("selectionSchedule.title")}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          {t("selectionSchedule.description")}
        </Typography>
        <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
          {t("selectionSchedule.subtitle")}
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
                    <TableCell>{t("selectionSchedule.tableHeaders.action")}</TableCell>
                    <TableCell>{t("selectionSchedule.tableHeaders.date")}</TableCell>
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
