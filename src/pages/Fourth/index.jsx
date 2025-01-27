import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import mirlan from '../../components/images/mirlan.mp4';
import aidai from '../../components/images/aidai.mp4'
const FourthYear = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" height="600px">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '2px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <video
              src={mirlan}
              width="100%"
              height="230"
              controls
              style={{ borderRadius: '8px' }}
            ></video>
            <Typography variant="h6" sx={{ marginTop: '10px' }}>
              Проект Мирлана
            </Typography>
            <Typography variant="body1">
              Этот проект посвящён созданию инновационных решений в области технологий и
              программирования. Видео демонстрирует основные достижения и возможности проекта.
            </Typography>
          </Box>
        </Grid>
   {/* Третий элемент: Instagram видео */}
   <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '2px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <iframe
              src="https://www.instagram.com/p/DCmAl1tNfxC/embed"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Instagram Video"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '2px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <video
              src={aidai}
              width="100%"
              height="230"
              controls
              style={{ borderRadius: '8px' }}
            ></video>
            <Typography variant="h6" sx={{ marginTop: '10px' }}>
              Проект Айдай
            </Typography>
            <Typography variant="body1">
              Этот проект посвящён созданию инновационных решений в области технологий и
              программирования. Видео демонстрирует основные достижения и возможности проекта.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourthYear;
