import React from "react";
import "./UserDetails.css";

// const UserDetails = (props) => {
//   const [user, setUser] = useState({});
//   setUser(props.user);

const UserDetails = ({user}) => {
  // const { user } = props;

  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={user.avatar}
          alt={`avatar de ${user.name}`}
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <h2 className="nacionalidad">{user.location}</h2>
      <p className="descripcion">{user.description}</p>
    </div>
  )
};

export default UserDetails;
