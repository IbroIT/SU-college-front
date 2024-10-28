import React from 'react';
import { useTranslation } from 'react-i18next';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
import styles from './Main.module.scss';
import AnimatedScrollComponent from '../../components/AnimatedComponents';

export const Main = () => {
  const { t } = useTranslation();

  return (
    <AnimatedScrollComponent>
      <div className={styles.Main}>
        {/* Header Section */}
        <header className={styles.Header}>
          <h1>{t('aboutCollege.header.title')}</h1>
          <p>{t('aboutCollege.header.subtitle')}</p>
        </header>

        {/* Intro Section */}
        <div className={styles.MainContainer}>
          <section className={styles.intro}>
            <div className={styles.textOverlay}>
              <h2>{t('aboutCollege.intro.title')}</h2>
              <p>{t('aboutCollege.intro.description')}</p>
            </div>
          </section>

          {/* Mission Section */}
          <section className={styles.section}>
            <h2>{t('aboutCollege.mission.title')}</h2>
            <p>{t('aboutCollege.mission.description')}</p>
          </section>
          {/* Video Section */}
          <section className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <h3>{t('aboutCollege.videoSection.title')}</h3>
          </section>
        </div>

        {/* Additional Components */}
        <Choices />
        <ImageSection />
      </div>
    </AnimatedScrollComponent>
  );
};

