import React from "react";
import styles from './Teachers.module.scss';
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import Mirlan from '../../components/images/WhatsApp Image 2024-10-18 at 16.19.20.jpeg';
import Gulina from '../../components/images/gulina.jpg'
import Aliya from '../../components/images/aliya.jpg'
import Nurzat from '../../components/images/nurzat.enc'
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Example.css';

export const Teachers = () => {
    const { t } = useTranslation(); // Initialize translation hook

    const teachers = [
        { name: t("teachers.alya"), subject: t("teachers.intro_cs_ai_ml"), image: Aliya },
        { name: t("teachers.mirlan"), subject: t("teachers.oop_database"), image: Mirlan },
        { name: t("teachers.kunduz"), subject: t("teachers.web_development"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.aidai"), subject: t("teachers.web_development"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.zubov"), subject: t("teachers.web_development_react"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.nurgul"), subject: t("teachers.russian_language"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.moloshev"), subject: t("teachers.history"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.gulina"), subject: t("teachers.chemistry"), image: Gulina },
        { name: t("teachers.kuzubakova"), subject: t("teachers.physics"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.eldiyar"), subject: t("teachers.training"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.ulukbek"), subject: t("teachers.english"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.chynara"), subject: t("teachers.algebra"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.seitbekova"), subject: t("teachers.english"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.rima"), subject: t("teachers.english"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.komarzhova"), subject: t("teachers.algebra"), image: "https://via.placeholder.com/150" },
        { name: t("teachers.nurzat"), subject: t("teachers.highmath"), image: Nurzat},
    ];

    // Сортировка по фамилии
    const sortedTeachers = teachers.sort((a, b) => {
        const lastNameA = a.name.split(" ").pop(); // Получаем фамилию
        const lastNameB = b.name.split(" ").pop();
        return lastNameA.localeCompare(lastNameB, 'ru'); // Сравниваем фамилии
    });

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '25px' }}>{t("teachers.title")}</h1>
            <div className={styles.teachersContainer}>
                <div className={styles.teachersList}>
                    {sortedTeachers.map((teacher, index) => (
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
