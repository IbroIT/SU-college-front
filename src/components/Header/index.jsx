import React, { useState, useEffect } from 'react';
import { Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import style from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon, School as SchoolIcon, Group as GroupIcon, Article as ArticleIcon, FileCopy as FileCopyIcon } from '@mui/icons-material';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import axios from 'axios';
import { Typography } from '@mui/material';
export const Header = ({pdfFiles, pdfFilesForStudents, pdfFilesForApplicants}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


 const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
        if (isDropdownOpen2) {
          setIsDropdownOpen2(false); 
        }
      };
          const toggleDropdown2 = () => {
        setIsDropdownOpen2((prev) => !prev);
        if (isOpen) {
          setIsOpen(false); 
        }
      };
      
  
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const handleSearch = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            closeMenu();
            setSearchQuery('');
        }
    };

    return (
        <>
            {/* <nav className={style.mainNav}>
            <div className={style.mainContainer}>
                <ul className={style.leftSide}>
                    <Link className={style.linkNav}  to="/students">
                    <li>{t('header.students')}</li>
                    </Link>
                    <Link className={style.linkNav} to="/owner">
                    <li>{t('header.owner')}</li>

                    </Link>
                </ul>
                <ul className={style.rightSide}>
                    <Link className={style.linkNav} to="/news">
                    <li>{t('header.map')}</li>
                    </Link>
                    <Link className={style.linkNav} to="/director">
                    <li>{t('header.director')}</li>
                    </Link>
                </ul>
            </div>
        </nav> */}
        <div className={style.startOfLine}>
            </div>
        <header className={style.header}>
        <div className={style.headerContainer}>
                        <div className={style.actions}>
                            <LanguageSwitcher />
                        </div>
                        <div className={style.logo}>
                        <Link to='/'>
                            <img
                                src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                                alt='Salymbekov College Logo'
                            />
                            </Link>
                        </div>
                        <div className={style.searchMenu}>
                        <input
                        type="text"
                        placeholder={t('header.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <Button onClick={handleSearch} fontSize='small'>
                        <Search fontSize='small' />
                    </Button>
                        </div>
                        <div className={style.burgerMenu} onClick={toggleMenu}>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </div>
                    </div>
                </header>

                <nav className={`${style.headerNav} ${isMenuOpen ? style.mobileMenuOpen : ''}`}>
                <div className={style.navContainer}>
                    <ul className={style.headerUl}>
                    <li className={style.navLi}>
                    {/* <SchoolIcon className={style.icon} /> */}
    {t('header.college')}
    <div className={style.dropdownContent}>
    <div>
      <h1>
      <a href='https://salymbekov.com/en/' target="_blank" rel="noopener noreferrer">
        {t('header.university')}
        </a>
      </h1>
  <h1>
    {t('header.itcollege')}
    </h1>
  <Link to="/college"><p>{t('header.aboutCollege')}</p></Link>
  <Link to="/director"><p>{t('header.letterFromDirector')}</p></Link>
  <Link to="/teachers"><p>{t('header.teachers')}</p></Link>
  <Link to="/contacts"><p>{t('header.contacts')}</p></Link>
</div>
<div>
  <h1>{t('header.ourpartners')}</h1>
  <div className={style.dropdown}>
  <p
    className={`${style.dropdownTitle} ${isOpen ? style.open : ''}`}
    onClick={toggleDropdown}
  >
    {t('header.malaysia')}
  </p>
  {isOpen && (
    <div className={style.dropdownMenu}>
      <p>
        <a
          href="https://www.lincoln.edu.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lincoln University
        </a>
      </p>
      <p>
        <a
          href="https://newinti.edu.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          INTI University
        </a>
      </p>
    </div>
  )}
</div>

{/* <div className={style.dropdown}>
  <p
    className={`${style.dropdownTitle} ${isDropdownOpen2 ? style.open : ''}`}
    onClick={toggleDropdown2}
  >
    {t('header.korea')}
  </p>
  {isDropdownOpen2 && (
    <div className={style.dropdownMenu}>
      <p>
        <a
          href="https://www.lincoln.edu.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lincoln University
        </a>
      </p>
      <p>
        <a
          href="https://newinti.edu.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          INTI University
        </a>
      </p>
    </div>
  )}
</div> */}



</div>

    </div>
</li>
<li className={style.navLi}>
    {t('header.applicants')}
    <div className={style.dropdownContent} style={{height:"450px", columnGap: "150px"}}>

    <div>    
    <Link to="/admissionCommittee"><h1 className={style.applicantsText}>{t('header.admissionCommittee')}</h1></Link>
    <h1 className={style.applicantsText}>{t('header.professions')}</h1>
    <Link to="/computerscience"><p>{t('header.computerScience')}</p></Link>
    <Link to="/multimediaprograms"><p>{t('header.multimediaPrograms')}</p></Link>
    <Link to="/mobile"><p>{t('header.mobileApps')}</p></Link>
</div>

<div>
<Link to={`/documents/6`}>
    <h1>{t('header.admissionRulesAndPlan')}</h1>
            </Link> 
            <h1>{t('header.admissionProcedure')}</h1>
    <Link to="/requiredDocuments"><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/admissionRegulation"><p>{t('header.admissionRegulations')}</p></Link>
    <Link to="/selectionSchedule"><p>{t('header.selectionSchedule')}</p></Link>
    <Link to="/price"><h1>{t('header.price')}</h1></Link>
</div>

<div>
<Link to="/collegeInfrastructure"><h1>{t('header.collegeInfrastructure')}</h1></Link>
</div>

    </div>
</li>
            <li className={style.navLi}>

    {t('header.students')}
    <div className={style.dropdownContent}>
        <div>
        <h1>{t('forstudents.resourceBase.links.informationSystem')}</h1>  
      <p>
        <a 
         href='https://eBilim.salymbekov.com'
         target="_blank"
          rel="noopener noreferrer"
        >
          Ebilim

        </a>
      </p>
      <p>
        <a 
         href='https://online.collaborative.lincoln.edu.my'
         target="_blank"
          rel="noopener noreferrer"
        > 
          Lincoln

        </a>
      </p>
        </div>
    <div>
        <h1>{t('forstudents.studentCommunities.title')}</h1>
        <Link to="/student-council"><p>{t('forstudents.studentCommunities.links.studentCouncil')}</p></Link>
        <Link to="/debate-club"><p>{t('forstudents.studentCommunities.links.debateClub')}</p></Link>
        <Link to="/tutors-movement"><p>{t('forstudents.studentCommunities.links.tutorsMovement')}</p></Link>
        <Link to="/creative-groups"><p>{t('forstudents.studentCommunities.links.creativeGroups')}</p></Link>
      </div>

      {/* Ресурсная база */}
      <div>
        <h1>{t('forstudents.resourceBase.title')}</h1>
        <Link to="/instructions"><p>{t('forstudents.resourceBase.links.instructions')}</p></Link>
        <Link to="http://icsjlibrary.inti.edu.my/library/custom/home.jsp"><p>{t('forstudents.resourceBase.links.library')}</p></Link>
        <Link to="/resources"><p>{t('forstudents.resourceBase.links.resources')}</p></Link>
      </div>

      <div>
        <h1>{t('forstudents.studySchedules.title')}</h1>
        <Link to={`/documents/15`}><p>{t('forstudents.studySchedules.links.modulesExams')}</p></Link>
        <Link to="/schedule"><p>{t('forstudents.studySchedules.links.collegeSchedule')}</p></Link>
        <Link to={`/documents/14`}>
        <p>{t('forstudents.studySchedules.links.ScheduleEducationalProcess')}</p>
        </Link>
      </div>

      <div>
        <h1>{t('forstudents.studentsProjects.title')}</h1>
        {/* <Link to="/firstyearprojects"><p>{t('forstudents.studentsProjects.links.firstGrade')}</p></Link>
        <Link to="/secondyearprojects"><p>{t('forstudents.studentsProjects.links.secondGrade')}</p></Link>
        <Link to="/thirdyearprojects"><p>{t('forstudents.studentsProjects.links.thirdGrade')}</p></Link> */}
        <Link to="/fourthyearprojects"><p>{t('forstudents.studentsProjects.links.fourthGrade')}</p></Link>

      </div>
    </div>
</li>

<li className={style.navLi} style={{columnGap: "150px"}}>
    {t('header.documents')}
    <div className={style.dropdownContent}>
    <div>
            <h1>{t('documents2.main')}</h1>
            <Link to={`/documents/6`} onClick={closeMenu}>
                <p>{t('documents2.certificate')}</p>
            </Link>
            <Link to={`/documents/4`}onClick={closeMenu}>
                <p>{t('documents2.license')}</p>
            </Link>            
        </div>
        <div>
        <h1>{t('documents2.AccreditationCertificates')}</h1>
            <Link to={`/documents/7`}onClick={closeMenu}>
                <p>{t('documents2.InstitutionalAccreditation')}</p>
            </Link>
            <Link to={`/documents/8`}onClick={closeMenu}>
                <p>{t('documents2.InternationalInstitutionalAccreditation')}</p>
            </Link>
            <Link to={`/documents/9`}onClick={closeMenu}>
                <p>{t('documents2.InternationalProgramAccreditation')}</p>
            </Link>
        </div>
        <div>
        <h1>{t('documents2.curricula')}</h1>
            <Link to={`/documents/10`}onClick={closeMenu}>
                <p>{t('header.computerScience')}</p>
            </Link>
            <Link to={`/documents/11`}onClick={closeMenu}>
                <p>{t('header.multimediaComputing')}</p>
            </Link>
            <Link to={`/documents/12`}onClick={closeMenu}>
                <p>{t('header.multimediaPrograms')}</p>
            </Link>
        </div>
    </div>
</li>
<Link to="/faq">
                            <li className={style.navLi}>{t('header.faqs')}</li>
                        </Link>
                    </ul>
                    </div>
                </nav>
 
            {isMenuOpen && (
    <div className={`${style.mobileMenu} ${style.mobileMenuOpen}`}>
        <div className={style.mobileMenuHeader}>
            <Link to="/" onClick={closeMenu}>
                <img
                    src='https://salymbekov.com/wp-content/uploads/2023/02/logo-salymbekov-university-site.png'
                    alt='Salymbekov College Logo'
                    className={style.mobileLogo}
                />
            </Link>
        </div>
        <div className={style.searchMenu}>
        <input
        type="text"
        placeholder={t('header.searchPlaceholder')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}>
        </input>
        <Button onClick={handleSearch}fontSize='small'>
        <Search fontSize='small' />
        </Button>
        </div>
        <ul className={style.mobileMenuNav}>
            <li className={style.navLi}>
                {t('header.college')}
                <div className={`${style.dropdownContent} ${isMenuOpen ? style.show : ''}`}>
                    <Link to="/college" onClick={closeMenu}><p>{t('header.aboutCollege')}</p></Link>
  <Link to="/director"onClick={closeMenu}><p>{t('header.letterFromDirector')}</p></Link>
  <Link to="/teachers"onClick={closeMenu}><p>{t('header.teachers')}</p></Link>
  <Link to="/contacts"onClick={closeMenu}><p>{t('header.contacts')}</p></Link>
  <p>
  <a href='https://salymbekov.com/en/' target="_blank" rel="noopener noreferrer">
    {t('header.mainsite')}
  </a>
  </p>
                </div>
            </li>
            <li className={style.navLi}>
                {t('header.applicants')}
                <div className={style.dropdownContent}>
                <div>    
    <Link to="/admissionCommittee"onClick={closeMenu}><h1 className={style.applicantsText}>{t('header.admissionCommittee')}</h1></Link>
    <Link to="/napravlenija-podgotovki"onClick={closeMenu}><h1 className={style.applicantsText}>{t('header.areasoftraining')}</h1></Link>
    <h1 className={style.applicantsText}>{t('header.professions')}</h1>
    <Link to="/computerscience"onClick={closeMenu}><p>{t('header.computerScience')}</p></Link>
    <Link to="/multimediaprograms"onClick={closeMenu}><p>{t('header.multimediaPrograms')}</p></Link>
    <Link to="/mobile"onClick={closeMenu}><p>{t('header.mobileApps')}</p></Link>
    <Link to="/stipendii-i-lgoty"onClick={closeMenu}><h1>{t('header.scholarships')}</h1></Link>
</div>

<div>
    <Link to="/price"onClick={closeMenu}><h1>{t('header.price')}</h1></Link>
    <Link to="/pravila-i-plan-priema"onClick={closeMenu}><h1>{t('header.admissionRulesAndPlan')}</h1></Link>
    <h1>{t('header.admissionProcedure')}</h1>
    <Link to="/requiredDocuments"onClick={closeMenu}><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/admissionRegulations"onClick={closeMenu}><p>{t('header.admissionRegulations')}</p></Link>
    <Link to="/selectionSchedule"onClick={closeMenu}><p>{t('header.selectionSchedule')}</p></Link>
    <Link to="/adaptacionnaja-programma"onClick={closeMenu}><h1>{t('header.adaptationProgram')}</h1></Link>
</div>

<div>
<Link to="/collegeInfrastructure"onClick={closeMenu}><h1>{t('header.collegeInfrastructure')}</h1></Link>
</div>
                </div>
            </li>
            <li className={style.navLi}>

{t('header.students')}
<div className={style.dropdownContent}>
    <div>
    <h1>{t('forstudents.resourceBase.links.informationSystem')}</h1>
    <Link to="/information-system" onClick={closeMenu}><p>{t('forstudents.resourceBase.links.informationSystem')}</p></Link>
    </div>
<div>
    <h1>{t('forstudents.studentCommunities.title')}</h1>
    <Link to="/student-council" onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.studentCouncil')}</p></Link>
    <Link to="/debate-club" onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.debateClub')}</p></Link>
    <Link to="/tutors-movement" onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.tutorsMovement')}</p></Link>
    <Link to="/creative-groups" onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.creativeGroups')}</p></Link>
  </div>

  {/* Ресурсная база */}
  <div>
    <h1>{t('forstudents.resourceBase.title')}</h1>
    <Link to="/instructions" onClick={closeMenu}><p>{t('forstudents.resourceBase.links.instructions')}</p></Link>
    <Link to="http://icsjlibrary.inti.edu.my/library/custom/home.jsp" onClick={closeMenu}><p>{t('forstudents.resourceBase.links.library')}</p></Link>
    
    <Link to="/resources" onClick={closeMenu}><p>{t('forstudents.resourceBase.links.resources')}</p></Link>
  </div>

  <div>
  <h1>{t('forstudents.studySchedules.title')}</h1>
        <Link to={`/documents/15`} onClick={closeMenu}><p>{t('forstudents.studySchedules.links.modulesExams')}</p></Link>
        <Link to="/schedule" onClick={closeMenu}><p>{t('forstudents.studySchedules.links.collegeSchedule')}</p></Link>
        <Link to={`/documents/14`} onClick={closeMenu}>
        <p>{t('forstudents.studySchedules.links.ScheduleEducationalProcess')}</p>
        </Link>
  </div>

  <div>
        <h1>{t('forstudents.studentsProjects.title')}</h1>
        <Link to="/fourthyearprojects"onClick={closeMenu}><p>{t('forstudents.studentsProjects.links.fourthGrade')}</p></Link>
      </div>
</div>
</li>
<li className={style.navLi} style={{columnGap: "150px"}}>
    {t('header.documents')}
    <div className={style.dropdownContent}>
        <div>
            <h1>{t('documents2.main')}</h1>
            <Link to={`/documents/6`} onClick={closeMenu}>
                <p>{t('documents2.certificate')}</p>
            </Link>
            <Link to={`/documents/4`}onClick={closeMenu}>
                <p>{t('documents2.license')}</p>
            </Link>            
        </div>
        <div>
        <h1>{t('documents2.AccreditationCertificates')}</h1>
            <Link to={`/documents/7`}onClick={closeMenu}>
                <p>{t('documents2.InstitutionalAccreditation')}</p>
            </Link>
            <Link to={`/documents/8`}onClick={closeMenu}>
                <p>{t('documents2.InternationalInstitutionalAccreditation')}</p>
            </Link>
            <Link to={`/documents/9`}onClick={closeMenu}>
                <p>{t('documents2.InternationalProgramAccreditation')}</p>
            </Link>
        </div>
        <div>
        <h1>{t('documents2.curricula')}</h1>
            <Link to={`/documents/10`}onClick={closeMenu}>
                <p>{t('header.computerScience')}</p>
            </Link>
            <Link to={`/documents/11`}onClick={closeMenu}>
                <p>{t('header.multimediaComputing')}</p>
            </Link>
            <Link to={`/documents/12`}onClick={closeMenu}>
                <p>{t('header.multimediaPrograms')}</p>
            </Link>
        </div>
    </div>
</li>
            {/* <li className={style.navLi}>
    {t('header.documents')}
    <div className={style.dropdownContent}>
        <div className={style.section}>
            <h3>Основное положение</h3>
            <Link to={`/documents/0`}>
                <p>План</p>
            </Link>
            <Link to={`/documents/1`}>
                <p>Настольный Теннис 2024</p>
            </Link>
            <Link to={`/documents/2`}>
                <p>План УВР-2024</p>
            </Link>
        </div>

        <div className={style.section}>
            <h3>Планы</h3>
            <Link to={`/documents/3`}>
                <p>Кураторы</p>
            </Link>
        </div>

        <div className={style.section}>
            <h3>Отчеты</h3>
            <Link to={`/documents/4`}>
                <p>Лицензия колледжа</p>
            </Link>
            <Link to={`/documents/5`}>
                <p>Свидетельство</p>
            </Link>
        </div>
    </div>
</li> */}

            <Link to="/faq"onClick={closeMenu}>
                            <li className={style.navLi}>{t('header.faqs')}</li>
                        </Link>
            <div className={style.mobileActions}>
                <LanguageSwitcher />
            </div>
        </ul>
    </div>
)}
        </>
    );
};