import React from "react";
import styles from './Teachers.module.scss';
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import Mirlan from '../../components/images/WhatsApp Image 2024-10-18 at 16.19.20.jpeg';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export const Teachers = () => {
    const { t } = useTranslation(); // Initialize translation hook

    const teachers = [
        {
            name: t("teachers.alya"), // Translation key for teacher's name
            subject: t("teachers.intro_cs_ai_ml"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.mirlan"),
            subject: t("teachers.oop_database"), // Translation key for subject
            image: Mirlan
        },
        {
            name: t("teachers.kunduz"), // Translation key for teacher's name
            subject: t("teachers.web_development"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.aidai"), // Translation key for teacher's name
            subject: t("teachers.web_development"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.zubov"), // Translation key for teacher's name
            subject: t("teachers.web_development_react"), // Translation key for subject
            image: "https://via.placeholder.com/150" 
        },
        {
            name: t("teachers.nurgul"), // Translation key for teacher's name
            subject: t("teachers.russian_language"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.moloshev"), // Translation key for teacher's name
            subject: t("teachers.history"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.gulina"), // Translation key for teacher's name
            subject: t("teachers.chemistry"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
        {
            name: t("teachers.nur"), // Translation key for teacher's name
            subject: t("teachers.physics"), // Translation key for subject
            image: "https://via.placeholder.com/150"
        },
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '25px' }}>{t("teachers.title")}</h1>
            <div className={styles.teachersContainer}>
                <div className={styles.teachersList}>
                    {teachers.map((teacher, index) => (
                        <div key={index} className={styles.teacherCard}>
                            <img src={teacher.image} alt={teacher.name} className={styles.teacherImage} />
                            <h2 className={styles.teacherName}>{teacher.name}</h2>
                            <p className={styles.teacherSubject}>{teacher.subject}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Choices />
            <ImageSection />
        </>
    );
};
