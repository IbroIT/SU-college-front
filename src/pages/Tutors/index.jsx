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
import { useTranslation } from "react-i18next"; // Import useTranslation

export const TutorMovement = () => {
  const { t } = useTranslation(); // Destructure the t function from useTranslation

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
              {t('tutor.tutor')} {/* Use translation key */}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          {t('tutor.aboutTutorMovement')} {/* Use translation key */}
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          {t('tutor.description')} {/* Use translation key */}
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          {t('tutor.tutorLeader')} {/* Use translation key */}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            alt={t('tutor.leaderName')} // Use translation key for the leader's name
            src="https://salymbekov.com/wp-content/uploads/2023/02/ramankulova-minura-300x200.jpg" // Ensure the image path is correct
            sx={{
              width: { xs: 240, sm: 260 },
              height: { xs: 240, sm: 260 },
              mb: { xs: 2, sm: 0 },
              mr: { sm: 2 },
            }}
          />
          <Typography paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            {t('tutor.leaderName')} {/* Use translation key */}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TutorMovement;
