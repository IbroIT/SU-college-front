import React from "react";
import styles from './MainSlider.module.scss';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';

export const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: true,
        draggable: true,
    };

    return (
        <>
            <div className={styles.carouselContainer}>
                <Slider {...settings}>
                    <div className={styles.slide1}>
                    <iframe width="100%" height="1000" src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       
                    </div>

                    <div className={styles.slide2}>
                    <Box textAlign="left" p={2} className={styles.textContainer}>
                            <Typography variant="h2">Почему именно <br /> этот колледж?</Typography>
                            <Typography variant="body1">
                                Здесь вы найдете все необходимые <br />
                                ресурсы для достижения успеха и <br />
                                развития ваших навыков.
                            </Typography>
                            <Button variant="contained" color="primary">Больше</Button>
                        </Box>
                        <div className={styles.slide1Img}>
                            <img src="https://salymbekov.com/wp-content/uploads/2022/07/bc0b3685.jpg" alt="College" className={styles.image} />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}
