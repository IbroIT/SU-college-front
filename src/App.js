// **Импорты стилей**
import './App.css';

// **Импорты библиотек**
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// **Импорты компонентов**
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SearchResults from './components/SearchBar/Search';

// **Импорты страниц**
import { AboutCollege } from './pages/AboutCollege';
import { AdaptationPrograms } from './pages/AdaptationPrograms';
import { AdmissionsRegulations } from './pages/AdmissionsRegulations';
import { AdmissionCommittee } from './pages/AdmissionsCommittee';
import { AfterEleventhGrade } from './pages/AfterEleventhGrade';
import { AfterNinthGrade } from './pages/AftrerNinthGrade';
import { CollegeInfrastructure } from './pages/CollegeInfrastructure';
import { Contacts } from './pages/Contacts';
import CreativeTeams from './pages/Creative';
import { DebateClub } from './pages/DebateClub';
import { Direction } from './pages/Direction';
import { Director } from './pages/Director';
import DocumentViewer from './pages/DocumentViewer';
import { FAQ } from './pages/FAQ';
import FirstYear from './pages/FirstYear';
import FourthYear from './pages/Fourth';
import { InformationSystem } from './pages/InformationSystem';
import { Instructions } from './pages/Instructions';
import { Main } from './pages/Main';
import { Mission } from './pages/Mission';
import { MobileDevelopment } from './pages/MobileDevelopment';
import { MultimediaPrograms } from './pages/MultimediaPrograms';
import { News } from './pages/News';
import { NotFound } from './pages/NotFound';
import { Owner } from './pages/Owner';
import { PhyschoHelp } from './pages/PhyschoHelp';
import { Price } from './pages/Price';
import { Resources } from './pages/Resources';
import Schedule from './pages/CollegeSchedule';
import { Scholarships } from './pages/Scholarships';
import SecondYear from './pages/SecondYear';
import { SelectionSchedule } from './pages/SelectionSchedule';
import { SocialSupport } from './pages/SocialSupport';
import { StudentCouncil } from './pages/StudentCouncil';
import { StudentService } from './pages/StudentService';
import CollegeStudentsPage from './pages/Students/Students';
import { Teachers } from './pages/Teachers';
import ThirdYear from './pages/Third';
import { TutorMovement } from './pages/Tutors';
import { ComputerScience } from './pages/ComputerScience';
import { Documents } from './pages/Documents';
import StudentProjects from './pages/StudentProjects';
// **Импорты PDF-файлов**
import firstPdf from '../src/pdfs/планпс.pdf';
import secondPdf from '../src/pdfs/Настольный теннис 26 ноября 2024.pdf';
import thirdPdf from '../src/pdfs/План УВР-2024-25.PDF';
import fourthPdf from '../src/pdfs/Кураторы 2024-2025.docx';
import fifthPdf from '../src/pdfs/Лицензия колледжа (новая).pdf';
import sixthPdf from '../src/pdfs/СВИДЕТЕЛЬСТВО (1).pdf';
import seventhPdf from '../src/pdfs/График учебного процесса.pdf';
import eigthPdf from '../src/pdfs/Правила приема_2024-2025.pdf';
import tenthPdf from '../src/pdfs/План приема_2024-2025.pdf';
import eleventhPdf from '../src/pdfs/1. Institutional accreditation.pdf';
import twelthPdf from '../src/pdfs/2. International Institutional accreditation.pdf';
import thirteenthPdf from '../src/pdfs/3 CERTIFICATE with Appendix (Int. Program Accreditation).pdf';
import lastpdf from '../src/pdfs/Сертификат_колледж.PDF';
import fourteenthPdf from '../src/pdfs/УП_СПО_КН_20224.PDF';
import fifteenthPdf from '../src/pdfs/УП_СПО_МВ_20224.PDF';
import sixteenthPdf from '../src/pdfs/УП_СПО_МП_20224.PDF';
import seventeenthPdf from '../src/pdfs/КҮБѲЛҮК.jpg';
import eighteenthPdf from '../src/pdfs/График экзаменов зимней сессии 2024-2025.pdf';
import nineteenthPdf from '../src/pdfs/Состав Педсовета 2024-2025.pdf'
import twentieth from '../src/pdfs/Состав учебно-методического совета 2024-2025.pdf'
import twentiethFirst from '../src/pdfs/Состав студпарламента 2024-2025.pdf'
import twentiethSecond from'../src/pdfs/Состав приемной комиссии 2024-2025.pdf'
import twentiethThird from'../src/pdfs/Состав льготной комиссии 2024-2025.pdf'
import twentiethFourth from '../src/pdfs/Положение о кураторстве.pdf';
import twentiethFifth from '../src/pdfs/Этический кодекс студента.pdf';
import twentiethSixth from '../src/pdfs/Этический_кодекс_преподавателей,_сотрудников_и_обучающихся.pdf';
import twentiethSeventh from '../src/pdfs/Положение о рейтинге ППС.pdf';
import twentiethEighth from '../src/pdfs/Положение о Ящике доверия СУ.pdf';
import twentiethNineth from '../src/pdfs/Положение об МРСО.pdf';
import thirtieth from '../src/pdfs/Положение ООП.pdf';
import thirtiethFirst from '../src/pdfs/Положение СМК СУ.pdf';
import thirtiethSecond from '../src/pdfs/Положение_о_департаменте_HR_и_делопроизводства.pdf';
import thirtiethThird from '../src/pdfs/Положение_о_дисциплинарных_и_финансовых_взысканиях_сотрудников.pdf';
import thirtiethFourth from '../src/pdfs/Положение_о_мотивационном_фонде_СУ.pdf';
import thirtiethFifth from '../src/pdfs/Положение_о_повышение_квалификации_профессорско_преподавательского.pdf';
import thirtiethSixth from '../src/pdfs/Положение_о_рейтинге_студентов_СУ1.pdf';
import thirtiethSeventh from '../src/pdfs/Положение_о_совете_по_качеству_образования.pdf';
import thirtiethEigth from '../src/pdfs/Положение_о_социальной_поддержке_студентов_СУ.pdf';
import thirtiethNineth from '../src/pdfs/Положение_об_электронном_документообороте.pdf';
import fourtieth from '../src/pdfs/5. Almazbek uulu Alymbek_Study Plan.pdf'
import fourtiethFirst from '../src/pdfs/2. Abdimutalipov Asan_Study Plan.pdf'

