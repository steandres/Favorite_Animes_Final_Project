export const reducer = (state, action) =>{
    switch(action.type){
      case "API_RESPONSE":
        return {...state, api: action.payload}
      case "LOCALSTORAGE":
        return {...state, favs: action.payload}
      case "ADD_FAV":
        return {...state, favs: [...state.favs, action.payload]}
      case "DEL_FAV":
        return {...state, favs: state.favs.filter((anime) => anime.mal_id != action.payload.mal_id)}
      case "TOGGLE_THEME":
        return {...state, theme: state.theme == "light" ? "dark" : "light"}
      case "RESET_FAVS":
        return {...state, favs: []}
      default:
          return state;
    }
  }