import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ socialLinks }) => {
  console.log(socialLinks);
  return (
    <div className="contenedor2">
      {socialLinks.map((socialLink) => (
        <button className="botones" key={socialLink.name}>
          {socialLink.name}
        </button>
      ))}
    </div>
  );
};
export default ButtonSection;