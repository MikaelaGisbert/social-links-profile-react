import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const character = props.character;
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
      <h2 className="genero">{"Género: "+character.gender}</h2>
      <h2 className="estado">{"Estado: "+character.status}</h2>
      <h2 className="especie">{"Especie: "+character.species}</h2>
    </div>
  );
};

export default UserDetails;
