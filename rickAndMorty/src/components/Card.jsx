import React from "react";
import UserDetails from "./UserDetails";
import Episodes from "./Episodes";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ character, episodes }) => {
  return (
    <div className="contenedorPrincipal">
      <UserDetails character={character} />
      <Episodes episodes={episodes} />
      <NavLink to="/">
      <button className="botones">HOME</button>
      </NavLink>
      
    </div>
  );
};

export default Card;