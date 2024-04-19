import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const character = props.character;
  console.log(character);
  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1>
      <h2 className="estado">{"Status: "+character.status}</h2>
      <p className="especie">{"Type: "+character.type}</p>
    </div>
  );
};

export default UserDetails;
