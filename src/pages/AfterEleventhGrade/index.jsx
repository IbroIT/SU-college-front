import React from "react";
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import styles from '../AftrerNinthGrade/AfterNinthGrade.module.scss'
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { useTranslation } from "react-i18next";

export const AfterEleventhGrade = () => {
    const { t } = useTranslation();

    return (
        <>
            <AnimatedScrollComponent>
                <div className={styles.AfterNinthGrade}>
                    <div className={styles.AfterNinthGradeContainer}>
                        <h1>{t('afterEleventhGrade.header.title')}</h1>

                        {t('afterEleventhGrade.steps', { returnObjects: true }).map((step, index) => (
                            <div key={index}>
                                <h1>{step.step}</h1>
                                <p>{step.description}</p>
                                <nav>
                                    <ul>
                                        {step.documents && step.documents.map((doc, docIndex) => (
                                            <li key={docIndex}>{doc}</li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ))}

                        <h1>{t('afterEleventhGrade.cost.title')}</h1>
                        <p>{t('afterEleventhGrade.cost.description')}</p>

                        <p>{t('afterEleventhGrade.contact.description')}</p>
                    </div>
                </div>
            </AnimatedScrollComponent>
            <Choices />
            <ImageSection />
        </>
    );
};