import fourtiethSecond from '../src/pdfs/Приказ 14 ГАК МГЭ 2023.pdf'
import fourtiethThird from '../src/pdfs/Отчет председателя ГАК МГЭ 2023-24.pdf'
import fourtiethFourth from '../src/pdfs/Экзамен. ведомость 1 ГАК МГЭ 08_06_2023.pdf'
import fourtiethFifth from '../src/pdfs/Протоколы 1-9 ГАК МГЭ 2022-23 уч год.pdf'
import fourtiethSixth from '../src/pdfs/Приказ МОН КР об утверж. председателей ГАК 2023.pdf'
import fourtiethSeventh from '../src/pdfs/Отчет ГАК Междисц гос экз 2023-24.pdf'
import fourtiethEigth from '../src/pdfs/Приказ 31 об утверж пред комис ГАК 2024 г.pdf'

import fourtiethNineth from '../src/pdfs/Протокол 1 УМС от 25_08_2022.pdf'
import fifth from '../src/pdfs/Выписка из решения УМС 2 от 12_10_2022.pdf'
import fifthFirst from '../src/pdfs/Положение об Учебно-методическом совете 2022-23.pdf'
import fifthSecond from '../src/pdfs/План_парламента_2022.PDF'
import fifthThird from '../src/pdfs/План Работы УМС 2022-2023гг.PDF';
import fifthFourth from '../src/pdfs/План работы методиста 2022-2023.PDF'
import fifthSixth from '../src/pdfs/План_ПС_2023-2-24.PDF'
import fifthSeventh from '../src/pdfs/План УР0001.PDF'
import fifthEighth from '../src/pdfs/План УР.PDF'
import fifthNineth from '../src/pdfs/План ОД.PDF'
import sixth from '../src/pdfs/План приема_2024-2025.pdf'
import sixthFirst from '../src/pdfs/ДИ главного бухглатера.pdf';
import sixthSecond from '../src/pdfs/ДИ коменданта хозяйственной службы учебных корпусов.pdf';
import sixthThird from '../src/pdfs/ДИ проректора по гос.языку и науки.pdf';
import sixthFourth from '../src/pdfs/ДИ проректора по учебно-воспитательной работе.pdf';
import sixthFifth from '../src/pdfs/ДИ ректора.pdf';
import sixthSixth from '../src/pdfs/ДИ руководителя HR и делопроизводства.pdf';
import sixthSeventh from '../src/pdfs/ДИ руководителя департамента развития и качества образования.pdf';
import sixthEighth from '../src/pdfs/ДИ руководителя управления делами.pdf';
import sixthNineth from '../src/pdfs/ДИ специалиста по МСК департамента развития и качества образования.pdf';
import seventh from '../src/pdfs/ДИ ученого секретаря Ученого совета(1).pdf';
import seventhFirst from '../src/pdfs/Должностная инструкция главного бухгалтера СУ(1).pdf';
import seventhSecond from '../src/pdfs/Должностная инструкция директора колледжа.pdf';

