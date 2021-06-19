import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';

function App() {
  const [darkMode,setDarkMode] = useState(false);
    const handleClick = ()=>{
        setDarkMode(!darkMode)
        
    }
  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={darkMode?'dark-mode':'light-mode'}>
        <button type='button' className='main__button' onClick={handleClick}>{darkMode?('Light Mode'):('Dark Mode')}</button>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
