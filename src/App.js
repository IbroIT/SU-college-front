import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import { Teachers } from './pages/Teachers';
import { AboutCollege } from './pages/AboutCollege';
import { NotFound } from './pages/NotFound';
import { MultimediaPrograms } from './pages/MultimediaPrograms';
import { ComputerScience } from './pages/ComputerScience';
import { MobileDevelopment } from './pages/MobileDevelopment';
import { Main } from './pages/Main';
import { AfterNinthGrade } from './pages/AftrerNinthGrade';
import { FAQ } from './pages/FAQ';
import {AfterEleventhGrade} from './pages/AfterEleventhGrade'
import { Contacts } from './pages/Contacts';
import SearchResults from './components/SearchBar/Search';
import CollegeStudentsPage from './pages/Students/Students';
import { Owner } from './pages/Owner';
import { Director } from './pages/Director';
import { Mission } from './pages/Mission';
import { News } from './pages/News';
import { StudentCouncil } from './pages/StudentCouncil';
import { DebateClub } from './pages/DebateClub';
import { TutorMovement } from './pages/Tutors';
import CreativeTeams from './pages/Creative';
import DocumentViewer from './pages/DocumentViewer';
import firstPdf from '../src/pdfs/планпс.pdf'
import secondPdf from '../src/pdfs/Настольный теннис 26 ноября 2024.pdf'
import thirdPdf from '../src/pdfs/План УВР-2024-25.PDF'
import fourthPdf from '../src/pdfs/Кураторы 2024-2025.docx'
import fifthPdf from '../src/pdfs/Лицензия колледжа (новая).pdf'
import sixthPdf from '../src/pdfs/СВИДЕТЕЛЬСТВО (1).jpg'
import seventhPdf from '../src/pdfs/График учебного процесса.pdf'
import eigthPdf from '../src/pdfs/Правила приема_2024-2025.pdf'
import tenthPdf from '../src/pdfs/План приема_2024-2025.pdf'
import eleventhPdf from '../src/pdfs/1. Institutional accreditation.pdf'
import twelthPdf from '../src/pdfs/2. International Institutional accreditation.pdf'
import thirteenthPdf from '../src/pdfs/3 CERTIFICATE with Appendix (Int. Program Accreditation).pdf'
import fourteenthPdf from '../src/pdfs/УП_СПО_КН_20224.PDF'
import fifteenthPdf from '../src/pdfs/УП_СПО_МВ_20224.PDF'
import sixteenthPdf from '../src/pdfs/УП_СПО_МП_20224.PDF'
import seventeenthPdf from '../src/pdfs/КҮБѲЛҮК.jpg'
import { InformationSystem } from './pages/InformationSystem';
import { Resources } from './pages/Resources';
import { SocialSupport } from './pages/SocialSupport';
import { PhyschoHelp } from './pages/PhyschoHelp';
import { StudentService } from './pages/StudentService';
import { AdaptationPrograms } from './pages/AdaptationPrograms';
import { Instructions } from './pages/Instructions';
import { AdmissionCommittee } from './pages/AdmissionsCommittee';
import { Direction } from './pages/Direction';
import { Scholarships } from './pages/Scholarships';
import { Price } from './pages/Price';
import { AdmissionsRegulations } from './pages/AdmissionsRegulations';
import { Documents } from './pages/Documents';
import { SelectionSchedule } from './pages/SelectionSchedule';
import SecondYear from './pages/SecondYear';
import FirstYear from './pages/FirstYear';
import ThirdYear from './pages/Third';
import FourthYear from './pages/Fourth';
import { CollegeInfrastructure } from './pages/CollegeInfrastructure';
const pdfFiles = [
    { title: 'План ', url: firstPdf },
    { title: 'Настольный Теннис 2024', url: secondPdf },
    { title: 'План УВР-2024', url: thirdPdf },
    { title: 'Кураторы', url: fourthPdf },
    { title: 'Лицензия колледжа', url: fifthPdf },
    { title: 'Свидетельство', url: sixthPdf},
    { title: 'Правила и план приема', url: eigthPdf},
    { title: 'Первый сертификат аккредитаций', url: eleventhPdf},
    { title: 'Второй сертификат аккредитаций', url: twelthPdf},
    { title: 'Третий сертификат аккредитаций', url: thirteenthPdf},
    { title: 'Учебный план №1', url: fourteenthPdf},
    { title: 'Учебный план №2', url: fifteenthPdf},
    { title: 'Учебный план №3', url: sixteenthPdf},
    { title: 'Куболук', url: seventeenthPdf},
    { title: 'График учебнего процесса', url: seventhPdf}
  ];

