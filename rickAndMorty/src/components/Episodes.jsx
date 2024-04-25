import React from "react";
import "./Episodes.css";

const Episodes = ({ episodes }) => { 
  return (
    <div className="contenedorEpisodes">
      <h1 className="title">Episodes</h1>
      {episodes.map((episode) => (
        <div className="Episodes" key={episode.id}>
          <h2 className="nameEp">{episode.name}</h2>
          <h2 className="nameEp">{episode.episode}</h2>
          <p className="airDate"> {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;