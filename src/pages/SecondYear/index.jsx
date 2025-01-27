import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Erkin from '../../pictures/1/WhatsApp Image 2025-01-27 at 15.50.03.jpeg';
import Daniel from '../../pictures/3/1.png';
import Ulukbek from '../../pictures/2/WhatsApp Image 2025-01-27 at 15.58.59.jpeg';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledMedia = styled(CardMedia)({
  height: 200,
  objectFit: 'cover',
});

const StyledContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: '16px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '8px 4px',
  backgroundColor: theme.palette.grey[700],
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[800],
  },
}));

const SecondYear = () => {
  const projects = [
    {
      id: 1,
      title: 'Кененбаев Эркин',
      description: 'Описание проекта 2',
      image: Erkin,
      github: 'https://github.com/erkin-profile',
      website: 'https://erkin-website.com',
    },
    {
      id: 2,
      title: 'Саттаржанов Даниел',
      description: 'Описание проекта 2',
      image: Daniel,
      github: 'https://github.com/daniel-profile',
      website: 'https://daniel-website.com',
    },
    {
      id: 3,
      title: 'Монолов Улукбек',
      description: 'Описание проекта 3',
      image: Ulukbek,
      github: 'https://github.com/ulukbek-profile',
      website: 'https://ulukbek-website.com',
    },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Проекты студентов 2 курса
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <StyledCard>
              <StyledMedia
                component="img"
                sx={{height: "400px", width: "500px"}}
                image={project.image}
                alt={project.title}
              />
              <StyledContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {project.description}
                </Typography>
                <div>
                  <StyledButton
                    variant="contained"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Сайт
                  </StyledButton>
                </div>
              </StyledContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SecondYear;
