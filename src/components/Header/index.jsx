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
export const Header = ({pdfFiles, pdfFilesForStudents}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);

    const toggleDropdown2 = () => {
      setIsDropdownOpen2(!isDropdownOpen2);
    };
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
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
    {t('header.itcollege')}
    </h1>
  <Link to="/college"><p>{t('header.aboutCollege')}</p></Link>
  <Link to="/director"><p>{t('header.letterFromDirector')}</p></Link>
  <Link to="/teachers"><p>{t('header.teachers')}</p></Link>
  <Link to="/contacts"><p>{t('header.contacts')}</p></Link>
  <p>
  <a href='https://salymbekov.com/en/' target="_blank" rel="noopener noreferrer">
    {t('header.mainsite')}
  </a>
  </p>
</div>
    <div>
    <h1>{t('header.malaysia')}</h1>
    <p>
    <a href="https://www.lincoln.edu.my" target="_blank" rel="noopener noreferrer">
        Lincoln University
    </a>
</p>
<p>
    <a href="https://newinti.edu.my" target="_blank" rel="noopener noreferrer">
        INTI University
    </a>
</p>

</div>

    </div>
</li>
<li className={style.navLi}>
    {t('header.applicants')}
    <div className={style.dropdownContent} style={{height:"450px", columnGap: "150px"}}>

    <div>    
    <Link to="/admissionCommittee"><h1 className={style.applicantsText}>{t('header.admissionCommittee')}</h1></Link>
    <Link to="/napravlenija-podgotovki"><h1 className={style.applicantsText}>{t('header.areasoftraining')}</h1></Link>
    <h1 className={style.applicantsText}>{t('header.professions')}</h1>
    <Link to="/computerscience"><p>{t('header.computerScience')}</p></Link>
    <Link to="/multimediaprograms"><p>{t('header.multimediaPrograms')}</p></Link>
    <Link to="/mobile"><p>{t('header.mobileApps')}</p></Link>
    <Link to="/stipendii-i-lgoty"><h1>{t('header.scholarships')}</h1></Link>
</div>

<div>
    <Link to="/price"><h1>{t('header.price')}</h1></Link>
    <Link to="/pravila-i-plan-priema"><h1>{t('header.admissionRulesAndPlan')}</h1></Link>
    <h1>{t('header.admissionProcedure')}</h1>
    <Link to="/requiredDocuments"><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/admissionRegulations"><p>{t('header.admissionRegulations')}</p></Link>
    <Link to="/selectionSchedule"><p>{t('header.selectionSchedule')}</p></Link>
    <Link to="/adaptacionnaja-programma"><h1>{t('header.adaptationProgram')}</h1></Link>
</div>

<div>
    <h1>{t('header.careerOrientation')}</h1>
    <h1>{t('header.officialDealers')}</h1>
    <h1>{t('header.transferProcedure')}</h1>
    <Link to="/requiredDocuments"><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/transferRegulations"><p>{t('header.transferRegulations')}</p></Link>
    <Link to="/transferSchedule"><p>{t('header.transferSchedule')}</p></Link>
    <h1>{t('header.collegeInfrastructure')}</h1>
</div>

    </div>
</li>
            <li className={style.navLi}>

    {t('header.students')}
    <div className={style.dropdownContent}>
        <div>
        <h1>{t('forstudents.ebilim.title')}</h1>
        <p>
        <a href='https://ebilim.salymbekov.com/Account/Login?ReturnUrl=%2F' target="_blank" rel="noopener noreferrer">
    {t('forstudents.ebilim.title')}
  </a>        </p>
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
        <Link to="/information-system"><p>{t('forstudents.resourceBase.links.informationSystem')}</p></Link>
        <Link to="https://lib.salymbekov.com"><p>{t('forstudents.resourceBase.links.library')}</p></Link>
        <Link to="/resources"><p>{t('forstudents.resourceBase.links.resources')}</p></Link>
      </div>

      <div>
        <h1>{t('forstudents.studySchedules.title')}</h1>
        <Link to="/modules-exams"><p>{t('forstudents.studySchedules.links.modulesExams')}</p></Link>
        <p>
  <a 
    href="https://docs.google.com/spreadsheets/d/1SZxYMnyEgPgMIyFvcisNarYN0pZjZxQ4/edit?hl=ru&pli=1&gid=331563060#gid=331563060" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {t('forstudents.studySchedules.links.collegeSchedule')}
  </a>