const pdfFilesForStudents = [
]

const pdfFileForApplicants = [
]
function App() {
   
  return (
    <Router>
    <div className="App">
      <ScrollToTop/>
      <Header pdfFiles={pdfFiles} pdfFilesForStudents={pdfFilesForStudents}/>
      <Routes>

        <Route path='/director' element={<Director/>}></Route>
        <Route path="/search" element={<SearchResults />} />
        <Route path='/owner' element={<Owner/>}></Route>
       <Route path='/students' element={<CollegeStudentsPage/>}></Route>



       <Route path='/collegeInfrastructure' element={<CollegeInfrastructure/>}></Route>
       <Route path='/admissionCommittee' element={<AdmissionCommittee/>}></Route>
       <Route path='/napravlenija-podgotovki' element={<Direction/>}></Route>
       <Route path='/stipendii-i-lgoty' element={<Scholarships/>}></Route>
       <Route path='/price' element={<Price/>}></Route>
       <Route path='/requiredDocuments' element={<Documents/>}></Route>
       <Route path='/admissionRegulations' element={<AdmissionsRegulations/>}></Route>
       <Route path='/selectionSchedule' element={<SelectionSchedule/>}></Route>


       <Route path="/documents/:documentId" element={<DocumentViewer pdfFiles={pdfFiles} />} />
       <Route path="/documentsApplicants/:documentId" element={<DocumentViewer pdfFiles={pdfFileForApplicants} />} />
       <Route path="/documents/:documentId" element={<DocumentViewer pdfFiles={pdfFiles} />} />

        <Route path='/mission' element={<Mission/>}></Route>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/college' element={<Main/>}></Route>

        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/news' element={<News/>}></Route>

        <Route path='/multimediaprograms' element={<MultimediaPrograms/>}></Route>
        <Route path='/mobile' element={<MobileDevelopment/>}></Route>
        <Route path='/computerscience' element={<ComputerScience/>}></Route>
         
         <Route path='/firstyearprojects' element={<FirstYear/>}></Route>
         <Route path='/secondyearprojects' element={<SecondYear/>}></Route>
         <Route path='/thirdyearprojects' element={<ThirdYear/>}></Route>
         <Route path='/fourthyearprojects' element={<FourthYear/>}></Route>

        <Route path='/student-council' element={<StudentCouncil/>}></Route>
        <Route path='/debate-club' element={<DebateClub/>}></Route>
        <Route path='/tutors-movement' element={<TutorMovement/>}></Route>
        <Route path='/creative-groups' element={<CreativeTeams/>}></Route>
        <Route path='/information-system' element={<InformationSystem/>}></Route>
        <Route path='/resources' element={<Resources/>}></Route>
        <Route path='/social-support' element={<SocialSupport/>}></Route>
        <Route path='/psychological-support' element={<PhyschoHelp/>}></Route>
        <Route path="/student-service-center" element={<StudentService/>}></Route>
        <Route path='/adaptation-programs' element={<AdaptationPrograms/>}></Route>
        <Route path='/instructions'element={<Instructions/>}> </Route>


        <Route path='/afterninthgrade' element={<AfterNinthGrade/>}></Route>
        <Route path='/aftereleventhgrade' element={<AfterEleventhGrade/>}></Route>


        <Route path="*" element={<NotFound/>} /> 
        
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;