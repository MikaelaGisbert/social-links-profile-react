import React from "react"
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails"
import ButtonSection from "./ButtonSection"
import "./Card.css";

function Card() {

  return (
    <div className="contenedorDinamico">
      <UserDetails/>
      <ButtonSection/>
    </div>

  )
}

export default Card;