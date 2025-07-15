import React from 'react';
import { useTranslation } from 'react-i18next';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import styles from './Main.module.scss';
import { MainSlider } from '../../components/MainSlider';
import {
  AppBar,
  Toolbar,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import students from '../../components/images/students.jpg';

export const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedScrollComponent>
        <MainSlider />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src={students}
                alt="Ректор"
                sx={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ lineHeight: 1.6, color: "#555" }}>
                {t('rector.text')}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                {t('rector.text2')}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                {t('rector.text3')}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                {t('rector.text4')}
              </Typography>
            </Grid>
            <Grid sx={{ marginLeft: '35px' }}>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                {t('rector.text5')}
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ padding: 4, backgroundColor: '#fff', marginTop: "15px" }}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
            {t('welcome_message')}
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            {t('choose_best_education')}
          </Typography>
          <a href="https://2020.edu.gov.kg/reports?id_university=64">
            <Button
              variant="contained"
              sx={{
                display: 'block',
                margin: '20px auto',
                padding: '10px 20px',
                backgroundColor: '#3f51b5',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#303f9f',
                },
              }}
            >
              {t('applicant_online')}
            </Button>
          </a>
        </Box>

        <div className={styles.Main}>
          <div className={styles.MainContainer}>
            <section className={styles.videoContainer}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </section>
          </div>

          <ImageSection />
        </div>
      </AnimatedScrollComponent>

      {/* Фиксированная кнопка для перехода на страницу вакансий */}
      <Button
        variant="contained"
        color="primary"
        href="/documents/110"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          borderRadius: '50px',
          padding: '12px 24px',
          boxShadow: '0 4px 12px rgba(63,81,181,0.4)',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '1rem',
          zIndex: 1300,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#303f9f',
            boxShadow: '0 6px 18px rgba(48,63,159,0.6)',
            transform: 'scale(1.05)',
          },
        }}
      >
        {t('vacancies_button_text') || 'Вакансии'}
      </Button>
    </>
  );
};
