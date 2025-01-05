import React, {useState} from 'react';
import styles from './ComputerScience.module.scss';
import { Choices } from '../../components/Choices';
import { ITteachers } from '../../components/ITTeachers';
import { ImageSection } from '../../components/ImageSection';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import { useTranslation } from 'react-i18next';
import ClassModal from '../../components/Modal';

export const ComputerScience = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для управления модальным окном

  const handleOpenModal = () => setModalOpen(true); // Функция для открытия модального окна
  const handleCloseModal = () => setModalOpen(false); 
  return (
    <>
      <AnimatedScrollComponent>
        <div className={styles.computerScience}>
          <section className={styles.headerSection}>
            <div className={styles.headerContent}>
              <h1>{t('computerscience.header.title')}</h1>
              <p>
                {t('computerscience.header.description')}
              </p>
            </div>
          </section>

          <section className={styles.aboutSection}>
            <div className={styles.container}>
              <h2>{t('computerscience.about.title')}</h2>
              <p>
                {t('computerscience.about.description')}
              </p>
            </div>
          </section>

          <section className={styles.coursesSection}>
            <div className={styles.container}>
              <h2>{t('computerscience.courses.title')}</h2>
              <div className={styles.coursesList}>
                {t('computerscience.courses.list', { returnObjects: true }).map((course, index) => (
                  <div className={styles.courseItem} key={index}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <img src={course.image} className={styles.courseImage} alt={course.name} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.projectsSection}>
            <div className={styles.container}>
              <h2>{t('computerscience.projects.title')}</h2>
              <div className={styles.projectsList}>
                {t('computerscience.projects.list', { returnObjects: true }).map((project, index) => (
                  <div className={styles.projectItem} key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.admissionSection}>
            <div className={styles.container}>
              <h2>{t('computerscience.admission.title')}</h2>
              <p>{t('computerscience.admission.description')}</p>
              <button className={styles.applyButton} onClick={handleOpenModal}>
                {t('computerscience.admission.applyButton')}
              </button>               </div>
          </section>
        </div>
      </AnimatedScrollComponent>
      <Choices />
      <ImageSection />

      {isModalOpen && <ClassModal onClose={handleCloseModal} />}

    </>
  );
};
