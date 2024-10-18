import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import styles from './Main.module.scss'; 
import { ImageSection } from '../../components/ImageSection';
import { MainSlider } from '../../components/MainSlider';
import { Choices } from '../../components/Choices';
export const Main = () => {
    return (
        <>
        <MainSlider/>    
        <Choices/>
        <ImageSection/>
            </>
    );
};
