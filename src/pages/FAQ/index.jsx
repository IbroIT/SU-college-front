import React, { useState } from "react";
import styles from './FAQ.module.scss';
import { useTranslation } from 'react-i18next';
import AnimatedScrollComponent from "../../components/AnimatedComponents";
export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useTranslation();
    
    const faqs = t('FAQ.Questions', { returnObjects: true });

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <AnimatedScrollComponent>
        <div className={styles.faqContainer}>
            <h1 className={styles.title}>{t('FAQ.Header')}</h1>

            {faqs.map((faq, index) => (
                <div key={index} className={styles.faqSection}>
                    <div
                        className={styles.question}
                        onClick={() => toggleFAQ(index)}
                        role="button"
                        tabIndex={0}
                    >
                        {faq.question}
                    </div>
                    <div
                        className={`${styles.answer} ${activeIndex === index ? styles.active : ''}`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
        </AnimatedScrollComponent>
    );
};

