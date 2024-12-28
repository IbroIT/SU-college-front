import React from 'react';
import { useTranslation } from 'react-i18next';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import styles from './Main.module.scss';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
export const Main = () => {
  const { t } = useTranslation();

  return (
    <AnimatedScrollComponent>
      <div className={styles.Main}>
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
                <h4>{t('aboutCollege.header.title')}</h4>
              <h7>{t('aboutCollege.header.subtitle')}</h7>
            </Typography>
          </motion.div>
        </Box>

        <div className={styles.MainContainer}>
          <section className={styles.intro}>
            <div className={styles.textOverlay}>
              <h2>{t('aboutCollege.intro.title')}</h2>
              <p>{t('aboutCollege.intro.description')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('aboutCollege.mission.title')}</h2>
            <p>{t('aboutCollege.mission.description')}</p>
          </section>

          <section className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <h3>{t('aboutCollege.videoSection.title')}</h3>
          </section>
    
        </div>

        <Choices />
        <ImageSection />
      </div>
    </AnimatedScrollComponent>
  );
};
