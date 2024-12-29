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
} from "@mui/material";
import Icon from '@mui/icons-material/AccessAlarm'; // Placeholder icon, replace with actual ones
import { Box, Grid, Typography, Paper, Button, Card, CardContent, CardMedia  } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";


export const Main = () => {
  const { t } = useTranslation();

  return (
    <AnimatedScrollComponent>
      <MainSlider/>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b3839-768x512.jpg"
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
                    <Grid sx={{marginLeft: '35px'}}>
                    <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6, color: "#555" }}>
                    {t('rector.text5')}
                    </Typography>
                    </Grid>
            
                </Grid>
            </Container>
       {/* New section after MainSlider */}
       <Box sx={{ padding: 4, backgroundColor: '#f4f4f4' }}>
                    <Grid container spacing={4}>
                        {/* Best Teachers Section */}
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: 3, textAlign: 'center' }}>
                                <Icon sx={{ fontSize: 50, color: 'primary.main' }} />
                                <Typography variant="h5" sx={{ marginTop: 2 }}>
                                {t('best_teachers')}
                                                                </Typography>
                                <Typography sx={{ marginTop: 1 }}>
                              {t('best_teachers_description')}
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Modern University Section */}
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: 3, textAlign: 'center' }}>
                                <Icon sx={{ fontSize: 50, color: 'primary.main' }} />
                                <Typography variant="h5" sx={{ marginTop: 2 }}>
                                {t('modern_university')}                            </Typography>
                                <Typography sx={{ marginTop: 1 }}>
                              {t('modern_university_description')}                             </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Welcome Message */}
                <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
       {t('welcome_message')}
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        {t('choose_best_education')}
      </Typography>
      <a href="https://2020.edu.gov.kg/reports?id_university=64"><Button
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
      </Button></a>
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
  );
};
