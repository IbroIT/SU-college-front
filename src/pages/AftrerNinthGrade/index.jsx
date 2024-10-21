import React from "react";
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import styles from './AfterNinthGrade.module.scss'
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { useTranslation } from "react-i18next";

export const AfterNinthGrade = () => {
    const { t } = useTranslation();

    return(
         <>
        <AnimatedScrollComponent>
            <div className={styles.AfterNinthGrade}>
                <div className={styles.AfterNinthGradeContainer}>
                    <h1>{t('afterNinthGrade.header.title')}</h1>
                    {t('afterNinthGrade.steps', { returnObjects: true }).map((step, index) => (
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
                    <h1>{t('afterNinthGrade.cost.title')}</h1>
                    <p>{t('afterNinthGrade.cost.description')}</p>
                    <p>{t('afterNinthGrade.contact.description')}</p>
                </div>
            </div>
        </AnimatedScrollComponent>
        <Choices />
        <ImageSection />
    </>
    )
}