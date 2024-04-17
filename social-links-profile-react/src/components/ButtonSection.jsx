import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ socialLinks }) => {
      console.log(socialLinks);
      return (
        <div className="contenedor2">
              {socialLinks.map((socialLink) => (
            <button className="botones" key={socialLink.name}>{socialLink.name}</button>
          ))}
          </div>
      )
    };
export default ButtonSection;

// const ButtonSection = ({socialLinks}) => {
//     console.log(socialLinks)
//     return (

//         <div className = "contenedor2">
//             {/* {
//             socialLinks.map(
//                 socialLink=> <button key= {socialLink.name}>{socialLink.name} </button>)
//             } */}
//             <button className="botones">GitHub</button>
//             <button className="botones">Frontend Mentor</button>
//             <button className="botones">LinkedIn</button>
//             <button className="botones">Twitter</button>
//             <button className="botones">Instagram</button>
//         </div>
//     )
