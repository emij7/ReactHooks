import '../styles/characters.css';
import { useContext, useEffect, useState, useReducer, useMemo } from "react";
import ThemeContext from '../context/ThemeContext';

const initialState={
    favs:[]
}
const favReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':
            return{  
                ...state,            
                favs:[...state.favs,action.payload]
            }
            ;
        case 'REM':
            return{
                favs: state.favs.filter ( items => items.id !== action.payload) 
            }
            ;
        default:
            return state
    }
}
const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(results=>results.json())
        .then(data=>setCharacters(data.results))
    });
    const theme = useContext(ThemeContext);

    const [state,dispatch]=useReducer(favReducer,initialState);

    const filteredCharacters = useMemo(() => 
        characters.filter((f)=>{
            return f.name.toLowerCase().includes(search.toLowerCase());
        })
    , [characters,search])

    const handleSearch=(event)=>{
        setSearch(event.target.value)
    }
    const handleClick=(newFav) =>{
        let search = false
        for(let i = 0;(i<state.favs.length);i++){
            if(state.favs[i].id===newFav.id){
                search = true;
            }
        }
        if(search===false){
            dispatch({type:'ADD', payload:newFav})
        }  
        console.log(state.favs)
    }
    const handleClickRem = (delFav)=>{
        dispatch({type:'REM', payload:delFav})
    }
    return(
        <div className={theme?'dark-mode':'light-mode'}>
            <div className="main__search">
                <h3 className='main__search-text'>Search character by name:</h3>
                <input type="text" value={search} onChange={handleSearch} />
            </div>
            <div className='img-cont'>{filteredCharacters.map(character =>{
                return (
                <div className="img-cont__img" key={character.id}>
                    <img src={character.image} alt="" />
                    <p className='img-cont__character-name'>{character.name}</p>
                    <button  type='button' onClick={()=>handleClick(character)}>Add to Fav.</button>
                    <button className='img-cont__button' type='button' onClick={()=>handleClickRem(character.id)}>Remove from Fav.</button>
                </div>
            )
            })}</div>
            <div>
                <h2>Favorites</h2>
                {state.favs.map(pers=>{
                    return(
                        <p key={pers.id}>{pers.name} {pers.gender}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default Characters;
