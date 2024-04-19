import React from "react";
import UserDetails from "./UserDetails";
import Episodes from "./Episodes";
import "./Card.css";

function Card(props) {
  const character = props.character
  const episode = props.episode
  // console.log(user);
  return (
      <div className="contenedorPrincipal">
        <UserDetails character={character} />
        <Episodes episode={episode}/>
        <button className="botones">HOME</button>
      </div>
  );
}

export default Card;