import React from "react"
import "./UserDetails.css"
const UserDetails = () => {
    return (

        <div className = "contenedor1">
            <div className = "cabeza">
                <img
                    className="imagen"
                    src="./avatar-jessica.jpeg"
                    alt="image not found"
                ></img>
            </div>
        <h1 className = "nombre">Jessica Randall</h1>
        <h2 className = "nacionalidad">London, United Kingdom</h2>
        <p className = "descripcion">"Front-end developer and avid reader."</p>
        </div>
    );
};

export default UserDetails;