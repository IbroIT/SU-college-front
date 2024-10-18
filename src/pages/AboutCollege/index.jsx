import React from "react";
import { ImageSection } from "../../components/ImageSection";
import styles from './AboutCollege.module.scss';
import { Choices } from "../../components/Choices";
import { MainSlider } from "../../components/MainSlider";
export const AboutCollege = () => {
    return(
        <>
        <MainSlider/>
            <div className={styles.About}>
                <div className={styles.AboutContainer}>
                    <div className={styles.AboutContainerLeftSide}>
                        <h1>Международный колледж IT и бизнеса</h1>
                        <img
                            src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png' 
                            alt='Salymbekov College Logo'
                        />
                    </div>
                </div>
            </div>
            <Choices />
            <ImageSection />
        </>
    )
}