import seventhThird from '../src/pdfs/Положение «О системе менеджмента качества образования Учреждения «Салымбеков Университет»».pdf';
import seventhFourth from '../src/pdfs/Положение IT (1).pdf';
import seventhFifth from '../src/pdfs/Положение о взаимодействии структурных подразделений со стейкхолдерами СУ.pdf';
import seventhSixth from '../src/pdfs/Положение о правах, обязанностях и ответственности обучающихся СУ.pdf';

import seventhEighth from '../src/pdfs/Inha Technical College.pdf'
import seventhNineth from '../src/pdfs/INНA UNIVERSITY.pdf'
import eighth from '../src/pdfs/ITM MOU.pdf'
import eighthFirst from '../src/pdfs/lstinye University.pdf'
import eighthSecond from '../src/pdfs/LUC.pdf'
import eighthThird from '../src/pdfs/Salymbekov University.pdf'
import eighthFourth from '../src/pdfs/Договор «Мелон про» 24.04.2021.pdf'
import eighthFifth from '../src/pdfs/Договор IT сообщество «Чойро».pdf'
import eighthSixth from '../src/pdfs/Договор о сотрудничестве Адам.pdf'
import eighthSeventh from '../src/pdfs/Договор с КФУ.pdf'
import eighthEighth from '../src/pdfs/Договор Салымбеков Eotvos Lorand.pdf'
import eighthNineth from '../src/pdfs/Договор Салымбеков Kodolanyi Uni.pdf'
import nineth from '../src/pdfs/Договор Салымбеков METU.pdf'
import ninethFirst from '../src/pdfs/Договора с филиалами СБС (1).pdf'
import ninethSecond from '../src/pdfs/Меморандум Политех.pdf'
import ninethThird from '../src/pdfs/Трехсторнний меморандум с МОиН КР.pdf'
import ninethFourth from '../src/pdfs/Положение об организации научной работы.pdf'
import ninethFifth from '../src/pdfs/Положение об учебно-методическом комплексе дисциплины СУ.pdf'
import ninethSixth from '../src/pdfs/Регламент премирования 2024г.(обновленная версия).pdf'
import ninethSeventh from '../src/pdfs/CURRICULUM_Diploma in Multimedia Applications Area2_LINCOLN UNIVERSITY COLLEGE.pdf'
import ninethEighth from '../src/pdfs/LAST Diploma in Mobile Computing PA 4733.pdf'
import ninethNineth from '../src/pdfs/LAST Diploma in COMPUTER SCIENCE Area2_LUK.pdf'
import oneHundred from '../src/pdfs/План ПС-2024-25.PDF'
import oneHundredOne from '../src/pdfs/план_ПС_2022.PDF'
import oneHundredThree from '../src/pdfs/Положение об анкетирование 2024 (1).pdf'
import oneHundredFour from '../src/pdfs/Положение о подборе кадров колледжа 2024 (1).pdf'
import oneHundredFive from '../src/pdfs/Положение о МРС колледжа 2024 (1).pdf'
import oneHundredSix from '../src/pdfs/Памятка кураторов 2024 (1).pdf'
import oneHundredSeven from '../src/pdfs/Кадровая политика колледжа 2024 (1).pdf'
import oneHundredEight from '../src/pdfs/Шкала оценивания (1).pdf'
import oneHundredNine from '../src/pdfs/План развития МТБ на 2024-2025 (1).pdf'
import twoHundred from '../src/pdfs/Отчет с диаграммами 2024 (1).pdf'
import twoHundredOne from '../src/pdfs/Меморандум MISO (1).pdf'
import twoHundredTwo from '../src/pdfs/Анкетирование студентов колледжа 2023 (1).pdf'
import twoHundredThree from '../src/pdfs/Research4life (until 31.12.2025) (1).pdf'
import twoHundredFour from '../src/pdfs/Стратегический план СУ 2024-2029_compressed.pdf'
import twoHundredFive from '../src/pdfs/обьявление о вакансиях.pdf'

