import '../styles/header.css'


const Header = () => {
    // document.getElementById("color-container").classList.toggle('header--light')
    return (
        <div id='color-container'>
            <h1>React Hooks</h1>
            {/* <button type='button' className='main__button' onClick={()=>setDarkMode(!darkMode)}>{darkMode?('Dark Mode 2'):('Light Mode 2')}</button> */}
        </div>
    );
}

export default Header;