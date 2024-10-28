import React from 'react';
import { Choices } from '../../components/Choices';
import { ImageSection } from '../../components/ImageSection';
import styles from './Main.module.scss';
import AnimatedScrollComponent from '../../components/AnimatedComponents';
export const Main = () => {
  return (
    <>
    <AnimatedScrollComponent>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
          <section className={styles.intro}>
            <h1>About Salymbekov College of IT and Business</h1>
            <p>
              Salymbekov University is dedicated to providing a world-class education and
              fostering research, driven by our values and a commitment to social impact.
              We believe in the power of knowledge to change the world.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Our Beliefs</h2>
            <p>
              At Salymbekov University, we believe that education is more than just academic 
              achievement. It’s about empowering individuals to lead, innovate, and make a 
              difference. Our mission is deeply rooted in creating a positive impact on 
              society through knowledge and community engagement.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Public Mission</h2>
            <p>
              Salymbekov University was established with the belief that education should 
              be accessible to all. We aim to contribute to society through cutting-edge 
              research, thought leadership, and a dedication to public service.
            </p>
          </section>
        
            <section className={styles.videoContainer}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/W2whiny-HTY?si=OKVax6tVVHXAJz_n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h3>What happens at Salymbekov University isn’t magic. It just feels that way.</h3>
            </section>
          
        </div>

        <Choices />
        <ImageSection />
      </div>
      </AnimatedScrollComponent>
    </>
  );
};
