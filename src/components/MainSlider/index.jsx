import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AnimatedScrollComponent from '../AnimatedComponents';

export const MainSlider = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define slides
    const slides = [
        {
            content: (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(5px)',
                        backgroundImage: 'url("https://data.kaktus.media/image/big/2023-08-02_16-11-54_204758.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            padding: { xs: '20px', sm: '40px' },
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                            textAlign: 'center',
                            width: '100%',
                            maxWidth: '600px',
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#333',
                                marginBottom: '16px',
                                fontWeight: 'bold',
                                fontSize: { xs: '2rem', sm: '2.5rem' },
                            }}
                        >
                            {t('slider.title')}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#555',
                                marginBottom: '24px',
                                fontSize: { xs: '1rem', sm: '1.1rem' },
                            }}
                        >
                            {t('slider.description')}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '30px',
                                fontSize: '1rem',
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                },
                                width: '100%',
                            }}
                        >
                            {t('slider.button')}
                        </Button>
                    </Box>
                </Box>
            ),
        },
    ];

    return (
        <AnimatedScrollComponent>
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '700px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.5s ease-in-out',
                }}
            >
                {slides[currentSlide].content}
            </Box>
        </AnimatedScrollComponent>
    );
};
