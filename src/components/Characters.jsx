import '../styles/characters.css';
import { useContext, useEffect, useState } from "react";
import ThemeContext from '../context/ThemeContext';

const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(results=>results.json())
        .then(data=>setCharacters(data.results))
    })
    const theme = useContext(ThemeContext)
    return(
        <div className={theme?'dark-mode':'light-mode'}>
            <div className='img-cont'>{characters.map(character =>{
                return (
                <div className="img-cont__img" key={character.id}>
                    <img src={character.image} alt="" />
                    <p className='img-cont__character-name'>{character.name}</p>
                </div>
            )
            })}</div>
        </div>
    )
}
export default Characters;
