import React from 'react';
import styles from './MultimediaPrograms.module.scss';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
export const MultimediaPrograms = () => {
  return (
    <>
    <div className={styles.multimediaPrograms}>
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1>Мультимедийные программы</h1>
          <p>
            Откройте мир мультимедийных технологий! Программы, которые объединяют искусство и технологии, создавая невероятные визуальные и аудиовизуальные проекты.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2>О программе</h2>
          <p>
            Наша программа мультимедийных технологий предлагает глубокое погружение в создание аудиовизуальных материалов, 3D-моделирование, анимацию и многое другое. Программа позволяет студентам овладеть инструментами, которые используют современные дизайнеры и аниматоры для создания интерактивных медиа-продуктов.
          </p>
          <p>
            Вы изучите: основы дизайна, работу с видео и аудио, создание интерактивных приложений, использование технологий виртуальной и дополненной реальности.
          </p>
        </div>
      </section>

      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <h2>Курсы</h2>
          <div className={styles.coursesList}>
            <div className={styles.courseItem}>
              <h3>Дизайн и анимация</h3>
              <p>
                Освойте основы графического дизайна и анимации. Научитесь создавать удивительные 2D и 3D анимации, которые привлекают внимание.
              </p>
            </div>
            <div className={styles.courseItem}>
              <h3>Видеомонтаж и постпродакшн</h3>
              <p>
                Научитесь редактировать видео, добавлять визуальные эффекты и работать с программами для монтажа. Станьте профессионалом в создании роликов для кино и телевидения.
              </p>
            </div>
            <div className={styles.courseItem}>
              <h3>Виртуальная реальность</h3>
              <p>
                Узнайте, как создавать контент для виртуальной реальности. Работайте с технологиями, которые создают полностью погружающий опыт.
              </p>
            </div>
            <div className={styles.courseItem}>
              <h3>Дополненная реальность</h3>
              <p>
                Изучите принципы дополненной реальности и научитесь внедрять цифровые объекты в реальный мир с помощью современных инструментов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <h2>Студенческие проекты</h2>
          <div className={styles.projectsList}>
            <div className={styles.projectItem}>
              <img src="https://chisellabs.com/blog/wp-content/uploads/2020/12/What-Is-Information-Technology-Project-Management.png" alt="Проект 1" />
              <h3>Проект: Виртуальная экскурсия</h3>
              <p>
                Студенты создали виртуальную экскурсию по известным музеям мира, используя технологии VR и интерактивный дизайн.
              </p>
            </div>
            <div className={styles.projectItem}>
              <img src="https://kantata.marketing/wp-content/uploads/2022/07/man-on-tablet-with-graphs-and-numbers-floating-above-the-tablet.jpg" alt="Проект 2" />
              <h3>Проект: Анимационный короткометражный фильм</h3>
              <p>
                Креативная команда студентов разработала анимационный фильм, используя 3D-моделирование и современные инструменты для анимации.
              </p>
            </div>
            <div className={styles.projectItem}>
              <img src="https://www.argentinaproduct.com/ckfinder/userfiles/files/blog/projectmanagement.jpg" alt="Проект 3" />
              <h3>Проект: Интерактивное приложение</h3>
              <p>
                Приложение, созданное студентами, использует дополненную реальность для улучшения учебного процесса в школе.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.admissionSection}>
        <div className={styles.container}>
          <h2>Как поступить</h2>
          <p>
            Чтобы поступить на программу мультимедийных технологий, подайте заявку через наш онлайн-портал. Мы рассмотрим ваши творческие работы и проведем собеседование.
          </p>
          <button className={styles.applyButton}>Подать заявку</button>
        </div>
      </section>    
    </div>
    <Choices/>
    <ImageSection/>
    </>
  );
};