</p>
        {pdfFilesForStudents.map((file, index) => (
            <Link key={index} to={`/documents/${index}`}>
            <p>{file.title}</p>
        </Link>
        ))}
      </div>

      <div>
        <h1>{t('forstudents.conditionsOpportunities.title')}</h1>
        <Link to="/social-support"><p>{t('forstudents.conditionsOpportunities.links.socialSupport')}</p></Link>
        <Link to="/psychological-support"><p>{t('forstudents.conditionsOpportunities.links.psychologicalSupport')}</p></Link>
        <Link to="/student-service-center"><p>{t('forstudents.conditionsOpportunities.links.studentServiceCenter')}</p></Link>
        <Link to="/adaptation-programs"><p>{t('forstudents.conditionsOpportunities.links.adaptationPrograms')}</p></Link>
      </div>
    </div>
</li>

<li className={style.navLi}>
{t('header.documents')}
<div className={style.dropdownContent}>
                    {pdfFiles.map((file, index) => (
                        <Link key={index} to={`/documents/${index}`}>
                            <p>{file.title}</p>
                        </Link>
                    ))}
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
    <h1>{t('header.careerOrientation')}</h1>
    <h1>{t('header.officialDealers')}</h1>
    <h1>{t('header.transferProcedure')}</h1>
    <Link to="/requiredDocuments"onClick={closeMenu}><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/transferRegulations"onClick={closeMenu}><p>{t('header.transferRegulations')}</p></Link>
    <Link to="/transferSchedule"onClick={closeMenu}><p>{t('header.transferSchedule')}</p></Link>
    <h1>{t('header.collegeInfrastructure')}</h1>
</div>
                </div>
            </li>
            <li className={style.navLi}>
            {t('header.students')}
            <div className={style.dropdownContent}>
        <div>
        <h1>{t('forstudents.ebilim.title')}</h1>
        <p>
        <a href='https://ebilim.salymbekov.com/Account/Login?ReturnUrl=%2F' target="_blank" rel="noopener noreferrer">
    {t('forstudents.ebilim.title')}
  </a>        </p>
        </div>
    <div>
        <h1>{t('forstudents.studentCommunities.title')}</h1>
        <Link to="/student-council"onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.studentCouncil')}</p></Link>
        <Link to="/debate-club"onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.debateClub')}</p></Link>
        <Link to="/tutors-movement"onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.tutorsMovement')}</p></Link>
        <Link to="/creative-groups"onClick={closeMenu}><p>{t('forstudents.studentCommunities.links.creativeGroups')}</p></Link>
      </div>

      {/* Ресурсная база */}
      <div>
        <h1>{t('forstudents.resourceBase.title')}</h1>
        <Link to="/instructions"onClick={closeMenu}><p>{t('forstudents.resourceBase.links.instructions')}</p></Link>
        <Link to="/information-system"onClick={closeMenu}><p>{t('forstudents.resourceBase.links.informationSystem')}</p></Link>
        <Link to="https://lib.salymbekov.com"onClick={closeMenu}><p>{t('forstudents.resourceBase.links.library')}</p></Link>
        <Link to="/resources"onClick={closeMenu}><p>{t('forstudents.resourceBase.links.resources')}</p></Link>
      </div>

      <div>
        <h1>{t('forstudents.studySchedules.title')}</h1>
        <Link to="/modules-exams"onClick={closeMenu}><p>{t('forstudents.studySchedules.links.modulesExams')}</p></Link>
        <p>
  <a 
    href="https://docs.google.com/spreadsheets/d/1SZxYMnyEgPgMIyFvcisNarYN0pZjZxQ4/edit?hl=ru&pli=1&gid=331563060#gid=331563060" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {t('forstudents.studySchedules.links.collegeSchedule')}
  </a>
</p>
        {pdfFilesForStudents.map((file, index) => (
            <Link key={index} to={`/documents/${index}`}>
            <p>{file.title}</p>
        </Link>
        ))}
      </div>

      <div>
        <h1>{t('forstudents.conditionsOpportunities.title')}</h1>
        <Link to="/social-support"onClick={closeMenu}><p>{t('forstudents.conditionsOpportunities.links.socialSupport')}</p></Link>
        <Link to="/psychological-support"onClick={closeMenu}><p>{t('forstudents.conditionsOpportunities.links.psychologicalSupport')}</p></Link>
        <Link to="/student-service-center"onClick={closeMenu}><p>{t('forstudents.conditionsOpportunities.links.studentServiceCenter')}</p></Link>
        <Link to="/adaptation-programs"onClick={closeMenu}><p>{t('forstudents.conditionsOpportunities.links.adaptationPrograms')}</p></Link>
      </div>
    </div>
            </li>
            <li className={style.navLi}>

                {t('header.documents')}
                <div className={style.dropdownContent}>
                    {pdfFiles.map((file, index) => (
                        <Link key={index} to={`/documents/${index}`}>
                            <p>{file.title}</p>
                        </Link>
                    ))}
                </div>
            </li>
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