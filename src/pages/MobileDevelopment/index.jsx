import React from 'react';
import styles from './Mobile.module.scss';
import { Choices } from '../../components/Choices';
import { ITteachers } from '../../components/ITTeachers';
import { ImageSection } from '../../components/ImageSection';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
import { useTranslation } from 'react-i18next';

export const MobileDevelopment = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedScrollComponent>
        <div className={styles.mobileDevelopment}>
          {/* Header Section */}
          <section className={styles.headerSection}>
            <div className={styles.headerContent}>
              <h1>{t('mobileDevelopment.header.title')}</h1>
              <p>
                {t('mobileDevelopment.header.description')}
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className={styles.aboutSection}>
            <div className={styles.container}>
              <h2>{t('mobileDevelopment.about.title')}</h2>
              <p>
                {t('mobileDevelopment.about.description')}
              </p>
            </div>
          </section>

          {/* Courses Section */}
          <section className={styles.coursesSection}>
            <div className={styles.container}>
              <h2>{t('mobileDevelopment.courses.title')}</h2>
              <div className={styles.coursesList}>
                {t('mobileDevelopment.courses.list', { returnObjects: true }).map((course, index) => (
                  <div className={styles.courseItem} key={index}>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <img src={course.image} className={styles.courseImage} alt={course.name} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className={styles.projectsSection}>
            <div className={styles.container}>
              <h2>{t('mobileDevelopment.projects.title')}</h2>
              <div className={styles.projectsList}>
                {t('mobileDevelopment.projects.list', { returnObjects: true }).map((project, index) => (
                  <div className={styles.projectItem} key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Section */}
          <section className={styles.admissionSection}>
            <div className={styles.container}>
              <h2>{t('mobileDevelopment.admission.title')}</h2>
              <p>{t('mobileDevelopment.admission.description')}</p>
              <button className={styles.applyButton}>{t('mobileDevelopment.admission.applyButton')}</button>
            </div>
          </section>
        </div>
      </AnimatedScrollComponent>
      <Choices />
      <ITteachers />
      <ImageSection />
    </>
  );
};
  