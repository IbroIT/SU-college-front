import React from "react";
import styles from './Owner.module.scss';
import { ImageSection } from "../../components/ImageSection";
import { useTranslation } from 'react-i18next';
import AnimatedScrollComponent from "../../components/AnimatedComponents";
export const Owner = () => {
    const { t } = useTranslation();

    return (
        <>
        <AnimatedScrollComponent>
            <div className={styles.ownerContainer}>
                <h1 className={styles.title}>{t('owner.title')}</h1>
                <div className={styles.biography}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1c/%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2_%D0%90%D1%81%D0%BA%D0%B0%D1%80.jpg" 
                        alt={t('owner.title')} 
                        className={styles.mainImage} 
                    />
                    <div className={styles.textContainer}>
                        <p className={styles.bio}>{t('owner.bio1')}</p>
                        <p className={styles.bio}>{t('owner.bio2')}</p>
                        <p className={styles.bio}>{t('owner.bio3')}</p>
                        <p className={styles.bio}>{t('owner.bio4')}</p>
                    </div>
                </div>
                <div className={styles.imageGallery}>
                    <h2 className={styles.subTitle}>{t('owner.subtitle')}</h2>
                    <div className={styles.additionalImages}>
                        <img src="https://the-tech.kz/wp-content/uploads/2024/06/bc0b6261-scaled.jpg" alt="Колледж" className={styles.galleryImage} />
                        <img src="https://lh3.googleusercontent.com/proxy/bZpdCGo8hHmQoH_GRM4M8PeOC3bnRNQeWVFDSYE-TjXKpTvr3LnUYq3wfjL3bGqvW6CUSPJgu8UYrlgYPGY4_EtuvETW1IJBhb74iRrs-CuveUwDhHsrIv2g" alt="Другие бизнесы" className={styles.galleryImage} />
                        <img src="https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg" alt="Аскар на мероприятии" className={styles.galleryImage} />
                    </div>
                </div>
            </div>
            </AnimatedScrollComponent>
            <ImageSection/>
        </>
    );
}