const pdfFiles = [
  { title: 'План', url: firstPdf },
  { title: 'Настольный Теннис 2024', url: secondPdf },
  { title: 'План УВР-2024', url: thirdPdf },
  { title: 'Кураторы', url: fourthPdf },
  { title: 'Лицензия колледжа', url: fifthPdf },
  { title: 'Свидетельство', url: sixthPdf },
  { title: 'График учебного процесса', url: seventhPdf },
  { title: 'Правила приема', url: eigthPdf },
  { title: 'План приема', url: tenthPdf },
  { title: 'Первый сертификат аккредитаций', url: eleventhPdf },
  { title: 'Второй сертификат аккредитаций', url: twelthPdf },
  { title: 'Третий сертификат аккредитаций', url:  lastpdf, thirteenthPdf },
  { title: 'Учебный план №1', url: fourteenthPdf },
  { title: 'Учебный план №2', url: fifteenthPdf },
  { title: 'Учебный план №3', url: sixteenthPdf },
  { title: 'Куболук', url: seventeenthPdf },
  { title: 'График экзаменов', url: eighteenthPdf },
  { title: 'Состав педсовета', url: nineteenthPdf },
  { title: 'Состав УМС', url: twentieth },
  { title: 'Состав СтудПарламента', url: twentiethFirst },
  { title: 'Состав Приемной Комиссии', url: twentiethSecond },
  { title: 'Состав Льготной Комиссии', url: twentiethThird },
  { title: 'Положение о кураторстве', url: twentiethFourth },
  { title: 'Этический кодекс студента', url: twentiethFifth },
  { title: 'Этический кодекс преподавателей', url: twentiethSixth },
  { title: 'Положение о рейтинге ППС', url: twentiethSeventh },
  { title: 'Положение о Ящике доверия', url: twentiethEighth },
  { title: 'Положение об МРСО', url: twentiethNineth },
  { title: 'Положение ООП', url: thirtieth },
  { title: 'Положение СМК СУ', url: thirtiethFirst },
  { title: 'Положение о департаменте HR', url: thirtiethSecond },
  { title: 'Положение о дисциплинарных взысканиях', url: thirtiethThird },
  { title: 'Положение о мотивационном фонде', url: thirtiethFourth },
  { title: 'Положение о повышении квалификации', url: thirtiethFifth },
  { title: 'Положение о рейтинге студентов', url: thirtiethSixth },
  { title: 'Положение о совете по качеству', url: thirtiethSeventh },
  { title: 'Положение о соцподдержке студентов', url: thirtiethEigth },
  { title: 'Положение об электронном документообороте', url: thirtiethNineth },
  { title: 'Учебный план', url: fourtieth},
  { title: 'Учебный план 2', url: fourtiethFirst},
  { title: 'Приказ ГАК', url: fourtiethSecond},
  { title: 'Отчет председателя ГАК', url: fourtiethThird},
  { title: 'Экзамен. ведомость 1 ГАК МГЭ', url: fourtiethFourth},
  { title: 'Протоколы 1-9 ГАК МГЭ', url: fourtiethFifth},
  { title: 'Приказ МОН КР об утверж. председателей ГАК', url: fourtiethSixth},
  { title: 'Отчет ГАК Междисц гос экз', url: fourtiethSeventh},
  { title: 'Протокол 1 УМС', url: fourtiethEigth},
  { title: 'Выписка из решения УМС', url: fourtiethNineth},
  { title: 'Выписка из решения УМС 2', url: fifth},
  { title: 'Положение об Учебно-методическом совете', url:fifthFirst},
  { title: 'План_парламента', url: fifthSecond},
  { title: 'План УМС', url: fifthThird},
  { title: 'план Работы методиста', url: fifthFourth},
  { title: 'План ПС', url: fifthSixth},
  { title: 'План УР001', url: fifthSeventh},
  { title: 'План УР', url: fifthEighth},
  { title: 'План ОД', url: fifthNineth},
  { title: 'План приема', url: sixth},
  { title: 'ДИ главного бухглатера', url: sixthFirst},
  { title: 'ДИ коменданта хозяйственной службы учебных корпусов', url: sixthSecond},
  { title: 'ДИ проректора по гос.языку и науки', url: sixthThird},
  { title: 'ДИ проректора по учебно-воспитательной работе', url: sixthFourth},
  { title: 'ДИ ректора', url: sixthFifth},
  { title: 'ДИ руководителя HR и делопроизводства', url: sixthSixth},
  { title: 'ДИ руководителя департамента развития и качества образования', url: sixthSeventh},
  { title: 'ДИ руководителя управления делами', url: sixthEighth},
  { title: 'ДИ специалиста по МСК департамента развития и качества образования', url: sixthNineth},
  { title: 'ДИ ученого секретаря Ученого совета', url: seventh},
  { title: 'Должностная инструкция главного бухгалтера СУ', url: seventhFirst},
  { title: 'Должностная инструкция директора колледжа', url: seventhSecond},
  { title: 'Положение «О системе менеджмента качества образования Учреждения «Салымбеков Университет»', url: seventhThird},
  { title: 'Положение IT', url: seventhFourth},
  { title: 'Положение о взаимодействии структурных подразделений со стейкхолдерами СУ', url: seventhFifth},
  { title: 'Положение о правах, обязанностях и ответственности обучающихся СУ', url: seventhSixth},
  { title: 'Inha Technical College', url: seventhEighth},
  { title: 'Inha University', url: seventhNineth},
  { title: 'ITM Univeristy', url: eighth},
  { title: 'Istinye University', url: eighthFirst},
  { title: 'Lincoln University', url: eighthSecond},
  { title: 'Salymbekov University', url: eighthThird},
  { title: 'Договор "Мелон про"', url: eighthFourth},
  { title: 'Договор IT сообщество "Чойро"', url: eighthFifth},
  { title: 'Договор о сотрудничестве Адам', url: eighthSixth},
  { title: 'Договор с КФУ', url: eighthSeventh},
  { title: 'Договор Салымбеков Eotvos Lorand', url: eighthEighth},
  { title: 'Договор Салымбеков Kodolanyi Uni', url: eighthNineth},
  { title: 'Договор Салымбеков METU', url: nineth},
  { title: 'Договора с филиалами СБС', url: ninethFirst},
  { title: 'Меморандум Политех', url: ninethSecond},
  { title: 'Трехсторнний меморандум с МОиН КР', url: ninethThird},
  { title: 'Положение об организации научной работы', url: ninethFourth},
  { title: 'Положение об учебно-методическом комплексе дисциплины', url: ninethFifth},
  { title: 'Регламент премирования', url: ninethSixth},
  { title: 'Курикулым мултимедиа программы', url: ninethSeventh},
  { title: 'Диплома мобильные вычисления', url: ninethEighth},
  { title: 'Диплома комьютерная наука', url: ninethNineth},
  { title: '24 pc', url: oneHundred},
  { title: '22 pc', url: oneHundredOne},
  { title: 'Положение об анкетировании', url: oneHundredThree},
  { title: 'О подборе кадров колледжа', url: oneHundredFour},
  { title: 'МРС', url: oneHundredFive},
  { title: 'Кураторов Памятка', url: oneHundredSix},
  { title: 'Кадровая политика колледжа', url: oneHundredSeven},
  { title: 'Шкала оценивания', url: oneHundredEight},
  { title: 'План развития МТБ 2024-2025', url: oneHundredNine},
  { title: 'Отчет с диаграммами 2024', url: twoHundred},
  { title: 'Меморандум MISO', url: twoHundredOne},
  { title: 'Анкетирование студентов колледжа 2023', url: twoHundredTwo},
  { title: 'Research4life', url: twoHundredThree},
  { title: 'Стратегический план СУ', url: twoHundredFour},
  { title: 'Вакансии', url: twoHundredFive}

];

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header pdfFiles={pdfFiles} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/college" element={<Main />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/multimediaprograms" element={<MultimediaPrograms />} />
          <Route path="/mobile" element={<MobileDevelopment />} />
          <Route path="/computerscience" element={<ComputerScience />} />
          <Route path="/firstyearprojects" element={<FirstYear />} />
          <Route path="/secondyearprojects" element={<SecondYear />} />
          <Route path="/thirdyearprojects" element={<ThirdYear />} />
          <Route path="/fourthyearprojects" element={<FourthYear />} />
          <Route path="/student-council" element={<StudentCouncil />} />
          <Route path="/debate-club" element={<DebateClub />} />
          <Route path="/tutors-movement" element={<TutorMovement />} />
          <Route path="/creative-groups" element={<CreativeTeams />} />
          <Route path="/information-system" element={<InformationSystem />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/social-support" element={<SocialSupport />} />
          <Route path="/psychological-support" element={<PhyschoHelp />} />
          <Route path="/student-service-center" element={<StudentService />} />
          <Route path="/adaptation-programs" element={<AdaptationPrograms />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/afterninthgrade" element={<AfterNinthGrade />} />
          <Route path="/aftereleventhgrade" element={<AfterEleventhGrade />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/collegeInfrastructure" element={<CollegeInfrastructure />} />
          <Route path="/admissionCommittee" element={<AdmissionCommittee />} />
          <Route path="/napravlenija-podgotovki" element={<Direction />} />
          <Route path="/stipendii-i-lgoty" element={<Scholarships />} />
          <Route path="/price" element={<Price />} />
          <Route path="/requiredDocuments" element={<Documents />} />
          <Route path="/admissionRegulations" element={<AdmissionsRegulations />} />
          <Route path="/selectionSchedule" element={<SelectionSchedule />} />
          <Route path="/documents/:documentId" element={<DocumentViewer pdfFiles={pdfFiles} />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/director" element={<Director />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/students" element={<CollegeStudentsPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path='/studentProjects' element={<StudentProjects/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
