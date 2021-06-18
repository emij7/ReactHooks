import '../styles/header.css'
import { useState } from "react";

const Header = () => {
    const [darkMode,setDarkMode] = useState(false);
    const handleClick = ()=>{
        setDarkMode(!darkMode)
        document.getElementById("color-container").classList.toggle('header--light')
    }

    return (
        <div id='color-container' className="header--light">
            <h1>React Hooks</h1>
            <button type='button' className='main__button' onClick={handleClick}>{darkMode?('Light Mode'):('Dark Mode')}</button>
            {/* <button type='button' className='main__button' onClick={()=>setDarkMode(!darkMode)}>{darkMode?('Dark Mode 2'):('Light Mode 2')}</button> */}
        </div>
    );
}

export default Header;