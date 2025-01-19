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

// **Импорты PDF-файлов**
import firstPdf from '../src/pdfs/планпс.pdf';
import secondPdf from '../src/pdfs/Настольный теннис 26 ноября 2024.pdf';
import thirdPdf from '../src/pdfs/План УВР-2024-25.PDF';
import fourthPdf from '../src/pdfs/Кураторы 2024-2025.docx';
import fifthPdf from '../src/pdfs/Лицензия колледжа (новая).pdf';
import sixthPdf from '../src/pdfs/СВИДЕТЕЛЬСТВО (1).jpg';
import seventhPdf from '../src/pdfs/График учебного процесса.pdf';
import eigthPdf from '../src/pdfs/Правила приема_2024-2025.pdf';
import tenthPdf from '../src/pdfs/План приема_2024-2025.pdf';
import eleventhPdf from '../src/pdfs/1. Institutional accreditation.pdf';
import twelthPdf from '../src/pdfs/2. International Institutional accreditation.pdf';
import thirteenthPdf from '../src/pdfs/3 CERTIFICATE with Appendix (Int. Program Accreditation).pdf';
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

const pdfFiles = [
  { title: 'План ', url: firstPdf },
  { title: 'Настольный Теннис 2024', url: secondPdf },
  { title: 'План УВР-2024', url: thirdPdf },
  { title: 'Кураторы', url: fourthPdf },
  { title: 'Лицензия колледжа', url: fifthPdf },
  { title: 'Свидетельство', url: sixthPdf },
  { title: 'Правила и план приема', url: eigthPdf },
  { title: 'Первый сертификат аккредитаций', url: eleventhPdf },
  { title: 'Второй сертификат аккредитаций', url: twelthPdf },
  { title: 'Третий сертификат аккредитаций', url: thirteenthPdf },
  { title: 'Учебный план №1', url: fourteenthPdf },
  { title: 'Учебный план №2', url: fifteenthPdf },
  { title: 'Учебный план №3', url: sixteenthPdf },
  { title: 'Куболук', url: seventeenthPdf },
  { title: 'График учебнего процесса', url: seventhPdf },
  { title: 'График экзаменов', url: eighteenthPdf },
  { title: 'Состав педсовета', url: nineteenthPdf},
  { title: 'Состав УМС', url: twentieth},
  { title: 'Состав СтудПарламента', url: twentiethFirst},
  { title: 'Состав Приемной Комиссии ', url: twentiethSecond},
  { title: 'Состав Льготной Комиссии', url: twentiethThird},
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
