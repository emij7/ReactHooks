import '../styles/characters.css';
import { useEffect, useState } from "react";

const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(results=>results.json())
        .then(data=>setCharacters(data.results))
    }, [])

    return(
        <div className="container">
            <div className='img-cont'>{characters.map(character =>{
                return (
                <div className="img-cont__img">
                    <img src={character.image} alt="" />
                    <p className='img-cont__character-name'>{character.name}</p>
                </div>
            )
            })}</div>
        </div>
    )
}
export default Characters;