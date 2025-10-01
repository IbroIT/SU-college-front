
import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from '../assets/alymlogo.png';

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // Вспомогательная функция для перехода
  const goTo = (path) => () => navigate(path);
  return (
    <header className="header">
      {/* Логотип */}
      <button className="header-logo" type="button" onClick={goTo("/")}>
        <img src={logo} alt={t('university')} style={{ height: 48, maxWidth: 170, width: 'auto', objectFit: 'contain', display: 'block', margin: 0, padding: 0 }} />
      </button>

      {/* Навигация */}
      <nav className="navbar">
        <div className="dropdown">
          <button className="menuButton" type="button">{t('about')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/about/history")}>{t('founders')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/about/history")}>{t('history_mission')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/about/history")}>{t('management')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/about/history")}>{t('structure')}</button>
            <a
              className="dropdownBtn"
              href="https://www.lincoln.edu.my/recognitions-accreditations/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'left', width: '100%', border: 'none', background: 'none', padding: '12px 28px', font: 'inherit', cursor: 'pointer' }}
            >
              {t('status')}
            </a>
            <a
              className="dropdownBtn"
              href="https://salymbekov.com/en/npa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'left', width: '100%', border: 'none', background: 'none', padding: '12px 28px', font: 'inherit', cursor: 'pointer' }}
            >
              {t('npa')}
            </a>
            <a
              className="dropdownBtn"
              href="https://kstu.kg/universitet/obshchestvennye-organy-upravlenija/uchenyi-sovet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'left', width: '100%', border: 'none', background: 'none', padding: '12px 28px', font: 'inherit', cursor: 'pointer' }}
            >
              {t('councils')}
            </a>
          </div>
        </div>

{/* Колледж */}
        <div className="dropdown">
          
          <button className="menuButton" type="button">{t('college')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/medical")}>{t('about_college')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/dental")}>{t('college_management')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/pharmacy")}>{t('programs')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/pharmacy")}>{t('pps')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/pharmacy")}>{t('partners')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/pharmacy")}>{t('resources')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/faculties/pharmacy")}>{t('qms')}</button>
          </div>
        </div>

{/* Студенту */}
        <div className="dropdown">
          <button className="menuButton" type="button">{t('for_student')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('instructions')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/docs")}>{t('student_unions')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/tuition")}>{t('schedule')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('e_resources')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('academic_opportunities')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('social_opportunities')}</button>
          </div>
        </div>


{/* Абитуриенту */}
        <div className="dropdown">
          <button className="menuButton" type="button">{t('for_applicant')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/students/schedule")}>{t('admissions_office')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/library")}>{t('training_areas')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/dorm")}>{t('admission_procedure')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('payment')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('partners')}</button>
          </div>
        </div>


{/* Инфраструктура */}
        <div className="dropdown">
          <button className="menuButton" type="button">{t('infrastructure')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/students/schedule")}>{t('classrooms')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/library")}>{t('labs')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/dorm")}>{t('startups')}</button>
          </div>
        </div>
      </nav>



{/* Контакты и вакансии */}
        <div className="dropdown">
          <button className="menuButton" type="button">{t('contacts_jobs')}</button>
          <div className="dropdown-content">
            <button className="dropdownBtn" type="button" onClick={goTo("/students/schedule")}>{t('admissions_office')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/library")}>{t('training_areas')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/students/dorm")}>{t('admission_procedure')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('payment')}</button>
            <button className="dropdownBtn" type="button" onClick={goTo("/admissions/apply")}>{t('partners')}</button>
          </div>
        </div>
      {/* Кнопка + переключатель языка */}
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Navbar;
