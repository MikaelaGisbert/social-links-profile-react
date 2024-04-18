import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";

function Card(props) {
  const character = props.character
  // console.log(user);
  return (
      <div className="contenedorPrincipal">
        <UserDetails character={character} />
      </div>
  );
}

export default Card;
