import React from "react";
import styles from './Mission.module.scss';

export const Mission = () => {
    return (
        <div className={styles.missionContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <img src="path-to-hero-image.jpg" alt="College campus" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>Welcome to Salymbekov University</h1>
                    <p>Our mission is to empower future leaders with excellence in education and a commitment to societal impact.</p>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className={styles.missionSection}>
                <h2>Our Mission</h2>
                <p>
                    At Salymbekov University, we focus on creating an inclusive academic environment that nurtures students’ potential. 
                    With a commitment to integrity, research, and community service, we prepare our students to become impactful leaders in a dynamic world.
                </p>
            </section>

            {/* Core Values Section */}
            <section className={styles.valuesSection}>
                <h2>Our Core Values</h2>
                <div className={styles.values}>
                    <div className={styles.value}>
                        <img src="path-to-value1-image.jpg" alt="Integrity" />
                        <h3>Integrity</h3>
                        <p>We uphold honesty and ethical standards in all our academic pursuits and community engagements.</p>
                    </div>
                    <div className={styles.value}>
                        <img src="path-to-value2-image.jpg" alt="Excellence" />
                        <h3>Excellence</h3>
                        <p>Striving for academic and professional excellence is at the heart of our mission.</p>
                    </div>
                    <div className={styles.value}>
                        <img src="path-to-value3-image.jpg" alt="Innovation" />
                        <h3>Innovation</h3>
                        <p>We encourage creative solutions, research, and entrepreneurial thinking.</p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className={styles.historySection}>
                <h2>Our History</h2>
                <p>
                    Since our founding, Salymbekov University has grown into an institution known for its dedication to 
                    fostering the development of leaders who will shape the future. With diverse programs and a culture of excellence, 
                    we continue to build on our legacy.
                </p>
                <img src="path-to-history-image.jpg" alt="College history" className={styles.historyImage} />
            </section>

            {/* Call to Action Section */}
            <section className={styles.ctaSection}>
                <h2>Join Us in Shaping the Future</h2>
                <p>Become a part of Salymbekov University, where we prepare you to lead, innovate, and make a difference.</p>
                <button className={styles.ctaButton}>Learn More</button>
            </section>
        </div>
    );
};
