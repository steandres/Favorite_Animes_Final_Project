import { Link } from "react-router-dom";
import {useAnimeStates} from '../Components/utils/global.context'
//import { profileImg } from '../Components/utils/imagesImport.js'

const Card = ({ character }) => {

  //const {state, dispatch} = useDentistStates();
  const {state, dispatch} = useAnimeStates();

  const isFav = state.favs.some((fav) => fav.mal_id === character.mal_id);

  const handleFav = () => {
    dispatch({
      type: isFav ? "DEL_FAV" : "ADD_FAV",
      payload: character,
    });
  };

  return (
    <div className="card" >
      <img src={character.images.jpg.image_url} alt={character.title} />
      <i
        className={`fa-solid fa-star ${isFav ? 'checked' : ''}`}
        onClick={handleFav}
      ></i>
      <Link to={`/anime/${character.mal_id}`}>{character.title}</Link>
      {isFav ? (
        <button onClick={handleFav} className="favButton">
          Remove from favorites
        </button>
      ) : (
        <button onClick={handleFav} className="favButton">
          Add to favorites
        </button>        
        )}
    </div>
  );
};

export default Card;
