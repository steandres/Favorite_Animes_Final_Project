import Card from "../Components/Card";
import {useAnimeStates} from '../Components/utils/global.context'
import Button from "../Components/Button";

const Favs = () => {

  const {state, dispatch} = useAnimeStates();

  return (
    <div className="favs">
      <h1>Favorite Animes</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
            state.favs.map((character) => (
              <Card character={character} key={character.mal_id}/>
          ))) : <h2>There are no favorites</h2>}
      </div>
      <div className="resetFavs">
        {state.favs.length > 0 ? (
          <Button onClick={()=>dispatch({type: "RESET_FAVS"})}>Reset favorites</Button>
        ): null}
      </div>
    </div>
  );
};

export default Favs;
