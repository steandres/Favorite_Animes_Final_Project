import { useState, useEffect } from 'react'
import Card from '../Components/Card'
import {useAnimeStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state, dispatch } = useAnimeStates();
  const [characters, setCharacters] = useState([]);
  
  // Función para obtener los personajes de la API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/seasons/2022/summer?sfw");
        const inf = await response.json();
        setCharacters(inf.data);  // Guardamos los personajes en el estado
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleFavorite = (character) => {
    dispatch({ type: "ADD_FAV", payload: character });
  };

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
      {characters.length > 0 ? (
          characters.map((character) => (
            <Card 
              key={character.mal_id} 
              character={character} 
              onFavorite={() => handleFavorite(character)} 
            />
          ))) : <h2>Loading characters...</h2>}
        
      </div>
    </main>
  )
}

export default Home