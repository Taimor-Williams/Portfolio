import { useState } from 'react';
import './App.css';
import DropDown from './components/DropDown';
import About from './components/About';
import Scroll from './components/Scroll';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('');
  return (
    <div className='h-screen bg-gradient-to-r from-sky-600 to-indigo-500'>
      <Scroll className ="" 
      setCurrentPage = {setCurrentPage}></Scroll>
      <h2>{currentPage}</h2>
      {/* <Projects /> */}
      {currentPage == "About" && 
        <About />
      }
      {currentPage == "Projects" && 
        <Projects />
      }
    </div>
  );
}

export default App;
