import React from "react";
import styles from './Choices.module.scss';
import { Link } from "react-router-dom";

export const Choices = () => {
    return (
        <div className={styles.designSections}>
            <Link to='/multimediaprograms' className={styles.link}>
                <div className={styles.section}>
                    <div className={styles.imageContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3696/3696413.png" alt="Мультимедийные приложения" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Мультимедийные приложения</h3>
                    </div>
                </div>
            </Link>
            <Link to='/computerscience' className={styles.link}>
                <div className={styles.section}>
                    <div className={styles.imageContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4109/4109173.png" alt="Комьютерная наука" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Комьютерная наука</h3>
                    </div>
                </div>
            </Link>
            <Link to='/multimediaprograms' className={styles.link}>
                <div className={styles.sectionBig}>
                    <div className={styles.imageContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/512/8187/8187010.png" alt="Мультимедийные программы" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Мультимедийные программы</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};
