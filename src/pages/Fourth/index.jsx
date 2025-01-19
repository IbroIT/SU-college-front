import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const FourthYear = () => {
  return (
    <Container>

      <Grid container spacing={4} justifyContent="center">
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
              src="https://www.instagram.com/reel/DDEGsKvtzD6/embed"
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
              justifyContent: 'center',
            }}
          >
            <iframe
              src="https://www.instagram.com/reel/DDL3Ky8NWmL/embed"
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
      </Grid>
    </Container>
  );
};

export default FourthYear;
