import React from "react";
import styles from './ITTeachers.module.scss';
import { Choices } from "../../components/Choices";
import { ImageSection } from "../../components/ImageSection";
export const ITteachers = () => {
    const teachers = [
        {
            name: "Алия",
            subject: "Introduction to CS, AI, ML",
            image: "https://via.placeholder.com/150" // замените на URL изображений учителей
        },
        {
            name: "Нурбеков Мирлан",
            subject: "OOP, DataBase",
            image: "https://via.placeholder.com/150"
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
            image: "https://via.placeholder.com/150" // замените на URL изображений учителей
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
        </>
    );
};
