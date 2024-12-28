    import React from "react";
    import { ImageSection } from "../../components/ImageSection";
    import styles from './AboutCollege.module.scss';
    import { Choices } from "../../components/Choices";
    import { About } from "../../components/AboutCollege";
    import { MainSlider } from "../../components/MainSlider";
    import AnimatedScrollComponent from "../../components/AnimatedComponents";
    import { useTranslation } from 'react-i18next';

    export const AboutCollege = () => {
        const { t } = useTranslation(); 
        return(
            <>
            <MainSlider/>
            <AnimatedScrollComponent>
                </AnimatedScrollComponent>
                <Choices />
                <About/>
                <ImageSection />
            </>
        )
    }
