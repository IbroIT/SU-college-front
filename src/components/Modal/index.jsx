// src/components/ClassModal.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';

const ClassModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Вы в каком классе?</h2>
        <div className={styles.classButtons}>
          <Link to="/afterninthgrade" className={styles.classButton} onClick={onClose}>9 класс</Link>
          <Link to="/aftereleventhgrade" className={styles.classButton} onClick={onClose}>11 класс</Link>
        </div>
        <button className={styles.closeButton} onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ClassModal;
