import React from "react";
import CharacterDetails from "./CharacterDetails";
import "./CardPersonajes.css";
import { NavLink } from "react-router-dom";

function CardPersonajes(props) {

  const character = props.character
  return (
    <NavLink className="nav-link" to={`/character?id=${character.id}`} >
      <div className="contenedorPrincipal1">
        <CharacterDetails character={character} />
      </div>
    </NavLink>
      
  );
}

export default CardPersonajes;