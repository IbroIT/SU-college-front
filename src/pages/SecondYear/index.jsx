import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const SecondYear = () => {
  const projects = [
    { id: 1, title: 'Проект 1', description: 'Описание проекта 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Проект 2', description: 'Описание проекта 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Проект 3', description: 'Описание проекта 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Проекты студентов 2 курса
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
    
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SecondYear;
