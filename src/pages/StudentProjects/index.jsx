import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import mirlan from '../../components/images/mirlan.mp4';
import aidai from '../../components/images/aidai.mp4';
import Erkin from '../../pictures/1/WhatsApp Image 2025-01-27 at 15.50.03.jpeg';
import Daniel from '../../pictures/3/1.png';
import Ulukbek from '../../pictures/2/WhatsApp Image 2025-01-27 at 15.58.59.jpeg';

const StudentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Кененбаев Эркин',
      description: 'Описание проекта 1',
      image: Erkin,
      github: 'https://github.com/kanatbekovv77/urbanPet',
      website: 'https://urban-pet-kanatbekovv77s-projects.vercel.app/ ',
    },
    {
      id: 2,
      title: 'Саттаржанов Даниел',
      description: 'Описание проекта 2',
      image: Daniel,
      github: 'https://github.com/sattarzhanovdev/UNAAPARK',
      website: 'https://www.unaapark.ru/ ',
    },
    {
      id: 3,
      title: 'Монолов Улукбек',
      description: 'Описание проекта 3',
      image: Ulukbek,
      github: 'https://github.com/ulukbek200/TotalParts.git ',
      website: ' https://total-parts-webapp.vercel.app',
    },
    {
      id: 4,
      title: 'Проект Мирлана',
      description: 'Описание проекта Мирлана',
      image: mirlan,
      github: null,
      website: null,
    },
    {
      id: 5,
      title: 'Проект Айдай',
      description: 'Описание проекта Айдай',
      image: aidai,
      github: null,
      website: null,
    },
  ];

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: '20px 0' }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Box
              sx={{
                border: '2px solid #ccc',
                borderRadius: '12px',
                padding: '15px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {project.id === 4 || project.id === 5 ? (
                <video
                  src={project.image}
                  width="100%"
                  height="230"
                  controls
                  style={{ borderRadius: '12px' }}
                ></video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  width="100%"
                  height="400"
                  style={{ borderRadius: '12px' }}
                />
              )}
              <Typography variant="h6" sx={{ marginTop: '15px', fontWeight: 'bold' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '10px', color: '#555' }}>
                {project.description}
              </Typography>
              {project.github && project.website && (
                <Box sx={{ marginTop: '15px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: '#1976d2', marginRight: '10px' }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: '#1976d2' }}
                  >
                    Website
                  </a>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StudentProjects;
