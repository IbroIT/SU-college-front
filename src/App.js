import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
