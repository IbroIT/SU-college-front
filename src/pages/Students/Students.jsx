import React from 'react';
import './CollegeStudentspage.scss';
import { ImageSection } from '../../components/ImageSection';
import { useTranslation } from 'react-i18next';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
const CollegeStudentsPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
    <AnimatedScrollComponent>
      <div className="students-page">
        <div className='students-container'>
          <h1>{t('students.title')}</h1>

          <section className="students-overview">
            <h2>{t('students.ourStudents')}</h2>
            <p>{t('students.studentsOverview')}</p>
            <img 
              src="https://the-tech.kz/wp-content/uploads/2024/06/bc0b6261-scaled.jpg" 
              alt="Студенты колледжа" 
              className="student-image" 
            />
          </section>

          <section className="students-achievements">
            <h2>{t('students.achievements')}</h2>
            <ul>
              {t('students.achievementList', { returnObjects: true }).map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <img 
              src="https://the-tech.kz/wp-content/uploads/2024/06/bc0b2372-1024x683.jpg" 
              alt="Достижения студентов" 
              className="achievement-image" 
            />
          </section>

          <section className="students-community">
            <h2>{t('students.community')}</h2>
            <p>{t('students.communityDescription')}</p>
            <img 
              src="https://salymbekov.com/wp-content/uploads/2023/02/bc0b2014-1920x1008.jpg" 
              alt="Студенческое сообщество" 
              className="community-image" 
            />
          </section>

          <section className="student-experiences">
            <h2>{t('students.experiences')}</h2>
            <p>{t('students.experiences')}</p>
          </section>

          <section className="student-feedback">
            <h2>{t('students.feedback')}</h2>
            <blockquote>
              {t('students.quote1')}
            </blockquote>
            <blockquote>
              {t('students.quote2')}
            </blockquote>
          </section>
        </div>
      </div>
      </AnimatedScrollComponent>
      <ImageSection />
    </>
  );
};

export default CollegeStudentsPage;
