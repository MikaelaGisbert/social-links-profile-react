import React from "react";
import "./CharacterDetails.css";

const CharacterDetails = (props) => {
  const character = props.character;
  return (
    <div className="contenedorP1">
      <div className="cabeza1">
        <img
          className="imagen1"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombreP">{character.name}</h1>
      <h2 className="generoP">{"Gender: "+character.gender}</h2>
      <h2 className="estadoP">{"Status: "+character.status}</h2>
      <h2 className="especieP">{"Species: "+character.species}</h2>
    </div>
  );
};

export default CharacterDetails;