import React, {useState} from 'react';
import styles from './MultimediaPrograms.module.scss';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import { useTranslation } from 'react-i18next';
import ClassModal from '../../components/Modal';
export const MultimediaPrograms = () => {
    const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для управления модальным окном

  const handleOpenModal = () => setModalOpen(true); // Функция для открытия модального окна
  const handleCloseModal = () => setModalOpen(false); 
  return (
    <>
      <AnimatedScrollComponent>
        <div className={styles.multimediaPrograms}>
          <section className={styles.headerSection}>
            <div className={styles.headerContent}>
              <h1>{t('multimediaprograms.header.title')}</h1>
              <p>{t('multimediaprograms.header.description')}</p>
            </div>
          </section>

          <section className={styles.aboutSection}>
            <div className={styles.container}>
              <h2>{t('multimediaprograms.about.title')}</h2>
              <p>{t('multimediaprograms.about.description1')}</p>
              <p>{t('multimediaprograms.about.description2')}</p>
            </div>
          </section>

          <section className={styles.coursesSection}>
            <div className={styles.container}>
              <h2>{t('multimediaprograms.courses.title')}</h2>
              <div className={styles.coursesList}>
                {t('multimediaprograms.courses.list', { returnObjects: true }).map((course, index) => (
                  <div className={styles.courseItem} key={index}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.projectsSection}>
            <div className={styles.container}>
              <h2>{t('multimediaprograms.projects.title')}</h2>
              <div className={styles.projectsList}>
                {t('multimediaprograms.projects.list', { returnObjects: true }).map((project, index) => (
                  <div className={styles.projectItem} key={index}>
                    <img src={project.image} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.admissionSection}>
            <div className={styles.container}>
              <h2>{t('multimediaprograms.admission.title')}</h2>
              <p>{t('multimediaprograms.admission.description')}</p>
              <button className={styles.applyButton} onClick={handleOpenModal}>
                {t('multimediaprograms.admission.applyButton')}
              </button>           
               </div>
          </section>
        </div>
      </AnimatedScrollComponent>
      <Choices />
      <ImageSection />

      {isModalOpen && <ClassModal onClose={handleCloseModal} />}

    </>
  );
};
