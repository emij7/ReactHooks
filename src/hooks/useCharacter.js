import { useEffect, useState } from 'react';

const useCharacter =(url)=>{
    const [characters, setCharacters] = useState([]); 
    useEffect(() => {
        fetch(url)
        .then(results=>results.json())
        .then(data=>setCharacters(data.results))
    },[url]);
    return characters;
}

export default useCharacter;