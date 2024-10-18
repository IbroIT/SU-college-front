import React from "react";
import styles from './Teachers.module.scss';
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
import Mirlan from '../../components/images/WhatsApp Image 2024-10-18 at 16.19.20.jpeg'
export const Teachers = () => {
    const teachers = [
        {
            name: "Алия",
            subject: "Introduction to CS, AI, ML",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Нурбеков Мирлан",
            subject: "OOP, DataBase",
            image: Mirlan
        },
        {
            name: "Кундуз",
            subject: "Web development",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Айдай",
            subject: "Web development",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Агай",
            subject: "Web developement, React",
            image: "https://via.placeholder.com/150" 
        },
        {
            name: "Мария Петрова",
            subject: "Физика",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Сергей Смирнов",
            subject: "История",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Елена Кузнецова",
            subject: "Химия",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Мария Петрова",
            subject: "Физика",
            image: "https://via.placeholder.com/150"
        },
    ];

    return (
        <>
        <h1 style={{textAlign: 'center', marginTop: '25px'}}>Наши преподователи</h1>
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
        <Choices/>
        <ImageSection/>
        </>
    );
};
