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
function App() {

  return (
    <Router>
    <div className="App">
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<AboutCollege/>}></Route>

        <Route path='/director' element={<Director/>}></Route>
        <Route path="/search" element={<SearchResults />} />
        <Route path='/owner' element={<Owner/>}></Route>
       <Route path='/students' element={<CollegeStudentsPage/>}></Route>

        <Route path='/mission' element={<Mission/>}></Route>
        <Route path='/college' element={<Main/>}></Route>
        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>

        <Route path='/multimediaprograms' element={<MultimediaPrograms/>}></Route>
        <Route path='/mobile' element={<MobileDevelopment/>}></Route>
        <Route path='/computerscience' element={<ComputerScience/>}></Route>

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
