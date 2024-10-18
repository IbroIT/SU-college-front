import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
import { Teachers } from './pages/Teachers';
import { AboutCollege } from './pages/AboutCollege';
import NotFound from './pages/NotFound';
import { MultimediaPrograms } from './pages/MultimediaPrograms';
import { ComputerScience } from './pages/ComputerScience';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/college' element={<AboutCollege/>}></Route>
        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/multimediaprograms' element={<MultimediaPrograms/>}></Route>
        <Route path='/computerscience' element={<ComputerScience/>}></Route>
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
