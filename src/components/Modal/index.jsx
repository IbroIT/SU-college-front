// src/components/ClassModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';
import { useTranslation } from 'react-i18next';

const ClassModal = ({ onClose }) => {
    const { t } = useTranslation();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{t('modal.whatisyourclass')}</h2>
        <div className={styles.classButtons}>
          <Link to="/afterninthgrade" className={styles.classButton} onClick={onClose}>{t('modal.ninthgrade')}</Link>
          <Link to="/aftereleventhgrade" className={styles.classButton} onClick={onClose}>{t('modal.eleventhgrade')}</Link>
        </div>
        <button className={styles.closeButton} onClick={onClose}>{t('modal.close')}</button>
      </div>
    </div>
  );
};

export default ClassModal;
