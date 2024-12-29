import React from "react";
import { ImageSection } from "../../components/ImageSection";
import styles from './AboutCollege.module.scss';
import { Choices } from "../../components/Choices";
import { About } from "../../components/AboutCollege";
import { MainSlider } from "../../components/MainSlider";
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import Icon from '@mui/icons-material/AccessAlarm'; // Placeholder icon, replace with actual ones

export const AboutCollege = () => {
    const { t } = useTranslation(); 

    return(
        <>
            <AnimatedScrollComponent>
                <MainSlider/>
                 
                {/* New section after MainSlider */}
                <Box sx={{ padding: 4, backgroundColor: '#f4f4f4' }}>
                    <Grid container spacing={4}>
                        {/* Best Teachers Section */}
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: 3, textAlign: 'center' }}>
                                <Icon sx={{ fontSize: 50, color: 'primary.main' }} />
                                <Typography variant="h5" sx={{ marginTop: 2 }}>
                                Лучшие преподаватели
                                                                </Typography>
                                <Typography sx={{ marginTop: 1 }}>
                                В университете трудятся самые квалифицированные преподаватели
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Modern University Section */}
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ padding: 3, textAlign: 'center' }}>
                                <Icon sx={{ fontSize: 50, color: 'primary.main' }} />
                                <Typography variant="h5" sx={{ marginTop: 2 }}>
                                Современный университет                                </Typography>
                                <Typography sx={{ marginTop: 1 }}>
                                Университет оснащен самыми передовыми оборудованиями для закрепления учебных материалов                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Welcome Message */}
                <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Добро пожаловать, Абитуриент-2023!
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        Выбирая нас - вы выбираете лучшее качество образования!
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
        Абитуриент онлайн
      </Button></a>
    </Box>
                <About/>
                <ImageSection />
            
            </AnimatedScrollComponent>
        </>
    );
}
