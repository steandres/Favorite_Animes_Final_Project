import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useAnimeStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useAnimeStates();

  const handleTheme = () => {
    dispatch({type: "TOGGLE_THEME"})
  }

  return (
    <nav>
     <h1>Animes</h1>
      <ul>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/contact`}>Contact </NavLink></li>
        <li><NavLink to={`/favs`}>Favs</NavLink></li>
        <div className = 'toggleSwitch'>
            <label>
                <input type = 'checkbox' onChange={handleTheme} checked={state.theme == "light"}/>
                <span className = 'slider'></span>
            </label>
        </div>
        
      </ul>
    </nav>
 
    
  )
}

export default Navbar