import React from 'react';
import styles from './ComputerScience.module.scss';
import { Choices } from '../../components/Choices';
import { ITteachers } from '../../components/ITTeachers';
import { ImageSection } from '../../components/ImageSection';
export const ComputerScience = () => {
  return (
    <>
    <div className={styles.computerScience}>
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1>Компьютерные науки</h1>
          <p>
            Откройте для себя захватывающий мир компьютерных наук, изучая программирование, искусственный интеллект, базы данных и многое другое.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2>О программе</h2>
          <p>
            Программа "Компьютерные науки" предлагает студентам углубленное изучение теории и практики, необходимых для создания инновационных программных решений.
            Наша цель — подготовить специалистов, способных решать сложные задачи, разрабатывать программное обеспечение и работать в междисциплинарных командах.
          </p>
          <p>
            Вы получите знания в таких областях, как алгоритмы, структуры данных, разработка веб-приложений, мобильных приложений и машинное обучение.
          </p>
        </div>
      </section>

      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <h2>Курсы</h2>
          <div className={styles.coursesList}>
            <div className={styles.courseItem}>
              <h3>Основы программирования</h3>
              <p>
                Освойте базовые концепции программирования, такие как синтаксис, логика и алгоритмы. Идеально подходит для начинающих.
              </p>
              <img src="https://camo.githubusercontent.com/21bb8ae3629c4852404841252c65baa38426e4c0d01a68a0f7e6fd121d4649dc/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067" className={styles.courseImage} alt="Основы программирования"/>
            </div>
            <div className={styles.courseItem}>
              <h3>Искусственный интеллект</h3>
              <p>
                Погружение в технологии AI и машинного обучения. Узнайте, как создавать интеллектуальные системы и приложения.
              </p>
              <img src="https://www.advgazeta.ru/upload/iblock/174/edtlpxlu6bbj0h0k9s0ia7085si4sufv/iskusstvennyy_intellekt_pomogaet_predprinimatelyam_i_tvortsam.jpg" alt="Искусственный интеллект" className={styles.courseImage} />
            </div>
            <div className={styles.courseItem}>
              <h3>Разработка веб-приложений</h3>
              <p>
                Научитесь создавать динамические веб-сайты и приложения с использованием популярных языков программирования и фреймворков.
              </p>
              <img src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" alt="Разработка веб-приложений" className={styles.courseImage} />
            </div>
            <div className={styles.courseItem}>
              <h3>Мобильные приложения</h3>
              <p>
                Освойте разработку приложений для iOS и Android, используя современные технологии и методологии.
              </p>
              <img src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg" alt="Разработка мобильных приложений" className={styles.courseImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <h2>Студенческие проекты</h2>
          <div className={styles.projectsList}>
            <div className={styles.projectItem}>
              <h3>Проект: Умный ассистент</h3>
              <p>
                Студенты разработали умного ассистента, который использует AI для обработки запросов и выполнения задач.
              </p>
            </div>
            <div className={styles.projectItem}>
              <h3>Проект: Веб-приложение для управления задачами</h3>
              <p>
                Веб-приложение, которое помогает пользователям управлять своими задачами и проектами с интуитивно понятным интерфейсом.
              </p>
            </div>
            <div className={styles.projectItem}>
              <h3>Проект: Мобильное приложение для фитнеса</h3>
              <p>
                Мобильное приложение, которое помогает пользователям отслеживать свои тренировки и достижения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.admissionSection}>
        <div className={styles.container}>
          <h2>Как поступить</h2>
          <p>
            Для поступления на программу "Компьютерные науки" подайте заявку через наш онлайн-портал. Мы приветствуем студентов с любым уровнем подготовки.
          </p>
          <button className={styles.applyButton}>Подать заявку</button>
        </div>
      </section>
    </div>
    <Choices/>
    <ITteachers/>
    <ImageSection/>
    </>
  );
};
