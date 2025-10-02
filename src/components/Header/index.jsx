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
  {/*  */}
  <Link to="/news"><p>{t('header.news')}</p></Link>
</div>





{/* <div>
      <h1>{t('documents2.gak')}</h1>
      <Link to={`/documents/40`}>
        <p>{t('documents2.gakOrder')}</p>
      </Link>
      <Link to={`/documents/41`}>
        <p>{t('documents2.gakChairReport')}</p>
      </Link>
      <Link to={`/documents/42`}>
        <p>{t('documents2.examSheet1GakMge')}</p>
      </Link>
      <Link to={`/documents/43`}>
        <p>{t('documents2.protocols1To9GakMge')}</p>
      </Link>
      <Link to={`/documents/44`}>
        <p>{t('documents2.monKrOrderOnGakChairApproval')}</p>
      </Link>
      <Link to={`/documents/45`}>
        <p>{t('documents2.gakInterdisciplinaryStateExamReport')}</p>
      </Link>
      <Link to={`/documents/46`}>
        <p>{t('documents2.order31OnGak2024')}</p>
      </Link>
    </div> */}





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
<Link to={`/documents/8`}>
    <h1>{t('header.admissionRulesAndPlan')}</h1>
            </Link> 
            <h1>{t('header.admissionProcedure')}</h1>
    <Link to="/requiredDocuments"><p>{t('header.requiredDocuments')}</p></Link>
    <Link to="/selectionSchedule"><p>{t('header.selectionSchedule')}</p></Link>
    <Link to="/price"><h1>{t('header.price')}</h1></Link>
</div>

{/* <div>
<Link to="/collegeInfrastructure"><h1>{t('header.collegeInfrastructure')}</h1></Link>
</div> */}

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
        {/* <Link to="/tutors-movement"><p>{t('forstudents.studentCommunities.links.tutorsMovement')}</p></Link> */}
        <Link to="/creative-groups"><p>{t('forstudents.studentCommunities.links.creativeGroups')}</p></Link>
      </div>

      {/* Ресурсная база */}
      <div>
        <h1>{t('forstudents.resourceBase.title')}</h1>
        <Link to="/instructions"><p>{t('forstudents.resourceBase.links.instructions')}</p></Link>
        <Link to="/resources"><p>{t('forstudents.resourceBase.links.resources')}</p></Link>
      </div>

      <div>
        <h1>{t('forstudents.studySchedules.title')}</h1>
        <Link to={`/documents/16`}><p>{t('forstudents.studySchedules.links.modulesExams')}</p></Link>
        <Link to="/schedule"><p>{t('forstudents.studySchedules.links.collegeSchedule')}</p></Link>
        <Link to={`/documents/6`}>
        <p>{t('forstudents.studySchedules.links.ScheduleEducationalProcess')}</p>
        </Link>
      </div>

      <div>
        <h1>{t('forstudents.studentsProjects.title')}</h1>
        <Link to="/studentProjects"><p>{t('documents2.certificate2')}</p></Link>
      </div>

      <div>
        <h1>{t('forstudents.anketa.title')}</h1>
        <Link to="/documents/105">
        <p>
          {t('forstudents.anketa.otchet')}
        </p>
        </Link>
        <Link to="/documents/107">
        <p>{t('forstudents.anketa.anketaotcher')}</p>
        </Link>
      </div>
    </div>
</li>

<li className={style.navLi} style={{columnGap: "150px"}}>
    {t('header.documents')}
    <div className={style.dropdownContent}>
    <div>
            <h1>{t('documents2.main')}</h1>
             {/* <Link to={`/documents/110`} >
                <p>{t('header.job')}</p>
            </Link>
            <Link to={`/documents/5`} >
                <p>{t('documents2.certificate')}</p>
            </Link> */}
            <Link to={`/documents/4`}>
                <p>{t('documents2.license')}</p>
            </Link>          
            {/* <Link to={`/documents/9`}>
                <p>{t('documents2.InstitutionalAccreditation')}</p>
            </Link> */}
            <Link to={`/documents/10`}>
                <p>{t('documents2.InternationalInstitutionalAccreditation')}</p>
            </Link>
            <Link to={`/documents/11`}>
                <p>{t('documents2.InternationalProgramAccreditation')}</p>
            </Link>  
            <h1>{t('documents2.mission')}</h1>
            <p>
  {t(`documents2.missionText`).split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</p>
            {/* <h1>{t('documents2.strategyPlan')}</h1>
            <Link to={`/documents/109`}>
            <p>{t('documents2.strategyPlan')}</p>
            </Link> */}
        </div>
        {/* <div>
        <h1>{t('documents2.AccreditationCertificates')}</h1>

        </div> */}
        <div>
        <h1>{t('documents2.curricula')}</h1>
            <Link to={`/documents/12`}>
                <p>{t('header.computerScience')}</p>
            </Link>
            <Link to={`/documents/13`}>
                <p>{t('header.multimediaComputing')}</p>
            </Link>
            <Link to={`/documents/14`}>
                <p>{t('header.multimediaPrograms')}</p>
            </Link>
            <Link to={`/documents/93`}>
                <p>Diploma Multimedia Programs</p>
            </Link>
            <Link to={`/documents/94`}>
                <p>Diploma Mobile Computing</p>
            </Link>
            <Link to={`/documents/95`}>
                <p>Diploma Computer Science</p>
            </Link>
        </div>
        {/* <div>
          <h1>{t("documents2.ps")}</h1>
          <Link to={`/documents/97`}>
                <p>2022-2023</p>
            </Link>
            <Link to={`/documents/54`}>
                <p>2023-2024</p>
            </Link>
            <Link to={`/documents/96`}>
                <p>2024-2025</p>
            </Link>
            <Link to={`/documents/102`}>
                <p>{t('documents2.schala')}</p>
            </Link>
        </div> */}
        {/* <div>
        <h1>{t('documents2.umsCouncil')}</h1>
        <Link to={`/documents/17`}>
          <p>{t('documents2.umsCouncil')}</p>
        </Link>
        <Link to={`/documents/47`}>
          <p>{t('documents2.umsProtocols')}</p>
        </Link>
        <Link to={`/documents/48`}>
          <p>{t('documents2.umsDecisionExcerpt')}</p>
        </Link>
        <Link to={`/documents/49`}>
          <p>{t('documents2.umsRegulations')}</p>
        </Link>
      </div> */}
      {/* <div>
        <h1>{t("documents2.plansDoc")}</h1>
        <Link to="/documents/50">
        <p>{t("documents2.parliament_plan")}</p>
      </Link>
      <Link to="/documents/51">
        <p>{t("documents2.ums_plan")}</p>
      </Link>
      <Link to="/documents/52">
        <p>{t("documents2.methodist_plan")}</p>
      </Link>
      <Link to="/documents/53">
        <p>{t("documents2.ps_plan")}</p>
      </Link>
      <Link to="/documents/54">
        <p>{t("documents2.ur001_plan")}</p>
      </Link>
      <Link to="/documents/55">
        <p>{t("documents2.ur_plan")}</p>
      </Link>
      <Link to="/documents/56">
        <p>{t("documents2.od_plan")}</p>
      </Link>
      <Link to="/documents/57">
        <p>{t("documents2.admission_plan")}</p>
      </Link>
      <Link to="/documents/104">
      <p>МТБ</p>
      </Link>
      </div> */}
      {/* <div>
        <h1>{t('documents2.position')}</h1>
        <Link to={`/documents/22`}>
          <p>{t('documents2.mentoringRegulations')}</p>
        </Link>
        <Link to={`/documents/23`}>
          <p>{t('documents2.studentEthicsCode')}</p>
        </Link>
        <Link to={`/documents/24`}>
          <p>{t('documents2.teachersEthicsCode')}</p>
        </Link>
        <Link to={`/documents/25`}>
          <p>{t('documents2.ppsRatingRegulations')}</p>
        </Link>
        <Link to={`/documents/26`}>
          <p>{t('documents2.trustBoxRegulations')}</p>
        </Link>
        <Link to={`/documents/27`}>
          <p>{t('documents2.mrsoRegulations')}</p>
        </Link>
        <Link to={`/documents/28`}>
          <p>{t('documents2.oopRegulations')}</p>
        </Link>
        <Link to={`/documents/29`}>
          <p>{t('documents2.smkRegulations')}</p>
        </Link>
        <Link to={`/documents/30`}>
          <p>{t('documents2.hrDepartmentRegulations')}</p>
        </Link>
        <Link to={`/documents/31`}>
          <p>{t('documents2.disciplinaryRegulations')}</p>
        </Link>
        <Link to={`/documents/32`}>
          <p>{t('documents2.motivationFundRegulations')}</p>
        </Link>
        <Link to={`/documents/33`}>
          <p>{t('documents2.qualificationUpgradeRegulations')}</p>
        </Link>
        <Link to={`/documents/34`}>
          <p>{t('documents2.studentsRatingRegulations')}</p>
        </Link>
        <Link to={`/documents/35`}>
          <p>{t('documents2.qualityCouncilRegulations')}</p>
        </Link>
        <Link to={`/documents/36`}>
          <p>{t('documents2.studentsSocialSupportRegulations')}</p>
        </Link>
        <Link to={`/documents/37`}>
          <p>{t('documents2.eDocFlowRegulations')}</p>
        </Link>
        <Link to={`/documents/70`}>
        <p>{t('documents2.quality_management_system')}</p>
      </Link>
      <Link to={`/documents/71`}>
        <p>{t('documents2.it_regulation')}</p>
      </Link>
      <Link to={`/documents/72`}>
        <p>{t('documents2.stakeholder_interaction_regulation')}</p>
      </Link>
      <Link to={`/documents/73`}>
        <p>{t('documents2.student_regulation')}</p>
      </Link>
      <Link to={`/documents/90`}>
        <p>{t('documents2.scientific_work_organization')}</p>
      </Link>
      <Link to={`/documents/91`}>
        <p>{t('documents2.educational_methodological_complex')}</p>
      </Link>
      <Link to={`/documents/92`}>
        <p>{t('documents2.rewarding_regulation')}</p>
      </Link>
      <Link to={`/documents/98`}>
        <p>Об анкетировании</p>
      </Link>
      <Link to={`/documents/99`}>
        <p>О подборе кадров колледжа</p>
      </Link>
      <Link to={`/documents/100`}>
        <p>МРС</p>
      </Link>
      <Link to={`/documents/101`}>
        <p>Памятка кураторов</p>
      </Link>
      <Link to={`/documents/102`}>
        <p>Кадровая политики колледжа</p>
      </Link>
      </div> */}
      {/* <div>
      <h1>{t('documents2.job_instructions')}</h1>
      <Link to={`/documents/58`}>
        <p>{t('documents2.chief_accountant')}</p>
      </Link>
      <Link to={`/documents/59`}>
        <p>{t('documents2.commander')}</p>
      </Link>
      <Link to={`/documents/60`}>
        <p>{t('documents2.vice_reector_language')}</p>
      </Link>
      <Link to={`/documents/61`}>
        <p>{t('documents2.vice_reector_education')}</p>
      </Link>
      <Link to={`/documents/62`}>
        <p>{t('documents2.rector')}</p>
      </Link>
      <Link to={`/documents/63`}>
        <p>{t('documents2.hr_leader')}</p>
      </Link>
      <Link to={`/documents/64`}>
        <p>{t('documents2.driko_leader')}</p>
      </Link>
      <Link to={`/documents/65`}>
        <p>{t('documents2.administration_manager')}</p>
      </Link>
      <Link to={`/documents/66`}>
        <p>{t('documents2.msc_specialist')}</p>
      </Link>
      <Link to={`/documents/67`}>
        <p>{t('documents2.scientific_secretary')}</p>
      </Link>
      <Link to={`/documents/68`}>
        <p>{t('documents2.chief_director')}</p>
      </Link>
      <Link to={`/documents/69`}>
        <p>{t('documents2.college_director')}</p>
      </Link>
    </div>
      <div>
      <h1>{t('documents2.contracts')}</h1>
      <Link to={`/documents/74`}>
        <p>{t('documents2.inha_technical_college')}</p>
      </Link>
      <Link to={`/documents/75`}>
        <p>{t('documents2.inha_university')}</p>
      </Link>
      <Link to={`/documents/76`}>
        <p>{t('documents2.itm_university')}</p>
      </Link>
      <Link to={`/documents/77`}>
        <p>{t('documents2.istinye_university')}</p>
      </Link>
      <Link to={`/documents/78`}>
        <p>{t('documents2.lincoln_university')}</p>
      </Link>
      <Link to={`/documents/79`}>
        <p>{t('documents2.salymbekov_university')}</p>
      </Link>
      <Link to={`/documents/80`}>
        <p>{t('documents2.melon_pro_contract')}</p>
      </Link>
      <Link to={`/documents/81`}>
        <p>{t('documents2.choiro_it_community_contract')}</p>
      </Link>
      <Link to={`/documents/82`}>
        <p>{t('documents2.adam_cooperation_contract')}</p>
      </Link>
      <Link to={`/documents/83`}>
        <p>{t('documents2.kfu_contract')}</p>
      </Link>
      <Link to={`/documents/84`}>
        <p>{t('documents2.salymbekov_eotvos_lorand_contract')}</p>
      </Link>
      <Link to={`/documents/85`}>
        <p>{t('documents2.salymbekov_kodolanyi_uni_contract')}</p>
      </Link>
      <Link to={`/documents/86`}>
        <p>{t('documents2.salymbekov_metu_contract')}</p>
      </Link>
      <Link to={`/documents/87`}>
        <p>{t('documents2.sbs_branch_contracts')}</p>
      </Link>
      <Link to={`/documents/88`}>
        <p>{t('documents2.polytech_memorandum')}</p>
      </Link>
      <Link to={`/documents/89`}>
        <p>{t('documents2.three_party_memorandum_moin_kr')}</p>
      </Link>
      <Link to={`/documents/106`}>
      <p>Меморандум MISO</p>
      </Link>
      <Link to={`/documents/108`}>
      <p>Research4life</p>
      </Link>
      </div> */}









    </div>
</li>
<li className={style.navLi}>
            {t('header.contacts')}
            <div className={style.dropdownContent}>
              <div>
                <Link to="/contacts"><p>{t('header.contacts')}</p></Link>
                            <Link to="/faq"onClick={closeMenu}>
                            <p>{t('header.faqs')}</p> </Link>
                <Link to='/documents/110'><p>{t('vacancies_button_text')}</p></Link>            
                       
              </div>
            </div>
          </li>
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
        <div>
            <h1>{t('documents2.councils')}</h1>
            <Link to={`/documents/16`}onClick={closeMenu}>
                <p>{t('documents2.teachersCouncil')}</p>
            </Link>
            <Link to={`/documents/17`}onClick={closeMenu}>
                <p>{t('documents2.umsCouncil')}</p>
            </Link>
            <Link to={`/documents/18`}onClick={closeMenu}>
                <p>{t('documents2.studentParliament')}</p>
            </Link>
            <Link to={`/documents/19`}onClick={closeMenu}>
                <p>{t('documents2.admissionsCommittee')}</p>
            </Link>
            <Link to={`/documents/20`}onClick={closeMenu}>
                <p>{t('documents2.discountCommittee')}</p>
            </Link>
        </div>
        <div>
            <h1>Положение</h1>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
            <Link to={`/documents/21`}></Link>
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


            <div className={style.mobileActions}>
                <LanguageSwitcher />
            </div>
        </ul>
    </div>
)}
        </>
    );
};